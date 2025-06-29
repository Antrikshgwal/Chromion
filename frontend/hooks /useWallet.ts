import { useEffect, useState } from "react";
import { ethers } from "ethers";

declare global {
    interface Window {
        ethereum?: any;
    }
}

export function useWallet() {
    const [signer, setSigner] = useState<ethers.Signer | null>(null);
    const [address, setAddress] = useState<string | null>(null);
    const [provider, setProvider] = useState<ethers.BrowserProvider | null>(null);

    const isConnected = !!signer && !!address;


    const connectWallet = async () => {
        try {
            if (!window.ethereum) {
                alert("Please install MetaMask");
                return null;
            }

            const prov = new ethers.BrowserProvider(window.ethereum);
            await window.ethereum.request({
                method: "wallet_requestPermissions",
                params: [{ eth_accounts: {} }],
            });

            const accounts = await window.ethereum.request({
                method: "eth_requestAccounts",
            });

            const _signer = await prov.getSigner();
            const _address = await _signer.getAddress();

            setProvider(prov);
            setSigner(_signer);
            setAddress(_address);

            return { signer: _signer, address: _address };
        } catch (error) {
            console.error("Wallet connection failed:", error);
            return null;
        }
    };

    
    useEffect(() => {
        if (window.ethereum) {
            const handleAccountsChanged = async (accounts: string[]) => {
                if (accounts.length === 0) {
                    setSigner(null);
                    setAddress(null);
                } else {
                    const prov = new ethers.BrowserProvider(window.ethereum);
                    const _signer = await prov.getSigner();
                    setSigner(_signer);
                    setAddress(accounts[0]);
                    setProvider(prov);
                }
            };

            window.ethereum.on("accountsChanged", handleAccountsChanged);

            return () => {
                window.ethereum.removeListener("accountsChanged", handleAccountsChanged);
            };
        }
    }, []);

    return {
        connectWallet,
        signer,
        address,
        isConnected,
        provider,
    };
}
