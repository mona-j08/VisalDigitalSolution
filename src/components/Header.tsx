import { useState, useEffect } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import Logo from "./Logo";

interface HeaderProps {
  onNavigate: (sectionId: string) => void;
}

export default function Header({ onNavigate }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", id: "home" },
    { name: "Meet the CEO", id: "ceo" },
    { name: "Services", id: "services" },
    { name: "Why Us", id: "why-us" },
    { name: "Contact", id: "contact" },
  ];

  const handleItemClick = (id: string) => {
    setIsOpen(false);
    onNavigate(id);
  };

  return (
    <header
      id="app-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/80 backdrop-blur-md shadow-sm border-b border-slate-100/80 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div
            id="header-logo"
            className="cursor-pointer group"
            onClick={() => handleItemClick("home")}
          >
            <Logo />
          </div>

          {/* Desktop Navigation */}
          <nav id="desktop-nav" className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                id={`nav-link-${item.id}`}
                onClick={() => handleItemClick(item.id)}
                className="font-sans font-medium text-sm text-slate-600 hover:text-blue-600 transition-colors cursor-pointer relative py-1 group"
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full" />
              </button>
            ))}
          </nav>

          {/* Right side CTA Button */}
          <div className="hidden md:flex items-center gap-4">
            <button
              id="cta-get-started"
              onClick={() => handleItemClick("contact")}
              className="font-sans font-semibold text-sm bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-xl flex items-center gap-1.5 transition-all duration-200 shadow-md shadow-blue-100 hover:shadow-lg hover:shadow-blue-200 hover:-translate-y-0.5"
            >
              Get Started
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden">
            <button
              id="mobile-menu-toggle"
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-700 hover:text-blue-600 p-2 rounded-lg hover:bg-slate-50 transition-colors"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-nav-drawer"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-white border-b border-slate-100 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  id={`mobile-nav-link-${item.id}`}
                  onClick={() => handleItemClick(item.id)}
                  className="block w-full text-left font-sans font-medium text-base text-slate-700 hover:text-blue-600 hover:bg-blue-50/50 px-4 py-3 rounded-xl transition-all"
                >
                  {item.name}
                </button>
              ))}
              <div className="pt-4 px-4">
                <button
                  id="mobile-cta-get-started"
                  onClick={() => handleItemClick("contact")}
                  className="w-full text-center font-sans font-semibold text-sm bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl flex items-center justify-center gap-1.5 transition-all shadow-md shadow-blue-100"
                >
                  Get Started
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
