import React from 'react';
import { motion } from 'framer-motion';

const HeroSection = () => (
  <motion.section
    className="text-center pt-16 pb-12 bg-black rounded-2xl shadow-2xl mx-2 mt-4 border-2 border-[#00fff7]"
    initial={{ opacity: 0, y: -40 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
  >
    <img
      src="/logo192.png"
      alt="DeepExtract.AI Logo"
      className="mx-auto w-28 h-28 mb-8 rounded-full border-4 border-[#39ff14] bg-black drop-shadow-2xl"
    />
    <h1 className="text-6xl font-extrabold mb-4 text-[#39ff14] drop-shadow-lg">
      Understand more. <span className="text-[#00fff7]">Decide better.</span>
    </h1>
    <p className="text-2xl max-w-2xl mx-auto mb-6 text-[#00fff7]">
      Turn insights into impact with AI you can rely on.
    </p>
    <ul className="flex flex-wrap justify-center gap-4 mb-8 text-lg text-[#00fff7]">
      <li>• <span className="text-[#39ff14]">Boost performance</span></li>
      <li>• <span className="text-[#00fff7]">Reduce risk</span></li>
      <li>• <span className="text-[#39ff14]">Scale with confidence</span></li>
    </ul>
    <div className="flex justify-center gap-4 mb-6">
      <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition"><img src="/twitter.svg" alt="Twitter" className="w-8 h-8" /></a>
      <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition"><img src="/linkedin.svg" alt="LinkedIn" className="w-8 h-8" /></a>
      <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition"><img src="/github.svg" alt="GitHub" className="w-8 h-8" /></a>
    </div>
    <a
      href="#eidenai"
      className="inline-block px-10 py-4 rounded-xl bg-[#00fff7] text-black font-bold shadow-lg hover:bg-[#39ff14] hover:text-black transition text-xl border-2 border-[#39ff14]"
    >
      Discover EidenAI Suite
    </a>
  </motion.section>
);

export default HeroSection;
