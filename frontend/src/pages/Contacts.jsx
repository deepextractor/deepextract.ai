import React from 'react';
import { motion } from 'framer-motion';

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
      <form className="max-w-xl mx-auto mt-8 flex flex-col gap-6">
        <input type="text" placeholder="Your Name" className="bg-black border-2 neon-border rounded-lg px-4 py-3 text-[#00fff7] placeholder-[#00fff7]/60 focus:outline-none focus:ring-2 focus:ring-[#00fff7]" />
        <input type="email" placeholder="Your Email" className="bg-black border-2 neon-border rounded-lg px-4 py-3 text-[#00fff7] placeholder-[#00fff7]/60 focus:outline-none focus:ring-2 focus:ring-[#00fff7]" />
        <textarea placeholder="How can we help you?" className="bg-black border-2 neon-border rounded-lg px-4 py-3 text-[#00fff7] placeholder-[#00fff7]/60 focus:outline-none focus:ring-2 focus:ring-[#00fff7]" rows={5} />
        <button type="submit" className="bg-[#00fff7] text-black font-bold py-3 rounded-xl shadow-lg hover:bg-[#39ff14] hover:text-black transition border-2 neon-border">
          Send Message
        </button>
      </form>
    </div>
  </motion.section>
);

export default Contacts;