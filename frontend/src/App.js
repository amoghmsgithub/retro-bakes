import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "sonner";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FeaturedDesserts from "@/components/FeaturedDesserts";
import Reviews from "@/components/Reviews";
import Gallery from "@/components/Gallery";
import About from "@/components/About";
import CustomCakes from "@/components/CustomCakes";
import StoreVisit from "@/components/StoreVisit";
import Footer from "@/components/Footer";
import FloatingWhatsapp from "@/components/FloatingWhatsapp";
import MobileCTA from "@/components/MobileCTA";
import EnquiryDialog from "@/components/EnquiryDialog";
import Loader from "@/components/Loader";
import Admin from "@/pages/Admin";

import "@/App.css";

function Home() {
  const [enquiryOpen, setEnquiryOpen] = useState(false);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setReady(true), 1100);
    return () => clearTimeout(t);
  }, []);

  const open = () => setEnquiryOpen(true);

  return (
    <div className="App relative bg-ink min-h-screen text-cream">
      <Loader done={ready} />
      <Navbar onBookCake={open} />
      <main>
        <Hero onBookCake={open} />
        <FeaturedDesserts onBookCake={open} />
        <Reviews />
        <Gallery />
        <About />
        <CustomCakes onBookCake={open} />
        <StoreVisit />
      </main>
      <Footer />
      <FloatingWhatsapp />
      <MobileCTA onBookCake={open} />
      <EnquiryDialog open={enquiryOpen} onOpenChange={setEnquiryOpen} />
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Toaster
        position="top-center"
        theme="dark"
        toastOptions={{
          style: {
            background: "#1A1514",
            color: "#FDFBF7",
            border: "1px solid rgba(255,255,255,0.08)",
          },
        }}
      />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </BrowserRouter>
  );
}
