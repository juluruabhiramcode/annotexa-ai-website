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
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      setStatus("success");
      e.currentTarget.reset();
    } catch (error) {
      setStatus("error");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="bg-slate-50 py-20">
      <div className="mx-auto max-w-7xl px-6">
        <SectionTitle
          eyebrow="Contact"
          title="Request a quote for your next AI data project"
          desc="Tell us about your dataset, timeline, and quality requirements. We’ll get back with a tailored execution plan."
        />

        <div className="grid gap-8 lg:grid-cols-2">
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm space-y-4"
          >
            <input name="name" required className="w-full rounded-xl border border-slate-300 px-4 py-3" placeholder="Full Name" />
            <input name="company" required className="w-full rounded-xl border border-slate-300 px-4 py-3" placeholder="Company Name" />
            <input name="email" type="email" required className="w-full rounded-xl border border-slate-300 px-4 py-3" placeholder="Email" />
            <input name="phone" required className="w-full rounded-xl border border-slate-300 px-4 py-3" placeholder="Phone Number" />

            <select name="service" required className="w-full rounded-xl border border-slate-300 px-4 py-3">
              <option value="">Select Service</option>
              {services.map((s) => (
                <option key={s.title} value={s.title}>{s.title}</option>
              ))}
            </select>

            <input name="volume" className="w-full rounded-xl border border-slate-300 px-4 py-3" placeholder="Estimated Volume" />
            <input name="timeline" className="w-full rounded-xl border border-slate-300 px-4 py-3" placeholder="Timeline" />
            <textarea name="message" rows="5" required className="w-full rounded-xl border border-slate-300 px-4 py-3" placeholder="Project Details" />

            <button
              type="submit"
              disabled={loading}
              className="rounded-full bg-brand-600 px-6 py-3 font-semibold text-white hover:bg-brand-700 disabled:opacity-70"
            >
              {loading ? "Submitting..." : "Submit Request"}
            </button>

            {status === "success" && (
              <p className="rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-700">
                Your request has been submitted successfully.
              </p>
            )}

            {status === "error" && (
              <p className="rounded-xl border border-rose-200 bg-rose-50 px-4 py-3 text-sm text-rose-700">
                Something went wrong. Please try again.
              </p>
            )}
          </motion.form>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm"
          >
            <h3 className="text-2xl font-semibold text-slate-900">Business Contact</h3>
            <p className="mt-4 text-slate-600">Email: {brand.email}</p>
            <p className="mt-2 text-slate-600">Phone: {brand.phone}</p>
            <p className="mt-2 text-slate-600">Location: {brand.location}</p>

            <a
              href={brand.linkedin}
              target="_blank"
              rel="noreferrer"
              className="mt-5 inline-block text-brand-600 hover:underline"
            >
              Visit LinkedIn Company Page
            </a>

            <a
              href={`https://wa.me/${brand.whatsapp}`}
              target="_blank"
              rel="noreferrer"
              className="mt-4 block rounded-full bg-green-500 px-5 py-3 text-center font-semibold text-white hover:bg-green-600"
            >
              Chat on WhatsApp
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}