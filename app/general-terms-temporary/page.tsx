import { Download } from "lucide-react";

export default function GeneralTermsTemporary() {
  return (
    <div className="bg-white min-h-screen pb-20">
      {/* --- HEADER --- */}
      <section className="bg-[#005177] py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-white font-black text-3xl md:text-4xl tracking-tighter uppercase mb-4">
            General Terms <span className="text-[#74B72E]">Temporary</span>
          </h1>
          <div className="w-16 h-1 bg-[#74B72E]"></div>
        </div>
      </section>

      {/* --- VERTICAL CONTENT START --- */}
      <div className="max-w-4xl mx-auto px-6 py-12 space-y-10 text-zinc-600 text-[15px] leading-relaxed">
        
        {/* Section 1 */}
        <section className="space-y-4">
          <h2 className="text-[#005177] font-bold uppercase tracking-tight text-[15px]">About these terms</h2>
          <p>These terms apply to any request you make to Fast Force to find Temporary for you unless otherwise agreed in writing between Fast Force.</p>
          <p>By you requesting Fast Force to find a Temporary for you, you are deemed to have accepted these terms. These terms will be retained until further modification.</p>
          <p>Fast Force may vary these terms time to time and you are deemed to accept these variations from the next request you make to us to find candidates for you.</p>
        </section>

        {/* Section 2 */}
        <section className="space-y-4">
          <h2 className="text-[#005177] font-bold uppercase tracking-tight text-[15px]">Finding a Temporary candidate</h2>
          <p>You must provide Fast Force all the necessary information needed to find a Temporary for you. Fast Force has pre-defined job boards to publish any vacancy. If you need us to advertise on outside these channels you agree to pay for the associated cost with it.</p>
          <p>Minimum assignment length is 6 hours.</p>
          <p>Where within 6 months of the termination of an assignment; you or anyone related to your organisation engage Temporary as your employee, will be deemed a permanent placement and a placement fee (In accordance with permanent placement fee schedule) will apply and become immediately payable to Fast Force.</p>
          <p>No guarantee applies to Temporary to permanent placement.</p>
        </section>

        {/* Section 3 */}
        <section className="space-y-4">
          <h2 className="text-[#005177] font-bold uppercase tracking-tight text-[15px]">Fast Force is not liable for</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>Loss, damage, cost or expense of any kind whatsoever in connection with any delay or failure to provide Temporary for any order.</li>
            <li>Loss of profit or savings, loss of revenue, loss of an opportunity.</li>
            <li>Loss, damage, cost or expense of any kind whatsoever which is indirect, consequential or of a special or punitive nature even if such loss, damage, cost was reasonably foreseeable.</li>
          </ul>
          <p>Fast Force does not provide any kind of insurance to Temporary so it is your business’s responsibility to have proper insurance in place to cover Temporary Staff on your workplace. If you require a Temporary to use company’s vehicle please make sure your organisation has insurance.</p>
          <p>You will supervise the Temporary while on assignment and is responsible for all acts and omission of Temporary staff including Health & Safety and Wellbeing of Temporary Staff while on duty.</p>
          <p>If a Temporary is required to do cash handling, this is in the understanding that as Fast Force does not provide direct supervision and therefore, will not be liable for any loss.</p>
        </section>

        {/* Section 4 */}
        <section className="space-y-4">
          <h2 className="text-[#005177] font-bold uppercase tracking-tight text-[15px]">Our Guarantee</h2>
          <p>Fast Force guarantee that Temporary provided to you for an assignment will be best fit. For an unsatisfactory performance of Temporary within 6 hours of commencement of an assignment after full training provided, Fast force will supply a replacement as soon as possible with no charges to client for those 6 hours.</p>
          <p>Fast Force handle all issues related to termination and performance directly to Temporary. If such need arises, Fast Force must be the first point of contact for you. Fast Force will support you and manages all issues such as discipline, performance and conduct directly with Temporary.</p>
        </section>

        {/* Section 5 */}
        <section className="space-y-4">
          <h2 className="text-[#005177] font-bold uppercase tracking-tight text-[15px]">Charges and Payments</h2>
          <p>All payments are to be made in New Zealand currency and are payable within 10 days from the invoicing date unless otherwise negotiated. All Temporary rates are hourly based and include the time for rest breaks but exclude the meal break of 30 minutes or longer.</p>
          <p>All Temporary workers are employed by Fast Force and are paid directly by Fast Force. On public holiday rate charge will be one and a half time the hourly. Christmas day will be charged at double time.</p>
          <p>Timesheets are to be approved by you and returned by Monday 12pm. If the approved sheet is not returned, Fast Force will accept the hours submitted by Temporary and will pay accordingly.</p>
          <p>Cancellation of an assignment must be advised 24 hours before commencement. Less than 24 hours’ notice will result in levy of minimum of 6 hours.</p>
        </section>

        {/* Section 6 */}
        <section className="space-y-4">
          <h2 className="text-[#005177] font-bold uppercase tracking-tight text-[15px]">Health & Safety</h2>
          <p>The Client agrees to comply with the Health and Safety at Work Act 2015. The Client will promptly notify Fast Force of any incident or near miss involving a Temporary. If the Client breaches any health and safety-related obligation, Fast Force may suspend the engagement until the breach has been remedied.</p>
          <p>Fast Force promote the Consult, Co-operate and Co-ordinate principle. Provide Temporary with uniform and PPE required for them to carry out work in a proper and safe manner unless we have agreed to provide it.</p>
        </section>

        {/* Section 7 */}
        <section className="space-y-4">
          <h2 className="text-[#005177] font-bold uppercase tracking-tight text-[15px]">Disputes & Legal</h2>
          <p>If a dispute arises, the parties will endeavour to resolve it by good faith negotiations. Any amendments to these terms must be agreed by the director of Fast Force and must be in writing. Our relationship with you is governed by New Zealand law.</p>
        </section>

        {/* Section 8 */}
        <section className="space-y-4">
          <h2 className="text-[#005177] font-bold uppercase tracking-tight text-[15px]">Privacy & Confidentiality</h2>
          <p>You agree to preserve the privacy of personal information concerning any of our candidates to a standard not less than that prescribed by the Privacy Act 1993. You must maintain the confidentiality of any information that we communicate to you and identify as being confidential.</p>
        </section>

        {/* --- VIEW/DOWNLOAD BUTTON --- */}
        <div className="pt-12 border-t border-zinc-100 flex justify-start">
          <a 
            href="\general-terms-temparory.pdf" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-3 bg-[#74B72E] hover:bg-[#005177] text-white px-8 py-5 font-black text-[13px] tracking-[0.2em] uppercase transition-all duration-300 rounded-sm shadow-md cursor-pointer"
          >
            <Download size={18} />
            View & Download PDF
          </a>
        </div>

      </div>
    </div>
  );
}