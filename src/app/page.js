import Image from "next/image";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import MusicLinks from "./components/MusicLinks";
import PhotoShowcase from "./components/PhotoShowcase";
import Navbar from "./components/Navbar";
import ScrollToTop from "./components/ScrollToTop";

export default function Home() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <MusicLinks />
      <PhotoShowcase />
      <ScrollToTop />
    </div>
  );
}
