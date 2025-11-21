import { ArrowRight } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Hero() {
  return (
    <section id="home" className="pt-[160px] pb-[80px] md:pt-[200px] md:pb-[120px] bg-gradient-to-b from-[var(--color-background-light)] to-white">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-[48px] md:gap-[64px] items-center">
          {/* Left Content */}
          <div className="flex flex-col gap-[32px]">
            <div className="flex flex-col gap-[16px]">
              <span className="script-accent text-[var(--color-accent)]" style={{ fontSize: "24px" }}>
                Building Dreams
              </span>
              <h1 className="text-[var(--color-primary)]">
                Decorate your dream <span className="script-accent text-[var(--color-accent)]" style={{ fontStyle: "cursive" }}>
                home.🏡
              </span>
              </h1>
              <p className="text-[var(--color-text-secondary)]" style={{ fontSize: "18px" }}>
                Expert construction and interior design services tailored to bring your vision to life with precision, quality, and style.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-[16px]">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-[8px] px-[32px] py-[16px] bg-[var(--color-primary)] text-white rounded-[8px] transition-all hover:bg-[var(--color-primary-light)]"
              >
                Start Your Project
                <ArrowRight size={20} />
              </a>
              <a
                href="#portfolio"
                className="inline-flex items-center justify-center gap-[8px] px-[32px] py-[16px] border-2 border-[var(--color-primary)] text-[var(--color-primary)] rounded-[8px] transition-all hover:bg-[var(--color-background-light)]"
              >
                View Portfolio
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-[24px] pt-[24px] border-t border-[var(--color-border)]">
              <div className="flex flex-col gap-[4px]">
                <h3 className="text-[var(--color-accent)]">500+</h3>
                <p className="text-[var(--color-text-secondary)]" style={{ fontSize: "14px" }}>
                  Projects
                </p>
              </div>
              <div className="flex flex-col gap-[4px]">
                <h3 className="text-[var(--color-accent)]">15+</h3>
                <p className="text-[var(--color-text-secondary)]" style={{ fontSize: "14px" }}>
                  Years
                </p>
              </div>
              <div className="flex flex-col gap-[4px]">
                <h3 className="text-[var(--color-accent)]">100%</h3>
                <p className="text-[var(--color-text-secondary)]" style={{ fontSize: "14px" }}>
                  Satisfied
                </p>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="aspect-[4/5] rounded-[16px] overflow-hidden shadow-[var(--shadow-xl)]">
              <ImageWithFallback
                src="https://ik.imagekit.io/shree1nterior/Shree%20Interior/WhatsApp%20Image%202025-11-16%20at%208.58.44%20PM.jpeg"
                alt="Modern interior design showcase"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative Accent */}
            <div className="absolute -bottom-[24px] -right-[24px] w-[200px] h-[200px] bg-[var(--color-accent)] opacity-10 rounded-[16px] -z-10 hidden md:block" />
          </div>
        </div>
      </div>
    </section>
  );
}
