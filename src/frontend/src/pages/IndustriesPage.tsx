import { Link } from "@tanstack/react-router";
import { Car, ChevronRight, Cpu, Settings, Zap } from "lucide-react";
import { motion, useInView } from "motion/react";
import { useEffect, useRef } from "react";
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

const industries = [
  {
    icon: Car,
    name: "Automobile Industry",
    img: "https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?w=800&q=80",
    description: [
      "The automotive sector demands the highest standards of fastener quality and consistency. Engine vibration, thermal cycling, corrosive environments, and safety-critical assemblies create an unforgiving operating environment where fastener failure is not an option.",
      "Tecknoforged has been supplying OEM-grade fasteners to leading automobile manufacturers for over three decades. Our fasteners are tensile-tested and dimensionally verified to meet the stringent requirements of automotive assembly lines, from body-in-white through powertrain and suspension systems.",
    ],
    useCases: [
      "Chassis and body-in-white structural connections",
      "Engine and transmission assembly fasteners",
      "Suspension, steering, and braking system components",
      "Interior trim and dashboard panel assembly",
      "Battery tray and EV drivetrain components",
    ],
    recommendedProducts: [
      "allen-cap-screws",
      "hex-flange-bolts",
      "flange-head-screws",
      "self-tapping-screws",
    ],
  },
  {
    icon: Zap,
    name: "Electrical Industry",
    img: "https://images.unsplash.com/photo-1599508704512-2f19efd1e35f?w=800&q=80",
    description: [
      "Electrical panels, switchgear, distribution boards, and control systems require fasteners with precise dimensional accuracy, reliable electrical insulation where needed, and surface treatments that resist corrosion in industrial environments.",
      "Our fasteners are specified by leading electrical equipment manufacturers across India for applications ranging from high-voltage switchgear cabinets to low-voltage distribution panels. Consistent dimensional tolerances ensure fit and function across automated assembly processes.",
    ],
    useCases: [
      "High-voltage switchgear cabinet assembly",
      "MCB and MCCB panel board construction",
      "Transformer winding clamp and terminal connections",
      "Cable tray and cable management systems",
      "Control panel and DIN rail mounting hardware",
    ],
    recommendedProducts: [
      "allen-cap-screws",
      "self-tapping-screws",
      "bt-cut-screws",
      "washers",
    ],
  },
  {
    icon: Cpu,
    name: "Electronics Industry",
    img: "https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=800&q=80",
    description: [
      "Electronics assembly requires fasteners with exceptionally tight dimensional tolerances, consistent surface finish, and precise torque characteristics to avoid PCB stress or component damage during installation. Miniaturization trends demand reliable performance at smaller sizes.",
      "Tecknoforged produces fasteners specifically optimized for electronics assembly, with surface consistency and dimensional uniformity validated to ensure consistent installation torque in automated assembly environments.",
    ],
    useCases: [
      "PCB mounting and heat sink attachment screws",
      "Consumer electronics housing assembly",
      "Industrial control unit and HMI enclosures",
      "LED driver and power supply casings",
      "Server and networking equipment rack mounting",
    ],
    recommendedProducts: [
      "button-head-screws",
      "hi-low-screws",
      "bt-cut-screws",
      "self-tapping-screws",
    ],
  },
  {
    icon: Settings,
    name: "General Engineering",
    img: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=800&q=80",
    description: [
      "General engineering covers an enormous range of applications: industrial machinery, material handling equipment, construction, agricultural implements, fluid handling systems, and more. Each application brings specific requirements for grade, size, coating, and standards compliance.",
      "With over 500 product variants across 10 categories, Tecknoforged provides a comprehensive solution for procurement teams managing diverse fastener requirements. Our technical team assists with specification, grade selection, and coating recommendations for specific service environments.",
    ],
    useCases: [
      "Industrial machinery frames, guards, and covers",
      "Agricultural equipment and implement attachment",
      "Material handling and conveying systems",
      "Fluid power and hydraulic manifold connections",
      "Steel structure and modular construction systems",
    ],
    recommendedProducts: [
      "hex-flange-bolts",
      "allen-cap-screws",
      "rivets",
      "washers",
    ],
  },
];

