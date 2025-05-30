import React from 'react';
import { motion } from 'framer-motion';
import Footer from '../components/Footer';

const Solutions = () => (
  <div className="p-8 max-w-5xl mx-auto space-y-16 bg-black min-h-screen">
    {/* Hero Section */}
    <motion.section
      className="text-center"
      initial={{ opacity: 0, y: -40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <h1 className="text-5xl font-extrabold mb-4 neon-glow-green">
        ExtractorAI Suite: Enterprise AI solutions designed for your needs, your industry
      </h1>
      <p className="text-xl max-w-3xl mx-auto mb-4 text-[#00fff7]">
        A new standard for solving complex AI adoption challenges. We help organizations transform how they access and apply knowledge through intelligent, purpose-built artificial intelligence.
      </p>
      <p className="text-lg max-w-2xl mx-auto text-[#00fff7]/80">
        ExtractorAI Suite delivers comprehensive, ready-to-deploy enterprise AI solutions tailored to your industry. It’s a unique combination: deep business process expertise, vertical market specialization, solid industry experience. ExtractorAI Suite puts your organization at the center, delivering cutting-edge technology and intelligent solutions to maximize business performance.
      </p>
    </motion.section>

    {/* Features Section */}
    <motion.section
      className="grid md:grid-cols-2 gap-8 items-start"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="space-y-6">
        <div className="bg-[#111] rounded-xl p-6 shadow-xl border-2 neon-border">
          <h2 className="text-2xl font-semibold mb-2 neon-glow-green">Hybrid AI</h2>
          <p className="text-[#00fff7]/80">Symbolic AI, LLM, Generative and Agentic AI: integrated technologies to turn data into a competitive advantage.</p>
        </div>
        <div className="bg-[#111] rounded-xl p-6 shadow-xl border-2 neon-border">
          <h2 className="text-2xl font-semibold mb-2 neon-glow-green">Domain Knowledge</h2>
          <p className="text-[#00fff7]/80">Deep process expertise to solve the most complex AI adoption challenges.</p>
        </div>
        <div className="bg-[#111] rounded-xl p-6 shadow-xl border-2 neon-border">
          <h2 className="text-2xl font-semibold mb-2 neon-glow-green">Tailored AI Solutions</h2>
          <p className="text-[#00fff7]/80">Ready-to-use industry-specific solutions designed to deliver measurable results.</p>
        </div>
        <div className="bg-[#111] rounded-xl p-6 shadow-xl border-2 neon-border">
          <h2 className="text-2xl font-semibold mb-2 neon-glow-green">Delivery</h2>
          <p className="text-[#00fff7]/80">Maximum flexibility, rapid integration and scalability via modular architecture to optimize your ROI.</p>
        </div>
      </div>
      <motion.div
        className="flex flex-col justify-center items-center"
        initial={{ scale: 0.95, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <img
          src="/animated_logo_neon.gif"
          alt="AI Solutions Logo"
          className="rounded-2xl shadow-lg w-full h-72 object-cover object-center border-4 border-[#00fff7]/40"
        />
      </motion.div>
    </motion.section>

    {/* Vision Section */}
    <motion.section
      className="bg-black rounded-2xl shadow-xl p-8 text-center border-2 neon-border mt-8"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <h2 className="text-3xl font-bold mb-4 neon-glow-green">
        ExtractorAI - from ancient Greek, “to know, to understand”
      </h2>
      <p className="text-lg max-w-2xl mx-auto mb-4 text-[#00fff7]">
        Our vision is clear: AI should not just solve problems, it should transform data into accessible knowledge and tangible business value.
      </p>
      <p className="text-[#00fff7]/80">
        Starting with a deep understanding of your industry, ExtractorAI Suite helps you build an ecosystem where innovation and insight work hand in hand, and where technology, expertise and people work together in synergy to generate real value.
      </p>
    </motion.section>

    {/* Approach Section */}
    <motion.section
      className="grid md:grid-cols-2 gap-8 items-center"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <motion.div
        className="flex flex-col justify-center items-center"
        initial={{ scale: 0.95, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <img
          src="/animated_logo_neon.gif"
          alt="Hybrid AI Logo"
          className="rounded-2xl shadow-lg w-full h-72 object-cover object-center border-4 border-[#00fff7]/40"
        />
      </motion.div>
      <div>
        <h2 className="text-2xl font-bold mb-2 neon-glow-green">AI evolves. Your needs stay at the center.</h2>
        <p className="text-[#00fff7]/80 mb-2">
          ExtractorAI Suite is built around you. Our sustainable, explainable Hybrid AI approach prioritizes your operational requirements, turning technology into a strategic ally. While AI technologies continue to evolve, our unwavering focus on meeting your needs never changes.
        </p>
        <h2 className="text-2xl font-bold mb-2 neon-glow-green">A smarter way to apply AI — and do it right</h2>
        <p className="text-[#00fff7]/80">
          ExtractorAI Suite seamlessly integrates the most advanced technologies — from neurosymbolic artificial intelligence to Large Language Models, from Generative AI to Agentic AI — into a modular and flexible suite designed to generate visible and immediate impact on business processes.
        </p>
      </div>
    </motion.section>

    {/* Flexibility Section */}
    <motion.section
      className="bg-black rounded-2xl shadow-xl p-8 text-center mt-8 border-2 neon-border"
      initial={{ opacity: 0, x: 60 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <h2 className="text-2xl font-bold mb-4 neon-glow-green">Wherever you need it, with maximum flexibility and integration</h2>
      <p className="text-lg max-w-2xl mx-auto mb-4 text-[#00fff7]">
        ExtractorAI Suite is available as SaaS on public cloud, private cloud and/or as an on-premises license, providing maximum flexibility and smooth integration with your existing infrastructure and workflows.
      </p>
      <p className="text-[#00fff7]/80">
        Thanks to its modular architecture, we help you quickly start pilot projects and expand your solutions in a scalable way, supporting your organization’s AI journey without disrupting business continuity.
      </p>
    </motion.section>

    {/* Industries Section */}
    <motion.section
      className="rounded-2xl shadow-xl p-8 text-center border-2 neon-border bg-black mt-8"
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <h2 className="text-2xl font-bold mb-4 neon-glow-green">Who ExtractorAI Suite is for</h2>
      <div className="flex flex-wrap justify-center gap-6">
        <span className="bg-[#111] px-6 py-3 rounded-xl text-lg font-semibold text-[#00fff7] border-2 neon-border shadow">Insurance</span>
        <span className="bg-[#111] px-6 py-3 rounded-xl text-lg font-semibold text-[#39ff14] border-2 neon-border shadow">Pharma & Life Sciences</span>
        <span className="bg-[#111] px-6 py-3 rounded-xl text-lg font-semibold text-[#39ff14] border-2 neon-border shadow">Information Services</span>
        <span className="bg-[#111] px-6 py-3 rounded-xl text-lg font-semibold text-[#39ff14] border-2 neon-border shadow">Banking & Financial Services</span>
        <span className="bg-[#111] px-6 py-3 rounded-xl text-lg font-semibold text-[#39ff14] border-2 neon-border shadow">Industrial</span>
        <span className="bg-[#111] px-6 py-3 rounded-xl text-lg font-semibold text-[#39ff14] border-2 neon-border shadow">Public Sector & Intelligence</span>
      </div>
    </motion.section>

    {/* Solutions Section - New Addition */}
    <motion.section
      className="bg-black rounded-2xl shadow-xl p-8 text-center border-2 neon-border mt-8"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <h2 className="text-3xl font-bold mb-4 neon-glow-green">Our Solutions</h2>
      <p className="text-lg max-w-2xl mx-auto mb-4 text-[#00fff7]">
        DeepExtract.AI offers a suite of AI-powered solutions tailored for various industries, focusing on real-world impact and measurable results.
      </p>
      <div className="flex flex-wrap justify-center gap-6 mt-6">
        {/* Example solution cards */}
        <div className="bg-[#111] rounded-xl shadow w-72 text-left border-2 neon-border px-6 py-4">
          <h3 className="text-xl font-semibold mb-2 neon-glow-green">Document Intelligence</h3>
          <p className="text-[#00fff7]/80 text-base">Extract, classify, and analyze unstructured data from documents with high accuracy and speed.</p>
        </div>
        <div className="bg-[#111] rounded-xl shadow w-72 text-left border-2 neon-border px-6 py-4">
          <h3 className="text-xl font-semibold mb-2 neon-glow-green">Knowledge Graphs</h3>
          <p className="text-[#00fff7]/80 text-base">Connect and enrich enterprise data for advanced search, discovery, and analytics.</p>
        </div>
        <div className="bg-[#111] rounded-xl shadow w-72 text-left border-2 neon-border px-6 py-4">
          <h3 className="text-xl font-semibold mb-2 neon-glow-green">AI Agents</h3>
          <p className="text-[#00fff7]/80 text-base">Deploy intelligent agents to automate complex workflows and enhance decision-making.</p>
        </div>
      </div>
    </motion.section>

    <Footer />
  </div>
);

export default Solutions;