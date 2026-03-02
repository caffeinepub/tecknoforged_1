import { ChevronRight, Package } from "lucide-react";
import { motion, useInView } from "motion/react";
import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { products } from "../data/products";

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
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// Group products by category
const categories = Array.from(new Set(products.map((p) => p.category)));

const screwTypes = [
  {
    name: "Self Tapping Screws",
    image: "/assets/generated/screw-self-tapping.dim_600x600.jpg",
    desc: "Cut threads into sheet metal and plastic without pre-drilling",
  },
  {
    name: "Self Drilling Screws",
    image: "/assets/generated/screw-self-drilling.dim_600x600.jpg",
    desc: "Drill and tap in one operation for structural steel applications",
  },
  {
    name: "Allen Cap Screws",
    image: "/assets/generated/screw-allen-cap.dim_600x600.jpg",
    desc: "High-strength hex socket head for confined-space assembly",
  },
  {
    name: "Button Head Screws",
    image: "/assets/generated/screw-button-head.dim_600x600.jpg",
    desc: "Low-profile dome head for visible, aesthetic installations",
  },
  {
    name: "Hex Flange Bolts",
    image: "/assets/generated/screw-hex-flange.dim_600x600.jpg",
    desc: "Integral washer flange for superior clamping load distribution",
  },
  {
    name: "Rivets",
    image: "/assets/generated/screw-rivets.dim_600x600.jpg",
    desc: "Permanent one-side access fastening in aluminum and steel",
  },
  {
    name: "Washers",
    image: "/assets/generated/screw-washers.dim_600x600.jpg",
    desc: "Flat and spring washers for load distribution and vibration resistance",
  },
  {
    name: "Hi-Low Screws",
    image: "/assets/generated/screw-hi-low.dim_600x600.jpg",
    desc: "Dual-thread geometry for superior pull-out in plastics",
  },
];

export default function ProductsPage() {
  useEffect(() => {
    document.title =
      "Industrial Fasteners | Self Tapping Screws, Allen Cap Bolts | Tecknoforged Mumbai";
  }, []);

  return (
    <main className="pt-16">
      {/* Hero */}
      <section className="relative bg-navy py-20 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-15"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1600&q=80)",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A1628] to-[#1E3A5F]/80" />
        <div className="relative container-brand">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-label text-orange-400 mb-3">Product Catalogue</p>
            <h1 className="heading-xl text-white mb-4">Our Product Range</h1>
            <p className="text-blue-200/70 max-w-2xl leading-relaxed text-lg font-light">
              500+ precision fastener variants manufactured to DIN, ISO, and
              ANSI standards. Available in bulk for OEM and industrial supply.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats row */}
      <div className="steel-texture py-6">
        <div className="container-brand">
          <div className="flex flex-wrap justify-center gap-8 md:gap-16">
            {[
              ["10", "Product Categories"],
              ["500+", "Variants Available"],
              ["M3–M24", "Size Range"],
              ["4.6–12.9", "Grade Range"],
            ].map(([val, label]) => (
              <div key={label} className="text-center">
                <div className="text-2xl font-display font-extrabold text-white">
                  {val}
                </div>
                <div className="text-[10px] font-semibold tracking-widest uppercase text-blue-300/60">
                  {label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Screw Types Visual Guide */}
      <section className="section-padding bg-white">
        <div className="container-brand">
          <FadeIn>
            <div className="text-center mb-10">
              <p className="text-label text-orange-600 mb-2">
                Product Showcase
              </p>
              <h2 className="heading-lg text-navy mb-3">
                Types of Screws We Manufacture
              </h2>
              <p className="text-muted-foreground max-w-xl mx-auto">
                From self-tapping to precision hex socket — every fastener type
                engineered for industrial performance
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
            {screwTypes.map((item, i) => (
              <FadeIn key={item.name} delay={i * 0.06}>
                <div className="group card-industrial overflow-hidden flex flex-col bg-white hover:shadow-md transition-shadow duration-300">
                  <div className="aspect-square overflow-hidden bg-gray-50">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold text-navy text-sm mb-1.5 leading-tight">
                      {item.name}
                    </h3>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Products by category */}
      <section className="section-padding bg-light-brand">
        <div className="container-brand">
          {categories.map((category) => (
            <div key={category} className="mb-14 last:mb-0">
              <FadeIn>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-8 h-8 bg-orange-500 rounded flex items-center justify-center">
                    <Package size={16} className="text-white" />
                  </div>
                  <h2 className="heading-md text-navy">{category}</h2>
                  <div className="flex-1 h-px bg-border ml-2" />
                </div>
              </FadeIn>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {products
                  .filter((p) => p.category === category)
                  .map((product, i) => (
                    <FadeIn key={product.slug} delay={i * 0.07}>
                      <Link
                        to={`/products/${product.slug}`}
                        className="group card-industrial overflow-hidden flex flex-col bg-white"
                      >
                        <div className="relative overflow-hidden aspect-video bg-gray-100">
                          <img
                            src={product.image}
                            alt={product.name}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                            loading="lazy"
                          />
                          <div className="absolute top-3 left-3">
                            <span className="bg-orange-500 text-white text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-widest">
                              {product.category}
                            </span>
                          </div>
                        </div>
                        <div className="p-5 flex-1 flex flex-col">
                          <h3 className="font-bold text-navy text-base mb-1.5 group-hover:text-orange-600 transition-colors">
                            {product.name}
                          </h3>
                          <p className="text-sm text-muted-foreground mb-3">
                            {product.shortSpec}
                          </p>
                          <div className="mt-auto flex items-center justify-between">
                            <div className="text-xs text-muted-foreground">
                              {product.specifications.standards.split(",")[0]}
                            </div>
                            <span className="text-sm font-semibold text-orange-600 flex items-center gap-0.5 group-hover:gap-1.5 transition-all">
                              View Details <ChevronRight size={14} />
                            </span>
                          </div>
                        </div>
                      </Link>
                    </FadeIn>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy py-12">
        <div className="container-brand text-center">
          <p className="text-white font-semibold text-lg mb-2">
            Can't find what you need?
          </p>
          <p className="text-blue-200/60 mb-6 text-sm">
            We manufacture custom fasteners to your exact specifications
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/contact" className="btn-orange">
              Contact Technical Team
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
