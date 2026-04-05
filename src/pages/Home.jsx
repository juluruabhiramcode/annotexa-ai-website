import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import SectionTitle from "../components/SectionTitle";
import CTASection from "../components/CTASection";
import { brand, services } from "../data/siteData";

export default function Home() {
  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-br from-brand-50 via-white to-cyan-50">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 lg:grid-cols-2 lg:py-28">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <p className="mb-4 inline-block rounded-full bg-white px-4 py-2 text-sm font-medium text-brand-700 shadow-sm">
              AI Data Annotation & Evaluation
            </p>
            <h1 className="text-5xl font-bold leading-tight text-slate-900 lg:text-6xl">
              Powering Intelligent Systems with{" "}
              <span className="text-brand-600">Precision Data</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
              {brand.name} provides enterprise-grade image annotation,
              document tagging, LLM evaluation, and multilingual data services
              for modern AI teams.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="rounded-full bg-brand-600 px-6 py-3 font-semibold text-white hover:bg-brand-700"
              >
                Request a Quote
              </Link>
              <Link
                to="/services"
                className="rounded-full border border-slate-300 px-6 py-3 font-semibold text-slate-800 hover:border-brand-400 hover:text-brand-700"
              >
                Explore Services
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            className="rounded-[2rem] border border-slate-200 bg-white p-10 text-center shadow-soft"
          >
            <img src="/logo.jpeg" alt="Annotexa AI Logo" className="mx-auto h-40 object-contain" />
            <p className="mt-6 text-slate-600">
              Trusted AI data operations for annotation, validation, and model support.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <SectionTitle
          eyebrow="Services"
          title="End-to-end AI data operations"
          desc="From annotation and validation to LLM benchmarking and linguistic review, we help teams move faster with reliable training data."
        />
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -8 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm"
            >
              <h3 className="text-xl font-semibold text-slate-900">{service.title}</h3>
              <p className="mt-3 leading-7 text-slate-600">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <CTASection />
    </>
  );
}
