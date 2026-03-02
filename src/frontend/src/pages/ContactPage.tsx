import {
  CheckCircle,
  Clock,
  Loader2,
  Mail,
  MapPin,
  MessageSquare,
  Phone,
} from "lucide-react";
import { motion } from "motion/react";
import { useEffect, useState } from "react";
import { useBackend } from "../hooks/useBackend";

export default function ContactPage() {
  const { actor } = useBackend();
  const [form, setForm] = useState({ name: "", phone: "", message: "" });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    document.title =
      "Contact Tecknoforged | Mumbai Fastener Manufacturer | +91 9870090508";
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.phone || !form.message) return;
    setSubmitting(true);
    setError("");
    try {
      if (!actor) throw new Error("Not connected");
      await actor.submitContactMessage(form.name, form.phone, form.message);
      setSubmitted(true);
      setForm({ name: "", phone: "", message: "" });
    } catch {
      setError(
        "Failed to send message. Please call us directly at +91 9870090508.",
      );
    } finally {
      setSubmitting(false);
    }
  };

  const contactDetails = [
    {
      icon: Phone,
      label: "Phone",
      value: "+91 9870090508",
      href: "tel:+919870090508",
      sublabel: "Mon–Sat, 9 AM–6 PM IST",
    },
    {
      icon: Mail,
      label: "Email",
      value: "info@tecknoforged.com",
      href: "mailto:info@tecknoforged.com",
      sublabel: "24-hour response time",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Mumbai, Maharashtra",
      href: undefined,
      sublabel: "India",
    },
    {
      icon: Clock,
      label: "Business Hours",
      value: "Mon–Sat: 9:00 AM – 6:00 PM",
      href: undefined,
      sublabel: "IST (UTC +5:30)",
    },
  ];

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
            <p className="text-label text-orange-400 mb-3">Get in Touch</p>
            <h1 className="heading-xl text-white mb-4">Contact Tecknoforged</h1>
            <p className="text-blue-200/70 max-w-xl font-light text-lg leading-relaxed">
              Mumbai-based industrial fastener manufacturer. Our team is
              available Mon–Sat for technical inquiries, quotations, and export
              requirements.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact cards */}
      <section className="py-10 bg-light-brand border-b border-border">
        <div className="container-brand">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {contactDetails.map((cd, i) => (
              <motion.div
                key={cd.label}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
              >
                {cd.href ? (
                  <a
                    href={cd.href}
                    className="flex flex-col gap-2 p-4 bg-white border border-border rounded hover:border-orange-300 hover:shadow-md transition-all group h-full"
                  >
                    <div className="w-9 h-9 bg-orange-50 rounded flex items-center justify-center">
                      <cd.icon size={16} className="text-orange-600" />
                    </div>
                    <div>
                      <div className="text-[10px] font-semibold text-muted-foreground uppercase tracking-wider">
                        {cd.label}
                      </div>
                      <div className="font-bold text-navy text-sm group-hover:text-orange-600 transition-colors">
                        {cd.value}
                      </div>
                      <div className="text-xs text-muted-foreground">
                        {cd.sublabel}
                      </div>
                    </div>
                  </a>
                ) : (
                  <div className="flex flex-col gap-2 p-4 bg-white border border-border rounded h-full">
                    <div className="w-9 h-9 bg-orange-50 rounded flex items-center justify-center">
                      <cd.icon size={16} className="text-orange-600" />
                    </div>
                    <div>
                      <div className="text-[10px] font-semibold text-muted-foreground uppercase tracking-wider">
                        {cd.label}
                      </div>
                      <div className="font-bold text-navy text-sm">
                        {cd.value}
                      </div>
                      <div className="text-xs text-muted-foreground">
                        {cd.sublabel}
                      </div>
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Main contact section */}
      <section className="section-padding bg-white">
        <div className="container-brand">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left — company info */}
            <div>
              <h2 className="heading-md text-navy mb-6">Tecknoforged</h2>
              <div className="bg-light-brand border border-border rounded p-6 mb-6">
                <div className="flex flex-col gap-4 text-sm">
                  <div>
                    <div className="text-[10px] font-semibold text-muted-foreground uppercase tracking-wider mb-1">
                      Legal Entity
                    </div>
                    <div className="font-semibold text-navy">
                      Standard Screw Manufacturing Co.
                    </div>
                  </div>
                  <div>
                    <div className="text-[10px] font-semibold text-muted-foreground uppercase tracking-wider mb-1">
                      Trading As
                    </div>
                    <div className="font-semibold text-navy">Tecknoforged</div>
                  </div>
                  <div>
                    <div className="text-[10px] font-semibold text-muted-foreground uppercase tracking-wider mb-1">
                      Contact Person
                    </div>
                    <div className="font-semibold text-navy">
                      Mr. Ranjit Singh
                    </div>
                    <div className="text-muted-foreground text-xs">
                      Proprietor
                    </div>
                  </div>
                  <div>
                    <div className="text-[10px] font-semibold text-muted-foreground uppercase tracking-wider mb-1">
                      Location
                    </div>
                    <div className="font-semibold text-navy">
                      Mumbai, Maharashtra, India
                    </div>
                  </div>
                  <div>
                    <div className="text-[10px] font-semibold text-muted-foreground uppercase tracking-wider mb-1">
                      Established
                    </div>
                    <div className="font-semibold text-navy">1976</div>
                  </div>
                </div>
              </div>

              {/* Action buttons */}
              <div className="flex flex-col gap-3">
                <a
                  href="tel:+919870090508"
                  className="flex items-center gap-3 bg-navy hover:bg-[#1E3A5F] text-white font-semibold px-5 py-3 rounded transition-colors"
                >
                  <Phone size={18} />
                  Call +91 9870090508
                </a>
                <a
                  href="https://wa.me/919870090508"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 bg-green-600 hover:bg-green-700 text-white font-semibold px-5 py-3 rounded transition-colors"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="white"
                    className="w-5 h-5"
                    aria-hidden="true"
                  >
                    <title>WhatsApp</title>
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  Chat on WhatsApp
                </a>
                <a
                  href="mailto:info@tecknoforged.com"
                  className="flex items-center gap-3 border-2 border-navy text-navy hover:bg-navy hover:text-white font-semibold px-5 py-3 rounded transition-colors"
                >
                  <Mail size={18} />
                  info@tecknoforged.com
                </a>
              </div>

              {/* Map placeholder */}
              <div className="mt-6 bg-[#0A1628] rounded overflow-hidden h-48 flex items-center justify-center relative">
                <div
                  className="absolute inset-0 opacity-20 bg-cover bg-center"
                  style={{
                    backgroundImage:
                      "url(https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?w=600&q=80)",
                  }}
                />
                <div className="relative text-center">
                  <MapPin size={32} className="text-orange-400 mx-auto mb-2" />
                  <div className="text-white font-bold">
                    Mumbai, Maharashtra, India
                  </div>
                  <div className="text-blue-200/60 text-sm">
                    Industrial Fastener Manufacturer
                  </div>
                </div>
              </div>
            </div>

            {/* Right — contact form */}
            <div>
              <h2 className="heading-md text-navy mb-2 flex items-center gap-2">
                <MessageSquare size={22} className="text-orange-500" />
                Send us a Message
              </h2>
              <p className="text-muted-foreground text-sm mb-6">
                For quotations, technical inquiries, and general questions. We
                respond within 24 business hours.
              </p>

              {submitted ? (
                <div className="bg-green-50 border-2 border-green-300 rounded p-8 text-center">
                  <CheckCircle
                    size={40}
                    className="text-green-600 mx-auto mb-3"
                  />
                  <h3 className="font-bold text-navy text-lg mb-2">
                    Message Sent!
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    Thank you for contacting Tecknoforged. We'll get back to you
                    within 24 business hours.
                  </p>
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="text-orange-600 font-semibold text-sm hover:text-orange-700"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  <div>
                    <label
                      className="block text-sm font-semibold text-navy mb-1.5"
                      htmlFor="c-name"
                    >
                      Your Name *
                    </label>
                    <input
                      id="c-name"
                      type="text"
                      required
                      placeholder="e.g. Ramesh Kumar"
                      value={form.name}
                      onChange={(e) =>
                        setForm((p) => ({ ...p, name: e.target.value }))
                      }
                      className="w-full border border-border rounded px-3 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent transition"
                    />
                  </div>
                  <div>
                    <label
                      className="block text-sm font-semibold text-navy mb-1.5"
                      htmlFor="c-phone"
                    >
                      Phone Number *
                    </label>
                    <input
                      id="c-phone"
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      value={form.phone}
                      onChange={(e) =>
                        setForm((p) => ({ ...p, phone: e.target.value }))
                      }
                      className="w-full border border-border rounded px-3 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent transition"
                    />
                  </div>
                  <div>
                    <label
                      className="block text-sm font-semibold text-navy mb-1.5"
                      htmlFor="c-msg"
                    >
                      Message *
                    </label>
                    <textarea
                      id="c-msg"
                      required
                      rows={5}
                      placeholder="Describe your requirement, ask a technical question, or request a quote..."
                      value={form.message}
                      onChange={(e) =>
                        setForm((p) => ({ ...p, message: e.target.value }))
                      }
                      className="w-full border border-border rounded px-3 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent transition resize-none"
                    />
                  </div>
                  {error && <p className="text-red-600 text-sm">{error}</p>}
                  <button
                    type="submit"
                    disabled={submitting}
                    className="btn-orange w-full justify-center py-3.5 disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {submitting ? (
                      <>
                        <Loader2 size={16} className="animate-spin" />
                        Sending...
                      </>
                    ) : (
                      "Send Message"
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
