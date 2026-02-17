
import React from 'react';
import { Link } from 'react-router-dom';
import { SERVICES, INDUSTRIES, PLATFORMS } from '../constants';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-slate-950">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-900 to-teal-900/40"></div>
        <div className="absolute top-0 right-0 -mr-24 -mt-24 w-[40rem] h-[40rem] bg-teal-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 -ml-24 -mb-24 w-[30rem] h-[30rem] bg-blue-500/10 rounded-full blur-3xl"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10 py-24">
          <div className="lg:max-w-4xl">
            <span className="inline-block px-4 py-1.5 mb-6 text-xs font-bold tracking-widest text-teal-400 uppercase bg-teal-400/10 border border-teal-400/20 rounded-full">
              Modernization Engineering & AI
            </span>
            <h1 className="text-6xl md:text-8xl font-black text-white leading-tight mb-8 tracking-tighter">
              Engineering <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-400">Excellence</span> for a Digital World
            </h1>
            <p className="text-lg md:text-2xl text-slate-400 mb-12 max-w-3xl leading-relaxed font-light">
              MIRAi World Technology delivers global IT services and digital engineering solutions, accelerating modernization through proprietary frameworks and deep domain intelligence.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6">
              <Link to="/contact" className="px-10 py-5 bg-teal-500 hover:bg-teal-600 text-white rounded-2xl font-bold transition-all shadow-2xl shadow-teal-500/20 text-center text-lg">
                Let's Modernize
              </Link>
              <Link to="/platforms" className="px-10 py-5 bg-white/5 hover:bg-white/10 text-white border border-white/10 rounded-2xl font-bold transition-all backdrop-blur-md text-center text-lg">
                Our Platforms
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Modernization Focus */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-teal-600 font-bold uppercase tracking-widest text-sm mb-4">The MIRAi Advantage</h2>
              <h3 className="text-4xl md:text-5xl font-black text-slate-900 mb-8 leading-tight">Modernization is not just a migration. It's an evolution.</h3>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                Most companies move to the cloud. We help you thrive there. Our "Modernization Engineering" philosophy ensures your legacy systems don't just move, but transform into agile, AI-ready assets.
              </p>
              <div className="space-y-4">
                {['Platform-led Transformation', 'Cloud-Native Engineering', 'Data Intelligence Fabrics'].map(point => (
                  <div key={point} className="flex items-center space-x-3 text-slate-900 font-bold">
                    <svg className="w-5 h-5 text-teal-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                    <span>{point}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4 pt-12">
                <img src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=400" className="rounded-3xl shadow-xl w-full h-64 object-cover" />
                <img src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=400" className="rounded-3xl shadow-xl w-full h-48 object-cover" />
              </div>
              <div className="space-y-4">
                <img src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=400" className="rounded-3xl shadow-xl w-full h-48 object-cover" />
                <img src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=400" className="rounded-3xl shadow-xl w-full h-64 object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-teal-600 font-bold uppercase tracking-widest text-sm mb-4">Core Services</h2>
            <h3 className="text-4xl font-bold text-slate-900 mb-6">Expertise Across the Digital Value Chain</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {SERVICES.map((service) => (
              <div key={service.id} className="group bg-white p-8 rounded-3xl border border-slate-200 hover:border-teal-500 transition-all hover:shadow-2xl flex flex-col">
                <div className="text-4xl mb-6">{service.icon}</div>
                <h4 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-teal-600 transition-colors">{service.title}</h4>
                <p className="text-slate-500 text-sm mb-8 flex-grow">{service.description}</p>
                <Link to={`/services#${service.id}`} className="text-teal-600 font-bold text-sm inline-flex items-center group-hover:translate-x-2 transition-transform">
                  Learn More 
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Platforms Highlights */}
      <section className="py-24 bg-slate-950 text-white overflow-hidden relative">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-teal-500/20 via-transparent to-transparent"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16">
            <div className="max-w-2xl">
              <h2 className="text-teal-400 font-bold uppercase tracking-widest text-sm mb-4">Innovation Lab</h2>
              <h3 className="text-4xl md:text-5xl font-black mb-6">Accelerating with Proprietary IP</h3>
              <p className="text-slate-400 text-lg">We deliver results faster using our suite of modernization and data accelerators.</p>
            </div>
            <Link to="/platforms" className="mt-8 md:mt-0 px-8 py-3 bg-white text-slate-900 font-bold rounded-xl hover:bg-teal-500 hover:text-white transition-all">Explore Platforms</Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {PLATFORMS.map(platform => (
              <div key={platform.id} className="bg-white/5 border border-white/10 p-10 rounded-3xl hover:bg-white/10 transition-colors group">
                <span className="text-5xl mb-6 block">{platform.icon}</span>
                <h4 className="text-2xl font-bold mb-2">{platform.name}</h4>
                <p className="text-teal-400 text-xs font-bold uppercase tracking-widest mb-6">{platform.tagline}</p>
                <p className="text-slate-400 mb-8 leading-relaxed">{platform.description}</p>
                <ul className="grid grid-cols-1 gap-3">
                  {platform.features.slice(0, 2).map(f => (
                    <li key={f} className="text-sm text-slate-300 flex items-center">
                      <span className="w-1 h-1 bg-teal-500 rounded-full mr-3"></span>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-slate-400 font-bold uppercase tracking-widest text-xs mb-12">Trusted by Global Industry Leaders</p>
          <div className="flex flex-wrap justify-center items-center gap-16 opacity-50 grayscale hover:grayscale-0 transition-all duration-700">
             {/* Simple symbolic logos */}
             {['FINANCE', 'RETAIL', 'HEALTH', 'TECH', 'ENERGY'].map(logo => (
               <span key={logo} className="text-2xl font-black text-slate-300 hover:text-slate-900 transition-colors cursor-default">{logo} CORP</span>
             ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-teal-600">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-8">Scale Your Business with Intelligence.</h2>
          <p className="text-xl text-teal-50 mb-12 max-w-2xl mx-auto">Join the hundreds of enterprises partnering with MIRAi to lead the next digital wave.</p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <Link to="/contact" className="bg-slate-900 text-white px-10 py-5 rounded-2xl font-bold text-lg hover:bg-slate-800 transition-all shadow-2xl">
              Get in Touch
            </Link>
            <Link to="/case-studies" className="bg-white text-teal-700 px-10 py-5 rounded-2xl font-bold text-lg hover:bg-teal-50 transition-all shadow-xl">
              View Success Stories
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
