import { CheckCircle, FileText, Globe, Package, Truck } from "lucide-react";
import { motion, useInView } from "motion/react";
import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

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

const exportMarkets = [
  {
    region: "Middle East",
    countries: ["UAE", "Saudi Arabia", "Qatar", "Kuwait", "Bahrain", "Oman"],
    flag: "🌙",
    desc: "Strong supply relationships with construction, oil & gas, and automotive aftermarket sectors.",
  },
  {
    region: "Southeast Asia",
    countries: [
      "Malaysia",
      "Thailand",
      "Indonesia",
      "Vietnam",
      "Singapore",
      "Philippines",
    ],
    flag: "🌴",
    desc: "Growing electronics and automotive manufacturing sectors driving high-volume fastener demand.",
  },
  {
    region: "Africa",
    countries: [
      "South Africa",
      "Kenya",
      "Nigeria",
      "Egypt",
      "Tanzania",
      "Ghana",
    ],
    flag: "🌍",
    desc: "Infrastructure development and industrial growth creating consistent demand for reliable fasteners.",
  },
  {
    region: "Europe",
    countries: [
      "Germany",
      "United Kingdom",
      "Netherlands",
      "Poland",
      "Italy",
      "Belgium",
    ],
    flag: "🇪🇺",
    desc: "Precision-manufactured fasteners meeting DIN/ISO standards for European industrial applications.",
  },
];

const packaging = [
  {
    type: "Bulk Boxes",
    desc: "25kg and 50kg bulk corrugated cartons with polybag liner for high-volume orders. Palletized for container shipment.",
    specs: "Max load: 1,000kg/pallet, 22-pallet FCL",
  },
  {
    type: "Retail Packs",
    desc: "Blister cards, polybag retail packs, and small boxes for distribution and resale packaging.",
    specs: "Custom quantities from 10 to 500 pieces per pack",
  },
  {
    type: "Custom OEM Packaging",
    desc: "Custom-branded packaging with customer logo, part numbers, and barcodes for direct production line supply.",
    specs: "Barcode (EAN/QR), RFID options available",
  },
];

const documentation = [
  "Mill Test Certificates (MTC) for raw material",
  "Dimensional Inspection Reports",
  "Mechanical Test Certificates (UTM data)",
  "Material Safety Data Sheets (MSDS/SDS)",
  "Certificate of Conformance (CoC/CoA)",
  "Commercial Invoice and Packing List",
  "Country of Origin Certificate",
  "GSP/Form A Certificate (where applicable)",
];

const logistics = [
  {
    mode: "FCL Container",
    desc: "20ft and 40ft Full Container Load shipments for high-volume orders. CIF and FOB pricing available.",
  },
  {
    mode: "LCL Consolidation",
    desc: "Less-than-Container-Load groupage shipments for mixed or smaller orders through Mumbai port.",
  },
  {
    mode: "Air Express",
    desc: "DHL/FedEx express for sample shipments, urgent stock replenishment, and small critical orders.",
  },
  {
    mode: "Sea + Air",
    desc: "Combined sea and air routing for urgent large orders requiring speed and cost balance.",
  },
];

