import { Link } from "@tanstack/react-router";
import { ChevronRight, Mail, MapPin, Phone } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();
  const hostname =
    typeof window !== "undefined" ? window.location.hostname : "";
  const caffeineUrl = `https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(hostname)}`;

  return (
    <footer className="bg-[#0d0d0d] border-t-2 border-[#D32F2F]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-16">
          {/* Brand */}
          <div>
            <div className="mb-4">
              <span className="text-2xl font-black tracking-tighter text-white">
                TECNK<span className="text-[#D32F2F]">F</span>ORGED
              </span>
              <p className="text-[10px] font-medium tracking-[0.18em] uppercase text-[#555] mt-1">
                Screw Mfg Co.
              </p>
            </div>
            <p className="text-sm text-[#666] leading-relaxed max-w-xs">
              Precision-engineered fastening solutions for global industries.
              Manufactured in Mumbai, India to international standards.
            </p>
            <div className="mt-6 flex items-start gap-2 text-[#666]">
              <MapPin className="w-3.5 h-3.5 mt-0.5 shrink-0 text-[#D32F2F]" />
              <span className="text-xs leading-relaxed">
                Mumbai, Maharashtra, India
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-[10px] font-bold tracking-[0.18em] uppercase text-[#D32F2F] mb-5">
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {[
                { label: "Products Catalog", href: "/products" },
                { label: "Manufacturing", href: "/about" },
                { label: "Industries Served", href: "/industries" },
                { label: "Quality & Standards", href: "/quality" },
                { label: "Export Capability", href: "/exports" },
                { label: "Request a Quote", href: "/contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="group flex items-center gap-1.5 text-xs text-[#666] hover:text-white transition-colors"
                    data-ocid="footer.link"
                  >
                    <ChevronRight className="w-3 h-3 text-[#333] group-hover:text-[#D32F2F] transition-colors" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-[10px] font-bold tracking-[0.18em] uppercase text-[#D32F2F] mb-5">
              Contact
            </h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2.5">
                <Phone className="w-3.5 h-3.5 text-[#D32F2F] shrink-0" />
                <span className="text-xs text-[#666]">+91 22 0000 0000</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-3.5 h-3.5 text-[#D32F2F] shrink-0" />
                <span className="text-xs text-[#666]">
                  info@tecknoforged.com
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="w-3.5 h-3.5 text-[#D32F2F] shrink-0 mt-0.5" />
                <span className="text-xs text-[#666] leading-relaxed">
                  MIDC Industrial Area,
                  <br />
                  Mumbai, Maharashtra 400 093
                </span>
              </li>
            </ul>
            <div className="mt-6">
              <Link
                to="/contact"
                className="btn-primary text-[10px]"
                data-ocid="footer.primary_button"
              >
                Request Quote
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-[#1e1e1e] flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-[11px] text-[#444]">
            © {year} Tecknoforged Screw Mfg Co. All Rights Reserved.
          </p>
          <p className="text-[11px] text-[#444]">
            Built with ♥ using{" "}
            <a
              href={caffeineUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#666] hover:text-[#D32F2F] transition-colors"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
