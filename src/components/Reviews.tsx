import { Star } from "lucide-react";

export function Reviews() {
  const reviews = [
    {
      name: "Riddhik Chatterjee",
      rating: 5,
      text: "Had a great experience with Partha and his team! They are very trustworthy and reliable — since I had to go to the office daily, I could easily leave the flat in their hands without any worry. Everyone in the team was well-mannered, punctual, and very professional in their work.Partha also gave ...",
      date: "a week ago",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Rajesh",
    },
    {
      name: "Sunita Bhuiya",
      rating: 5,
      text: "Very good service provided by shree construction & interiors 👌 …",
      date: "2 months ago",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Priya",
    },
    {
      name: "Riya Laha",
      rating: 5,
      text: "Fantastic interior designer and finishing the colour short time ,,,,,,lovely 👍♥️ …",
      date: "2 months ago",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Amit",
    },
    {
      name: "Arjun Bose",
      rating: 5,
      text: "Positive: Responsiveness, Punctuality, Quality, Professionalism, Value",
      date: "3 years ago",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Neha",
    },
  ];

  return (
    <section id="reviews" className="py-[80px] md:py-[120px] bg-white">
      <div className="container-custom">
        {/* Section Header */}
        <div className="flex flex-col gap-[16px] text-center max-w-[640px] mx-auto mb-[64px]">
          <span className="script-accent text-[var(--color-accent)]" style={{ fontSize: "24px" }}>
            What Our Clients Say
          </span>
          <h2 className="text-[var(--color-primary)]">
            Customer Reviews & Testimonials
          </h2>
          <p className="text-[var(--color-text-secondary)]">
            Trusted by hundreds of satisfied clients across Kolkata and surrounding areas.
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-[24px]">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="flex flex-col gap-[16px] p-[24px] bg-[var(--color-background-light)] rounded-[12px] border border-[var(--color-border)] transition-all hover:shadow-[var(--shadow-md)] hover:border-[var(--color-accent)]"
            >
              {/* Rating Stars */}
              <div className="flex items-center gap-[4px]">
                {Array.from({ length: review.rating }).map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className="fill-[var(--color-accent)] text-[var(--color-accent)]"
                  />
                ))}
              </div>

              {/* Review Text */}
              <p className="text-[var(--color-text-secondary)]" style={{ fontSize: "14px", lineHeight: "1.6" }}>
                "{review.text}"
              </p>

              {/* Reviewer Info */}
              <div className="flex items-center gap-[12px] pt-[12px] border-t border-[var(--color-border)]">
                <img
                  src={review.image}
                  alt={review.name}
                  className="w-[40px] h-[40px] rounded-full"
                />
                <div className="flex flex-col gap-[2px]">
                  <span className="text-[var(--color-text-primary)]" style={{ fontWeight: "600", fontSize: "14px" }}>
                    {review.name}
                  </span>
                  <span className="text-[var(--color-text-light)]" style={{ fontSize: "12px" }}>
                    {review.date}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Google Reviews Link */}
        <div className="flex justify-center mt-[48px]">
          <a
            href="https://www.google.com/maps/place/Shree+construction+%26+interior/@22.4633423,88.4170643,18z/data=!4m14!1m7!3m6!1s0x3a0273e9b0ca26b1:0xd562407d45ba68db!2sShree+construction+%26+interior!8m2!3d22.4632704!4d88.4170589!16s%2Fg%2F11hzmsrtq_!3m5!1s0x3a0273e9b0ca26b1:0xd562407d45ba68db!8m2!3d22.4632704!4d88.4170589!16s%2Fg%2F11hzmsrtq_?entry=ttu"
            target="_blank"
            rel="noopener noreferrer"
            className="px-[32px] py-[16px] bg-[var(--color-accent)] text-white rounded-[8px] transition-all hover:bg-[var(--color-accent-light)]"
          >
            View All Reviews on Google
          </a>
        </div>
      </div>
    </section>
  );
}
