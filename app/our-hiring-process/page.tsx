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
    bgColor: "bg-brand-light"
  }
];

export default function HiringProcess() {
  return (
    <main className="bg-white">
      {/* --- PAGE HEADER --- */}
      <section className="relative h-[400px] md:h-[500px] flex items-center overflow-hidden">
        <Image 
          src="/review.jpg" 
          alt="Hiring Process Header"
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
        />
        {/* Overlay using brand color variable from CSS */}
        <div className="absolute inset-0 bg-brand-navy/85"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full flex flex-col md:flex-row justify-between items-center gap-10">
          <div className="max-w-2xl">
            <h1 className="text-white font-black text-3xl md:text-6xl tracking-tighter uppercase mb-6 leading-tight">
              FIND THE RIGHT WORK FORCE FOR YOUR ORGANIZATION
            </h1>
            <div className="w-24 h-2 bg-brand-lime"></div>
          </div>

          <Link 
            href="/contact" 
            className="inline-flex items-center bg-brand-navy text-white pr-8 border border-white/20 hover:bg-brand-lime transition-all duration-300 group shrink-0"
          >
            <span className="bg-brand-lime p-5 mr-6 group-hover:bg-brand-navy transition-colors">
              <svg viewBox="0 0 24 24" className="w-6 h-6 fill-white" xmlns="http://www.w3.org/2000/svg">
                <path d="M8 5v14l11-7z" />
              </svg>
            </span>
            <span className="text-sm font-black tracking-widest uppercase">
              Enquire Now
            </span>
          </Link>
        </div>
      </section>

      {/* --- PROCESS STEPS --- */}
      <section>
        {HIRING_STEPS.map((step, idx) => (
          <div key={idx} className={`${step.bgColor} py-20 md:py-32 border-b border-zinc-100 last:border-0`}>
            <div 
              className={`flex flex-col lg:flex-row items-center max-w-7xl mx-auto px-6 gap-12 lg:gap-24 ${
                step.reverse ? "lg:flex-row-reverse" : ""
              }`}
            >
              <div className="flex-1 space-y-6">
                <h2 className="text-brand-lime font-black text-2xl md:text-4xl tracking-tight uppercase leading-tight">
                  {step.title}
                </h2>
                <p className="text-zinc-500 text-lg leading-relaxed font-medium">
                  {step.description}
                </p>
              </div>

              <div className="flex-1 w-full max-w-[550px]">
                <div className="relative aspect-[4/3] overflow-hidden rounded-sm shadow-2xl border-[12px] border-white">
                  <Image
                    src={step.image}
                    alt={step.imageAlt}
                    fill
                    sizes="(max-width: 768px) 100vw, 550px"
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* --- FLOWCHART SECTION --- */}
      <section className="py-24 px-6 bg-white border-t border-zinc-100">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 text-center lg:text-left">
            <h2 className="text-brand-navy font-black text-3xl md:text-4xl tracking-tighter uppercase mb-6">
              HUNT TAILORED TO THE JOB
            </h2>
            <div className="space-y-4 max-w-4xl mx-auto lg:mx-0">
              <p className="text-zinc-800 font-bold text-xl leading-snug">
                After the initial process, our consultant will visit your premises to get to know you and the business requirements better.
              </p>
              <p className="text-zinc-500 text-lg">
                Once we have all we need to run a talent search for the client, we:
              </p>
            </div>
          </div>

          <div className="w-full relative mt-10 p-4 bg-slate-50 border border-zinc-100 shadow-inner rounded-sm">
            <Image
              src="/our.jpg" // Fixed backslash issue
              alt="Fast Force Work Process Flowchart"
              width={1200}
              height={600}
              className="w-full h-auto object-contain mx-auto"
              priority
            />
          </div>
        </div>
      </section>
    </main>
  );
}