import React from "react";
import { motion } from "motion/react";
import { Quote, ArrowRight, Sparkles } from "lucide-react";
import ceoPhoto from "../assets/images/ceo_visal_pandian_trophies_1783412627969.jpg";

interface CEOProps {
  onNavigate: (sectionId: string) => void;
}

export default function CEO({ onNavigate }: CEOProps) {
  const goals = [
    {
      num: "01",
      title: "Empowering Small Businesses",
      description: "Empower local businesses to establish a commanding online presence, leveling the playing field with industry giants."
    },
    {
      num: "02",
      title: "Affordable & Scalable Solutions",
      description: "Provide premium-quality design and custom software architecture tailored precisely to small business budgets without compromising performance."
    },
    {
      num: "03",
      title: "Innovation with Purpose",
      description: "Engineer intelligent automations, smooth web experiences, and seamless checkout channels that translate directly to revenue growth."
    },
    {
      num: "04",
      title: "Turning Ideas into Digital Success",
      description: "Bridge the technology gap by converting early-stage ideas into enterprise-grade products that compete confidently in the global market."
    }
  ];

  return (
    <section
      id="ceo"
      className="relative py-20 lg:py-28 overflow-hidden bg-gradient-to-b from-white via-amber-50/10 to-slate-50/50"
    >
      {/* Decorative ambient background blur orbs to give a warm, premium feel */}
      <div className="absolute top-1/4 -left-36 w-96 h-96 rounded-full bg-amber-200/20 blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-36 w-96 h-96 rounded-full bg-blue-100/30 blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 lg:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-amber-50 border border-amber-100 text-amber-700 font-sans font-semibold text-xs tracking-wide uppercase mb-4"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Meet our Founder</span>
          </motion.div>
          
          <motion.h2
            id="ceo-section-title"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-display font-bold text-3xl sm:text-4xl text-slate-900 tracking-tight mb-4"
          >
            Meet the CEO
          </motion.h2>
          
          <motion.p
            id="ceo-section-subtitle"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="font-sans text-base sm:text-lg text-slate-500 font-medium"
          >
            The Story Behind Visal Digital Solutions
          </motion.p>
        </div>

        {/* Main Content Grid: Image Left, Story Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-16 lg:mb-24">
          
          {/* Left Column: Portrait */}
          <div className="lg:col-span-5 flex flex-col items-center">
            
            {/* CEO Profile Image Panel */}
            <motion.div
              initial={{ opacity: 0, scale: 0.92 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6 }}
              className="relative mb-4"
            >
              {/* Outer decorative gradient glow rings */}
              <div className="absolute -inset-4 rounded-full bg-gradient-to-tr from-amber-200 via-blue-200 to-indigo-100 opacity-60 blur-lg animate-[spin_12s_linear_infinite]" />
              
              {/* Secondary delicate border ring */}
              <div className="absolute -inset-1.5 rounded-full border border-dashed border-slate-200/80 pointer-events-none" />

              {/* Main Circular Frame */}
              <div className="relative w-72 h-72 sm:w-80 sm:h-80 rounded-full overflow-hidden border-4 border-white shadow-2xl shadow-slate-200/80 bg-slate-100 flex items-center justify-center">
                <img
                  src={ceoPhoto}
                  alt="Visal Pandian - Founder & CEO"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* CEO Floating Signature/Card Badge */}
              <div className="absolute -bottom-4 right-4 bg-white/95 backdrop-blur-md border border-slate-100 rounded-2xl px-5 py-3 shadow-xl shadow-slate-100/80 text-right">
                <p className="font-display font-bold text-base text-slate-900">Visal Pandian</p>
                <p className="font-sans font-semibold text-xs text-blue-600">Founder & CEO</p>
              </div>
            </motion.div>

          </div>

          {/* Right Column: Narrative Story & Quotes */}
          <div className="lg:col-span-7 space-y-8 flex flex-col justify-center">
            
            {/* Story Paragraphs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-sans text-slate-650 text-sm sm:text-base leading-relaxed space-y-5"
            >
              <p>
                "I started <strong className="text-slate-900 font-semibold">Visal Digital Solutions</strong> with one simple belief: every business, no matter its size, deserves access to quality technology.
              </p>
              <p>
                I noticed that many small businesses had great ideas and strong products but struggled to build an online presence because professional digital services were often expensive or difficult to access. Many relied on outdated systems or had no digital identity at all.
              </p>
              <p>
                That's what inspired me to build Visal Digital Solutions—to bridge that gap. Our mission is to empower small businesses with modern websites, intuitive UI/UX, WhatsApp automation, secure payment integrations, and scalable digital solutions that help them compete confidently in today's digital world.
              </p>
              <p>
                We don't just build software—we build opportunities. Every project is a partnership, and every solution is designed to help businesses grow, connect with more customers, and create lasting impact."
              </p>
            </motion.div>

            {/* Quote Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative p-6 sm:p-8 bg-gradient-to-br from-slate-900 to-indigo-950 text-white rounded-3xl shadow-xl overflow-hidden group"
            >
              {/* Graphic element */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/10 rounded-full blur-2xl pointer-events-none" />
              
              <div className="relative flex gap-4 items-start">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0 text-amber-300">
                  <Quote className="w-5 h-5 fill-current" />
                </div>
                <div className="space-y-1">
                  <p className="font-display font-bold text-base sm:text-lg text-amber-100 italic leading-snug">
                    "Technology should empower every business—not just the biggest ones."
                  </p>
                  <p className="text-xs text-indigo-200/80 font-mono pt-1">
                    — Visal Pandian, Founder
                  </p>
                </div>
              </div>
            </motion.div>

          </div>

        </div>

        {/* Our Goals Section (Light Mode Stacked Layout) */}
        <div className="mt-16 lg:mt-24 border border-slate-100 bg-white rounded-[2.5rem] p-8 sm:p-12 shadow-xl shadow-slate-100/50 relative overflow-hidden">
          {/* Subtle grid background mask inside the light section */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-[size:3rem_3rem] opacity-[0.5] pointer-events-none" />
          <div className="absolute -top-32 -right-32 w-80 h-80 rounded-full bg-blue-500/5 blur-3xl pointer-events-none" />
          <div className="absolute -bottom-32 -left-32 w-80 h-80 rounded-full bg-indigo-500/5 blur-3xl pointer-events-none" />

          <div className="relative z-10">
            {/* Header */}
            <div className="text-center max-w-2xl mx-auto mb-12">
              <motion.h3
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="font-display font-bold text-3xl sm:text-4xl text-slate-900 tracking-tight"
              >
                Our <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">Goals</span>
              </motion.h3>
              <motion.p
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="font-sans text-sm sm:text-base text-slate-500 mt-3"
              >
                Where we are headed — ambitious milestones for lasting business impact.
              </motion.p>
            </div>

            {/* Glowing Perimeter Cards stacked vertically (one after the other) with custom space */}
            <div className="flex flex-col gap-6 sm:gap-8 max-w-3xl mx-auto">
              {goals.map((goal, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  whileHover={{ y: -2 }}
                  className="group relative bg-slate-50/50 border border-slate-100 rounded-2xl p-6 sm:p-8 transition-all duration-300 hover:bg-white hover:border-blue-500/80 hover:shadow-[0_0_20px_rgba(59,130,246,0.18)] active:border-blue-500/80 active:shadow-[0_0_20px_rgba(59,130,246,0.18)] cursor-pointer"
                >
                  {/* Neon border perimeter glow effect */}
                  <div className="absolute inset-0 rounded-2xl border border-transparent group-hover:border-blue-500/30 group-active:border-blue-500/30 transition-all duration-300 pointer-events-none" />
                  
                  <div className="flex flex-col sm:flex-row items-start gap-5 sm:gap-6">
                    {/* Index Number block */}
                    <span className="font-display font-bold text-3xl sm:text-4xl text-blue-600 mb-2 sm:mb-0 block tracking-tight shrink-0">
                      {goal.num}
                    </span>

                    {/* Text content block */}
                    <div className="space-y-2">
                      <h4 className="font-display font-bold text-lg sm:text-xl text-slate-900 group-hover:text-blue-600 transition-colors duration-250">
                        {goal.title}
                      </h4>
                      <p className="font-sans text-sm sm:text-base text-slate-600 leading-relaxed">
                        {goal.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Call to Action Container */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-16 max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6 p-8 border border-slate-100 bg-white rounded-3xl shadow-lg relative overflow-hidden"
        >
          {/* Subtle gradient accent for the CTA bar */}
          <div className="absolute left-0 top-0 bottom-0 w-[4px] bg-gradient-to-b from-blue-600 to-indigo-600" />
          
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="font-display font-bold text-lg text-slate-800">
              Let's Build Your Business Together
            </h4>
            <p className="font-sans text-sm text-slate-500 leading-normal">
              Connect with us to design and launch your custom software system.
            </p>
          </div>
          
          <button
            id="ceo-cta-button"
            onClick={() => onNavigate("contact")}
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-sans font-semibold text-sm px-7 py-3.5 rounded-2xl transition-all duration-200 shadow-md shadow-blue-50 hover:shadow-lg hover:shadow-blue-100 hover:-translate-y-0.5 cursor-pointer shrink-0 w-full sm:w-auto justify-center group"
          >
            <span>Start Your Journey</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </button>
        </motion.div>

      </div>
    </section>
  );
}
