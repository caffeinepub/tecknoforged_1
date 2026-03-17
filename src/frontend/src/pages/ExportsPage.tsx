import { Link } from "@tanstack/react-router";
import { ChevronRight, FileCheck, Globe, Package, Truck } from "lucide-react";
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

const regions = [
  "India (Pan-India)",
  "Southeast Asia",
  "Middle East",
  "United Kingdom",
  "European Union",
  "North America",
  "Australia",
  "East Africa",
];

const exportFeatures = [
  {
    icon: FileCheck,
    label: "Full Documentation",
    desc: "Material test reports, inspection certificates, packing lists, and COO documentation with every export shipment.",
  },
  {
    icon: Package,
    label: "Export Packaging",
    desc: "Bulk cartons, polybags, and industrial reels optimised for long-distance transit. Custom labelling available.",
  },
  {
    icon: Truck,
    label: "Logistics Network",
    desc: "Established freight forwarder relationships for sea and air cargo from JNPT Mumbai to all major global ports.",
  },
  {
    icon: Globe,
    label: "Customs Compliance",
    desc: "HS code classification, DGFT documentation, and IEC-registered exporter status for smooth customs clearance.",
  },
];

export default function ExportsPage() {
  useEffect(() => {
    document.title = "Export Capability | Tecknoforged Screw Mfg Co.";
  }, []);

  return (
    <main className="pt-16 min-h-screen bg-[#111111]">
      <div className="bg-[#0d0d0d] border-b border-[#1e1e1e] py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="section-label">Global Supply</span>
          <h1 className="section-title text-white mb-3">Export Capability</h1>
          <p className="text-sm text-[#666] max-w-xl">
            Tecknoforged supplies precision fasteners to customers across India
            and global markets. Reliable documentation, packaging, and logistics
            for international procurement teams.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-16">
          <AnimSection>
            <span className="section-label">Where We Supply</span>
            <h2 className="section-title text-white mb-6">Global Reach</h2>
            <div className="flex flex-wrap gap-2">
              {regions.map((r) => (
                <span
                  key={r}
                  className="px-3 py-1.5 bg-[#1a1a1a] border border-[#2a2a2a] text-xs text-[#aaa] font-medium hover:border-[#D32F2F] transition-colors"
                >
                  {r}
                </span>
              ))}
            </div>
            <p className="text-sm text-[#666] leading-relaxed mt-6">
              Established export programs running to Southeast Asia, the Middle
              East, and European markets. Contact us to discuss your
              country-specific import requirements.
            </p>
          </AnimSection>
          <AnimSection delay={150}>
            <img
              src="/assets/generated/product-industrial-fasteners.dim_600x600.jpg"
              alt="Export-ready fastener packaging"
              className="w-full aspect-video object-cover"
            />
          </AnimSection>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
          {exportFeatures.map((feat, i) => (
            <AnimSection key={feat.label} delay={i * 100}>
              <div className="bg-[#1a1a1a] border border-[#2a2a2a] p-6 hover:border-[#D32F2F] transition-colors duration-300 flex gap-4">
                <div className="w-10 h-10 flex items-center justify-center bg-[#D32F2F]/10 border border-[#D32F2F]/20 shrink-0">
                  <feat.icon className="w-5 h-5 text-[#D32F2F]" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-white tracking-tight mb-1.5">
                    {feat.label}
                  </h3>
                  <p className="text-xs text-[#666] leading-relaxed">
                    {feat.desc}
                  </p>
                </div>
              </div>
            </AnimSection>
          ))}
        </div>

        <AnimSection delay={300} className="text-center">
          <Link
            to="/contact"
            className="btn-primary"
            data-ocid="exports.primary_button"
          >
            Start an Export Inquiry
            <ChevronRight className="w-3.5 h-3.5" />
          </Link>
        </AnimSection>
      </div>
    </main>
  );
}
