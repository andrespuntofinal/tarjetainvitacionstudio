import { motion } from "framer-motion";
import { APP_CONFIG } from "../constants";

export default function Calendar() {
  const weddingDate = new Date(APP_CONFIG.weddingDate);
  const month = weddingDate.getMonth();
  const year = weddingDate.getFullYear();
  const date = weddingDate.getDate();

  // Get first day of the month (0 = Sunday, 1 = Monday, etc.)
  const firstDay = new Date(year, month, 1).getDay();
  // Adjust to make Monday = 0, Sunday = 6
  const startingDay = firstDay === 0 ? 6 : firstDay - 1;
  
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  
  const daysOfWeek = ["LU", "MA", "MI", "JU", "VI", "SÁ", "DO"];
  const monthNames = ["ENERO", "FEBRERO", "MARZO", "ABRIL", "MAYO", "JUNIO", "JULIO", "AGOSTO", "SEPTIEMBRE", "OCTUBRE", "NOVIEMBRE", "DICIEMBRE"];

  const blanks = Array(startingDay).fill(null);
  const days = Array.from({ length: daysInMonth }, (_, i) => i + 1);
  const allDays = [...blanks, ...days];

  return (
    <section className={`${APP_CONFIG.calendar.backgroundColor} py-12 md:py-1 px-4 md:px-12 relative overflow-hidden flex flex-col items-center`}>
      
      {/* Image positioned at top-left on desktop, top-center on mobile */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="md:absolute md:top-12 md:left-12 lg:top-16 lg:left-16 mb-8 md:mb-0 z-10"
      >
        <div className="w-48 h-48 md:w-64 md:h-60 lg:w-80 lg:h-80 rounded-full p-1 bg-gradient-to-tr from-[#D7B272] to-[#D7B272]/20 shadow-[0_0_40px_rgba(215,178,114,0.4)]">
          <img 
            src={APP_CONFIG.calendar.dateImg} 
            alt="Save the date" 
            className="w-full h-full object-cover rounded-full border-4 border-[#19284c]"
            referrerPolicy="no-referrer"
          />
        </div>
      </motion.div>

      {/* Calendar Content */}
      <div className="w-full max-w-3xl md:ml-auto md:pl-48 lg:pl-32 z-0 flex flex-col items-center md:items-end lg:items-center">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-serif text-3xl md:text-5xl lg:text-4xl text-[#E8E2D9] tracking-widest uppercase mb-8 md:mb-16 text-center" 
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          {monthNames[month]} {year}
        </motion.h2>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="w-full max-w-lg"
        >
          <div className="grid grid-cols-7 gap-2 md:gap-4 text-center mb-4 md:mb-8">
            {daysOfWeek.map(day => (
              <div key={day} className="text-[#F7F9FA] text-sm md:text-xl font-serif tracking-widest">
                {day}
              </div>
            ))}
          </div>
          
          <div className="grid grid-cols-7 gap-y-4 md:gap-y-6 gap-x-2 md:gap-x-4 text-center">
            {allDays.map((d, i) => {
              const isWeddingDay = d === date;
              return (
                <div key={i} className="flex justify-center items-center">
                  {d ? (
                    <div className={`w-8 h-8 md:w-12 md:h-12 flex items-center justify-center rounded-full text-base md:text-2xl font-serif transition-all duration-300 ${
                      isWeddingDay 
                        ? "bg-gradient-to-br from-[#D7B272] to-[#b58e4f] text-[#19284c] font-bold shadow-[0_0_25px_rgba(215,178,114,0.8)] scale-110 md:scale-125" 
                        : "text-[#A5ADB8]/30 hover:bg-[#D7B272]/20"
                    }`}>
                      {d}
                    </div>
                  ) : (
                    <div className="w-8 h-8 md:w-12 md:h-12"></div>
                  )}
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
