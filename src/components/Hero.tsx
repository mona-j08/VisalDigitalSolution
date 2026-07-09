import { motion } from "motion/react";
import { ArrowRight, Sparkles, Shield, Bot, Cpu } from "lucide-react";

interface HeroProps {
  onNavigate: (sectionId: string) => void;
}

export default function Hero({ onNavigate }: HeroProps) {
  const bulletPoints = [
    {
      title: "Expert Software Development",
      icon: Cpu,
      color: "text-[#E98C1A]",
      borderColor:
        "hover:border-[#E98C1A]/80 hover:shadow-[0_0_24px_rgba(233,140,26,0.35)] active:border-[#E98C1A]/80 active:shadow-[0_0_24px_rgba(233,140,26,0.35)]",
      glowBorderClass: "group-hover:border-[#E98C1A]/30 group-active:border-[#E98C1A]/30",
    },
    {
      title: "Tailored Automation Bots",
      icon: Bot,
      color: "text-[#759F6F]",
      borderColor:
        "hover:border-[#759F6F]/80 hover:shadow-[0_0_24px_rgba(117,159,111,0.35)] active:border-[#759F6F]/80 active:shadow-[0_0_24px_rgba(117,159,111,0.35)]",
      glowBorderClass: "group-hover:border-[#759F6F]/30 group-active:border-[#759F6F]/30",
    },
    {
      title: "Transparent & Fair Pricing",
      icon: Shield,
      color: "text-[#CD6D8B]",
      borderColor:
        "hover:border-[#CD6D8B]/80 hover:shadow-[0_0_24px_rgba(205,109,139,0.35)] active:border-[#CD6D8B]/80 active:shadow-[0_0_24px_rgba(205,109,139,0.35)]",
      glowBorderClass: "group-hover:border-[#CD6D8B]/30 group-active:border-[#CD6D8B]/30",
    },
  ];

  return (
    <div className="relative">
      <section
        id="home"
        className="relative pt-28 pb-12 lg:pt-36 lg:pb-16 overflow-hidden flex flex-col justify-center"
        style={{ background: "linear-gradient(to bottom, #F4F7FA 0%, #F8FAFC 60%, #FFFFFF 100%)" }}
      >
        {/* Subtle grid backdrop */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-[0.30]" />

        {/* Ambient magic glow orbs */}
        <div
          className="absolute top-16 left-1/4 w-80 h-80 rounded-full animate-pulse-orb glow-blur pointer-events-none"
          style={{ background: "rgba(245,170,200,0.22)" }}
        />
        <div
          className="absolute top-24 right-1/4 w-64 h-64 rounded-full animate-pulse-orb glow-blur pointer-events-none"
          style={{ background: "rgba(233,140,26,0.14)", animationDelay: "1.5s" }}
        />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full text-center">

          {/* Top Badge */}
          <motion.div
            id="hero-badge"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full font-sans font-semibold text-xs tracking-wide uppercase mb-6 border"
            style={{
              background: "linear-gradient(135deg, #F5AAC8 0%, #EEF2F6 100%)",
              borderColor: "#CD6D8B",
              color: "#2C3D47",
            }}
          >
            <Sparkles className="w-3.5 h-3.5" style={{ color: "#CD6D8B" }} />
            <span>Innovate • Automate • Scale</span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            id="hero-headline"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl tracking-tight leading-[1.15] mb-6 max-w-4xl mx-auto"
            style={{ color: "#1F2937" }}
          >
            Transform Your Business with{" "}
            <span
              style={{
                background: "linear-gradient(90deg, #2C3D47, #CD6D8B, #E98C1A)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Smart Digital Solutions
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            id="hero-subheading"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-sans text-base sm:text-lg leading-relaxed max-w-2xl mx-auto mb-4"
            style={{ color: "#4B5563" }}
          >
            We help businesses grow with professional websites, tailored UI/UX design,
            WhatsApp automation bots, payment gateway integrations, and modern software solutions.
          </motion.p>
        </div>
      </section>

      {/* Dark Theme Feature Cards Banner */}
      <div
        className="border-t border-b py-10 relative overflow-hidden"
        style={{
          background: "linear-gradient(135deg, #2C3D47 0%, #37464E 100%)",
          borderColor: "#1F2937",
        }}
      >
        {/* Subtle grid inside dark banner */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#37464E_1px,transparent_1px)] bg-[size:4rem] opacity-[0.12]" />

        {/* Magic glow top stripe */}
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-px"
          style={{ background: "linear-gradient(to right, transparent, #CD6D8B, transparent)" }}
        />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {bulletPoints.map((point, index) => {
              const Icon = point.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -4 }}
                  className={`group relative border border-white/10 rounded-2xl p-6 transition-all duration-300 cursor-pointer ${point.borderColor}`}
                  style={{ background: "rgba(255,255,255,0.04)" }}
                >
                  {/* Neon border perimeter glow */}
                  <div
                    className={`absolute inset-0 rounded-2xl border border-transparent transition-all duration-300 pointer-events-none ${point.glowBorderClass}`}
                  />
                  <div className="flex items-center gap-4">
                    {/* Icon Frame */}
                    <div
                      className="w-12 h-12 rounded-xl border border-white/10 flex items-center justify-center shrink-0 shadow-lg group-hover:scale-105 transition-transform"
                      style={{ background: "rgba(255,255,255,0.06)" }}
                    >
                      <Icon className={`w-6 h-6 ${point.color}`} />
                    </div>
                    <span className="font-display font-bold text-sm sm:text-base text-slate-200 group-hover:text-white transition-colors">
                      {point.title}
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>

      {/* CTA Button */}
      <div className="py-12 flex justify-center relative z-10" style={{ background: "linear-gradient(to bottom, #FFFFFF, #F8FAFC)" }}>
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <button
            id="hero-cta-services"
            onClick={() => onNavigate("services")}
            className="font-sans font-semibold text-base text-white px-8 py-4 rounded-2xl transition-all duration-200 hover:-translate-y-0.5 flex items-center justify-center gap-2 group cursor-pointer glow-accent"
            style={{
              background: "linear-gradient(135deg, #E98C1A 0%, #EE9528 100%)",
            }}
          >
            <span>View Services</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.div>
      </div>
    </div>
  );
}
