import { ChevronRight, Clock, Mail, MapPin, Phone } from "lucide-react";
import { useEffect } from "react";
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

export default function ContactPage() {
  useEffect(() => {
    document.title = "Contact | Tecknoforged Screw Mfg Co.";
  }, []);

  return (
    <main className="pt-16 min-h-screen bg-[#111111]">
      {/* Header */}
      <div className="bg-[#0d0d0d] border-b border-[#1e1e1e] py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="section-label">Contact Us</span>
          <h1 className="section-title text-white mb-3">Request a Quote</h1>
          <p className="text-sm text-[#666] max-w-xl">
            Submit your fastener requirements below. We respond within 24 hours
            with pricing, technical specs, and lead time.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-16">
          {/* Company Info */}
          <AnimSection className="space-y-6">
            <div>
              <h2 className="text-base font-bold text-white tracking-tight mb-4">
                Tecknoforged Screw Mfg Co.
              </h2>
              <div className="space-y-3">
                {[
                  {
                    icon: MapPin,
                    text: "MIDC Industrial Area, Mumbai, Maharashtra 400 093, India",
                  },
                  { icon: Phone, text: "+91 22 0000 0000" },
                  { icon: Mail, text: "info@tecknoforged.com" },
                  { icon: Clock, text: "Mon–Sat: 9:00 AM – 6:00 PM IST" },
                ].map(({ icon: Icon, text }) => (
                  <div key={text} className="flex items-start gap-3">
                    <Icon className="w-4 h-4 text-[#D32F2F] shrink-0 mt-0.5" />
                    <span className="text-sm text-[#888]">{text}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="border-t border-[#222] pt-6">
              <h3 className="text-[10px] font-bold tracking-[0.15em] uppercase text-[#D32F2F] mb-3">
                Export Inquiries
              </h3>
              <p className="text-xs text-[#666] leading-relaxed">
                We supply to customers across India, Southeast Asia, the Middle
                East, Europe, and North America. Material test certificates and
                customs documentation provided with all export shipments.
              </p>
            </div>

            <div className="border-t border-[#222] pt-6">
              <h3 className="text-[10px] font-bold tracking-[0.15em] uppercase text-[#D32F2F] mb-3">
                Standards We Manufacture To
              </h3>
              <div className="flex flex-wrap gap-2">
                {["ISO", "DIN", "JIS", "ASTM", "ANSI"].map((std) => (
                  <span
                    key={std}
                    className="px-2.5 py-1 bg-[#1a1a1a] border border-[#2a2a2a] text-[10px] font-bold text-[#888] tracking-wider"
                  >
                    {std}
                  </span>
                ))}
              </div>
            </div>
          </AnimSection>

          {/* Form */}
          <AnimSection delay={150} className="lg:col-span-2">
            <form
              className="space-y-5"
              onSubmit={(e) => e.preventDefault()}
              data-ocid="contact.panel"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label
                    htmlFor="cname"
                    className="block text-[10px] font-bold tracking-[0.15em] uppercase text-[#666] mb-2"
                  >
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Your full name"
                    className="w-full bg-[#1a1a1a] border border-[#333] text-white text-sm px-4 py-3 outline-none focus:border-[#D32F2F] transition-colors placeholder-[#444]"
                    data-ocid="contact.input"
                  />
                </div>
                <div>
                  <label
                    htmlFor="ccompany"
                    className="block text-[10px] font-bold tracking-[0.15em] uppercase text-[#666] mb-2"
                  >
                    Company *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Company or organisation"
                    className="w-full bg-[#1a1a1a] border border-[#333] text-white text-sm px-4 py-3 outline-none focus:border-[#D32F2F] transition-colors placeholder-[#444]"
                    data-ocid="contact.input"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label
                    htmlFor="cemail"
                    className="block text-[10px] font-bold tracking-[0.15em] uppercase text-[#666] mb-2"
                  >
                    Email *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="procurement@company.com"
                    className="w-full bg-[#1a1a1a] border border-[#333] text-white text-sm px-4 py-3 outline-none focus:border-[#D32F2F] transition-colors placeholder-[#444]"
                    data-ocid="contact.input"
                  />
                </div>
                <div>
                  <label
                    htmlFor="cphone"
                    className="block text-[10px] font-bold tracking-[0.15em] uppercase text-[#666] mb-2"
                  >
                    Phone
                  </label>
                  <input
                    type="tel"
                    placeholder="+91 00000 00000"
                    className="w-full bg-[#1a1a1a] border border-[#333] text-white text-sm px-4 py-3 outline-none focus:border-[#D32F2F] transition-colors placeholder-[#444]"
                    data-ocid="contact.input"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label
                    htmlFor="cproduct"
                    className="block text-[10px] font-bold tracking-[0.15em] uppercase text-[#666] mb-2"
                  >
                    Product Required
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Allen Cap Screws M8 Grade 10.9"
                    className="w-full bg-[#1a1a1a] border border-[#333] text-white text-sm px-4 py-3 outline-none focus:border-[#D32F2F] transition-colors placeholder-[#444]"
                    data-ocid="contact.input"
                  />
                </div>
                <div>
                  <label
                    htmlFor="cquantity"
                    className="block text-[10px] font-bold tracking-[0.15em] uppercase text-[#666] mb-2"
                  >
                    Quantity
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. 50,000 pieces / month"
                    className="w-full bg-[#1a1a1a] border border-[#333] text-white text-sm px-4 py-3 outline-none focus:border-[#D32F2F] transition-colors placeholder-[#444]"
                    data-ocid="contact.input"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="cmessage"
                  className="block text-[10px] font-bold tracking-[0.15em] uppercase text-[#666] mb-2"
                >
                  Message / Technical Requirements
                </label>
                <textarea
                  id="cmessage"
                  rows={5}
                  placeholder="Describe your requirement in detail — material grade, finish, drive type, tolerances, delivery location, frequency..."
                  className="w-full bg-[#1a1a1a] border border-[#333] text-white text-sm px-4 py-3 outline-none focus:border-[#D32F2F] transition-colors placeholder-[#444] resize-none"
                  data-ocid="contact.textarea"
                />
              </div>
              <button
                type="submit"
                className="btn-primary w-full justify-center text-xs"
                data-ocid="contact.submit_button"
              >
                Send Inquiry
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </form>
          </AnimSection>
        </div>
      </div>
    </main>
  );
}
