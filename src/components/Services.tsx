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
      description: "Crafting beautiful, modern interfaces with focus on intuitive user journeys and flawless accessibility.",
      features: [
        "User Research & Journey Mapping",
        "Wireframes & Layout Blueprints",
        "Interactive Clickable Prototypes",
        "Modern Component & Asset Design",
      ],
      color: "bg-blue-500",
      lightBg: "bg-blue-50/50",
      textColor: "text-blue-600",
      borderColor: "border-blue-100",
    },
    {
      id: "whatsapp-bot",
      title: "WhatsApp Bot",
      description: "Enhance customer experiences and save human hours with automatic instant smart messaging systems.",
      features: [
        "Automated AI Powered Replies",
        "24/7 Fast Customer Support",
        "Lead Capture & Qualification",
        "Direct Appointment Booking",
      ],
      color: "bg-emerald-500",
      lightBg: "bg-emerald-50/50",
      textColor: "text-emerald-600",
      borderColor: "border-emerald-100",
    },
    {
      id: "payment-gateway",
      title: "Payment Integration",
      description: "Accept digital payments securely from customers around the globe with verified checkouts.",
      features: [
        "Razorpay Integration",
        "Stripe & Multi-currency Setup",
        "UPI & Direct QR Payments",
        "Secure PCI-Compliant Checkout",
      ],
      color: "bg-amber-500",
      lightBg: "bg-amber-50/50",
      textColor: "text-amber-600",
      borderColor: "border-amber-100",
    },
    {
      id: "website-creation",
      title: "Website Creation",
      description: "High-performance, fully custom web experiences designed to tell your story and drive conversions.",
      features: [
        "Business & Portfolio Websites",
        "High-Converting Landing Pages",
        "Scaleable E-commerce Platforms",
        "Fully Fluid & Responsive Designs",
      ],
      color: "bg-indigo-500",
      lightBg: "bg-indigo-50/50",
      textColor: "text-indigo-600",
      borderColor: "border-indigo-100",
    },
    {
      id: "app-development",
      title: "App Development",
      isUnderProgress: true,
      description: "Scale your presence with fluid native applications on iOS and Android platforms.",
      features: [
        "Scalable Android & iOS architecture",
        "Flutter or React Native solutions",
        "Seamless cloud synchronization",
        "Optimized mobile experiences",
      ],
      color: "bg-slate-500",
      lightBg: "bg-slate-50",
      textColor: "text-slate-600",
      borderColor: "border-slate-200",
    },
  ];

  return (
    <section id="services" className="py-24 bg-slate-50/50 relative overflow-hidden">
      {/* Background glow accents */}
      <div className="absolute top-1/2 left-1/4 w-80 h-80 rounded-full bg-blue-100/40 glow-blur -z-10" />
      <div className="absolute bottom-10 right-1/4 w-80 h-80 rounded-full bg-indigo-100/40 glow-blur -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            id="services-section-badge"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-600 font-sans font-semibold text-xs tracking-wider uppercase mb-4"
          >
            <Sparkles className="w-3 h-3" />
            <span>Our Expertise</span>
          </motion.div>
          
          <motion.h2
            id="services-section-heading"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display font-bold text-3xl sm:text-4xl text-slate-900 tracking-tight mb-4"
          >
            Innovative Services Crafted For Growth
          </motion.h2>
          
          <motion.p
            id="services-section-description"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="font-sans text-slate-600 text-base sm:text-lg"
          >
            We deploy cutting-edge technologies to design, build, automate, and secure your company's full digital workflow.
          </motion.p>
        </div>

        {/* Services Grid - Flex Wrap centered to put boxes in middle with space on right & left */}
        <div className="flex flex-wrap justify-center gap-8 items-stretch">
          {services.map((service, index) => {
            return (
              <motion.div
                key={service.id}
                id={`service-card-${service.id}`}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                whileHover={{ y: -6 }}
                className={`flex flex-col bg-white rounded-3xl border ${
                  service.isUnderProgress ? "border-slate-200/80" : "border-slate-100"
                } p-8 hover:shadow-xl transition-all duration-300 relative group overflow-hidden h-full w-full sm:w-[calc(50%-1rem)] lg:w-[calc(33.33%-1.5rem)] max-w-[360px]`}
              >
                {/* Visual Accent Hover Bar */}
                <div className={`absolute top-0 left-0 right-0 h-[4px] bg-gradient-to-r from-blue-600 to-sky-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

                {/* Progress Badge (if active) */}
                {service.isUnderProgress ? (
                  <div className="flex justify-start mb-6">
                    <span
                      id="badge-under-progress"
                      className="px-2.5 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase bg-amber-50 text-amber-700 border border-amber-200 flex items-center gap-1 animate-pulse"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                      🚧 Under Progress
                    </span>
                  </div>
                ) : (
                  <div className="h-4" /> // small top spacing to replace icon spacing height
                )}

                {/* Card Title & Description */}
                <h3 className="font-display font-bold text-xl text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {service.title}
                </h3>
                
                <p className="font-sans text-sm text-slate-500 leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Service Features / Checklist */}
                <div className="flex-1">
                  <ul className="space-y-3">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2.5">
                        <div className={`w-4.5 h-4.5 rounded-full ${service.lightBg} flex items-center justify-center shrink-0 mt-0.5`}>
                          <Check className={`w-3 h-3 ${service.textColor}`} />
                        </div>
                        <span className="font-sans text-xs sm:text-sm font-medium text-slate-700 leading-normal">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* App development spec info */}
                {service.isUnderProgress ? (
                  <div className="mt-8 pt-6 border-t border-slate-100 flex items-center gap-3 bg-slate-50/50 p-3 rounded-2xl">
                    <span className="text-[11px] font-sans text-slate-500 leading-relaxed">
                      Android and iOS application development is currently under progress and will be available soon.
                    </span>
                  </div>
                ) : (
                  <div className="mt-8 pt-6 border-t border-slate-100 flex justify-end">
                    <button
                      id={`service-cta-${service.id}`}
                      onClick={() => onNavigate("contact")}
                      className={`font-sans font-semibold text-xs text-blue-600 hover:text-blue-700 flex items-center gap-1 group/btn cursor-pointer`}
                    >
                      Inquire About {service.title}
                      <span className="group-hover/btn:translate-x-1 transition-transform">→</span>
                    </button>
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
