const openWhatsApp = (category) => {
  const phoneNumber = "919003850348"; // WhatsApp number (no +)
  const message = `
Hello Tambaram Land Promotor 👋

I am interested in:
🏡 Property Type: ${category}
  `;
  const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank");
};

export default function About() {
  return (
    <section className="w-full py-14 sm:py-18">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16">

        {/* ================= SECTION TITLE ================= */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-3xl md:text-4xl font-bold text-gold-gradient">
            About Tambaram Promoter
          </h2>

          <p className="mt-4 text-base sm:text-base max-w-3xl mx-auto text-gold-gradient">
            Trusted real estate solutions for land, houses, apartments, villas,
            and individual plots in and around Tambaram.
          </p>
        </div>

        {/* ================= CONTENT GRID ================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">

          {/* ================= LEFT CONTENT ================= */}
          <div className="space-y-5 text-white leading-relaxed text-base">
            <p>
              <strong className="text-green-700">
                Tambaram Promoter
              </strong>{" "}
              is a reliable real estate development and marketing company
              specializing in{" "}
              <strong>
                land, houses, apartments, villas, and individual plots
              </strong>{" "}
              across the rapidly developing Tambaram region.
            </p>

            <p>
              Our projects include{" "}
              <strong>well-planned residential and commercial plots</strong>{" "}
              located in fast-growing areas with excellent infrastructure, wide
              road access, and seamless connectivity to schools, hospitals, IT
              hubs, and transport networks.
            </p>

            <p>
              Every project is carefully selected to ensure{" "}
              <strong>high appreciation value</strong>, long-term investment
              security, and suitability for both home buyers and investors.
            </p>

            <p>
              With strong local market expertise, we help customers identify
              opportunities that deliver{" "}
              <strong>future security and peace of mind</strong>.
            </p>
          </div>

          {/* ================= RIGHT CONTENT ================= */}
          <div className="space-y-6">

            {/* WHAT MAKES US DIFFERENT */}
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-green-700 mb-3">
                What Makes Us Different
              </h3>

              <ul className="space-y-2 text-gray-700 text-sm sm:text-base">
                <li>✔ Clear title & legally verified properties</li>
                <li>✔ DTCP / CMDA approved layouts</li>
                <li>✔ Bank loan support available</li>
                <li>✔ Transparent pricing & documentation</li>
                <li>✔ Guidance from site visit to registration</li>
              </ul>
            </div>

            {/* OUR COMMITMENT */}
            <div className="bg-green-700 text-white rounded-xl p-6 text-center">
              <h3 className="text-lg font-semibold mb-3">
                Our Commitment
              </h3>

              <p className="text-sm sm:text-base leading-relaxed text-green-100">
                At Tambaram Promoters, we believe in honesty, transparency, and
                long-term relationships. Our customer-first approach ensures
                complete legal clarity and professional guidance throughout the
                buying journey.
              </p>

              <p className="mt-4 text-sm sm:text-base font-semibold tracking-wide">
                Trust • Loyalty • Prosperity
              </p>
            </div>
          </div>
        </div>

        {/* ================= SERVICE HIGHLIGHTS ================= */}
        <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 text-center">
          {[
            "Residential Plots",
            "Commercial Plots",
            "Villas",
            "Apartments",
            "Individual Houses",
            "Land Investment",
          ].map((item, index) => (
            <div
              key={index}
              onClick={() => openWhatsApp(item)}
              className="
                relative overflow-hidden
                rounded-lg py-3
                text-base font-medium cursor-pointer
                transition-all duration-300
                hover:scale-105

                bg-[linear-gradient(90deg,#8F6B2D_0%,#C9A44C_40%,#E6C76A_60%,#8F6B2D_100%)]
                text-green-800

                hover:bg-white
                hover:text-green-700
                shadow-md
              "
            >
              {/* SHIMMER EFFECT */}
              <span
                className="
                  absolute inset-0
                  bg-[linear-gradient(120deg,transparent,rgba(255,255,255,0.45),transparent)]
                  animate-shimmer
                "
              />

              <span className="relative z-10">
                {item}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
