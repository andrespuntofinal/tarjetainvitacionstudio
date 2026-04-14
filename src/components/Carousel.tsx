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
    <section className={`${APP_CONFIG.carousel.backgroundColor} py-6 px-0 md:px-6 flex flex-col justify-center items-center`}>
      <h2 className="text-xl md:text-2xl text-center mb-6 md:mb-10  tracking-widest uppercase"
      style={{ color: APP_CONFIG.carousel.titleColor, fontFamily: APP_CONFIG.carousel.titleFont}}>
        
        
        
        {APP_CONFIG.carousel.carouselMsg}
      </h2>
      <div className="w-full max-w-4xl mx-auto relative group">
        <div className={`${APP_CONFIG.carousel.cardStyle}`}>
          <AnimatePresence mode="wait">
            <motion.img
              key={currentIndex}
              src={images[currentIndex]}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: APP_CONFIG.carousel.durationTransition }}
              className="w-full h-full object-cover object-[center_30%] cursor-zoom-in"
              onClick={() => setSelectedImage(images[currentIndex])}
              referrerPolicy="no-referrer"
            />
          </AnimatePresence>
        </div>

        {/* Controls */}
        <button 
          onClick={prev}
          className={`${APP_CONFIG.carousel.buttonPrevStyle}`}
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button 
          onClick={next}
          className={`${APP_CONFIG.carousel.buttonNextStyle}`}
        >
          <ChevronRight className="w-6 h-6" />
        </button>

      
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className={`${APP_CONFIG.carousel.backgroundImgZoomStyle}`}
            onClick={() => setSelectedImage(null)}
          >
            <button className="absolute top-6 right-6"
            style={{ color: APP_CONFIG.carousel.buttonCloseColor}}>
              
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
