import { motion } from "framer-motion";
import SectionTitle from "../components/SectionTitle";
import CTASection from "../components/CTASection";
import { caseStudies } from "../data/siteData";

export default function CaseStudies() {
  return (
    <>
      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-7xl px-6">
          <SectionTitle
            eyebrow="Case Studies"
            title="Project execution across annotation and evaluation workflows"
            desc="A snapshot of the operational outcomes and delivery models behind our AI data services."
          />

          <div className="grid gap-6 lg:grid-cols-2">
            {caseStudies.map((study, i) => (
              <motion.div
                key={study.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -6 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm"
              >
                <h3 className="text-2xl font-semibold text-slate-900">{study.title}</h3>
                <p className="mt-4 rounded-2xl border border-emerald-100 bg-emerald-50 p-4 text-sm font-medium leading-7 text-emerald-800">
                  {study.outcome}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
