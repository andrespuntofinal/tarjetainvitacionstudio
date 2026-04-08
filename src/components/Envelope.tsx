import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import confetti from "canvas-confetti";
import { APP_CONFIG } from "../constants";

interface EnvelopeProps {
  onOpenComplete: () => void;
  key?: string;
}

export default function Envelope({ onOpenComplete }: EnvelopeProps) {
  const [step, setStep] = useState<"closed" | "opening">("closed");

  const handleVerDetalles = () => {
    if (step === "closed") {
      setStep("opening");
      confetti({
        particleCount: 150,
        spread: 70,
        origin: { y: 0.6 },
        colors: ["#b45309", "#fef3c7", "#ffffff"],
      });
    } else if (step === "opening") {
      onOpenComplete();
    }
  };

  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center z-50 overflow-hidden">
      {/* Background Image */}
      <div 
        className="fixed inset-0 z-0 opacity-70 pointer-events-none"
        style={{
          backgroundImage: `url(${APP_CONFIG.landing1.background})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      {/* Light overlay to ensure text readability */}
      <div className="absolute inset-0 bg-white/40 z-0 backdrop-blur-[2px]" />

      {/* Message above envelope */}
      <motion.div 
        className="relative z-10 mb-12 text-center px-4 max-w-2xl"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <p 
          className={`text-2xl md:text-3xl lg:text-4xl ${APP_CONFIG.landing1.messageColor}`}
          style={{ fontFamily: APP_CONFIG.landing1.messageFont }}
        >
          {APP_CONFIG.landing1.message}
        </p>
      </motion.div>

      {/* Envelope Container */}
      <div className="relative w-full max-w-lg aspect-[4/3] z-10 mt-10 md:mt-20">
        
        {/* The Envelope */}
        <div className="absolute inset-0 flex items-center justify-center">
          
          {/* Back of envelope (inside) */}
          <div 
            className="absolute w-[90%] h-[90%] rounded-md shadow-inner"
            style={{ 
              backgroundColor: "#fdfbf7",
              backgroundImage: `url(${APP_CONFIG.envelope.textureUrl})`,
              backgroundBlendMode: 'multiply',
              opacity: 0.9
            }}
          />

          {/* Mini Cards (Pop out when opened) */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            
            {/* Card 1: Guest Info (Left) */}
            <motion.div
              className="absolute w-48 h-64 bg-[#fdfbf7] shadow-xl rounded-lg p-1 z-10 flex flex-col items-center justify-center text-center border-2 border-[#d4af37]/30"
              initial={{ y: 20, x: 0, rotate: 0, opacity: 0, scale: 0.8 }}
              animate={
                step === "opening"
                  ? {
                      y: [20, -300, -120],
                      x: [0, -40, -90],
                      rotate: [0, -5, -12],
                      opacity: [0, 1, 1],
                      scale: [0.8, 1, 1],
                      zIndex: [10, 10, 35],
                    }
                  : { y: 20, x: 0, rotate: 0, opacity: 0, scale: 0.8, zIndex: 10 }
              }
              transition={{ duration: 1.5, times: [0, 0.5, 1], ease: "easeInOut" }}
              style={{
                boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.2), 0 8px 10px -6px rgba(0, 0, 0, 0.1)',
                backgroundImage: `url(${APP_CONFIG.envelope.textureUrl})`,
                backgroundBlendMode: 'multiply'
              }}
            >
              <div className="w-full h-full border border-[#d4af37]/50 rounded-md p-4 flex flex-col items-center justify-center relative overflow-hidden">
                {/* Decorative corners */}
                <div className="absolute top-1 left-1 w-4 h-4 border-t border-l border-[#d4af37]"></div>
                <div className="absolute top-1 right-1 w-4 h-4 border-t border-r border-[#d4af37]"></div>
                <div className="absolute bottom-1 left-1 w-4 h-4 border-b border-l border-[#d4af37]"></div>
                <div className="absolute bottom-1 right-1 w-4 h-4 border-b border-r border-[#d4af37]"></div>
                
                <h3 className="font-serif text-xs mb-2 tracking-widest text-stone-600 uppercase">Reservado con cariño para:</h3>
                <p className="font-serif text-xl font-bold mb-4 text-[#d4af37] leading-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
                  {APP_CONFIG.guestName}
                </p>
                <div className="mt-2 pt-3 border-t border-[#d4af37]/30 w-full">
                  <p className="font-serif text-sm font-bold text-stone-700">{APP_CONFIG.numberGuests} PERSONAS</p>
                </div>
              </div>
            </motion.div>

            {/* Card 2: Photo (Right) */}
            <motion.div
              className="absolute w-44 h-56 bg-white shadow-xl p-2 z-10"
              initial={{ y: 20, x: 0, rotate: 0, opacity: 0, scale: 0.8 }}
              animate={
                step === "opening"
                  ? {
                      y: [20, -320, -140],
                      x: [0, 40, 90],
                      rotate: [0, 5, 15],
                      opacity: [0, 1, 1],
                      scale: [0.8, 1, 1],
                      zIndex: [10, 10, 34],
                    }
                  : { y: 20, x: 0, rotate: 0, opacity: 0, scale: 0.8, zIndex: 10 }
              }
              transition={{ duration: 1.5, times: [0, 0.5, 1], ease: "easeInOut" }}
              style={{
                boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.2), 0 8px 10px -6px rgba(0, 0, 0, 0.1)',
              }}
            >
              <img 
                src={APP_CONFIG.envelope.couplePhoto} 
                alt="Pareja" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </motion.div>
            
           
          </div>

          {/* Envelope Front (Bottom flap) */}
          <div 
            className="absolute w-full h-full z-20 rounded-md overflow-hidden"
            style={{ 
              
              backgroundImage: `
      linear-gradient(
        to bottom right,
        ${APP_CONFIG.envelope.envelopeColor},
        #5c678d,
        ${APP_CONFIG.envelope.envelopeColor}
      ),
      url(${APP_CONFIG.envelope.textureUrl})
    `,
              backgroundBlendMode: 'multiply',
              boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.3), 0 10px 10px -5px rgba(0, 0, 0, 0.2)'
            }}
          >
            {/* Diagonal lines to simulate envelope folds */}
            <div 
              className="absolute inset-0 opacity-30"
              style={{
                background: `linear-gradient(to top right, transparent 49.5%, rgba(0,0,0,0.5) 50%, transparent 50.5%), linear-gradient(to top left, transparent 49.5%, rgba(0,0,0,0.5) 50%, transparent 50.5%)`
              }}
            />
            {/* Bottom triangle shadow */}
            <div 
              className="absolute bottom-0 left-0 right-0 h-1/2 opacity-20"
              style={{
                background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)',
                clipPath: 'polygon(0 100%, 50% 0, 100% 100%)'
              }}
            />
          </div>

          {/* Top Flap */}
          <motion.div
            className="absolute top-0 left-0 w-full h-[65%] origin-top z-30"
            style={{ 
             
              backgroundImage: `
      linear-gradient(
        to bottom right,
        ${APP_CONFIG.envelope.envelopeColor},
        ${APP_CONFIG.envelope.envelopeColorDeg},
        ${APP_CONFIG.envelope.envelopeColor}
      ),
      url(${APP_CONFIG.envelope.textureUrl})
    `,
              backgroundBlendMode: 'multiply',
              clipPath: 'polygon(0 0, 100% 0, 50% 100%)',
              filter: 'drop-shadow(0 10px 8px rgba(0,0,0,0.3))'
            }}
            animate={{ 
              rotateX: step === "opening" ? -180 : 0,
              zIndex: step === "opening" ? 5 : 30 // Move behind front when open
            }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          >
            {/* Inner flap shadow for realism when open */}
            <div className="absolute inset-0 bg-black/10" />
            
           {/* Envelope Message */}
                       <motion.div 
                         className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-start pt-8 px-12 text-center pointer-events-none"
                         animate={{ opacity: step === "opening" ? 0 : 1 }}
                         transition={{ duration: 0.3 }}
                       >
                         <p 
                           className="text-xl md:text-2xl leading-tight"
                           style={{
                             color: APP_CONFIG.envelope.envelopeMsgColor,
                             fontFamily: APP_CONFIG.envelope.envelopeFont,
                           }}
                         >
                           {APP_CONFIG.envelope.envelopeMsg}
                         </p>
                       </motion.div>
                     </motion.div>

          {/* Wax Seal / Button */}
          <motion.button
            onClick={handleVerDetalles}
            className="absolute z-40 flex flex-col items-center justify-center cursor-pointer group"
            initial={{ top: "50%", y: "-10%" }}
            animate={{ 
              top: step === "opening" ? "60%" : "50%",
              y: step === "opening" ? "0%" : "-10%",
              scale: step === "opening" ? 1.1 : 1
            }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          >
            {step === "closed" && (
              <motion.span 
                className="text-[#d4af37] font-serif text-sm mb-4 tracking-widest opacity-80 group-hover:opacity-100 transition-opacity"
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.8 }}
                exit={{ opacity: 0 }}
              >
               
              </motion.span>
            )}
            
            <div 
              className="w-30 h-30 flex items-center justify-center relative transition-all duration-300 group-hover:scale-110 group-hover:drop-shadow-[0_0_15px_rgba(215,178,114,0.8)]"
            >
              {/* Seal Image */}
              <img 
                src={APP_CONFIG.envelope.sealImage} 
                alt="Sello" 
                className="absolute -top-4 left-1/2 -translate-x-1/2 w-28 object-contain drop-shadow-lg"
              />
              
              {/* Text over the seal */}
              <div className="relative z-10 flex flex-col items-center justify-center text-white/90">
                {step === "closed" ? (
                  <>
                    <span className="text-xs opacity-90 mb-0.5">💍</span>
                    <span className="font-serif text-2xl font-bold leading-none" style={{ fontFamily: "'Playfair Display', serif", textShadow: "0 2px 4px rgba(0,0,0,0.5)" }}>J&L</span>
                  </>
                ) : (
                  <>
                    <span className="text-[10px] opacity-90 mb-0.5">💍</span>
                    <span className="font-serif text-[10px] font-bold leading-tight text-center px-1" style={{ fontFamily: "'Playfair Display', serif", textShadow: "0 2px 4px rgba(0,0,0,0.5)" }}>
                      VER<br/>DETALLES
                    </span>
                  </>
                )}
              </div>
            </div>
          </motion.button>

        </div>
      </div>
    </div>
  );
}
