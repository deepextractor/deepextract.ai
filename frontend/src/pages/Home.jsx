import React from 'react';
import { motion } from 'framer-motion';
import HeroSection from '../components/HeroSection';
import Footer from '../components/Footer';

const industries = [
	{
		name: 'Insurance',
		desc: 'Mitigate risk, accelerate deal velocity and expand operational capacity across the insurance value chain.',
	},
	{
		name: 'Pharma & Life Sciences',
		desc: 'Improve R&D, prevent risks, innovate clinical trials.',
	},
	{
		name: 'Information Services',
		desc: 'Improve content creation and enrichment, augment manual workflows.',
	},
	{
		name: 'Banking & Financial Services',
		desc: 'Capitalize knowledge, streamline processes, meet demands of customers and regulators.',
	},
	{
		name: 'Industrial',
		desc: 'Capture efficiencies, enhance user experience, simplify decision making.',
	},
	{
		name: 'Public Sector & Intelligence',
		desc: 'More intuitive citizen interaction, enhance knowledge-based processes.',
	},
];

const caseStudies = [
	{
		company: 'ING Direct',
		quote:
			'ING Direct is always looking for innovative and interactive services that extend the range of our offer and ensure more accurate customer support. Expert.ai’s AI technology has allowed us to implement a system that helps us accurately identify customer needs and satisfy them quickly and effectively while improving our call center performance.',
	},
	{
		company: 'AXA XL',
		quote:
			'Delivering enhanced data and analytical capabilities, both internally and externally, is an essential element of our journey, and the work completed in partnership with our Risk Consulting team and expert.ai adds to the AXA XL tool kit.',
	},
	{
		company: 'The Associated Press',
		quote:
			'We are excited to work with expert.ai, whose state-of-the-art artificial intelligence offerings will make it easier for our members and customers around the world to find and access AP’s expansive offering of text, photo and video content.',
	},
];

const logoUrl = '/animated_logo_neon.gif';

