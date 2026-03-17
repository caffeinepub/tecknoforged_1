import { Link } from "@tanstack/react-router";
import { ChevronRight, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const navLinks = [
  { label: "Products", href: "/products" },
  { label: "Manufacturing", href: "/about" },
  { label: "Industries", href: "/industries" },
  { label: "Quality", href: "/quality" },
  { label: "Exports", href: "/exports" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0d0d0d] border-b border-[#222] shadow-lg"
          : "bg-[#111111] border-b border-[#1e1e1e]"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-18">
          {/* Logo */}
          <Link
            to="/"
            className="flex flex-col leading-none group"
            data-ocid="nav.link"
          >
            <span className="text-xl font-black tracking-tighter text-white group-hover:opacity-90 transition-opacity">
              TECNK<span className="text-[#D32F2F]">F</span>ORGED
            </span>
            <span className="text-[10px] font-medium tracking-[0.18em] uppercase text-[#666] mt-0.5">
              Screw Mfg Co.
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav
            className="hidden lg:flex items-center gap-1"
            aria-label="Main navigation"
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className="px-3.5 py-2 text-[11px] font-semibold tracking-[0.12em] uppercase text-[#999] hover:text-white transition-colors duration-200 relative group"
                activeProps={{
                  className:
                    "px-3.5 py-2 text-[11px] font-semibold tracking-[0.12em] uppercase text-white",
                }}
                data-ocid="nav.link"
              >
                {link.label}
                <span className="absolute bottom-0 left-3.5 right-3.5 h-[1px] bg-[#D32F2F] scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left" />
              </Link>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              to="/contact"
              className="btn-primary text-[11px] flex items-center gap-1.5"
              data-ocid="nav.primary_button"
            >
              Request Quote
              <ChevronRight className="w-3 h-3" />
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            type="button"
            className="lg:hidden p-2 text-white"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            data-ocid="nav.toggle"
          >
            {menuOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden bg-[#111111] border-t border-[#222]">
          <nav className="px-4 py-4 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                onClick={() => setMenuOpen(false)}
                className="block px-4 py-3 text-[11px] font-semibold tracking-[0.12em] uppercase text-[#999] hover:text-white hover:bg-[#1a1a1a] transition-colors rounded-sm"
                data-ocid="nav.link"
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-3 pb-1">
              <Link
                to="/contact"
                onClick={() => setMenuOpen(false)}
                className="btn-primary w-full justify-center"
                data-ocid="nav.primary_button"
              >
                Request Quote
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
