import {
  TrendingUp,
  Upload,
  DollarSign,
  Clock,
  CheckCircle,
  Wallet,
} from "lucide-react";

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

const BusinessDashboard = () => (
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
            <h3 className="text-lg font-semibold mb-4">Upload New Invoice</h3>
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-blue-400 transition-colors cursor-pointer">
              <Upload className="h-8 w-8 text-gray-400 mx-auto mb-2" />
              <p className="text-sm text-gray-600">
                Drop your invoice here or click to browse
              </p>
            </div>
            <button className="w-full mt-4 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors">
              Upload Invoice
            </button>
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
  </div>
);

export default BusinessDashboard;
