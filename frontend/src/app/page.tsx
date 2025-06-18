"use client";
import React from "react";
import Link from "next/link";
import {
  ChevronRight,
  Shield,
  Zap,
  TrendingUp,
  Upload,
  DollarSign,
  Users,
  BarChart3,
} from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-600 via-purple-600 to-blue-800">
      <header className="bg-white/10 backdrop-blur-lg border-b border-white/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-400 to-purple-500 rounded-lg flex items-center justify-center">
                <DollarSign className="h-5 w-5 text-white" />
              </div>
              <span className="text-xl font-bold text-white">FlowVault</span>
            </div>

            <nav className="hidden md:flex space-x-8">
              <a
                href="#"
                className="text-white/80 hover:text-white transition-colors"
              >
                How it Works
              </a>
              <a
                href="#"
                className="text-white/80 hover:text-white transition-colors"
              >
                Pricing
              </a>
              <a
                href="#"
                className="text-white/80 hover:text-white transition-colors"
              >
                Security
              </a>
            </nav>
            <div className="flex space-x-3">
              <button className="px-4 py-2 text-white/80 hover:text-white transition-colors">
                Sign In
              </button>
              <button className="px-6 py-2 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Connect Wallet
              </button>
            </div>
          </div>
        </div>
      </header>
      <section className="pt-20 pb-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Turn Invoices Into
            <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent block">
              Instant Cash
            </span>
          </h1>
          <p className="text-xl text-white/80 mb-8 max-w-3xl mx-auto">
            The first blockchain platform where businesses get immediate funding
            and investors earn secure returns. Protected by insurance, powered
            by DeFi.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Link
              href="/business"
              className="px-8 py-4 bg-white text-blue-600 rounded-xl font-semibold hover:bg-gray-100 transition-all transform hover:scale-105 flex items-center justify-center"
            >
              I&apos;m a Business <ChevronRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              href="/investor"
              className="px-8 py-4 bg-blue-500/20 text-white border border-white/30 rounded-xl font-semibold hover:bg-blue-500/30 transition-all transform hover:scale-105 flex items-center justify-center"
            >
              I&apos;m an Investor <ChevronRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-white">$2.5M+</div>
              <div className="text-white/60">Funded</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white">4.2%</div>
              <div className="text-white/60">Avg Returns</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white">98.5%</div>
              <div className="text-white/60">Success Rate</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white">500+</div>
              <div className="text-white/60">Businesses</div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
            How FlowVault Works
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Upload className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-black">
                Upload Invoice
              </h3>
              <p className="text-gray-600">
                Business uploads verified invoice and gets instant evaluation
              </p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-black">
                Investor Funding
              </h3>
              <p className="text-gray-600">
                Investors provide 95% of invoice value with insurance protection
              </p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-black">
                Everyone Profits
              </h3>
              <p className="text-gray-600">
                Investors earn 4% returns, businesses get instant cash plus DeFi
                yields
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <Shield className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-black">
                Insurance Protected
              </h3>
              <p className="text-gray-600">
                Your investments are protected by our comprehensive insurance
                pool
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <Zap className="h-12 w-12 text-yellow-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-black">
                Instant Funding
              </h3>
              <p className="text-gray-600">
                Get cash within hours, not weeks. Smart contracts automate
                everything
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <BarChart3 className="h-12 w-12 text-green-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-black">
                DeFi Yields
              </h3>
              <p className="text-gray-600">
                Earn additional returns on collateral through integrated DeFi
                protocols
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
