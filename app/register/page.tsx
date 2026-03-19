"use client";

import { Mail, Phone, Upload, Send, CheckCircle2 } from "lucide-react";
import { useState } from "react";

export default function RegisterTalent() {
  const [file, setFile] = useState<File | null>(null);

  return (
    <div className="bg-white min-h-screen pb-20">
      {/* --- HEADER --- */}
      <section className="bg-[#005177] py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-white font-black text-4xl md:text-5xl tracking-tighter uppercase mb-6">
            Request <span className="text-[#74B72E]">Talent</span>
          </h1>
          <p className="text-zinc-300 text-lg max-w-2xl mx-auto leading-relaxed">
            Fill out and submit the Talent Request form below and a Fast Force Consultant will contact you ASAP to discuss further.
          </p>
          <div className="w-20 h-1 bg-[#74B72E] mx-auto mt-8"></div>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-6 -mt-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* --- LEFT SIDE: INFO CARDS --- */}
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-[#f8fafc] p-8 border-t-4 border-[#74B72E] shadow-sm">
              <h3 className="text-[#005177] font-black text-lg uppercase mb-4 tracking-tight">Prefer to call?</h3>
              <p className="text-zinc-600 text-[15px] mb-6">Speak directly with our consultants at our nearest office.</p>
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-zinc-800 font-bold text-[14px]">
                  <Phone size={18} className="text-[#74B72E]" />
                  <span>03 335 0223 (CHCH)</span>
                </div>
                <div className="flex items-center gap-3 text-zinc-800 font-bold text-[14px]">
                  <Mail size={18} className="text-[#74B72E]" />
                  <span>join@fastforce.co.nz</span>
                </div>
              </div>
            </div>

            <div className="bg-[#005177] p-8 shadow-sm text-white">
              <CheckCircle2 size={32} className="text-[#74B72E] mb-4" />
              <h3 className="font-black text-lg uppercase mb-2">Why Fast Force?</h3>
              <ul className="text-[14px] text-zinc-300 space-y-3 mt-4">
                <li>• Verified & Background Checked</li>
                <li>• Tailored Talent Search</li>
                <li>• Industry Standard Service</li>
                <li>• Fast & Reliable Delivery</li>
              </ul>
            </div>
          </div>

          {/* --- RIGHT SIDE: FORM --- */}
          <div className="lg:col-span-2 bg-white shadow-2xl border border-zinc-100 p-8 md:p-12">
            <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              <div className="md:col-span-2">
                <label className="block text-[12px] font-black text-zinc-400 uppercase tracking-widest mb-2">Company Name *</label>
                <input type="text" className="w-full bg-zinc-50 border border-zinc-200 px-4 py-3 outline-none focus:border-[#74B72E] transition-all text-[15px]" required />
              </div>

              <div>
                <label className="block text-[12px] font-black text-zinc-400 uppercase tracking-widest mb-2">Phone *</label>
                <input type="tel" className="w-full bg-zinc-50 border border-zinc-200 px-4 py-3 outline-none focus:border-[#74B72E] transition-all text-[15px]" required />
              </div>

              <div>
                <label className="block text-[12px] font-black text-zinc-400 uppercase tracking-widest mb-2">Staff Type *</label>
                <select className="w-full bg-zinc-50 border border-zinc-200 px-4 py-3 outline-none focus:border-[#74B72E] transition-all text-[15px] appearance-none cursor-pointer">
                  <option>Temporary Staff</option>
                  <option>Permanent Staff</option>
                  <option>Contract</option>
                </select>
              </div>

              <div>
                <label className="block text-[12px] font-black text-zinc-400 uppercase tracking-widest mb-2">No. of Staff Required</label>
                <input type="number" className="w-full bg-zinc-50 border border-zinc-200 px-4 py-3 outline-none focus:border-[#74B72E] transition-all text-[15px]" />
              </div>

              <div>
                <label className="block text-[12px] font-black text-zinc-400 uppercase tracking-widest mb-2">Start Date</label>
                <input type="date" className="w-full bg-zinc-50 border border-zinc-200 px-4 py-3 outline-none focus:border-[#74B72E] transition-all text-[15px]" />
              </div>

              <div>
                <label className="block text-[12px] font-black text-zinc-400 uppercase tracking-widest mb-2">Location (City) *</label>
                <input type="text" className="w-full bg-zinc-50 border border-zinc-200 px-4 py-3 outline-none focus:border-[#74B72E] transition-all text-[15px]" required />
              </div>

              <div>
                <label className="block text-[12px] font-black text-zinc-400 uppercase tracking-widest mb-2">Job Title *</label>
                <input type="text" className="w-full bg-zinc-50 border border-zinc-200 px-4 py-3 outline-none focus:border-[#74B72E] transition-all text-[15px]" required />
              </div>

              <div className="md:col-span-2">
                <label className="block text-[12px] font-black text-zinc-400 uppercase tracking-widest mb-2">Job Description</label>
                <textarea rows={4} className="w-full bg-zinc-50 border border-zinc-200 px-4 py-3 outline-none focus:border-[#74B72E] transition-all text-[15px] resize-none" placeholder="Paste requirements here..."></textarea>
              </div>

              {/* FILE UPLOAD */}
              <div className="md:col-span-2">
                <label className="block text-[12px] font-black text-zinc-400 uppercase tracking-widest mb-2">Upload Job Description (Max 2MB)</label>
                <div className="relative group cursor-pointer">
                  <input 
                    type="file" 
                    onChange={(e) => setFile(e.target.files?.[0] || null)}
                    className="absolute inset-0 w-full h-full opacity-0 z-10 cursor-pointer" 
                  />
                  <div className="flex items-center justify-between bg-white border-2 border-dashed border-zinc-200 p-6 group-hover:border-[#74B72E] transition-all">
                    <div className="flex items-center gap-4">
                      <div className="p-3 bg-zinc-50 text-zinc-400 group-hover:text-[#74B72E] group-hover:bg-[#f0f9eb] rounded-full transition-all">
                        <Upload size={24} />
                      </div>
                      <div>
                        <p className="text-[14px] font-bold text-zinc-600">{file ? file.name : "Choose a file or drag it here"}</p>
                        <p className="text-[12px] text-zinc-400">PDF, DOCX, or Image</p>
                      </div>
                    </div>
                    <span className="text-[11px] font-black uppercase tracking-widest text-[#005177] group-hover:text-[#74B72E]">Browse</span>
                  </div>
                </div>
              </div>

              <div className="md:col-span-2 pt-6">
                <button type="submit" className="w-full md:w-auto bg-[#74B72E] hover:bg-[#005177] text-white px-12 py-5 font-black text-[14px] tracking-[0.2em] uppercase transition-all duration-300 flex items-center justify-center gap-3 shadow-lg">
                  Submit Request
                  <Send size={18} />
                </button>
              </div>

            </form>
          </div>
        </div>
      </div>
    </div>
  );
}