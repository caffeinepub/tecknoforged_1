import { Link } from "@tanstack/react-router";
import { Factory, FlaskConical, Quote, Shield, Wrench } from "lucide-react";
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

const timeline = [
  {
    year: "1976",
    title: "Foundation",
    desc: "Founded as Standard Screw Manufacturing Co. in Mumbai, India. Starting with a small facility and a clear vision for precision fastener manufacturing.",
  },
  {
    year: "1985",
    title: "First OEM Contracts",
    desc: "Expanded production capacity with new cold forging machinery. Secured first OEM supply contracts with major Indian industrial manufacturers.",
  },
  {
    year: "1995",
    title: "ISO Certification",
    desc: "Achieved ISO 9001 certification — a landmark in formalizing quality management systems and ensuring consistent, traceable manufacturing processes.",
  },
  {
    year: "2005",
    title: "Global Exports Begin",
    desc: "Commenced export operations, establishing international supply partnerships across the Middle East, Southeast Asia, and African markets.",
  },
  {
    year: "2015",
    title: "Rebranded Tecknoforged",
    desc: "Rebranded as Tecknoforged to reflect modern capabilities and expanded product range. Modernized manufacturing infrastructure with new precision equipment.",
  },
  {
    year: "2024",
    title: "Industry Leader",
    desc: "500+ product variants across 10 categories. 50+ active OEM clients. Exporting to 20+ countries with full ISO-compliant documentation.",
  },
];

const infrastructure = [
  {
    icon: Factory,
    title: "State-of-the-Art Facility",
    desc: "Modern manufacturing facility in Mumbai equipped with precision cold forging machines, thread rolling equipment, and automated heat treatment furnaces.",
    img: "https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?w=600&q=80",
  },
  {
    icon: Wrench,
    title: "Cold Forging & Thread Rolling",
    desc: "Advanced multi-station cold forging presses and precision thread rolling equipment producing fasteners to tight dimensional tolerances across all product ranges.",
    img: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=600&q=80",
  },
  {
    icon: FlaskConical,
    title: "In-House Testing Laboratory",
    desc: "Fully equipped testing lab with UTM (Universal Testing Machine), CMM, hardness testers, and salt spray chamber for comprehensive material and mechanical testing.",
    img: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=600&q=80",
  },
  {
    icon: Shield,
    title: "Quality Control at Every Stage",
    desc: "100% go/no-go gauge inspection at critical dimensions, batch sampling for mechanical testing, and complete traceability from raw material to dispatch.",
    img: "https://images.unsplash.com/photo-1599508704512-2f19efd1e35f?w=600&q=80",
  },
];

