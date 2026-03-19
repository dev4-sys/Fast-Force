import Image from "next/image";
import Link from "next/link";

const SERVICE_SECTIONS = [
  {
    title: "OUR SPECIALITY IN TRADES/CONSTRUCTION",
    description: "We have a wide talent pool in construction and trades, offering skilled candidates ranging from qualified painters and drainlayers to general labourers and everything in between.",
    image: "/builder.jpg", 
    imageAlt: "Construction worker on site",
    reverse: false,
    bgColor: "bg-white"
  },
  {
    title: "OUR SPECIALITY IN WAREHOUSING & DRIVERS",
    description: "We supply workers for roles ranging from Pick Packers to Class 5 drivers and everything in between.",
    image: "/warehouse-c.jpg", 
    imageAlt: "Warehouse operations",
    reverse: true,
    bgColor: "bg-[#f5f5f5]" 
  },
  {
    title: "OUR SPECIALITY IN FARMING",
    description: "Looking for a Dairy farm worker, Harvesters, farm hand or machine operator? Look no further, get in touch with us!",
    image: "/iStock-961141132.jpg", // From image_eeea62.jpg
    imageAlt: "Farming machinery and worker",
    reverse: false,
    bgColor: "bg-white"
  },
  {
    title: "OUR SPECIALITY IN RELIEF DRIVER SERVICES",
    description: "We supply verified drivers with class 1, 2, 4 and 5 for long and short-term assignments to keep you moving.",
    image: "/relief-driver.jpg", // From image_eeea62.jpg
    imageAlt: "Relief driver with commercial truck",
    reverse: true,
    bgColor: "bg-[#f5f5f5]" 
  },
  {
    title: "Our Speciality in HEALTH CARE SERVICES",
    description: "We have Registered Nurses and Caregivers available to assist you for short and long term care. We have a pool of competent candidates who are ready to provide exceptional care.",
    image: "/Health-Care-Nurse.jpg", // From image_eeea62.jpg
    imageAlt: "Our Speciality in HEALTH CARE SERVICES",
    reverse: false,
    bgColor: "bg-white"
  }
];

export default function CoreServices() {
  return (
    <div className="bg-white">
      {/* --- PAGE HEADER --- */}
      <section className="bg-white py-20 px-6 max-w-7xl mx-auto">
        <h1 className="text-[#005177] font-black text-4xl tracking-tighter uppercase mb-4">
          Core <span className="text-[#74B72E]">Services</span>
        </h1>
        <div className="w-20 h-1 bg-[#74B72E]"></div>
      </section>

      {/* --- SERVICE SECTIONS --- */}
      <section>
        {SERVICE_SECTIONS.map((section, idx) => (
          <div key={idx} className={`${section.bgColor} w-full py-20 md:py-28 border-b border-zinc-100 last:border-0`}>
            <div 
              className={`flex flex-col lg:flex-row items-center max-w-7xl mx-auto px-6 gap-12 lg:gap-24 ${
                section.reverse ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* Text Content */}
              <div className="flex-1 space-y-8">
                <h2 className="text-[#333333] font-black text-2xl md:text-4xl tracking-tight uppercase leading-tight">
                  {section.title}
                </h2>
                <p className="text-zinc-500 text-[15px] leading-relaxed max-w-xl">
                  {section.description}
                </p>
                
                {/* Learn More Button with Arrow Graphic */}
                <Link 
                  href="/contact" 
                  className="inline-flex items-center gap-3 bg-[#005177] text-white px-6 py-3 text-[13px] font-bold tracking-widest hover:bg-[#74B72E] transition-all group w-fit"
                >
                  <span className="w-0 h-0 border-t-[6px] border-t-transparent border-l-[10px] border-l-[#74B72E] border-b-[6px] border-b-transparent group-hover:border-l-white transition-colors"></span>
                  LEARN MORE
                </Link>
              </div>

              {/* Smaller Contained Image */}
              <div className="flex-1 w-full max-w-[550px]">
                <div className="relative aspect-[4/3] overflow-hidden rounded-sm shadow-xl border-4 border-white">
                  <Image
                    src={section.image}
                    alt={section.imageAlt}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}