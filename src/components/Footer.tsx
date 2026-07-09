import { motion } from "motion/react";
import { Phone, Mail, MapPin, ArrowUp } from "lucide-react";
import Logo from "./Logo";

interface FooterProps {
  onNavigate: (sectionId: string) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  const quickLinks = [
    { name: "Home",                  id: "home"     },
    { name: "Our Services",          id: "services" },
    { name: "Why Partner With Us",   id: "why-us"   },
    { name: "Contact Us",            id: "contact"  },
  ];

  const services = [
    { name: "UI/UX Architecture",                    id: "services" },
    { name: "WhatsApp AI Bot Automation",            id: "services" },
    { name: "Secure Payment Gateway Integration",    id: "services" },
    { name: "Premium Website Creation",              id: "services" },
    { name: "Mobile Application Development",        id: "services" },
    { name: "Strategy Consultation",                 id: "services" },
  ];

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer
      className="font-sans relative overflow-hidden"
      style={{ background: "linear-gradient(160deg, #2C3D47 0%, #1A262E 100%)", color: "#9CA3AF" }}
    >
      {/* Top gradient glow stripe — magic pink */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-px"
        style={{ background: "linear-gradient(to right, transparent, #CD6D8B, transparent)" }}
      />

      {/* Ambient orbs */}
      <div
        className="absolute -left-40 bottom-0 w-96 h-96 rounded-full blur-3xl pointer-events-none"
        style={{ background: "rgba(205,109,139,0.08)" }}
      />
      <div
        className="absolute -right-40 top-0 w-96 h-96 rounded-full blur-3xl pointer-events-none"
        style={{ background: "rgba(233,140,26,0.07)" }}
      />

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-12 relative z-10">
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 border-b pb-16"
          style={{ borderColor: "rgba(255,255,255,0.08)" }}
        >

          {/* Column 1: Brand */}
          <div className="lg:col-span-4 space-y-6">
            <div className="group cursor-pointer" onClick={scrollToTop}>
              <Logo inverse />
            </div>
            <p className="text-sm leading-relaxed max-w-sm" style={{ color: "#9CA3AF" }}>
              Engineering lightning-fast, high-converting digital architectures, automated replies,
              and payment systems for companies globally.
            </p>
            {/* Accent decorative divider */}
            <div
              className="w-16 h-1 rounded-full"
              style={{ background: "linear-gradient(to right, #E98C1A, #CD6D8B)" }}
            />
          </div>

          {/* Column 2: Quick Navigation */}
          <div className="lg:col-span-2 space-y-6">
            <h4
              className="font-display font-bold text-sm tracking-widest uppercase"
              style={{ color: "#FFFFFF" }}
            >
              Quick Navigation
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => onNavigate(link.id)}
                    className="text-sm transition-colors cursor-pointer text-left hover:text-white"
                    style={{ color: "#9CA3AF" }}
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Services */}
          <div className="lg:col-span-3 space-y-6">
            <h4
              className="font-display font-bold text-sm tracking-widest uppercase"
              style={{ color: "#FFFFFF" }}
            >
              Digital Services
            </h4>
            <ul className="space-y-3">
              {services.map((svc, idx) => (
                <li key={idx}>
                  <button
                    onClick={() => onNavigate("services")}
                    className="text-sm transition-colors cursor-pointer text-left hover:text-white"
                    style={{ color: "#9CA3AF" }}
                  >
                    {svc.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact Information */}
          <div className="lg:col-span-3 space-y-6">
            <h4
              className="font-display font-bold text-sm tracking-widest uppercase"
              style={{ color: "#FFFFFF" }}
            >
              Office Contacts
            </h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 shrink-0 mt-0.5" style={{ color: "#E98C1A" }} />
                <a
                  href="https://maps.google.com/?q=Vaari+Nagar,+1st+Street,+near+Gowmari+Complex,+Kamayagoundanpatti,+Theni+,+Tamil+Nadu+625521"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="leading-relaxed hover:text-white transition-colors"
                  style={{ color: "#9CA3AF" }}
                >
                  Vaari Nagar, 1st Street, <br />
                  near Gowmari Complex, Kamayagoundanpatti, <br />
                  Theni, Tamil Nadu 625521
                </a>
              </li>

              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 shrink-0" style={{ color: "#E98C1A" }} />
                <a
                  href="tel:7806908543"
                  className="hover:text-white transition-colors"
                  style={{ color: "#9CA3AF" }}
                >
                  +91 78069 08543
                </a>
              </li>

              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 shrink-0" style={{ color: "#CD6D8B" }} />
                <a
                  href="mailto:Visalkalvi@gmail.com"
                  className="hover:text-white transition-colors break-all"
                  style={{ color: "#9CA3AF" }}
                >
                  Visalkalvi@gmail.com
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Footer Bottom Meta Row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-8 mt-4 text-xs font-medium">
          <p style={{ color: "#6B7280" }}>
            © 2026 VisalMasterWeb. All Rights Reserved.
          </p>

          <div className="flex items-center gap-6" style={{ color: "#6B7280" }}>
            <span
              className="hover:text-white cursor-pointer transition-colors"
              onClick={() => onNavigate("contact")}
            >
              Free Consultation Roadmap
            </span>
            <span>•</span>
            <span
              className="hover:text-white cursor-pointer transition-colors"
              onClick={() => onNavigate("services")}
            >
              Services Level Agreement
            </span>
          </div>

          <button
            id="back-to-top"
            onClick={scrollToTop}
            className="w-10 h-10 rounded-xl flex items-center justify-center transition-all cursor-pointer shadow-md"
            style={{
              background: "rgba(255,255,255,0.08)",
              color: "#9CA3AF",
              border: "1px solid rgba(255,255,255,0.10)",
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLElement;
              el.style.background = "#E98C1A";
              el.style.color = "#FFFFFF";
              el.style.boxShadow = "0 0 18px rgba(233,140,26,0.40)";
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLElement;
              el.style.background = "rgba(255,255,255,0.08)";
              el.style.color = "#9CA3AF";
              el.style.boxShadow = "";
            }}
            aria-label="Back to Top"
          >
            <ArrowUp className="w-4 h-4 animate-bounce" />
          </button>
        </div>
      </div>
    </footer>
  );
}
