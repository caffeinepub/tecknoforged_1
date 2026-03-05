import { Link } from "@tanstack/react-router";
import {
  ChevronRight,
  Cpu,
  Layers,
  Package,
  Ruler,
  Settings2,
  Sparkles,
  Wrench,
  Zap,
} from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
import ScrewConfigurator3D, {
  type Finish,
  type ScrewLength,
  type ScrewSize,
  type ScrewType,
} from "../components/ScrewConfigurator3D";
import { products } from "../data/products";

// ── Types ──────────────────────────────────────────────────────

interface TypeOption {
  value: ScrewType;
  label: string;
  slug: string;
  icon: React.ElementType;
  description: string;
}

interface SizeOption {
  value: ScrewSize;
  label: string;
}

interface LengthOption {
  value: ScrewLength;
  label: string;
  mm: string;
}

interface FinishOption {
  value: Finish;
  label: string;
  swatch: string;
  description: string;
}

// ── Config Options ─────────────────────────────────────────────

const typeOptions: TypeOption[] = [
  {
    value: "allen-cap",
    label: "Allen Cap",
    slug: "allen-cap-screws",
    icon: Settings2,
    description: "Hex socket head",
  },
  {
    value: "button-head",
    label: "Button Head",
    slug: "button-head-screws",
    icon: Layers,
    description: "Low-profile dome",
  },
  {
    value: "torx",
    label: "Torx",
    slug: "torx-screws",
    icon: Zap,
    description: "Star drive system",
  },
  {
    value: "self-drilling",
    label: "Self Drilling",
    slug: "self-drilling-screws",
    icon: Wrench,
    description: "No pre-drilling",
  },
  {
    value: "pt-screw",
    label: "PT Screw",
    slug: "pt-screws",
    icon: Cpu,
    description: "Thread-forming",
  },
  {
    value: "taptite",
    label: "Taptite",
    slug: "taptite-screws",
    icon: Sparkles,
    description: "Thread-rolling",
  },
];

const sizeOptions: SizeOption[] = [
  { value: "M3", label: "M3" },
  { value: "M4", label: "M4" },
  { value: "M5", label: "M5" },
  { value: "M6", label: "M6" },
  { value: "M8", label: "M8" },
  { value: "M10", label: "M10" },
];

const lengthOptions: LengthOption[] = [
  { value: "short", label: "Short", mm: "10–20mm" },
  { value: "medium", label: "Medium", mm: "25–50mm" },
  { value: "long", label: "Long", mm: "60–100mm" },
];

const finishOptions: FinishOption[] = [
  {
    value: "zinc-plated",
    label: "Zinc Plated",
    swatch: "#b0bac4",
    description: "Silver-grey, corrosion resistant",
  },
  {
    value: "black-oxide",
    label: "Black Oxide",
    swatch: "#2a2e32",
    description: "Dark finish, mild protection",
  },
  {
    value: "stainless",
    label: "Stainless",
    swatch: "#d8dde3",
    description: "Bright silver, max corrosion resistance",
  },
  {
    value: "nickel-plated",
    label: "Nickel Plated",
    swatch: "#c8b87a",
    description: "Warm gold-silver, decorative",
  },
];

// ── Spec data per product ──────────────────────────────────────

function getSpecSummary(type: ScrewType) {
  const slugMap: Record<ScrewType, string> = {
    "allen-cap": "allen-cap-screws",
    "button-head": "button-head-screws",
    torx: "torx-screws",
    "self-drilling": "self-drilling-screws",
    "pt-screw": "pt-screws",
    taptite: "taptite-screws",
  };
  const slug = slugMap[type];
  const product = products.find((p) => p.slug === slug);
  return product
    ? {
        material: product.specifications.material,
        threadType: product.specifications.threadTypes,
        sizes: "M3 to M10",
        moq: product.moq.split(".")[0],
      }
    : { material: "—", threadType: "—", sizes: "M3–M10", moq: "—" };
}

