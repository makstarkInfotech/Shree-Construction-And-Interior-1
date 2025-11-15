import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { useState, FormEvent } from "react";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Mock form submission
    setTimeout(() => {
      alert("Thank you for contacting us! We'll get back to you soon.");
      setFormData({
        name: "",
        email: "",
        phone: "",
        service: "",
        message: "",
      });
      setIsSubmitting(false);
    }, 1000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: <Phone size={24} />,
      label: "Phone",
      value: "+91 98765 43210",
      link: "tel:+919876543210",
    },
    {
      icon: <Mail size={24} />,
      label: "Email",
      value: "info@shreeconstruction.com",
      link: "mailto:info@shreeconstruction.com",
    },
    {
      icon: <MapPin size={24} />,
      label: "Location",
      value: "123 Business Park, Mumbai, India",
      link: "#",
    },
    {
      icon: <Clock size={24} />,
      label: "Working Hours",
      value: "Mon - Sat: 9:00 AM - 6:00 PM",
      link: "#",
    },
  ];

  return (
    <section id="contact" className="py-[80px] md:py-[120px] bg-[var(--color-background-light)]">
      <div className="container-custom">
        {/* Section Header */}
        <div className="flex flex-col gap-[16px] text-center max-w-[640px] mx-auto mb-[64px]">
          <span className="script-accent text-[var(--color-accent)]" style={{ fontSize: "24px" }}>
            Get In Touch
          </span>
          <h2 className="text-[var(--color-primary)]">
            Let's Start Your Project
          </h2>
          <p className="text-[var(--color-text-secondary)]">
            Ready to transform your space? Contact us today for a free consultation and quote.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-[48px] md:gap-[64px]">
          {/* Contact Form */}
          <div className="bg-white p-[32px] md:p-[48px] rounded-[16px] shadow-[var(--shadow-md)]">
            <form onSubmit={handleSubmit} className="flex flex-col gap-[24px]">
              {/* Name */}
              <div className="flex flex-col gap-[8px]">
                <label htmlFor="name" className="text-[var(--color-text-primary)]" style={{ fontWeight: "600" }}>
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="px-[16px] py-[12px] border border-[var(--color-border)] rounded-[8px] focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)] transition-all"
                  placeholder="Enter your full name"
                />
              </div>

              {/* Email */}
              <div className="flex flex-col gap-[8px]">
                <label htmlFor="email" className="text-[var(--color-text-primary)]" style={{ fontWeight: "600" }}>
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="px-[16px] py-[12px] border border-[var(--color-border)] rounded-[8px] focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)] transition-all"
                  placeholder="your.email@example.com"
                />
              </div>

              {/* Phone */}
              <div className="flex flex-col gap-[8px]">
                <label htmlFor="phone" className="text-[var(--color-text-primary)]" style={{ fontWeight: "600" }}>
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="px-[16px] py-[12px] border border-[var(--color-border)] rounded-[8px] focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)] transition-all"
                  placeholder="+91 98765 43210"
                />
              </div>

              {/* Service */}
              <div className="flex flex-col gap-[8px]">
                <label htmlFor="service" className="text-[var(--color-text-primary)]" style={{ fontWeight: "600" }}>
                  Service Required *
                </label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                  className="px-[16px] py-[12px] border border-[var(--color-border)] rounded-[8px] focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)] transition-all bg-white"
                >
                  <option value="">Select a service</option>
                  <option value="painting">Painting Services</option>
                  <option value="carpentry">Carpentry Works</option>
                  <option value="decor">Interior Décor</option>
                  <option value="electrical">Electrical Works</option>
                  <option value="gaming">Gaming Centres</option>
                  <option value="audio">Audio Studios</option>
                  <option value="other">Other</option>
                </select>
              </div>

              {/* Message */}
              <div className="flex flex-col gap-[8px]">
                <label htmlFor="message" className="text-[var(--color-text-primary)]" style={{ fontWeight: "600" }}>
                  Project Details
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="px-[16px] py-[12px] border border-[var(--color-border)] rounded-[8px] focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)] transition-all resize-none"
                  placeholder="Tell us about your project..."
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="px-[32px] py-[16px] bg-[var(--color-accent)] text-white rounded-[8px] transition-all hover:bg-[var(--color-accent-light)] disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="flex flex-col gap-[32px]">
            <div className="flex flex-col gap-[16px]">
              <h3 className="text-[var(--color-primary)]">Contact Information</h3>
              <p className="text-[var(--color-text-secondary)]">
                We're here to help bring your vision to life. Reach out to us through any of the following channels.
              </p>
            </div>

            {/* Contact Cards */}
            <div className="flex flex-col gap-[16px]">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.link}
                  className="flex items-start gap-[16px] p-[24px] bg-white rounded-[12px] border border-[var(--color-border)] transition-all hover:border-[var(--color-accent)] hover:shadow-[var(--shadow-sm)]"
                >
                  <div className="w-[48px] h-[48px] bg-[var(--color-background-light)] rounded-[8px] flex items-center justify-center text-[var(--color-accent)] flex-shrink-0">
                    {info.icon}
                  </div>
                  <div className="flex flex-col gap-[4px]">
                    <span className="text-[var(--color-text-secondary)]" style={{ fontSize: "14px" }}>
                      {info.label}
                    </span>
                    <span className="text-[var(--color-text-primary)]" style={{ fontWeight: "600" }}>
                      {info.value}
                    </span>
                  </div>
                </a>
              ))}
            </div>

            {/* Map Placeholder */}
            <div className="aspect-[16/9] bg-[var(--color-background-light)] rounded-[12px] border border-[var(--color-border)] flex items-center justify-center">
              <MapPin size={48} className="text-[var(--color-text-light)]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
