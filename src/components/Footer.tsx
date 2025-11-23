import { Facebook, Instagram, Twitter, Linkedin, Mail, Phone } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Portfolio", href: "#portfolio" },
  ];

  const services = [
    { label: "Painting Services", href: "#services" },
    { label: "Carpentry Works", href: "#services" },
    { label: "Interior Décor", href: "#services" },
    { label: "Electrical Works", href: "#services" },
  ];

  const socialLinks = [
    { icon: <Facebook size={20} />, href: "#", label: "Facebook" },
    { icon: <Instagram size={20} />, href: "#", label: "Instagram" },
    { icon: <Twitter size={20} />, href: "#", label: "Twitter" },
    { icon: <Linkedin size={20} />, href: "#", label: "LinkedIn" },
  ];

  return (
    <footer className="bg-[var(--color-background-dark)] text-white">
      {/* Main Footer Content */}
      <div className="container-custom py-[64px] md:py-[80px]">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-[48px]">
          {/* Company Info */}
          <div className="flex flex-col gap-[24px]">
            <a href="#home" className="flex items-center gap-[8px]">
              <div className="w-[40px] h-[40px] flex items-center justify-center"> {/*bg-[var(--color-accent)] rounded-[8px]*/}
               <span className="text-white"><img 
              src="https://ik.imagekit.io/shree1nterior/Shree%20Interior/shree%20construction%201%20logo.png" 
              alt="Shree Construction & Interior Logo"/></span>
              </div>
              <div className="flex flex-col">
                 <span className="script-accent text-[var(--color-accent)]" style={{ fontSize: "20px", lineHeight: "1" , fontFamily: "Gotham" ,fontStyle: 'Bold', fontWeight: '1000' }}>
                Shree
              </span>
              <span style={{ fontSize: "15px", lineHeight: "0.7", color: "var(--color-text-white)" , fontFamily: "Gotham" ,fontStyle: 'Bold', fontWeight: '1000' }}>
                Construction & Interior
              </span>
              </div>
            </a>
            <p style={{ fontSize: "14px", color: "rgba(255, 255, 255, 0.7)" }}>
              Transforming spaces with excellence, quality, and dedication. Your trusted partner for construction and interior design solutions.
            </p>
            {/* Social Links */}
            <div className="flex items-center gap-[12px]">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-[40px] h-[40px] bg-[var(--color-primary-light)] rounded-[8px] flex items-center justify-center transition-all hover:bg-[var(--color-accent)]"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-[24px]">
            <h5 className="text-white">Quick Links</h5>
            <div className="flex flex-col gap-[12px]">
              {quickLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="transition-colors hover:text-[var(--color-accent)]"
                  style={{ fontSize: "14px", color: "rgba(255, 255, 255, 0.7)" }}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div className="flex flex-col gap-[24px]">
            <h5 className="text-white">Services</h5>
            <div className="flex flex-col gap-[12px]">
              {services.map((service, index) => (
                <a
                  key={index}
                  href={service.href}
                  className="transition-colors hover:text-[var(--color-accent)]"
                  style={{ fontSize: "14px", color: "rgba(255, 255, 255, 0.7)" }}
                >
                  {service.label}
                </a>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col gap-[24px]">
            <h5 className="text-white">Contact Us</h5>
            <div className="flex flex-col gap-[16px]">
              <a
                href="tel:+919876543210"
                className="flex items-start gap-[12px] transition-colors hover:text-[var(--color-accent)]"
                style={{ fontSize: "14px", color: "rgba(255, 255, 255, 0.7)" }}
              >
                <Phone size={20} className="flex-shrink-0 mt-[2px]" />
                <span>+91 83348 58726</span>
              </a>
              <a
                href="mailto:info@shreeconstruction.com"
                className="flex items-start gap-[12px] transition-colors hover:text-[var(--color-accent)]"
                style={{ fontSize: "14px", color: "rgba(255, 255, 255, 0.7)" }}
              >
                <Mail size={20} className="flex-shrink-0 mt-[2px]" />
                <span>shreeconstruction66@gmail.com</span>
              </a>
            </div>
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-[24px] py-[12px] bg-[var(--color-accent)] text-white rounded-[8px] transition-all hover:bg-[var(--color-accent-light)]"
              style={{ fontSize: "14px" }}
            >
              Get a Quote
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-[var(--color-primary-light)]">
        <div className="container-custom py-[24px]">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-[16px]">
            <p style={{ fontSize: "14px", color: "rgba(255, 255, 255, 0.7)" }}>
              © {currentYear} Mak Stark. All rights reserved.
            </p>
            <div className="flex items-center gap-[24px]">
               <a
                href="https://makstark.com"
                className="transition-colors hover:text-[var(--color-accent)]"
                style={{ fontSize: "14px", color: "rgba(255, 255, 255, 0.7)" }}
              >
                Creator Info: Mak Stark
              </a>
              <a
                href="/privacy-policy.html"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-[var(--color-accent)]"
                style={{ fontSize: "14px", color: "rgba(255, 255, 255, 0.7)" }}
              >
                Privacy Policy
              </a>
              <a
                href="/terms-of-service.html"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-[var(--color-accent)]"
                style={{ fontSize: "14px", color: "rgba(255, 255, 255, 0.7)" }}
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
