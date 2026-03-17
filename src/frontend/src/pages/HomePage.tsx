import { Link } from "@tanstack/react-router";
import {
  Award,
  BadgeCheck,
  Building2,
  Car,
  ChevronRight,
  CircuitBoard,
  ClipboardCheck,
  Cpu,
  Factory,
  Flame,
  Layers,
  Package,
  Settings,
  Shield,
  Truck,
  Wrench,
} from "lucide-react";
import { useEffect, useRef } from "react";
import { useInView } from "../hooks/useInView";

// ——— Animated Section Wrapper ———
function AnimSection({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const { ref, inView } = useInView();
  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className={`fade-in-up ${inView ? "in-view" : ""} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

// ——— Stats Data ———
const stats = [
  { value: "25+", label: "Years Experience" },
  { value: "50M+", label: "Units / Year" },
  { value: "12", label: "Industries Served" },
  { value: "ISO 9001", label: "Certified" },
];

// ——— Product Categories ———
const productCategories = [
  {
    title: "Machine Screws",
    description:
      "High-precision Allen cap, button head, and hex socket screws manufactured to DIN 912 / ISO 4762.",
    image: "/assets/generated/product-machine-screw.dim_600x600.jpg",
    href: "/products",
  },
  {
    title: "Self-Tapping Screws",
    description:
      "Thread-forming and thread-cutting screws for plastics, sheet metal, and light alloys. Taptite, Hi-Low, PT.",
    image: "/assets/generated/product-self-tapping.dim_600x600.jpg",
    href: "/products",
  },
  {
    title: "Industrial Fasteners",
    description:
      "Hex flange bolts, self-drilling screws, nylock nuts, and washers for structural applications.",
    image: "/assets/generated/product-industrial-fasteners.dim_600x600.jpg",
    href: "/products",
  },
  {
    title: "Custom Components",
    description:
      "OEM-specific fastener designs engineered to drawing. Custom thread forms, special finishes, batch traceability.",
    image: "/assets/generated/product-custom-components.dim_600x600.jpg",
    href: "/products",
  },
];

// ——— Manufacturing Capabilities ———
const capabilities = [
  {
    icon: Settings,
    label: "Precision Cold Forging",
    desc: "High-volume near-net-shape forming with dimensional tolerances to ±0.05 mm.",
  },
  {
    icon: Cpu,
    label: "CNC Thread Machining",
    desc: "Automated thread rolling and cutting for metric, UNC/UNF, and custom profiles.",
  },
  {
    icon: Flame,
    label: "Heat Treatment",
    desc: "Controlled carburising, quenching, and tempering for Grade 8.8–12.9 properties.",
  },
  {
    icon: Layers,
    label: "Surface Coating",
    desc: "Zinc plating, black oxide, Geomet, Dacromet, and hot-dip galvanising in-house.",
  },
  {
    icon: ClipboardCheck,
    label: "Quality Inspection",
    desc: "CMM dimensional verification, thread gauge inspection, and hardness testing per batch.",
  },
  {
    icon: BadgeCheck,
    label: "Material Certification",
    desc: "Full mill test reports and traceability documentation supplied with every shipment.",
  },
];

// ——— Industries ———
const industries = [
  {
    icon: Car,
    label: "Automotive",
    desc: "Body-in-white, powertrain, suspension, and trim assembly.",
  },
  {
    icon: CircuitBoard,
    label: "Electronics",
    desc: "PCB mounts, enclosure assembly, and precision instrument hardware.",
  },
  {
    icon: Building2,
    label: "Construction",
    desc: "Structural steel, cladding, roofing, and civil engineering applications.",
  },
  {
    icon: Wrench,
    label: "Heavy Machinery",
    desc: "Agricultural equipment, earth-movers, and industrial presses.",
  },
  {
    icon: Factory,
    label: "Industrial Equipment",
    desc: "CNC machines, hydraulics, pneumatics, and process plant.",
  },
  {
    icon: Package,
    label: "OEM Manufacturing",
    desc: "Custom fastener programs with kanban supply and consignment stocking.",
  },
];

// ——— Certifications ———
const certifications = [
  { label: "ISO 9001:2015", sub: "Quality Management System" },
  { label: "DIN Standards", sub: "German Industrial Norm" },
  { label: "±0.05 mm", sub: "Precision Tolerance" },
  { label: "Mill Certified", sub: "Batch Material Reports" },
];

export default function HomePage() {
  // Hero ref for initial animation trigger
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.title =
      "Tecknoforged Screw Mfg Co. | Precision Industrial Fasteners";
  }, []);

  return (
    <main className="pt-16">
      {/* ═══ HERO ═══ */}
      <section
        ref={heroRef}
        className="relative min-h-screen flex items-center"
        style={{
          background:
            "linear-gradient(135deg, #0a0a0a 0%, #111111 50%, #0f0f0f 100%)",
        }}
        data-ocid="hero.section"
      >
        {/* Background image with dark overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "url('/assets/generated/hero-screws.dim_1600x900.jpg')",
          }}
        />
        <div className="absolute inset-0 bg-black/75" />

        {/* Subtle grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="max-w-3xl">
            <span className="text-[11px] font-bold tracking-[0.22em] uppercase text-[#D32F2F] mb-6 block opacity-0 animate-hero-fade">
              Mumbai, India &nbsp;·&nbsp; Est. 2000 &nbsp;·&nbsp; ISO 9001
              Certified
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black tracking-[-0.035em] leading-[1.0] text-white mb-6 opacity-0 animate-hero-fade-delay">
              Precision Engineered
              <br />
              <span className="text-[#D32F2F]">Fasteners</span> for Industrial
              <br />
              Excellence
            </h1>
            <p className="text-base sm:text-lg text-[#aaa] leading-relaxed mb-10 max-w-xl opacity-0 animate-hero-fade-delay-2">
              High-performance screws and components manufactured with
              Japanese-level precision. Supplying OEMs and global industries
              from Mumbai.
            </p>
            <div
              className="flex flex-wrap gap-4 opacity-0 animate-hero-fade-delay-2"
              style={{ animationDelay: "0.65s" }}
            >
              <Link
                to="/products"
                className="btn-primary"
                data-ocid="hero.primary_button"
              >
                View Products
                <ChevronRight className="w-3.5 h-3.5" />
              </Link>
              <Link
                to="/contact"
                className="btn-outline"
                data-ocid="hero.secondary_button"
              >
                Request Quote
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#111111] to-transparent" />
      </section>

      {/* ═══ STATS BAR ═══ */}
      <section
        className="bg-[#1a1a1a] border-y border-[#2a2a2a]"
        data-ocid="stats.section"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-0 md:divide-x md:divide-[#2a2a2a]">
            {stats.map((stat, i) => (
              <AnimSection
                key={stat.label}
                delay={i * 80}
                className="flex flex-col items-center md:px-8 text-center"
              >
                <span className="text-2xl sm:text-3xl font-black tracking-tight text-[#D32F2F]">
                  {stat.value}
                </span>
                <span className="text-[11px] font-medium tracking-[0.1em] uppercase text-[#666] mt-1">
                  {stat.label}
                </span>
              </AnimSection>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ ABOUT ═══ */}
      <section className="bg-[#f5f5f5]" data-ocid="about.section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <AnimSection>
              <span className="section-label">About Tecknoforged</span>
              <h2 className="section-title text-[#111] mb-5">
                Engineering Trust,
                <br />
                Delivering Precision
              </h2>
              <p className="text-sm text-[#555] leading-relaxed mb-4">
                Tecknoforged Screw Mfg Co. is a Mumbai-based precision fastener
                manufacturer producing high-strength screws, bolts, and forged
                fastening components for the world's most demanding industries.
                Our production combines advanced forging technology, strict
                quality control, and deep engineering expertise.
              </p>
              <p className="text-sm text-[#555] leading-relaxed mb-8">
                Inspired by Japanese manufacturing principles — precision,
                reliability, and kaizen — we deliver products that meet global
                industrial standards including ISO, DIN, JIS, and ASTM.
              </p>
              <Link
                to="/about"
                className="btn-primary bg-[#111] border-[#111] hover:bg-[#333]"
                data-ocid="about.primary_button"
              >
                Manufacturing Capability
                <ChevronRight className="w-3.5 h-3.5" />
              </Link>
            </AnimSection>

            <div className="space-y-4">
              {[
                {
                  icon: Settings,
                  title: "Precision Manufacturing",
                  body: "Cold forging and CNC thread machining to ±0.05 mm tolerances. Every batch 100% go/no-go gauge inspected before dispatch.",
                },
                {
                  icon: Shield,
                  title: "Quality Control",
                  body: "ISO 9001:2015 certified production with CMM dimensional verification, hardness testing, and full material traceability.",
                },
                {
                  icon: Truck,
                  title: "Reliable Supply",
                  body: "Consistent 10–15 day lead times, bulk export packaging, kanban programs, and global logistics support for OEM customers.",
                },
              ].map((item, i) => (
                <AnimSection key={item.title} delay={i * 120}>
                  <div className="flex gap-4 p-5 bg-white border-l-4 border-[#D32F2F] shadow-sm">
                    <item.icon className="w-5 h-5 text-[#D32F2F] shrink-0 mt-0.5" />
                    <div>
                      <h3 className="text-sm font-bold text-[#111] tracking-tight mb-1">
                        {item.title}
                      </h3>
                      <p className="text-xs text-[#666] leading-relaxed">
                        {item.body}
                      </p>
                    </div>
                  </div>
                </AnimSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══ PRODUCTS ═══ */}
      <section className="bg-[#111111]" data-ocid="products.section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <AnimSection className="mb-12">
            <span className="section-label">Product Catalog</span>
            <div className="flex items-end justify-between">
              <h2 className="section-title text-white">
                Industrial Fastening
                <br />
                Solutions
              </h2>
              <Link
                to="/products"
                className="hidden sm:flex items-center gap-1.5 text-[11px] font-semibold tracking-[0.1em] uppercase text-[#666] hover:text-white transition-colors"
                data-ocid="products.link"
              >
                Full Catalog
                <ChevronRight className="w-3.5 h-3.5" />
              </Link>
            </div>
            <div className="industrial-divider mt-4" />
          </AnimSection>

          <div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
            data-ocid="products.list"
          >
            {productCategories.map((product, i) => (
              <AnimSection
                key={product.title}
                delay={i * 80}
                className="h-full"
              >
                <Link
                  to={product.href}
                  className="group block bg-[#1a1a1a] border border-[#2a2a2a] card-hover h-full"
                  data-ocid={`products.item.${i + 1}`}
                >
                  <div className="aspect-square overflow-hidden bg-[#222]">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="text-sm font-bold text-white tracking-tight mb-2">
                      {product.title}
                    </h3>
                    <p className="text-xs text-[#777] leading-relaxed mb-4">
                      {product.description}
                    </p>
                    <span className="inline-flex items-center gap-1 text-[11px] font-semibold tracking-[0.1em] uppercase text-[#D32F2F] group-hover:gap-2 transition-all">
                      Learn More
                      <ChevronRight className="w-3 h-3" />
                    </span>
                  </div>
                </Link>
              </AnimSection>
            ))}
          </div>

          <AnimSection className="mt-8 text-center sm:hidden">
            <Link
              to="/products"
              className="btn-primary"
              data-ocid="products.primary_button"
            >
              View Full Catalog
            </Link>
          </AnimSection>
        </div>
      </section>

      {/* ═══ MANUFACTURING EXCELLENCE ═══ */}
      <section className="bg-[#f5f5f5]" data-ocid="manufacturing.section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <AnimSection className="mb-12 text-center">
            <span className="section-label">Capabilities</span>
            <h2 className="section-title text-[#111] max-w-xl mx-auto">
              Manufacturing
              <br />
              Excellence
            </h2>
            <div className="industrial-divider mx-auto mt-4" />
          </AnimSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {capabilities.map((cap, i) => (
              <AnimSection key={cap.label} delay={i * 80}>
                <div className="flex gap-4 p-6 bg-white border border-[#e5e5e5] hover:border-[#D32F2F] hover:shadow-md transition-all duration-300">
                  <div className="w-10 h-10 flex items-center justify-center bg-[#111] shrink-0">
                    <cap.icon className="w-5 h-5 text-[#D32F2F]" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-[#111] tracking-tight mb-1">
                      {cap.label}
                    </h3>
                    <p className="text-xs text-[#777] leading-relaxed">
                      {cap.desc}
                    </p>
                  </div>
                </div>
              </AnimSection>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ INDUSTRIES ═══ */}
      <section className="bg-[#111111]" data-ocid="industries.section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <AnimSection className="mb-12">
            <span className="section-label">Industries Served</span>
            <h2 className="section-title text-white">
              Global Industry
              <br />
              Applications
            </h2>
            <div className="industrial-divider mt-4" />
          </AnimSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {industries.map((ind, i) => (
              <AnimSection key={ind.label} delay={i * 70}>
                <div className="flex gap-4 p-5 bg-[#1a1a1a] border border-[#2a2a2a] hover:border-[#D32F2F] transition-colors duration-300">
                  <div className="w-9 h-9 flex items-center justify-center bg-[#D32F2F]/10 border border-[#D32F2F]/20 shrink-0">
                    <ind.icon className="w-4.5 h-4.5 text-[#D32F2F]" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-white tracking-tight mb-1">
                      {ind.label}
                    </h3>
                    <p className="text-xs text-[#666] leading-relaxed">
                      {ind.desc}
                    </p>
                  </div>
                </div>
              </AnimSection>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ QUALITY & CERTIFICATIONS ═══ */}
      <section className="bg-white" data-ocid="quality.section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <AnimSection>
              <span className="section-label">Quality Assurance</span>
              <h2 className="section-title text-[#111] mb-5">
                Certified to Global
                <br />
                Standards
              </h2>
              <p className="text-sm text-[#555] leading-relaxed mb-4">
                Tecknoforged follows strict quality control procedures inspired
                by Japanese manufacturing philosophy. Every component undergoes
                rigorous testing to ensure strength, durability, and dimensional
                accuracy.
              </p>
              <ul className="space-y-2 mb-8">
                {[
                  "ISO 9001:2015 certified quality management system",
                  "100% dimensional inspection using thread gauges and CMM",
                  "Rockwell and Vickers hardness testing per batch",
                  "Full material certification and mill test reports",
                  "Conformance to ISO, DIN, JIS, and ASTM standards",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <BadgeCheck className="w-3.5 h-3.5 text-[#D32F2F] mt-0.5 shrink-0" />
                    <span className="text-xs text-[#555]">{item}</span>
                  </li>
                ))}
              </ul>
              <Link
                to="/quality"
                className="btn-primary bg-[#111] border-[#111]"
                data-ocid="quality.primary_button"
              >
                Quality Details
                <ChevronRight className="w-3.5 h-3.5" />
              </Link>
            </AnimSection>

            <div className="grid grid-cols-2 gap-3">
              {certifications.map((cert, i) => (
                <AnimSection key={cert.label} delay={i * 100}>
                  <div className="bg-[#111] p-6 flex flex-col items-center text-center border border-[#222] hover:border-[#D32F2F] transition-colors duration-300">
                    <Award className="w-8 h-8 text-[#D32F2F] mb-3" />
                    <span className="text-base font-black text-white tracking-tight">
                      {cert.label}
                    </span>
                    <span className="text-[10px] text-[#666] mt-1 tracking-wide">
                      {cert.sub}
                    </span>
                  </div>
                </AnimSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══ CONTACT / INQUIRY ═══ */}
      <section className="bg-[#111111]" data-ocid="contact.section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Info */}
            <AnimSection>
              <span className="section-label">Get In Touch</span>
              <h2 className="section-title text-white mb-5">
                Request a
                <br />
                <span className="text-[#D32F2F]">Quote</span>
              </h2>
              <p className="text-sm text-[#777] leading-relaxed mb-8">
                Tell us your fastener requirements and we'll respond with
                detailed pricing, technical specifications, and lead time within
                24 hours.
              </p>
              <div className="space-y-4">
                {[
                  { icon: Award, label: "ISO 9001:2015 Certified" },
                  { icon: Truck, label: "Global Export Capability" },
                  { icon: Shield, label: "Material Test Certificates" },
                  { icon: Package, label: "Bulk / OEM Supply Programs" },
                ].map((item) => (
                  <div key={item.label} className="flex items-center gap-3">
                    <item.icon className="w-4 h-4 text-[#D32F2F] shrink-0" />
                    <span className="text-xs font-medium text-[#aaa]">
                      {item.label}
                    </span>
                  </div>
                ))}
              </div>
            </AnimSection>

            {/* Form */}
            <AnimSection delay={200}>
              <form
                className="space-y-4"
                onSubmit={(e) => e.preventDefault()}
                data-ocid="contact.panel"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="hname"
                      className="block text-[10px] font-bold tracking-[0.15em] uppercase text-[#666] mb-2"
                    >
                      Name
                    </label>
                    <input
                      id="hname"
                      type="text"
                      placeholder="Your name"
                      className="w-full bg-[#1a1a1a] border border-[#333] text-white text-sm px-4 py-3 outline-none focus:border-[#D32F2F] transition-colors placeholder-[#444]"
                      data-ocid="contact.input"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="hcompany"
                      className="block text-[10px] font-bold tracking-[0.15em] uppercase text-[#666] mb-2"
                    >
                      Company
                    </label>
                    <input
                      id="hcompany"
                      type="text"
                      placeholder="Company name"
                      className="w-full bg-[#1a1a1a] border border-[#333] text-white text-sm px-4 py-3 outline-none focus:border-[#D32F2F] transition-colors placeholder-[#444]"
                      data-ocid="contact.input"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="hemail"
                    className="block text-[10px] font-bold tracking-[0.15em] uppercase text-[#666] mb-2"
                  >
                    Email
                  </label>
                  <input
                    id="hemail"
                    type="email"
                    placeholder="your@company.com"
                    className="w-full bg-[#1a1a1a] border border-[#333] text-white text-sm px-4 py-3 outline-none focus:border-[#D32F2F] transition-colors placeholder-[#444]"
                    data-ocid="contact.input"
                  />
                </div>
                <div>
                  <label
                    htmlFor="hrequirement"
                    className="block text-[10px] font-bold tracking-[0.15em] uppercase text-[#666] mb-2"
                  >
                    Requirement
                  </label>
                  <textarea
                    id="hrequirement"
                    rows={4}
                    placeholder="Describe your fastener requirement — type, size, quantity, material, finish..."
                    className="w-full bg-[#1a1a1a] border border-[#333] text-white text-sm px-4 py-3 outline-none focus:border-[#D32F2F] transition-colors placeholder-[#444] resize-none"
                    data-ocid="contact.textarea"
                  />
                </div>
                <button
                  type="submit"
                  className="btn-primary w-full justify-center"
                  data-ocid="contact.submit_button"
                >
                  Request a Quote
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </form>
            </AnimSection>
          </div>
        </div>
      </section>
    </main>
  );
}
