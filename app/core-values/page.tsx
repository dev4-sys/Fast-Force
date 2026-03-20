import Image from "next/image";
import Link from "next/link";

const VALUES = [
  {
    title: "FAST",
    description: "Every job is due yesterday. We deliver fast results – Just as our world is demanding.",
    circleClass: "bg-[#439677]", // Teal/Emerald
    label: "Fast"
  },
  {
    title: "SERVICES",
    description: "We are focussed on giving above industry-standard services to our customers and candidates.",
    circleClass: "bg-[#005177]", // Brand Navy
    label: "Services"
  },
  {
    title: "RELIABLE",
    description: "We convey what we guarantee.",
    circleClass: "bg-[#74B72E]", // Brand Lime
    label: "Reliable"
  },
  {
    title: "TRUST",
    description: "We believe in establishing trust via honest communication and delivery – even if we fail on our commitment on any day.",
    circleClass: "bg-[#439677]",
    label: "Trust"
  },
  {
    title: "INNOVATIVE",
    description: "We will keep evolving our technological platform to suit industry and legal requirements.",
    circleClass: "bg-[#005177]",
    label: "Innovative"
  }
];

export default function CoreValues() {
  return (
    <main className="bg-white">
      {/* --- HERO SECTION WITH PLAIN IMAGE --- */}
      <section className="relative h-[300px] md:h-[450px] flex items-center overflow-hidden">
        <Image 
          src="/values.jpg" 
          alt="Fast Force Core Values"
          fill
          className="object-cover object-center"
          priority
        />
        {/* Removed Blue Overlay - Plain Image Only */}
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full text-center md:text-left">
          <h1 className="text-brand-navy font-black text-4xl md:text-7xl tracking-tighter uppercase mb-4 drop-shadow-sm">
            Core <span className="text-brand-lime">Values</span>
          </h1>
          <div className="w-24 h-2 bg-brand-lime mx-auto md:mx-0"></div>
        </div>
      </section>

      {/* --- VALUES CONTENT --- */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto space-y-32">
          {VALUES.map((val, index) => (
            <div 
              key={val.title}
              className={`flex flex-col md:flex-row items-center justify-between gap-12 ${
                index % 2 !== 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Text Side */}
              <div className="flex-1 space-y-4 text-center md:text-left">
                <h2 className="text-brand-navy font-black text-4xl md:text-6xl tracking-tight uppercase leading-none">
                  {val.title}
                </h2>
                <div className="w-12 h-1 bg-zinc-200 mb-6 mx-auto md:mx-0"></div>
                <p className="text-zinc-500 text-lg md:text-xl font-medium leading-relaxed max-w-md mx-auto md:mx-0">
                  {val.description}
                </p>
              </div>

              {/* Graphic Circle Side */}
              <div className="flex-1 flex justify-center">
                <div className={`w-64 h-64 md:w-80 md:h-80 rounded-full ${val.circleClass} flex flex-col items-center justify-center text-white shadow-2xl transition-all hover:scale-105 duration-500 border-[8px] border-white`}>
                  <div className="relative w-16 h-16 mb-4">
                    <div className="absolute inset-0 border-2 border-white/30 rotate-[30deg] translate-x-1"></div>
                    <div className="absolute inset-0 border-2 border-white rotate-[30deg]"></div>
                  </div>
                  <span className="text-xl md:text-2xl font-black tracking-[0.2em] uppercase">
                    {val.label}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- CTA SECTION --- */}
      <section className="bg-brand-navy py-20">
        <div className="max-w-4xl mx-auto px-6 text-center text-white">
          <h3 className="text-2xl md:text-4xl font-black uppercase mb-8">Fast Force by name, Fast by nature.</h3>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/register" className="bg-brand-lime text-brand-navy px-8 py-4 font-black uppercase tracking-widest hover:bg-white transition-colors">
              Request Talent
            </Link>
            <Link href="/contact" className="border-2 border-white text-white px-8 py-4 font-black uppercase tracking-widest hover:bg-white hover:text-brand-navy transition-colors">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}