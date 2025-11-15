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
                Transform Your Space Into Reality
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
                src="https://images.unsplash.com/photo-1705321963943-de94bb3f0dd3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBpbnRlcmlvciUyMGRlc2lnbiUyMGxpdmluZyUyMHJvb218ZW58MXx8fHwxNzYzMjA0MTU3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
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
