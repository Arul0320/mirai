
import React from 'react';
import { JOBS } from '../constants';

const Careers: React.FC = () => {
  return (
    <div className="pt-24 min-h-screen bg-slate-50">
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <h1 className="text-5xl font-black text-slate-900 mb-8 leading-tight">Be Part of the <span className="text-teal-600">Next Big Leap</span></h1>
              <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                At MIRAi, we don't just build software. We build careers. Join a global community of engineers, thinkers, and innovators solving the world's toughest enterprise challenges.
              </p>
              <div className="flex flex-wrap gap-4 mb-8">
                {['Remote First', 'Equity & Growth', 'Innovation Lab Access', 'Global Mobility'].map(perk => (
                  <span key={perk} className="bg-slate-100 px-4 py-2 rounded-lg text-slate-700 font-bold text-sm">
                    {perk}
                  </span>
                ))}
              </div>
            </div>
            <div className="relative">
              <img src="https://picsum.photos/seed/office-life/800/600" alt="MIRAi Culture" className="rounded-3xl shadow-xl" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl font-bold mb-4">Open Positions</h2>
              <p className="text-slate-600">Find your next challenge in our growing global team.</p>
            </div>
            <div className="hidden md:block">
              <input type="text" placeholder="Search roles..." className="bg-white border border-slate-200 px-6 py-3 rounded-full outline-none focus:ring-2 focus:ring-teal-500 w-80" />
            </div>
          </div>

          <div className="space-y-4">
            {JOBS.map(job => (
              <div key={job.id} className="bg-white p-8 rounded-2xl border border-slate-200 flex flex-col md:flex-row justify-between items-center hover:border-teal-400 transition-colors shadow-sm">
                <div className="mb-4 md:mb-0">
                  <span className="text-xs font-bold uppercase tracking-widest text-teal-600 mb-2 block">{job.category}</span>
                  <h3 className="text-xl font-bold text-slate-900 mb-1">{job.title}</h3>
                  <div className="flex space-x-4 text-sm text-slate-500">
                    <span className="flex items-center"><svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /></svg>{job.location}</span>
                    <span className="flex items-center"><svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>{job.type}</span>
                  </div>
                </div>
                <button className="bg-slate-900 text-white px-8 py-3 rounded-xl font-bold hover:bg-teal-600 transition-all">
                  Apply Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Careers;
