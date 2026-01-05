import rayappa from "../assets/projects/r1.png";
import grNagar from "../assets/projects/r2.png";
import kanna from "../assets/projects/r3.png";

/* ================= WHATSAPP HANDLER ================= */
const openWhatsApp = (project) => {
  const phoneNumber = "919003850348"; // no +
  const message = `
Hello Tambaram Land Promoter 👋

I am interested in the following project:

🏡 Project: ${project.name}
📌 Type: ${project.tag}
💰 Offer Price: ${project.price.offer}

Please share more details and site visit availability.
  `;
  const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank");
};

export default function Project() {
  const projects = [
    {
      name: "Rayappa Nagar",
      tag: "Residential & Commercial Plots",
      image: rayappa,
      description:
        "Well-planned residential and commercial plots in a fast-developing zone near Tambaram with excellent connectivity and high appreciation.",
      highlights: [
        "4 km from Tambaram",
        "4 km from Kilambakkam Bus Stand",
        "500 m from bus stand",
        "60 & 40 Feet Road access",
      ],
      plotDetails: [
        "Plot No: 1189",
        "1189A – 960 sq.ft (Corner)",
        "1189B – 880 sq.ft",
        "North-facing approved plots",
      ],
      price: {
        market: "₹3,500 / sq.ft",
        offer: "₹3,200 / sq.ft (Negotiable)",
      },
    },
    {
      name: "GR Nagar",
      tag: "Commercial & Residential Plot",
      image: grNagar,
      description:
        "High-value commercial and residential plot close to Tambaram with strong road access and essential infrastructure.",
      highlights: [
        "3.5 km from Tambaram",
        "5 km from Kilambakkam Bus Stand",
        "25 Feet Road",
        "Near schools & hospitals",
      ],
      plotDetails: [
        "Plot No: 11",
        "2130 sq.ft",
        "South-facing plot",
      ],
      price: {
        market: "₹4,500 / sq.ft",
        offer: "₹3,600 / sq.ft (Negotiable)",
      },
    },
    {
      name: "Kannathasan Nagar",
      tag: "Investment Plot",
      image: kanna,
      description:
        "Ideal investment plot with excellent future appreciation near airport and major transport hubs.",
      highlights: [
        "3.5 km from Tambaram",
        "10 mins from Kilambakkam",
        "10 mins from Chennai Airport",
        "500 m from bus stand",
      ],
      plotDetails: [
        "Plot No: 12",
        "1800 sq.ft",
        "North-facing plot",
      ],
      price: {
        market: "₹4,500 / sq.ft",
        offer: "₹3,300 / sq.ft (Negotiable)",
      },
    },
  ];

  return (
    <section className="w-full py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16">

        {/* SECTION HEADER */}
        <div className="text-center mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gold-gradient">
            PROJECTS – PLOTS FOR SALE IN TAMBARAM
          </h2>
          <p className="mt-3 text-green-700 font-medium">
            Premium Residential & Commercial Land Opportunities
          </p>
        </div>

        {/* PROJECT CARDS */}
        <div className="space-y-16">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-xl overflow-hidden transition-all duration-300 hover:-translate-y-1"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2">

                {/* IMAGE */}
                <div className="relative h-64 sm:h-72 lg:h-full">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/25" />
                  <div className="absolute bottom-4 left-4">
                    <span className="bg-white/90 text-green-800 text-xs font-semibold px-3 py-1 rounded-full">
                      {project.tag}
                    </span>
                  </div>
                </div>

                {/* CONTENT */}
                <div className="p-6 sm:p-8 flex flex-col justify-between">

                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-green-800 mb-2">
                      🏡 {project.name}
                    </h3>

                    <p className="text-gray-600 mb-4">
                      {project.description}
                    </p>

                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-gray-700 mb-5">
                      {project.highlights.map((item, i) => (
                        <li key={i}>📍 {item}</li>
                      ))}
                    </ul>

                    <h4 className="font-semibold text-green-800 mb-2">
                      Plot Details
                    </h4>
                    <ul className="space-y-1 text-sm text-gray-700">
                      {project.plotDetails.map((item, i) => (
                        <li key={i}>✔️ {item}</li>
                      ))}
                    </ul>
                  </div>

                  {/* PRICE BOX */}
                  <div className="relative overflow-hidden mt-6 rounded-xl p-5 bg-[linear-gradient(90deg,#8F6B2D_0%,#C9A44C_40%,#E6C76A_60%,#8F6B2D_100%)] shadow-lg">
                    <span className="absolute inset-0 bg-[linear-gradient(120deg,transparent,rgba(255,255,255,0.45),transparent)] animate-shimmer" />

                    <div className="relative z-10 text-[#0F3D2E]">
                      <p className="text-sm">
                        Market Price: {project.price.market}
                      </p>
                      <p className="font-semibold text-lg mt-1">
                        Our Price: {project.price.offer}
                      </p>

                      {/* WHATSAPP BUTTON */}
                      <div className="flex justify-center">
                        <button
                          onClick={() => openWhatsApp(project)}
                          className="relative overflow-hidden mt-4 px-6 sm:px-8 py-2.5 sm:py-3 text-sm sm:text-base md:text-lg font-semibold rounded-lg bg-[linear-gradient(90deg,#C9A44C,#E6C76A)] shadow-md transition-transform duration-300 active:scale-95"
                        >
                          <span className="absolute inset-0 bg-[linear-gradient(120deg,transparent,rgba(255,255,255,0.6),transparent)] animate-shimmer" />
                          <span className="relative z-10">
                            Book Site Visit
                          </span>
                        </button>
                      </div>

                    </div>
                  </div>

                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
