import { CheckCircle2 } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function About() {
  const features = [
    "Expert craftsmanship with 15+ years of experience",
    "Premium quality materials and sustainable practices",
    "On-time delivery and budget-friendly solutions",
    "Comprehensive design consultation and support",
  ];

  return (
    <section id="about" className="py-[80px] md:py-[120px] bg-white">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-[48px] md:gap-[64px] items-center">
          {/* Left Image */}
          <div className="order-2 md:order-1">
            <div className="relative">
              <div className="aspect-[4/3] rounded-[16px] overflow-hidden shadow-[var(--shadow-xl)]">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1626233558206-28a3e90ef311?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25zdHJ1Y3Rpb24lMjBidWlsZGluZyUyMHNpdGV8ZW58MXx8fHwxNzYzMTg1MTc1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Construction site showing our work"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative Accent */}
              <div className="absolute -top-[24px] -left-[24px] w-[160px] h-[160px] bg-[var(--color-accent)] opacity-10 rounded-[16px] -z-10 hidden md:block" />
            </div>
          </div>

          {/* Right Content */}
          <div className="flex flex-col gap-[32px] order-1 md:order-2">
            <div className="flex flex-col gap-[16px]">
              <span className="script-accent text-[var(--color-accent)]" style={{ fontSize: "24px" }}>
                About Us
              </span>
              <h2 className="text-[var(--color-primary)]">
                Crafting Excellence in Every Project
              </h2>
              <p className="text-[var(--color-text-secondary)]">
                At Shree Construction & Interior, we believe that every space tells a story. With over 15 years of industry experience, we've transformed countless residential and commercial spaces into stunning realities that exceed our clients' expectations.
              </p>
              <p className="text-[var(--color-text-secondary)]">
                Our team of skilled professionals combines innovative design with meticulous execution, ensuring that every project reflects quality craftsmanship and attention to detail. From concept to completion, we're committed to bringing your vision to life.
              </p>
            </div>

            {/* Feature List */}
            <div className="flex flex-col gap-[16px]">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-[12px]">
                  <CheckCircle2 
                    size={24} 
                    className="text-[var(--color-accent)] flex-shrink-0 mt-[2px]"
                  />
                  <p className="text-[var(--color-text-primary)]">
                    {feature}
                  </p>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div>
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-[32px] py-[16px] bg-[var(--color-accent)] text-white rounded-[8px] transition-all hover:bg-[var(--color-accent-light)]"
              >
                Learn More About Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
