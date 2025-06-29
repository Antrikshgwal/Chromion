"use client";
import { ethers } from "ethers";
import ABI from "../abi.json"
import { useWallet } from "../../../hooks /useWallet";


import {
  TrendingUp,
  Upload,
  DollarSign,
  Clock,
  CheckCircle,
  Wallet,
} from "lucide-react";
import {useState , useEffect} from "react";

interface Invoice {
  id: string;
  amount: number;
  dueDate: string;
  customer: string;
  status: "pending" | "funded" | "repaid";
  funded?: number;
  apy?: number;
}

const sampleInvoices: Invoice[] = [
  {
    id: "1",
    amount: 5000,
    dueDate: "2025-07-15",
    customer: "TechCorp Ltd",
    status: "funded",
    funded: 4750,
    apy: 6.2,
  },
  {
    id: "2",
    amount: 3200,
    dueDate: "2025-07-28",
    customer: "Design Studio",
    status: "pending",
  },
  {
    id: "3",
    amount: 8500,
    dueDate: "2025-08-10",
    customer: "Manufacturing Co",
    status: "repaid",
    funded: 8075,
  },
];

const BusinessDashboard = () => {

  const { connectWallet, signer, address
, isConnected, provider
    } = useWallet();



  // const [signer, setSigner] = useState<any>(null);
  // const [provider, setProvider] = useState<any>(null);
  const [file, setFile] = useState<File>();
  const [uploading, setUploading] = useState(false);
  const [url, setUrl] = useState<null | {
    fileUrl: string;
    metadataUrl: string;
    message: string;
  }>(null);
  const [cid, setCid] = useState<null | {
    fileCid: string;
    metadataCid: string;
  }>(null);
  const [companyName, setCompanyName] = useState("");
  const [invoiceAmount, setInvoiceAmount] = useState("");
  const [askAmount, setAskAmount] = useState("");

  const handleConnect = async () => {
    await connectWallet();
  };

  // ✅ Cleanly initializes provider and signer
  // const initProvider = async () => {
  //   try {
  //     if (typeof window !== "undefined" && (window as any).ethereum) {
  //       const prov = new ethers.BrowserProvider((window as any).ethereum);
  //       await prov.send("eth_requestAccounts", []);
  //       const sign = await prov.getSigner();
  //       setProvider(prov);
  //       setSigner(sign);
  //       return sign;
  //     } else {
  //       alert("MetaMask not installed");
  //       return null;
  //     }
  //   } catch (err) {
  //     console.error("Error initializing provider:", err);
  //     return null;
  //   }
  // };

  // ✅ File handler
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFile(e.target?.files?.[0]);
  };

  // ✅ Main upload flow
  const uploadFile = async () => {
    try {
      if (!file) {
        alert("No file selected");
        return;
      }

      setUploading(true);

      const data = new FormData();
      data.set("file", file);

      const metadata = JSON.stringify({
        companyName,
        invoiceAmount,
        askAmount,
      });
      data.set("metadata", metadata);

      const uploadRequest = await fetch("/api/files", {
        method: "POST",
        body: data,
      });

      const res = await uploadRequest.json();

      if (!uploadRequest.ok) {
        throw new Error(res.error || "Failed to upload file");
      }

      setUrl({
        fileUrl: res.fileUrl,
        metadataUrl: res.metadataUrl,
        message: res.message,
      });
      setCid({
        fileCid: res.fileCid,
        metadataCid: res.metadataCid,
      });

      console.log("File and metadata uploaded, now storing CID...");

      await storeCid(res.fileCid, res.metadataCid);
    } catch (e) {
      console.error("Error during upload:", e);
      alert("Trouble uploading file");
    } finally {
      setUploading(false);
    }
  };

  // ✅ Store CID on chain
  const storeCid = async (fileCid: string, metadataCid: string) => {
    try {
      let _signer = signer;

      if (!_signer) {
        const wallet = await connectWallet();
        _signer = wallet?.signer ?? null;
        if (!_signer) {
          alert("Please connect your wallet first");
          return;
        }
      }

      if (!_signer) {
        alert("Wallet not connected");
        return;
      }

      const contractAddress = "0xD07cd1448570E4E45388B0d9FF5ffddDb59D7218";
      const contractABI = ABI.abi;

      const contract = new ethers.Contract(contractAddress, contractABI, _signer);

      const tx = await contract.storeCid({ Dcid: metadataCid, Fcid: fileCid });
      await tx.wait();

      alert("CIDs stored successfully!");
    } catch (error) {
      console.error("Error storing CIDs:", error);
      alert("Failed to store CIDs");
    }
  };
  return (

  <div className="min-h-screen bg-gray-50 text-black">

    <header className="bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-400 to-purple-500 rounded-lg flex items-center justify-center">
              <DollarSign className="h-5 w-5 text-white" />
            </div>
            <span className="text-xl font-bold">FlowVault Business</span>
          </div>
          <div className="flex items-center space-x-4">
            <button className="p-2 hover:bg-gray-100 rounded-lg">
              <Wallet className="h-5 w-5" />
            </button>
            <div className="w-8 h-8 bg-blue-600 rounded-full"></div>
          </div>
        </div>
      </div>
    </header>
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Total Funded</p>
              <p className="text-2xl font-bold text-gray-900">$16,700</p>
            </div>
            <DollarSign className="h-8 w-8 text-green-500" />
          </div>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Active Invoices</p>
              <p className="text-2xl font-bold text-gray-900">2</p>
            </div>
            <Clock className="h-8 w-8 text-blue-500" />
          </div>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">DeFi Earnings</p>
              <p className="text-2xl font-bold text-gray-900">$127</p>
            </div>
            <TrendingUp className="h-8 w-8 text-purple-500" />
          </div>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Success Rate</p>
              <p className="text-2xl font-bold text-gray-900">100%</p>
            </div>
            <CheckCircle className="h-8 w-8 text-green-500" />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-1">
          <div className="bg-white p-6 rounded-xl shadow-sm">
          <h2 className="text-2xl font-bold mb-4 text-center">Submit Invoice</h2>

<div className="flex flex-col gap-4">
  <div>
    <label htmlFor="business" className="block font-medium mb-1">
      Company Name
    </label>
    <input
      type="text"
      id="business"
      placeholder="Your company name"
      value={companyName}
      onChange={(e) => setCompanyName(e.target.value)}
      className="w-full border border-gray-300 rounded-md p-2"
    />
  </div>

  <div>
    <label htmlFor="InvoiceAmt" className="block font-medium mb-1">
      Invoice Amount
    </label>
    <input
      type="text"
      id="InvoiceAmt"
      placeholder="Enter invoice amount"
      value={invoiceAmount}
      onChange={(e) => setInvoiceAmount(e.target.value)}
      className="w-full border border-gray-300 rounded-md p-2"
    />
  </div>

  <div>
    <label htmlFor="askAmt" className="block font-medium mb-1">
      Amount Asked
    </label>
    <input
      type="text"
      id="askAmt"
      placeholder="Enter the lend amount"
      value={askAmount}
      onChange={(e) => setAskAmount(e.target.value)}
      className="w-full border border-gray-300 rounded-md p-2"
    />
  </div>

  <div>
    <label htmlFor="file" className="block font-medium mb-1">
      Upload Invoice
    </label>
    <input
      type="file"
      id="file"
      onChange={handleChange}
      accept=".pdf,.jpg,.jpeg,.png"
      className="w-full"
    />
  </div>

  <button
    type="button"
    onClick={async () => {
      await handleConnect();
      await uploadFile();
    }}

    disabled={uploading}
    className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition disabled:opacity-50"
  >
    {uploading ? "Uploading..." : "Submit"}
  </button>

  {url && (
<div className="mt-4 text-sm text-green-600 break-all">
<p><strong>Message:</strong> {url.message}</p>
<p>
<strong>File URL:</strong>{" "}
<a href={url.fileUrl} target="_blank" className="underline text-blue-600">
{url.fileUrl}
</a>
</p>
<p>
<strong>Metadata URL:</strong>{" "}
<a href={url.metadataUrl} target="_blank" className="underline text-blue-600">
{url.metadataUrl}
</a>
<p><strong>File CID:</strong> {cid?.fileCid}</p>
<p><strong>Invoice CID:</strong> {cid?.metadataCid}</p>
<p></p>
</p>
</div>
)}

</div>


          </div>
        </div>
        <div className="lg:col-span-2">
          <div className="bg-white rounded-xl shadow-sm">
            <div className="p-6 border-b">
              <h3 className="text-lg font-semibold">Your Invoices</h3>
            </div>
            <div className="divide-y">
              {sampleInvoices.map((invoice) => (
                <div key={invoice.id} className="p-6 hover:bg-gray-50">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-semibold">{invoice.customer}</h4>
                      <p className="text-sm text-gray-600">
                        Due: {invoice.dueDate}
                      </p>
                      {invoice.apy && (
                        <p className="text-sm text-green-600">
                          Collateral APY: {invoice.apy}%
                        </p>
                      )}
                    </div>
                    <div className="text-right">
                      <p className="text-lg font-semibold">
                        ${invoice.amount.toLocaleString()}
                      </p>
                      {invoice.funded && (
                        <p className="text-sm text-gray-600">
                          Funded: ${invoice.funded.toLocaleString()}
                        </p>
                      )}
                      <span
                        className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${
                          invoice.status === "funded"
                            ? "bg-blue-100 text-blue-800"
                            : invoice.status === "repaid"
                            ? "bg-green-100 text-green-800"
                            : "bg-yellow-100 text-yellow-800"
                        }`}
                      >
                        {invoice.status}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>)
};

export default BusinessDashboard;
