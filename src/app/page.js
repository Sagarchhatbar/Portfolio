"use client";
import Image from "next/image";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import AboutSection from "./components/AboutSection";
import EmailSection from "./components/EmailSection";
import Footer from "./components/Footer";
import AchievementSections from "./components/AchievementSections";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      
        <Navbar />
        <div className="container mt-24 mx-auto px-12 py-6">
          <HeroSection />
          <AchievementSections />
          <AboutSection />
          <EmailSection />
        </div>
        <Footer />
    </main>
  );
}
