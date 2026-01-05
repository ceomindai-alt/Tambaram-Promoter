import im from "../assets/img/bgvilla.png";
import im1 from "../assets/img/bgapartment.png";
import im2 from "../assets/img/bgvilla1.png";
import im3 from "../assets/img/bgapartment1.png";
import log from "../assets/img/log.png";

export default function Home() {
  // Mixed Villas + Apartments (high-quality)
  const images = [
    im,
    im1,
    im2,
    im3,
    "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80",
    "https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=1600&q=80",
  ];

  return (
    <section className="w-full overflow-hidden py-10 ">

 

      {/* ================= IMAGE SLIDER ================= */}
      <div className="relative w-full overflow-hidden">
        <div className="slider-track flex gap-6 items-center">
          {[...images, ...images].map((img, index) => (
            <div
              key={index}
              className="
                flex-shrink-0
                w-[260px] h-[180px]
                sm:w-[320px] sm:h-[380px]
                md:w-[420px] md:h-[380px]
                lg:w-[720px] lg:h-[640px]
                rounded-2xl overflow-hidden shadow-xl
              "
            >
              <img
                src={img}
                alt={`Property ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      {/* ================= HOME INTRO CONTENT ================= */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 mb-10 text-center mt-10">
        <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-white mb-4 text-gold-gradient">
          Complete Real Estate Solution in Tambaram
        </h3>

        <p className="text-gray-300 text-base sm:text-base leading-relaxed mb-4">
          Property purchase is not just a transaction — it is a long-term decision.
          At <strong>Tambaram Land Promotor</strong>, we ensure every customer gets
          <strong> legal clarity, location advantage, and future value</strong>.
        </p>

        <p className="text-gray-300 text-base sm:text-base leading-relaxed mb-4">
          We assist customers who want to:
        </p>
      </div>

      {/* ================= SHIMMER VALUE CARDS (ADDED) ================= */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 mb-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-center">
          {[
            "Buy Plots, Villas, or Flats in Tambaram",
            "Sell Land, Houses, or Apartments at the right Market Price",
            "Invest in high-appreciation Real Estate",
          ].map((text, index) => (
            <div
              key={index}
              className="
                relative overflow-hidden
                rounded-2xl
                px-6 py-6
                font-semibold
                text-base sm:text-base
                text-green-900
                shadow-xl
                bg-[linear-gradient(90deg,#8F6B2D_0%,#C9A44C_40%,#E6C76A_60%,#8F6B2D_100%)]
                transition-transform duration-300
                hover:scale-[1.03]
              "
            >
              {/* SHIMMER */}
              <span
                className="
                  absolute inset-0
                  bg-[linear-gradient(120deg,transparent,rgba(255,255,255,0.6),transparent)]
                  animate-shimmer
                "
              />

              <span className="relative z-10 flex items-center justify-center gap-2">
                <span className="text-green-700 text-lg">✔</span>
                {text}
              </span>
            </div>
          ))}
        </div>

        <p className="text-white font-semibold text-base sm:text-base text-center mt-8">
          Our goal is to deliver safe, transparent, and stress-free property transactions.
        </p>
      </div>
      {/* ================= END SHIMMER VALUE CARDS ================= */}

      

      {/* ================= ANIMATIONS ================= */}
      <style>{`
        .slider-track {
          width: max-content;
          animation: scroll-left 40s linear infinite;
        }

        @keyframes scroll-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

      `}</style>
    </section>
  );
}
