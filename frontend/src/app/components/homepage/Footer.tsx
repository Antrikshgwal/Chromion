import { DollarSign } from "lucide-react";
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="flex items-center justify-center space-x-2 mb-4">
          <div className="w-8 h-8 bg-gradient-to-r from-blue-400 to-purple-500 rounded-lg flex items-center justify-center">
            <DollarSign className="h-5 w-5 text-white" />
          </div>
          <span className="text-xl font-bold">FlowVault</span>
        </div>
        <p className="text-gray-400">
          © 2025 FlowVault. All rights reserved. Empowering businesses with
          instant cash flow.
        </p>
      </div>
    </footer>
  );
};
export default Footer;
