import { brand } from "../data/siteData";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-50">
      <div className="mx-auto grid max-w-7xl gap-8 px-6 py-12 md:grid-cols-3">
        <div>
          <img src="/logo.jpeg" alt="Annotexa AI" className="mb-4 h-12 w-auto" />
          <p className="text-sm leading-7 text-slate-600">
            Enterprise-grade AI data annotation, evaluation, and validation
            workflows for modern intelligent systems.
          </p>
        </div>

        <div>
          <h4 className="mb-4 font-semibold text-slate-900">Contact</h4>
          <p className="text-sm text-slate-600">{brand.email}</p>
          <p className="text-sm text-slate-600">{brand.phone}</p>
          <p className="text-sm text-slate-600">{brand.location}</p>
        </div>

        <div>
          <h4 className="mb-4 font-semibold text-slate-900">Links</h4>
          <a href={brand.linkedin} target="_blank" rel="noreferrer" className="block text-sm text-slate-600 hover:text-brand-600">
            LinkedIn
          </a>
          <a href={brand.github} target="_blank" rel="noreferrer" className="block text-sm text-slate-600 hover:text-brand-600">
            GitHub
          </a>
        </div>
      </div>

      <div className="border-t border-slate-200 py-5 text-center text-sm text-slate-500">
        © {new Date().getFullYear()} {brand.name}. All rights reserved.
      </div>
    </footer>
  );
}
