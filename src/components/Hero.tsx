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
      color: "text-blue-400",
      borderColor: "hover:border-blue-500/80 hover:shadow-[0_0_20px_rgba(59,130,246,0.35)] active:border-blue-500/80 active:shadow-[0_0_20px_rgba(59,130,246,0.35)]",
      glowBorderClass: "group-hover:border-blue-500/30 group-active:border-blue-500/30"
    },
    {
      title: "Tailored Automation Bots",
      icon: Bot,
      color: "text-emerald-400",
      borderColor: "hover:border-emerald-500/80 hover:shadow-[0_0_20px_rgba(16,185,129,0.35)] active:border-emerald-500/80 active:shadow-[0_0_20px_rgba(16,185,129,0.35)]",
      glowBorderClass: "group-hover:border-emerald-500/30 group-active:border-emerald-500/30"
    },
    {
      title: "Transparent & Fair Pricing",
      icon: Shield,
      color: "text-amber-400",
      borderColor: "hover:border-amber-500/80 hover:shadow-[0_0_20px_rgba(245,158,11,0.35)] active:border-amber-500/80 active:shadow-[0_0_20px_rgba(245,158,11,0.35)]",
      glowBorderClass: "group-hover:border-amber-500/30 group-active:border-amber-500/30"
    },
  ];

  return (
    <div className="relative">
      <section
        id="home"
        className="relative pt-28 pb-12 lg:pt-36 lg:pb-16 overflow-hidden flex flex-col justify-center bg-gradient-to-b from-blue-50/40 via-white to-white"
      >
        {/* Premium subtle grid backdrop */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-[0.35]" />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full text-center">
          {/* Top Badge */}
          <motion.div
            id="hero-badge"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-600 font-sans font-semibold text-xs tracking-wide uppercase mb-6"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Innovate • Automate • Scale</span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            id="hero-headline"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl text-slate-900 tracking-tight leading-[1.15] mb-6 max-w-4xl mx-auto"
          >
            Transform Your Business with{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-sky-500 to-indigo-600">
              Smart Digital Solutions
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            id="hero-subheading"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-sans text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto mb-4"
          >
            We help businesses grow with professional websites, tailored UI/UX design,
            WhatsApp automation bots, payment gateway integrations, and modern software solutions.
          </motion.p>
        </div>
      </section>

      {/* Dark Theme Separator Line Banner */}
      <div className="bg-slate-950 border-t border-b border-slate-900 py-10 relative overflow-hidden">
        {/* Glow grid backdrop inside the separating line */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px)] bg-[size:4rem] opacity-[0.08]" />
        
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
                  whileHover={{ y: -3 }}
                  className={`group relative bg-[#13192a]/90 border border-slate-800 rounded-2xl p-6 transition-all duration-300 cursor-pointer ${point.borderColor}`}
                >
                  {/* Neon border perimeter glow effect */}
                  <div className={`absolute inset-0 rounded-2xl border border-transparent transition-all duration-300 pointer-events-none ${point.glowBorderClass}`} />

                  <div className="flex items-center gap-4">
                    {/* Glowing Icon Frame */}
                    <div className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center shrink-0 shadow-lg group-hover:scale-105 transition-transform">
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

      {/* CTA Button "View Services" directly following it */}
      <div className="py-12 bg-gradient-to-b from-white to-slate-50/50 flex justify-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <button
            id="hero-cta-services"
            onClick={() => onNavigate("services")}
            className="font-sans font-semibold text-base bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-2xl transition-all duration-200 shadow-lg shadow-blue-100 hover:shadow-xl hover:shadow-blue-200 hover:-translate-y-0.5 flex items-center justify-center gap-2 group cursor-pointer"
          >
            <span>View Services</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.div>
      </div>
    </div>
  );
}
