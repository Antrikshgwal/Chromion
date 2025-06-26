import { DollarSign, ChevronDown, LogOut, Wallet, Hash } from "lucide-react";
import { ethers } from "ethers";
import { useState, useEffect, useRef } from "react";

const Navbar = () => {
  const [etherBalance, setEtherBalance] = useState(0);
  const [totalTransactions, setTotalTransactions] = useState(0);
  const [userAccount, setUserAccount] = useState("");
  const [connected, setConnected] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const dropdownRef = useRef(null);

  // Check if wallet was previously connected
  const checkPreviousConnection = async () => {
    if (!window.ethereum) return;

    try {
      const accounts = await window.ethereum.request({
        method: "eth_accounts",
      });

      if (accounts.length > 0) {
        setConnected(true);
        await getAccountDetails(accounts[0]);
      }
    } catch (error) {
      console.error("Error checking previous connection:", error);
    }
  };

  const getAccountDetails = async (accountAddress = null) => {
    if (!window.ethereum) {
      console.error("MetaMask is not installed");
      return;
    }

    const provider = new ethers.providers.Web3Provider(window.ethereum);
    setLoading(true);

    try {
      let account;
      if (accountAddress) {
        account = accountAddress;
      } else {
        const accounts = await provider.send("eth_requestAccounts", []);
        account = accounts[0];
      }

      setUserAccount(account);

      const balanceWei = await provider.getBalance(account);
      const balanceEth = ethers.utils.formatEther(balanceWei);
      setEtherBalance(parseFloat(balanceEth).toFixed(4));

      const transactionCount = await provider.getTransactionCount(account);
      setTotalTransactions(transactionCount);

      console.log("Account Address:", account);
      console.log("Balance:", balanceEth, "ETH");
      console.log("Total Transactions:", transactionCount);
    } catch (error) {
      console.error("Error fetching account details:", error);
      setConnected(false);
    } finally {
      setLoading(false);
    }
  };

  const connectWallet = async () => {
    if (!window.ethereum) {
      alert("Please install MetaMask to connect your wallet");
      return;
    }

    try {
      setLoading(true);
      await getAccountDetails();
      setConnected(true);
    } catch (error) {
      console.error("Error connecting wallet:", error);
      setLoading(false);
    }
  };

  const disconnectWallet = () => {
    setConnected(false);
    setUserAccount("");
    setEtherBalance(0);
    setTotalTransactions(0);
    setDropdownOpen(false);
  };

  const formatAddress = (address) => {
    if (!address) return "";
    return `${address.slice(0, 6)}...${address.slice(-4)}`;
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Check for previous connection on component mount
  useEffect(() => {
    checkPreviousConnection();
  }, []);

  // Listen for account changes
  useEffect(() => {
    if (window.ethereum) {
      const handleAccountsChanged = (accounts) => {
        if (accounts.length === 0) {
          disconnectWallet();
        } else if (connected) {
          getAccountDetails(accounts[0]);
        }
      };

      window.ethereum.on("accountsChanged", handleAccountsChanged);

      return () => {
        window.ethereum.removeListener(
          "accountsChanged",
          handleAccountsChanged
        );
      };
    }
  }, [connected]);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
              <DollarSign className="h-5 w-5 text-white" />
            </div>
            <span className="text-2xl font-bold text-gray-900">FlowVault</span>
          </div>

          <nav className="hidden md:flex space-x-8">
            <a
              href="#how-it-works"
              className="relative inline-block font-semibold text-gray-600 hover:text-gray-900 transition-colors after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-gray-900 hover:after:w-full after:transition-all after:duration-300"
            >
              How it Works
            </a>
            <a
              href="#why-us"
              className="relative inline-block font-semibold text-gray-600 hover:text-gray-900 transition-colors after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-gray-900 hover:after:w-full after:transition-all after:duration-300"
            >
              Why us
            </a>
            <a
              href="#about-us"
              className="relative inline-block font-semibold text-gray-600 hover:text-gray-900 transition-colors after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-gray-900 hover:after:w-full after:transition-all after:duration-300"
            >
              About us
            </a>
          </nav>

          <div className="hidden md:flex space-x-3">
            {connected ? (
              <div className="relative" ref={dropdownRef}>
                <button
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  className="flex items-center space-x-2 px-4 py-2 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 transition-colors"
                >
                  <Wallet className="h-4 w-4" />
                  <span>{formatAddress(userAccount)}</span>
                  <ChevronDown
                    className={`h-4 w-4 transition-transform ${
                      dropdownOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {dropdownOpen && (
                  <div className="absolute right-0 top-12 mt-2 w-60 bg-white rounded-lg shadow-lg border border-gray-200 pt-2">
                    <div className="px-4 py-3 border-b border-gray-100">
                      <h3 className="text-sm font-semibold text-gray-700 mb-2">
                        Wallet Details
                      </h3>

                      <div className="space-y-2">
                        <div className="flex items-center space-x-2">
                          <Wallet className="h-4 w-4 text-gray-500" />
                          <div>
                            <p className="text-xs text-gray-500">Address</p>
                            <p className="text-sm font-mono text-gray-900">
                              {formatAddress(userAccount)}
                            </p>
                          </div>
                        </div>

                        <div className="flex items-center space-x-2">
                          <DollarSign className="h-4 w-4 text-gray-500" />
                          <div>
                            <p className="text-xs text-gray-500">Balance</p>
                            <p className="text-sm font-semibold text-gray-900">
                              {etherBalance} ETH
                            </p>
                          </div>
                        </div>

                        <div className="flex items-center space-x-2">
                          <Hash className="h-4 w-4 text-gray-500" />
                          <div>
                            <p className="text-xs text-gray-500">
                              Total Transactions
                            </p>
                            <p className="text-sm font-semibold text-gray-900">
                              {totalTransactions}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <button
                      onClick={disconnectWallet}
                      className="w-full flex items-center space-x-2 px-4 py-2 text-red-600 hover:bg-red-50 transition-colors"
                    >
                      <LogOut className="h-4 w-4" />
                      <span className="text-sm font-medium">
                        Disconnect Wallet
                      </span>
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <button
                onClick={connectWallet}
                disabled={loading}
                className="px-6 py-2 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? "Connecting..." : "Connect Wallet"}
              </button>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
