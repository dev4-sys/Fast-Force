"use client";

import Image from "next/image";
import { Mail, Phone, Upload, Send, CheckCircle2 } from "lucide-react";
import { useState } from "react";

export default function RegisterTalent() {
  const [file, setFile] = useState<File | null>(null);

  return (
    <div className="bg-white min-h-screen pb-20">
      {/* --- PAGE HEADER WITH BACKGROUND IMAGE --- */}
      <section className="relative h-[400px] md:h-[500px] flex items-center overflow-hidden">
        <Image 
          src="/register.jpg" // Using a high-quality logistics/warehouse image
          alt="Request Talent Header"
          fill
          className="object-cover object-center"
          priority
        />
        {/* Dark Overlay for Text Readability */}
        <div className="absolute inset-0 bg-[#005177]/85"></div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-white font-black text-4xl md:text-6xl tracking-tighter uppercase mb-6 leading-none">
            Request <span className="text-[#74B72E]">Talent</span>
          </h1>
          <p className="text-zinc-200 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed font-medium">
            Fill out the form below and a Fast Force Consultant will contact you ASAP to discuss your hiring needs.
          </p>
          <div className="w-20 h-1.5 bg-[#74B72E] mx-auto mt-8"></div>
        </div>
      </section>

      <div className="relative z-20 max-w-6xl mx-auto px-6 -mt-24 md:-mt-32">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* --- LEFT SIDE: INFO CARDS --- */}
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-[#f8fafc] p-8 border-t-4 border-[#74B72E] shadow-xl">
              <h3 className="text-[#005177] font-black text-lg uppercase mb-4 tracking-tight">Prefer to call?</h3>
              <p className="text-zinc-600 text-[15px] mb-6 font-medium">Speak directly with our consultants at our nearest office.</p>
              <div className="space-y-4">
                <a href="tel:033350223" className="flex items-center gap-3 text-zinc-800 font-bold text-[15px] hover:text-[#74B72E] transition-colors">
                  <Phone size={20} className="text-[#74B72E]" />
                  <span>03 335 0223 (CHCH)</span>
                </a>
                <a href="mailto:join@fastforce.co.nz" className="flex items-center gap-3 text-zinc-800 font-bold text-[15px] hover:text-[#74B72E] transition-colors">
                  <Mail size={20} className="text-[#74B72E]" />
                  <span>join@fastforce.co.nz</span>
                </a>
              </div>
            </div>

            <div className="bg-[#005177] p-8 shadow-xl text-white">
              <CheckCircle2 size={36} className="text-[#74B72E] mb-6" />
              <h3 className="font-black text-xl uppercase mb-4 tracking-tight">Why Fast Force?</h3>
              <ul className="text-[15px] text-zinc-300 space-y-4">
                <li className="flex items-start gap-2">
                  <span className="text-[#74B72E] font-bold">✓</span> Verified & Background Checked
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#74B72E] font-bold">✓</span> Tailored Talent Search
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#74B72E] font-bold">✓</span> Industry Standard Service
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#74B72E] font-bold">✓</span> Fast & Reliable Delivery
                </li>
              </ul>
            </div>
          </div>

          {/* --- RIGHT SIDE: FORM --- */}
          <div className="lg:col-span-2 bg-white shadow-2xl rounded-sm p-8 md:p-12">
            <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              <div className="md:col-span-2">
                <label className="block text-[12px] font-black text-[#005177] uppercase tracking-widest mb-2">Company Name *</label>
                <input type="text" className="w-full bg-zinc-50 border border-zinc-200 px-4 py-4 outline-none focus:border-[#74B72E] focus:bg-white transition-all text-[15px]" required />
              </div>

              <div>
                <label className="block text-[12px] font-black text-[#005177] uppercase tracking-widest mb-2">Phone *</label>
                <input type="tel" className="w-full bg-zinc-50 border border-zinc-200 px-4 py-4 outline-none focus:border-[#74B72E] focus:bg-white transition-all text-[15px]" required />
              </div>

              <div>
                <label className="block text-[12px] font-black text-[#005177] uppercase tracking-widest mb-2">Staff Type *</label>
                <div className="relative">
                  <select className="w-full bg-zinc-50 border border-zinc-200 px-4 py-4 outline-none focus:border-[#74B72E] focus:bg-white transition-all text-[15px] appearance-none cursor-pointer">
                    <option>Temporary Staff</option>
                    <option>Permanent Staff</option>
                    <option>Contract</option>
                  </select>
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-zinc-400">
                    ▼
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-[12px] font-black text-[#005177] uppercase tracking-widest mb-2">No. of Staff Required</label>
                <input type="number" className="w-full bg-zinc-50 border border-zinc-200 px-4 py-4 outline-none focus:border-[#74B72E] transition-all text-[15px]" />
              </div>

              <div>
                <label className="block text-[12px] font-black text-[#005177] uppercase tracking-widest mb-2">Start Date</label>
                <input type="date" className="w-full bg-zinc-50 border border-zinc-200 px-4 py-4 outline-none focus:border-[#74B72E] transition-all text-[15px]" />
              </div>

              <div>
                <label className="block text-[12px] font-black text-[#005177] uppercase tracking-widest mb-2">Location (City) *</label>
                <input type="text" className="w-full bg-zinc-50 border border-zinc-200 px-4 py-4 outline-none focus:border-[#74B72E] transition-all text-[15px]" required />
              </div>

              <div>
                <label className="block text-[12px] font-black text-[#005177] uppercase tracking-widest mb-2">Job Title *</label>
                <input type="text" className="w-full bg-zinc-50 border border-zinc-200 px-4 py-4 outline-none focus:border-[#74B72E] transition-all text-[15px]" required />
              </div>

              <div className="md:col-span-2">
                <label className="block text-[12px] font-black text-[#005177] uppercase tracking-widest mb-2">Job Description</label>
                <textarea rows={5} className="w-full bg-zinc-50 border border-zinc-200 px-4 py-4 outline-none focus:border-[#74B72E] focus:bg-white transition-all text-[15px] resize-none" placeholder="Paste requirements or specific skills needed..."></textarea>
              </div>

              {/* FILE UPLOAD */}
              <div className="md:col-span-2">
                <label className="block text-[12px] font-black text-[#005177] uppercase tracking-widest mb-2">Upload Job Description (Max 2MB)</label>
                <div className="relative group cursor-pointer">
                  <input 
                    type="file" 
                    onChange={(e) => setFile(e.target.files?.[0] || null)}
                    className="absolute inset-0 w-full h-full opacity-0 z-10 cursor-pointer" 
                  />
                  <div className="flex items-center justify-between bg-zinc-50 border-2 border-dashed border-zinc-200 p-8 group-hover:border-[#74B72E] group-hover:bg-white transition-all">
                    <div className="flex items-center gap-4">
                      <div className="p-4 bg-white shadow-sm text-zinc-400 group-hover:text-[#74B72E] rounded-full transition-all">
                        <Upload size={28} />
                      </div>
                      <div>
                        <p className="text-[15px] font-bold text-[#005177]">{file ? file.name : "Choose a file or drag it here"}</p>
                        <p className="text-[13px] text-zinc-500">Supported: PDF, DOCX, or Image</p>
                      </div>
                    </div>
                    <span className="hidden md:block text-[11px] font-black uppercase tracking-widest bg-[#005177] text-white px-4 py-2 group-hover:bg-[#74B72E] transition-colors">Browse Files</span>
                  </div>
                </div>
              </div>

              <div className="md:col-span-2 pt-8">
                <button type="submit" className="w-full md:w-auto bg-[#74B72E] hover:bg-[#005177] text-white px-16 py-5 font-black text-[15px] tracking-[0.2em] uppercase transition-all duration-300 flex items-center justify-center gap-4 shadow-xl">
                  Submit Talent Request
                  <Send size={20} />
                </button>
              </div>

            </form>
          </div>
        </div>
      </div>
    </div>
  );
}