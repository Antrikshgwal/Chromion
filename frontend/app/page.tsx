"use client";

import { useState } from "react";

export default function Home() {
  const [file, setFile] = useState<File>();
  const [url, setUrl] = useState<null | {
    fileUrl: string;
    metadataUrl: string;
    message: string;
  }>(null);

  const [uploading, setUploading] = useState(false);
  const [companyName, setCompanyName] = useState("");
  const [invoiceAmount, setInvoiceAmount] = useState("");
  const [askAmount, setAskAmount] = useState("");

  const uploadFile = async () => {
    try {
      if (!file) {
        alert("No file selected");
        return;
      }

      setUploading(true);

      const data = new FormData();
      data.set("file", file);

      // Attach other fields in JSON format
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

      const signedUrl = await uploadRequest.json();
      setUrl(signedUrl);
      setUploading(false);
    } catch (e) {
      console.error(e);
      setUploading(false);
      alert("Trouble uploading file");
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFile(e.target?.files?.[0]);
  };

  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-100 p-4 text-black">
      <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-6">
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
            onClick={uploadFile}
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
    </p>
  </div>
)}

        </div>
      </div>
    </main>
  );
}
