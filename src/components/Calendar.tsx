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
    <section className="w-full md:w-[95%] max-w-7xl mx-auto my-2 md:my-12">
      <h2 className={`${APP_CONFIG.calendar.titleFontText} ${APP_CONFIG.calendar.titleSizeText} md:text-3xl text-center mb-8 md:mb-12 ${APP_CONFIG.calendar.titleColorText} tracking-widest uppercase`}>
        {APP_CONFIG.calendar.titleMsgText}
      </h2>
      <div className={`${APP_CONFIG.calendar.backgroundColor} overflow-hidden`}>
        <div className="flex flex-row items-stretch p-4 sm:p-6 md:p-2 gap-4 sm:gap-6 md:gap-4">
          
          {/* Photo Side */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="w-3/5 md:w-1/2 relative flex-shrink-0"
        >
          <div className="w-full h-full min-h-[180px] rounded-lg md:rounded-xl  overflow-hidden">
            <img 
              src={APP_CONFIG.calendar.dateImg} 
              alt="Save the date" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
        </motion.div>

        {/* Calendar Side */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="w-3/5 md:w-2/3 flex flex-col justify-center py-2 md:py-4"
        >
          <h2 className={`${APP_CONFIG.calendar.monthFontText} text-sm sm:text-lg md:text-2xl ${APP_CONFIG.calendar.monthColorText} tracking-widest uppercase mb-4 md:mb-8 text-center`}>
           
           
            {monthNames[month]} {year}
          </h2>
          
          <div className="w-full max-w-sm mx-auto">
            <div className="grid grid-cols-7 gap-1 md:gap-2 text-center mb-2 md:mb-6">
              {daysOfWeek.map(day => (
                <div key={day} className={`${APP_CONFIG.calendar.dayweekColorText} ${APP_CONFIG.calendar.dayweekSizeText} ${APP_CONFIG.calendar.dayweekFontText} tracking-wider sm:text-xs md:text-sm`}>
                  
                  
                  {day}
                </div>
              ))}
            </div>
            
            <div className="grid grid-cols-7 gap-y-3 sm:gap-y-4 md:gap-y-6 gap-x-1 md:gap-x-2 text-center">
              {allDays.map((d, i) => {
                const isWeddingDay = d === date;
                return (
                  <div key={i} className="flex justify-center items-center">
                    {d ? (
                      <div className={`flex items-center justify-center rounded-full transition-all duration-300 ${
                        isWeddingDay 
                          ? "w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10  font-bold scale-110 md:scale-125 text-xs sm:text-sm md:text-base" 
                          : "w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8  text-[11px] sm:text-xs md:text-sm"
                      
                      }`}
                       style={
                      !isWeddingDay 
          ? { color: APP_CONFIG.calendar.dayColorText1} 
          : { color: APP_CONFIG.calendar.dayColorText2, backgroundColor: APP_CONFIG.calendar.daySelectedColor } 
      }
                      >
                        {d}
                      </div>
                    ) : (
                      <div className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8"></div>
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
