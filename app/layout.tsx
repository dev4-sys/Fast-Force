import type { Metadata } from "next";
import Image from "next/image";
import { Facebook, Linkedin, Instagram, Menu } from "lucide-react";
import { Open_Sans } from "next/font/google";
import "./globals.css";

const openSans = Open_Sans({ subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  title: "Fastforce | Reinventing NZ Workplaces",
  description: "Recruitment & Small Business Advisor based in New Zealand.",
};

// --- DATA ARRAYS ---
const NAV_LINKS = [
  { name: "HOME", href: "#" },
  { name: "EMPLOYERS", href: "#" },
  { name: "CANDIDATES", href: "#" },
  { name: "WHO ARE WE", href: "#" },
  { name: "HEALTH & SAFETY", href: "#" },
  { name: "H&S TRAINING", href: "#" },
  { name: "CONTACT", href: "#" },
];

const SOCIAL_LINKS = [
  { Icon: Facebook, href: "#" },
  { Icon: Linkedin, href: "#" },
  { Icon: Instagram, href: "#" },
];

const QUICK_LINKS = ["FIND WORK", "CORE SERVICES", "REQUEST TALENT", "SUBMIT CV"];

const OFFICES = [
  { city: "CHRISTCHURCH", phone: "03 3350223", email: "join@fastforce.co.nz" },
  { city: "ASHBURTON", phone: "02 25282386", email: "char@fastforce.co.nz" },
  { city: "DUNEDIN", phone: "02 12788917", email: "harry@fastforce.co.nz" },
];

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={openSans.className}>
      <body className="bg-white text-zinc-900 flex flex-col min-h-screen">
        
        {/* --- NAVIGATION --- */}
        <nav className="sticky top-0 z-50 bg-white border-b border-zinc-100 px-4 md:px-8 py-6">
          <div className="max-w-7xl mx-auto flex justify-between items-center">
            <a href="/" className="hover:opacity-80 transition shrink-0">
              <Image src="/fast-force-logo.png" alt="Fastforce Logo" width={220} height={60} className="w-40 md:w-56 h-auto" priority />
            </a>
            
            {/* Nav Links based on image_f0bb43.png */}
            <div className="hidden xl:flex items-center space-x-8 text-[16px] font-bold tracking-tight text-[#005177]">
              {NAV_LINKS.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  className={`hover:text-[#74B72E] transition-colors ${link.name === 'HOME' ? 'text-[#74B72E] border-b-2 border-[#005177] pb-1' : ''}`}
                >
                  {link.name}
                </a>
              ))}
            </div>

            <button className="lg:hidden text-[#005177]"><Menu size={28} /></button>
          </div>
        </nav>

        <main className="flex-grow">{children}</main>

        {/* --- FOOTER --- */}
        <footer className="bg-white text-zinc-800 border-t border-zinc-200">
          <div className="max-w-7xl mx-auto py-20 px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-4">
              
              {/* Column 1: Brand & Socials */}
              <div className="flex flex-col items-center lg:items-start">
                <div className="mb-10">
                  <Image src="/fast-force-logo.png" alt="Fastforce Logo" width={240} height={80} className="h-auto object-contain" />
                </div>
                <div className="flex justify-center lg:justify-start space-x-4 mb-10 w-full">
                  {SOCIAL_LINKS.map(({ Icon, href }, i) => (
                    <a key={i} href={href} className="p-4 bg-zinc-50 border border-zinc-100 text-zinc-500 hover:bg-[#74B72E] hover:text-white transition-all rounded-sm">
                      <Icon size={20} />
                    </a>
                  ))}
                </div>
                <p className="text-zinc-400 text-[11px] font-bold tracking-[0.3em] text-center lg:text-left leading-relaxed">
                  PRECISION • POWER • PERFORMANCE
                </p>
              </div>

              {/* Column 2: Partners */}
              <div className="flex flex-col items-center lg:items-start lg:border-l lg:border-zinc-100 lg:pl-12">
                <h3 className="text-black font-black text-[16px] mb-8 tracking-widest border-b-2 border-zinc-50 pb-2 w-full text-center lg:text-left">PARTNERS</h3>
                <div className="space-y-8 flex flex-col items-center lg:items-start">
                  <Image src="/rcsa.png" alt="RCSA Member" width={180} height={50} className="grayscale hover:grayscale-0 transition opacity-80" />
                  <Image src="/sitesafe.png" alt="SiteSafe Member" width={160} height={50} className="grayscale hover:grayscale-0 transition opacity-80" />
                  <Image src="/adt.png" alt="ADT" width={140} height={50} className="grayscale hover:grayscale-0 transition opacity-80" />
                </div>
              </div>

              {/* Column 3: Quick Links & Timing */}
              <div className="flex flex-col items-center lg:items-start border-zinc-100 sm:border-l sm:pl-12">
                <h3 className="text-black font-black text-[16px] mb-8 tracking-widest border-b-2 border-zinc-50 pb-2 w-full text-center lg:text-left">QUICK LINKS</h3>
                <ul className="space-y-4 text-[15px] font-bold text-zinc-600 mb-12 w-full text-center lg:text-left tracking-wide">
                  {QUICK_LINKS.map((link) => (
                    <li key={link}><a href="#" className="hover:text-[#005177] transition-colors">{link}</a></li>
                  ))}
                </ul>
                
                <div className="w-full text-center lg:text-left">
                  <h3 className="text-black font-black text-[16px] mb-6 tracking-widest">OFFICE TIMING</h3>
                  <div className="space-y-4 text-[14px] font-bold">
                    <div className="flex flex-col">
                      <span className="text-zinc-400 text-[11px] mb-1">MON - FRI</span>
                      <span className="text-zinc-800">8.30AM to 5.00PM</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-zinc-400 text-[11px] mb-1">SAT & SUN</span>
                      <span className="text-zinc-800">CLOSED</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Column 4: Contact & CTA */}
              <div className="flex flex-col items-center lg:items-start lg:border-l lg:border-zinc-100 lg:pl-12">
                <h3 className="text-black font-black text-[16px] mb-8 tracking-widest border-b-2 border-zinc-50 pb-2 w-full text-center lg:text-left">CONTACT</h3>
                <div className="space-y-8 mb-10 w-full text-center lg:text-left">
                  {OFFICES.map((office) => (
                    <div key={office.city}>
                      <p className="text-black font-black text-[13px] mb-1 tracking-wider">{office.city}</p>
                      <p className="text-[14px] font-medium text-zinc-600">
                        Phone: <a href={`tel:${office.phone}`} className="font-bold text-black hover:text-[#74B72E]">{office.phone}</a>
                      </p>
                      <p className="text-[14px] text-zinc-500 hover:text-[#74B72E] cursor-pointer">{office.email}</p>
                    </div>
                  ))}
                </div>
                <button className="w-full bg-black text-white py-5 font-black text-[13px] tracking-[0.2em] hover:bg-[#74B72E] transition-all relative overflow-hidden group">
                  <span className="relative z-10">EXPLORE MORE</span>
                  <div className="absolute top-0 right-0 bottom-0 left-0 bg-white/10 skew-x-[-20deg] translate-x-[-110%] group-hover:translate-x-[110%] transition-transform duration-700"></div>
                </button>
              </div>
            </div>
          </div>

          {/* Copyright Bar */}
          <div className="bg-zinc-50 py-10 border-t border-zinc-100">
            <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row justify-between items-center gap-8 text-center lg:text-left">
              <div className="text-[11px] font-bold text-zinc-400 tracking-widest leading-loose">
                <p>© {new Date().getFullYear()} WWW.FASTFORCE.CO.NZ</p>
                <p>DESIGNED & DEVELOPED BY PERFECT DESIGNING SOLUTIONS</p>
              </div>
              <div className="flex gap-8 text-[11px] font-black text-zinc-400 tracking-widest">
                <a href="#" className="hover:text-black">PRIVACY POLICY</a>
                <a href="#" className="hover:text-black">TERMS & CONDITIONS</a>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}