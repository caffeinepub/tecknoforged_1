import { Link } from "@tanstack/react-router";
import {
  Award,
  BadgeCheck,
  ChevronRight,
  ClipboardCheck,
  FileCheck,
  Gauge,
  Shield,
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

const standards = [
  {
    code: "ISO 9001:2015",
    desc: "International quality management system standard. Governs our entire production, supplier qualification, and corrective action process.",
  },
  {
    code: "DIN Standards",
    desc: "German industrial norms for fastener geometry, thread form, mechanical properties, and surface treatment — the global benchmark for precision fasteners.",
  },
  {
    code: "JIS B 1176/1194",
    desc: "Japanese Industrial Standard for hex socket head screws and button head screws, widely specified by Japanese OEM manufacturers.",
  },
  {
    code: "ASTM F3125",
    desc: "American standard for structural bolts. Applicable to our high-strength hex head and flange bolt production.",
  },
];

const tests = [
  {
    icon: Gauge,
    label: "Thread Gauge Inspection",
    desc: "Go/no-go thread gauges verify pitch diameter and form conformance on every production batch before release.",
  },
  {
    icon: ClipboardCheck,
    label: "Dimensional Verification",
    desc: "CMM and optical comparator measurement of head dimensions, socket depth, thread length, and shank diameter.",
  },
  {
    icon: Shield,
    label: "Hardness Testing",
    desc: "Rockwell HRB/HRC and Vickers HV testing to verify heat treatment meets grade mechanical property requirements.",
  },
  {
    icon: FileCheck,
    label: "Material Certification",
    desc: "Mill test reports with chemical composition and mechanical property data supplied with every consignment.",
  },
  {
    icon: BadgeCheck,
    label: "Surface Finish",
    desc: "Salt spray testing (ASTM B117) to validate coating performance, thickness measurement by XRF, and visual inspection.",
  },
  {
    icon: Award,
    label: "Batch Traceability",
    desc: "Every production batch carries a unique identifier linking finished goods to raw material, process records, and test results.",
  },
];

export default function QualityPage() {
  useEffect(() => {
    document.title = "Quality | Tecknoforged Screw Mfg Co.";
  }, []);

  return (
    <main className="pt-16 min-h-screen bg-[#111111]">
      <div className="bg-[#0d0d0d] border-b border-[#1e1e1e] py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="section-label">Quality Assurance</span>
          <h1 className="section-title text-white mb-3">Standards & Testing</h1>
          <p className="text-sm text-[#666] max-w-2xl">
            Every Tecknoforged fastener is produced and inspected under a
            rigorous quality system. We do not ship components that do not
            conform to specification.
          </p>
        </div>
      </div>

      {/* Standards */}
      <section className="bg-[#f5f5f5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <AnimSection className="mb-10">
            <span className="section-label">Conformance</span>
            <h2 className="section-title text-[#111]">
              Standards We Manufacture To
            </h2>
            <div
              className="industrial-divider mt-4"
              style={{ background: "#D32F2F" }}
            />
          </AnimSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {standards.map((s, i) => (
              <AnimSection key={s.code} delay={i * 100}>
                <div className="bg-white border border-[#e5e5e5] border-l-4 border-l-[#D32F2F] p-6">
                  <h3 className="text-base font-black text-[#111] tracking-tight mb-2">
                    {s.code}
                  </h3>
                  <p className="text-sm text-[#666] leading-relaxed">
                    {s.desc}
                  </p>
                </div>
              </AnimSection>
            ))}
          </div>
        </div>
      </section>

      {/* Tests */}
      <section className="bg-[#111111]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <AnimSection className="mb-10">
            <span className="section-label">Inspection</span>
            <h2 className="section-title text-white">Testing Processes</h2>
            <div className="industrial-divider mt-4" />
          </AnimSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {tests.map((test, i) => (
              <AnimSection key={test.label} delay={i * 80}>
                <div className="bg-[#1a1a1a] border border-[#2a2a2a] p-6 hover:border-[#D32F2F] transition-colors duration-300">
                  <div className="w-10 h-10 flex items-center justify-center bg-[#D32F2F]/10 border border-[#D32F2F]/20 mb-4">
                    <test.icon className="w-5 h-5 text-[#D32F2F]" />
                  </div>
                  <h3 className="text-sm font-bold text-white tracking-tight mb-2">
                    {test.label}
                  </h3>
                  <p className="text-xs text-[#666] leading-relaxed">
                    {test.desc}
                  </p>
                </div>
              </AnimSection>
            ))}
          </div>
          <AnimSection delay={300} className="mt-10 text-center">
            <Link
              to="/contact"
              className="btn-primary"
              data-ocid="quality.primary_button"
            >
              Request Certification Docs
              <ChevronRight className="w-3.5 h-3.5" />
            </Link>
          </AnimSection>
        </div>
      </section>
    </main>
  );
}
