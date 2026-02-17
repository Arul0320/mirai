
import React from 'react';
import { PLATFORMS } from '../constants';

const Platforms: React.FC = () => {
  return (
    <div className="pt-24 min-h-screen bg-white">
      <section className="py-20 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-10">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <circle cx="100" cy="0" r="80" fill="teal" />
          </svg>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h1 className="text-5xl font-black mb-6">Platforms & Innovation</h1>
          <p className="text-xl text-slate-400 max-w-3xl leading-relaxed">
            We don't just use tools; we build them. Our proprietary accelerators and platforms ensure faster time-to-value for our global partners.
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-24">
            {PLATFORMS.map((platform, index) => (
              <div key={platform.id} className={`flex flex-col lg:flex-row gap-16 items-center ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
                <div className="flex-1">
                  <div className="flex items-center space-x-4 mb-6">
                    <span className="text-5xl">{platform.icon}</span>
                    <div>
                      <h2 className="text-3xl font-bold text-slate-900">{platform.name}</h2>
                      <p className="text-teal-600 font-bold text-sm tracking-widest uppercase">{platform.tagline}</p>
                    </div>
                  </div>
                  <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                    {platform.description}
                  </p>
                  <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100">
                    <h3 className="font-bold text-slate-900 mb-4 flex items-center">
                      <svg className="w-5 h-5 mr-2 text-teal-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                      Capabilities & Accelerators
                    </h3>
                    <ul className="space-y-3">
                      {platform.features.map(feature => (
                        <li key={feature} className="text-slate-600 text-sm flex items-center">
                          <span className="w-1.5 h-1.5 bg-teal-500 rounded-full mr-3"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="flex-1 bg-slate-100 rounded-3xl aspect-video flex items-center justify-center overflow-hidden shadow-2xl">
                  <img src={`https://picsum.photos/seed/${platform.id}/800/600`} alt={platform.name} className="w-full h-full object-cover" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-8">Our Innovation Lab</h2>
          <p className="text-slate-600 max-w-2xl mx-auto mb-12">
            Where 10% of our global engineering capacity is dedicated to exploring emerging tech like Quantum Computing and Autonomous Systems.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {['Edge AI', 'Quantum Ready', 'Web3 Systems', 'Bio-Informatics'].map(lab => (
              <div key={lab} className="p-6 bg-white rounded-2xl shadow-sm border border-slate-200">
                <p className="font-bold text-slate-800">{lab}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Platforms;
