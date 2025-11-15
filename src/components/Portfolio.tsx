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
      image: "https://images.unsplash.com/photo-1705321963943-de94bb3f0dd3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBpbnRlcmlvciUyMGRlc2lnbiUyMGxpdmluZyUyMHJvb218ZW58MXx8fHwxNzYzMjA0MTU3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      title: "Modern Living Space",
      category: "Interior Design",
    },
    {
      image: "https://images.unsplash.com/photo-1625578782042-3f2ad4f42956?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBiZWRyb29tJTIwaW50ZXJpb3J8ZW58MXx8fHwxNzYzMjExMDUwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      title: "Luxury Bedroom Suite",
      category: "Residential",
    },
    {
      image: "https://images.unsplash.com/photo-1682888813795-192fca4a10d9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBraXRjaGVuJTIwZGVzaWdufGVufDF8fHx8MTc2MzEzNzA2M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      title: "Contemporary Kitchen",
      category: "Kitchen Design",
    },
    {
      image: "https://images.unsplash.com/photo-1703355685722-2996b01483be?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvZmZpY2UlMjBpbnRlcmlvciUyMHdvcmtzcGFjZXxlbnwxfHx8fDE3NjMyMjk5MTR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      title: "Corporate Workspace",
      category: "Commercial",
    },
    {
      image: "https://images.unsplash.com/photo-1599619585752-c3edb42a414c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob21lJTIwcmVub3ZhdGlvbiUyMHBhaW50aW5nfGVufDF8fHx8MTc2MzIxNTUzOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      title: "Complete Renovation",
      category: "Painting & Finishing",
    },
    {
      image: "https://images.unsplash.com/photo-1728531274680-c8ed96662f0f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwaG9tZSUyMGRlY29yfGVufDF8fHx8MTc2MzIzMDgzN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      title: "Elegant Home Décor",
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
