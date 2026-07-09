import { motion } from "motion/react";
import { Check, Sparkles } from "lucide-react";

interface ServicesProps {
  onNavigate: (sectionId: string) => void;
}

export default function Services({ onNavigate }: ServicesProps) {
  const services = [
    {
      id: "ui-ux",
      title: "UI/UX Design",
      description:
        "Crafting beautiful, modern interfaces with focus on intuitive user journeys and flawless accessibility.",
      features: [
        "User Research & Journey Mapping",
        "Wireframes & Layout Blueprints",
        "Interactive Clickable Prototypes",
        "Modern Component & Asset Design",
      ],
    },
    {
      id: "whatsapp-bot",
      title: "WhatsApp Bot",
      description:
        "Enhance customer experiences and save human hours with automatic instant smart messaging systems.",
      features: [
        "Automated AI Powered Replies",
        "24/7 Fast Customer Support",
        "Lead Capture & Qualification",
        "Direct Appointment Booking",
      ],
    },
    {
      id: "payment-gateway",
      title: "Payment Integration",
      description:
        "Accept digital payments securely from customers around the globe with verified checkouts.",
      features: [
        "Razorpay Integration",
        "Stripe & Multi-currency Setup",
        "UPI & Direct QR Payments",
        "Secure PCI-Compliant Checkout",
      ],
    },
    {
      id: "website-creation",
      title: "Website Creation",
      description:
        "High-performance, fully custom web experiences designed to tell your story and drive conversions.",
      features: [
        "Business & Portfolio Websites",
        "High-Converting Landing Pages",
        "Scaleable E-commerce Platforms",
        "Fully Fluid & Responsive Designs",
      ],
    },
    {
      id: "app-development",
      title: "App Development",
      isUnderProgress: true,
      description:
        "Scale your presence with fluid native applications on iOS and Android platforms.",
      features: [
        "Scalable Android & iOS architecture",
        "Flutter or React Native solutions",
        "Seamless cloud synchronization",
        "Optimized mobile experiences",
      ],
    },
    {
      id: "strategy-consultation",
      title: "Strategy Consultation",
      description:
        "Get expert digital strategy guidance tailored to your business goals, helping you plan the right technology roadmap from the start.",
      features: [
        "Business Needs & Gap Analysis",
        "Digital Roadmap Planning",
        "Technology Stack Recommendations",
        "Free Initial Consultation Call",
      ],
    },
  ];

  return (
    <section
      id="services"
      className="py-24 relative overflow-hidden"
      style={{ background: "#EEF2F6" }}
    >
      {/* Ambient glow orbs — uniform primary blue */}
      <div
        className="absolute top-1/2 left-1/4 w-80 h-80 rounded-full glow-blur -z-10 animate-pulse-orb"
        style={{ background: "rgba(44,61,71,0.08)" }}
      />
      <div
        className="absolute bottom-10 right-1/4 w-80 h-80 rounded-full glow-blur -z-10 animate-pulse-orb"
        style={{ background: "rgba(44,61,71,0.06)", animationDelay: "2s" }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            id="services-section-badge"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full font-sans font-semibold text-xs tracking-wider uppercase mb-4 border"
            style={{ background: "#EEF2F6", borderColor: "#2C3D47", color: "#2C3D47" }}
          >
            <Sparkles className="w-3 h-3" style={{ color: "#2C3D47" }} />
            <span>Our Expertise</span>
          </motion.div>

          <motion.h2
            id="services-section-heading"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display font-bold text-3xl sm:text-4xl tracking-tight mb-4"
            style={{ color: "#1F2937" }}
          >
            Innovative Services Crafted For Growth
          </motion.h2>

          <motion.p
            id="services-section-description"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="font-sans text-base sm:text-lg"
            style={{ color: "#4B5563" }}
          >
            We deploy cutting-edge technologies to design, build, automate, and secure your company's full digital workflow.
          </motion.p>
        </div>

        {/* Services Grid — uniform primary-blue hover pattern */}
        <div className="flex flex-wrap justify-center gap-8 items-stretch">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              id={`service-card-${service.id}`}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              whileHover={{ y: -6 }}
              className="flex flex-col bg-white rounded-3xl p-8 transition-all duration-300 relative group overflow-hidden h-full w-full sm:w-[calc(50%-1rem)] lg:w-[calc(33.33%-1.5rem)] max-w-[360px] border hover:border-[#2C3D47]"
              style={{
                borderColor: "#EEF2F6",
                boxShadow: "none",
                transition: "border-color 0.25s, box-shadow 0.25s, transform 0.25s",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.boxShadow = "0 0 0 2px #2C3D47, 0 0 24px rgba(44,61,71,0.22)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.boxShadow = "none";
              }}
            >
              {/* Uniform top accent bar — primary blue on hover */}
              <div
                className="absolute top-0 left-0 right-0 h-[4px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-t-3xl"
                style={{ background: "linear-gradient(to right, #2C3D47, #37464E)" }}
              />

              {/* Progress Badge */}
              {service.isUnderProgress ? (
                <div className="flex justify-start mb-6">
                  <span
                    id="badge-under-progress"
                    className="px-2.5 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase flex items-center gap-1 animate-pulse border"
                    style={{ background: "#EEF2F6", color: "#2C3D47", borderColor: "#2C3D47" }}
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#2C3D47]" />
                    🚧 Under Progress
                  </span>
                </div>
              ) : (
                <div className="h-4" />
              )}

              {/* Title */}
              <h3
                className="font-display font-bold text-xl mb-3 group-hover:text-[#2C3D47] transition-colors"
                style={{ color: "#1F2937" }}
              >
                {service.title}
              </h3>

              {/* Description */}
              <p className="font-sans text-sm leading-relaxed mb-6" style={{ color: "#6B7280" }}>
                {service.description}
              </p>

              {/* Feature Checklist */}
              <div className="flex-1">
                <ul className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <div
                        className="w-4 h-4 rounded-full flex items-center justify-center shrink-0 mt-0.5"
                        style={{ background: "rgba(44,61,71,0.08)" }}
                      >
                        <Check className="w-3 h-3" style={{ color: "#2C3D47" }} />
                      </div>
                      <span className="font-sans text-xs sm:text-sm font-medium leading-normal" style={{ color: "#4B5563" }}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Footer CTA / Progress note */}
              {service.isUnderProgress ? (
                <div
                  className="mt-8 pt-6 border-t flex items-center gap-3 p-3 rounded-2xl"
                  style={{ borderColor: "#EEF2F6", background: "#F8FAFC" }}
                >
                  <span className="text-[11px] font-sans leading-relaxed" style={{ color: "#6B7280" }}>
                    Android and iOS application development is currently under progress and will be available soon.
                  </span>
                </div>
              ) : (
                <div className="mt-8 pt-6 border-t flex justify-end" style={{ borderColor: "#EEF2F6" }}>
                  <button
                    id={`service-cta-${service.id}`}
                    onClick={() => onNavigate("contact")}
                    className="font-sans font-semibold text-xs flex items-center gap-1 group/btn cursor-pointer transition-colors hover:text-[#2C3D47]"
                    style={{ color: "#37464E" }}
                  >
                    Inquire About {service.title}
                    <span className="group-hover/btn:translate-x-1 transition-transform">→</span>
                  </button>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
