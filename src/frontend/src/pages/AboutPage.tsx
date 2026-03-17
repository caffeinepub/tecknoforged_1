import { Link } from "@tanstack/react-router";
import {
  BadgeCheck,
  ChevronRight,
  ClipboardCheck,
  Cpu,
  Flame,
  Layers,
  Settings,
} from "lucide-react";
import { useEffect } from "react";
import { useInView } from "../hooks/useInView";

function AnimSection({
  children,
  delay = 0,
  className = "",
}: { children: React.ReactNode; delay?: number; className?: string }) {
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

const capabilities = [
  {
    icon: Settings,
    title: "Precision Cold Forging",
    body: "High-volume near-net-shape forming on multi-station cold headers with dimensional tolerances held to ±0.05 mm across production runs of millions of pieces.",
  },
  {
    icon: Cpu,
    title: "CNC Thread Machining",
    body: "Fully automated CNC thread rolling and cutting centres for metric (coarse/fine), UNC, UNF, and proprietary thread profiles including Taptite, Hi-Low, and PT.",
  },
  {
    icon: Flame,
    title: "Heat Treatment",
    body: "Controlled gas carburising, batch quenching, and tempering furnaces producing consistent mechanical properties from Grade 4.8 through Grade 12.9.",
  },
  {
    icon: Layers,
    title: "Surface Coating",
    body: "In-house electroplating, black oxide, and barrel finishing. Partnerships with approved applicators for Geomet, Dacromet, and hot-dip galvanising.",
  },
  {
    icon: ClipboardCheck,
    title: "Quality Inspection",
    body: "CMM dimensional verification, go/no-go thread gauge inspection, and surface roughness measurement. 100% visual inspection prior to packaging.",
  },
  {
    icon: BadgeCheck,
    title: "Material Certification",
    body: "Full mill test reports and chemical composition certificates supplied with every shipment. Batch traceability from raw material to finished goods.",
  },
];

export default function AboutPage() {
  useEffect(() => {
    document.title = "Manufacturing | Tecknoforged Screw Mfg Co.";
  }, []);

  return (
    <main className="pt-16 min-h-screen bg-[#111111]">
      <div className="bg-[#0d0d0d] border-b border-[#1e1e1e] py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="section-label">Our Process</span>
          <h1 className="section-title text-white mb-3">
            Manufacturing Excellence
          </h1>
          <p className="text-sm text-[#666] max-w-2xl">
            From cold forging to final inspection — every Tecknoforged fastener
            passes through a controlled, documented production process designed
            for industrial reliability.
          </p>
        </div>
      </div>

      {/* Company Overview */}
      <section className="bg-[#f5f5f5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimSection>
              <span className="section-label">About Us</span>
              <h2 className="section-title text-[#111] mb-5">
                Precision by Design
              </h2>
              <p className="text-sm text-[#555] leading-relaxed mb-4">
                Tecknoforged Screw Mfg Co. was established in Mumbai with a
                single mission: to manufacture fasteners that engineers can rely
                on. Over two decades of production experience, our team has
                built expertise across cold forging, heat treatment, thread
                engineering, and surface finishing.
              </p>
              <p className="text-sm text-[#555] leading-relaxed mb-4">
                Our manufacturing philosophy is rooted in Japanese kaizen
                principles — continuous improvement, zero-defect mindset, and
                precision at every stage. We do not compete on price alone; we
                compete on dimensional consistency, mechanical reliability, and
                supply certainty.
              </p>
              <p className="text-sm text-[#555] leading-relaxed mb-8">
                Today, Tecknoforged supplies OEM fastener programs to customers
                in the automotive, electronics, construction, and heavy
                machinery sectors across India and global markets.
              </p>
              <Link
                to="/contact"
                className="btn-primary bg-[#111] border-[#111]"
                data-ocid="about.primary_button"
              >
                Request a Quote
                <ChevronRight className="w-3.5 h-3.5" />
              </Link>
            </AnimSection>
            <AnimSection delay={150}>
              <img
                src="/assets/generated/hero-screws.dim_1600x900.jpg"
                alt="Tecknoforged manufacturing facility"
                className="w-full aspect-video object-cover"
              />
            </AnimSection>
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="bg-[#111111]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <AnimSection className="mb-10">
            <span className="section-label">Capabilities</span>
            <h2 className="section-title text-white">Production Process</h2>
            <div className="industrial-divider mt-4" />
          </AnimSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {capabilities.map((cap, i) => (
              <AnimSection key={cap.title} delay={i * 80}>
                <div className="bg-[#1a1a1a] border border-[#2a2a2a] p-6 hover:border-[#D32F2F] transition-colors duration-300">
                  <div className="w-10 h-10 flex items-center justify-center bg-[#D32F2F]/10 border border-[#D32F2F]/20 mb-4">
                    <cap.icon className="w-5 h-5 text-[#D32F2F]" />
                  </div>
                  <h3 className="text-sm font-bold text-white tracking-tight mb-2">
                    {cap.title}
                  </h3>
                  <p className="text-xs text-[#666] leading-relaxed">
                    {cap.body}
                  </p>
                </div>
              </AnimSection>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
