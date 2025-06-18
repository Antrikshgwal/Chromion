import {
  TrendingUp,
  DollarSign,
  CheckCircle,
  BarChart3,
  Wallet,
} from "lucide-react";

interface Investment {
  id: string;
  invoiceAmount: number;
  investedAmount: number;
  expectedReturn: number;
  daysLeft: number;
  businessName: string;
  status: "active" | "completed";
}

const sampleInvestments: Investment[] = [
  {
    id: "1",
    invoiceAmount: 5000,
    investedAmount: 4750,
    expectedReturn: 190,
    daysLeft: 29,
    businessName: "GreenTech Solutions",
    status: "active",
  },
  {
    id: "2",
    invoiceAmount: 3200,
    investedAmount: 3040,
    expectedReturn: 122,
    daysLeft: 42,
    businessName: "Local Bakery",
    status: "active",
  },
  {
    id: "3",
    invoiceAmount: 7500,
    investedAmount: 7125,
    expectedReturn: 285,
    daysLeft: 0,
    businessName: "Marketing Agency",
    status: "completed",
  },
];

const InvestorDashboard = () => (
  <div className="min-h-screen bg-gray-50 text-black">
    <header className="bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-400 to-purple-500 rounded-lg flex items-center justify-center">
              <DollarSign className="h-5 w-5 text-white" />
            </div>
            <span className="text-xl font-bold">FlowVault Investor</span>
          </div>
          <div className="flex items-center space-x-4">
            <button className="p-2 hover:bg-gray-100 rounded-lg">
              <Wallet className="h-5 w-5" />
            </button>
            <div className="w-8 h-8 bg-green-600 rounded-full"></div>
          </div>
        </div>
      </div>
    </header>

    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Portfolio Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Total Invested</p>
              <p className="text-2xl font-bold text-gray-900">$14,915</p>
            </div>
            <DollarSign className="h-8 w-8 text-blue-500" />
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Expected Returns</p>
              <p className="text-2xl font-bold text-gray-900">$597</p>
            </div>
            <TrendingUp className="h-8 w-8 text-green-500" />
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Active Investments</p>
              <p className="text-2xl font-bold text-gray-900">2</p>
            </div>
            <BarChart3 className="h-8 w-8 text-purple-500" />
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Avg. Return</p>
              <p className="text-2xl font-bold text-gray-900">4.0%</p>
            </div>
            <CheckCircle className="h-8 w-8 text-green-500" />
          </div>
        </div>
      </div>

      {/* Investment Opportunities & Portfolio */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Available Investments */}
        <div className="bg-white rounded-xl shadow-sm">
          <div className="p-6 border-b">
            <h3 className="text-lg font-semibold">Investment Opportunities</h3>
          </div>
          <div className="p-6">
            <div className="border border-gray-200 rounded-lg p-4 hover:border-blue-300 transition-colors cursor-pointer">
              <div className="flex justify-between items-start mb-2">
                <h4 className="font-semibold">RetailCorp Invoice</h4>
                <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs">
                  New
                </span>
              </div>
              <p className="text-sm text-gray-600 mb-3">
                Due in 45 days • Credit Score: A+
              </p>
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-sm text-gray-600">Invoice Amount</p>
                  <p className="font-semibold">$12,500</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Expected Return</p>
                  <p className="font-semibold text-green-600">4.2% ($500)</p>
                </div>
              </div>
              <button className="w-full mt-4 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors">
                Invest Now
              </button>
            </div>
          </div>
        </div>

        {/* Current Investments */}
        <div className="bg-white rounded-xl shadow-sm">
          <div className="p-6 border-b">
            <h3 className="text-lg font-semibold">Your Investments</h3>
          </div>
          <div className="divide-y">
            {sampleInvestments.map((investment) => (
              <div key={investment.id} className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-semibold">{investment.businessName}</h4>
                  <span
                    className={`px-2 py-1 rounded-full text-xs ${
                      investment.status === "active"
                        ? "bg-blue-100 text-blue-800"
                        : "bg-green-100 text-green-800"
                    }`}
                  >
                    {investment.status}
                  </span>
                </div>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="text-gray-600">Invested</p>
                    <p className="font-semibold">
                      ${investment.investedAmount.toLocaleString()}
                    </p>
                  </div>
                  <div>
                    <p className="text-gray-600">Expected Return</p>
                    <p className="font-semibold text-green-600">
                      ${investment.expectedReturn}
                    </p>
                  </div>
                </div>
                {investment.status === "active" && (
                  <div className="mt-2">
                    <p className="text-sm text-gray-600">
                      {investment.daysLeft} days remaining
                    </p>
                    <div className="w-full bg-gray-200 rounded-full h-2 mt-1">
                      <div
                        className="bg-blue-600 h-2 rounded-full"
                        style={{
                          width: `${((60 - investment.daysLeft) / 60) * 100}%`,
                        }}
                      ></div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default InvestorDashboard;
