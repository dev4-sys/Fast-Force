import Image from "next/image";
import { Download } from "lucide-react";

export default function GeneralTermsPermanent() {
  return (
    <div className="bg-white min-h-screen pb-20">
      {/* --- PAGE HEADER WITH BACKGROUND IMAGE --- */}
      <section className="relative h-[300px] md:h-[400px] flex items-center overflow-hidden">
        <Image 
          src="/permnent.jpg" // Consistent industry hero image
          alt="Permanent Terms Header"
          fill
          className="object-cover object-center"
          priority
        />
        {/* Dark Overlay for branding and text contrast */}
        <div className="absolute inset-0 bg-[#005177]/85"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
          <h1 className="text-white font-black text-3xl md:text-5xl tracking-tighter uppercase mb-6 leading-none">
            General Terms <span className="text-[#74B72E]">Permanent</span>
          </h1>
          <div className="w-20 h-1.5 bg-[#74B72E]"></div>
        </div>
      </section>

      {/* --- VERTICAL CONTENT START --- */}
      <div className="max-w-4xl mx-auto px-6 py-16 space-y-12 text-zinc-600 text-[15px] leading-relaxed">
        
        <section className="space-y-4">
          <h2 className="text-[#005177] font-black uppercase tracking-tight text-[16px] border-l-4 border-[#74B72E] pl-4">
            01. About these terms
          </h2>
          <p>These terms apply to any request you make to us to find candidates for you unless otherwise agreed in writing between us.</p>
          <p>By you requesting Fast Force to find candidates for you or you accepting a candidate’s resume from us, you are deemed to have accepted these terms. These terms will be retained until further modification.</p>
          <p>We may vary these terms time to time and you are deemed to accept these variations from the next request you make to us to find candidates for you.</p>
          <p className="font-bold text-[#333]">All payments are payable in New Zealand currency.</p>
        </section>

        <section className="space-y-4">
          <h2 className="text-[#005177] font-black uppercase tracking-tight text-[16px] border-l-4 border-[#74B72E] pl-4">
            02. Finding a candidate
          </h2>
          <p>You must provide us all the necessary information we need to find a candidate for you.</p>
          <p>We have pre-decided job boards to publish any vacancy. If you need us to advertise on outside these channels you agree to pay for the associated cost to it. You are responsible for preparing any job contract for the candidate.</p>
          <p>If you are interviewing the candidate, you must notify us the outcome of the interview within 24 hours. You must notify us immediately if any offer (or acceptance of any offer) in relation the placement of our candidate with you.</p>
          
          <div className="bg-zinc-50 p-6 rounded-sm border border-zinc-100">
            <p className="font-bold text-[#333] italic mb-4">Whether engaged on a retained basis or exclusive basis, you agree:</p>
            <ul className="list-disc pl-5 space-y-3">
              <li>To pay us our fee for the placement of the candidate if you breach any contract for employment.</li>
              <li>That you are responsible for satisfying yourself that the candidate has the qualifications and training necessary.</li>
              <li>That our candidate meets any suitability, security, or professional requirements imposed by law.</li>
              <li>That you are responsible for obtaining permits or appropriate authorisation for the candidate to work.</li>
            </ul>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-[#005177] font-black uppercase tracking-tight text-[16px] border-l-4 border-[#74B72E] pl-4">
            03. Guarantee
          </h2>
          <p>Should a candidate cease employment within 3 months of commencement date, we will do reasonable endeavour to find a replacement candidate. Guarantee does not apply in the following: redundancy, company closure or re-structuring, change of management and significant changes to original job description.</p>
          <p className="bg-amber-50 p-4 text-amber-900 text-sm border-l-4 border-amber-400">
            <strong>Note:</strong> We do not offer refunds for the fees paid to us. Credit notes are provided if a replacement is no longer required.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-[#005177] font-black uppercase tracking-tight text-[16px] border-l-4 border-[#74B72E] pl-4">
            04. Fees and Payment
          </h2>
          <p>All invoices are payable within <strong>10 days</strong> from the invoicing date. All fees quoted are exclusive GST. A 2% Surcharge may apply on payments made by credit card.</p>
          <p>We may require you to pay interest on a compounding basis at a rate of 2.5% per calendar month on all amounts remaining unpaid from the due date until the date of full payment.</p>
        </section>

        <section className="space-y-4">
          <h2 className="text-[#005177] font-black uppercase tracking-tight text-[16px] border-l-4 border-[#74B72E] pl-4">
            05. Privacy & Confidentiality
          </h2>
          <p>You agree to preserve the privacy of personal information concerning any of our candidates to a standard not less than that prescribed by the <strong>Privacy Act 1993</strong>.</p>
          <p>So far as the law allows, you must maintain the confidentiality of any information that we communicate to you and identify as being confidential.</p>
        </section>

        {/* --- DOWNLOAD BUTTON AT THE BOTTOM --- */}
        <div className="pt-12 border-t border-zinc-100 flex justify-center md:justify-start">
          <a 
            href="/general-terms-permanent.pdf" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex items-center gap-3 bg-[#74B72E] hover:bg-[#005177] text-white px-10 py-5 font-black text-[13px] tracking-[0.2em] uppercase transition-all duration-300 rounded-sm shadow-lg group"
          >
            <Download size={20} className="group-hover:scale-110 transition-transform" />
            Download PDF Version
          </a>
        </div>

      </div>
    </div>
  );
}