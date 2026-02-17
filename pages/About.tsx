
import React from 'react';

const About: React.FC = () => {
  return (
    <div className="pt-24 min-h-screen bg-white">
      <section className="py-20 bg-slate-950 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-6xl font-black mb-8">Pioneering Progress</h1>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
            Founded with a vision to redefine how enterprises embrace technology, MIRAi World Technology has grown into a global leader in digital engineering.
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-8">Our Mission</h2>
              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                To empower organizations with intelligent digital solutions that drive meaningful growth, operational excellence, and lasting value in an ever-evolving technological landscape.
              </p>
              <div className="space-y-6">
                {[
                  { title: 'Excellence', desc: 'We deliver uncompromising quality in every line of code and every strategic consultation.' },
                  { title: 'Trust', desc: 'Transparency and integrity are the foundation of our global client partnerships.' },
                  { title: 'Innovation', desc: 'We don\'t just follow trends; we set them through continuous R&D and experimentation.' },
                ].map(val => (
                  <div key={val.title} className="flex space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-teal-100 rounded-2xl flex items-center justify-center text-teal-600 font-bold">0{val.title[0]}</div>
                    <div>
                      <h4 className="font-bold text-slate-900 mb-1">{val.title}</h4>
                      <p className="text-slate-600 text-sm leading-relaxed">{val.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <img src="https://picsum.photos/seed/about-img/800/1000" alt="Team" className="rounded-3xl shadow-2xl" />
              <div className="absolute -bottom-10 -left-10 bg-teal-600 p-8 rounded-3xl text-white hidden md:block">
                <p className="text-4xl font-black mb-1">15+</p>
                <p className="text-sm uppercase tracking-widest font-bold">Years of Innovation</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Leadership</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">Visionaries guiding the next generation of digital engineering.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
            {[
              { name: 'Dr. Elena Vance', role: 'Chief Executive Officer', image: 'https://picsum.photos/seed/ceo/400/400' },
              { name: 'Marcus Thorne', role: 'Chief Technology Officer', image: 'https://picsum.photos/seed/cto/400/400' },
              { name: 'Suki Yamamoto', role: 'Head of Global AI', image: 'https://picsum.photos/seed/ai-head/400/400' },
            ].map(leader => (
              <div key={leader.name} className="group">
                <div className="relative overflow-hidden rounded-3xl mb-6">
                  <img src={leader.image} alt={leader.name} className="w-full aspect-square object-cover transition-transform duration-500 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-0 group-hover:opacity-60 transition-opacity"></div>
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-1">{leader.name}</h4>
                <p className="text-teal-600 font-medium text-sm">{leader.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
