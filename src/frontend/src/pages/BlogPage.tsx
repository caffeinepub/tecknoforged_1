import { Calendar, ChevronRight, Tag } from "lucide-react";
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

const articles = [
  {
    title: "Grade 8.8 vs 10.9 Bolts: Which Should You Specify?",
    category: "Technical Guide",
    date: "January 15, 2024",
    readTime: "5 min read",
    excerpt:
      "Understanding bolt grades is critical for structural integrity. Grade 8.8 and 10.9 bolts differ significantly in tensile strength and application suitability. This guide covers the key differences every procurement engineer and OEM buyer needs to understand.",
    img: "https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=600&q=80",
    content: [
      "Grade 8.8 and 10.9 are the two most commonly specified high-strength bolt grades in industrial applications. The numbers are not arbitrary — they directly encode the mechanical properties.",
      "For Grade 8.8: minimum tensile strength 800 MPa, yield strength 640 MPa (80% of tensile). Proof load strength 580 MPa. For Grade 10.9: minimum tensile strength 1040 MPa, yield strength 940 MPa (90% of tensile). Proof load 830 MPa.",
      "Grade 8.8 is the workhorse specification — suitable for general engineering, automotive non-safety-critical assemblies, and machinery. Grade 10.9 is required where higher pre-load is needed for joint integrity under dynamic loading, or where size constraints demand higher strength in a smaller cross-section.",
      "Key consideration: Grade 10.9 fasteners have higher hydrogen embrittlement sensitivity. Zinc-plated Grade 10.9 requires baking within 4 hours of plating to remove hydrogen. This handling requirement can affect lead times and cost. For corrosive environments, hot-dip galvanized Grade 8.8 is often preferred over Grade 10.9 for this reason.",
      "Contact Tecknoforged's technical team for grade selection assistance specific to your application loading conditions, joint configuration, and service environment.",
    ],
  },
  {
    title: "Self Tapping vs Self Drilling Screws: Complete Technical Guide",
    category: "Product Guide",
    date: "February 3, 2024",
    readTime: "6 min read",
    excerpt:
      "Many engineers confuse self tapping and self drilling screws. While both eliminate the need for pre-drilling in some cases, their applications differ fundamentally. This guide clarifies the distinction and helps you specify the right fastener.",
    img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80",
    content: [
      "Self tapping screws cut or form their own thread into a pre-drilled pilot hole. They do not drill through the material — the pilot hole must be created first. Self drilling screws (Tek screws) have an integral drill point that both drills a pilot hole and taps a thread in a single operation, requiring no pre-drilling.",
      "Self tapping screws are specified for plastics, die-cast metals, and sheet metal where a pilot hole has already been formed. The thread form creates mating threads on installation. For plastics, thread-forming (rather than thread-cutting) self tappers minimize boss stress.",
      "Self drilling screws are specified for direct attachment to steel sections, purlins, and roofing/cladding. The Tek point number (1–5) indicates the maximum steel thickness the screw can penetrate without pre-drilling. Tek 1 handles up to 0.8mm steel; Tek 5 handles up to 13mm steel.",
      "Common specification errors: using self tapping screws without pilot holes (causes stripped threads or boss cracking in plastics), or using self drilling screws in material thicker than their rated penetration depth (causes drill point failure or wander).",
    ],
  },
  {
    title: "ISO Standards for Fasteners: What OEM Buyers Need to Know",
    category: "Industry Standards",
    date: "March 10, 2024",
    readTime: "7 min read",
    excerpt:
      "For OEM procurement teams, understanding which ISO standards govern fastener specifications can mean the difference between a reliable assembly and a costly recall. This guide maps the key standards to product types.",
    img: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=600&q=80",
    content: [
      "The fastener standards landscape can be confusing — ISO, DIN, ANSI, ASTM, and JIS all have overlapping and sometimes conflicting specifications. Understanding which standard is applicable to your purchase is essential for quality assurance.",
      "ISO 898-1 is the fundamental mechanical properties standard for carbon and alloy steel bolts, screws, and studs. It defines proof load, yield strength, ultimate tensile strength, and hardness for grades 3.6 through 12.9. Every structural fastener purchase should reference this standard.",
      "ISO 4759 defines dimensional tolerances for fasteners at product grades A, B, and C. Grade A is highest precision (used for M1.6 to M24 in strength grades ≥5.6), Grade B for lower precision, Grade C for rough tolerances. Specifying the product grade ensures you receive the correct dimensional precision.",
      "For stainless steel fasteners, ISO 3506 is the governing standard, defining austenitic (A1, A2, A4), martensitic, and ferritic property classes. Always specify ISO 3506 for stainless to ensure the correct alloy and mechanical properties.",
      "At Tecknoforged, every order confirmation specifies the applicable standards, and test certificates reference specific clause numbers within those standards for complete traceability and legal defensibility in case of audit.",
    ],
  },
  {
    title: "Choosing the Right Fastener Coating for Industrial Applications",
    category: "Technical Guide",
    date: "April 5, 2024",
    readTime: "5 min read",
    excerpt:
      "Fastener coatings do far more than improve appearance. Zinc plating, hot-dip galvanizing and black oxide each offer distinct advantages depending on environment, assembly requirements, and total cost of ownership.",
    img: "https://images.unsplash.com/photo-1599508704512-2f19efd1e35f?w=600&q=80",
    content: [
      "Fastener coating selection is driven by three primary factors: corrosion resistance requirement (measured in salt spray hours), dimensional considerations (coating thickness affecting thread clearance), and cost.",
      "Electroplated zinc (bright or yellow chromate) provides 96–200 hours salt spray resistance at 5–15 micron thickness. Low cost, widely available, but hydrogen embrittlement risk for Grade 10.9 and above requires post-plate baking. Suitable for indoor and mild outdoor applications.",
      "Hot-dip galvanizing provides 500+ hours salt spray resistance at 45–85 micron average coating. The thick coating means threads must be tapped oversize after galvanizing — nuts are supplied with similar coating. Higher cost, longer lead time, but excellent corrosion resistance for outdoor structural applications.",
      "Black oxide (magnetite finish) provides minimal corrosion resistance (24–48 hours salt spray) and is used primarily for appearance and mild oil film retention in indoor applications. No dimensional impact. Common for Allen cap screws in machinery applications.",
      "Geomet/Dacromet coatings (chrome-free zinc flake) provide 500–1,000 hours salt spray at 8–12 micron thickness — matching hot-dip performance at electroplate thickness. No hydrogen embrittlement. Increasingly specified for automotive Grade 10.9 fasteners replacing traditional zinc + phosphate.",
    ],
  },
];

