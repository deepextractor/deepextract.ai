import React from 'react';

const Footer = () => (
  <footer className="w-full text-center py-10 bg-black mt-12 border-t border-[#00fff7]">
    <div className="flex flex-col items-center gap-2">
      <img
        src="/animated_logo_neon.gif"
        alt="Logo ExpertAI"
        className="w-12 h-12 rounded-full border-2 border-[#39ff14] bg-black"
      />
      <p className="text-sm text-[#00fff7]">
        Copyright @ 2025 DeepExtract.ai - All Rights Reserved
      </p>
      <div className="flex flex-wrap gap-4 justify-center text-xs text-[#39ff14]">
        <a href="#" className="hover:text-[#00fff7] hover:underline">Terms of use</a>
        <a href="#" className="hover:text-[#00fff7] hover:underline">Privacy Policy</a>
        <a href="#" className="hover:text-[#00fff7] hover:underline">Cookie Policy</a>
        <a href="#" className="hover:text-[#00fff7] hover:underline">Change your consent</a>
        <a href="#" className="hover:text-[#00fff7] hover:underline">Company Data</a>
        <a href="#" className="hover:text-[#00fff7] hover:underline">Whistleblowing Policy</a>
        <a href="#" className="hover:text-[#00fff7] hover:underline">Quality and Information Security Policy</a>
        <a href="#" className="hover:text-[#00fff7] hover:underline">Research Projects</a>
        <a href="#" className="hover:text-[#00fff7] hover:underline">Support</a>
      </div>
    </div>
  </footer>
);

export default Footer;
