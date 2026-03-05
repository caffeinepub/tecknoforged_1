import { Link } from "@tanstack/react-router";
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
import ScrewPreview3D, {
  type Finish,
  type ScrewType,
} from "../components/ScrewPreview3D";
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

// ── 3D Product Card ────────────────────────────────────────────
interface Product3DCardProps {
  label: string;
  screwType: ScrewType;
  finish: Finish;
  index: number;
}

function Product3DCard({
  label,
  screwType,
  finish,
  index,
}: Product3DCardProps) {
  const [hovered, setHovered] = useState(false);

  return (
    <FadeInSection delay={index * 0.07}>
      <div
        className="group relative flex flex-col rounded-xl overflow-hidden border border-white/8 bg-[#0d1b2e] hover:border-red-600/40 transition-all duration-300 hover:shadow-lg hover:shadow-red-600/10"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        data-ocid={`showcase.item.${index + 1}`}
      >
        {/* 3D badge */}
        <div className="absolute top-2 right-2 z-10 bg-red-600 text-white text-[10px] font-bold px-2 py-0.5 rounded-full tracking-wide">
          3D
        </div>

        {/* 3D Canvas */}
        <div className="relative aspect-square bg-[#0a1525]">
          <ScrewPreview3D
            screwType={screwType}
            finish={finish}
            interactive={hovered}
            className="w-full h-full"
          />
        </div>

        {/* Label + link */}
        <div className="p-3 flex items-center justify-between">
          <span className="text-sm font-semibold text-white/80 group-hover:text-white transition-colors">
            {label}
          </span>
          <Link
            to="/configurator"
            search={{ type: screwType }}
            className="text-[11px] font-semibold text-red-400/70 group-hover:text-red-400 flex items-center gap-0.5 transition-colors"
          >
            View <ChevronRight size={11} />
          </Link>
        </div>
      </div>
    </FadeInSection>
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

  const showcase3D: { label: string; screwType: ScrewType; finish: Finish }[] =
    [
      { label: "Allen Cap", screwType: "allen-cap", finish: "stainless" },
      { label: "Button Head", screwType: "button-head", finish: "stainless" },
      { label: "Torx", screwType: "torx", finish: "black-oxide" },
      {
        label: "Self Drilling",
        screwType: "self-drilling",
        finish: "zinc-plated",
      },
      { label: "PT Screw", screwType: "pt-screw", finish: "stainless" },
      { label: "Taptite", screwType: "taptite", finish: "nickel-plated" },
    ];

  return (
    <main>
      {/* ── HERO (dark industrial) ─────────────────────────────── */}
      <section
        className="relative min-h-screen flex items-center overflow-hidden"
        style={{ background: "#070c16" }}
      >
        {/* Industrial grid overlay */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              "repeating-linear-gradient(0deg,rgba(255,255,255,0.03) 0px,rgba(255,255,255,0.03) 1px,transparent 1px,transparent 60px),repeating-linear-gradient(90deg,rgba(255,255,255,0.03) 0px,rgba(255,255,255,0.03) 1px,transparent 1px,transparent 60px)",
          }}
        />
        {/* Radial red glow on right */}
        <div
          className="absolute right-0 top-1/2 -translate-y-1/2 w-[600px] h-[600px] pointer-events-none"
          style={{
            background:
              "radial-gradient(circle at center, rgba(220,38,38,0.12) 0%, transparent 70%)",
          }}
        />

        <div className="relative w-full container-brand pt-28 pb-16">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-8 items-center">
            {/* LEFT — 60% */}
            <div className="lg:col-span-3 flex flex-col gap-6">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              >
                {/* Badge */}
                <div className="inline-flex items-center gap-2 border border-red-600/30 bg-red-600/10 text-red-400 text-xs font-semibold px-3 py-1.5 rounded-full mb-6 tracking-wide">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
                  ISO Certified · Since 1976
                </div>

                {/* H1 */}
                <h1 className="font-bold tracking-tight text-white mb-2 leading-none">
                  <span
                    className="block font-extrabold tracking-[0.04em]"
                    style={{ fontSize: "clamp(2.8rem, 6vw, 5rem)" }}
                  >
                    TECKNOFORGED
                  </span>
                  <span
                    className="block text-white/50 font-medium tracking-widest uppercase"
                    style={{ fontSize: "clamp(0.85rem, 1.5vw, 1.1rem)" }}
                  >
                    Screw Mfg Co.
                  </span>
                </h1>

                {/* Divider */}
                <div className="w-16 h-0.5 bg-red-600 my-5" />

                {/* Subtext */}
                <p className="text-white/60 text-lg leading-relaxed mb-8 max-w-lg">
                  Precision screws M3–M10. Engineered for OEMs and industrial
                  manufacturers.
                </p>

                {/* CTA Row */}
                <div className="flex flex-wrap gap-3 mb-10">
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-bold px-6 py-3 rounded-lg transition-all shadow-lg shadow-red-600/25 text-sm"
                    data-ocid="hero.primary_button"
                  >
                    Request Quote
                    <ChevronRight size={16} />
                  </Link>
                  <Link
                    to="/configurator"
                    className="inline-flex items-center gap-2 border border-red-600/60 bg-red-600/10 text-red-400 hover:bg-red-600/20 hover:text-red-300 font-bold px-6 py-3 rounded-lg transition-all text-sm"
                    data-ocid="hero.configurator.primary_button"
                  >
                    Configure Screw in 3D
                    <ChevronRight size={16} />
                  </Link>
                  <Link
                    to="/products"
                    className="inline-flex items-center gap-2 border border-white/15 bg-white/5 text-white/70 hover:bg-white/10 hover:text-white font-semibold px-6 py-3 rounded-lg transition-all text-sm"
                    data-ocid="hero.products.secondary_button"
                  >
                    Explore Products
                  </Link>
                </div>

                {/* Trust row */}
                <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-[11px] font-semibold tracking-widest uppercase text-white/30">
                  {[
                    "ISO Certified",
                    "M3–M10",
                    "OEM Supplier",
                    "Export Ready",
                  ].map((item, i) => (
                    <span key={item} className="flex items-center gap-3">
                      {i > 0 && <span className="text-white/15">|</span>}
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* RIGHT — 40%: 3D Screw */}
            <motion.div
              className="lg:col-span-2 flex items-center justify-center"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.9,
                delay: 0.2,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <div
                className="w-full rounded-2xl overflow-hidden border border-white/8 bg-[#0d1b2e] shadow-2xl shadow-black/60"
                style={{
                  height: "min(600px, 70vw)",
                  minHeight: "400px",
                }}
              >
                <ScrewPreview3D
                  screwType="allen-cap"
                  finish="stainless"
                  interactive={false}
                  className="w-full h-full"
                />
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom fade into stats bar */}
        <div
          className="absolute bottom-0 left-0 right-0 h-16 pointer-events-none"
          style={{
            background: "linear-gradient(to bottom, transparent, #0f172a)",
          }}
        />
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

      {/* ── 3D PRODUCT SHOWCASE ───────────────────────────────── */}
      <section className="py-16 md:py-20" style={{ background: "#0a1020" }}>
        <div className="container-brand">
          <FadeInSection>
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 border border-red-600/30 bg-red-600/10 text-red-400 text-xs font-semibold px-3 py-1.5 rounded-full mb-4 tracking-wide">
                <span className="w-1.5 h-1.5 rounded-full bg-red-500" />
                Interactive 3D Models
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-3 tracking-tight">
                3D Product Showcase
              </h2>
              <p className="text-white/45 max-w-md mx-auto text-sm leading-relaxed">
                Hover any product to interact with the 3D model
              </p>
            </div>
          </FadeInSection>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {showcase3D.map((item, i) => (
              <Product3DCard
                key={item.screwType}
                label={item.label}
                screwType={item.screwType}
                finish={item.finish}
                index={i}
              />
            ))}
          </div>

          <FadeInSection delay={0.3}>
            <div className="text-center mt-10">
              <Link
                to="/configurator"
                className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-bold px-8 py-4 rounded-xl transition-all shadow-lg shadow-red-600/30 text-base"
                data-ocid="showcase.configurator.primary_button"
              >
                Open Full 3D Configurator →
              </Link>
            </div>
          </FadeInSection>
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
                  to="/products/$slug"
                  params={{ slug: product.slug }}
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
              <Link
                to="/products"
                className="btn-orange"
                data-ocid="products.primary_button"
              >
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
                Delivering quality fasteners to the most demanding industrial
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
                data-ocid="cta.contact.primary_button"
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
              <div
                className="bg-green-50 border border-green-200 rounded p-5 text-green-800"
                data-ocid="contact.success_state"
              >
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
                    data-ocid="contact.input"
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
                    data-ocid="contact.input"
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
                      setContactForm((p) => ({
                        ...p,
                        message: e.target.value,
                      }))
                    }
                    className="w-full border border-border rounded px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent transition resize-none"
                    data-ocid="contact.textarea"
                  />
                </div>
                {submitError && (
                  <p
                    className="text-red-600 text-sm"
                    data-ocid="contact.error_state"
                  >
                    {submitError}
                  </p>
                )}
                <button
                  type="submit"
                  disabled={submitting}
                  className="btn-orange w-full justify-center py-3 disabled:opacity-60 disabled:cursor-not-allowed"
                  data-ocid="contact.submit_button"
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
