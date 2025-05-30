import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/solutions', label: 'Solutions' },
  { to: '/contact', label: 'Contact Us' },
];

const Navbar = () => {
  const location = useLocation();
  return (
    <nav className="w-full z-50 sticky top-0 shadow-lg bg-black text-[#00fff7] py-3 px-6 border-b-2 border-[#00fff7]">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img src="/animated_logo_neon.gif" alt="Logo" className="w-10 h-10 rounded-full border-2 border-[#39ff14] bg-black shadow" />
          <span className="text-2xl font-extrabold text-[#39ff14] tracking-tight drop-shadow">DeepExtract.AI</span>
        </div>
        <ul className="flex gap-6 md:gap-10 text-lg font-semibold">
          {navLinks.map(link => (
            <li key={link.to}>
              <Link
                to={link.to}
                className={`transition px-3 py-1 rounded-xl hover:bg-[#00fff7]/20 hover:text-[#39ff14] ${location.pathname === link.to ? 'bg-[#39ff14]/80 text-black shadow font-bold' : 'text-[#00fff7]'}`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;