export default function IndustriesPage() {
  useEffect(() => {
    document.title =
      "Industries We Serve | Tecknoforged Industrial Fastener Manufacturer";
  }, []);

  return (
    <main className="pt-16">
      {/* Hero */}
      <section className="relative bg-navy py-20 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-15"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?w=1600&q=80)",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#0A1628] to-[#1E3A5F]/60" />
        <div className="relative container-brand">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-label text-orange-400 mb-3">
              Industry Expertise
            </p>
            <h1 className="heading-xl text-white mb-4">Industries We Serve</h1>
            <p className="text-blue-200/70 max-w-2xl font-light text-lg leading-relaxed">
              Delivering precision fasteners to the most demanding industrial
              sectors since 1976.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Industry sections */}
      {industries.map((ind, i) => (
        <section
          key={ind.name}
          className={`section-padding ${i % 2 === 0 ? "bg-white" : "bg-light-brand"}`}
        >
          <div className="container-brand">
            <div
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${i % 2 !== 0 ? "lg:flex-row-reverse" : ""}`}
            >
              {/* Image */}
              <FadeIn delay={0} className={i % 2 !== 0 ? "lg:order-2" : ""}>
                <div className="relative rounded overflow-hidden shadow-lg">
                  <img
                    src={ind.img}
                    alt={ind.name}
                    className="w-full aspect-video object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                  <div className="absolute bottom-4 left-4 flex items-center gap-2">
                    <div className="w-10 h-10 bg-orange-500 rounded flex items-center justify-center">
                      <ind.icon size={18} className="text-white" />
                    </div>
                    <span className="text-white font-bold text-sm">
                      {ind.name}
                    </span>
                  </div>
                </div>
              </FadeIn>

              {/* Content */}
              <FadeIn delay={0.1} className={i % 2 !== 0 ? "lg:order-1" : ""}>
                <div className="w-10 h-10 bg-orange-50 rounded flex items-center justify-center mb-4">
                  <ind.icon size={20} className="text-orange-600" />
                </div>
                <h2 className="heading-lg text-navy mb-4">{ind.name}</h2>
                {ind.description.map((para) => (
                  <p
                    key={para.slice(0, 40)}
                    className="text-muted-foreground leading-relaxed mb-4 text-sm"
                  >
                    {para}
                  </p>
                ))}

                <h3 className="font-bold text-navy text-sm mb-3 uppercase tracking-wider">
                  Key Use Cases
                </h3>
                <ul className="flex flex-col gap-2 mb-5">
                  {ind.useCases.map((uc) => (
                    <li
                      key={uc}
                      className="flex items-start gap-2.5 text-sm text-muted-foreground"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-orange-500 flex-shrink-0 mt-1.5" />
                      {uc}
                    </li>
                  ))}
                </ul>

                <h3 className="font-bold text-navy text-sm mb-3 uppercase tracking-wider">
                  Recommended Products
                </h3>
                <div className="flex flex-wrap gap-2 mb-5">
                  {ind.recommendedProducts.map((slug) => {
                    const p = products.find((pr) => pr.slug === slug);
                    if (!p) return null;
                    return (
                      <Link
                        key={slug}
                        to="/products/$slug"
                        params={{ slug }}
                        className="text-xs font-semibold bg-orange-50 border border-orange-200 text-orange-700 px-3 py-1.5 rounded hover:bg-orange-500 hover:text-white hover:border-orange-500 transition-colors"
                      >
                        {p.name}
                      </Link>
                    );
                  })}
                </div>

                <Link
                  to="/contact"
                  className="btn-orange text-sm px-5 py-2.5 inline-flex"
                >
                  Request Quote for {ind.name}
                  <ChevronRight size={15} />
                </Link>
              </FadeIn>
            </div>
          </div>
        </section>
      ))}

      {/* CTA */}
      <section className="bg-navy py-12">
        <div className="container-brand text-center">
          <FadeIn>
            <h2 className="heading-md text-white mb-4">
              Serving Your Industry with Precision Fasteners
            </h2>
            <div className="flex flex-wrap justify-center gap-4 mt-6">
              <Link to="/contact" className="btn-orange">
                Submit RFQ
              </Link>
              <Link to="/products" className="btn-outline-white">
                Browse All Products
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </main>
  );
}
