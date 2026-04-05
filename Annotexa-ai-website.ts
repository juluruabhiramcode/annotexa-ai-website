import React from 'react';
import { motion } from 'framer-motion';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

function Layout({ children }) {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <Link to="/" className="text-2xl font-bold text-sky-700">ANNOTEXA AI</Link>
          <nav className="flex gap-6 text-sm font-medium">
            <Link to="/">Home</Link>
            <Link to="/services">Services</Link>
            <Link to="/case-studies">Case Studies</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
          </nav>
        </div>
      </header>
      <main>{children}</main>
      <footer className="border-t border-slate-200 bg-slate-50 py-6 text-center text-sm text-slate-500">
        © {new Date().getFullYear()} ANNOTEXA AI. All rights reserved.
      </footer>
    </div>
  );
}

function HomePage() {
  return (
    <section className="min-h-screen bg-white text-slate-900">
      <motion.div variants={stagger} initial="hidden" animate="show" className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <motion.div variants={fadeUp}>
            <p className="mb-4 inline-block rounded-full bg-sky-100 px-4 py-2 text-sm font-medium text-sky-700">
              AI Data Annotation & Evaluation
            </p>
            <h1 className="text-5xl font-bold leading-tight">
              Powering Intelligent Systems with <span className="text-sky-600">Precision Data</span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-slate-600">
              ANNOTEXA AI provides enterprise-grade image annotation, document tagging, LLM evaluation, and multilingual data services for modern AI teams.
            </p>
            <div className="mt-8 flex gap-4">
              <Link to="/contact" className="rounded-full bg-sky-600 px-6 py-3 font-semibold text-white hover:bg-sky-700">Request a Quote</Link>
              <Link to="/services" className="rounded-full border border-slate-300 px-6 py-3 font-semibold text-slate-800 hover:border-sky-400 hover:text-sky-700">Explore Services</Link>
            </div>
          </motion.div>
          <motion.div variants={fadeUp} whileHover={{ y: -6, scale: 1.01 }} className="rounded-3xl border border-slate-200 bg-slate-50 p-10 text-center shadow-sm">
            <img src="/logo.jpeg" alt="Annotexa AI Logo" className="mx-auto h-40 object-contain" />
            <p className="mt-6 text-slate-600">Trusted AI data operations for annotation, validation, and model support.</p>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

function ServicesPage() {
  return (
    <motion.div variants={stagger} initial="hidden" animate="show" className="mx-auto max-w-7xl px-6 py-20">
      <motion.h2 variants={fadeUp} className="text-4xl font-bold">Our Services</motion.h2>
      <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {[
          'Image & Video Annotation',
          'AI Prompt Rating & LLM Evaluation',
          'Blueprint & Document Annotation',
          'Linguistic Services',
          'AI/ML Training Data Validation',
        ].map((service) => (
          <motion.div key={service} variants={fadeUp} whileHover={{ y: -8 }} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="text-xl font-semibold">{service}</h3>
            <p className="mt-3 text-slate-600">Professional AI support workflows designed for precision and scalable delivery.</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

function CaseStudiesPage() {
  return (
    <motion.div variants={stagger} initial="hidden" animate="show" className="mx-auto max-w-7xl px-6 py-20">
      <motion.h2 variants={fadeUp} className="text-4xl font-bold">Case Studies</motion.h2>
      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {[
          'Autonomous Vehicle Annotation',
          'Medical X-Ray Annotation',
          'LLM Evaluation',
          'Blueprint & PII Tagging',
        ].map((item) => (
          <motion.div key={item} variants={fadeUp} whileHover={{ y: -8 }} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="text-2xl font-semibold">{item}</h3>
            <p className="mt-3 text-slate-600">Delivered with structured QA, operational consistency, and enterprise-grade output accuracy.</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

function AboutPage() {
  return (
    <motion.div variants={stagger} initial="hidden" animate="show" className="mx-auto max-w-7xl px-6 py-20">
      <motion.h2 variants={fadeUp} className="text-4xl font-bold">About ANNOTEXA AI</motion.h2>
      <motion.p variants={fadeUp} className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
        ANNOTEXA AI is a specialized AI data operations company focused on delivering annotation, evaluation, validation, and multilingual support for intelligent systems.
      </motion.p>
    </motion.div>
  );
}

function ContactPage() {
  return (
    <motion.div variants={stagger} initial="hidden" animate="show" className="mx-auto max-w-7xl px-6 py-20">
      <motion.h2 variants={fadeUp} className="text-4xl font-bold">Contact Us</motion.h2>
      <div className="mt-8 grid gap-8 lg:grid-cols-2">
        <motion.form variants={fadeUp} whileHover={{ y: -4 }} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm space-y-4">
          <input className="w-full rounded-xl border border-slate-300 px-4 py-3" placeholder="Full Name" />
          <input className="w-full rounded-xl border border-slate-300 px-4 py-3" placeholder="Company Name" />
          <input className="w-full rounded-xl border border-slate-300 px-4 py-3" placeholder="Email" />
          <textarea className="w-full rounded-xl border border-slate-300 px-4 py-3" rows="5" placeholder="Project Details" />
          <button className="rounded-full bg-sky-600 px-6 py-3 font-semibold text-white hover:bg-sky-700">Submit Request</button>
        </motion.form>
        <motion.div variants={fadeUp} whileHover={{ y: -4 }} className="rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
          <h3 className="text-2xl font-semibold">Business Contact</h3>
          <p className="mt-4 text-slate-600">Email: info@annotexaai.in</p>
          <p className="mt-2 text-slate-600">Phone: +91 63059 90997</p>
          <p className="mt-2 text-slate-600">Location: Hyderabad, India</p>
          <a href="https://www.linkedin.com/company/annotexa-ai" target="_blank" rel="noreferrer" className="mt-4 inline-block text-sky-600 hover:underline">LinkedIn Company Page</a>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/case-studies" element={<CaseStudiesPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </Layout>
    </Router>
  );
}

