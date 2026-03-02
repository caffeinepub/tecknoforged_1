import {
  Award,
  Car,
  CheckCircle,
  ChevronRight,
  Cpu,
  Headphones,
  Loader2,
  MapPin,
  MessageSquare,
  Package,
  Phone,
  Settings,
  Wrench,
  Zap,
} from "lucide-react";
import { motion, useInView } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { products } from "../data/products";
import { useBackend } from "../hooks/useBackend";

// ── Animated counter ───────────────────────────────────────────
function AnimatedCounter({
  target,
  suffix = "",
}: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    const duration = 1200;
    const start = performance.now();
    const animate = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - (1 - progress) ** 3;
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [inView, target]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

// ── Section fade-in wrapper ────────────────────────────────────
function FadeInSection({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 28 }}
      transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// ── Main component ─────────────────────────────────────────────
export default function HomePage() {
  const { actor } = useBackend();
  const [contactForm, setContactForm] = useState({
    name: "",
    phone: "",
    message: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState("");

  useEffect(() => {
    document.title =
      "Tecknoforged | Industrial Fastener Manufacturer Mumbai | Bulk Screws Bolts Supplier India";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute(
        "content",
        "ISO-certified fastener manufacturer in Mumbai since 1976. Bulk supply of screws, bolts, rivets, washers for automobile, electrical & electronics OEMs. Contact us today.",
      );
    } else {
      const m = document.createElement("meta");
      m.name = "description";
      m.content =
        "ISO-certified fastener manufacturer in Mumbai since 1976. Bulk supply of screws, bolts, rivets, washers for automobile, electrical & electronics OEMs. Contact us today.";
      document.head.appendChild(m);
    }
  }, []);

  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!contactForm.name || !contactForm.phone || !contactForm.message) return;
    setSubmitting(true);
    setSubmitError("");
    try {
      if (!actor) throw new Error("Not connected");
      await actor.submitContactMessage(
        contactForm.name,
        contactForm.phone,
        contactForm.message,
      );
      setSubmitted(true);
      setContactForm({ name: "", phone: "", message: "" });
    } catch {
      setSubmitError("Failed to send message. Please call us directly.");
    } finally {
      setSubmitting(false);
    }
  };

  const stats = [
    { value: 45, suffix: "+", label: "Years Experience" },
    { value: 500, suffix: "+", label: "Product Variants" },
    { value: 50, suffix: "+", label: "OEM Clients" },
    { value: 20, suffix: "+", label: "Export Countries" },
  ];

  const industries = [
    {
      icon: Car,
      name: "Automobile",
      desc: "Supplying OEM-grade fasteners to leading automobile manufacturers. Tensile-tested to meet automotive assembly standards.",
    },
    {
      icon: Zap,
      name: "Electrical",
      desc: "High-precision fasteners for electrical panels, switchgear and control systems requiring dimensional accuracy.",
    },
    {
      icon: Cpu,
      name: "Electronics",
      desc: "Miniature to standard fasteners for electronics assembly requiring tight tolerances and surface consistency.",
    },
    {
      icon: Settings,
      name: "General Engineering",
      desc: "Comprehensive fastener solutions for industrial machinery, infrastructure and engineering applications.",
    },
  ];

  const whyUs = [
    {
      icon: Award,
      title: "45+ Years Manufacturing Legacy",
      desc: "Established 1976, trusted by OEMs across India and globally",
    },
    {
      icon: CheckCircle,
      title: "ISO-Driven Quality Process",
      desc: "Every batch tested to international standards before dispatch",
    },
    {
      icon: Settings,
      title: "Bulk Production Capacity",
      desc: "High-volume manufacturing with rapid turnaround times",
    },
    {
      icon: Wrench,
      title: "Custom Specification Manufacturing",
      desc: "Bespoke fasteners to your exact drawings and tolerances",
    },
    {
      icon: Package,
      title: "Export-Ready Packaging",
      desc: "Compliant packaging for international shipments",
    },
    {
      icon: Headphones,
      title: "Dedicated Technical Support",
      desc: "Expert team for specification, selection and troubleshooting",
    },
  ];

  return (
    <main>
      {/* ── HERO ─────────────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "url(/assets/generated/hero-home-screws.dim_1920x1080.jpg)",
          }}
        />
        {/* Dark overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A1628] via-[#0A1628]/90 to-[#1E3A5F]/70" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0A1628]/50" />

        <div className="relative container-brand pt-28 pb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 border border-orange-500/40 bg-orange-500/10 text-orange-400 text-xs font-semibold px-3 py-1.5 rounded-full mb-6 tracking-wide">
              <span className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse" />
              ISO Certified Manufacturer Since 1976
            </div>

            {/* H1 */}
            <h1 className="heading-xl text-white mb-5 max-w-3xl">
              Precision Fasteners.{" "}
              <span className="text-orange-400">Engineered for</span> Industrial
              Strength.
            </h1>

            {/* Subheadline */}
            <p className="text-lg text-blue-100/80 mb-8 max-w-2xl leading-relaxed font-light">
              India's trusted bulk fastener manufacturer supplying OEM-grade
              screws, bolts, rivets & washers to automobile, electrical and
              electronics industries. Mumbai-based. Export-ready.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 mb-10">
              <a
                href="tel:+919870090508"
                className="btn-outline-white text-base px-7 py-3.5"
              >
                <Phone size={18} />
                Call: +91 9870090508
              </a>
              <Link
                to="/products"
                className="btn-orange text-base px-7 py-3.5 shadow-orange"
              >
                View Products
                <ChevronRight size={18} />
              </Link>
            </div>

            {/* Trust row */}
            <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-xs font-semibold tracking-widest uppercase text-blue-200/60">
              {[
                "ISO Certified",
                "Since 1976",
                "OEM Supplier",
                "Export Ready",
                "Grade 8.8 / 10.9",
              ].map((item, i) => (
                <span key={item} className="flex items-center gap-3">
                  {i > 0 && <span className="text-blue-200/30">|</span>}
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#0f1e35] to-transparent" />
      </section>

      {/* ── STATS BAR ─────────────────────────────────────────── */}
      <section className="steel-texture py-10">
        <div className="container-brand">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <FadeInSection key={stat.label} delay={i * 0.1}>
                <div className="text-center">
                  <div className="text-4xl md:text-5xl font-display font-extrabold text-white mb-1">
                    <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                  </div>
                  <div className="text-[11px] font-semibold tracking-[0.12em] uppercase text-blue-300/60">
                    {stat.label}
                  </div>
                </div>
              </FadeInSection>
            ))}
            <FadeInSection delay={0.4}>
              <div className="text-center col-span-2 md:col-span-1 md:col-start-auto">
                <div className="text-4xl md:text-5xl font-display font-extrabold text-white mb-1">
                  8.8–12.9
                </div>
                <div className="text-[11px] font-semibold tracking-[0.12em] uppercase text-blue-300/60">
                  Grades Available
                </div>
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* ── PRODUCT CATEGORIES ────────────────────────────────── */}
      <section className="section-padding bg-light-brand">
        <div className="container-brand">
          <FadeInSection>
            <div className="text-center mb-12">
              <p className="text-label text-orange-600 mb-2">Product Range</p>
              <h2 className="heading-lg text-navy mb-3">Our Product Range</h2>
              <p className="text-muted-foreground max-w-xl mx-auto">
                Precision-engineered fasteners manufactured to international
                standards
              </p>
            </div>
          </FadeInSection>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {products.map((product, i) => (
              <FadeInSection key={product.slug} delay={i * 0.04}>
                <Link
                  to={`/products/${product.slug}`}
                  className="group card-industrial overflow-hidden flex flex-col"
                >
                  <div className="relative overflow-hidden aspect-square bg-gray-100">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                  </div>
                  <div className="p-3 flex-1">
                    <h3 className="text-sm font-semibold text-navy leading-tight mb-1 group-hover:text-orange-600 transition-colors">
                      {product.name}
                    </h3>
                    <p className="text-[11px] text-muted-foreground">
                      {product.shortSpec}
                    </p>
                  </div>
                  <div className="px-3 pb-3">
                    <span className="text-[11px] font-semibold text-orange-600 flex items-center gap-0.5 group-hover:gap-1.5 transition-all">
                      View Details <ChevronRight size={11} />
                    </span>
                  </div>
                </Link>
              </FadeInSection>
            ))}
          </div>

          <FadeInSection delay={0.2}>
            <div className="text-center mt-10">
              <Link to="/products" className="btn-orange">
                View All Products
                <ChevronRight size={16} />
              </Link>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* ── INDUSTRIES ────────────────────────────────────────── */}
      <section className="section-padding bg-white">
        <div className="container-brand">
          <FadeInSection>
            <div className="text-center mb-12">
              <p className="text-label text-orange-600 mb-2">
                Industries Served
              </p>
              <h2 className="heading-lg text-navy mb-3">Industries We Serve</h2>
              <p className="text-muted-foreground max-w-xl mx-auto">
                Delivering precision fasteners to the most demanding industrial
                sectors
              </p>
            </div>
          </FadeInSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {industries.map((ind, i) => (
              <FadeInSection key={ind.name} delay={i * 0.1}>
                <div className="card-industrial p-6 flex flex-col gap-4 h-full">
                  <div className="w-12 h-12 bg-orange-50 rounded flex items-center justify-center">
                    <ind.icon size={22} className="text-orange-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-navy mb-2">{ind.name}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {ind.desc}
                    </p>
                  </div>
                  <Link
                    to="/industries"
                    className="mt-auto text-sm font-semibold text-orange-600 flex items-center gap-1 hover:gap-2 transition-all"
                  >
                    Learn More <ChevronRight size={14} />
                  </Link>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY TECKNOFORGED ──────────────────────────────────── */}
      <section className="section-padding bg-light-brand">
        <div className="container-brand">
          <FadeInSection>
            <div className="text-center mb-12">
              <p className="text-label text-orange-600 mb-2">Our Advantage</p>
              <h2 className="heading-lg text-navy mb-3">
                Why Choose Tecknoforged?
              </h2>
              <p className="text-muted-foreground max-w-xl mx-auto">
                Decades of manufacturing experience combined with modern quality
                systems
              </p>
            </div>
          </FadeInSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyUs.map((item, i) => (
              <FadeInSection key={item.title} delay={i * 0.08}>
                <div className="flex gap-4 p-5 bg-white rounded border border-border hover:border-orange-200 hover:shadow-md transition-all duration-200">
                  <div className="w-10 h-10 bg-navy rounded flex items-center justify-center flex-shrink-0">
                    <item.icon size={18} className="text-orange-400" />
                  </div>
                  <div>
                    <h3 className="font-bold text-navy text-sm mb-1">
                      {item.title}
                    </h3>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA BLOCK ─────────────────────────────────────────── */}
      <section className="bg-navy py-16">
        <div className="container-brand text-center">
          <FadeInSection>
            <h2 className="heading-lg text-white mb-4">
              Ready to Source Reliable Fasteners at Scale?
            </h2>
            <p className="text-blue-200/70 max-w-xl mx-auto mb-8 leading-relaxed">
              Talk to our procurement team. Get technical specifications, bulk
              pricing and delivery timelines within 24 hours.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <a
                href="tel:+919870090508"
                className="btn-outline-white px-8 py-3.5 text-base"
              >
                <Phone size={18} />
                Call +91 9870090508
              </a>
              <Link
                to="/contact"
                className="btn-orange px-8 py-3.5 text-base shadow-orange"
              >
                Contact Our Team
                <ChevronRight size={18} />
              </Link>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* ── CONTACT ───────────────────────────────────────────── */}
      <section className="grid grid-cols-1 lg:grid-cols-2">
        {/* Left — dark */}
        <div className="bg-[#1E3A5F] p-10 lg:p-16 flex flex-col justify-center gap-6">
          <FadeInSection>
            <p className="text-label text-orange-400 mb-2">Get in Touch</p>
            <h2 className="heading-md text-white mb-6">Contact Our Team</h2>

            <div className="flex flex-col gap-4 text-sm">
              <div>
                <div className="text-white font-bold text-base">
                  Tecknoforged
                </div>
                <div className="text-blue-200/60 text-xs">
                  Standard Screw Manufacturing Co.
                </div>
              </div>
              <div>
                <div className="text-white font-semibold">Mr. Ranjit Singh</div>
                <div className="text-blue-200/60 text-xs">
                  Proprietor & Contact Person
                </div>
              </div>
              <a
                href="tel:+919870090508"
                className="flex items-center gap-3 text-blue-100 hover:text-orange-400 transition-colors group"
              >
                <div className="w-8 h-8 bg-orange-500/20 rounded flex items-center justify-center">
                  <Phone size={14} className="text-orange-400" />
                </div>
                +91 9870090508
              </a>
              <div className="flex items-start gap-3 text-blue-100">
                <div className="w-8 h-8 bg-orange-500/20 rounded flex items-center justify-center flex-shrink-0">
                  <MapPin size={14} className="text-orange-400" />
                </div>
                Mumbai, Maharashtra, India
              </div>
            </div>

            <a
              href="https://wa.me/919870090508"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 bg-green-500 hover:bg-green-600 text-white font-semibold px-5 py-2.5 rounded transition-colors mt-4 text-sm"
            >
              <svg
                viewBox="0 0 24 24"
                fill="white"
                className="w-4 h-4"
                aria-hidden="true"
              >
                <title>WhatsApp</title>
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Chat on WhatsApp
            </a>
          </FadeInSection>
        </div>

        {/* Right — white */}
        <div className="bg-white p-10 lg:p-16 flex flex-col justify-center">
          <FadeInSection>
            <h3 className="heading-md text-navy mb-6 flex items-center gap-2">
              <MessageSquare size={22} className="text-orange-500" />
              Send a Quick Message
            </h3>

            {submitted ? (
              <div className="bg-green-50 border border-green-200 rounded p-5 text-green-800">
                <p className="font-semibold mb-1">Message sent successfully!</p>
                <p className="text-sm">
                  Our team will contact you within 24 business hours.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleContactSubmit}
                className="flex flex-col gap-4"
              >
                <div>
                  <label
                    className="block text-sm font-semibold text-navy mb-1.5"
                    htmlFor="contact-name"
                  >
                    Your Name *
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    placeholder="e.g. Ramesh Kumar"
                    value={contactForm.name}
                    onChange={(e) =>
                      setContactForm((p) => ({ ...p, name: e.target.value }))
                    }
                    className="w-full border border-border rounded px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent transition"
                  />
                </div>
                <div>
                  <label
                    className="block text-sm font-semibold text-navy mb-1.5"
                    htmlFor="contact-phone"
                  >
                    Phone Number *
                  </label>
                  <input
                    id="contact-phone"
                    type="tel"
                    required
                    placeholder="+91 98765 43210"
                    value={contactForm.phone}
                    onChange={(e) =>
                      setContactForm((p) => ({ ...p, phone: e.target.value }))
                    }
                    className="w-full border border-border rounded px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent transition"
                  />
                </div>
                <div>
                  <label
                    className="block text-sm font-semibold text-navy mb-1.5"
                    htmlFor="contact-msg"
                  >
                    Message *
                  </label>
                  <textarea
                    id="contact-msg"
                    required
                    rows={3}
                    placeholder="Tell us about your requirement..."
                    value={contactForm.message}
                    onChange={(e) =>
                      setContactForm((p) => ({ ...p, message: e.target.value }))
                    }
                    className="w-full border border-border rounded px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent transition resize-none"
                  />
                </div>
                {submitError && (
                  <p className="text-red-600 text-sm">{submitError}</p>
                )}
                <button
                  type="submit"
                  disabled={submitting}
                  className="btn-orange w-full justify-center py-3 disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {submitting ? (
                    <>
                      <Loader2 size={16} className="animate-spin" />
                      Sending...
                    </>
                  ) : (
                    "Send Message"
                  )}
                </button>
              </form>
            )}
          </FadeInSection>
        </div>
      </section>
    </main>
  );
}
