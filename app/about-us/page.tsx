import Image from "next/image";

export default function AboutUs() {
  return (
    <main className="bg-white">
      {/* --- HERO SECTION WITH PLAIN IMAGE --- */}
      <section className="relative h-[400px] md:h-[500px] flex items-center overflow-hidden">
        <Image 
          src="/aout-fast-force.jpg" // Updated filename as requested
          alt="Fast Force Story"
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
        />
        {/* No Overlay (removed blue overlay) */}
        
        {/* We need to ensure text is readable if the image is light. 
            I've changed the text to dark Navy for contrast. */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
          <h1 className="text-brand-navy font-black text-4xl md:text-7xl tracking-tighter uppercase mb-4">
            Our <span className="text-brand-lime">Story</span>
          </h1>
          <div className="w-24 h-2 bg-brand-lime mb-8"></div>
        </div>
      </section>

      {/* --- CONTENT SECTION --- */}
      <section className="py-24 px-6">
        <div className="max-w-3xl mx-auto text-zinc-600 text-lg md:text-xl leading-relaxed font-medium space-y-8">
          <p>
            Fast Force began out of the desire to contribute to New Zealand’s growing workforce, 
            by focussing on helping both our clients and candidates meet their specific needs. 
            Fast Force saves businesses time and money, while providing its employees with a 
            safe and respectful workplace.
          </p>
          
          <p>
            We are on a mission to match the right talent with the right businesses, 
            which will lead to fuller lives, stronger organisations, and richer communities. 
            The quality of our services is our fundamental principle.
          </p>
          
          <p>
            Fast Force aims to expand into more industries in New Zealand by 2025.
          </p>
        </div>
      </section>
    </main>
  );
}