
import React from 'react';
import { SERVICES } from '../constants';

const Services: React.FC = () => {
  return (
    <div className="pt-24 min-h-screen bg-white">
      {/* Header */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-black text-slate-900 mb-6">Our Services</h1>
          <p className="text-xl text-slate-600 max-w-3xl leading-relaxed">
            From architecture to deployment, we provide end-to-end engineering excellence across the entire modern technology stack.
          </p>
        </div>
      </section>

      {/* Service List */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-32">
            {SERVICES.map((service, index) => (
              <div id={service.id} key={service.id} className={`flex flex-col lg:flex-row gap-16 items-center ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
                <div className="flex-1">
                  <div className="text-6xl mb-6">{service.icon}</div>
                  <h2 className="text-3xl font-bold text-slate-900 mb-6">{service.title}</h2>
                  <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="mb-10">
                    <h3 className="font-bold text-slate-900 uppercase tracking-widest text-sm mb-4">Key Benefits</h3>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {service.benefits.map(benefit => (
                        <li key={benefit} className="flex items-start">
                          <svg className="w-5 h-5 text-teal-500 mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                          <span className="text-slate-700 font-medium">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8 bg-slate-50 rounded-3xl">
                    <div>
                      <h4 className="font-bold text-slate-900 mb-2">Our Approach</h4>
                      <p className="text-sm text-slate-600 leading-relaxed">{service.approach}</p>
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 mb-2">Expected Outcome</h4>
                      <p className="text-sm text-slate-600 leading-relaxed">{service.outcome}</p>
                    </div>
                  </div>
                </div>
                <div className="flex-1 w-full">
                  <img src={`https://picsum.photos/seed/${service.id}/800/600`} alt={service.title} className="rounded-3xl shadow-2xl w-full object-cover" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
