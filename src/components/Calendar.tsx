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
  
  const daysOfWeek = ["Lu", "Ma", "Mi", "Ju", "Vi", "Sá", "Do"];
  const monthNames = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

  const blanks = Array(startingDay).fill(null);
  const days = Array.from({ length: daysInMonth }, (_, i) => i + 1);
  const allDays = [...blanks, ...days];

  return (
    <section className={`${APP_CONFIG.calendar.backgroundColor} py-12 px-6 overflow-hidden`}>
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">
          
          {/* Photo Side */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full md:w-1/2 flex justify-center"
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              {/* Decorative Hexagon/Frame effect */}
              <div className="absolute inset-[-15px] border-2 border-[#D7B272] rotate-6 rounded-3xl opacity-60 transition-transform duration-500 hover:rotate-12"></div>
              <div className="absolute inset-[-15px] border-2 border-[#616E33] -rotate-6 rounded-3xl opacity-60 transition-transform duration-500 hover:-rotate-12"></div>
              <img 
                src={APP_CONFIG.calendar.dateImg} 
                alt="Save the date" 
                className="w-full h-full object-cover rounded-3xl shadow-2xl relative z-10"
                referrerPolicy="no-referrer"
              />
            </div>
          </motion.div>

          {/* Calendar Side */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full md:w-1/2 flex flex-col items-center md:items-start"
          >
            <h2 className="font-serif text-3xl text-center mb-12 text-[#D7B272]">
             El gran día
            </h2>
            
            <div className="w-full max-w-sm bg-[#19284c] p-6 rounded-3xl border border-[#D7B272]/20 shadow-lg backdrop-blur-sm">
              <h3 className="text-center font-serif text-xl text-[#F7F9FA] tracking-widest uppercase mb-6">
                {monthNames[month]} {year}
              </h3>
              
              <div className="grid grid-cols-7 gap-2 text-center mb-4">
                {daysOfWeek.map(day => (
                  <div key={day} className="text-[#A5ADB8] text-xs font-medium uppercase tracking-wider">
                    {day}
                  </div>
                ))}
              </div>
              
              <div className="grid grid-cols-7 gap-y-4 gap-x-2 text-center">
                {allDays.map((d, i) => {
                  const isWeddingDay = d === date;
                  return (
                    <div key={i} className="flex justify-center items-center">
                      {d ? (
                        <div className={`w-8 h-8 flex items-center justify-center rounded-full text-sm transition-all duration-300 ${
                          isWeddingDay 
                            ? "bg-[#D7B272] text-[#19284c] font-bold shadow-[0_0_15px_rgba(215,178,114,0.8)] scale-125" 
                            : "text-[#F7F9FA] hover:bg-[#616E33]/30"
                        }`}>
                          {d}
                        </div>
                      ) : (
                        <div className="w-8 h-8"></div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
