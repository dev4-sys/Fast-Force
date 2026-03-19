// src/app/page.js

async function getServices() {
  // We are calling your WordPress URL directly here
  const res = await fetch("https://test.whatzup.in/graphql", {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    next: { revalidate: 10 }, 
    body: JSON.stringify({
      query: `
        query GetServices {
          services {
            nodes {
              title
              featuredImage {
                node {
                  sourceUrl
                }
              }
            }
          }
        }
      `,
    }),
  });

  const json = await res.json();

  // If there's an error in the data, it returns an empty list so the site doesn't crash
  return json.data?.services?.nodes || [];
}

export default async function Home() {
  const services = await getServices();

  return (
    <main className="bg-zinc-950 min-h-screen p-10 text-white font-sans">
      <div className="max-w-6xl mx-auto">
        
        {/* Header section styled like Fastforce */}
        <header className="mb-16 border-b border-zinc-800 pb-8">
          <h1 className="text-6xl font-black italic uppercase tracking-tighter">
            FAST<span className="text-yellow-500">FORCE</span>
          </h1>
          <p className="text-zinc-400 mt-2 font-bold uppercase tracking-widest">
            Heavy Haulage & Specialized Transport
          </p>
        </header>

        <section>
          <h2 className="text-3xl font-bold uppercase mb-8 border-l-4 border-yellow-500 pl-4">
            Our Services
          </h2>
          
          {/* Grid for Services */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.length > 0 ? (
              services.map((service) => (
                <div key={service.title} className="group bg-zinc-900 border border-zinc-800 hover:border-yellow-500 transition-all duration-300">
                  <div className="h-56 bg-zinc-800 overflow-hidden">
                    {service.featuredImage ? (
                      <img 
                        src={service.featuredImage.node.sourceUrl} 
                        alt={service.title} 
                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition duration-500" 
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-zinc-600 font-bold uppercase">
                        No Image
                      </div>
                    )}
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-black uppercase italic">{service.title}</h3>
                    <button className="mt-4 text-xs font-bold text-yellow-500 uppercase tracking-widest group-hover:underline">
                      View Details →
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-zinc-500 italic">No services found. Check your WordPress "Services" menu!</p>
            )}
          </div>
        </section>
      </div>
    </main>
  );
}