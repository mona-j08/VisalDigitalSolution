import { motion } from "motion/react";
import { Sparkles } from "lucide-react";

export default function WhyChooseUs() {
  const cards = [
    {
      id: "tech",
      title: "Modern Technologies",
      description:
        "We use the latest high-performance frameworks, state management tools, and modern web architectures to build rapid, scalable products.",
    },
    {
      id: "pricing",
      title: "Affordable Pricing",
      description:
        "Get premium, enterprise-quality web and automation products engineered exactly to your budget constraints with absolutely no hidden fees.",
    },
    {
      id: "delivery",
      title: "Fast Delivery",
      description:
        "Our agile development workflows guarantee quick prototyping, continuous updates, and rapid final delivery so you can start launching immediately.",
    },
    {
      id: "support",
      title: "Dedicated Support",
      description:
        "We provide round-the-clock maintenance, proactive debugging, and responsive scaling support long after your project has officially launched.",
    },
  ];

  return (
    <section
      id="why-us"
      className="py-24 relative overflow-hidden"
      style={{ background: "#FFFFFF" }}
    >
      {/* Ambient decorative orbs */}
      <div
        className="absolute top-1/4 right-0 w-96 h-96 rounded-full glow-blur -z-10 animate-pulse-orb"
        style={{ background: "rgba(44,61,71,0.06)" }}
      />
      <div
        className="absolute bottom-0 left-0 w-72 h-72 rounded-full glow-blur -z-10 animate-pulse-orb"
        style={{ background: "rgba(44,61,71,0.05)", animationDelay: "2.5s" }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-20">
          <div className="lg:col-span-7">
            <motion.div
              id="why-choose-us-badge"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full font-sans font-semibold text-xs tracking-wider uppercase mb-4 border"
              style={{ background: "#EEF2F6", borderColor: "#2C3D47", color: "#2C3D47" }}
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
              className="font-display font-bold text-3xl sm:text-4xl tracking-tight"
              style={{ color: "#1F2937" }}
            >
              Why Partnerships Choose{" "}
              <span
                style={{
                  background: "linear-gradient(90deg, #2C3D47, #CD6D8B)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                VisalMasterWeb
              </span>
            </motion.h2>
          </div>

          <div className="lg:col-span-5">
            <motion.p
              id="why-choose-us-lead"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="font-sans text-sm sm:text-base leading-relaxed"
              style={{ color: "#4B5563" }}
            >
              We operate at the convergence of fast execution and strict quality assurance. Every line of
              code and user interface we build is optimized for reliability and seamless integration.
            </motion.p>
          </div>
        </div>

        {/* 4 Feature Cards — uniform primary-blue hover pattern */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {cards.map((card, index) => (
            <motion.div
              key={card.id}
              id={`why-card-${card.id}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              whileHover={{ y: -5 }}
              className="group flex flex-col rounded-3xl p-6 transition-all duration-300 relative overflow-hidden pt-8 cursor-pointer border hover:border-[#2C3D47] hover:bg-white"
              style={{
                background: "#F8FAFC",
                borderColor: "#EEF2F6",
                boxShadow: "none",
                transition: "border-color 0.25s, background 0.25s, box-shadow 0.25s, transform 0.25s",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.boxShadow = "0 0 0 2px #2C3D47, 0 0 24px rgba(44,61,71,0.22)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.boxShadow = "none";
              }}
            >
              {/* Uniform left accent bar — primary blue */}
              <div
                className="absolute left-0 top-0 bottom-0 w-[4px] rounded-l-3xl"
                style={{ background: "linear-gradient(to bottom, #2C3D47, #37464E)" }}
              />

              {/* Card Content */}
              <h3
                className="font-display font-bold text-lg mb-3 group-hover:text-[#2C3D47] transition-colors"
                style={{ color: "#1F2937" }}
              >
                {card.title}
              </h3>

              <p className="font-sans text-xs sm:text-sm leading-relaxed" style={{ color: "#6B7280" }}>
                {card.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
