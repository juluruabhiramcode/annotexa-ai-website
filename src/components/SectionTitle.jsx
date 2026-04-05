import { motion } from "framer-motion";

export default function SectionTitle({ eyebrow, title, desc }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="mx-auto mb-12 max-w-3xl text-center"
    >
      <div className="mb-3 inline-flex rounded-full bg-brand-50 px-4 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-brand-700">
        {eyebrow}
      </div>
      <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
        {title}
      </h2>
      <p className="mt-4 text-base leading-8 text-slate-600">{desc}</p>
    </motion.div>
  );
}