"use client";
import React from "react";
import Navbar from "./components/homepage/Navbar";
import SectionOne from "./components/homepage/SectionOne";
import SectionTwo from "./components/homepage/SectionTwo";
import SectionThree from "./components/homepage/SectionThree";
import SectionFour from "./components/homepage/SectionFour";
import Footer from "./components/homepage/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
      <Footer />
    </div>
  );
}
