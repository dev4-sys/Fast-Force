import Image from "next/image";

const OFFICE_LOCATIONS = [
  {
    city: "Christchurch Office",
    address: "520 Cranford Street, Papanui, Christchurch - 8051.",
    phone: "03 3350223",
    email: "join@fastforce.co.nz",
    hours: "8:30 am to 5pm",
    days: "Monday to Friday",
    embedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2894.417253509893!2d172.61715697682282!3d-43.49363067111029!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6d318bd99320b991%3A0xc3f3453b3b3b3b3b!2s520%20Cranford%20Street%2C%20Papanui%2C%20Christchurch%208051!5e0!3m2!1sen!2snz!4v1710000000000"
  },
  {
    city: "Ashburton Office",
    address: "2 Queens Drive, Ashburton, 7700.",
    phone: "02 25282386",
    email: "char@fastforce.co.nz",
    hours: "9 am to 3pm",
    days: "Monday to Friday",
    embedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2873.914972580799!2d171.74837557683935!3d-43.90097617109287!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6d2da3f0b3b3b3b3%3A0x3b3b3b3b3b3b3b3b!2s2%20Queens%20Drive%2C%20Allenton%2C%20Ashburton%207700!5e0!3m2!1sen!2snz!4v1710000000000"
  },
  {
    city: "Dunedin Office",
    address: "Regus, Level 1, 218 George Street, Dunedin, 9016.",
    phone: "02 12788917",
    email: "harry@fastforce.co.nz",
    hours: "9 am to 3pm",
    days: "Monday to Wednesday",
    embedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2777.247657891234!2d170.503456776918!3d-45.871234571072!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6d2da3f0b3b3b3b3%3A0x3b3b3b3b3b3b3b3b!2s218%20George%20Street%2C%20Dunedin%20Central%2C%20Dunedin%209016!5e0!3m2!1sen!2snz!4v1710000000000"
  }
];

export default function ContactPage() {
  return (
    <div className="bg-[#f5f5f5] min-h-screen">
      {/* --- PAGE HEADER WITH BACKGROUND --- */}
      <section className="relative h-[300px] md:h-[400px] flex items-center">
        <Image
          src="/contact-hero.jpg"
          alt="Contact Us Header"
          fill
          className="object-cover brightness-75"
          priority
        />
        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
          <h1 className="text-white font-black text-4xl md:text-5xl tracking-tighter uppercase">
            Contact <span className="text-[#74B72E]">Us</span>
          </h1>
          <div className="w-20 h-1 bg-[#74B72E] mt-4"></div>
        </div>
      </section>

      {/* --- FORM SECTION --- */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          
          {/* Form Side */}
          <div className="flex-1 w-full">
            <form className="space-y-6">
              <div>
                <label className="block text-zinc-500 text-sm mb-1">Full Name*</label>
                <input 
                  type="text" 
                  className="w-full p-3 border border-zinc-200 focus:outline-none focus:border-[#005177] bg-white transition-colors"
                  required 
                />
              </div>

              <div>
                <label className="block text-zinc-500 text-sm mb-1">Company Name*</label>
                <input 
                  type="text" 
                  className="w-full p-3 border border-zinc-200 focus:outline-none focus:border-[#005177] bg-white transition-colors"
                  required 
                />
              </div>

              <div>
                <label className="block text-zinc-500 text-sm mb-1">Email*</label>
                <input 
                  type="email" 
                  className="w-full p-3 border border-zinc-200 focus:outline-none focus:border-[#005177] bg-white transition-colors"
                  required 
                />
              </div>

              <div>
                <label className="block text-zinc-500 text-sm mb-1">Phone*</label>
                <input 
                  type="tel" 
                  className="w-full p-3 border border-zinc-200 focus:outline-none focus:border-[#005177] bg-white transition-colors"
                  required 
                />
              </div>

              <div>
                <label className="block text-zinc-500 text-sm mb-1">Your Message</label>
                <textarea 
                  rows={6}
                  className="w-full p-3 border border-zinc-200 focus:outline-none focus:border-[#005177] bg-white transition-colors"
                ></textarea>
              </div>

              {/* recaptcha placeholder */}
              <div className="bg-white border border-zinc-200 p-4 w-fit flex items-center gap-4">
                <input type="checkbox" className="w-5 h-5" id="robot" />
                <label htmlFor="robot" className="text-sm">I'm not a robot</label>
                <Image src="/recaptcha.png" alt="captcha" width={30} height={30} className="ml-4 opacity-50" />
              </div>

              <button 
                type="submit"
                className="bg-[#5a91cf] text-white px-10 py-3 font-bold text-xs tracking-widest hover:bg-[#005177] transition-all uppercase shadow-md"
              >
                Send
              </button>
            </form>
          </div>

          {/* Logo Side */}
          <div className="flex-1 flex justify-center items-center lg:pt-20">
            <div className="relative w-64 h-64 md:w-80 md:h-80 opacity-90">
              <Image 
                src="/logo-large.jpg"
                alt="Fast-Force Logo"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* --- NEW OFFICE LOCATIONS & MAPS SECTION --- */}
      <section className="bg-white py-20 border-t border-zinc-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {OFFICE_LOCATIONS.map((office, idx) => (
              <div key={idx} className="flex flex-col space-y-6">
                {/* Office Details */}
                <div className="space-y-2">
                  <h3 className="text-[#005177] font-black text-xl uppercase tracking-tighter">
                    {office.city}
                  </h3>
                  <div className="text-[14px] text-zinc-600 space-y-1 leading-relaxed">
                    <p>{office.address}</p>
                    <p><span className="font-bold text-zinc-800">Phone:</span> {office.phone}</p>
                    <p><span className="font-bold text-zinc-800">E-mail:</span> <a href={`mailto:${office.email}`} className="text-[#5a91cf] hover:underline">{office.email}</a></p>
                    <p><span className="font-bold text-zinc-800">Opening Hours:</span> {office.hours}</p>
                    <p className="italic text-zinc-400">{office.days}</p>
                  </div>
                </div>

                {/* Map Embed */}
                <div className="relative aspect-video w-full border border-zinc-200 shadow-sm overflow-hidden rounded-sm bg-zinc-50">
                  <iframe
                    src={office.embedUrl}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title={`Map of ${office.city}`}
                  ></iframe>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}