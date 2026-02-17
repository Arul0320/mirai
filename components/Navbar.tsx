
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { NAVIGATION } from '../constants';
import pic from '../assets/1.jpg';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 bg-white border-b border-slate-100 ${scrolled ? 'shadow-md py-3' : 'py-4'
      }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="relative w-12 h-12 flex items-center justify-center">
              <img
                src={pic}
                alt="MIRAi Logo"
                className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-110"
              />
            </div>
            <span className="text-2xl font-black tracking-tighter text-slate-900">
              MIRAi<span className="text-teal-600">.</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-8 items-center">
            {NAVIGATION.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-sm font-semibold transition-colors hover:text-teal-600 ${location.pathname === item.path ? 'text-teal-600' : 'text-slate-600'
                  }`}
              >
                {item.label}
              </Link>
            ))}
            <Link
              to="/contact"
              className="bg-slate-900 text-white px-6 py-2.5 rounded-full text-sm font-bold hover:bg-teal-600 transition-all transform hover:scale-105"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden p-2 text-slate-900"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
          >
            {isOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden absolute w-full bg-white shadow-xl transition-all duration-300 ease-in-out ${isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
        <div className="px-4 pt-2 pb-6 space-y-1 sm:px-3 border-t">
          {NAVIGATION.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className="block px-3 py-4 text-base font-bold text-slate-700 hover:text-teal-600 border-b border-slate-50"
            >
              {item.label}
            </Link>
          ))}
          <div className="pt-4">
            <Link to="/contact" className="block w-full text-center bg-teal-600 text-white px-5 py-3 rounded-lg font-bold">
              Contact Sales
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 