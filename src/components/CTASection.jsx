import { Link } from "react-router-dom";

export default function CTASection() {
  return (
    <section className="bg-gradient-to-r from-brand-600 to-cyan-500 py-20 text-white">
      <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 px-6 lg:flex-row lg:items-center">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-100">
            Ready to scale?
          </p>
          <h2 className="mt-3 max-w-2xl text-3xl font-bold tracking-tight sm:text-4xl">
            Get a tailored annotation and evaluation workflow for your AI project.
          </h2>
        </div>

        <Link
          to="/contact"
          className="rounded-full bg-white px-6 py-3 font-semibold text-brand-700 hover:bg-slate-100"
        >
          Request a Quote
        </Link>
      </div>
    </section>
  );
}
