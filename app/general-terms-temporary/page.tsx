import Image from "next/image";
import { Download, ShieldCheck, Clock, AlertTriangle } from "lucide-react";

export default function GeneralTermsTemporary() {
  return (
    <main className="bg-white min-h-screen pb-20">
      {/* --- PAGE HEADER --- */}
      <section className="relative h-[300px] md:h-[450px] flex items-center overflow-hidden">
        <Image 
          src="/temp-header.jpg" // Ensure you have a relevant image in /public
          alt="Temporary Terms Header"
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-brand-navy/85"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
          <h1 className="text-white font-black text-3xl md:text-6xl tracking-tighter uppercase mb-6 leading-none">
            General Terms <span className="text-brand-lime">Temporary</span>
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
          <p>These terms apply to any request you make to Fast Force to find Temporary staff for you unless otherwise agreed in writing.</p>
          <p>By requesting Fast Force to find a Temporary for you, you are deemed to have accepted these terms. These terms will be retained until further modification.</p>
          <p>Fast Force may vary these terms from time to time; you are deemed to accept these variations from the next request you make to us.</p>
        </section>

        {/* 02. Finding a Temporary candidate */}
        <section className="space-y-6">
          <h2 className="text-brand-navy font-black uppercase tracking-tight text-[16px] border-l-4 border-brand-lime pl-4">
            02. Finding a Temporary candidate
          </h2>
          
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-slate-50 p-6 border border-zinc-100 flex items-start gap-4">
              <Clock className="text-brand-lime shrink-0" size={24} />
              <p className="text-sm font-bold text-zinc-800 tracking-tight">
                Minimum assignment length is 6 hours.
              </p>
            </div>
            <div className="bg-slate-50 p-6 border border-zinc-100 flex items-start gap-4">
              <AlertTriangle className="text-brand-navy shrink-0" size={24} />
              <p className="text-sm font-bold text-zinc-800 tracking-tight">
                24-hour notice required for cancellations.
              </p>
            </div>
          </div>

          <p>You must provide Fast Force all necessary information needed to find a Temporary for you. If you require advertising outside our pre-defined job boards, you agree to pay associated costs.</p>
          
          <div className="bg-brand-light-blue p-6 rounded-sm border border-brand-navy/10">
            <p className="font-bold text-brand-navy mb-2">Temp-to-Perm Conversion:</p>
            <p>If you engage a Temporary as your employee within 6 months of the assignment termination, it is deemed a permanent placement. A placement fee (per our permanent schedule) will become immediately payable. No guarantee applies to Temporary-to-Permanent placements.</p>
          </div>
        </section>

        {/* 03. Liability & Insurance */}
        <section className="space-y-4">
          <h2 className="text-brand-navy font-black uppercase tracking-tight text-[16px] border-l-4 border-brand-lime pl-4">
            03. Liability & Insurance
          </h2>
          <p>Fast Force is not liable for loss of profit, revenue, or any indirect/consequential damages resulting from a failure to provide a Temporary or any delays.</p>
          <p className="bg-red-50 p-6 text-red-900 border-l-4 border-red-500 font-medium">
            <strong>Insurance:</strong> Fast Force does not provide insurance to Temporaries. It is your responsibility to have proper insurance covering Temporary Staff at your workplace, including company vehicle insurance if required.
          </p>
          <p>You will supervise the Temporary while on assignment and are responsible for all acts/omissions, including Health & Safety. Fast Force is not liable for any loss during cash handling as we do not provide direct supervision.</p>
        </section>

        {/* 04. Our Guarantee */}
        <section className="space-y-4">
          <h2 className="text-brand-navy font-black uppercase tracking-tight text-[16px] border-l-4 border-brand-lime pl-4">
            04. Our Guarantee
          </h2>
          <p>We guarantee the best fit. For unsatisfactory performance within the <strong>first 6 hours</strong> (after full training), Fast Force will supply a replacement with no charges to the client for those initial 6 hours.</p>
          <p><strong>Management:</strong> Fast Force handles all issues related to termination, performance, and discipline directly with the Temporary. Fast Force must be your first point of contact for any conduct issues.</p>
        </section>

        {/* 05. Charges and Payments */}
        <section className="space-y-4">
          <h2 className="text-brand-navy font-black uppercase tracking-tight text-[16px] border-l-4 border-brand-lime pl-4">
            05. Charges and Payments
          </h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>Payments are in NZD and payable within <strong>10 days</strong>.</li>
            <li>Rates are hourly, including rest breaks but excluding meal breaks (30+ mins).</li>
            <li><strong>Public Holidays:</strong> Charged at 1.5x. <strong>Christmas Day:</strong> Charged at double time.</li>
            <li>Timesheets must be approved and returned by <strong>Monday 12pm</strong>. If not received, we will pay based on the Temporary&apos;s submitted hours.</li>
            <li>Less than 24 hours notice for cancellation results in a 6-hour minimum charge.</li>
          </ul>
        </section>

        {/* 06. Health & Safety */}
        <section className="space-y-4 bg-zinc-900 text-zinc-300 p-8 rounded-sm">
          <div className="flex items-center gap-3 mb-4">
            <ShieldCheck className="text-brand-lime" size={28} />
            <h2 className="text-white font-black uppercase tracking-tight text-[18px]">
              Health & Safety Compliance
            </h2>
          </div>
          <p>The Client agrees to comply with the <strong>Health and Safety at Work Act 2015</strong>. You must implement risk management systems, provide appropriate training/inductions, and ensure a safe workplace.</p>
          <p>Fast Force also shares this responsibility and provides basic inductions. We invite clients to submit training plans so Temps can be vetted before starting. If a breach occurs, Fast Force may suspend the engagement until remedied, while charges remain payable.</p>
          <p className="text-brand-lime font-bold">You must provide any required PPE or materials unless we have specifically agreed to provide them.</p>
        </section>

        {/* 07. Legal Clauses (Combined) */}
        <div className="grid md:grid-cols-2 gap-8 pt-8 border-t border-zinc-100">
          <section className="space-y-4">
            <h2 className="text-brand-navy font-black uppercase tracking-tight text-[15px]">Privacy & Confidentiality</h2>
            <p className="text-xs">You must preserve the privacy of personal information per the <strong>Privacy Act 1993</strong>. Confidential information including your current staff and HR strategies will not be disclosed by us without consent.</p>
          </section>
          <section className="space-y-4">
            <h2 className="text-brand-navy font-black uppercase tracking-tight text-[15px]">Disputes & Law</h2>
            <p className="text-xs">Disputes will be resolved via good faith negotiations or mediation. Our relationship is governed by <strong>New Zealand Law</strong>.</p>
          </section>
        </div>

        {/* --- DOWNLOAD BUTTON --- */}
        <div className="pt-12 flex justify-center md:justify-start">
          <a 
            href="/general-terms-temparory.pdf" 
            className="flex items-center gap-3 bg-brand-navy hover:bg-brand-lime text-white px-10 py-5 font-black text-[13px] tracking-[0.2em] uppercase transition-all duration-300 rounded-sm shadow-xl group"
          >
            <Download size={20} className="group-hover:translate-y-1 transition-transform" />
            Download Temporary Terms PDF
          </a>
        </div>

      </div>
    </main>
  );
}