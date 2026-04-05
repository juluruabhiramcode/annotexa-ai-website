import { motion } from "framer-motion";
import SectionTitle from "../components/SectionTitle";
import CTASection from "../components/CTASection";
import { founder, team } from "../data/siteData";

export default function About() {
  return (
    <>
      <section className="mx-auto max-w-7xl px-6 py-20">
        <SectionTitle
          eyebrow="About"
          title="A focused AI data operations partner"
          desc="Annotexa AI supports AI companies and research teams with high-precision data services, structured QA workflows, and scalable delivery."
        />

        <div className="grid gap-8 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm"
          >
            <h3 className="text-2xl font-semibold text-slate-900">Company Overview</h3>
            <p className="mt-4 leading-8 text-slate-600">
              Annotexa AI is dedicated to delivering accurate, secure, and scalable AI training data solutions. We support computer vision, LLM evaluation, document processing, and multilingual validation workflows for teams building intelligent systems.
            </p>
            <p className="mt-4 leading-8 text-slate-600">
              Our operational model is designed around quality discipline, delivery consistency, and process-driven execution to help clients reduce rework and improve model performance.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl border border-slate-200 bg-slate-50 p-8 shadow-sm"
          >
            <h3 className="text-2xl font-semibold text-slate-900">Founder</h3>
            <p className="mt-4 text-xl font-semibold text-brand-700">{founder.name}</p>
            <p className="text-sm font-medium text-slate-500">{founder.role}</p>
            <p className="mt-4 leading-8 text-slate-600">{founder.summary}</p>
          </motion.div>
        </div>

        <div className="mt-16">
          <SectionTitle
            eyebrow="Team"
            title="Operational team structure"
            desc="Our delivery model is supported by specialized operational units that ensure project quality, speed, and communication clarity."
          />

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {team.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -6 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <h3 className="text-lg font-semibold text-slate-900">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}