import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { APP_CONFIG } from "../constants";

export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDate = new Date(APP_CONFIG.weddingDate).getTime();

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance < 0) {
        clearInterval(timer);
        return;
      }

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const items = [
    { label: "Días", value: timeLeft.days },
    { label: "Horas", value: timeLeft.hours },
    { label: "Minutos", value: timeLeft.minutes },
    { label: "Segundos", value: timeLeft.seconds },
  ];

  return (
    <section className={`${APP_CONFIG.countdown.backgroundColor} py-12 px-2 md:px-6 flex flex-col justify-center`}>
      <div className="w-full max-w-3xl mx-auto text-center">
        <h2 className="font-serif text-3xl text-center mb-12 text-[#D7B272]">
          Falta muy poco
        </h2>
        <div className="flex flex-row justify-center items-center gap-2 md:gap-8">
          {items.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 0 20px rgba(215, 178, 114, 0.4)",
                borderColor: "#D7B272",
                backgroundColor: "rgba(97, 110, 51, 0.2)"
              }}
              className="flex flex-col items-center justify-center w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 rounded-full border border-[#616E33]/50 bg-[#19284c] shadow-[0_0_10px_rgba(215,178,114,0.15)] transition-all duration-300"
            >
              <span className={`text-2xl sm:text-3xl md:text-5xl font-serif text-[#F7F9FA] leading-none`}>
                {item.value}
              </span>
              <span className={`text-[9px] sm:text-[10px] md:text-xs uppercase tracking-widest mt-1 md:mt-2 text-[#A5ADB8]`}>
                {item.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
