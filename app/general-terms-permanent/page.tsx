import Image from "next/image";
import { Download } from "lucide-react";

export default function GeneralTermsPermanent() {
  return (
    <main className="bg-white min-h-screen pb-20">
      {/* --- PAGE HEADER --- */}
      <section className="relative h-[300px] md:h-[450px] flex items-center overflow-hidden">
        <Image 
          src="/permnent.jpg" 
          alt="Permanent Terms Header"
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-brand-navy/85"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
          <h1 className="text-white font-black text-3xl md:text-6xl tracking-tighter uppercase mb-6 leading-none">
            General Terms <span className="text-brand-lime">Permanent</span>
          </h1>
          <div className="w-24 h-2 bg-brand-lime"></div>
        </div>
      </section>

      {/* --- CONTENT START --- */}
      <div className="max-w-4xl mx-auto px-6 py-16 space-y-16 text-zinc-600 text-[15px] leading-relaxed">
        
        {/* 01. About these terms */}
        <section className="space-y-4">
          <h2 className="text-brand-navy font-black uppercase tracking-tight text-[16px] border-l-4 border-brand-lime pl-4">
            01. About these terms
          </h2>
          <p>These terms apply to any request you make to us to find candidates for you unless otherwise agreed in writing between us.</p>
          <p>By you requesting Fast Force to find candidates for you or you accepting a candidate’s resume from us, you are deemed to have accepted these terms. These terms will be retained until further modification.</p>
          <p>We may vary these terms time to time and you are deemed to accept these variations from the next request you make to us to find candidates for you.</p>
          <p className="font-bold text-zinc-900">All payments are payable in New Zealand currency.</p>
        </section>

        {/* 02. Finding a candidate */}
        <section className="space-y-4">
          <h2 className="text-brand-navy font-black uppercase tracking-tight text-[16px] border-l-4 border-brand-lime pl-4">
            02. Finding a candidate
          </h2>
          <p>You must provide us all the necessary information we need to find a candidate for you.</p>
          <p>We have pre-decided job boards to publish any vacancy. If you need us to advertise on outside these channels you agree to pay for the associated cost to it. You are responsible for preparing any job contract for the candidate.</p>
          <p>If you are interviewing the candidate, you must notify us the outcome of the interview within 24 hours. You must notify us immediately if any offer (or acceptance of any offer) in relation the placement of our candidate with you, or a person or an entity on whose behalf or for whose benefit you may be acting, or to whom you have communicated any personal information about our candidate. Your notification must include details of the remuneration or benefits offered.</p>
          <p>For at least a period of 12 months after the employed candidate commences work for you, we shall not directly approach or introduce or attempt to introduce the employed candidate to leave his/her employment with you or enter into any employment with us or other person. However, this term does not preclude us assisting the candidate with any employment during this period if they approach us.</p>
          
          <div className="bg-slate-50 p-8 rounded-sm border border-zinc-100 mt-6">
            <p className="font-bold text-zinc-900 italic mb-4 underline decoration-brand-lime decoration-2 underline-offset-4">
              Whether engaged on a retained basis or exclusive basis, you agree:
            </p>
            <ul className="list-disc pl-5 space-y-3">
              <li>To pay us our fee for the placement of the candidate if you breach any contract for employment or engagement of our candidate before the placement is complete and the contract contracts terminates for that reason.</li>
              <li>That you are responsible for satisfying yourself that the candidate has the qualifications, training and experience necessary to take the placement and shall not hold Fast Force liable for any poor candidate selection.</li>
              <li>That our candidate meets any suitability, security, trade, professional or occupational health and safety requirements imposed by law in order to work in the placement.</li>
              <li>That our candidate meets any other inherent requirements of the placement.</li>
              <li>That you are responsible for obtaining permits or the appropriate authorisation for the candidate to work, including the provision of any required documentation.</li>
              <li>If you would require us to arrange a job contract for the role, we will undertake the process and invoice you for this service separately.</li>
              <li>That you will not require us to act in a way that would result in our breaching Recruitment & Consulting Services Association Limited’s (”RCSA”) Code for Professional Conduct.</li>
            </ul>
          </div>
        </section>

        {/* 03. Guarantee */}
        <section className="space-y-4">
          <h2 className="text-brand-navy font-black uppercase tracking-tight text-[16px] border-l-4 border-brand-lime pl-4">
            03. Guarantee
          </h2>
          <p>Should a candidate cease employment within 3 months of commencement date, we will do reasonable endeavour to find a replacement candidate. Guarantee does not apply in the following: redundancy, company closure or re-structuring, change of management and significant changes to original job description. Guarantee does not apply on replacement candidate. If you no longer need the replacement, we will give you a credit note for the fees you paid to us for your future hiring needs with us.</p>
          <div className="bg-amber-50 p-6 text-amber-900 border-l-4 border-amber-400 font-medium">
            <p className="mb-2"><strong>Timeline:</strong> We will require 30 working days to provide you the replacement.</p>
            <p><strong>Refund Policy:</strong> For the avoidance of any doubt, we do not offer refund for the fee paid to us.</p>
          </div>
        </section>

        {/* 04. Fees and Payment */}
        <section className="space-y-4">
          <h2 className="text-brand-navy font-black uppercase tracking-tight text-[16px] border-l-4 border-brand-lime pl-4">
            04. Fees and Payment
          </h2>
          <p>All invoices are payable within <strong>10 days</strong> from the invoicing date. All fees quoted are exclusive GST. 2% Surcharge may apply on the payments made by credit card.</p>
          <p>We may require you to pay interest on a compounding basis at a rate of <strong>2.5% per calendar month</strong> on all amounts remaining unpaid from the due date until the date of full payment.</p>
          <p>If you fail to pay any amount when required under the terms, we reserve the right to suspend any service without incurring any liability whatsoever and all amounts owing by you become immediately payable. You shall be liable for all expenses and costs (including legal and debt collection).</p>
          <p className="text-red-700 font-bold italic">If payment is not received within the due date, you will not be able to rely on our guarantee.</p>
        </section>

        {/* 05. Liability & Candidate Introduction */}
        <section className="space-y-4">
          <h2 className="text-brand-navy font-black uppercase tracking-tight text-[16px] border-l-4 border-brand-lime pl-4">
            05. Liability & Introduction
          </h2>
          <p>Our total liability for a breach of guarantee mentioned in TERMS will not exceed the amount of the fees paid by you in relation to the candidate giving rise to the breach.</p>
          <p className="font-bold text-zinc-800">Candidate Introduction:</p>
          <p>If we introduce or refer a candidate to you, and at any time during the 12 months thereafter you employ that candidate, you are deemed to have found the candidate through us and you will be required to pay the fee outlined under permanent placement fee table.</p>
        </section>

        {/* 06. Credit Check & Disputes */}
        <section className="grid md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <h2 className="text-brand-navy font-black uppercase tracking-tight text-[16px] border-l-4 border-brand-lime pl-4">
              06. Credit Check
            </h2>
            <p className="text-sm">You authorise us to collect, use and retain information about you for the purpose of carrying a credit check and to obtain credit reports from any third party agency.</p>
          </div>
          <div className="space-y-4">
            <h2 className="text-brand-navy font-black uppercase tracking-tight text-[16px] border-l-4 border-brand-lime pl-4">
              07. Disputes
            </h2>
            <p className="text-sm">Parties will endeavour to resolve disputes by good faith negotiations. If unresolved, either party may refer the dispute to mediation with costs shared equally.</p>
          </div>
        </section>

        {/* 08. Privacy & Confidentiality */}
        <section className="space-y-4 bg-brand-light-blue p-8 rounded-sm">
          <h2 className="text-brand-navy font-black uppercase tracking-tight text-[16px] border-l-4 border-brand-navy pl-4">
            08. Privacy & Confidentiality
          </h2>
          <p>You agree to preserve the privacy of personal information concerning any of our candidates to a standard not less than that prescribed by the <strong>Privacy Act 1993</strong>.</p>
          <p>You must maintain the confidentiality of any information that we communicate to you and identify as being confidential. You must identify any information that you require us to keep confidential. If not identified, we may use it for the purpose of providing placement services.</p>
          <div className="text-sm italic pt-4 border-t border-brand-navy/10">
            <p><strong>Expressly Confidential:</strong> Your current staff and human resources strategies.</p>
          </div>
        </section>

        {/* --- DOWNLOAD BUTTON --- */}
        <div className="pt-12 flex justify-center md:justify-start">
          <a 
            href="/general-terms-permanent.pdf" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex items-center gap-3 bg-brand-lime hover:bg-brand-navy text-white px-10 py-5 font-black text-[13px] tracking-[0.2em] uppercase transition-all duration-300 rounded-sm shadow-xl group"
          >
            <Download size={20} className="group-hover:scale-110 transition-transform" />
            Download PDF Version
          </a>
        </div>

      </div>
    </main>
  );
}