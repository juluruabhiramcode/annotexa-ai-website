import { Link } from "react-router-dom";
import { brand } from "../data/siteData";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link to="/" className="flex items-center gap-3">
          <img src="/logo.jpeg" alt="Annotexa AI" className="h-10 w-auto" />
          <span className="text-xl font-bold text-slate-900">{brand.name}</span>
        </Link>

        <nav className="hidden gap-6 text-sm font-medium md:flex">
          <Link to="/">Home</Link>
          <Link to="/services">Services</Link>
          <Link to="/case-studies">Case Studies</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </nav>

        <Link
          to="/contact"
          className="rounded-full bg-brand-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-brand-700"
        >
          Request a Quote
        </Link>
      </div>
    </header>
  );
}