export default function AboutPage() {
  useEffect(() => {
    document.title =
      "About Tecknoforged | Industrial Fastener Manufacturer Since 1976 | Mumbai";
  }, []);

  return (
    <main className="pt-16">
      {/* Hero */}
      <section className="relative bg-navy py-24 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?w=1600&q=80)",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A1628] via-[#0A1628]/95 to-transparent" />
        <div className="relative container-brand">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-label text-orange-400 mb-3">Our Story</p>
            <h1 className="heading-xl text-white mb-4 max-w-2xl">
              Engineering Legacy Since 1976
            </h1>
            <p className="text-blue-200/70 max-w-xl leading-relaxed text-lg font-light">
              From a small workshop in Mumbai to an internationally-recognized
              fastener manufacturer. Five decades of precision, reliability, and
              unwavering quality standards.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding bg-white">
        <div className="container-brand">
          <FadeIn>
            <div className="text-center mb-14">
              <p className="text-label text-orange-600 mb-2">Our Journey</p>
              <h2 className="heading-lg text-navy">
                Five Decades of Manufacturing Excellence
              </h2>
            </div>
          </FadeIn>

          <div className="relative">
            {/* Center line */}
            <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-border transform -translate-x-1/2" />

            <div className="flex flex-col gap-0">
              {timeline.map((item, i) => (
                <FadeIn key={item.year} delay={i * 0.1}>
                  <div
                    className={`relative flex flex-col lg:flex-row items-start lg:items-center gap-6 py-8 ${
                      i % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                    }`}
                  >
                    {/* Content */}
                    <div
                      className={`flex-1 ${i % 2 === 0 ? "lg:text-right lg:pr-10" : "lg:pl-10"}`}
                    >
                      <div
                        className={`bg-light-brand border border-border rounded p-6 hover:shadow-md transition-shadow ${
                          i % 2 === 0 ? "lg:ml-auto lg:mr-0" : ""
                        } max-w-md ${i % 2 === 0 ? "lg:ml-auto" : ""}`}
                      >
                        <div className="text-orange-600 font-bold text-3xl font-display mb-1">
                          {item.year}
                        </div>
                        <div className="text-navy font-bold text-lg mb-2">
                          {item.title}
                        </div>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                          {item.desc}
                        </p>
                      </div>
                    </div>

                    {/* Center dot */}
                    <div className="hidden lg:flex absolute left-1/2 transform -translate-x-1/2 w-5 h-5 bg-orange-500 rounded-full border-4 border-white shadow-md z-10" />

                    {/* Empty spacer */}
                    <div className="flex-1 hidden lg:block" />
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Founder Vision */}
      <section className="section-padding steel-texture">
        <div className="container-brand">
          <div className="max-w-3xl mx-auto text-center">
            <FadeIn>
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 bg-orange-500/20 rounded-full flex items-center justify-center">
                  <Quote size={28} className="text-orange-400" />
                </div>
              </div>
              <blockquote className="text-xl md:text-2xl text-white/90 font-light leading-relaxed italic mb-6">
                "Our commitment has always been simple: deliver precision that
                our clients can build upon. For over four decades, we have held
                ourselves to the highest manufacturing standards — because our
                customers' products depend on it."
              </blockquote>
              <div className="text-orange-400 font-semibold">
                Mr. Ranjit Singh
              </div>
              <div className="text-blue-300/60 text-sm">
                Proprietor, Tecknoforged
              </div>

              <div className="grid grid-cols-3 gap-6 mt-10 pt-8 border-t border-white/10">
                {["Precision", "Reliability", "Consistency"].map((val) => (
                  <div key={val} className="text-center">
                    <div className="text-white font-bold text-lg mb-1">
                      {val}
                    </div>
                    <div className="text-blue-300/50 text-xs uppercase tracking-widest">
                      Core Value
                    </div>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Infrastructure */}
      <section className="section-padding bg-light-brand">
        <div className="container-brand">
          <FadeIn>
            <div className="text-center mb-12">
              <p className="text-label text-orange-600 mb-2">Our Facility</p>
              <h2 className="heading-lg text-navy mb-3">
                Manufacturing Infrastructure
              </h2>
              <p className="text-muted-foreground max-w-xl mx-auto">
                Modern equipment and processes ensuring the highest quality at
                every stage
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {infrastructure.map((item, i) => (
              <FadeIn key={item.title} delay={i * 0.1}>
                <div className="card-industrial overflow-hidden flex flex-col sm:flex-row h-full">
                  <div className="sm:w-40 flex-shrink-0">
                    <img
                      src={item.img}
                      alt={item.title}
                      className="w-full h-32 sm:h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-5 flex flex-col gap-2">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 bg-orange-50 rounded flex items-center justify-center">
                        <item.icon size={16} className="text-orange-600" />
                      </div>
                      <h3 className="font-bold text-navy text-sm">
                        {item.title}
                      </h3>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy py-14">
        <div className="container-brand text-center">
          <FadeIn>
            <h2 className="heading-md text-white mb-4">
              Ready to Partner with a Trusted Fastener Manufacturer?
            </h2>
            <div className="flex flex-wrap justify-center gap-4 mt-6">
              <Link to="/contact" className="btn-orange">
                Request a Quote
              </Link>
              <Link to="/contact" className="btn-outline-white">
                Contact Our Team
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </main>
  );
}
