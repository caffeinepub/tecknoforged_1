import { Link } from "@tanstack/react-router";
import { ChevronRight, Search } from "lucide-react";
import { useEffect, useState } from "react";
import { products } from "../data/products";
import { useInView } from "../hooks/useInView";

const categories = [
  "All",
  ...Array.from(new Set(products.map((p) => p.category))),
];

function ProductCard({
  product,
  index,
}: { product: (typeof products)[0]; index: number }) {
  const { ref, inView } = useInView();
  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className={`fade-in-up ${inView ? "in-view" : ""}`}
      style={{ transitionDelay: `${(index % 4) * 80}ms` }}
    >
      <Link
        to="/products/$slug"
        params={{ slug: product.slug }}
        className="group block bg-[#1a1a1a] border border-[#2a2a2a] card-hover h-full"
        data-ocid={`products.item.${index + 1}`}
      >
        <div className="aspect-square overflow-hidden bg-[#222]">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
          />
        </div>
        <div className="p-5">
          <span className="text-[9px] font-bold tracking-[0.18em] uppercase text-[#D32F2F] mb-2 block">
            {product.category}
          </span>
          <h3 className="text-sm font-bold text-white tracking-tight mb-1.5">
            {product.name}
          </h3>
          <p className="text-xs text-[#777] mb-4">{product.shortSpec}</p>
          <span className="inline-flex items-center gap-1 text-[11px] font-semibold tracking-[0.1em] uppercase text-[#D32F2F] group-hover:gap-2 transition-all">
            View Details
            <ChevronRight className="w-3 h-3" />
          </span>
        </div>
      </Link>
    </div>
  );
}

export default function ProductsPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [query, setQuery] = useState("");

  const filtered = products.filter((p) => {
    const matchCat = activeCategory === "All" || p.category === activeCategory;
    const matchQ =
      query === "" ||
      p.name.toLowerCase().includes(query.toLowerCase()) ||
      p.shortSpec.toLowerCase().includes(query.toLowerCase());
    return matchCat && matchQ;
  });

  useEffect(() => {
    document.title = "Products | Tecknoforged Screw Mfg Co.";
  }, []);

  return (
    <main className="pt-16 min-h-screen bg-[#111111]">
      {/* Header */}
      <div className="bg-[#0d0d0d] border-b border-[#1e1e1e] py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="section-label">Product Catalog</span>
          <h1 className="section-title text-white mb-3">
            Industrial Fasteners
          </h1>
          <p className="text-sm text-[#666] max-w-xl">
            Precision-manufactured screws, bolts, nuts, and fasteners to DIN,
            ISO, and JIS standards. Supplied to OEMs and industries worldwide
            from Mumbai.
          </p>
        </div>
      </div>

      {/* Filters */}
      <div className="sticky top-16 z-30 bg-[#111111] border-b border-[#1e1e1e]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex flex-col sm:flex-row gap-3 items-start sm:items-center justify-between">
          {/* Category tabs */}
          <div className="flex flex-wrap gap-1" role="tablist">
            {categories.map((cat) => (
              <button
                type="button"
                key={cat}
                role="tab"
                aria-selected={activeCategory === cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3.5 py-1.5 text-[10px] font-bold tracking-[0.12em] uppercase transition-colors ${
                  activeCategory === cat
                    ? "bg-[#D32F2F] text-white"
                    : "bg-[#1a1a1a] text-[#666] hover:text-white border border-[#2a2a2a]"
                }`}
                data-ocid="products.tab"
              >
                {cat}
              </button>
            ))}
          </div>
          {/* Search */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-[#555]" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search products..."
              className="bg-[#1a1a1a] border border-[#2a2a2a] text-white text-xs pl-9 pr-4 py-2 outline-none focus:border-[#D32F2F] placeholder-[#444] w-44"
              data-ocid="products.search_input"
            />
          </div>
        </div>
      </div>

      {/* Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {filtered.length === 0 ? (
          <div
            className="text-center py-20 text-[#444]"
            data-ocid="products.empty_state"
          >
            <p className="text-sm">No products match your search.</p>
          </div>
        ) : (
          <div
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
            data-ocid="products.list"
          >
            {filtered.map((product, i) => (
              <ProductCard key={product.slug} product={product} index={i} />
            ))}
          </div>
        )}
      </div>

      {/* CTA Banner */}
      <div className="bg-[#D32F2F] py-12 mt-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-lg font-black text-white tracking-tight">
              Need a Custom Fastener?
            </h3>
            <p className="text-sm text-red-100 mt-1">
              We manufacture to your drawing. Custom thread forms, special
              finishes, and OEM programs.
            </p>
          </div>
          <Link
            to="/contact"
            className="bg-white text-[#D32F2F] font-bold text-[11px] tracking-[0.1em] uppercase px-6 py-3 hover:bg-red-50 transition-colors whitespace-nowrap"
            data-ocid="products.primary_button"
          >
            Request Quote
          </Link>
        </div>
      </div>
    </main>
  );
}
