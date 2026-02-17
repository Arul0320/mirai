
import React from 'react';
import { INDUSTRIES } from '../constants';

const Industries: React.FC = () => {
  return (
    <div className="pt-24 min-h-screen bg-slate-50">
      <section className="py-20 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-black text-slate-900 mb-6">Vertical Solutions</h1>
          <p className="text-xl text-slate-600 max-w-3xl leading-relaxed">
            Deep domain expertise across five core sectors, helping global leaders solve industry-specific challenges through technology.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {INDUSTRIES.map(industry => (
              <div key={industry.id} className="bg-white p-10 rounded-3xl shadow-sm border border-slate-200 hover:shadow-xl hover:border-teal-500 transition-all group">
                <div className="text-5xl mb-6 group-hover:scale-110 transition-transform origin-left">{industry.icon}</div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">{industry.name}</h2>
                <p className="text-slate-600 mb-6 text-sm font-medium">{industry.description}</p>
                <div className="border-t border-slate-100 pt-6">
                  <p className="text-slate-500 text-sm leading-relaxed">{industry.details}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Industries;
