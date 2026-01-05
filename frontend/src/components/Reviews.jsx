import React from "react";
import { FaStar } from "react-icons/fa";

export default function Reviews() {
  const reviews = [
    {
      name: "Suresh Kumar",
      rating: 5,
      comment:
        "Very transparent and trustworthy land promoters. All documents were clear and the registration process was smooth.",
    },
    {
      name: "Priya S",
      rating: 5,
      comment:
        "From site visit to registration, the team guided us clearly. Honest pricing and good locations.",
    },
    {
      name: "Vignesh Real Estates",
      rating: 4,
      comment:
        "Professional approach and well-planned layouts. Overall good experience with Tambaram Land Promoters.",
    },
    {
      name: "Ramesh B",
      rating: 5,
      comment:
        "No hidden charges. Proper documentation and timely support throughout the buying process.",
    },
    {
      name: "Anitha M",
      rating: 4,
      comment:
        "Customer support was helpful and responsive. Site was exactly as shown during visit.",
    },
  ];

  const avgRating =
    reviews.reduce((a, b) => a + b.rating, 0) / reviews.length;

  return (
    <section
      id="reviews"
      className="
        w-full py-20 px-4 md:px-10
      ">
      {/* ===== SEO REVIEW SCHEMA ===== */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "Tambaram Land Promoters",
            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: avgRating.toFixed(1),
              reviewCount: reviews.length,
            },
            review: reviews.map((r) => ({
              "@type": "Review",
              author: { "@type": "Person", name: r.name },
              reviewRating: {
                "@type": "Rating",
                ratingValue: r.rating,
                bestRating: "5",
              },
              reviewBody: r.comment,
            })),
          }),
        }}
      />

      {/* ===== TITLE ===== */}
      <h2 className="text-center text-3xl md:text-4xl font-bold mb-4 text-gold-gradient">
        Customer Reviews
      </h2>

      <p className="text-center text-green-200 max-w-2xl mx-auto mb-12">
        Trusted by customers across Tambaram for transparent land deals and
        quality developments.
      </p>

      {/* ===== SLIDER ===== */}
      <div className="relative overflow-hidden">
        <div
          className="
            flex gap-6
            animate-review-scroll
            hover:[animation-play-state:paused]
            will-change-transform
          "
        >
          {[...reviews, ...reviews].map((item, index) => (
            <div
              key={index}
              className="
                min-w-[260px]
                sm:min-w-[300px]
                md:min-w-[340px]
                bg-white/95 backdrop-blur
                rounded-xl p-6 shadow-xl
                transition-all duration-300
                hover:-translate-y-2
                flex-shrink-0
              "
            >
              {/* Name */}
              <h3 className="text-lg font-semibold text-green-900 mb-1">
                {item.name}
              </h3>

              {/* Rating */}
              <div className="flex items-center mb-3">
                {[...Array(item.rating)].map((_, i) => (
                  <FaStar key={i} className="text-yellow-500 text-sm" />
                ))}
              </div>

              {/* Comment */}
              <p className="text-gray-700 text-sm leading-relaxed">
                {item.comment}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* ===== ANIMATION CSS ===== */}
      <style>
        {`
          @keyframes review-scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }

          .animate-review-scroll {
            animation: review-scroll 22s linear infinite;
          }
        `}
      </style>
    </section>
  );
}
