export default function Footer() {
  return (
    <footer className="bg-[linear-gradient(180deg,#0F3D2E_0%,#0A2A1F_100%)] text-white">
      <div
        className="
          max-w-7xl mx-auto
          px-4 sm:px-6 md:px-10
          py-8 sm:py-10
          text-center text-gold-gradient
        "
      >
        {/* COPYRIGHT */}
        <p className="text-sm sm:text-base md:text-lg font-medium text-gold-gradient">
          © {new Date().getFullYear()} Tambaram Land Promotor
        </p>

        {/* SERVICES LINE */}
        <p className="mt-2 text-xs sm:text-sm md:text-base">
          Plots • Villas • Flats • Buying & Selling Services
        </p>

        {/* VALUES */}
        <p className="mt-2 text-xs sm:text-sm md:text-base tracking-wide">
          Trust • Loyalty • Prosperity
        </p>
      </div>
    </footer>
  );
}
