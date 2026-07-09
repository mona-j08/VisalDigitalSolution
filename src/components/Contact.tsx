import React, { useState, ChangeEvent, FormEvent } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Phone, Mail, MapPin, ExternalLink, Calendar, CheckCircle } from "lucide-react";

export default function Contact() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formError, setFormError] = useState("");

  const [formData, setFormData] = useState({
    fullName: "",
    companyName: "",
    email: "",
    phone: "",
    service: "Website Creation",
    budget: "Medium",
    description: "",
    contactMethod: "Phone",
  });

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleInteractiveSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.email || !formData.phone || !formData.description) {
      setFormError("Please fill out all required fields (*).");
      return;
    }
    setFormError("");
    setFormSubmitted(true);
  };

  const contactOptions = [
    {
      id: "phone",
      label: "Tap to Call",
      value: "+91 78069 08543",
      icon: Phone,
      href: "tel:7806908543",
      iconBg: "rgba(44,61,71,0.08)",
      iconColor: "#2C3D47",
      hoverBorder: "#2C3D47",
    },
    {
      id: "email",
      label: "Send Email",
      value: "Visalkalvi@gmail.com",
      icon: Mail,
      href: "mailto:Visalkalvi@gmail.com",
      iconBg: "rgba(195,18,71,0.08)",
      iconColor: "#C31247",
      hoverBorder: "#C31247",
    },
    {
      id: "address",
      label: "Open in Google Maps",
      value: "Vaari Nagar, Kamayagoundanpatti",
      fullText: "Vaari Nagar, 1st Street, near Gowmari Complex, Kamayagoundanpatti, Theni, Tamil Nadu 625521",
      icon: MapPin,
      href: "https://maps.google.com/?q=Vaari+Nagar,+1st+Street,+near+Gowmari+Complex,+Kamayagoundanpatti,+Theni+,+Tamil+Nadu+625521",
      iconBg: "rgba(233,140,26,0.10)",
      iconColor: "#E98C1A",
      hoverBorder: "#E98C1A",
    },
  ];

  // Input focus/blur style helpers
  const inputBase: React.CSSProperties = {
    width: "100%",
    padding: "12px 16px",
    borderRadius: "12px",
    border: "1.5px solid #EEF2F6",
    outline: "none",
    color: "#1F2937",
    fontSize: "0.85rem",
    fontFamily: "inherit",
    background: "#FFFFFF",
    transition: "border-color 0.2s, box-shadow 0.2s",
  };

  return (
    <section
      id="contact"
      className="py-24 relative overflow-hidden"
      style={{ background: "#F8FAFC" }}
    >
      {/* Ambient glow orbs */}
      <div
        className="absolute top-1/3 left-0 w-80 h-80 rounded-full glow-blur -z-10 animate-pulse-orb"
        style={{ background: "rgba(44,61,71,0.08)" }}
      />
      <div
        className="absolute bottom-10 right-0 w-80 h-80 rounded-full glow-blur -z-10 animate-pulse-orb"
        style={{ background: "rgba(205,109,139,0.10)", animationDelay: "2s" }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            id="contact-badge"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full font-sans font-semibold text-xs tracking-wider uppercase mb-4 border"
            style={{ background: "#F5AAC8", borderColor: "#CD6D8B", color: "#2C3D47" }}
          >
            <Calendar className="w-3.5 h-3.5" style={{ color: "#CD6D8B" }} />
            <span>Book A Session</span>
          </motion.div>

          <motion.h2
            id="contact-heading"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display font-bold text-3xl sm:text-4xl tracking-tight mb-4"
            style={{ color: "#1F2937" }}
          >
            Let's Build Something Amazing Together
          </motion.h2>

          <motion.p
            id="contact-subheading"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="font-sans text-base sm:text-lg"
            style={{ color: "#4B5563" }}
          >
            Have an idea or a workflow you want to automate? We are ready to help you map it out.
          </motion.p>
        </div>

        {/* Core Layout Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

          {/* Left Column: Direct Contact Details */}
          <div className="lg:col-span-5 space-y-8">
            <div
              className="rounded-3xl p-8 space-y-6 border"
              style={{ background: "#FFFFFF", borderColor: "#EEF2F6", boxShadow: "0 4px 24px rgba(44,61,71,0.06)" }}
            >
              <h3
                className="font-display font-bold text-xl border-b pb-4"
                style={{ color: "#1F2937", borderColor: "#EEF2F6" }}
              >
                Contact Information
              </h3>

              <p className="font-sans text-sm leading-relaxed" style={{ color: "#6B7280" }}>
                Connect with our technical consultants directly. We typically reply within 2 hours on
                WhatsApp and email.
              </p>

              <div className="space-y-4 pt-2">
                {contactOptions.map((opt) => {
                  const Icon = opt.icon;
                  return (
                    <a
                      key={opt.id}
                      id={`contact-action-${opt.id}`}
                      href={opt.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-start gap-4 p-4 rounded-2xl border transition-all group"
                      style={{ background: "#FFFFFF", borderColor: "#EEF2F6" }}
                      onMouseEnter={(e) => {
                        const el = e.currentTarget as HTMLElement;
                        el.style.borderColor = opt.hoverBorder;
                        el.style.boxShadow = `0 4px 16px rgba(0,0,0,0.08)`;
                      }}
                      onMouseLeave={(e) => {
                        const el = e.currentTarget as HTMLElement;
                        el.style.borderColor = "#EEF2F6";
                        el.style.boxShadow = "";
                      }}
                    >
                      <div
                        className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0 transition-transform group-hover:scale-105"
                        style={{ background: opt.iconBg }}
                      >
                        <Icon className="w-5 h-5" style={{ color: opt.iconColor }} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <span
                          className="text-[11px] font-mono tracking-wider uppercase block font-semibold"
                          style={{ color: "#6B7280" }}
                        >
                          {opt.label}
                        </span>
                        <span
                          className="font-sans text-sm sm:text-base font-bold block mt-0.5 break-words"
                          style={{ color: "#1F2937" }}
                        >
                          {opt.fullText || opt.value}
                        </span>
                      </div>
                      <ExternalLink
                        className="w-4 h-4 transition-colors shrink-0 mt-1 self-start"
                        style={{ color: "#D1D5DB" }}
                      />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Free Consultation Card */}
            <div
              className="relative overflow-hidden rounded-3xl p-8 text-white shadow-lg"
              style={{
                background: "linear-gradient(135deg, #2C3D47 0%, #37464E 100%)",
                boxShadow: "0 12px 40px rgba(44,61,71,0.28)",
              }}
            >
              {/* Magic glow orb */}
              <div
                className="absolute -right-10 -bottom-10 w-40 h-40 rounded-full blur-2xl"
                style={{ background: "rgba(205,109,139,0.20)" }}
              />
              {/* Gold top accent line */}
              <div
                className="absolute top-0 left-0 right-0 h-1 rounded-t-3xl"
                style={{ background: "linear-gradient(to right, #E98C1A, #CD6D8B)" }}
              />
              <h4 className="font-display font-bold text-lg mb-2 flex items-center gap-2 relative z-10">
                <Calendar className="w-5 h-5" style={{ color: "#F5AAC8" }} />
                Free Consultation Call
              </h4>
              <p
                className="font-sans text-xs sm:text-sm leading-relaxed mb-6 relative z-10"
                style={{ color: "rgba(245,170,200,0.85)" }}
              >
                Receive a complete strategic development roadmap and detailed cost breakdown at
                absolutely zero charge.
              </p>
              <button
                id="contact-quick-call-cta"
                onClick={() => {
                  const el = document.getElementById("contact-lead-form");
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                }}
                className="w-full font-sans font-bold text-xs sm:text-sm px-5 py-3 rounded-xl transition-all shadow-md relative z-10 cursor-pointer"
                style={{ background: "#E98C1A", color: "#FFFFFF" }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.background = "#EE9528";
                  (e.currentTarget as HTMLElement).style.boxShadow = "0 0 18px rgba(233,140,26,0.40)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.background = "#E98C1A";
                  (e.currentTarget as HTMLElement).style.boxShadow = "";
                }}
              >
                Request a Free Consultation
              </button>
            </div>
          </div>

          {/* Right Column: Consultation Form */}
          <div
            id="contact-lead-form"
            className="lg:col-span-7 rounded-3xl shadow-xl overflow-hidden border"
            style={{ background: "#FFFFFF", borderColor: "#EEF2F6", boxShadow: "0 8px 48px rgba(44,61,71,0.08)" }}
          >
            <div
              className="px-6 sm:px-8 py-5 border-b flex items-center gap-3"
              style={{ background: "#F8FAFC", borderColor: "#EEF2F6" }}
            >
              {/* Top decorative accent stripe */}
              <div
                className="w-3 h-3 rounded-full shrink-0"
                style={{ background: "linear-gradient(135deg, #E98C1A, #CD6D8B)" }}
              />
              <h3 className="font-display font-bold text-lg" style={{ color: "#1F2937" }}>
                Interactive Consultation Form
              </h3>
            </div>

            <div className="p-6 sm:p-8">
              <AnimatePresence mode="wait">
                <motion.div
                  key="interactive-form"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                >
                  {formSubmitted ? (
                    <div className="text-center py-12 px-4 flex flex-col items-center">
                      <div
                        className="w-16 h-16 rounded-full flex items-center justify-center mb-6"
                        style={{ background: "#DCF4D3", color: "#759F6F" }}
                      >
                        <CheckCircle className="w-8 h-8" />
                      </div>
                      <h4 className="font-display font-bold text-2xl mb-3" style={{ color: "#1F2937" }}>
                        Consultation Request Received!
                      </h4>
                      <p className="font-sans text-sm max-w-md leading-relaxed mb-8" style={{ color: "#6B7280" }}>
                        Thank you for reaching out to{" "}
                        <strong style={{ color: "#1F2937" }}>VisalMasterWeb</strong>,{" "}
                        <span style={{ color: "#2C3D47", fontWeight: 600 }}>{formData.fullName}</span>. We have
                        logged your request for <strong>{formData.service}</strong> and will contact you via{" "}
                        <strong>{formData.contactMethod}</strong> shortly.
                      </p>
                      <button
                        id="reset-form-btn"
                        onClick={() => {
                          setFormSubmitted(false);
                          setFormData({
                            fullName: "",
                            companyName: "",
                            email: "",
                            phone: "",
                            service: "Website Creation",
                            budget: "Medium",
                            description: "",
                            contactMethod: "Phone",
                          });
                        }}
                        className="font-sans font-semibold text-sm px-6 py-2.5 rounded-xl transition-all cursor-pointer border"
                        style={{ borderColor: "#EEF2F6", color: "#4B5563" }}
                      >
                        Submit Another Inquiry
                      </button>
                    </div>
                  ) : (
                    <form onSubmit={handleInteractiveSubmit} className="space-y-6">
                      {formError && (
                        <div
                          className="p-4 rounded-xl text-xs sm:text-sm font-medium flex items-center gap-2 border"
                          style={{ background: "rgba(195,18,71,0.06)", borderColor: "#C31247", color: "#C31247" }}
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-[#C31247] animate-pulse" />
                          {formError}
                        </div>
                      )}

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-xs sm:text-sm font-bold mb-2 font-sans" style={{ color: "#1F2937" }}>
                            Full Name <span style={{ color: "#C31247" }}>*</span>
                          </label>
                          <input
                            type="text"
                            name="fullName"
                            id="input-fullName"
                            required
                            value={formData.fullName}
                            onChange={handleInputChange}
                            placeholder="e.g. Visal Kalvi"
                            style={inputBase}
                            onFocus={(e) => {
                              e.target.style.borderColor = "#2C3D47";
                              e.target.style.boxShadow = "0 0 0 3px rgba(44,61,71,0.10)";
                            }}
                            onBlur={(e) => {
                              e.target.style.borderColor = "#EEF2F6";
                              e.target.style.boxShadow = "";
                            }}
                          />
                        </div>
                        <div>
                          <label className="block text-xs sm:text-sm font-bold mb-2 font-sans" style={{ color: "#1F2937" }}>
                            Company Name <span style={{ color: "#6B7280", fontWeight: 400 }}>(Optional)</span>
                          </label>
                          <input
                            type="text"
                            name="companyName"
                            id="input-companyName"
                            value={formData.companyName}
                            onChange={handleInputChange}
                            placeholder="e.g. Visal Academics"
                            style={inputBase}
                            onFocus={(e) => {
                              e.target.style.borderColor = "#2C3D47";
                              e.target.style.boxShadow = "0 0 0 3px rgba(44,61,71,0.10)";
                            }}
                            onBlur={(e) => {
                              e.target.style.borderColor = "#EEF2F6";
                              e.target.style.boxShadow = "";
                            }}
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-xs sm:text-sm font-bold mb-2 font-sans" style={{ color: "#1F2937" }}>
                            Email Address <span style={{ color: "#C31247" }}>*</span>
                          </label>
                          <input
                            type="email"
                            name="email"
                            id="input-email"
                            required
                            value={formData.email}
                            onChange={handleInputChange}
                            placeholder="name@company.com"
                            style={inputBase}
                            onFocus={(e) => {
                              e.target.style.borderColor = "#2C3D47";
                              e.target.style.boxShadow = "0 0 0 3px rgba(44,61,71,0.10)";
                            }}
                            onBlur={(e) => {
                              e.target.style.borderColor = "#EEF2F6";
                              e.target.style.boxShadow = "";
                            }}
                          />
                        </div>
                        <div>
                          <label className="block text-xs sm:text-sm font-bold mb-2 font-sans" style={{ color: "#1F2937" }}>
                            Phone Number <span style={{ color: "#C31247" }}>*</span>
                          </label>
                          <input
                            type="tel"
                            name="phone"
                            id="input-phone"
                            required
                            value={formData.phone}
                            onChange={handleInputChange}
                            placeholder="e.g. 7806908543"
                            style={inputBase}
                            onFocus={(e) => {
                              e.target.style.borderColor = "#2C3D47";
                              e.target.style.boxShadow = "0 0 0 3px rgba(44,61,71,0.10)";
                            }}
                            onBlur={(e) => {
                              e.target.style.borderColor = "#EEF2F6";
                              e.target.style.boxShadow = "";
                            }}
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-xs sm:text-sm font-bold mb-2 font-sans" style={{ color: "#1F2937" }}>
                            Service Required <span style={{ color: "#C31247" }}>*</span>
                          </label>
                          <select
                            name="service"
                            id="input-service"
                            value={formData.service}
                            onChange={handleInputChange}
                            style={inputBase}
                            onFocus={(e) => {
                              e.target.style.borderColor = "#2C3D47";
                              e.target.style.boxShadow = "0 0 0 3px rgba(44,61,71,0.10)";
                            }}
                            onBlur={(e) => {
                              e.target.style.borderColor = "#EEF2F6";
                              e.target.style.boxShadow = "";
                            }}
                          >
                            <option value="UI/UX Design">UI/UX Design</option>
                            <option value="WhatsApp Bot">WhatsApp Bot</option>
                            <option value="Payment Gateway Integration">Payment Gateway Integration</option>
                            <option value="Website Creation">Website Creation</option>
                            <option value="App Development">App Development</option>
                          </select>
                        </div>
                        <div>
                          <label className="block text-xs sm:text-sm font-bold mb-2 font-sans" style={{ color: "#1F2937" }}>
                            Project Budget <span style={{ color: "#6B7280", fontWeight: 400 }}>(Optional)</span>
                          </label>
                          <select
                            name="budget"
                            id="input-budget"
                            value={formData.budget}
                            onChange={handleInputChange}
                            style={inputBase}
                            onFocus={(e) => {
                              e.target.style.borderColor = "#2C3D47";
                              e.target.style.boxShadow = "0 0 0 3px rgba(44,61,71,0.10)";
                            }}
                            onBlur={(e) => {
                              e.target.style.borderColor = "#EEF2F6";
                              e.target.style.boxShadow = "";
                            }}
                          >
                            <option value="Basic">Startup / Basic (Flexible)</option>
                            <option value="Medium">Standard Business Solution</option>
                            <option value="Enterprise">Enterprise / Custom Integration</option>
                          </select>
                        </div>
                      </div>

                      {/* Preferred Contact Method */}
                      <div>
                        <label className="block text-xs sm:text-sm font-bold mb-3 font-sans" style={{ color: "#1F2937" }}>
                          Preferred Contact Method <span style={{ color: "#C31247" }}>*</span>
                        </label>
                        <div className="flex flex-wrap gap-4">
                          {["WhatsApp", "Phone", "Email"].map((method) => (
                            <label
                              key={method}
                              className="flex items-center gap-2 px-4 py-2.5 rounded-xl border cursor-pointer transition-all"
                              style={
                                formData.contactMethod === method
                                  ? { background: "rgba(44,61,71,0.07)", borderColor: "#2C3D47", color: "#2C3D47", fontWeight: 600 }
                                  : { background: "#FFFFFF", borderColor: "#EEF2F6", color: "#4B5563" }
                              }
                            >
                              <input
                                type="radio"
                                name="contactMethod"
                                value={method}
                                checked={formData.contactMethod === method}
                                onChange={handleInputChange}
                                className="sr-only"
                              />
                              <span className="text-xs sm:text-sm font-sans">{method}</span>
                            </label>
                          ))}
                        </div>
                      </div>

                      {/* Project Description */}
                      <div>
                        <label className="block text-xs sm:text-sm font-bold mb-2 font-sans" style={{ color: "#1F2937" }}>
                          Project Description <span style={{ color: "#C31247" }}>*</span>
                        </label>
                        <textarea
                          name="description"
                          id="input-description"
                          required
                          rows={4}
                          value={formData.description}
                          onChange={handleInputChange}
                          placeholder="Tell us about your business goals, target timelines, or specific requirements..."
                          style={{ ...inputBase, resize: "vertical" }}
                          onFocus={(e) => {
                            e.target.style.borderColor = "#2C3D47";
                            e.target.style.boxShadow = "0 0 0 3px rgba(44,61,71,0.10)";
                          }}
                          onBlur={(e) => {
                            e.target.style.borderColor = "#EEF2F6";
                            e.target.style.boxShadow = "";
                          }}
                        />
                      </div>

                      <button
                        type="submit"
                        id="interactive-form-submit"
                        className="w-full font-sans font-bold text-sm py-4 rounded-xl transition-all cursor-pointer flex items-center justify-center gap-2 glow-accent"
                        style={{ background: "linear-gradient(135deg, #E98C1A, #EE9528)", color: "#FFFFFF" }}
                        onMouseEnter={(e) => {
                          (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
                        }}
                        onMouseLeave={(e) => {
                          (e.currentTarget as HTMLElement).style.transform = "";
                        }}
                      >
                        Request a Free Consultation ✨
                      </button>
                    </form>
                  )}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
