import { ChevronDown, Menu, Phone, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { products } from "../../data/products";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [productDropdownOpen, setProductDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // biome-ignore lint/correctness/useExhaustiveDependencies: close menus on route change
  useEffect(() => {
    setMobileOpen(false);
    setProductDropdownOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setProductDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Products", href: "/products", hasDropdown: true },
    { label: "Industries", href: "/industries" },
    { label: "Quality", href: "/quality" },
    { label: "Exports", href: "/exports" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/contact" },
  ];

  const isActive = (href: string) => {
    if (href === "/") return location.pathname === "/";
    return location.pathname.startsWith(href);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0A1628] shadow-xl border-b border-white/10"
          : "bg-[#0A1628] border-b border-white/10"
      }`}
    >
      <div className="container-brand">
        <div className="flex items-center justify-between h-16 lg:h-18">
          {/* Logo */}
          <Link
            to="/"
            className="flex flex-col leading-tight group"
            aria-label="Tecknoforged Home"
          >
            <span className="text-white font-display text-xl font-extrabold tracking-tight group-hover:text-orange-400 transition-colors">
              TECKNOFORGED
            </span>
            <span className="text-[10px] text-blue-300/70 font-medium tracking-[0.12em] uppercase hidden sm:block">
              Precision Fasteners. Engineered for Strength.
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav
            className="hidden lg:flex items-center gap-1"
            aria-label="Main navigation"
          >
            {navLinks.map((link) =>
              link.hasDropdown ? (
                <div key={link.href} className="relative" ref={dropdownRef}>
                  <button
                    className={`flex items-center gap-1 px-3 py-2 text-sm font-medium rounded transition-colors ${
                      isActive(link.href)
                        ? "text-orange-400"
                        : "text-white/80 hover:text-white"
                    }`}
                    onClick={() => setProductDropdownOpen(!productDropdownOpen)}
                    aria-expanded={productDropdownOpen}
                    aria-haspopup="true"
                    type="button"
                  >
                    {link.label}
                    <ChevronDown
                      size={14}
                      className={`transition-transform duration-200 ${productDropdownOpen ? "rotate-180" : ""}`}
                    />
                  </button>
                  {productDropdownOpen && (
                    <div className="absolute top-full left-0 mt-1 w-72 bg-[#0A1628] border border-white/10 rounded shadow-xl py-2 z-50">
                      <Link
                        to="/products"
                        className="flex items-center px-4 py-2.5 text-sm text-white/70 hover:text-white hover:bg-white/5 font-medium"
                      >
                        All Products →
                      </Link>
                      <div className="h-px bg-white/10 mx-4 my-1" />
                      {products.map((product) => (
                        <Link
                          key={product.slug}
                          to={`/products/${product.slug}`}
                          className="flex items-center px-4 py-2 text-sm text-white/60 hover:text-white hover:bg-white/5 gap-2"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-orange-500 flex-shrink-0" />
                          {product.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={link.href}
                  to={link.href}
                  className={`px-3 py-2 text-sm font-medium rounded transition-colors ${
                    isActive(link.href)
                      ? "text-orange-400"
                      : "text-white/80 hover:text-white"
                  }`}
                >
                  {link.label}
                </Link>
              ),
            )}
          </nav>

          {/* CTA + Mobile Toggle */}
          <div className="flex items-center gap-3">
            <a
              href="tel:+919870090508"
              className="hidden sm:flex items-center gap-1.5 text-white/70 hover:text-white text-sm transition-colors"
              aria-label="Call us"
            >
              <Phone size={14} />
              <span className="hidden xl:inline">+91 9870090508</span>
            </a>
            <button
              className="lg:hidden text-white p-2 rounded hover:bg-white/10 transition-colors"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
              type="button"
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {mobileOpen && (
        <div className="lg:hidden bg-[#0A1628] border-t border-white/10 pb-4 max-h-[80vh] overflow-y-auto">
          <nav className="container-brand pt-2" aria-label="Mobile navigation">
            {navLinks.map((link) => (
              <div key={link.href}>
                <Link
                  to={link.href}
                  className={`flex items-center py-3 text-base font-medium border-b border-white/5 transition-colors ${
                    isActive(link.href)
                      ? "text-orange-400"
                      : "text-white/80 hover:text-white"
                  }`}
                >
                  {link.label}
                </Link>
                {link.hasDropdown && (
                  <div className="bg-white/5 ml-4 mb-2">
                    {products.map((product) => (
                      <Link
                        key={product.slug}
                        to={`/products/${product.slug}`}
                        className="flex items-center py-2 px-3 text-sm text-white/60 hover:text-white gap-2"
                      >
                        <span className="w-1 h-1 rounded-full bg-orange-500" />
                        {product.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="pt-4 flex flex-col gap-3">
              <a
                href="tel:+919870090508"
                className="flex items-center justify-center gap-2 border border-white/30 text-white py-3 px-6 rounded hover:bg-white/10 transition-colors"
              >
                <Phone size={16} />
                Call +91 9870090508
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
