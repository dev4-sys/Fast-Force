import Image from "next/image";

const FEATURES_DATA = [
  { feature: "Accredited Employer", what: "Gives you an access to the international candidate market", benefit: "Best possible return on your investment in the staffing" },
  { feature: "In-house Drug testing", what: "Access to the drug free candidate pool", benefit: "Health and Safety compliant candidates" },
  { feature: "Immigration Assistance", what: "Immigration guidance for Accreditation and work visa application", benefit: "Instant advise on any immigration matters" },
  { feature: "Background Verified Candidates", what: "Access to the candidates whose MOJ and references are verified", benefit: "Save you all the time running background checks and lowering the risk of hiring unverified applicants" },
  { feature: "Pre-Selection", what: "Save Time – Money", benefit: "Allow you to concentrate on other important tasks" },
  { feature: "90 Days Guarantee", what: "Safeguarded should temporary or permanent be found unsuitable", benefit: "Your investment with us in finding you the right talent is protected as we would replace any unsatisfactory placement subject to our T&C" },
  { feature: "Temp to Permanent Facility", what: "Trial period", benefit: "You can “try before you buy”- you can assess them you employ them on permanent basis" },
  { feature: "Only Pay for the Hours Temps Work", what: "Cost effective", benefit: "Your cost and responsibility can be contained" },
  { feature: "Temps are on Our Payroll", what: "No wage or admin cost", benefit: "Your costs are minimized" },
  { feature: "Candidate Care", what: "Commitment, same temps, flexible, quick learners.", benefit: "Because we look after our temps, you can be assured that you will be supplied with happy competent works, therefore your standards are met" },
  { feature: "Full Resume", what: "Full information, ease of selection, shorter interview, time effective", benefit: "You will have access to best talent pool" },
  { feature: "Well Qualified Consultants", what: "Able to make a more well qualified and suitable decision in the whole process", benefit: "You will only have to interview the most suitable and qualified applicants which will save you a lot of time." },
  { feature: "Speed of Response", what: "Cost effectiveness, less downtime, minimum disruption to workforce", benefit: "You will have the minimum disruption to your organization, your work output/profit/sales will not be affected" },
  { feature: "Highly Sensitive Work Process", what: "No information leaked internally/externally", benefit: "Any of your confidential information or matter will be secured and will not be disclosed to anyone" },
  { feature: "Professional Temps", what: "Continuity, stability, lack of need for re-briefing due to regular temps", benefit: "You can be assured that your work will be completed to the highest standard" },
  { feature: "Well Established Company", what: "Tried and tested methods", benefit: "You can be assured that you are dealing with a professional organization" },
];

export default function WhyUs() {
  return (
    <div className="bg-white">
      {/* --- PAGE HEADER WITH BACKGROUND IMAGE --- */}
      <section className="relative h-[300px] md:h-[400px] flex items-center overflow-hidden">
        <Image 
          src="/whyus.jpg" // High-quality image representing client consultation
          alt="Why Fast Force Header"
          fill
          className="object-cover object-center"
          priority
        />
        {/* Dark Overlay for branding and text contrast */}
        <div className="absolute inset-0 bg-[#005177]/85"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
          <h1 className="text-white font-black text-4xl md:text-6xl tracking-tighter uppercase mb-6 leading-none">
            WHY <span className="text-[#74B72E]">US</span>
          </h1>
          <div className="w-20 h-1.5 bg-[#74B72E]"></div>
        </div>
      </section>

      {/* --- INTRO CONTENT --- */}
      <section className="py-16 px-6 max-w-7xl mx-auto">
        <div className="max-w-4xl">
          <p className="text-zinc-600 text-[16px] leading-relaxed mb-6 font-medium">
            At Fast Force, there are various service features and benefits designed to assist our clients easing the challenges of hiring. Most of the services&apos; features are custom designed and benefits are explained as per the client needs after a thorough consultation. 
          </p>
          <div className="bg-[#f8fafc] border-l-4 border-[#005177] p-6 mb-8">
            <p className="text-zinc-800 text-[15px] font-bold italic leading-relaxed">
              &quot;Our consultants are not one size fits all thinkers. We can assure that you will be guided and provided with the desired outcome in a timely manner.&quot;
            </p>
          </div>
          <p className="text-zinc-500 text-[15px] font-bold uppercase tracking-tight">
            All the services at any level are carefully designed while keeping QUALITY in mind. Below is the overview of some Features and Benefits:
          </p>
        </div>
      </section>

      {/* --- FEATURES TABLE --- */}
      <section className="pb-24 px-6 max-w-7xl mx-auto overflow-x-auto">
        <div className="min-w-[800px] shadow-2xl border border-zinc-200 rounded-sm">
          <table className="w-full border-collapse text-[14px]">
            <thead>
              <tr className="bg-[#005177] text-white">
                <th className="p-5 text-left font-black uppercase tracking-widest border-b border-[#003d5a]">Features</th>
                <th className="p-5 text-left font-black uppercase tracking-widest border-b border-[#003d5a]">What do you get?</th>
                <th className="p-5 text-left font-black uppercase tracking-widest border-b border-[#003d5a]">Client Benefits</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-200">
              {FEATURES_DATA.map((row, idx) => (
                <tr key={idx} className="hover:bg-zinc-50 transition-colors group">
                  <td className="p-5 font-black text-[#005177] align-top bg-zinc-50/50 group-hover:bg-white w-1/4">
                    <div className="flex items-start gap-2">
                       <span className="text-[#74B72E] font-bold">•</span>
                       {row.feature}
                    </div>
                  </td>
                  <td className="p-5 text-zinc-600 align-top leading-relaxed w-1/3 italic">
                    {row.what}
                  </td>
                  <td className="p-5 text-zinc-600 align-top leading-relaxed">
                    {row.benefit}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}