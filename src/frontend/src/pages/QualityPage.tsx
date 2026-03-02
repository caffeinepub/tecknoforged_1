import { Link } from "@tanstack/react-router";
import {
  Award,
  CheckCircle,
  ClipboardCheck,
  FlaskConical,
  Microscope,
  Scan,
  Shield,
} from "lucide-react";
import { motion, useInView } from "motion/react";
import { useEffect, useRef } from "react";

function FadeIn({
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
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
      transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

const processSteps = [
  {
    step: "01",
    icon: Microscope,
    title: "Raw Material Inspection",
    desc: "Every incoming batch of steel rod, wire, or coil is tested for chemical composition using spectrometry and hardness testing before entering production. Heat numbers are recorded for full traceability.",
    details: [
      "Chemical composition analysis",
      "Hardness testing (Rockwell/Brinell)",
      "Dimensional verification of rod/wire",
      "Supplier certification review",
      "Batch quarantine until approved",
    ],
  },
  {
    step: "02",
    icon: Scan,
    title: "In-Process Quality Control",
    desc: "During cold forging, thread rolling, and heat treatment, dimensional checks and thread gauging are performed at regular intervals to maintain process capability within specification.",
    details: [
      "Go/No-Go gauge inspection",
      "Thread pitch diameter measurement",
      "Head dimensions and drive cavity check",
      "Case hardness monitoring",
      "In-process rejection and rework process",
    ],
  },
  {
    step: "03",
    icon: FlaskConical,
    title: "Tensile & Torque Testing",
    desc: "Finished fasteners are subjected to tensile load testing on a calibrated Universal Testing Machine to verify proof load, yield strength, and ultimate tensile strength per ISO 898-1 requirements.",
    details: [
      "Proof load testing per ISO/DIN",
      "Ultimate tensile strength measurement",
      "Break torque and prevailing torque tests",
      "Charpy impact testing (for low-temperature grades)",
      "Results recorded with calibration traceability",
    ],
  },
  {
    step: "04",
    icon: Shield,
    title: "Surface Finish Inspection",
    desc: "Coating thickness is measured using X-ray fluorescence and magnetic induction methods. Visual inspection under controlled lighting identifies surface defects, plating uniformity, and appearance.",
    details: [
      "Zinc coating thickness by XRF",
      "Salt spray testing (neutral salt, ASTM B117)",
      "Visual inspection for burrs, cracks, voids",
      "Adhesion testing for coated fasteners",
      "Color and gloss measurement for appearance-critical parts",
    ],
  },
  {
    step: "05",
    icon: ClipboardCheck,
    title: "Final Batch Certification",
    desc: "Before dispatch, every batch receives a test certificate documenting dimensional, mechanical, and surface inspection results. Certificates include traceability to raw material heat numbers.",
    details: [
      "Dimensional inspection report",
      "Mechanical test certificate (UTM data)",
      "Surface treatment certificate",
      "Packing and labeling verification",
      "Customer-specific documentation prepared",
    ],
  },
];

const standards = [
  {
    code: "ISO 898-1",
    desc: "Mechanical properties of fasteners — bolts, screws, studs",
  },
  {
    code: "ISO 4759",
    desc: "Tolerances for fasteners — product grades A, B, C",
  },
  {
    code: "DIN 931/932",
    desc: "Hexagon head bolts and screws — partial and full thread",
  },
  { code: "DIN 933", desc: "Hexagon head screws — full thread" },
  {
    code: "ASTM F3125",
    desc: "Standard specification for high-strength structural bolts",
  },
  { code: "ISO 3506", desc: "Corrosion-resistant stainless steel fasteners" },
];

const equipment = [
  "Universal Testing Machine (100kN capacity)",
  "Coordinate Measuring Machine (CMM)",
  "Thread gauges — Go/No-Go sets to DIN 13",
  "Rockwell and Vickers hardness testers",
  "Salt spray test chamber (ASTM B117)",
  "XRF coating thickness analyser",
  "Optical comparator (50× to 200×)",
  "Torque measurement equipment",
];

const certifications = [
  { cert: "ISO 9001:2015", issuer: "Quality Management System" },
  { cert: "BIS Certification", issuer: "Bureau of Indian Standards" },
  { cert: "RoHS Compliant", issuer: "Restriction of Hazardous Substances" },
  { cert: "Export Quality Approval", issuer: "ECGC Approved Supplier" },
];

export default function QualityPage() {
  useEffect(() => {
    document.title =
      "Quality Assurance | ISO-Certified Fastener Manufacturing | Tecknoforged";
  }, []);

  return (
    <main className="pt-16">
      {/* Hero */}
      <section className="relative bg-navy py-20 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-10"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=1600&q=80)",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#0A1628] to-[#1E3A5F]/60" />
        <div className="relative container-brand">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-label text-orange-400 mb-3">Quality Assurance</p>
            <h1 className="heading-xl text-white mb-4">
              ISO-Driven Quality
              <br />
              at Every Stage
            </h1>
            <p className="text-blue-200/70 max-w-2xl font-light text-lg leading-relaxed">
              From raw material receipt to final dispatch, every fastener batch
              undergoes rigorous testing and documentation under our ISO
              9001:2015 quality system.
            </p>
            <div className="flex flex-wrap gap-4 mt-8">
              {[
                "ISO 9001:2015",
                "BIS Certified",
                "RoHS Compliant",
                "Export Approved",
              ].map((cert) => (
                <span
                  key={cert}
                  className="flex items-center gap-1.5 bg-orange-500/15 border border-orange-500/30 text-orange-300 text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider"
                >
                  <CheckCircle size={12} />
                  {cert}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Quality Process */}
      <section className="section-padding bg-white">
        <div className="container-brand">
          <FadeIn>
            <div className="text-center mb-14">
              <p className="text-label text-orange-600 mb-2">Our Process</p>
              <h2 className="heading-lg text-navy mb-3">
                5-Stage Quality Process
              </h2>
              <p className="text-muted-foreground max-w-xl mx-auto">
                Every batch traceable from raw material to customer receipt
              </p>
            </div>
          </FadeIn>

          <div className="flex flex-col gap-8">
            {processSteps.map((step, i) => (
              <FadeIn key={step.step} delay={i * 0.08}>
                <div className="flex flex-col md:flex-row gap-6 p-6 bg-light-brand border border-border rounded hover:shadow-md transition-shadow">
                  {/* Step number + icon */}
                  <div className="flex flex-row md:flex-col items-center md:items-start gap-3 md:w-20 flex-shrink-0">
                    <div className="text-4xl font-display font-extrabold text-orange-500/30 leading-none">
                      {step.step}
                    </div>
                    <div className="w-10 h-10 bg-navy rounded flex items-center justify-center">
                      <step.icon size={18} className="text-orange-400" />
                    </div>
                  </div>
                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="font-bold text-navy text-lg mb-2">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                      {step.desc}
                    </p>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                      {step.details.map((d) => (
                        <li
                          key={d}
                          className="flex items-start gap-2 text-xs text-muted-foreground"
                        >
                          <CheckCircle
                            size={12}
                            className="text-orange-500 flex-shrink-0 mt-0.5"
                          />
                          {d}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Standards + Equipment */}
      <section className="section-padding bg-light-brand">
        <div className="container-brand">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Standards */}
            <FadeIn>
              <h2 className="heading-md text-navy mb-6 flex items-center gap-2">
                <Award size={22} className="text-orange-500" />
                Standards Compliance
              </h2>
              <div className="flex flex-col gap-3">
                {standards.map((s) => (
                  <div
                    key={s.code}
                    className="flex gap-4 p-4 bg-white border border-border rounded"
                  >
                    <div className="font-mono font-bold text-orange-600 text-sm w-28 flex-shrink-0">
                      {s.code}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {s.desc}
                    </div>
                  </div>
                ))}
              </div>
            </FadeIn>

            {/* Equipment */}
            <FadeIn delay={0.1}>
              <h2 className="heading-md text-navy mb-6 flex items-center gap-2">
                <FlaskConical size={22} className="text-orange-500" />
                Testing Equipment
              </h2>
              <div className="bg-white border border-border rounded p-5">
                <ul className="flex flex-col gap-3">
                  {equipment.map((eq, i) => (
                    <li key={eq} className="flex items-center gap-3 text-sm">
                      <span className="w-6 h-6 bg-navy rounded text-orange-400 text-xs font-bold flex items-center justify-center flex-shrink-0">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="text-muted-foreground">{eq}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="section-padding bg-white">
        <div className="container-brand">
          <FadeIn>
            <div className="text-center mb-10">
              <p className="text-label text-orange-600 mb-2">Certifications</p>
              <h2 className="heading-lg text-navy">
                Our Quality Certifications
              </h2>
            </div>
          </FadeIn>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {certifications.map((c, i) => (
              <FadeIn key={c.cert} delay={i * 0.1}>
                <div className="text-center p-6 border-2 border-orange-200 rounded bg-orange-50 hover:border-orange-400 transition-colors">
                  <Shield size={32} className="text-orange-500 mx-auto mb-3" />
                  <div className="font-bold text-navy text-base mb-1">
                    {c.cert}
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {c.issuer}
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy py-12">
        <div className="container-brand text-center">
          <FadeIn>
            <h2 className="heading-md text-white mb-4">
              Request Quality Documentation for Your Order
            </h2>
            <p className="text-blue-200/60 mb-6 text-sm max-w-xl mx-auto">
              All orders include full test certificates, dimensional reports,
              and material traceability documentation.
            </p>
            <Link to="/contact" className="btn-orange">
              Submit RFQ
            </Link>
          </FadeIn>
        </div>
      </section>
    </main>
  );
}
