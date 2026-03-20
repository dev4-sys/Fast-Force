"use client";

import Image from "next/image";
import { Download, ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";
import { useState, useEffect } from "react";

const BROCHURE_PAGES = [
  "/profile-22_page-0001.jpg",
  "/profile-22_page-0002.jpg",
  "/profile-22_page-0003.jpg",
  "/profile-22_page-0004.jpg",
  "/profile-22_page-0005.jpg",
];

export default function CorporateProfilePage() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 7000);
    return () => clearInterval(timer);
  }, [currentIndex]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === BROCHURE_PAGES.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? BROCHURE_PAGES.length - 1 : prev - 1));
  };

  return (
    <main className="bg-white min-h-screen">
      
      {/* --- HERO SECTION: BLUE EFFECT REMOVED --- */}
      {/* Changed bg-brand-navy to bg-white to stop the blue tint bleed-through */}
      <section className="relative h-[450px] flex items-center bg-white overflow-hidden border-b border-zinc-200">
        <Image 
          src="/values.jpg" 
          alt="Background"
          fill
          className="object-cover opacity-100" // Increased opacity to 100 for a plain, clear image
          priority
        />
        
        {/* Added a subtle overlay so text stays readable against a plain image */}
        <div className="absolute inset-0 bg-black/30 z-0"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full">
          <div className="max-w-2xl flex flex-col items-start text-left">
            <h1 className="text-white font-black text-5xl md:text-7xl tracking-tighter uppercase mb-4 leading-none drop-shadow-lg">
              Corporate <br />
              <span className="text-brand-lime">Profile</span>
            </h1>
            
            <div className="w-20 h-2 bg-brand-lime mb-8"></div>

            <a 
              href="/profile-22.pdf" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group flex items-center gap-4 bg-brand-lime text-brand-navy px-8 py-5 font-black uppercase tracking-[0.2em] shadow-xl hover:bg-white transition-all duration-300 cursor-pointer"
            >
              <Download className="w-6 h-6 group-hover:animate-bounce" />
              Download Full PDF
            </a>
          </div>
        </div>
      </section>

      {/* --- BROCHURE CAROUSEL SECTION --- */}
      <section className="py-20 bg-zinc-50">
        <div className="max-w-4xl mx-auto px-6">
          
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-brand-navy font-black text-2xl uppercase tracking-tight">Company Brochure</h2>
              <p className="text-zinc-500 text-sm font-bold uppercase tracking-widest">
                Page {currentIndex + 1} of {BROCHURE_PAGES.length}
              </p>
            </div>
            <div className="hidden md:flex items-center gap-2 text-zinc-400 text-xs font-bold uppercase">
              <ZoomIn size={16} /> Use arrows to flip pages
            </div>
          </div>

          <div className="relative group shadow-2xl bg-white rounded-sm overflow-hidden border border-zinc-200">
            <div className="relative aspect-[1/1.41] w-full bg-white">
              {BROCHURE_PAGES.map((img, idx) => (
                <div 
                  key={idx}
                  className={`absolute inset-0 transition-opacity duration-500 ${
                    idx === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
                  }`}
                >
                   <img
                    src={img}
                    alt={`Brochure Page ${idx + 1}`}
                    loading="eager"
                    className="w-full h-full object-contain"
                  />
                </div>
              ))}
            </div>

            <button 
              onClick={(e) => { e.preventDefault(); prevSlide(); }}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-brand-navy text-white p-3 rounded-full hover:bg-brand-lime hover:text-brand-navy transition-all shadow-lg z-30 opacity-100"
            >
              <ChevronLeft size={24} />
            </button>
            <button 
              onClick={(e) => { e.preventDefault(); nextSlide(); }}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-brand-navy text-white p-3 rounded-full hover:bg-brand-lime hover:text-brand-navy transition-all shadow-lg z-30 opacity-100"
            >
              <ChevronRight size={24} />
            </button>

            <div className="absolute bottom-0 left-0 right-0 flex h-1.5 bg-zinc-200 z-30">
              {BROCHURE_PAGES.map((_, idx) => (
                <div
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`flex-1 cursor-pointer transition-all duration-300 ${
                    idx === currentIndex ? "bg-brand-lime" : "bg-transparent"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}