import buyerImg from "../assets/img/buyer.png";
import sellerImg from "../assets/img/seller.png";
import legalImg from "../assets/img/legal.png";
import investImg from "../assets/img/invest.png";

const openWhatsApp = (serviceType) => {
  const phoneNumber = "919003850348"; // no +
  const message = `
Hello Tambaram Land Promoter 👋

I am interested in your service:

📌 Service Type: ${serviceType}

Please share more details and site visit availability.
  `;
  const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank");
};

export default function Service() {
  return (
    <section
      id="services"
      className="py-20 px-4 sm:px-6 lg:px-16"
    >
      {/* ================= HEADER ================= */}
      <div className="text-center max-w-4xl mx-auto mb-16 animate-fade-down">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-wide text-gold-gradient">
          OUR SERVICES & PROCESS
        </h2>
        <p className="mt-3 text-gold-gradient
         text-base sm:text-lg">
          End-to-End Support for Buyers & Sellers in Tambaram
        </p>
      </div>

      {/* ================= PROCESS TITLE ================= */}
      <div className="flex items-center justify-center gap-4 mb-14 animate-fade-up">
        <span className="flex-1 border-t border-dotted border-gray-400 max-w-[140px]" />
        <h3 className="text-lg sm:text-xl font-semibold text-gold-gradient">
          HOW OUR PROCESS WORKS
        </h3>
        <span className="flex-1 border-t border-dotted border-gray-400 max-w-[140px]" />
      </div>

      {/* ================= BUYER / SELLER CARDS ================= */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 mb-24">
        
        {/* ================= BUYERS ================= */}
        <div className="bg-white rounded-2xl shadow-md h-full animate-fade-up hover:-translate-y-1 transition-all duration-300">
          <div className="grid grid-cols-1 sm:grid-cols-2 h-full">
            
            {/* CONTENT */}
            <div className="p-8 flex flex-col justify-between">
              <div>
                <h4 className="text-2xl font-bold text-green-900 mb-4">
                  👤 For Buyers
                </h4>

                <ul className="space-y-3 text-gray-800 text-sm sm:text-base">
                  <li>✔ Requirement discussion</li>
                  <li>✔ Property shortlisting</li>
                  <li>✔ Site visit</li>
                  <li>✔ Price negotiation</li>
                  <li>✔ Loan & legal support</li>
                  <li>✔ Registration completion</li>
                </ul>
              </div>

              <div className="flex justify-center">
    <button
      onClick={() => openWhatsApp("Buyer Services")}
      className="
        relative overflow-hidden
        mt-4
        px-6 sm:px-8
        py-2.5 sm:py-3
        text-sm sm:text-base md:text-lg
        font-semibold
        text-[#0F3D2E]
        rounded-lg
        bg-[linear-gradient(90deg,#C9A44C,#E6C76A)]
        shadow-md
        transition-transform duration-300
        active:scale-95
      "
    >
      {/* BUTTON SHINE */}
      <span
        className="
          absolute inset-0
          bg-[linear-gradient(120deg,transparent,rgba(255,255,255,0.6),transparent)]
          animate-shimmer
        "
      />

      <span className="relative z-10">
        Book Site Visit
      </span>
    </button>
  </div>
            </div>

            {/* IMAGE */}
            <div className="flex items-center justify-center p-6">
              <img
                src={buyerImg}
                alt="Buyer Process"
                className="max-w-[360px] w-full object-contain transition-transform duration-500 hover:scale-105"
              />
            </div>
          </div>
        </div>

        {/* ================= SELLERS ================= */}
        <div
          className="bg-white rounded-2xl shadow-md h-full animate-fade-up hover:-translate-y-1 transition-all duration-300"
          style={{ animationDelay: "0.15s" }}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 h-full">
            
            {/* CONTENT */}
            <div className="p-8 flex flex-col justify-between">
              <div>
                <h4 className="text-2xl font-bold text-green-900 mb-4">
                  🏠 For Sellers
                </h4>

                <ul className="space-y-3 text-gray-800 text-sm sm:text-base">
                  <li>✔ Property evaluation</li>
                  <li>✔ Market price guidance</li>
                  <li>✔ Buyer sourcing</li>
                  <li>✔ Negotiation & closure</li>
                  <li>✔ Registration assistance</li>
                </ul>
              </div>

              <div className="flex justify-center">
    <button
      onClick={() => openWhatsApp("Seller Services")}
      className="
        relative overflow-hidden
        mt-4
        px-6 sm:px-8
        py-2.5 sm:py-3
        text-sm sm:text-base md:text-lg
        font-semibold
        text-[#0F3D2E]
        rounded-lg
        bg-[linear-gradient(90deg,#C9A44C,#E6C76A)]
        shadow-md
        transition-transform duration-300
        active:scale-95
      "
    >
      {/* BUTTON SHINE */}
      <span
        className="
          absolute inset-0
          bg-[linear-gradient(120deg,transparent,rgba(255,255,255,0.6),transparent)]
          animate-shimmer
        "
      />

      <span className="relative z-10">
        Book Site Visit
      </span>
    </button>
  </div>
            </div>

            {/* IMAGE */}
            <div className="flex items-center justify-center p-6">
              <img
                src={sellerImg}
                alt="Seller Process"
                className="max-w-[360px] w-full object-contain transition-transform duration-500 hover:scale-105"
              />
            </div>
          </div>
        </div>
      </div>

      {/* ================= LEGAL & LOAN SUPPORT ================= */}
      <div className="max-w-7xl mx-auto bg-[#dfe8d9] rounded-2xl p-10 mb-24 animate-slide-left">
        <div className="flex items-center justify-center gap-4 mb-10">
          <span className="flex-1 border-t border-dotted border-gray-500 max-w-[140px]" />
          <h3 className="text-xl font-semibold text-green-900">
            LEGAL & LOAN SUPPORT
          </h3>
          <span className="flex-1 border-t border-dotted border-gray-500 max-w-[140px]" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          
          {/* IMAGE */}
          <div className="flex justify-center">
            <img
                src={legalImg}
                alt="Seller Process"
                className="max-w-[360px] w-full object-contain transition-transform duration-500 hover:scale-105"
              />
          </div>

          {/* CONTENT */}
          <div>
            <p className="mb-4 text-green-900 font-medium">
              We provide complete assistance for:
            </p>

            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-gray-800 text-sm sm:text-base">
              <li>✔ Title verification</li>
              <li>✔ EC & Patta check</li>
              <li>✔ Approved layout confirmation</li>
              <li>✔ Bank loan processing</li>
              <li>✔ Registration coordination</li>
            </ul>

            <p className="mt-6 text-green-900 font-semibold">
              Your property transaction remains safe, legal, and transparent.
            </p>
          </div>
        </div>
      </div>

      {/* ================= WHY INVEST ================= */}
      <div className="max-w-7xl mx-auto bg-white rounded-2xl shadow-md overflow-hidden animate-slide-right">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
          
          {/* CONTENT */}
          <div className="p-10">
            <h3 className="text-xl sm:text-2xl font-semibold text-green-900 mb-4">
              WHY INVEST IN TAMBARAM?
            </h3>

            <p className="text-gray-700 mb-4">
              Tambaram is one of Chennai’s fastest-growing real estate zones due to:
            </p>

            <ul className="space-y-2 text-gray-800 text-sm sm:text-base">
              <li>✔ Excellent road & rail connectivity</li>
              <li>✔ Proximity to airport & IT corridors</li>
              <li>✔ High residential & rental demand</li>
              <li>✔ Rapid infrastructure development</li>
            </ul>

            <p className="mt-6 text-green-900 font-semibold">
              Buying plots, villas, or flats in Tambaram ensures long-term
              appreciation and financial security.
            </p>
          </div>

          {/* IMAGE */}
          <div className="flex justify-center p-6">
            <img
              src={investImg}
              alt="Invest in Tambaram"
              className="max-w-[360px] w-full object-cover rounded-xl transition-transform duration-500 hover:scale-[1.02]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
