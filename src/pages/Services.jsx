import { motion } from "framer-motion";
import SectionTitle from "../components/SectionTitle";
import CTASection from "../components/CTASection";
import { services } from "../data/siteData";

export default function Services() {
  return (
    <>
      <section className="mx-auto max-w-7xl px-6 py-20">
        <SectionTitle
          eyebrow="Services"
          title="Specialized data services for modern AI systems"
          desc="Our capabilities span computer vision, LLM evaluation, document processing, linguistic review, and dataset validation."
        />

        <div className="space-y-8">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -4 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm"
            >
              <h3 className="text-2xl font-semibold text-slate-900">{service.title}</h3>
              <p className="mt-4 leading-8 text-slate-600">{service.desc}</p>
              <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {service.bullets.map((b) => (
                  <div key={b} className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-700">
                    {b}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <CTASection />
    </>
  );
}
