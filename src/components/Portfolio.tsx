import { ImageWithFallback } from "./figma/ImageWithFallback";

interface PortfolioItemProps {
  image: string;
  title: string;
  category: string;
}

function PortfolioItem({ image, title, category }: PortfolioItemProps) {
  return (
    <div className="group relative overflow-hidden rounded-[16px] aspect-[4/3] bg-[var(--color-background-light)]">
      <ImageWithFallback
        src={image}
        alt={title}
        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="absolute bottom-0 left-0 right-0 p-[24px] flex flex-col gap-[8px]">
          <h4 className="text-white">{title}</h4>
          <p className="text-white/80" style={{ fontSize: "14px" }}>
            {category}
          </p>
        </div>
      </div>
    </div>
  );
}

export function Portfolio() {
  const portfolioItems = [
    {
      image: "https://ik.imagekit.io/shree1nterior/Shree%20Interior/WhatsApp%20Image%202025-11-16%20at%208.58.44%20PM.jpeg",
      title: "Modern Living Space",
      category: "Interior Design",
    },
    {
      image: "https://ik.imagekit.io/shree1nterior/Shree%20Interior/WhatsApp%20Image%202025-11-16%20at%209.12.01%20PM.jpeg",
      title: "Modern Living Space",
      category: "Residential",
    },
    {
      image: "https://ik.imagekit.io/shree1nterior/Shree%20Interior/WhatsApp%20Image%202025-11-18%20at%2010.59.01%20AM%20(1).jpeg",
      title: "Contemporary Kitchen",
      category: "Kitchen Design",
    },
    {
      image: "https://ik.imagekit.io/shree1nterior/Shree%20Interior/WhatsApp%20Image%202025-11-16%20at%208.58.51%20PM.jpeg",
      title: "Corporate Workspace",
      category: "Commercial",
    },
    {
      image: "https://ik.imagekit.io/shree1nterior/Shree%20Interior/c.jpeg",
      title: "Complete Renovation",
      category: "Painting & Finishing",
    },
    {
      image: "https://ik.imagekit.io/shree1nterior/Shree%20Interior/WhatsApp%20Image%202025-11-16%20at%209.12.01%20PM.jpeg",
      title: "Elegant Home Décor",
      category: "Styling & Décor",
    },
    {
      image: "https://ik.imagekit.io/shree1nterior/Shree%20Interior/WhatsApp%20Image%202025-11-16%20at%209.12.00%20PM%20(1).jpeg",
      title: "Audio Jam Studio",
      category: "Commercial",
    },
    {
      image: "https://ik.imagekit.io/shree1nterior/Shree%20Interior/WhatsApp%20Image%202025-11-16%20at%208.39.46%20PM.jpeg",
      title: "Modular Kitchen",
      category: "Kitchen and Sink",
    },
    {
      image: "https://ik.imagekit.io/shree1nterior/Shree%20Interior/WhatsApp%20Image%202025-11-16%20at%208.46.36%20PM.jpeg",
      title: "Elegant Studio Décor",
      category: "Styling & Décor",
    },
  ];

  return (
    <section id="portfolio" className="py-[80px] md:py-[120px] bg-white">
      <div className="container-custom">
        {/* Section Header */}
        <div className="flex flex-col gap-[16px] text-center max-w-[640px] mx-auto mb-[64px]">
          <span className="script-accent text-[var(--color-accent)]" style={{ fontSize: "24px" }}>
            Our Portfolio
          </span>
          <h2 className="text-[var(--color-primary)]">
            Showcasing Our Best Work
          </h2>
          <p className="text-[var(--color-text-secondary)]">
            Explore our collection of completed projects that demonstrate our commitment to quality and design excellence.
          </p>
        </div>

        {/* Portfolio Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-[32px]">
          {portfolioItems.map((item, index) => (
            <PortfolioItem
              key={index}
              image={item.image}
              title={item.title}
              category={item.category}
            />
          ))}
        </div>

        {/* View More CTA */}
        <div className="flex justify-center mt-[48px]">
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-[40px] py-[16px] border-2 border-[var(--color-primary)] text-[var(--color-primary)] rounded-[8px] transition-all hover:bg-[var(--color-background-light)]"
          >
            Discuss Your Project
          </a>
        </div>
      </div>
    </section>
  );
}
