export default function About() {
  return (
    <section className="w-full py-14 sm:py-18  ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16">

        {/* SECTION TITLE */}
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-4xl md:text-6xl font-bold  text-gold-gradient
" >
            About Tambaram Promoters
          </h2>
          <p className="mt-3 text-sm sm:text-base text-gray-600 max-w-3xl mx-auto text-gold-gradient ">
            Trusted real estate solutions for land, houses, apartments, villas, 
            and individual plots in and around Tambaram.
          </p>
        </div>

        {/* CONTENT GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">

          {/* LEFT CONTENT */}
          <div className="space-y-5 text-white leading-relaxed">
            <p>
              <strong className="text-green-700">Tambaram Promoters</strong> is a
              reliable real estate development and marketing company specializing
              in <strong>land, houses, apartments, villas, and individual plots</strong>.
              We operate primarily in and around the rapidly developing
              Tambaram region, one of Chennai’s most promising growth corridors.
            </p>

            <p>
              Our projects include <strong>well-planned residential and commercial
              plots</strong> located in fast-developing areas with excellent
              infrastructure, wide road access, and easy connectivity to
              schools, colleges, hospitals, IT hubs, and transportation networks.
            </p>

            <p>
              We carefully select every project to ensure
              <strong> high appreciation value</strong>, long-term investment
              security, and suitability for both home buyers and investors.
            </p>
          </div>

          {/* RIGHT CONTENT */}
          <div className="space-y-6">
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-green-700 mb-3">
                What Makes Us Different
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li>✔️ Clear title & legally verified properties</li>
                <li>✔️ DTCP / CMDA approved layouts</li>
                <li>✔️ Bank loan support available</li>
                <li>✔️ Transparent pricing & documentation</li>
                <li>✔️ Guidance from site visit to registration</li>
              </ul>
            </div>

            <div className="bg-green-700 text-white rounded-xl p-6">
              <h3 className="text-lg font-semibold mb-3">
                Our Commitment
              </h3>
              <p className="text-sm leading-relaxed">
                At Tambaram Promoters, we believe in honesty, transparency, and
                long-term relationships. Our customer-first approach ensures
                that every buyer receives professional guidance, complete legal
                clarity, and peace of mind throughout the purchase journey.
              </p>
            </div>
          </div>
        </div>

        {/* BOTTOM HIGHLIGHTS */}
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
      className="
        relative overflow-hidden
        rounded-lg py-3
        text-base font-medium cursor-pointer
        transition-all duration-300
        hover:scale-105

        /* NORMAL STATE */
        bg-[linear-gradient(90deg,#8F6B2D_0%,#C9A44C_40%,#E6C76A_60%,#8F6B2D_100%)]
        text-green-800

        /* HOVER STATE */
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

      {/* TEXT */}
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
