import { Link } from "@tanstack/react-router";
import { ExternalLink, Mail, MapPin, Phone } from "lucide-react";
import { products } from "../../data/products";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0A1628] text-white/80">
      {/* Main footer */}
      <div className="container-brand py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="mb-4">
              <img
                src="/assets/uploads/ChatGPT-Image-Mar-2-2026-03_39_03-PM-1.png"
                alt="Tecknoforged"
                className="h-20 w-auto object-contain"
              />
            </div>
            <p className="text-sm text-white/50 leading-relaxed mb-4">
              ISO-certified industrial fastener manufacturer in Mumbai since
              1976. Supplying OEM-grade fasteners to automobile, electrical and
              electronics industries.
            </p>
            <div className="flex flex-col gap-2 text-sm">
              <a
                href="tel:+919870090508"
                className="flex items-center gap-2 text-white/60 hover:text-orange-400 transition-colors"
              >
                <Phone size={14} />
                +91 9870090508
              </a>
              <a
                href="mailto:info@tecknoforged.com"
                className="flex items-center gap-2 text-white/60 hover:text-orange-400 transition-colors"
              >
                <Mail size={14} />
                info@tecknoforged.com
              </a>
              <span className="flex items-center gap-2 text-white/60">
                <MapPin size={14} className="flex-shrink-0" />
                Mumbai, Maharashtra, India
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-[0.1em] mb-4">
              Quick Links
            </h3>
            <ul className="flex flex-col gap-2">
              {[
                { label: "Home", href: "/" },
                { label: "About Us", href: "/about" },
                { label: "Industries We Serve", href: "/industries" },
                { label: "Quality Assurance", href: "/quality" },
                { label: "Export Capabilities", href: "/exports" },
                { label: "Blog & Resources", href: "/blog" },
                { label: "Contact Us", href: "/contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-sm text-white/50 hover:text-orange-400 transition-colors flex items-center gap-1.5"
                  >
                    <span className="w-1 h-1 rounded-full bg-orange-500/60" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-[0.1em] mb-4">
              Product Categories
            </h3>
            <ul className="flex flex-col gap-2">
              {products.map((product) => (
                <li key={product.slug}>
                  <Link
                    to="/products/$slug"
                    params={{ slug: product.slug }}
                    className="text-sm text-white/50 hover:text-orange-400 transition-colors flex items-center gap-1.5"
                  >
                    <span className="w-1 h-1 rounded-full bg-orange-500/60" />
                    {product.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-[0.1em] mb-4">
              Contact Information
            </h3>
            <div className="flex flex-col gap-3 text-sm text-white/50 mb-6">
              <p>
                <span className="text-white/70 font-medium block">
                  Standard Screw Manufacturing Co.
                </span>
                Trading as Tecknoforged
              </p>
              <p>
                <span className="text-white/70 font-medium block">
                  Mr. Ranjit Singh
                </span>
                Proprietor
              </p>
              <p>Mumbai, Maharashtra, India</p>
              <p>
                <span className="text-white/70 font-medium block">
                  Business Hours
                </span>
                Mon–Sat: 9:00 AM – 6:00 PM IST
              </p>
            </div>
            <a
              href="https://wa.me/919870090508"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white text-sm font-semibold px-4 py-2 rounded transition-colors"
            >
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-4 h-4"
                aria-hidden="true"
              >
                <title>WhatsApp</title>
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              WhatsApp Us
            </a>
          </div>
        </div>
      </div>

      {/* Certifications row */}
      <div className="border-t border-white/10">
        <div className="container-brand py-4">
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs font-semibold tracking-widest uppercase text-white/40">
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-orange-500" />
              ISO Certified
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-orange-500" />
              BIS Approved
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-orange-500" />
              RoHS Compliant
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-orange-500" />
              Export Quality
            </span>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-white/10">
        <div className="container-brand py-4">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-white/30">
            <span>
              © {currentYear} Tecknoforged | Standard Screw Manufacturing Co. |
              Mumbai, India
            </span>
            <a
              href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(typeof window !== "undefined" ? window.location.hostname : "tecknoforged")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-white/25 hover:text-white/50 transition-colors"
            >
              Built with ♥ using caffeine.ai
              <ExternalLink size={10} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
