import Image from "next/image";
import Link from "next/link";

const HIRING_STEPS = [
  {
    title: "TELL US ABOUT YOUR HIRING NEEDS",
    description: "Submit your job vacancy online in just minutes, or simply call us. Fast Force is committed to finding and delivering exactly what you require. Whether you are looking for a temporary employee who can start right away or a permanent employee to join your team, we are 100% committed to finding employees who are the best fit for your company.",
    image: "/tell-us.jpg", 
    imageAlt: "Hiring process on laptop",
    reverse: false,
    bgColor: "bg-white"
  },
  {
    title: "REVIEW AND SELECT CANDIDATES",
    description: "We will provide you with a short-list of verified and skilled candidates. Our meticulous screening process ensures that you only spend time interviewing the best talent that fits your organizational culture and project requirements.",
    image: "/review.jpg", 
    imageAlt: "Reviewing candidate profiles",
    reverse: true,
    bgColor: "bg-[#f5f5f5]"
  }
];

export default function HiringProcess() {
  return (
    <div className="bg-white">
      {/* --- PAGE HEADER --- */}
      <section className="py-16 px-6 max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 border-b border-zinc-100">
        <div className="max-w-2xl">
          <h1 className="text-[#005177] font-black text-3xl md:text-4xl tracking-tighter uppercase mb-4 leading-tight">
            FIND THE RIGHT WORK FORCE FOR YOUR ORGANIZATION
          </h1>
          <div className="w-16 h-1 bg-[#74B72E]"></div>
        </div>
        
        {/* Specific "Enquire Now" button from image_ee8947.png */}
        <Link 
          href="/contact" 
          className="inline-flex items-center bg-[#005177] text-white pr-6 hover:bg-[#74B72E] transition-all duration-300 group shrink-0"
        >
          <span className="bg-[#74B72E] p-3 mr-4 group-hover:bg-[#003d5a] transition-colors">
            <svg viewBox="0 0 24 24" className="w-4 h-4 fill-white" xmlns="http://www.w3.org/2000/svg">
              <path d="M8 5v14l11-7z" />
            </svg>
          </span>
          <span className="text-[13px] font-black tracking-widest uppercase">
            Enquire Now
          </span>
        </Link>
      </section>

      {/* --- PROCESS STEPS --- */}
      <section>
        {HIRING_STEPS.map((step, idx) => (
          <div key={idx} className={`${step.bgColor} py-20 md:py-28 border-b border-zinc-100 last:border-0`}>
            <div 
              className={`flex flex-col lg:flex-row items-center max-w-7xl mx-auto px-6 gap-12 lg:gap-24 ${
                step.reverse ? "lg:flex-row-reverse" : ""
              }`}
            >
              <div className="flex-1 space-y-8">
                <h2 className="text-[#74B72E] font-black text-2xl md:text-3xl tracking-tight uppercase leading-tight">
                  {step.title}
                </h2>
                <p className="text-zinc-500 text-[15px] leading-relaxed font-medium">
                  {step.description}
                </p>
              </div>

              <div className="flex-1 w-full max-w-[500px]">
                <div className="relative aspect-[4/3] overflow-hidden rounded-sm shadow-xl border-4 border-white">
                  <Image
                    src={step.image}
                    alt={step.imageAlt}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* --- HUNT TAILORED TO THE JOB SECTION --- */}
      <section className="py-20 px-6 bg-white border-t border-zinc-100">
        <div className="max-w-7xl mx-auto">
          
          {/* 1. Header Text Content */}
          <div className="mb-12">
            <h2 className="text-[#005177] font-black text-3xl md:text-4xl tracking-tighter uppercase mb-4">
              HUNT TAILORED TO THE JOB
            </h2>
            <div className="space-y-4 max-w-4xl">
              <p className="text-[#333333] font-bold text-[16px] leading-tight">
                After initial process, our consultant will visit your premises to get to know you and the business requirements better.
              </p>
              <p className="text-zinc-500 text-[15px] leading-relaxed">
                Once we have all we need to run a talent search for the client, we:
              </p>
            </div>
          </div>

          {/* 2. Process Image (work-process-1024x503.jpg) */}
          <div className="w-full relative mt-10">
            <Image
              src="/work-process-1024x503.jpg" 
              alt="Fast Force Work Process"
              width={1024}
              height={503}
              className="w-full h-auto object-contain mx-auto"
              priority
            />
          </div>
        </div>
      </section>
    </div>
  );
}