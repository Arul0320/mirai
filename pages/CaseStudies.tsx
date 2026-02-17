
import React from 'react';
import { CASE_STUDIES } from '../constants';

const CaseStudies: React.FC = () => {
  return (
    <div className="pt-24 min-h-screen bg-white">
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-black text-slate-900 mb-6">Success Stories</h1>
          <p className="text-xl text-slate-600 max-w-3xl leading-relaxed">
            Proven engineering excellence. See how we've helped our clients transform their businesses and lead their industries.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-24">
            {CASE_STUDIES.map((study, index) => (
              <div key={study.id} className={`flex flex-col lg:flex-row gap-16 items-center ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
                <div className="flex-1">
                  <span className="text-teal-600 font-bold text-xs uppercase tracking-widest mb-2 block">{study.industry}</span>
                  <h2 className="text-3xl font-bold text-slate-900 mb-4">{study.client}</h2>
                  <div className="space-y-6 mb-8">
                    <div>
                      <h4 className="font-bold text-slate-800 text-sm mb-1 uppercase tracking-tighter">The Challenge</h4>
                      <p className="text-slate-600 leading-relaxed">{study.challenge}</p>
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-800 text-sm mb-1 uppercase tracking-tighter">The Solution</h4>
                      <p className="text-slate-600 leading-relaxed">{study.solution}</p>
                    </div>
                  </div>
                  <div className="bg-teal-50 p-6 rounded-2xl border border-teal-100">
                    <h4 className="font-bold text-teal-800 mb-4 flex items-center">
                      <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20"><path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" /></svg>
                      Measurable Impact
                    </h4>
                    <ul className="space-y-2">
                      {study.results.map(res => (
                        <li key={res} className="text-teal-700 font-medium flex items-center">
                          <span className="w-1.5 h-1.5 bg-teal-500 rounded-full mr-3"></span>
                          {res}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="flex-1 w-full rounded-3xl overflow-hidden shadow-2xl aspect-[4/3]">
                  <img src={study.image} alt={study.client} className="w-full h-full object-cover" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-slate-900 text-white text-center">
        <h2 className="text-3xl font-bold mb-6">Ready to create your success story?</h2>
        <a href="#/contact" className="inline-block bg-teal-500 hover:bg-teal-600 px-8 py-4 rounded-xl font-bold transition-all">Start Your Project</a>
      </section>
    </div>
  );
};

export default CaseStudies;