// ── Subcomponents ──────────────────────────────────────────────

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-[11px] font-bold tracking-[0.18em] uppercase text-white/40 mb-3">
      {children}
    </p>
  );
}

// ── Page ───────────────────────────────────────────────────────

function getInitialType(): ScrewType {
  try {
    const params = new URLSearchParams(window.location.search);
    const t = params.get("type") as ScrewType | null;
    const validTypes: ScrewType[] = [
      "allen-cap",
      "button-head",
      "torx",
      "self-drilling",
      "pt-screw",
      "taptite",
    ];
    if (t && validTypes.includes(t)) return t;
  } catch {
    // noop
  }
  return "allen-cap";
}

export default function ScrewConfiguratorPage() {
  const [selectedType, setSelectedType] = useState<ScrewType>(getInitialType);
  const [selectedSize, setSelectedSize] = useState<ScrewSize>("M6");
  const [selectedLength, setSelectedLength] = useState<ScrewLength>("medium");
  const [selectedFinish, setSelectedFinish] = useState<Finish>("stainless");

  const config = {
    type: selectedType,
    size: selectedSize,
    length: selectedLength,
    finish: selectedFinish,
  };

  const spec = getSpecSummary(selectedType);
  const currentType = typeOptions.find((t) => t.value === selectedType);
  const currentFinish = finishOptions.find((f) => f.value === selectedFinish);
  const currentLength = lengthOptions.find((l) => l.value === selectedLength);

  return (
    <div className="min-h-screen bg-[#070f1c] pt-20">
      {/* Page Header */}
      <div className="bg-[#0A1628] border-b border-white/8">
        <div className="container-brand py-10 md:py-12">
          {/* Breadcrumb */}
          <nav
            className="flex items-center gap-1.5 text-xs text-white/35 mb-5"
            aria-label="Breadcrumb"
          >
            <Link to="/" className="hover:text-white/70 transition-colors">
              Home
            </Link>
            <ChevronRight size={12} />
            <span className="text-white/60">Configurator</span>
          </nav>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="flex items-start gap-4">
              <div className="hidden sm:flex w-12 h-12 rounded-lg bg-red-600/15 border border-red-600/30 items-center justify-center flex-shrink-0 mt-1">
                <Settings2 size={22} className="text-red-500" />
              </div>
              <div>
                <h1 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
                  3D Screw Configurator
                </h1>
                <p className="text-white/50 mt-2 text-base md:text-lg max-w-xl">
                  Visualize and configure your precision fastener in real-time.
                  Select type, size, length, and finish to see your exact spec.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container-brand py-8 md:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-start">
          {/* ── LEFT: 3D Viewer ── */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="lg:sticky lg:top-24"
          >
            {/* Canvas Container */}
            <div
              className="w-full rounded-xl overflow-hidden border border-white/8 bg-[#0d1b2e]"
              style={{ height: "min(520px, 70vw)", minHeight: 400 }}
              data-ocid="configurator.canvas_target"
            >
              <ScrewConfigurator3D config={config} />
            </div>

            {/* Quick spec badges below canvas */}
            <div className="flex flex-wrap gap-2 mt-4">
              <span className="inline-flex items-center gap-1.5 bg-white/5 border border-white/10 rounded-full px-3 py-1 text-xs text-white/60">
                <span
                  className="w-2 h-2 rounded-full"
                  style={{ backgroundColor: currentFinish?.swatch }}
                />
                {currentFinish?.label}
              </span>
              <span className="inline-flex items-center gap-1.5 bg-white/5 border border-white/10 rounded-full px-3 py-1 text-xs text-white/60">
                <Ruler size={11} />
                {selectedSize} — {currentLength?.mm}
              </span>
              <span className="inline-flex items-center gap-1.5 bg-white/5 border border-white/10 rounded-full px-3 py-1 text-xs text-white/60">
                <Package size={11} />
                {currentType?.label}
              </span>
            </div>
          </motion.div>

          {/* ── RIGHT: Config Panel ── */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.6,
              delay: 0.08,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="flex flex-col gap-5"
          >
            <div>
              <h2 className="text-xl font-bold text-white mb-1">
                Configure Your Screw
              </h2>
              <p className="text-white/40 text-sm">
                Adjust each parameter to generate your exact specification.
              </p>
            </div>

            {/* ── Screw Type ── */}
            <div
              className="bg-[#0e1d30] border border-white/8 rounded-xl p-5"
              data-ocid="configurator.panel"
            >
              <SectionLabel>Screw Type</SectionLabel>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {typeOptions.map((opt, idx) => {
                  const IconComp = opt.icon as React.FC<{
                    size?: number;
                    className?: string;
                  }>;
                  const isActive = selectedType === opt.value;
                  return (
                    <button
                      key={opt.value}
                      type="button"
                      onClick={() => setSelectedType(opt.value)}
                      data-ocid={`configurator.type.toggle.${idx + 1}`}
                      className={`flex flex-col items-start gap-1 p-3 rounded-lg border text-left transition-all duration-200 ${
                        isActive
                          ? "bg-red-600/15 border-red-600/60 text-white"
                          : "bg-white/3 border-white/8 text-white/50 hover:border-white/20 hover:text-white/80"
                      }`}
                    >
                      <div
                        className={`w-7 h-7 rounded-md flex items-center justify-center mb-0.5 ${
                          isActive ? "bg-red-600/20" : "bg-white/5"
                        }`}
                      >
                        <IconComp
                          size={15}
                          className={
                            isActive ? "text-red-400" : "text-white/40"
                          }
                        />
                      </div>
                      <span className="text-[13px] font-semibold leading-tight">
                        {opt.label}
                      </span>
                      <span className="text-[11px] text-white/35 leading-tight">
                        {opt.description}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* ── Size ── */}
            <div className="bg-[#0e1d30] border border-white/8 rounded-xl p-5">
              <SectionLabel>Thread Size</SectionLabel>
              <div className="flex flex-wrap gap-2">
                {sizeOptions.map((opt) => {
                  const isActive = selectedSize === opt.value;
                  return (
                    <button
                      key={opt.value}
                      type="button"
                      onClick={() => setSelectedSize(opt.value)}
                      data-ocid={"configurator.size.toggle"}
                      className={`min-w-[52px] px-4 py-2 rounded-full border text-sm font-bold transition-all duration-200 ${
                        isActive
                          ? "bg-red-600 border-red-600 text-white shadow-lg shadow-red-600/25"
                          : "bg-white/3 border-white/10 text-white/55 hover:border-white/25 hover:text-white"
                      }`}
                    >
                      {opt.label}
                    </button>
                  );
                })}
              </div>
              <p className="text-white/30 text-[11px] mt-3">
                Available range: M3 to M10
              </p>
            </div>

            {/* ── Length ── */}
            <div className="bg-[#0e1d30] border border-white/8 rounded-xl p-5">
              <SectionLabel>Length</SectionLabel>
              <div className="flex gap-2">
                {lengthOptions.map((opt) => {
                  const isActive = selectedLength === opt.value;
                  return (
                    <button
                      key={opt.value}
                      type="button"
                      onClick={() => setSelectedLength(opt.value)}
                      data-ocid={"configurator.length.toggle"}
                      className={`flex-1 flex flex-col items-center gap-0.5 py-3 px-2 rounded-lg border text-center transition-all duration-200 ${
                        isActive
                          ? "bg-red-600/15 border-red-600/60 text-white"
                          : "bg-white/3 border-white/8 text-white/50 hover:border-white/20 hover:text-white/70"
                      }`}
                    >
                      <span className="text-sm font-bold leading-tight">
                        {opt.label}
                      </span>
                      <span
                        className={`text-[11px] leading-tight ${isActive ? "text-red-400/80" : "text-white/30"}`}
                      >
                        {opt.mm}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* ── Finish ── */}
            <div className="bg-[#0e1d30] border border-white/8 rounded-xl p-5">
              <SectionLabel>Surface Finish</SectionLabel>
              <div className="grid grid-cols-2 gap-2">
                {finishOptions.map((opt) => {
                  const isActive = selectedFinish === opt.value;
                  return (
                    <button
                      key={opt.value}
                      type="button"
                      onClick={() => setSelectedFinish(opt.value)}
                      data-ocid={"configurator.finish.toggle"}
                      className={`flex items-center gap-3 p-3 rounded-lg border text-left transition-all duration-200 ${
                        isActive
                          ? "bg-red-600/15 border-red-600/60"
                          : "bg-white/3 border-white/8 hover:border-white/20"
                      }`}
                    >
                      <span
                        className={`w-8 h-8 rounded-full flex-shrink-0 border-2 shadow-sm transition-all ${
                          isActive
                            ? "border-red-500 shadow-red-500/30"
                            : "border-white/15"
                        }`}
                        style={{ backgroundColor: opt.swatch }}
                      />
                      <div className="min-w-0">
                        <p
                          className={`text-[13px] font-semibold leading-tight ${isActive ? "text-white" : "text-white/60"}`}
                        >
                          {opt.label}
                        </p>
                        <p className="text-[11px] text-white/30 mt-0.5 leading-tight truncate">
                          {opt.description}
                        </p>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* ── Spec Summary Card ── */}
            <div className="bg-[#0e1d30] border border-white/8 rounded-xl p-5">
              <SectionLabel>Specification Summary</SectionLabel>
              <dl className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3">
                {[
                  { label: "Material", value: spec.material },
                  { label: "Thread Type", value: spec.threadType },
                  { label: "Size Range", value: spec.sizes },
                  { label: "Min. Order Qty", value: spec.moq },
                ].map(({ label, value }) => (
                  <div key={label}>
                    <dt className="text-[11px] text-white/35 font-medium uppercase tracking-wider mb-0.5">
                      {label}
                    </dt>
                    <dd className="text-sm text-white/80 leading-snug">
                      {value}
                    </dd>
                  </div>
                ))}
              </dl>

              {/* Current config row */}
              <div className="mt-4 pt-4 border-t border-white/8 flex flex-wrap gap-2">
                <span className="text-[11px] text-white/30 uppercase tracking-wider self-center">
                  Config:
                </span>
                {[
                  currentType?.label,
                  selectedSize,
                  `${currentLength?.label} (${currentLength?.mm})`,
                  currentFinish?.label,
                ].map((val) => (
                  <span
                    key={val}
                    className="bg-red-600/10 border border-red-600/25 text-red-400 text-[11px] font-medium rounded-full px-2.5 py-0.5"
                  >
                    {val}
                  </span>
                ))}
              </div>
            </div>

            {/* ── CTA Buttons ── */}
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                to="/contact"
                className="flex-1 flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white font-bold py-3.5 px-6 rounded-lg transition-all duration-200 shadow-lg shadow-red-600/25 hover:shadow-red-600/40 text-sm"
                data-ocid="configurator.enquire.primary_button"
              >
                <Package size={16} />
                Enquire Now
              </Link>
              <Link
                to="/products/$slug"
                params={{
                  slug:
                    typeOptions.find((t) => t.value === selectedType)?.slug ??
                    "allen-cap-screws",
                }}
                className="flex-1 flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 border border-white/12 hover:border-white/25 text-white/70 hover:text-white font-medium py-3.5 px-6 rounded-lg transition-all duration-200 text-sm"
                data-ocid="configurator.product_detail.secondary_button"
              >
                View Product Details
                <ChevronRight size={15} />
              </Link>
            </div>

            {/* ── Trust line ── */}
            <p className="text-white/25 text-xs text-center">
              All products manufactured to ISO 9001:2015 standards •&nbsp;
              Mumbai, India since 1976
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
