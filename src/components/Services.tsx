import { Palette, Hammer, Sparkles, Zap, Gamepad2, Music } from "lucide-react";

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

function ServiceCard({ icon, title, description }: ServiceCardProps) {
  return (
    <div className="flex flex-col gap-[24px] p-[32px] bg-white border border-[var(--color-border)] rounded-[16px] transition-all hover:shadow-[var(--shadow-lg)] hover:border-[var(--color-accent)]">
      <div className="w-[64px] h-[64px] bg-[var(--color-background-light)] rounded-[12px] flex items-center justify-center text-[var(--color-accent)]">
        {icon}
      </div>
      <div className="flex flex-col gap-[8px]">
        <h4 className="text-[var(--color-primary)]">{title}</h4>
        <p className="text-[var(--color-text-secondary)]">
          {description}
        </p>
      </div>
      <a
        href="#contact"
        className="inline-flex items-center gap-[8px] text-[var(--color-accent)] hover:text-[var(--color-accent-light)] transition-colors"
        style={{ fontSize: "14px", fontWeight: "600" }}
      >
        Learn More →
      </a>
    </div>
  );
}

export function Services() {
  const services = [
    {
      icon: <Palette size={32} />,
      title: "Painting Services",
      description: "Professional interior and exterior painting with premium finishes. We use high-quality paints and expert techniques for lasting beauty.",
    },
    {
      icon: <Hammer size={32} />,
      title: "Carpentry Works",
      description: "Custom woodwork and furniture crafted with precision. From built-in cabinets to bespoke furniture, we bring your wooden dreams to life.",
    },
    {
      icon: <Sparkles size={32} />,
      title: "Interior Décor",
      description: "Transform spaces with curated design elements and styling. Our designers create cohesive, beautiful interiors that reflect your personality.",
    },
    {
      icon: <Zap size={32} />,
      title: "Electrical Works",
      description: "Complete electrical installation and maintenance services. Safe, efficient, and compliant with all modern standards and regulations.",
    },
    {
      icon: <Gamepad2 size={32} />,
      title: "Gaming Centres",
      description: "Design and build immersive gaming spaces with optimal layouts. Perfect acoustics, lighting, and ergonomics for ultimate gaming experience.",
    },
    {
      icon: <Music size={32} />,
      title: "Audio Studios",
      description: "Professional audio studio design with soundproofing and acoustics. Complete setup for recording, mixing, and production excellence.",
    },
  ];

  return (
    <section id="services" className="py-[80px] md:py-[120px] bg-[var(--color-background-light)]">
      <div className="container-custom">
        {/* Section Header */}
        <div className="flex flex-col gap-[16px] text-center max-w-[640px] mx-auto mb-[64px]">
          <span className="script-accent text-[var(--color-accent)]" style={{ fontSize: "24px" }}>
            Our Services
          </span>
          <h2 className="text-[var(--color-primary)]">
            Comprehensive Solutions for Every Need
          </h2>
          <p className="text-[var(--color-text-secondary)]">
            From concept to completion, we offer a full range of construction and interior design services to transform your space.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-[32px]">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
