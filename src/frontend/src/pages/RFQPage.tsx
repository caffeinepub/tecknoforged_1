import {
  CheckCircle,
  ChevronRight,
  Clock,
  Loader2,
  Shield,
  Users,
} from "lucide-react";
import { motion } from "motion/react";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useBackend } from "../hooks/useBackend";

interface RFQFormData {
  companyName: string;
  contactPerson: string;
  phone: string;
  email: string;
  productType: string;
  material: string;
  grade: string;
  quantity: number;
  quantityUnit: string;
  deliveryTimeline: string;
  specialRequirements: string;
}

const productTypes = [
  "Allen Cap Screws",
  "Hex Flange Bolts",
  "Rivets",
  "Washers",
  "Button Head Screws",
  "Flange Head Screws",
  "Other / Custom",
];

const materials = [
  "Steel",
  "Stainless Steel 304",
  "Stainless Steel 316",
  "Brass",
  "Custom",
];
const grades = ["4.6", "8.8", "10.9", "12.9", "Custom"];
const deliveryOptions = [
  "Immediate",
  "2 weeks",
  "1 month",
  "3 months",
  "Ongoing supply",
];
const quantityUnits = ["pieces", "kg", "tons"];

export default function RFQPage() {
  const { actor } = useBackend();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful },
    reset,
    setError: setFormError,
  } = useForm<RFQFormData>({
    defaultValues: {
      grade: "8.8",
      quantityUnit: "pieces",
      deliveryTimeline: "1 month",
    },
  });

  useEffect(() => {
    document.title =
      "Request Fastener Quote | Bulk Pricing | Tecknoforged Industrial Manufacturer";
  }, []);

  const onSubmit = async (data: RFQFormData) => {
    try {
      if (!actor) throw new Error("Not connected");
      await actor.submitRFQ(
        data.companyName,
        data.contactPerson,
        data.phone,
        data.email,
        data.productType,
        data.material,
        data.grade,
        BigInt(Math.round(data.quantity)),
        data.quantityUnit,
        data.deliveryTimeline,
        data.specialRequirements?.trim() || null,
      );
    } catch {
      setFormError("root", {
        message:
          "Submission failed. Please call us directly at +91 9870090508.",
      });
    }
  };

  const trustSignals = [
    {
      icon: Shield,
      title: "Confidential Inquiry",
      desc: "Your details are secure and never shared",
    },
    {
      icon: Clock,
      title: "24-Hour Response",
      desc: "Our technical team responds within one business day",
    },
    {
      icon: Users,
      title: "Technical Review Included",
      desc: "Engineering specification support with every quote",
    },
  ];

  return (
    <main className="pt-16">
      {/* Hero */}
      <section className="relative bg-navy py-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0A1628] to-[#1E3A5F]" />
        <div className="relative container-brand">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-label text-orange-400 mb-3">Get a Quote</p>
            <h1 className="heading-xl text-white mb-3">Request a Quotation</h1>
            <p className="text-blue-200/70 max-w-xl font-light text-lg">
              Complete the form below. Our technical team responds within 24
              business hours with pricing, specifications, and lead time
              confirmation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Trust signals */}
      <div className="steel-texture py-6">
        <div className="container-brand">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {trustSignals.map((ts) => (
              <div key={ts.title} className="flex items-center gap-3 text-sm">
                <div className="w-9 h-9 bg-orange-500/20 rounded flex items-center justify-center flex-shrink-0">
                  <ts.icon size={16} className="text-orange-400" />
                </div>
                <div>
                  <div className="text-white font-semibold text-sm">
                    {ts.title}
                  </div>
                  <div className="text-blue-300/50 text-xs">{ts.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Form */}
      <section className="section-padding bg-light-brand">
        <div className="container-brand">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Main form */}
            <div className="lg:col-span-2">
              {isSubmitSuccessful ? (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-white border-2 border-green-300 rounded p-10 text-center"
                >
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-5">
                    <CheckCircle size={32} className="text-green-600" />
                  </div>
                  <h2 className="heading-md text-navy mb-3">
                    RFQ Submitted Successfully!
                  </h2>
                  <p className="text-muted-foreground mb-2">
                    Thank you for your inquiry. Our technical team will review
                    your requirements and respond within 24 business hours.
                  </p>
                  <p className="text-sm text-muted-foreground mb-6">
                    For urgent requirements, call us directly at{" "}
                    <a
                      href="tel:+919870090508"
                      className="text-orange-600 font-semibold"
                    >
                      +91 9870090508
                    </a>
                  </p>
                  <button
                    type="button"
                    onClick={() => reset()}
                    className="btn-orange"
                  >
                    Submit Another RFQ
                  </button>
                </motion.div>
              ) : (
                <form
                  onSubmit={handleSubmit(onSubmit)}
                  className="bg-white border border-border rounded overflow-hidden shadow-sm"
                  noValidate
                >
                  <div className="bg-navy px-6 py-4">
                    <h2 className="text-white font-bold text-lg">
                      RFQ Details
                    </h2>
                    <p className="text-blue-200/60 text-xs mt-0.5">
                      Fields marked * are required
                    </p>
                  </div>

                  <div className="p-6 flex flex-col gap-5">
                    {/* Company + Contact */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label
                          className="block text-sm font-semibold text-navy mb-1.5"
                          htmlFor="rfq-company"
                        >
                          Company Name *
                        </label>
                        <input
                          id="rfq-company"
                          type="text"
                          placeholder="e.g. ABC Engineering Pvt Ltd"
                          {...register("companyName", {
                            required: "Company name is required",
                          })}
                          className="w-full border border-border rounded px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent transition"
                        />
                        {errors.companyName && (
                          <p className="text-red-500 text-xs mt-1">
                            {errors.companyName.message}
                          </p>
                        )}
                      </div>
                      <div>
                        <label
                          className="block text-sm font-semibold text-navy mb-1.5"
                          htmlFor="rfq-contact"
                        >
                          Contact Person *
                        </label>
                        <input
                          id="rfq-contact"
                          type="text"
                          placeholder="e.g. Ramesh Kumar"
                          {...register("contactPerson", {
                            required: "Contact person is required",
                          })}
                          className="w-full border border-border rounded px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent transition"
                        />
                        {errors.contactPerson && (
                          <p className="text-red-500 text-xs mt-1">
                            {errors.contactPerson.message}
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Phone + Email */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label
                          className="block text-sm font-semibold text-navy mb-1.5"
                          htmlFor="rfq-phone"
                        >
                          Phone Number *
                        </label>
                        <input
                          id="rfq-phone"
                          type="tel"
                          placeholder="+91 98765 43210"
                          {...register("phone", {
                            required: "Phone number is required",
                          })}
                          className="w-full border border-border rounded px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent transition"
                        />
                        {errors.phone && (
                          <p className="text-red-500 text-xs mt-1">
                            {errors.phone.message}
                          </p>
                        )}
                      </div>
                      <div>
                        <label
                          className="block text-sm font-semibold text-navy mb-1.5"
                          htmlFor="rfq-email"
                        >
                          Email Address *
                        </label>
                        <input
                          id="rfq-email"
                          type="email"
                          placeholder="procurement@company.com"
                          {...register("email", {
                            required: "Email is required",
                            pattern: {
                              value: /^\S+@\S+\.\S+$/,
                              message: "Invalid email address",
                            },
                          })}
                          className="w-full border border-border rounded px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent transition"
                        />
                        {errors.email && (
                          <p className="text-red-500 text-xs mt-1">
                            {errors.email.message}
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Product + Material */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label
                          className="block text-sm font-semibold text-navy mb-1.5"
                          htmlFor="rfq-product"
                        >
                          Product Type *
                        </label>
                        <select
                          id="rfq-product"
                          {...register("productType", {
                            required: "Product type is required",
                          })}
                          className="w-full border border-border rounded px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent transition bg-white"
                        >
                          <option value="">Select product type...</option>
                          {productTypes.map((pt) => (
                            <option key={pt} value={pt}>
                              {pt}
                            </option>
                          ))}
                        </select>
                        {errors.productType && (
                          <p className="text-red-500 text-xs mt-1">
                            {errors.productType.message}
                          </p>
                        )}
                      </div>
                      <div>
                        <label
                          className="block text-sm font-semibold text-navy mb-1.5"
                          htmlFor="rfq-material"
                        >
                          Material *
                        </label>
                        <select
                          id="rfq-material"
                          {...register("material", {
                            required: "Material is required",
                          })}
                          className="w-full border border-border rounded px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent transition bg-white"
                        >
                          <option value="">Select material...</option>
                          {materials.map((m) => (
                            <option key={m} value={m}>
                              {m}
                            </option>
                          ))}
                        </select>
                        {errors.material && (
                          <p className="text-red-500 text-xs mt-1">
                            {errors.material.message}
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Grade */}
                    <div>
                      <label
                        className="block text-sm font-semibold text-navy mb-1.5"
                        htmlFor="rfq-grade"
                      >
                        Grade / Strength Class
                      </label>
                      <select
                        id="rfq-grade"
                        {...register("grade")}
                        className="w-full sm:w-48 border border-border rounded px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent transition bg-white"
                      >
                        {grades.map((g) => (
                          <option key={g} value={g}>
                            {g}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Quantity */}
                    <div>
                      <label
                        className="block text-sm font-semibold text-navy mb-1.5"
                        htmlFor="rfq-qty"
                      >
                        Quantity Required *
                      </label>
                      <div className="flex gap-3">
                        <input
                          id="rfq-qty"
                          type="number"
                          min="1"
                          placeholder="e.g. 50000"
                          {...register("quantity", {
                            required: "Quantity is required",
                            min: { value: 1, message: "Minimum quantity is 1" },
                            valueAsNumber: true,
                          })}
                          className="flex-1 sm:max-w-xs border border-border rounded px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent transition"
                        />
                        <select
                          {...register("quantityUnit")}
                          className="w-28 border border-border rounded px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-orange-400 transition bg-white"
                        >
                          {quantityUnits.map((u) => (
                            <option key={u} value={u}>
                              {u}
                            </option>
                          ))}
                        </select>
                      </div>
                      {errors.quantity && (
                        <p className="text-red-500 text-xs mt-1">
                          {errors.quantity.message}
                        </p>
                      )}
                    </div>

                    {/* Delivery */}
                    <div>
                      <label
                        className="block text-sm font-semibold text-navy mb-1.5"
                        htmlFor="rfq-delivery"
                      >
                        Delivery Timeline
                      </label>
                      <select
                        id="rfq-delivery"
                        {...register("deliveryTimeline")}
                        className="w-full sm:w-60 border border-border rounded px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent transition bg-white"
                      >
                        {deliveryOptions.map((d) => (
                          <option key={d} value={d}>
                            {d}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Special requirements */}
                    <div>
                      <label
                        className="block text-sm font-semibold text-navy mb-1.5"
                        htmlFor="rfq-special"
                      >
                        Special Requirements / Technical Notes
                      </label>
                      <textarea
                        id="rfq-special"
                        rows={4}
                        placeholder="Specify sizes (e.g. M8 × 25mm), tolerances, surface treatment, drawing reference, packaging requirements..."
                        {...register("specialRequirements")}
                        className="w-full border border-border rounded px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent transition resize-none"
                      />
                    </div>

                    {errors.root && (
                      <div className="bg-red-50 border border-red-200 rounded p-3 text-red-700 text-sm">
                        {errors.root.message}
                      </div>
                    )}

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="btn-orange w-full justify-center py-4 text-base disabled:opacity-60 disabled:cursor-not-allowed shadow-orange"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 size={18} className="animate-spin" />
                          Submitting RFQ...
                        </>
                      ) : (
                        <>
                          Submit RFQ — Get Quote in 24 Hours
                          <ChevronRight size={18} />
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1 flex flex-col gap-5">
              {/* Contact card */}
              <div className="bg-navy rounded p-5 text-white">
                <h3 className="font-bold text-base mb-4">
                  Prefer Direct Contact?
                </h3>
                <div className="flex flex-col gap-4 text-sm">
                  <a
                    href="tel:+919870090508"
                    className="flex items-center gap-3 bg-orange-500/20 rounded p-3 hover:bg-orange-500/30 transition-colors"
                  >
                    <span className="text-orange-400 font-bold">📞</span>
                    <div>
                      <div className="font-semibold text-xs text-blue-200/60 uppercase tracking-wider">
                        Call
                      </div>
                      <div className="text-white font-bold">+91 9870090508</div>
                    </div>
                  </a>
                  <a
                    href="https://wa.me/919870090508"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 bg-green-500/20 rounded p-3 hover:bg-green-500/30 transition-colors"
                  >
                    <span className="text-green-400 font-bold">💬</span>
                    <div>
                      <div className="font-semibold text-xs text-blue-200/60 uppercase tracking-wider">
                        WhatsApp
                      </div>
                      <div className="text-white font-bold">Message Us</div>
                    </div>
                  </a>
                  <a
                    href="mailto:info@tecknoforged.com"
                    className="flex items-center gap-3 bg-white/10 rounded p-3 hover:bg-white/15 transition-colors"
                  >
                    <span className="text-blue-300 font-bold">✉️</span>
                    <div>
                      <div className="font-semibold text-xs text-blue-200/60 uppercase tracking-wider">
                        Email
                      </div>
                      <div className="text-white font-bold text-sm">
                        info@tecknoforged.com
                      </div>
                    </div>
                  </a>
                </div>
                <div className="mt-4 pt-4 border-t border-white/10 text-xs text-blue-200/50">
                  Business Hours: Mon–Sat, 9:00 AM – 6:00 PM IST
                </div>
              </div>

              {/* What happens next */}
              <div className="border border-border rounded p-5 bg-white">
                <h3 className="font-bold text-navy text-sm mb-4">
                  What Happens Next?
                </h3>
                <div className="flex flex-col gap-4">
                  {[
                    [
                      "01",
                      "Technical review",
                      "Our team reviews your specifications and selects optimal product configuration",
                    ],
                    [
                      "02",
                      "Quote preparation",
                      "Pricing, lead time, MOQ, and shipping cost calculation",
                    ],
                    [
                      "03",
                      "Response sent",
                      "Full quotation sent within 24 business hours via email and/or WhatsApp",
                    ],
                    [
                      "04",
                      "Sample arrangement",
                      "On order confirmation, samples dispatched for approval if required",
                    ],
                  ].map(([num, title, desc]) => (
                    <div key={num} className="flex gap-3">
                      <div className="w-6 h-6 bg-orange-500 rounded text-white text-xs font-bold flex items-center justify-center flex-shrink-0">
                        {num}
                      </div>
                      <div>
                        <div className="text-xs font-bold text-navy">
                          {title}
                        </div>
                        <div className="text-xs text-muted-foreground mt-0.5">
                          {desc}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
