import Image from "next/image";
import { Download } from "lucide-react";

export default function GeneralTermsTemporary() {
  return (
    <div className="bg-white min-h-screen pb-20">
      {/* --- PAGE HEADER WITH BACKGROUND IMAGE --- */}
      <section className="relative h-[300px] md:h-[400px] flex items-center overflow-hidden">
        <Image 
          src="/permnent.jpg" // Using a warehouse/logistics image for temporary staffing feel
          alt="Temporary Terms Header"
          fill
          className="object-cover object-center"
          priority
        />
        {/* Dark Overlay for branding and text contrast */}
        <div className="absolute inset-0 bg-[#005177]/85"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
          <h1 className="text-white font-black text-3xl md:text-5xl tracking-tighter uppercase mb-6 leading-none">
            General Terms <span className="text-[#74B72E]">Temporary</span>
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
          <p>These terms apply to any request you make to Fast Force to find Temporary staff for you unless otherwise agreed in writing.</p>
          <p>By requesting Fast Force to find a Temporary for you, you are deemed to have accepted these terms. These terms will be retained until further modification.</p>
        </section>

        <section className="space-y-4">
          <h2 className="text-[#005177] font-black uppercase tracking-tight text-[16px] border-l-4 border-[#74B72E] pl-4">
            02. Finding a Temporary candidate
          </h2>
          <p>You must provide Fast Force all the necessary information needed to find a Temporary for you. Minimum assignment length is <strong>6 hours</strong>.</p>
          <div className="bg-amber-50 p-6 border-l-4 border-amber-400 text-amber-900">
            <p className="font-bold">Conversion Clause:</p>
            <p className="mt-2">Where within 6 months of the termination of an assignment you engage the Temporary as your employee, a permanent placement fee will apply and become immediately payable.</p>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-[#005177] font-black uppercase tracking-tight text-[16px] border-l-4 border-[#74B72E] pl-4">
            03. Liability & Insurance
          </h2>
          <p>Fast Force does not provide insurance to Temporaries. It is your responsibility to have proper insurance in place to cover Temporary Staff at your workplace.</p>
          <ul className="list-disc pl-5 space-y-2 marker:text-[#74B72E]">
            <li>You will supervise the Temporary while on assignment.</li>
            <li>You are responsible for all acts and omissions of Temporary staff.</li>
            <li>Fast Force is not liable for loss of profit, revenue, or indirect consequential damage.</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-[#005177] font-black uppercase tracking-tight text-[16px] border-l-4 border-[#74B72E] pl-4">
            04. Our Guarantee
          </h2>
          <p>For an unsatisfactory performance of a Temporary within <strong>6 hours</strong> of commencement (after full training), Fast Force will supply a replacement with no charges to the client for those initial 6 hours.</p>
          <p className="font-bold text-[#333]">Fast Force must be the first point of contact for all performance or disciplinary issues.</p>
        </section>

        <section className="space-y-4">
          <h2 className="text-[#005177] font-black uppercase tracking-tight text-[16px] border-l-4 border-[#74B72E] pl-4">
            05. Charges and Payments
          </h2>
          <p>Invoices are payable within <strong>10 days</strong>. Rates are hourly and include rest breaks but exclude 30-minute meal breaks.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-zinc-50 p-4 border border-zinc-100">
              <span className="block font-bold text-[#005177]">Public Holidays</span>
              <span className="text-sm">Charged at 1.5x hourly rate.</span>
            </div>
            <div className="bg-zinc-50 p-4 border border-zinc-100">
              <span className="block font-bold text-[#005177]">Christmas Day</span>
              <span className="text-sm">Charged at double time (2x).</span>
            </div>
          </div>
          <p className="text-sm italic">Timesheets must be approved and returned by Monday 12pm.</p>
        </section>

        <section className="space-y-4">
          <h2 className="text-[#005177] font-black uppercase tracking-tight text-[16px] border-l-4 border-[#74B72E] pl-4">
            06. Health & Safety
          </h2>
          <p>The Client agrees to comply with the <strong>Health and Safety at Work Act 2015</strong>. You must promptly notify Fast Force of any incident or near miss involving a Temporary.</p>
          <p>We promote the <strong>Consult, Co-operate and Co-ordinate</strong> principle.</p>
        </section>

        {/* --- VIEW/DOWNLOAD BUTTON --- */}
        <div className="pt-12 border-t border-zinc-100 flex justify-center md:justify-start">
          <a 
            href="/general-terms-temporary.pdf" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-3 bg-[#74B72E] hover:bg-[#005177] text-white px-10 py-5 font-black text-[13px] tracking-[0.2em] uppercase transition-all duration-300 rounded-sm shadow-lg group"
          >
            <Download size={20} className="group-hover:scale-110 transition-transform" />
            View & Download PDF
          </a>
        </div>

      </div>
    </div>
  );
}