const Home = () => (
	<div className="relative min-h-screen w-full flex flex-col items-center justify-start overflow-x-hidden bg-black">
		{/* Hero Section */}
		<HeroSection />

		{/* ExtractorAI Suite Section */}
		<motion.section
			id="ExtractorAI"
			className="bg-black rounded-2xl shadow-xl p-8 text-center border border-[#00fff7] mt-8"
			initial={{ opacity: 0, y: 40 }}
			whileInView={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.8 }}
			viewport={{ once: true }}
		>
			<h2 className="text-3xl font-bold mb-4 text-[#39ff14]">ExtractorAI Suite</h2>
			<p className="text-lg max-w-2xl mx-auto mb-4 text-[#00fff7]">
				Enterprise AI solutions designed for your industry. ExtractorAI Suite offers a
				comprehensive suite of fully deployable and tailored AI solutions designed
				to meet the specific needs of any industry.
			</p>
			<p className="mb-4 text-[#00fff7]/80">
				With ExtractorAI Suite, we go beyond data: We help you create an ecosystem
				where AI and people work together to generate business value. Empower your
				organization to achieve real, measurable results.
			</p>
			<div className="flex flex-wrap justify-center gap-6 mt-6">
				{industries.map((ind) => (
					<div
						key={ind.name}
						className="bg-[#111] rounded-xl shadow w-72 text-left border border-[#39ff14] px-6 py-4"
					>
						<h3 className="text-xl font-semibold mb-2 text-[#39ff14]">{ind.name}</h3>
						<p className="text-[#00fff7]/80 text-base">{ind.desc}</p>
					</div>
				))}
			</div>
			<a
				href="#hybridai"
				className="inline-block mt-8 px-8 py-3 rounded-xl bg-[#00fff7] text-black font-bold shadow-lg hover:bg-[#39ff14] hover:text-black transition border border-[#39ff14]"
			>
				Find out more
			</a>
		</motion.section>

		{/* Why Hybrid AI Section */}
		<motion.section
			id="hybridai"
			className="rounded-2xl shadow-xl p-8 text-center border border-[#00fff7] bg-black mt-8"
			initial={{ opacity: 0, scale: 0.95 }}
			whileInView={{ opacity: 1, scale: 1 }}
			transition={{ duration: 0.8 }}
			viewport={{ once: true }}
		>
			<h2 className="text-2xl font-bold mb-4 text-[#39ff14]">Why Hybrid AI?</h2>
			<p className="text-lg max-w-2xl mx-auto mb-4 text-[#00fff7]">
				We drive the success of your digital transformation with our unique Hybrid
				AI approach. By blending deep industry expertise with the best of AI, we
				deliver solutions that are scalable, efficient and transparent.
			</p>
			<p className="mb-4 text-[#00fff7]/80">
				Neuro-symbolic AI, knowledge graphs, machine and deep learning, the most
				advanced capabilities of Large Language Models, Generative AI and Agentic
				AI: With our hybrid AI approach, you can tackle the most complex
				challenges in business data management, achieving a high return on
				investment (ROI) while reducing total cost of ownership (TCO). All aligned
				with your strategic objectives.
			</p>
			<a
				href="#why-expertai"
				className="inline-block mt-4 px-8 py-3 rounded-xl bg-[#39ff14] text-black font-bold shadow-lg hover:bg-[#00fff7] hover:text-black transition border border-[#00fff7]"
			>
				Find out how
			</a>
		</motion.section>

		{/* Why expert.ai Section */}
		<motion.section
			id="why-expertai"
			className="bg-black rounded-2xl shadow-xl p-8 text-center border border-[#00fff7] mt-8"
			initial={{ opacity: 0, y: 40 }}
			whileInView={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.8 }}
			viewport={{ once: true }}
		>
			<h2 className="text-2xl font-bold mb-4 neon-glow-green">Why deepextract.ai?</h2>
			<p className="text-lg max-w-2xl mx-auto mb-4 text-[#00fff7]">
				A proven framework for innovation. A unique value proposition. We are
				experts in enterprise AI solutions designed to generate business value.
			</p>
			<p className="mb-4 text-[#00fff7]/80">
				With decades of experience gained through hundreds of successful
				implementations, we are the trusted partner for business data innovation
				and transformation. All driven by a responsible, practical and
				human-centered approach -ensuring AI works for you, not the other way
				round.
			</p>
			<a
				href="#case-studies"
				className="inline-block mt-4 px-8 py-3 rounded-xl bg-[#00fff7] text-black font-bold shadow-lg hover:bg-[#39ff14] hover:text-black transition border border-[#39ff14]"
			>
				Discover more
			</a>
		</motion.section>

		{/* Case Studies Section */}
		<motion.section
			id="case-studies"
			className="rounded-2xl shadow-xl p-8 text-center border border-[#00fff7] bg-black mt-8"
			initial={{ opacity: 0, scale: 0.95 }}
			whileInView={{ opacity: 1, scale: 1 }}
			transition={{ duration: 0.8 }}
			viewport={{ once: true }}
		>
			<h2 className="text-2xl font-bold mb-4 text-[#39ff14]">Case Studies</h2>
			<p className="mb-8 text-[#00fff7]/80">
				Explore real success stories from leading companies who have adopted our
				proven enterprise AI solutions to overcome complex challenges and drive
				measurable business value.
			</p>
			<div className="flex flex-col md:flex-row gap-8 justify-center">
				{caseStudies.map((cs) => (
					<div
						key={cs.company}
						className="bg-[#111] rounded-xl p-6 flex-1 min-w-[250px] border border-[#39ff14]"
					>
						<h3 className="text-lg font-semibold mb-2 text-[#39ff14]">{cs.company}</h3>
						<p className="text-[#00fff7]/80 text-base italic">
							“{cs.quote}”
						</p>
					</div>
				))}
			</div>
		</motion.section>

		{/* Footer Section */}
		<Footer />
	</div>
);

export default Home;