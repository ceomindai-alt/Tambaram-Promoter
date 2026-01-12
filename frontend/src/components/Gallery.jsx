import { useState } from "react";
import a from "../assets/img/v1.png";
import b from "../assets/img/v2.png";
import c from "../assets/img/v3.png";
import d from "../assets/img/p4.png";
import e from "../assets/img/p5.png";
import f from "../assets/img/p6.png";
import g from "../assets/img/p7.png";
import h from "../assets/img/v4.png";
import i from "../assets/img/p9.png";
import j from "../assets/img/p10.png";
import video1 from "../assets/img/video1.mp4";
import video2 from "../assets/img/video2.mp4";

export default function Gallery() {

  const galleryItems = [
    { type: "image", src: a    },
    { type: "image", src: b },
    { type: "image", src: c },
    { type: "image", src: d },
    { type: "image", src:e},
    { type: "image", src: f },
    { type: "image", src: h },
    
    { type: "video1", src: video1 },
    { type: "video2", src: video2 },
  ];

  const [selectedItem, setSelectedItem] = useState(null);

  return (
    <div className="py-20 px-6 bg-oklch(87.9% 0.169 91.605)
    " id="gallery">
      
      <h2 
        className="text-3xl sm:text-3xl md:text-4xl font-bold text-center mb-10 text-gold-gradient"
        data-aos="fade-up"
      >
        Our Gallery
      </h2>

      <div 
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto"
        data-aos="fade-up"
        data-aos-delay="150"
      >
        {galleryItems.map((item, index) => (
          <div
            key={index}
            className="rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2 cursor-pointer bg-white"
            onClick={() => setSelectedItem(item)}
          >
            {item.type === "image" ? (
              <img src={item.src} className="w-full h-60 object-cover" />
            ) : (
              <video className="w-full h-60 object-cover" muted autoPlay loop>
                <source src={item.src} type="video/mp4" />
              </video>
            )}
          </div>
        ))}
      </div>

      {selectedItem && (
        <div
          className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
          onClick={() => setSelectedItem(null)}
        >
          <div className="max-w-3xl w-full p-4">
            {selectedItem.type === "image" ? (
              <img src={selectedItem.src} className="w-full rounded-xl shadow-xl" />
            ) : (
              <video className="w-full rounded-xl shadow-xl" controls autoPlay>
                <source src={selectedItem.src} type="video/mp4" />
              </video>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
