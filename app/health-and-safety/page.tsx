import Link from "next/link";
import { ChevronRight } from "lucide-react";

export default function HealthAndSafety() {
  const USEFUL_LINKS = [
    { name: "WHS Policy", href: "#" },
    { name: "Drug & Alcohol Policy", href: "#" },
    { name: "Health & Safety Guide", href: "#" },
    { name: "Client WHS Systems Checklist", href: "#" },
    { name: "Incident or Near Miss Report", href: "#" },
    { name: "Accident Investigation Form", href: "#" },
  ];

  const INDUCTION_POINTS = [
    "Work-related reference checks",
    "General H&S assessment",
    "Medical declaration",
    "Ministry of justice check",
    "ACC checks",
    "License checks",
    "Drug testing",
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* --- PAGE CONTENT --- */}
      <div className="max-w-7xl mx-auto px-6 py-20 lg:py-28">
        <div className="flex flex-col lg:flex-row gap-16">
          
          {/* Main Content Area */}
          <div className="flex-[2] space-y-8">
            <header>
              <h1 className="text-[#74B72E] font-black text-3xl md:text-4xl tracking-tighter uppercase mb-6">
                HEALTH & SAFETY
              </h1>
              <div className="w-16 h-1 bg-[#74B72E]"></div>
            </header>

            <div className="space-y-6 text-zinc-600 text-[15px] leading-relaxed">
              <p className="font-medium">
                Here at Fast Force, we are 100% committed to the health & safety of all our workers and others related to their workplace activities.
              </p>
              
              <p>
                As an agency, we try our best to make sure that every worker is attending a workplace which is risk-free, and they return home uninjured. This commitment always sees us increasing awareness of health and safety across all staff, candidates and clients involved with Fast Force.
              </p>

              <p>
                We have a customised, industry-leading health and safety induction which all our candidates complete. Every time we send out a worker to our client, they are provided with additional information which outlines the risks associated with the role. Having said so, we can assure that all our workers hold good general knowledge of health and safety. In addition, we ensure that the client has site-specific induction in place for the workers prior to commencing the assignment.
              </p>

              <div className="space-y-4 pt-4">
                <p className="font-bold text-[#333]">
                  We take full responsibility of our share in eliminating or minimising health and safety risks and injury prevention. Therefore, in our recruitment process, all our candidates go through a robust health and safety induction which covers the following:
                </p>
                
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 pl-2">
                  {INDUCTION_POINTS.map((point, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-[#74B72E]"></div>
                      <span className="font-medium">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <p>
                We do the training – so our client and candidate can have peace of mind. In addition, we also invite our clients to store their health and safety information on our site as videos or documents so that candidates can go through it. Once they have viewed or read the information, we&apos;ll ask the candidates a range of questions to make sure they understand all the information.
              </p>

              <p>
                Fast Force, on regular basis, conducts site visits and maintains communication with all stakeholders to understand the needs of each site. We promote clear and honest communication with our clients and candidates to consult, co-ordinate and co-operate for any health and safety issues.
              </p>
            </div>
          </div>

          {/* Sidebar Links */}
          <aside className="flex-1">
            <div className="bg-zinc-50 p-8 border border-zinc-100 rounded-sm sticky top-32">
              <h3 className="text-[#005177] font-black text-xl mb-8 tracking-tighter uppercase border-b-2 border-[#74B72E] pb-2 inline-block">
                USEFUL LINKS
              </h3>
              
              <ul className="space-y-1">
                {USEFUL_LINKS.map((link, i) => (
                  <li key={i} className="group border-b border-zinc-200 last:border-0">
                    <Link 
                      href={link.href}
                      className="flex items-center justify-between py-4 text-[#005177] font-bold text-[14px] hover:text-[#74B72E] transition-colors"
                    >
                      {link.name}
                      <ChevronRight size={18} className="text-[#74B72E] opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </aside>

        </div>
      </div>
    </div>
  );
}