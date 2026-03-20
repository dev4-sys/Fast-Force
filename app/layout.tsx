import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Facebook, Linkedin, Instagram, Menu, ChevronDown } from "lucide-react";
import { Open_Sans } from "next/font/google";
import "./globals.css";

const openSans = Open_Sans({ subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  title: "Fastforce | Reinventing NZ Workplaces",
  description: "Recruitment & Small Business Advisor based in New Zealand.",
};

const SOCIAL_LINKS = [
  { Icon: Facebook, href: "#" },
  { Icon: Linkedin, href: "#" },
  { Icon: Instagram, href: "#" },
];

const QUICK_LINKS = [
  { name: "FIND WORK", href: "/candidates" },
  { name: "CORE SERVICES", href: "/core-services" },
  { name: "HIRING PROCESS", href: "/hiring-process" },
  { name: "HEALTH & SAFETY", href: "/health-and-safety" },
  { name: "TERMS - PERMANENT", href: "/general-terms-permanent" },
  { name: "TERMS - TEMPORARY", href: "/general-terms-temporary" },
];

const OFFICES = [
  { city: "CHRISTCHURCH", phone: "03 3350223", email: "join@fastforce.co.nz" },
  { city: "ASHBURTON", phone: "02 25282386", email: "char@fastforce.co.nz" },
  { city: "DUNEDIN", phone: "02 12788917", email: "harry@fastforce.co.nz" },
];

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={openSans.className}>
      <body className="bg-white text-zinc-900 flex flex-col min-h-screen antialiased">
        
        {/* --- NAVIGATION --- */}
        <nav className="sticky top-0 z-50 bg-white border-b border-zinc-100 px-4 md:px-8 py-6">
          <div className="max-w-7xl mx-auto flex justify-between items-center">
            <Link href="/" className="hover:opacity-80 transition shrink-0">
              <Image src="/fast-force-logo.png" alt="Fastforce Logo" width={220} height={60} className="w-40 md:w-56 h-auto" priority />
            </Link>
            
            <div className="hidden xl:flex items-center space-x-8 text-[15px] font-bold tracking-tight text-brand-navy">
              <Link href="/" className="relative py-1 hover:text-brand-lime transition-colors">
                HOME
              </Link>

              {/* EMPLOYERS DROPDOWN */}
              <div className="group relative py-1 cursor-pointer">
                <div className="flex items-center gap-1 group-hover:text-brand-lime transition-colors duration-300">
                  EMPLOYERS
                  <ChevronDown size={14} className="group-hover:rotate-180 transition-transform duration-300" />
                </div>
                <span className="nav-link-underline" />
                
                <div className="absolute left-0 top-full pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 translate-y-2 group-hover:translate-y-0 z-50">
                  <div className="bg-white border border-zinc-100 shadow-xl py-4 min-w-[340px]">
                    {[
                      { name: "WHY US", href: "/why-us" },
                      { name: "CORE SERVICES", href: "/core-services" },
                      { name: "OUR HIRING PROCESS", href: "/hiring-process" },
                      { name: "HEALTH & SAFETY", href: "/health-and-safety" },
                      { name: "TERMS - PERMANENT", href: "/general-terms-permanent" },
                      { name: "TERMS - TEMPORARY", href: "/general-terms-temporary" },
                      { name: "TIMESHEET", href: "/Timesheet.pdf" },
                      { name: "REQUEST TALENT", href: "/register" }
                    ].map((item) => (
                      <Link 
                        key={item.href}
                        href={item.href} 
                        className="block px-8 py-3 text-brand-navy font-bold text-[13px] hover:bg-zinc-50 hover:text-brand-lime transition-colors uppercase leading-tight tracking-tight border-l-4 border-transparent hover:border-brand-lime"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              <Link href="/candidates" className="group relative py-1 hover:text-brand-lime transition-colors duration-300">
                CANDIDATES
                <span className="nav-link-underline" />
              </Link>

              {/* WHO ARE WE DROPDOWN */}
              <div className="group relative py-1 cursor-pointer">
                <div className="flex items-center gap-1 group-hover:text-brand-lime transition-colors duration-300">
                  WHO WE ARE
                  <ChevronDown size={14} className="group-hover:rotate-180 transition-transform duration-300" />
                </div>
                <span className="nav-link-underline" />
                
                <div className="absolute left-0 top-full pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 translate-y-2 group-hover:translate-y-0 z-50">
                  <div className="bg-white border border-zinc-100 shadow-xl py-4 min-w-[220px]">
                    {[
                      { name: "ABOUT US", href: "/about-us" },
                      { name: "CORE VALUES", href: "/core-values" },
                      { name: "CORE SERVICES", href: "/core-services" }, // Fixed backslash here
                      { name: "CORPORATE PROFILE", href: "/corporate-profile" },
                    ].map((item) => (
                      <Link 
                        key={item.href}
                        href={item.href} 
                        className="block px-8 py-3 text-brand-navy font-bold text-[13px] hover:bg-zinc-50 hover:text-brand-lime transition-colors uppercase leading-tight tracking-tight border-l-4 border-transparent hover:border-brand-lime"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              {/* REMAINING LINKS */}
              {["HEALTH & SAFETY", "H&S TRAINING", "CONTACT"].map((name) => {
                const linkHref = `/${name.toLowerCase().replace(/ & /g, '-and-').replace(/\s+/g, '-')}`;
                return (
                  <Link key={name} href={linkHref} className="group relative py-1 hover:text-brand-lime transition-colors duration-300">
                    {name}
                    <span className="nav-link-underline" />
                  </Link>
                );
              })}
            </div>

            <button className="xl:hidden text-brand-navy"><Menu size={28} /></button>
          </div>
        </nav>

        <main className="flex-grow">{children}</main>

        {/* --- FOOTER --- */}
        <footer className="bg-white text-zinc-800 border-t border-zinc-200">
          <div className="max-w-7xl mx-auto py-20 px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-4">
              <div className="flex flex-col items-center lg:items-start">
                <div className="mb-10">
                  <Image src="/fast-force-logo.png" alt="Fastforce Logo" width={240} height={80} className="h-auto" />
                </div>
                <div className="flex space-x-4 mb-10 w-full justify-center lg:justify-start">
                  {SOCIAL_LINKS.map(({ Icon, href }, i) => (
                    <a key={i} href={href} className="w-10 h-10 flex items-center justify-center rounded-full border border-zinc-200 hover:bg-brand-lime hover:border-brand-lime transition-all text-zinc-400 hover:text-brand-navy">
                      <Icon size={20} />
                    </a>
                  ))}
                </div>
                <p className="text-zinc-400 text-[11px] font-bold tracking-[0.3em] uppercase">Precision • Power • Performance</p>
              </div>

              <div className="flex flex-col items-center lg:items-start lg:border-l lg:border-zinc-100 lg:pl-12">
                <h3 className="text-black font-black text-[16px] mb-8 tracking-widest border-b-2 border-zinc-50 pb-2 w-full text-center lg:text-left uppercase">Partners</h3>
                <div className="space-y-8 flex flex-col items-center lg:items-start">
                  <Image src="/RCSA-Corporate-Member-Logo.jpg" alt="RCSA" width={180} height={50} className="                                     hover:grayscale-0 transition opacity-80" />
                  <Image src="/ss_member-long-maori.jpg" alt="SiteSafe" width={180} height={50} className=" hover:grayscale-0 transition opacity-80" />
                  <Image src="/adt.jpg" alt="ADT" width={180} height={50} className=" hover:grayscale-0 transition opacity-80" />
                </div>
              </div>

              <div className="flex flex-col items-center lg:items-start border-zinc-100 sm:border-l sm:pl-12 text-center lg:text-left">
                <h3 className="text-black font-black text-[16px] mb-8 tracking-widest border-b-2 border-zinc-50 pb-2 w-full uppercase">Quick Links</h3>
                <ul className="space-y-4 text-[15px] font-bold text-zinc-600 mb-12">
                  {QUICK_LINKS.map((link) => (
                    <li key={link.name}><Link href={link.href} className="hover:text-brand-navy transition-colors">{link.name}</Link></li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-col items-center lg:items-start lg:border-l lg:border-zinc-100 lg:pl-12 text-center lg:text-left">
                <h3 className="text-black font-black text-[16px] mb-8 tracking-widest border-b-2 border-zinc-50 pb-2 w-full uppercase">Contact</h3>
                <div className="space-y-8 mb-10">
                  {OFFICES.map((office) => (
                    <div key={office.city}>
                      <p className="text-black font-black text-[13px] uppercase mb-1">{office.city}</p>
                      <p className="text-[14px] font-medium text-zinc-600">Phone: <a href={`tel:${office.phone}`} className="font-bold text-black hover:text-brand-lime">{office.phone}</a></p>
                      <p className="text-[14px] text-zinc-500 hover:text-brand-lime cursor-pointer transition-colors">{office.email}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="bg-zinc-50 py-10 border-t border-zinc-100">
            <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row justify-between items-center gap-8 text-[11px] font-bold text-zinc-400 tracking-widest uppercase">
              <div><p>© {new Date().getFullYear()} WWW.FASTFORCE.CO.NZ</p></div>
              <div className="flex gap-8">
                <Link href="#" className="hover:text-black">PRIVACY POLICY</Link>
                <Link href="/general-terms-permanent" className="hover:text-black">TERMS & CONDITIONS</Link>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}