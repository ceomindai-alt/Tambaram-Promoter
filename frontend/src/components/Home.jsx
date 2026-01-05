import im from "../assets/img/bgvilla.png";
import im1 from "../assets/img/bgapartment.png";
import im2 from "../assets/img/bgvilla1.png";
import im3 from "../assets/img/bgapartment1.png";

export default function Home() {
  // Mixed Villas + Apartments (high-quality)
  const images = [
    im,im1,im2,im3,
    // Villas
    "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80",
    "https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=1600&q=80",

  ];

  return (
    <section className="w-full overflow-hidden py-10">
      
      {/* TITLE */}
      <h2 className="text-center text-2xl sm:text-3xl md:text-4xl font-bold mb-8 text-gold-gradient">
        Tambaram Land Promoter 
      </h2>

      {/* SLIDER */}
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

      {/* INLINE ANIMATION */}
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
