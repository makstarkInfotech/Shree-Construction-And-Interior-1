import { Menu, X } from "lucide-react";
import { useState } from "react";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Portfolio", href: "#portfolio" },
    { label: "Reviews", href: "#reviews" },
    { label: "Contact", href: "#contact" },
  ];

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-[var(--color-border)]">
      <div className="container-custom">
        <div className="flex items-center justify-between h-[80px]">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-[8px]">
            <div className="w-[40px] h-[40px]  flex items-center justify-center">
              <span className="text-white"><img 
              src="https://ik.imagekit.io/shree1nterior/Shree%20Interior/shree%20construction%201%20logo.png" 
              alt="Shree Construction & Interior Logo"/></span>
            </div>
            <div className="flex flex-col">
              <span className="script-accent text-[var(--color-accent)]" style={{ fontSize: "20px", lineHeight: "1" , fontFamily: "Gotham" ,fontStyle: 'Bold', fontWeight: '1000' }}>
                Shree
              </span>
              <span style={{ fontSize: "15px", lineHeight: "0.7", color: "var(--color-text-secondary)" , fontFamily: "Gotham" ,fontStyle: 'Bold', fontWeight: '1000' }}>
                Construction & Interior
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-[40px]">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="transition-colors hover:text-[var(--color-accent)]"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA Button (Desktop) */}
          <a
            href="#contact"
            className="hidden md:block px-[32px] py-[12px] bg-[var(--color-accent)] text-white rounded-[8px] transition-all hover:bg-[var(--color-accent-light)]"
          >
            Get Quote
          </a>

          {/* Mobile Menu Toggle */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-[8px] hover:bg-[var(--color-background-light)] rounded-[8px] transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-[24px] border-t border-[var(--color-border)]">
            <div className="flex flex-col gap-[24px]">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={toggleMenu}
                  className="transition-colors hover:text-[var(--color-accent)]"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={toggleMenu}
                className="px-[32px] py-[12px] bg-[var(--color-accent)] text-white rounded-[8px] transition-all hover:bg-[var(--color-accent-light)] text-center"
              >
                Get Quote
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
