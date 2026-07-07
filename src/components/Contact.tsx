import React, { useState, ChangeEvent, FormEvent } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Phone, Mail, MapPin, ExternalLink, Calendar, CheckCircle } from "lucide-react";

export default function Contact() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formError, setFormError] = useState("");

  // Form Fields State for Interactive Form
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
      color: "bg-blue-50 text-blue-600 hover:bg-blue-100",
    },
    {
      id: "email",
      label: "Send Email",
      value: "Visalkalvi@gmail.com",
      icon: Mail,
      href: "mailto:Visalkalvi@gmail.com",
      color: "bg-rose-50 text-rose-600 hover:bg-rose-100",
    },
    {
      id: "address",
      label: "Open in Google Maps",
      value: "Vaari Nagar, Kamayagoundanpatti",
      icon: MapPin,
      href: "https://maps.google.com/?q=Vaari+Nagar,+1st+Street,+near+Gowmari+Complex,+Kamayagoundanpatti,+Theni+,+Tamil+Nadu+625521",
      color: "bg-amber-50 text-amber-600 hover:bg-amber-100",
      fullText: "Vaari Nagar, 1st Street, near Gowmari Complex, Kamayagoundanpatti, Theni , Tamil Nadu 625521"
    }
  ];

  return (
    <section id="contact" className="py-24 bg-white relative overflow-hidden">
      {/* Visual background accents */}
      <div className="absolute top-1/3 left-0 w-80 h-80 rounded-full bg-blue-50 glow-blur -z-10" />
      <div className="absolute bottom-10 right-0 w-80 h-80 rounded-full bg-sky-50 glow-blur -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            id="contact-badge"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-600 font-sans font-semibold text-xs tracking-wider uppercase mb-4"
          >
            <Calendar className="w-3.5 h-3.5" />
            <span>Book A Session</span>
          </motion.div>
          
          <motion.h2
            id="contact-heading"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display font-bold text-3xl sm:text-4xl text-slate-900 tracking-tight mb-4"
          >
            Let's Build Something Amazing Together
          </motion.h2>
          
          <motion.p
            id="contact-subheading"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="font-sans text-slate-500 text-base sm:text-lg"
          >
            Have an idea or a workflow you want to automate? We are ready to help you map it out.
          </motion.p>
        </div>

        {/* Core Layout Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Contact Details & Action Cards */}
          <div className="lg:col-span-5 space-y-8">
            <div className="bg-slate-50 border border-slate-100 rounded-3xl p-8 space-y-6">
              <h3 className="font-display font-bold text-xl text-slate-900 border-b border-slate-200/60 pb-4">
                Contact Information
              </h3>
              
              <p className="font-sans text-sm text-slate-500 leading-relaxed">
                Connect with our technical consultants directly. We typically reply within 2 hours on WhatsApp and email.
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
                      className="flex items-start gap-4 p-4 rounded-2xl bg-white border border-slate-100 hover:border-blue-200 hover:shadow-md transition-all group"
                    >
                      <div className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 transition-transform group-hover:scale-105 ${opt.color}`}>
                        <Icon className="w-5.5 h-5.5" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <span className="text-[11px] font-mono tracking-wider text-slate-400 uppercase block font-semibold">
                          {opt.label}
                        </span>
                        <span className="font-sans text-sm sm:text-base font-bold text-slate-800 block mt-0.5 break-words">
                          {opt.fullText || opt.value}
                        </span>
                      </div>
                      <ExternalLink className="w-4 h-4 text-slate-300 group-hover:text-blue-500 transition-colors shrink-0 mt-1 self-start" />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Prompt Consultation Call Card */}
            <div className="relative overflow-hidden bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl p-8 text-white shadow-lg shadow-blue-100">
              <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-white/10 rounded-full blur-2xl" />
              <h4 className="font-display font-bold text-lg mb-2 flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                Free Consultation Call
              </h4>
              <p className="font-sans text-xs sm:text-sm text-blue-50/90 leading-relaxed mb-6">
                Receive a complete strategic development roadmap and detailed cost breakdown at absolutely zero charge.
              </p>
              <button
                id="contact-quick-call-cta"
                onClick={() => {
                  const el = document.getElementById("contact-lead-form");
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                }}
                className="w-full font-sans font-bold text-xs sm:text-sm bg-white text-blue-600 hover:bg-blue-50 px-5 py-3 rounded-xl transition-all shadow-md"
              >
                Request a Free Consultation
              </button>
            </div>
          </div>

          {/* Right Column: Interactive Consultation Form Block */}
          <div id="contact-lead-form" className="lg:col-span-7 bg-white border border-slate-100/90 rounded-3xl shadow-xl shadow-slate-100/50 overflow-hidden">
            <div className="bg-slate-50/50 px-6 sm:px-8 py-5 border-b border-slate-100">
              <h3 className="font-display font-bold text-lg text-slate-800">
                Interactive Consultation Form
              </h3>
            </div>

            {/* Active Workspace Panel */}
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
                        <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mb-6">
                          <CheckCircle className="w-8 h-8" />
                        </div>
                        <h4 className="font-display font-bold text-2xl text-slate-900 mb-3">
                          Consultation Request Received!
                        </h4>
                        <p className="font-sans text-sm text-slate-500 max-w-md leading-relaxed mb-8">
                          Thank you for reaching out to <strong>Visal Digital Solutions</strong>, <span className="text-blue-600 font-medium">{formData.fullName}</span>. We have logged your request for <strong>{formData.service}</strong> and will contact you via <strong>{formData.contactMethod}</strong> shortly.
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
                              contactMethod: "WhatsApp",
                            });
                          }}
                          className="font-sans font-semibold text-sm border border-slate-200 hover:bg-slate-50 text-slate-700 px-6 py-2.5 rounded-xl transition-all cursor-pointer"
                        >
                          Submit Another Inquiry
                        </button>
                      </div>
                    ) : (
                      <form onSubmit={handleInteractiveSubmit} className="space-y-6">
                        {formError && (
                          <div className="p-4 rounded-xl bg-rose-50 border border-rose-100 text-rose-700 text-xs sm:text-sm font-medium flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-rose-500 animate-pulse" />
                            {formError}
                          </div>
                        )}

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                          {/* Full Name */}
                          <div>
                            <label className="block text-xs sm:text-sm font-bold text-slate-700 mb-2 font-sans">
                              Full Name <span className="text-rose-500">*</span>
                            </label>
                            <input
                              type="text"
                              name="fullName"
                              id="input-fullName"
                              required
                              value={formData.fullName}
                              onChange={handleInputChange}
                              placeholder="e.g. Visal Kalvi"
                              className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none transition-all text-slate-800 text-xs sm:text-sm font-sans"
                            />
                          </div>

                          {/* Company Name (Optional) */}
                          <div>
                            <label className="block text-xs sm:text-sm font-bold text-slate-700 mb-2 font-sans">
                              Company Name <span className="text-slate-400 font-normal">(Optional)</span>
                            </label>
                            <input
                              type="text"
                              name="companyName"
                              id="input-companyName"
                              value={formData.companyName}
                              onChange={handleInputChange}
                              placeholder="e.g. Visal Academics"
                              className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none transition-all text-slate-800 text-xs sm:text-sm font-sans"
                            />
                          </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                          {/* Email Address */}
                          <div>
                            <label className="block text-xs sm:text-sm font-bold text-slate-700 mb-2 font-sans">
                              Email Address <span className="text-rose-500">*</span>
                            </label>
                            <input
                              type="email"
                              name="email"
                              id="input-email"
                              required
                              value={formData.email}
                              onChange={handleInputChange}
                              placeholder="name@company.com"
                              className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none transition-all text-slate-800 text-xs sm:text-sm font-sans"
                            />
                          </div>

                          {/* Phone Number */}
                          <div>
                            <label className="block text-xs sm:text-sm font-bold text-slate-700 mb-2 font-sans">
                              Phone Number <span className="text-rose-500">*</span>
                            </label>
                            <input
                              type="tel"
                              name="phone"
                              id="input-phone"
                              required
                              value={formData.phone}
                              onChange={handleInputChange}
                              placeholder="e.g. 7806908543"
                              className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none transition-all text-slate-800 text-xs sm:text-sm font-sans"
                            />
                          </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                          {/* Service Dropdown */}
                          <div>
                            <label className="block text-xs sm:text-sm font-bold text-slate-700 mb-2 font-sans">
                              Service Required <span className="text-rose-500">*</span>
                            </label>
                            <select
                              name="service"
                              id="input-service"
                              value={formData.service}
                              onChange={handleInputChange}
                              className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none bg-white transition-all text-slate-800 text-xs sm:text-sm font-sans"
                            >
                              <option value="UI/UX Design">UI/UX Design</option>
                              <option value="WhatsApp Bot">WhatsApp Bot</option>
                              <option value="Payment Gateway Integration">Payment Gateway Integration</option>
                              <option value="Website Creation">Website Creation</option>
                              <option value="App Development">App Development</option>
                            </select>
                          </div>

                          {/* Budget (Optional) */}
                          <div>
                            <label className="block text-xs sm:text-sm font-bold text-slate-700 mb-2 font-sans">
                              Project Budget <span className="text-slate-400 font-normal">(Optional)</span>
                            </label>
                            <select
                              name="budget"
                              id="input-budget"
                              value={formData.budget}
                              onChange={handleInputChange}
                              className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none bg-white transition-all text-slate-800 text-xs sm:text-sm font-sans"
                            >
                              <option value="Basic">Startup / Basic (Flexible)</option>
                              <option value="Medium">Standard Business Solution</option>
                              <option value="Enterprise">Enterprise / Custom Integration</option>
                            </select>
                          </div>
                        </div>

                        {/* Preferred Contact Method */}
                        <div>
                          <label className="block text-xs sm:text-sm font-bold text-slate-700 mb-3 font-sans">
                            Preferred Contact Method <span className="text-rose-500">*</span>
                          </label>
                          <div className="flex flex-wrap gap-4">
                            {["WhatsApp", "Phone", "Email"].map((method) => (
                              <label
                                key={method}
                                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl border cursor-pointer transition-all ${
                                  formData.contactMethod === method
                                    ? "bg-blue-50 border-blue-500 text-blue-700 font-semibold"
                                    : "bg-white border-slate-200 text-slate-600 hover:bg-slate-50"
                                }`}
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
                          <label className="block text-xs sm:text-sm font-bold text-slate-700 mb-2 font-sans">
                            Project Description <span className="text-rose-500">*</span>
                          </label>
                          <textarea
                            name="description"
                            id="input-description"
                            required
                            rows={4}
                            value={formData.description}
                            onChange={handleInputChange}
                            placeholder="Tell us about your business goals, target timelines, or specific requirements..."
                            className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none transition-all text-slate-800 text-xs sm:text-sm font-sans resize-y"
                          />
                        </div>

                        <button
                          type="submit"
                          id="interactive-form-submit"
                          className="w-full font-sans font-bold text-sm bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-xl transition-all shadow-md shadow-blue-100 hover:shadow-lg hover:shadow-blue-200 hover:-translate-y-0.5 cursor-pointer flex items-center justify-center gap-2"
                        >
                          Request a Free Consultation
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
