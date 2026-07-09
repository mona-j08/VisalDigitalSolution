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
      description:
        "Empower local businesses to establish a commanding online presence, leveling the playing field with industry giants.",
    },
    {
      num: "02",
      title: "Affordable & Scalable Solutions",
      description:
        "Provide premium-quality design and custom software architecture tailored precisely to small business budgets without compromising performance.",
    },
    {
      num: "03",
      title: "Innovation with Purpose",
      description:
        "Engineer intelligent automations, smooth web experiences, and seamless checkout channels that translate directly to revenue growth.",
    },
    {
      num: "04",
      title: "Turning Ideas into Digital Success",
      description:
        "Bridge the technology gap by converting early-stage ideas into enterprise-grade products that compete confidently in the global market.",
    },
  ];

  return (
    <section
      id="ceo"
      className="relative py-20 lg:py-28 overflow-hidden"
      style={{ background: "linear-gradient(to bottom, #FFFFFF, #F4F7FA 60%, #EEF2F6)" }}
    >
      {/* Ambient background blur orbs */}
      <div
        className="absolute top-1/4 -left-36 w-96 h-96 rounded-full blur-3xl pointer-events-none animate-pulse-orb"
        style={{ background: "rgba(233,140,26,0.12)" }}
      />
      <div
        className="absolute bottom-1/4 -right-36 w-96 h-96 rounded-full blur-3xl pointer-events-none animate-pulse-orb"
        style={{ background: "rgba(205,109,139,0.14)", animationDelay: "2s" }}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 lg:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full font-sans font-semibold text-xs tracking-wide uppercase mb-4 border"
            style={{ background: "#FFF8EE", borderColor: "#E98C1A", color: "#E98C1A" }}
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
            className="font-display font-bold text-3xl sm:text-4xl tracking-tight mb-4"
            style={{ color: "#1F2937" }}
          >
            Meet the CEO
          </motion.h2>

          <motion.p
            id="ceo-section-subtitle"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="font-sans text-base sm:text-lg font-medium"
            style={{ color: "#4B5563" }}
          >
            The Story Behind VisalMasterWeb
          </motion.p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-16 lg:mb-24">

          {/* Left Column: Portrait */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.92 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6 }}
              className="relative mb-4"
            >
              {/* Main Circular Frame */}
              <div className="relative w-72 h-72 sm:w-80 sm:h-80 rounded-full overflow-hidden border-4 border-white shadow-2xl bg-slate-100 flex items-center justify-center"
                   style={{ boxShadow: "0 8px 40px rgba(44,61,71,0.18)" }}>
                <img
                  src={ceoPhoto}
                  alt="Visal Pandian - Founder & CEO"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* CEO Floating Badge */}
              <div className="absolute -bottom-4 right-4 bg-white/95 backdrop-blur-md border border-[#EEF2F6] rounded-2xl px-5 py-3 shadow-xl text-right"
                   style={{ boxShadow: "0 8px 32px rgba(205,109,139,0.14)" }}>
                <p className="font-display font-bold text-base" style={{ color: "#1F2937" }}>
                  Visal Pandian
                </p>
                <p className="font-sans font-semibold text-xs" style={{ color: "#C31247" }}>
                  Founder &amp; CEO
                </p>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Story */}
          <div className="lg:col-span-7 space-y-8 flex flex-col justify-center">

            {/* Story Paragraphs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-sans text-sm sm:text-base leading-relaxed space-y-5"
              style={{ color: "#4B5563" }}
            >
              <p>
                "I started{" "}
                <strong className="font-semibold" style={{ color: "#1F2937" }}>
                  VisalMasterWeb
                </strong>{" "}
                with one simple belief: every business, no matter its size, deserves access to quality technology.
              </p>
              <p>
                I noticed that many small businesses had great ideas and strong products but struggled to build an
                online presence because professional digital services were often expensive or difficult to access.
                Many relied on outdated systems or had no digital identity at all.
              </p>
              <p>
                That's what inspired me to build VisalMasterWeb—to bridge that gap. Our mission is to empower small
                businesses with modern websites, intuitive UI/UX, WhatsApp automation, secure payment integrations,
                and scalable digital solutions that help them compete confidently in today's digital world.
              </p>
              <p>
                We don't just build software—we build opportunities. Every project is a partnership, and every
                solution is designed to help businesses grow, connect with more customers, and create lasting impact."
              </p>
            </motion.div>

            {/* Quote Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative p-6 sm:p-8 rounded-3xl shadow-xl overflow-hidden group"
              style={{
                background: "linear-gradient(135deg, #2C3D47 0%, #37464E 100%)",
                boxShadow: "0 12px 40px rgba(44,61,71,0.30)",
              }}
            >
              {/* Magic glow orb inside card */}
              <div
                className="absolute top-0 right-0 w-40 h-40 rounded-full blur-2xl pointer-events-none"
                style={{ background: "rgba(205,109,139,0.18)" }}
              />
              <div className="relative flex gap-4 items-start">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center shrink-0"
                  style={{ background: "rgba(245,170,200,0.15)", color: "#F5AAC8" }}
                >
                  <Quote className="w-5 h-5 fill-current" />
                </div>
                <div className="space-y-1">
                  <p
                    className="font-display font-bold text-base sm:text-lg italic leading-snug"
                    style={{ color: "#F5AAC8" }}
                  >
                    "Technology should empower every business—not just the biggest ones."
                  </p>
                  <p className="text-xs font-mono pt-1" style={{ color: "#CD6D8B" }}>
                    — Visal Pandian, Founder
                  </p>
                </div>
              </div>
            </motion.div>

          </div>
        </div>

        {/* Our Goals Section */}
        <div
          className="mt-16 lg:mt-24 rounded-[2.5rem] p-8 sm:p-12 shadow-xl relative overflow-hidden border"
          style={{ background: "#FFFFFF", borderColor: "#EEF2F6", boxShadow: "0 8px 48px rgba(44,61,71,0.08)" }}
        >
          {/* Subtle grid background */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#EEF2F6_1px,transparent_1px),linear-gradient(to_bottom,#EEF2F6_1px,transparent_1px)] bg-[size:3rem_3rem] opacity-[0.6] pointer-events-none" />
          <div
            className="absolute -top-32 -right-32 w-80 h-80 rounded-full blur-3xl pointer-events-none"
            style={{ background: "rgba(205,109,139,0.06)" }}
          />
          <div
            className="absolute -bottom-32 -left-32 w-80 h-80 rounded-full blur-3xl pointer-events-none"
            style={{ background: "rgba(233,140,26,0.06)" }}
          />

          <div className="relative z-10">
            {/* Header */}
            <div className="text-center max-w-2xl mx-auto mb-12">
              <motion.h3
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="font-display font-bold text-3xl sm:text-4xl tracking-tight"
                style={{ color: "#1F2937" }}
              >
                Our{" "}
                <span
                  style={{
                    background: "linear-gradient(90deg, #2C3D47, #CD6D8B, #E98C1A)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  Goals
                </span>
              </motion.h3>
              <motion.p
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="font-sans text-sm sm:text-base mt-3"
                style={{ color: "#6B7280" }}
              >
                Where we are headed — ambitious milestones for lasting business impact.
              </motion.p>
            </div>

            {/* Goal Cards */}
            <div className="flex flex-col gap-6 sm:gap-8 max-w-3xl mx-auto">
              {goals.map((goal, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  whileHover={{ y: -2 }}
                  className="group relative rounded-2xl p-6 sm:p-8 transition-all duration-300 cursor-pointer border hover:border-[#2C3D47] hover:bg-white"
                  style={{
                    background: "#F8FAFC",
                    borderColor: "#EEF2F6",
                    boxShadow: "none",
                    transition: "border-color 0.25s, background 0.25s, box-shadow 0.25s",
                  }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.boxShadow = "0 0 0 2px #2C3D47, 0 0 24px rgba(44,61,71,0.22)"; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.boxShadow = "none"; }}
                >
                  <div className="flex flex-col sm:flex-row items-start gap-5 sm:gap-6">
                    <span
                      className="font-display font-bold text-3xl sm:text-4xl mb-2 sm:mb-0 block tracking-tight shrink-0"
                      style={{ color: "#2C3D47" }}
                    >
                      {goal.num}
                    </span>
                    <div className="space-y-2">
                      <h4
                        className="font-display font-bold text-lg sm:text-xl transition-colors duration-250"
                        style={{ color: "#1F2937" }}
                      >
                        {goal.title}
                      </h4>
                      <p className="font-sans text-sm sm:text-base leading-relaxed" style={{ color: "#4B5563" }}>
                        {goal.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-16 max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6 p-8 bg-white rounded-3xl relative overflow-hidden border"
          style={{ borderColor: "#EEF2F6", boxShadow: "0 4px 32px rgba(44,61,71,0.08)" }}
        >
          {/* Left accent bar — crimson */}
          <div
            className="absolute left-0 top-0 bottom-0 w-[4px] rounded-l-3xl"
            style={{ background: "linear-gradient(to bottom, #C31247, #E98C1A)" }}
          />
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="font-display font-bold text-lg" style={{ color: "#1F2937" }}>
              Let's Build Your Business Together
            </h4>
            <p className="font-sans text-sm leading-normal" style={{ color: "#6B7280" }}>
              Connect with us to design and launch your custom software system.
            </p>
          </div>

          <button
            id="ceo-cta-button"
            onClick={() => onNavigate("contact")}
            className="inline-flex items-center gap-2 text-white font-sans font-semibold text-sm px-7 py-3.5 rounded-2xl transition-all duration-200 hover:-translate-y-0.5 cursor-pointer shrink-0 w-full sm:w-auto justify-center group glow-primary"
            style={{ background: "linear-gradient(135deg, #2C3D47, #37464E)" }}
          >
            <span>Start Your Journey</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </button>
        </motion.div>

      </div>
    </section>
  );
}
