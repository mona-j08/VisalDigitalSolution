/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Header from "./components/Header";
import Hero from "./components/Hero";
import CEO from "./components/CEO";
import Services from "./components/Services";
import WhyChooseUs from "./components/WhyChooseUs";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  // Seamless anchor navigation with header offset correction
  const handleNavigate = (sectionId: string) => {
    const targetElement = document.getElementById(sectionId);
    if (targetElement) {
      const header = document.getElementById("app-header");
      const offset = header ? header.offsetHeight : 70;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = targetElement.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="relative min-h-screen antialiased" style={{ background: "#F8FAFC", color: "#1F2937" }}>
      {/* Sticky Header */}
      <Header onNavigate={handleNavigate} />

      {/* Main Single-Page Stack */}
      <main className="relative">
        {/* Hero Section */}
        <Hero onNavigate={handleNavigate} />

        {/* Meet the CEO Storytelling Section */}
        <CEO onNavigate={handleNavigate} />

        {/* Services Section */}
        <Services onNavigate={handleNavigate} />

        {/* Why Choose Us Section */}
        <WhyChooseUs />

        {/* Contact & Google Form Section */}
        <Contact />
      </main>

      {/* Footer Details */}
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}

