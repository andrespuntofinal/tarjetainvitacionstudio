import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { APP_CONFIG } from "../constants";

export default function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const images = APP_CONFIG.carousel.images;

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, APP_CONFIG.carousel.autoPlayInterval);

    return () => clearInterval(timer);
  }, [images.length]);

  const next = () => setCurrentIndex((prev) => (prev + 1) % images.length);
  const prev = () => setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);

  return (
    <section className={`${APP_CONFIG.carousel.backgroundColor} py-12 px-6 flex flex-col justify-center items-center`}>
      <h2 className="font-serif text-2xl md:text-3xl text-center mb-8 md:mb-16 text-[#735309] tracking-widest uppercase">
        {APP_CONFIG.carousel.carouselMsg}
      </h2>
      <div className="w-full max-w-4xl mx-auto relative group">
        <div className="aspect-video md:aspect-[21/9] overflow-hidden rounded-2xl shadow-[0_0_15px_rgba(215,178,114,0.15)] relative border border-[#616E33]/50 bg-gradient-to-br from-[#19284c] via-[#5c678d] to-[#19284c]">
          <AnimatePresence mode="wait">
            <motion.img
              key={currentIndex}
              src={images[currentIndex]}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="w-full h-full object-cover cursor-zoom-in"
              onClick={() => setSelectedImage(images[currentIndex])}
              referrerPolicy="no-referrer"
            />
          </AnimatePresence>
        </div>

        {/* Controls */}
        <button 
          onClick={prev}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-[#19284c]/80 text-[#D7B272] border border-[#D7B272]/50 p-2 rounded-full shadow-[0_0_10px_rgba(215,178,114,0.2)] opacity-0 group-hover:opacity-100 transition-all hover:bg-[#19284c] hover:scale-110"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button 
          onClick={next}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-[#19284c]/80 text-[#D7B272] border border-[#D7B272]/50 p-2 rounded-full shadow-[0_0_10px_rgba(215,178,114,0.2)] opacity-0 group-hover:opacity-100 transition-all hover:bg-[#19284c] hover:scale-110"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-6">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              className={`w-2 h-2 rounded-full transition-all ${
                i === currentIndex ? "bg-[#D7B272] w-6 shadow-[0_0_5px_rgba(215,178,114,0.5)]" : "bg-[#A5ADB8]/50 hover:bg-[#A5ADB8]"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-[#19284c]/95 flex items-center justify-center p-4 backdrop-blur-sm"
            onClick={() => setSelectedImage(null)}
          >
            <button className="absolute top-6 right-6 text-white">
              <X className="w-8 h-8" />
            </button>
            <motion.img
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              src={selectedImage}
              className="max-w-full max-h-full object-contain rounded-lg"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
