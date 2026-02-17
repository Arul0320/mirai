
import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="pt-24 min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div>
            <h1 className="text-5xl font-black text-slate-900 mb-8">Let's Talk Results</h1>
            <p className="text-xl text-slate-600 mb-12 leading-relaxed">
              Have a complex engineering challenge? Looking to scale your AI capabilities? Our team of experts is ready to assist.
            </p>

            <div className="space-y-12">
              <div>
                <h4 className="font-bold text-slate-900 uppercase tracking-widest text-xs mb-6">Our Locations</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  {[
                    { city: 'Chennai', address: '' },
                    { city: 'Singapore', address: '' },
                    { city: 'Melbourne', address: '' },
                    { city: 'New York ', address: '' },
                  ].map(loc => (
                    <div key={loc.city}>
                      <p className="font-bold text-slate-900 mb-1">{loc.city}</p>
                      <p className="text-slate-500 text-sm leading-relaxed">{loc.address}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="font-bold text-slate-900 uppercase tracking-widest text-xs mb-6">General Enquiries</h4>
                <p className="text-slate-600 font-medium underline">hello@miraiworld.tech</p>
                <p className="text-slate-600 font-medium">+91919119452</p>
              </div>
            </div>
          </div>

          <div className="bg-slate-50 p-10 rounded-3xl border border-slate-100">
            {submitted ? (
              <div className="text-center py-20">
                <div className="w-16 h-16 bg-teal-100 text-teal-600 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">✓</div>
                <h3 className="text-2xl font-bold mb-4">Message Received</h3>
                <p className="text-slate-600">A MIRAi expert will contact you within 24 hours.</p>
                <button onClick={() => setSubmitted(false)} className="mt-8 text-teal-600 font-bold hover:underline">Send another message</button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">First Name</label>
                    <input type="text" required className="w-full bg-white border border-slate-200 px-4 py-3 rounded-xl focus:ring-2 focus:ring-teal-500 outline-none" />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">Last Name</label>
                    <input type="text" required className="w-full bg-white border border-slate-200 px-4 py-3 rounded-xl focus:ring-2 focus:ring-teal-500 outline-none" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Corporate Email</label>
                  <input type="email" required className="w-full bg-white border border-slate-200 px-4 py-3 rounded-xl focus:ring-2 focus:ring-teal-500 outline-none" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Company</label>
                  <input type="text" required className="w-full bg-white border border-slate-200 px-4 py-3 rounded-xl focus:ring-2 focus:ring-teal-500 outline-none" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Service of Interest</label>
                  <select className="w-full bg-white border border-slate-200 px-4 py-3 rounded-xl focus:ring-2 focus:ring-teal-500 outline-none appearance-none">
                    <option>Cloud Infrastructure</option>
                    <option>AI & Automation</option>
                    <option>Data Analytics</option>
                    <option>Cybersecurity</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Project Details</label>
                  <textarea rows={4} className="w-full bg-white border border-slate-200 px-4 py-3 rounded-xl focus:ring-2 focus:ring-teal-500 outline-none"></textarea>
                </div>
                <button type="submit" className="w-full bg-slate-900 text-white py-4 rounded-xl font-bold text-lg hover:bg-teal-600 transition-all shadow-xl">
                  Submit Inquiry
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
