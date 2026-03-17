import { Link } from "@tanstack/react-router";
import {
  Building2,
  Car,
  ChevronRight,
  CircuitBoard,
  Factory,
  Package,
  Wrench,
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

const industries = [
  {
    icon: Car,
    label: "Automotive",
    body: "Body-in-white, powertrain, suspension, brake systems, and interior trim. We supply socket head cap screws, flange bolts, Taptite, and torque-critical fasteners to Tier 1 and Tier 2 automotive suppliers.",
    products: [
      "Allen Cap Screws",
      "Hex Flange Bolts",
      "Taptite Screws",
      "Nylock Nuts",
    ],
  },
  {
    icon: CircuitBoard,
    label: "Electronics",
    body: "PCB mounting, enclosure assembly, and precision instrument hardware where small-diameter accuracy and drive integrity are essential. Hi-Low and PT screws for plastic housing assembly.",
    products: [
      "PT Screws",
      "Hi-Low Screws",
      "Button Head Screws",
      "BT Cut Screws",
    ],
  },
  {
    icon: Building2,
    label: "Construction",
    body: "Structural steel, pre-fab buildings, cladding, and roofing. Self-drilling screws, hex flange bolts, and blind rivets for high-volume automated building assembly.",
    products: ["Self Drilling Screws", "Hex Flange Bolts", "Rivets", "Washers"],
  },
  {
    icon: Wrench,
    label: "Heavy Machinery",
    body: "Agricultural equipment, earth-moving machinery, and industrial presses operating under sustained vibration and dynamic loads. Nylock nuts and high-grade Allen cap screws.",
    products: [
      "Allen Cap Screws",
      "Nylock Nuts",
      "Flange Head Screws",
      "Torx Screws",
    ],
  },
  {
    icon: Factory,
    label: "Industrial Equipment",
    body: "CNC machine tools, hydraulic and pneumatic systems, and process plant. Precision-tolerance fasteners with full dimensional traceability for regulated industrial environments.",
    products: [
      "Allen Cap Screws",
      "Button Head Screws",
      "Washers",
      "Nylock Nuts",
    ],
  },
  {
    icon: Package,
    label: "OEM Manufacturing",
    body: "Custom fastener programs with kanban delivery, consignment stocking, and vendor-managed inventory for high-volume OEM production environments.",
    products: ["Custom Components", "All Categories"],
  },
];

export default function IndustriesPage() {
  useEffect(() => {
    document.title = "Industries | Tecknoforged Screw Mfg Co.";
  }, []);

  return (
    <main className="pt-16 min-h-screen bg-[#111111]">
      <div className="bg-[#0d0d0d] border-b border-[#1e1e1e] py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="section-label">Industries Served</span>
          <h1 className="section-title text-white mb-3">Sectors We Supply</h1>
          <p className="text-sm text-[#666] max-w-xl">
            From automotive Tier 1 to electronics assembly, Tecknoforged
            fasteners are engineered for the demands of professional industrial
            production.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          {industries.map((ind, i) => (
            <AnimSection key={ind.label} delay={i * 100}>
              <div className="bg-[#1a1a1a] border border-[#2a2a2a] p-6 hover:border-[#D32F2F] transition-colors duration-300">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 flex items-center justify-center bg-[#D32F2F]/10 border border-[#D32F2F]/20 shrink-0">
                    <ind.icon className="w-6 h-6 text-[#D32F2F]" />
                  </div>
                  <div className="flex-1">
                    <h2 className="text-base font-bold text-white tracking-tight mb-2">
                      {ind.label}
                    </h2>
                    <p className="text-sm text-[#777] leading-relaxed mb-4">
                      {ind.body}
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {ind.products.map((p) => (
                        <span
                          key={p}
                          className="px-2.5 py-1 bg-[#222] border border-[#333] text-[10px] text-[#888] font-medium"
                        >
                          {p}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </AnimSection>
          ))}
        </div>

        <AnimSection delay={300} className="mt-12 text-center">
          <p className="text-sm text-[#666] mb-6">
            Don't see your industry? We supply fasteners to virtually all
            manufacturing sectors.
          </p>
          <Link
            to="/contact"
            className="btn-primary"
            data-ocid="industries.primary_button"
          >
            Discuss Your Requirements
            <ChevronRight className="w-3.5 h-3.5" />
          </Link>
        </AnimSection>
      </div>
    </main>
  );
}
