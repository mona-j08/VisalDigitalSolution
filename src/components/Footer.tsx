import { motion } from "motion/react";
import { Phone, Mail, MapPin, MessageSquare, ArrowUp, Twitter, Linkedin, Github, Youtube, Globe } from "lucide-react";
import Logo from "./Logo";

interface FooterProps {
  onNavigate: (sectionId: string) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  const quickLinks = [
    { name: "Home", id: "home" },
    { name: "Our Services", id: "services" },
    { name: "Why Partner With Us", id: "why-us" },
    { name: "Free Consultation", id: "contact" },
  ];

  const services = [
    { name: "UI/UX Architecture", id: "services" },
    { name: "WhatsApp AI Bot Automation", id: "services" },
    { name: "Secure Payment Gateway Integration", id: "services" },
    { name: "Premium Website Creation", id: "services" },
    { name: "Mobile Application Development", id: "services" },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-slate-900 text-slate-400 font-sans relative overflow-hidden">
      {/* Visual glowing overlay to enhance premium darkness */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-px bg-gradient-to-r from-transparent via-blue-500/40 to-transparent" />
      <div className="absolute -left-40 bottom-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
      <div className="absolute -right-40 top-0 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl" />

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 border-b border-slate-800 pb-16">
          
          {/* Column 1: Brand & Philosophy */}
          <div className="lg:col-span-4 space-y-6">
            <div className="group cursor-pointer" onClick={scrollToTop}>
              <Logo inverse />
            </div>

            <p className="text-sm leading-relaxed text-slate-400">
              Engineering lightning-fast, high-converting digital architectures, automated replies, and payment systems for companies globally.
            </p>
          </div>

          {/* Column 2: Quick Navigation */}
          <div className="lg:col-span-2.5 lg:col-start-6 space-y-6">
            <h4 className="font-display font-bold text-sm tracking-widest text-white uppercase">
              Quick Navigation
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => onNavigate(link.id)}
                    className="text-sm hover:text-white transition-colors cursor-pointer text-left"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Services We Offer */}
          <div className="lg:col-span-2.5 space-y-6">
            <h4 className="font-display font-bold text-sm tracking-widest text-white uppercase">
              Digital Services
            </h4>
            <ul className="space-y-3">
              {services.map((svc, idx) => (
                <li key={idx}>
                  <button
                    onClick={() => onNavigate("services")}
                    className="text-sm hover:text-white transition-colors cursor-pointer text-left"
                  >
                    {svc.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact Information Details */}
          <div className="lg:col-span-3 space-y-6">
            <h4 className="font-display font-bold text-sm tracking-widest text-white uppercase">
              Office Contacts
            </h4>
            
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
                <a
                  href="https://maps.google.com/?q=Vaari+Nagar,+1st+Street,+near+Gowmari+Complex,+Kamayagoundanpatti,+Theni+,+Tamil+Nadu+625521"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  Vaari Nagar, 1st Street, <br />
                  near Gowmari Complex, Kamayagoundanpatti, <br />
                  Theni, Tamil Nadu 625521
                </a>
              </li>
              
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-blue-500 shrink-0" />
                <a href="tel:7806908543" className="hover:text-white transition-colors">
                  +91 78069 08543
                </a>
              </li>

              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-rose-500 shrink-0" />
                <a href="mailto:Visalkalvi@gmail.com" className="hover:text-white transition-colors break-all">
                  Visalkalvi@gmail.com
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Footer Bottom Meta Row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-8 mt-4 text-xs font-medium">
          <p className="text-slate-500">
            © 2026 Visal Digital Solutions. All Rights Reserved.
          </p>
          
          <div className="flex items-center gap-6 text-slate-500">
            <span className="hover:text-white cursor-pointer transition-colors" onClick={() => onNavigate("contact")}>
              Free Consultation Roadmap
            </span>
            <span>•</span>
            <span className="hover:text-white cursor-pointer transition-colors" onClick={() => onNavigate("services")}>
              Services Level Agreement
            </span>
          </div>

          <button
            id="back-to-top"
            onClick={scrollToTop}
            className="w-10 h-10 rounded-xl bg-slate-800 hover:bg-blue-600 text-slate-400 hover:text-white flex items-center justify-center transition-all cursor-pointer shadow-md"
            aria-label="Back to Top"
          >
            <ArrowUp className="w-4 h-4 animate-bounce" />
          </button>
        </div>
      </div>
    </footer>
  );
}
