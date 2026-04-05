import { useState } from "react";
import { motion } from "framer-motion";
import SectionTitle from "../components/SectionTitle";
import { brand, services } from "../data/siteData";

export default function Contact() {
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    const form = new FormData(e.currentTarget);
    const payload = Object.fromEntries(form.entries());

    try {
      await fetch(import.meta.env.VITE_GOOGLE_SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        body: JSON.stringify(payload),
      });

      setStatus("success");
      e.currentTarget.reset();
    } catch (error) {
      console.error("Form submission error:", error);
      setStatus("error");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="bg-slate-50 py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionTitle
          eyebrow="Contact"
          title="Request a quote for your next AI data project"
          desc="Tell us about your annotation, evaluation, or data validation needs. Our team will get back with a tailored execution plan."
        />

        <div className="grid gap-8 lg:grid-cols-2">
          {/* Contact Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <input
                name="name"
                type="text"
                required
                placeholder="Full Name"
                className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-brand-500"
              />
              <input
                name="company"
                type="text"
                required
                placeholder="Company Name"
                className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-brand-500"
              />
            </div>

            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              <input
                name="email"
                type="email"
                required
                placeholder="Business Email"
                className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-brand-500"
              />
              <input
                name="phone"
                type="tel"
                required
                placeholder="Phone Number"
                className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-brand-500"
              />
            </div>

            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              <select
                name="service"
                required
                className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-brand-500"
              >
                <option value="">Select Service</option>
                {services.map((service) => (
                  <option key={service.title} value={service.title}>
                    {service.title}
                  </option>
                ))}
              </select>

              <input
                name="volume"
                type="text"
                placeholder="Estimated Volume (e.g. 10,000 images)"
                className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-brand-500"
              />
            </div>

            <div className="mt-4">
              <input
                name="timeline"
                type="text"
                placeholder="Expected Timeline (e.g. 2 weeks)"
                className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-brand-500"
              />
            </div>

            <div className="mt-4">
              <textarea
                name="message"
                rows="6"
                required
                placeholder="Tell us about your project requirements..."
                className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-brand-500"
              ></textarea>
            </div>

            <div className="mt-6">
              <button
                type="submit"
                disabled={loading}
                className="w-full rounded-full bg-brand-600 px-6 py-3 font-semibold text-white transition hover:bg-brand-700 disabled:cursor-not-allowed disabled:opacity-70"
              >
                {loading ? "Submitting..." : "Submit Request"}
              </button>
            </div>

            {/* Status Messages */}
            {status === "success" && (
              <div className="mt-5 rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-700">
                Your request has been submitted successfully.
              </div>
            )}

            {status === "error" && (
              <div className="mt-5 rounded-xl border border-rose-200 bg-rose-50 px-4 py-3 text-sm text-rose-700">
                Something went wrong. Please try again.
              </div>
            )}
          </motion.form>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8"
          >
            <h3 className="text-2xl font-semibold text-slate-900">
              Business Contact
            </h3>
            <p className="mt-4 leading-8 text-slate-600">
              Have a dataset, evaluation workflow, or annotation requirement?
              Reach out and we’ll help you build the right execution plan.
            </p>

            <div className="mt-8 space-y-4">
              <div>
                <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">
                  Email
                </p>
                <p className="text-base text-slate-800">{brand.email}</p>
              </div>

              <div>
                <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">
                  Phone
                </p>
                <p className="text-base text-slate-800">{brand.phone}</p>
              </div>

              <div>
                <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">
                  Location
                </p>
                <p className="text-base text-slate-800">{brand.location}</p>
              </div>
            </div>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
              <a
                href={brand.linkedin}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-slate-300 px-5 py-3 text-center font-medium text-slate-800 transition hover:border-brand-500 hover:text-brand-600"
              >
                Visit LinkedIn
              </a>

              <a
                href={`https://wa.me/${brand.whatsapp}`}
                target="_blank"
                rel="noreferrer"
                className="rounded-full bg-green-500 px-5 py-3 text-center font-semibold text-white transition hover:bg-green-600"
              >
                Chat on WhatsApp
              </a>
            </div>

            <div className="mt-10 rounded-2xl border border-brand-100 bg-brand-50 p-5">
              <h4 className="text-lg font-semibold text-slate-900">
                Why work with ANNOTEXA AI?
              </h4>
              <ul className="mt-4 space-y-3 text-sm leading-7 text-slate-700">
                <li>• High-quality annotation and review workflows</li>
                <li>• Fast turnaround and scalable project support</li>
                <li>• AI/ML, LLM, document, and linguistic expertise</li>
                <li>• Professional communication and delivery structure</li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}