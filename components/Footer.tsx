
import React from 'react';
import { Link } from 'react-router-dom';
import { NAVIGATION } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 text-slate-300 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div>
            <Link to="/" className="text-2xl font-bold text-white mb-6 block">
              MIRAi<span className="text-teal-400">.</span>
            </Link>
            <p className="text-slate-400 leading-relaxed mb-6">
              Engineering the future through intelligent digital transformation and enterprise-grade engineering.
            </p>
            <div className="flex space-x-4">
              {['LinkedIn', 'Twitter', 'GitHub'].map(social => (
                <a key={social} href="#" className="text-slate-500 hover:text-teal-400 transition-colors text-sm font-medium">
                  {social}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Quick Links</h4>
            <ul className="space-y-4">
              {NAVIGATION.slice(0, 4).map(item => (
                <li key={item.path}><Link to={item.path} className="hover:text-teal-400 transition-colors">{item.label}</Link></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Services</h4>
            <ul className="space-y-4">
              <li><Link to="/services" className="hover:text-teal-400 transition-colors">Cloud Strategy</Link></li>
              <li><Link to="/services" className="hover:text-teal-400 transition-colors">GenAI Platforms</Link></li>
              <li><Link to="/services" className="hover:text-teal-400 transition-colors">Cybersecurity</Link></li>
              <li><Link to="/services" className="hover:text-teal-400 transition-colors">Digital Product Design</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Global HQ</h4>
            <p className="text-slate-400 mb-4">
              Address here
            </p>
            <p className="text-slate-400">
              Email: <br />
              Phone:
            </p>
          </div>
        </div>

        <div className="border-t border-slate-900 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-slate-500">
          <p>© {new Date().getFullYear()} MIRAi World Technology. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-teal-400">Privacy Policy</a>
            <a href="#" className="hover:text-teal-400">Terms of Service</a>
            <a href="#" className="hover:text-teal-400">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
