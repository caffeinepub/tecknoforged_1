import { Link, Navigate, useParams } from "@tanstack/react-router";
import { ArrowLeft, Box, CheckCircle, Rotate3D } from "lucide-react";
import { motion } from "motion/react";
import { useEffect } from "react";
import ScrewPreview3D from "../components/ScrewPreview3D";
import { getProductBySlug } from "../data/products";
import { has3DPreview, slugToScrewType } from "../lib/screwGeometry";

export default function ProductDetailPage() {
  const { slug } = useParams({ strict: false });
  const product = slug ? getProductBySlug(slug as string) : undefined;

  useEffect(() => {
    if (product) {
      document.title = `${product.name} | Industrial Fasteners | Tecknoforged Mumbai`;
    }
    window.scrollTo(0, 0);
  }, [product]);

  if (!product) {
    return <Navigate to="/products" />;
  }

  const productSlug = slug as string;
  const showPreview = has3DPreview(productSlug);
  const screwType = showPreview ? slugToScrewType[productSlug] : null;

  return (
    <main className="pt-16">
      {/* Product Hero */}
      <section className="relative bg-navy py-16 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: `url(${product.image})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A1628] to-[#0A1628]/80" />
        <div className="relative container-brand">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link
              to="/products"
              className="inline-flex items-center gap-1.5 text-blue-300/70 hover:text-white text-sm mb-6 transition-colors"
              data-ocid="product_detail.back.link"
            >
              <ArrowLeft size={14} />
              Back to Products
            </Link>
            <div className="flex flex-wrap items-start gap-4 mb-4">
              <span className="bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded uppercase tracking-widest">
                Industrial Fasteners
              </span>
              <span className="bg-white/10 text-white/70 text-xs font-medium px-3 py-1 rounded uppercase tracking-widest">
                {product.category}
              </span>
              {showPreview && (
                <span className="bg-red-600/20 text-red-400 border border-red-600/40 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest flex items-center gap-1.5">
                  <Box size={11} />
                  3D Interactive Preview
                </span>
              )}
            </div>
            <h1 className="heading-xl text-white mb-4">{product.name}</h1>
            <p className="text-blue-200/70 mb-6 text-lg font-light">
              {product.shortSpec}
            </p>
          </motion.div>
        </div>
      </section>

      <div className="container-brand py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Main content */}
          <div className="lg:col-span-2 flex flex-col gap-10">
            {/* Product image or 3D viewer */}
            {showPreview && screwType ? (
              <div data-ocid="product_detail.canvas_target">
                {/* 3D Viewer */}
                <div
                  className="rounded-xl overflow-hidden border border-[#1a2e4a] bg-[#0d1b2e]"
                  style={{ height: "420px" }}
                >
                  <ScrewPreview3D
                    screwType={screwType}
                    finish="stainless"
                    interactive={true}
                    className="w-full h-full"
                  />
                </div>

                {/* Label + Configure CTA */}
                <div className="mt-3 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <p className="text-sm text-muted-foreground flex items-center gap-1.5">
                    <Rotate3D
                      size={14}
                      className="text-red-500 flex-shrink-0"
                    />
                    Interactive 3D Preview — Drag to rotate
                  </p>
                  <Link
                    to="/configurator"
                    search={{ type: screwType }}
                    className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white text-sm font-bold px-4 py-2 rounded-lg transition-all duration-200 shadow-sm shadow-red-600/30 flex-shrink-0"
                    data-ocid="product_detail.configurator.primary_button"
                  >
                    <Box size={14} />
                    Configure in 3D
                  </Link>
                </div>
              </div>
            ) : (
              <div className="rounded overflow-hidden border border-border aspect-video bg-gray-100">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
            )}

            {/* Description */}
            <section>
              <h2 className="heading-md text-navy mb-4">Product Overview</h2>
              <div className="flex flex-col gap-4">
                {product.description.map((para) => (
                  <p
                    key={para.slice(0, 40)}
                    className="text-muted-foreground leading-relaxed"
                  >
                    {para}
                  </p>
                ))}
              </div>
            </section>

            {/* Specifications */}
            <section>
              <h2 className="heading-md text-navy mb-4">Specifications</h2>
              <div className="border border-border rounded overflow-hidden">
                <table className="w-full text-sm">
                  <tbody>
                    {[
                      ["Material", product.specifications.material],
                      ["Grade / Strength Class", product.specifications.grades],
                      ["Sizes Available", product.specifications.sizes],
                      ["Thread Types", product.specifications.threadTypes],
                      ["Surface Coatings", product.specifications.coatings],
                      [
                        "Standards Compliance",
                        product.specifications.standards,
                      ],
                    ].map(([key, value], i) => (
                      <tr
                        key={key}
                        className={i % 2 === 0 ? "bg-light-brand" : "bg-white"}
                      >
                        <td className="px-5 py-3 font-semibold text-navy w-44 border-r border-border">
                          {key}
                        </td>
                        <td className="px-5 py-3 text-muted-foreground">
                          {value}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            {/* Applications */}
            <section>
              <h2 className="heading-md text-navy mb-4">Applications</h2>
              <ul className="flex flex-col gap-3">
                {product.applications.map((app) => (
                  <li
                    key={app}
                    className="flex items-start gap-3 text-muted-foreground"
                  >
                    <CheckCircle
                      size={16}
                      className="text-orange-500 flex-shrink-0 mt-0.5"
                    />
                    {app}
                  </li>
                ))}
              </ul>
            </section>

            {/* Manufacturing */}
            <section className="bg-light-brand border border-border rounded p-6">
              <h2 className="heading-md text-navy mb-3">
                Bulk Manufacturing Capability
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                {product.moq}
              </p>
            </section>
          </div>

          {/* Sidebar — Contact */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 flex flex-col gap-4">
              {/* Configure in 3D CTA (sidebar) */}
              {showPreview && screwType && (
                <Link
                  to="/configurator"
                  search={{ type: screwType }}
                  className="flex items-center justify-center gap-2 bg-[#0d1b2e] hover:bg-[#112237] border border-[#1a3050] hover:border-red-600/40 text-white text-sm font-semibold px-4 py-3 rounded-lg transition-all duration-200 group"
                  data-ocid="product_detail.sidebar.configurator.primary_button"
                >
                  <Box
                    size={15}
                    className="text-red-500 group-hover:scale-110 transition-transform"
                  />
                  Open in 3D Configurator
                </Link>
              )}

              {/* Contact card */}
              <div className="border border-border rounded p-5 bg-light-brand">
                <p className="text-xs font-semibold text-navy mb-2">
                  Prefer to Talk?
                </p>
                <a
                  href="tel:+919870090508"
                  className="text-orange-600 font-bold text-base hover:text-orange-700 transition-colors block mb-1"
                >
                  +91 9870090508
                </a>
                <a
                  href="https://wa.me/919870090508"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-600 text-sm hover:text-green-700 transition-colors"
                >
                  Chat on WhatsApp →
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
