import { motion } from "motion/react";
import { ArrowRight, Sparkles, CheckCircle2 } from "lucide-react";

interface HeroProps {
  onNavigate: (sectionId: string) => void;
}

export default function Hero({ onNavigate }: HeroProps) {
  const bulletPoints = [
    "Expert Software Development",
    "Tailored Automation Bots",
    "Transparent & Fair Pricing",
  ];

  return (
    <section
      id="home"
      className="relative min-h-[85vh] pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden flex items-center bg-gradient-to-b from-blue-50/40 via-white to-white"
    >
      {/* Premium subtle grid backdrop */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-[0.35]" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="flex flex-col items-center text-center">
          
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
            className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl text-slate-900 tracking-tight leading-[1.15] mb-6 max-w-4xl"
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
            className="font-sans text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mb-8"
          >
            We help businesses grow with professional websites, tailored UI/UX design,
            WhatsApp automation bots, payment gateway integrations, and modern software solutions.
          </motion.p>

          {/* Bullet list of mini-features */}
          <motion.div
            id="hero-bullets"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap justify-center gap-x-6 gap-y-3 mb-8"
          >
            {bulletPoints.map((point, index) => (
              <div key={index} className="flex items-center gap-2 text-slate-700">
                <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
                <span className="font-sans text-sm font-medium">{point}</span>
              </div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            id="hero-ctas"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-4 w-full sm:w-auto"
          >
            <button
              id="hero-cta-services"
              onClick={() => onNavigate("services")}
              className="font-sans font-semibold text-base bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-2xl transition-all duration-200 shadow-lg shadow-blue-100 hover:shadow-xl hover:shadow-blue-200 hover:-translate-y-0.5 flex items-center justify-center gap-2 group cursor-pointer"
            >
              View Services
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
