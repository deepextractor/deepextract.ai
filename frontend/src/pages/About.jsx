import React from 'react';
import { motion } from 'framer-motion';
import Footer from '../components/Footer';

const About = () => (
	<div className="min-h-screen w-full flex flex-col items-center justify-start bg-black text-[#00fff7] px-2 md:px-8 lg:px-24 xl:px-48 2xl:px-64 overflow-x-hidden">
		{/* Hero Section */}
		<motion.section
			className="text-center w-full max-w-5xl py-12"
			initial={{ opacity: 0, y: -40 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.8, type: 'spring', bounce: 0.3 }}
		>
			<h1 className="text-5xl font-extrabold mb-4 text-[#39ff14]">
				About Us
			</h1>
			<p className="text-xl max-w-2xl mx-auto mb-4 text-[#00fff7]">
				In a world where artificial intelligence promises everything, we deliver
				real results.
			</p>
			<p className="text-lg max-w-2xl mx-auto text-[#00fff7]/80">
				We are a team of 200 professionals, including 130 data and AI experts.
				With more than 30 years of experience and hundreds of successful AI
				projects focused on language and business information, we bring unmatched
				expertise.
			</p>
		</motion.section>

		{/* Expertise Section */}
		<motion.section
			className="bg-black rounded-2xl shadow-xl p-8 border border-[#00fff7] mt-8 w-full max-w-4xl"
			initial={{ opacity: 0, x: -60 }}
			whileInView={{ opacity: 1, x: 0 }}
			transition={{ duration: 0.8, type: 'spring', bounce: 0.2 }}
			viewport={{ once: true }}
		>
			<h2 className="text-3xl font-bold mb-2 text-[#39ff14]">
				Our Expertise
			</h2>
			<ul className="list-disc list-inside text-lg mb-4 text-[#00fff7]">
				<li>30+ years of AI and business information experience</li>
				<li>Hundreds of successful enterprise AI projects</li>
				<li>Deep industry knowledge and proven results</li>
				<li>Team of 200+ professionals, 130+ AI experts</li>
			</ul>
			<p className="text-[#00fff7]/80">
				We know the enterprise world inside out. By combining the best of AI with
				deep industry knowledge, we create effective solutions designed to help
				organizations tackle market challenges and achieve their business goals.
			</p>
		</motion.section>

		{/* Why Choose Us Section */}
		<motion.section
			className="grid md:grid-cols-2 gap-8 items-center w-full max-w-5xl mt-8"
			initial={{ opacity: 0, y: 40 }}
			whileInView={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.8, type: 'spring', bounce: 0.2 }}
			viewport={{ once: true }}
		>
			<div>
				<h2 className="text-3xl font-bold mb-2 text-[#39ff14]">
					Why DeepExtract.AI?
				</h2>
				<ul className="list-disc list-inside text-lg mb-4 text-[#00fff7]">
					<li>Experts in AI adoption and enterprise transformation</li>
					<li>Mature, field-tested solutions across multiple industries</li>
					<li>Trusted by the world’s largest organizations</li>
					<li>Strategic, reliable, and pragmatic guidance</li>
				</ul>
				<p className="text-[#00fff7]/80">
					As AI experts, we guide you at every step of your AI adoption
					journey—strategically, reliably, pragmatically. From identifying the
					best solution to seamless implementation, our mission is clear: to
					create lasting value by supporting your growth ambitions and helping
					you achieve your goals.
				</p>
			</div>
			<motion.img
				src="/animated_logo_neon.gif"
				alt="AI Team Logo"
				className="rounded-2xl shadow-lg w-full h-64 object-cover object-center border-4 border-[#00fff7]/40"
				initial={{ scale: 0.9, opacity: 0 }}
				whileInView={{ scale: 1, opacity: 1 }}
				transition={{ duration: 0.8, delay: 0.2, type: 'spring', bounce: 0.2 }}
				viewport={{ once: true }}
			/>
		</motion.section>

		{/* Product Introduction Section */}
		<motion.section
			className="bg-black rounded-2xl shadow-xl p-8 text-center border border-[#00fff7] mt-8 w-full max-w-5xl"
			initial={{ opacity: 0, y: 60 }}
			whileInView={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.8, type: 'spring', bounce: 0.2 }}
			viewport={{ once: true }}
		>
			<h2 className="text-3xl font-bold mb-4 text-[#39ff14]">
				Introducing DeepExtract.AI
			</h2>
			<p className="text-lg max-w-2xl mx-auto mb-4 text-[#00fff7]">
				DeepExtract.AI is your trusted partner for extracting, understanding, and
				leveraging business information from complex documents and data sources.
				Our platform uses advanced AI to turn unstructured data into actionable
				insights—fast, securely, and at scale.
			</p>
			<div className="flex flex-col md:flex-row justify-center gap-8 mt-6">
				<div className="bg-[#111] rounded-xl p-6 flex-1 border border-[#39ff14]">
					<h3 className="text-xl font-semibold mb-2 text-[#39ff14]">
						Document Intelligence
					</h3>
					<p className="text-[#00fff7]/80">
						Extract structured data from PDFs, emails, and business documents with
						unmatched accuracy.
					</p>
				</div>
				<div className="bg-[#111] rounded-xl p-6 flex-1 border border-[#39ff14]">
					<h3 className="text-xl font-semibold mb-2 text-[#39ff14]">
						AI-Powered Insights
					</h3>
					<p className="text-[#00fff7]/80">
						Transform raw data into clear, actionable insights for smarter business
						decisions.
					</p>
				</div>
				<div className="bg-[#111] rounded-xl p-6 flex-1 border border-[#39ff14]">
					<h3 className="text-xl font-semibold mb-2 text-[#39ff14]">
						Enterprise-Ready
					</h3>
					<p className="text-[#00fff7]/80">
						Scalable, secure, and field-tested for the world’s most demanding
						organizations.
					</p>
				</div>
			</div>
		</motion.section>

		{/* Trusted By Section */}
		<motion.section
			className="bg-black rounded-2xl shadow-xl p-8 text-center border border-[#00fff7] mt-8 w-full max-w-5xl"
			initial={{ opacity: 0, y: 60 }}
			whileInView={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.8, type: 'spring', bounce: 0.2 }}
			viewport={{ once: true }}
		>
			<h2 className="text-2xl font-bold mb-4 text-[#39ff14]">
				Trusted by Industry Leaders
			</h2>
			<p className="text-lg max-w-2xl mx-auto mb-6 text-[#00fff7]/80">
				Some of the world’s largest organizations have chosen DeepExtract.AI as
				their trusted partner for AI-driven transformation.
			</p>
			<div className="flex flex-wrap justify-center gap-8 items-center">
				<img
					src="https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg"
					alt="Microsoft"
					className="h-10 grayscale opacity-80 hover:scale-110 transition-transform duration-300"
				/>
				<img
					src="https://upload.wikimedia.org/wikipedia/commons/0/08/IBM_logo.svg"
					alt="IBM"
					className="h-10 grayscale opacity-80 hover:scale-110 transition-transform duration-300"
				/>
				<img
					src="https://upload.wikimedia.org/wikipedia/commons/5/51/Oracle_logo.svg"
					alt="Oracle"
					className="h-10 grayscale opacity-80 hover:scale-110 transition-transform duration-300"
				/>
				<img
					src="https://upload.wikimedia.org/wikipedia/commons/2/2e/Accenture.svg"
					alt="Accenture"
					className="h-10 grayscale opacity-80 hover:scale-110 transition-transform duration-300"
				/>
				<img
					src="https://upload.wikimedia.org/wikipedia/commons/5/5f/Capgemini_201x_logo.svg"
					alt="Capgemini"
					className="h-10 grayscale opacity-80 hover:scale-110 transition-transform duration-300"
				/>
			</div>
		</motion.section>

		{/* Our Values Section */}
		<motion.section
			className="bg-black rounded-2xl shadow-xl p-8 text-center mt-8 border border-[#00fff7] w-full max-w-5xl"
			initial={{ opacity: 0, x: 60 }}
			whileInView={{ opacity: 1, x: 0 }}
			transition={{ duration: 0.8, type: 'spring', bounce: 0.2 }}
			viewport={{ once: true }}
		>
			<h2 className="text-2xl font-bold mb-4 text-[#39ff14]">
				Our Values
			</h2>
			<div className="flex flex-col md:flex-row gap-8 justify-center">
				<div className="flex-1">
					<h3 className="text-lg font-semibold mb-2 text-[#00fff7]">Innovation</h3>
					<p className="text-[#00fff7]/80">
						We push the boundaries of what’s possible with AI, always seeking new
						ways to deliver value.
					</p>
				</div>
				<div className="flex-1">
					<h3 className="text-lg font-semibold mb-2 text-[#39ff14]">Integrity</h3>
					<p className="text-[#00fff7]/80">
						We believe in transparency, honesty, and building trust with our
						clients and partners.
					</p>
				</div>
				<div className="flex-1">
					<h3 className="text-lg font-semibold mb-2 text-[#00fff7]">Collaboration</h3>
					<p className="text-[#00fff7]/80">
						We work closely with our clients, combining our expertise with their
						vision for the best results.
					</p>
				</div>
			</div>
		</motion.section>

		{/* Call to Action Section */}
		<motion.section
			className="rounded-2xl shadow-xl p-8 text-center border border-[#00fff7] bg-black mt-8 w-full max-w-4xl"
			initial={{ opacity: 0, scale: 0.95 }}
			whileInView={{ opacity: 1, scale: 1 }}
			transition={{ duration: 0.8, type: 'spring', bounce: 0.2 }}
			viewport={{ once: true }}
		>
			<h2 className="text-2xl font-bold mb-4 text-[#39ff14]">
				Ready to Transform Your Business?
			</h2>
			<p className="text-lg max-w-2xl mx-auto mb-6 text-[#00fff7]">
				Join the organizations already benefiting from DeepExtract.AI. Let’s unlock
				the true potential of your data together.
			</p>
			<a
				href="/contact"
				className="inline-block px-8 py-3 rounded-xl bg-[#00fff7] text-black font-bold shadow-lg hover:bg-[#39ff14] hover:text-black transition"
			>
				Contact Us
			</a>
		</motion.section>

		{/* New About DeepExtract.AI Section */}
		<motion.section
			className="bg-black rounded-2xl shadow-xl p-8 text-center border border-[#00fff7] mt-8 w-full max-w-4xl"
			initial={{ opacity: 0, y: 40 }}
			whileInView={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.8, type: 'spring', bounce: 0.2 }}
			viewport={{ once: true }}
		>
			<h2 className="text-3xl font-bold mb-4 text-[#39ff14]">
				About DeepExtract.AI
			</h2>
			<p className="text-lg max-w-2xl mx-auto mb-4 text-[#00fff7]">
				DeepExtract.AI is dedicated to delivering cutting-edge AI solutions with a
				focus on transparency, efficiency, and measurable business value. Our team
				comprises deep industry experts and AI pioneers, all committed to your
				success.
			</p>
			<p className="mb-4 text-[#00fff7]/80">
				We believe in a human-centered approach to AI, ensuring that technology
				empowers people and organizations to achieve more. Our solutions are
				designed to be scalable, secure, and tailored to the unique needs of each
				client.
			</p>
		</motion.section>

		<Footer />
	</div>
);

export default About;