export default function BlogPage() {
  useEffect(() => {
    document.title =
      "Fastener Industry Insights & Technical Guides | Tecknoforged Blog";
  }, []);

  return (
    <main className="pt-16">
      {/* Hero */}
      <section className="relative bg-navy py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0A1628] to-[#1E3A5F]" />
        <div className="relative container-brand">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-label text-orange-400 mb-3">Knowledge Base</p>
            <h1 className="heading-xl text-white mb-4">
              Technical Insights & Industry Guides
            </h1>
            <p className="text-blue-200/70 max-w-xl font-light text-lg leading-relaxed">
              Expert guides on fastener specification, standards compliance, and
              industrial manufacturing best practices from Tecknoforged's
              technical team.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Articles */}
      <section className="section-padding bg-light-brand">
        <div className="container-brand">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {articles.map((article, i) => (
              <FadeIn key={article.title} delay={i * 0.08}>
                <article className="group card-industrial overflow-hidden bg-white flex flex-col h-full">
                  <div className="relative overflow-hidden aspect-video bg-gray-100">
                    <img
                      src={article.img}
                      alt={article.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute top-3 left-3 flex gap-2">
                      <span className="bg-orange-500 text-white text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wider flex items-center gap-1">
                        <Tag size={9} />
                        {article.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <div className="flex items-center gap-3 text-xs text-muted-foreground mb-3">
                      <span className="flex items-center gap-1">
                        <Calendar size={11} />
                        {article.date}
                      </span>
                      <span>·</span>
                      <span>{article.readTime}</span>
                    </div>
                    <h2 className="font-bold text-navy text-xl leading-tight mb-3 group-hover:text-orange-600 transition-colors">
                      {article.title}
                    </h2>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-1">
                      {article.excerpt}
                    </p>
                    {/* Inline content preview */}
                    <div className="border-t border-border pt-4">
                      {article.content.slice(0, 2).map((para) => (
                        <p
                          key={para.slice(0, 40)}
                          className="text-xs text-muted-foreground leading-relaxed mb-2"
                        >
                          {para}
                        </p>
                      ))}
                      {article.content.length > 2 && (
                        <p className="text-xs text-orange-600 font-semibold flex items-center gap-1 mt-3">
                          Continue reading <ChevronRight size={12} />
                        </p>
                      )}
                    </div>
                  </div>
                </article>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter/CTA */}
      <section className="bg-navy py-12">
        <div className="container-brand text-center">
          <FadeIn>
            <p className="text-label text-orange-400 mb-3">
              Technical Resources
            </p>
            <h2 className="heading-md text-white mb-3">
              Need Technical Specification Assistance?
            </h2>
            <p className="text-blue-200/60 mb-6 text-sm max-w-lg mx-auto">
              Our engineering team provides specification support, grade
              selection guidance, and material recommendations for your specific
              application.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="tel:+919870090508" className="btn-orange">
                Call Technical Team
              </a>
              <a
                href="https://wa.me/919870090508"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline-white"
              >
                WhatsApp Enquiry
              </a>
            </div>
          </FadeIn>
        </div>
      </section>
    </main>
  );
}
