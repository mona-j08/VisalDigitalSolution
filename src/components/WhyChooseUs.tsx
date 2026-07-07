import { motion } from "motion/react";
import { Sparkles } from "lucide-react";

export default function WhyChooseUs() {
  const cards = [
    {
      id: "tech",
      title: "Modern Technologies",
      description: "We use the latest high-performance frameworks, state management tools, and modern web architectures to build rapid, scalable products.",
      color: "from-blue-500 to-sky-400",
      lightBg: "bg-blue-50/50",
      textColor: "text-blue-600",
      glowClass: "hover:border-blue-500/80 hover:shadow-[0_0_20px_rgba(59,130,246,0.18)] active:border-blue-500/80 active:shadow-[0_0_20px_rgba(59,130,246,0.18)]",
      glowBorderClass: "group-hover:border-blue-500/30 group-active:border-blue-500/30"
    },
    {
      id: "pricing",
      title: "Affordable Pricing",
      description: "Get premium, enterprise-quality web and automation products engineered exactly to your budget constraints with absolutely no hidden fees.",
      color: "from-emerald-500 to-teal-400",
      lightBg: "bg-emerald-50/50",
      textColor: "text-emerald-600",
      glowClass: "hover:border-emerald-500/80 hover:shadow-[0_0_20px_rgba(16,185,129,0.18)] active:border-emerald-500/80 active:shadow-[0_0_20px_rgba(16,185,129,0.18)]",
      glowBorderClass: "group-hover:border-emerald-500/30 group-active:border-emerald-500/30"
    },
    {
      id: "delivery",
      title: "Fast Delivery",
      description: "Our agile development workflows guarantee quick prototyping, continuous updates, and rapid final delivery so you can start launching immediately.",
      color: "from-amber-500 to-orange-400",
      lightBg: "bg-amber-50/50",
      textColor: "text-amber-600",
      glowClass: "hover:border-amber-500/80 hover:shadow-[0_0_20px_rgba(245,158,11,0.18)] active:border-amber-500/80 active:shadow-[0_0_20px_rgba(245,158,11,0.18)]",
      glowBorderClass: "group-hover:border-amber-500/30 group-active:border-amber-500/30"
    },
    {
      id: "support",
      title: "Dedicated Support",
      description: "We provide round-the-clock maintenance, proactive debugging, and responsive scaling support long after your project has officially launched.",
      color: "from-indigo-500 to-purple-400",
      lightBg: "bg-indigo-50/50",
      textColor: "text-indigo-600",
      glowClass: "hover:border-indigo-500/80 hover:shadow-[0_0_20px_rgba(99,102,241,0.18)] active:border-indigo-500/80 active:shadow-[0_0_20px_rgba(99,102,241,0.18)]",
      glowBorderClass: "group-hover:border-indigo-500/30 group-active:border-indigo-500/30"
    },
  ];

  return (
    <section id="why-us" className="py-24 bg-white relative overflow-hidden">
      {/* Decorative vertical lines or ambient blurs */}
      <div className="absolute top-1/4 right-0 w-96 h-96 rounded-full bg-slate-50/60 glow-blur -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-20">
          <div className="lg:col-span-7">
            <motion.div
              id="why-choose-us-badge"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-600 font-sans font-semibold text-xs tracking-wider uppercase mb-4"
            >
              <Sparkles className="w-3 h-3" />
              <span>Core Values</span>
            </motion.div>
            
            <motion.h2
              id="why-choose-us-heading"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="font-display font-bold text-3xl sm:text-4xl text-slate-900 tracking-tight"
            >
              Why Partnerships Choose Visal Digital Solutions
            </motion.h2>
          </div>
          
          <div className="lg:col-span-5">
            <motion.p
              id="why-choose-us-lead"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="font-sans text-slate-500 text-sm sm:text-base leading-relaxed"
            >
              We operate at the convergence of fast execution and strict quality assurance. Every line of code and user interface we build is optimized for reliability and seamless integration.
            </motion.p>
          </div>
        </div>

        {/* 4 Feature Cards Grid with glowing borders and dynamic signature hover animations */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {cards.map((card, index) => {
            return (
              <motion.div
                key={card.id}
                id={`why-card-${card.id}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                whileHover={{ y: -5 }}
                className={`group flex flex-col bg-slate-50/40 border border-slate-100 rounded-3xl p-6 hover:bg-white transition-all duration-300 relative overflow-hidden pt-8 cursor-pointer ${card.glowClass}`}
              >
                {/* Neon border perimeter glow effect */}
                <div className={`absolute inset-0 rounded-3xl border border-transparent transition-all duration-300 pointer-events-none ${card.glowBorderClass}`} />

                {/* Background soft hover card border accent */}
                <div className={`absolute left-0 top-0 bottom-0 w-[4px] bg-gradient-to-b ${card.color}`} />

                {/* Card Header & Description */}
                <h3 className="font-display font-bold text-lg text-slate-900 mb-3 group-hover:text-slate-950 transition-colors">
                  {card.title}
                </h3>
                
                <p className="font-sans text-xs sm:text-sm text-slate-500 leading-relaxed group-hover:text-slate-600 transition-colors">
                  {card.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
