import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Facebook, Linkedin, Instagram, Menu, ChevronDown, ChevronRight } from "lucide-react";
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
        
        {/* --- HEADER --- */}
        <nav className="sticky top-0 z-50 bg-white border-b border-zinc-100 px-4 md:px-8 py-6">
          <div className="max-w-7xl mx-auto flex justify-between items-center">
            <Link href="/" className="hover:opacity-80 transition shrink-0">
              <Image src="/fast-force-logo.png" alt="Fastforce Logo" width={220} height={60} className="w-40 md:w-56 h-auto" priority />
            </Link>
            
            <div className="hidden xl:flex items-center space-x-8 text-[15px] font-bold tracking-tight text-brand-navy">
              <Link href="/" className="relative py-1 hover:text-brand-lime transition-colors">HOME</Link>

              {/* EMPLOYERS - WHITE DROPDOWN */}
              <div className="group relative py-1 cursor-pointer">
                <div className="flex items-center gap-1 group-hover:text-brand-lime transition-colors duration-300">
                  EMPLOYERS
                  <ChevronDown size={14} className="group-hover:rotate-180 transition-transform duration-300" />
                </div>
                <span className="nav-link-underline" />
                <div className="absolute left-0 top-full pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 translate-y-2 group-hover:translate-y-0 z-50">
                  <div className="bg-white border border-zinc-100 shadow-xl min-w-[320px] py-2">
                    {["WHY US", "CORE SERVICES", "OUR HIRING PROCESS", "HEALTH & SAFETY", "TERMS - PERMANENT", "TERMS - TEMPORARY", "TIMESHEET", "REQUEST TALENT"].map((item) => (
                      <Link key={item} href="#" className="block px-8 py-4 text-[#a3c1d4] font-bold text-[13px] hover:bg-zinc-50 hover:text-brand-lime transition-colors uppercase tracking-tight">
                        {item}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              {/* CANDIDATES - NOW WHITE DROPDOWN TO MATCH OTHERS */}
              <div className="group relative py-1 cursor-pointer">
                <div className="flex items-center gap-1 group-hover:text-brand-lime transition-colors duration-300">
                  CANDIDATES
                  <ChevronDown size={14} className="group-hover:rotate-180 transition-transform duration-300" />
                </div>
                <span className="nav-link-underline" />
                <div className="absolute left-0 top-full pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 translate-y-2 group-hover:translate-y-0 z-50">
                  <div className="bg-white border border-zinc-100 shadow-xl min-w-[300px] py-2">
                    {["CURRENT JOB OPENING", "SUBMIT CV", "CANDIDATE ADVANCE REGISTRATION", "HEALTH & SAFETY"].map((item) => (
                      <Link key={item} href="#" className="block px-8 py-4 text-[#a3c1d4] font-bold text-[13px] hover:bg-zinc-50 hover:text-brand-lime transition-colors uppercase tracking-tight">
                        {item}
                      </Link>
                    ))}
                    {/* RESOURCES SUB-MENU (WHITE STYLE) */}
                    <div className="group/sub relative">
                      <div className="flex items-center justify-between px-8 py-4 text-[#a3c1d4] font-bold text-[13px] hover:bg-zinc-50 hover:text-brand-lime transition-colors cursor-pointer tracking-tight">
                        RESOURCES
                        <ChevronRight size={14} />
                      </div>
                      <div className="absolute left-full top-0 opacity-0 invisible group-hover/sub:opacity-100 group-hover/sub:visible transition-all duration-200 bg-white border border-zinc-100 min-w-[240px] shadow-xl">
                        {["CHANGE OF BANK ACCOUNT", "CV TIPS", "INTERVIEW TIPS", "LEAVE REQUEST FORM", "TIME SHEET"].map((sub) => (
                          <Link key={sub} href="#" className="block px-8 py-4 text-[#a3c1d4] font-bold text-[13px] hover:bg-zinc-50 hover:text-brand-lime transition-colors uppercase tracking-tight">
                            {sub}
                          </Link>
                        ))}
                      </div>
                    </div>
                    <Link href="#" className="block px-8 py-4 text-[#a3c1d4] font-bold text-[13px] hover:bg-zinc-50 hover:text-brand-lime transition-colors uppercase tracking-tight">
                      REFER A FRIEND!
                    </Link>
                  </div>
                </div>
              </div>

              {/* WHO WE ARE - WHITE DROPDOWN */}
              <div className="group relative py-1 cursor-pointer">
                <div className="flex items-center gap-1 group-hover:text-brand-lime transition-colors duration-300">
                  WHO WE ARE
                  <ChevronDown size={14} className="group-hover:rotate-180 transition-transform duration-300" />
                </div>
                <span className="nav-link-underline" />
                <div className="absolute left-0 top-full pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 translate-y-2 group-hover:translate-y-0 z-50">
                  <div className="bg-white border border-zinc-100 shadow-xl min-w-[240px] py-2">
                    {["ABOUT US", "CORE VALUES", "CORE SERVICES", "CORPORATE PROFILE"].map((item) => (
                      <Link key={item} href="#" className="block px-8 py-4 text-[#a3c1d4] font-bold text-[13px] hover:bg-zinc-50 hover:text-brand-lime transition-colors uppercase tracking-tight">
                        {item}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              {["HEALTH & SAFETY", "H&S TRAINING", "CONTACT"].map((name) => (
                  <Link key={name} href="#" className="group relative py-1 hover:text-brand-lime transition-colors duration-300">
                    {name}
                    <span className="nav-link-underline" />
                  </Link>
              ))}
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
              </div>

              <div className="flex flex-col items-center lg:items-start lg:border-l lg:border-zinc-100 lg:pl-12">
                <h3 className="text-black font-black text-[16px] mb-8 tracking-widest border-b-2 border-zinc-50 pb-2 w-full text-center lg:text-left uppercase">Partners</h3>
                <div className="space-y-8 flex flex-col items-center lg:items-start">
                  <Image src="/RCSA-Corporate-Member-Logo.jpg" alt="RCSA" width={180} height={50} className="opacity-80" />
                  <Image src="/ss_member-long-maori.jpg" alt="SiteSafe" width={180} height={50} className="opacity-80" />
                  <Image src="/adt.jpg" alt="ADT" width={180} height={50} className="opacity-80" />
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