export default function ExportsPage() {
  useEffect(() => {
    document.title =
      "Export Capabilities | Global Fastener Supplier | Tecknoforged Mumbai";
  }, []);

  return (
    <main className="pt-16">
      {/* Hero */}
      <section className="relative bg-navy py-20 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-15"
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
            <p className="text-label text-orange-400 mb-3">Global Supply</p>
            <h1 className="heading-xl text-white mb-4">
              Supplying Precision Fasteners Globally
            </h1>
            <p className="text-blue-200/70 max-w-2xl font-light text-lg leading-relaxed">
              Export-ready manufacturing with full documentation, compliant
              packaging, and experienced logistics support to 20+ countries
              worldwide.
            </p>
            <div className="flex items-center gap-3 mt-6">
              <Globe size={20} className="text-orange-400" />
              <span className="text-white font-semibold">
                20+ Countries Served
              </span>
              <span className="text-blue-300/40">|</span>
              <span className="text-blue-200/60">
                Mumbai Port — Gateway to Global Supply
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Export Markets */}
      <section className="section-padding bg-white">
        <div className="container-brand">
          <FadeIn>
            <div className="text-center mb-12">
              <p className="text-label text-orange-600 mb-2">Export Markets</p>
              <h2 className="heading-lg text-navy mb-3">Where We Supply</h2>
              <p className="text-muted-foreground max-w-xl mx-auto">
                Established export relationships across key industrial markets
              </p>
            </div>
          </FadeIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {exportMarkets.map((market, i) => (
              <FadeIn key={market.region} delay={i * 0.1}>
                <div className="card-industrial p-6 h-full flex flex-col">
                  <div className="text-3xl mb-3">{market.flag}</div>
                  <h3 className="font-bold text-navy text-lg mb-2">
                    {market.region}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                    {market.desc}
                  </p>
                  <div className="mt-auto flex flex-wrap gap-1.5">
                    {market.countries.map((c) => (
                      <span
                        key={c}
                        className="text-[11px] font-medium bg-light-brand border border-border text-muted-foreground px-2 py-0.5 rounded"
                      >
                        {c}
                      </span>
                    ))}
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Packaging */}
      <section className="section-padding bg-light-brand">
        <div className="container-brand">
          <FadeIn>
            <div className="text-center mb-12">
              <p className="text-label text-orange-600 mb-2">Packaging</p>
              <h2 className="heading-lg text-navy mb-3">
                Export Packaging Standards
              </h2>
            </div>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {packaging.map((p, i) => (
              <FadeIn key={p.type} delay={i * 0.1}>
                <div className="bg-white border border-border rounded p-6 h-full flex flex-col gap-3">
                  <div className="w-10 h-10 bg-navy rounded flex items-center justify-center">
                    <Package size={18} className="text-orange-400" />
                  </div>
                  <h3 className="font-bold text-navy">{p.type}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                    {p.desc}
                  </p>
                  <div className="bg-light-brand rounded p-2.5 text-xs text-muted-foreground font-medium">
                    {p.specs}
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Documentation + Logistics */}
      <section className="section-padding bg-white">
        <div className="container-brand">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Documentation */}
            <FadeIn>
              <h2 className="heading-md text-navy mb-6 flex items-center gap-2">
                <FileText size={22} className="text-orange-500" />
                Export Documentation
              </h2>
              <p className="text-muted-foreground text-sm leading-relaxed mb-5">
                All export orders are supplied with complete documentation
                packages for customs clearance, letter of credit compliance, and
                quality assurance verification.
              </p>
              <ul className="flex flex-col gap-3">
                {documentation.map((doc) => (
                  <li key={doc} className="flex items-start gap-3">
                    <CheckCircle
                      size={15}
                      className="text-orange-500 flex-shrink-0 mt-0.5"
                    />
                    <span className="text-sm text-muted-foreground">{doc}</span>
                  </li>
                ))}
              </ul>
            </FadeIn>

            {/* Logistics */}
            <FadeIn delay={0.1}>
              <h2 className="heading-md text-navy mb-6 flex items-center gap-2">
                <Truck size={22} className="text-orange-500" />
                Logistics Options
              </h2>
              <div className="flex flex-col gap-4">
                {logistics.map((l, i) => (
                  <div
                    key={l.mode}
                    className="flex gap-4 p-4 bg-light-brand border border-border rounded"
                  >
                    <div className="w-8 h-8 bg-navy rounded flex items-center justify-center flex-shrink-0 text-xs font-bold text-orange-400">
                      {String(i + 1).padStart(2, "0")}
                    </div>
                    <div>
                      <div className="font-bold text-navy text-sm mb-1">
                        {l.mode}
                      </div>
                      <div className="text-xs text-muted-foreground">
                        {l.desc}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-5 p-4 bg-orange-50 border border-orange-200 rounded">
                <p className="text-sm text-orange-800 font-medium">
                  Pricing terms: EXW, FOB Mumbai, CIF destination port
                  available. Contact us for freight estimates to your location.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy py-12">
        <div className="container-brand text-center">
          <FadeIn>
            <h2 className="heading-md text-white mb-4">
              Ready to Source Fasteners from India's Trusted Exporter?
            </h2>
            <div className="flex flex-wrap justify-center gap-4 mt-6">
              <Link to="/rfq" className="btn-orange">
                Submit Export RFQ
              </Link>
              <Link to="/contact" className="btn-outline-white">
                Contact Export Team
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </main>
  );
}
