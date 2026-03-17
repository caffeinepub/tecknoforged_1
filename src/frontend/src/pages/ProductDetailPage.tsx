import { Link, useParams } from "@tanstack/react-router";
import { ArrowLeft, BadgeCheck, ChevronRight, Package } from "lucide-react";
import { useEffect } from "react";
import { getProductBySlug } from "../data/products";
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

export default function ProductDetailPage() {
  const { slug } = useParams({ from: "/products/$slug" });
  const product = getProductBySlug(slug);

  useEffect(() => {
    if (product) {
      document.title = `${product.name} | Tecknoforged`;
    }
  }, [product]);

  if (!product) {
    return (
      <main className="pt-16 min-h-screen bg-[#111111] flex items-center justify-center">
        <div className="text-center">
          <p className="text-[#666] mb-4">Product not found.</p>
          <Link
            to="/products"
            className="btn-primary"
            data-ocid="product_detail.link"
          >
            Back to Products
          </Link>
        </div>
      </main>
    );
  }

  const specRows = [
    { label: "Material", value: product.specifications.material },
    { label: "Grades", value: product.specifications.grades },
    { label: "Size Range", value: product.specifications.sizes },
    { label: "Thread Types", value: product.specifications.threadTypes },
    { label: "Coatings / Finish", value: product.specifications.coatings },
    { label: "Standards", value: product.specifications.standards },
  ];

  return (
    <main className="pt-16 min-h-screen bg-[#111111]">
      {/* Breadcrumb */}
      <div className="bg-[#0d0d0d] border-b border-[#1e1e1e] py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center gap-2">
          <Link
            to="/products"
            className="flex items-center gap-1.5 text-[11px] font-semibold tracking-[0.1em] uppercase text-[#666] hover:text-white transition-colors"
            data-ocid="product_detail.link"
          >
            <ArrowLeft className="w-3 h-3" />
            Products
          </Link>
          <ChevronRight className="w-3 h-3 text-[#444]" />
          <span className="text-[11px] font-semibold tracking-[0.1em] uppercase text-[#D32F2F]">
            {product.name}
          </span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Image */}
          <AnimSection>
            <div className="bg-[#1a1a1a] border border-[#2a2a2a] overflow-hidden">
              <img
                src={product.image}
                alt={product.name}
                className="w-full aspect-square object-cover"
              />
            </div>
          </AnimSection>

          {/* Details */}
          <AnimSection delay={120}>
            <span className="text-[9px] font-bold tracking-[0.18em] uppercase text-[#D32F2F] mb-2 block">
              {product.category}
            </span>
            <h1 className="text-2xl sm:text-3xl font-black text-white tracking-tight mb-2">
              {product.name}
            </h1>
            <p className="text-sm text-[#888] mb-6">{product.shortSpec}</p>

            {product.description.map((para) => (
              <p
                key={para.slice(0, 40)}
                className="text-sm text-[#999] leading-relaxed mb-3"
              >
                {para}
              </p>
            ))}

            {/* Spec Table */}
            <div className="mt-8 border border-[#2a2a2a]">
              <div className="bg-[#1a1a1a] px-4 py-2.5 border-b border-[#2a2a2a]">
                <span className="text-[10px] font-bold tracking-[0.15em] uppercase text-[#D32F2F]">
                  Specifications
                </span>
              </div>
              {specRows.map((row, i) => (
                <div
                  key={row.label}
                  className={`grid grid-cols-5 gap-4 px-4 py-3 ${
                    i % 2 === 0 ? "bg-[#111]" : "bg-[#141414]"
                  }`}
                >
                  <span className="col-span-2 text-[10px] font-bold tracking-[0.1em] uppercase text-[#666]">
                    {row.label}
                  </span>
                  <span className="col-span-3 text-xs text-[#ccc] leading-relaxed">
                    {row.value}
                  </span>
                </div>
              ))}
            </div>

            {/* MOQ */}
            <div className="mt-4 flex items-start gap-3 bg-[#1a1a1a] border border-[#2a2a2a] p-4">
              <Package className="w-4 h-4 text-[#D32F2F] shrink-0 mt-0.5" />
              <p className="text-xs text-[#777] leading-relaxed">
                {product.moq}
              </p>
            </div>

            <div className="mt-6">
              <Link
                to="/contact"
                className="btn-primary w-full justify-center"
                data-ocid="product_detail.primary_button"
              >
                Request Quote for {product.name}
                <ChevronRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </AnimSection>
        </div>

        {/* Applications */}
        <AnimSection delay={200} className="mt-12">
          <div className="bg-[#1a1a1a] border border-[#2a2a2a] p-8">
            <h2 className="text-base font-bold text-white tracking-tight mb-5 flex items-center gap-2">
              <BadgeCheck className="w-4 h-4 text-[#D32F2F]" />
              Applications
            </h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {product.applications.map((app) => (
                <li key={app} className="flex items-start gap-2">
                  <ChevronRight className="w-3 h-3 text-[#D32F2F] mt-0.5 shrink-0" />
                  <span className="text-sm text-[#888]">{app}</span>
                </li>
              ))}
            </ul>
          </div>
        </AnimSection>
      </div>
    </main>
  );
}
