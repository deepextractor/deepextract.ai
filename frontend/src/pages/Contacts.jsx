import React from 'react';
import { motion } from 'framer-motion';
import Footer from '../components/Footer';

const Contacts = () => (
  <motion.section
    className="bg-black min-h-screen flex flex-col justify-center items-center"
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    viewport={{ once: true }}
  >
    <div className="w-full max-w-2xl bg-[#111] rounded-2xl shadow-2xl border-2 neon-border p-8">
      <h2 className="text-3xl font-bold mb-4 neon-glow-green">Contact Us</h2>
      <p className="text-lg max-w-2xl mx-auto mb-4 text-[#00fff7]">
        Ready to transform your business with AI? Reach out to our team for a personalized consultation or to request a demo.
      </p>
      <form action="https://formspree.io/f/xqaqprgw" method="POST" className="max-w-xl mx-auto mt-8 flex flex-col gap-6">
        <label htmlFor="name" className="text-left font-semibold text-[#00fff7]">Full Name</label>
        <input type="text" name="name" id="name" required className="bg-black border-2 neon-border rounded-lg px-4 py-3 text-[#00fff7] placeholder-[#00fff7]/60 focus:outline-none focus:ring-2 focus:ring-[#00fff7]" />
        <label htmlFor="email" className="text-left font-semibold text-[#00fff7]">Business Email</label>
        <input type="email" name="email" id="email" required className="bg-black border-2 neon-border rounded-lg px-4 py-3 text-[#00fff7] placeholder-[#00fff7]/60 focus:outline-none focus:ring-2 focus:ring-[#00fff7]" />
        <label htmlFor="company" className="text-left font-semibold text-[#00fff7]">Company Name</label>
        <input type="text" name="company" id="company" required className="bg-black border-2 neon-border rounded-lg px-4 py-3 text-[#00fff7] placeholder-[#00fff7]/60 focus:outline-none focus:ring-2 focus:ring-[#00fff7]" />
        <label htmlFor="message" className="text-left font-semibold text-[#00fff7]">Message</label>
        <textarea name="message" id="message" rows={5} required className="bg-black border-2 neon-border rounded-lg px-4 py-3 text-[#00fff7] placeholder-[#00fff7]/60 focus:outline-none focus:ring-2 focus:ring-[#00fff7]" />
        <button type="submit" className="bg-[#00fff7] text-black font-bold py-3 rounded-xl shadow-lg hover:bg-[#39ff14] hover:text-black transition border-2 neon-border">
          Submit Request
        </button>
      </form>
    </div>
    <Footer />
  </motion.section>
);

export default Contacts;