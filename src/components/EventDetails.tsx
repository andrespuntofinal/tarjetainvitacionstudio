import { motion } from "framer-motion";
import { Church, PartyPopper, Clock, MapPin } from "lucide-react";
import { APP_CONFIG } from "../constants";

export default function EventDetails() {
  const details = [
    {
      title: "Ceremonia",
      icon: Church,
      place: APP_CONFIG.eventDetails.ceremony.place,
      time: APP_CONFIG.eventDetails.ceremony.time,
      mapUrl: APP_CONFIG.eventDetails.ceremonyMaps,
    },
    {
      title: "Celebración",
      icon: PartyPopper,
      place: APP_CONFIG.eventDetails.celebration.place,
      time: APP_CONFIG.eventDetails.celebration.time,
      mapUrl: APP_CONFIG.eventDetails.celebrationMaps,
    },
  ];

  return (
    <section className="w-full h-full flex flex-col py-0 -mt-6 md:mt-0">
      <div className="w-full mx-auto flex-1 flex flex-col">
        <h2 className="font-serif text-xl md:text-2xl text-center mb-6 md:mb-10 text-[#735309] tracking-widest uppercase px-4 md:px-0">Detalles del Evento</h2>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex-1 py-6 px-1 md:p-10 rounded-none md:rounded-3xl shadow-xl flex flex-row items-start justify-center bg-gradient-to-br from-[#19284c] via-[#5c678d] to-[#19284c] border-y md:border border-x-0 md:border-x border-[#A5ADB8]/30 relative overflow-hidden divide-x divide-[#D7B272]/30 gap-0"
        >
          {details.map((item, index) => (
            <div
              key={item.title}
              className="flex-1 flex flex-col items-center text-center px-1 md:px-8 group w-full"
            >
              <div className="w-10 h-10 md:w-20 md:h-20 bg-[#E8E2D9] rounded-full flex items-center justify-center mb-3 md:mb-6 border-2 md:border-4 border-[#D7B272] group-hover:scale-110 group-hover:bg-[#A5ADB8] transition-all duration-300">
                <item.icon className="w-5 h-5 md:w-8 md:h-8 text-[#735309]" />
              </div>
              <h3 className="font-serif text-lg md:text-3xl mb-2 md:mb-6 text-[#D7B272] leading-relaxed">{item.title}</h3>
              
              <div className="space-y-2 md:space-y-4 w-full mb-3 md:mb-6">
               <div className="flex flex-col xl:flex-row items-center justify-center gap-1 md:gap-3 text-[#E8E2D9] font-light  text-xs sm:text-sm md:text-base leading-relaxed">
                  <MapPin className="w-3 h-3 md:w-5 md:h-5 text-[#D7B272] shrink-0" />
                  <span>{item.place}</span>
                </div>
                <div className="flex flex-col xl:flex-row items-center justify-center gap-1 md:gap-3 text-[#E8E2D9] font-light  text-xs sm:text-sm md:text-base leading-relaxed">
                  <Clock className="w-3 h-3 md:w-5 md:h-5 text-[#D7B272] shrink-0" />
                  <span>{item.time}</span>
                </div>
              </div>

              <a
                href={item.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto inline-flex items-center justify-center gap-1 md:gap-2 bg-white text-[#19284c] px-2 py-1.5 md:px-4 md:py-2 rounded-lg font-medium text-[9px] sm:text-[10px] md:text-sm hover:bg-gray-100 transition-colors"
              >
                <svg className="w-3 h-3 md:w-4 md:h-4 text-[#1a73e8]" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M21.41 10.59l-7.99-8c-.78-.78-2.05-.78-2.83 0l-8 8c-.78.78-.78 2.05 0 2.83l8 8c.39.39.9.58 1.41.58.51 0 1.02-.19 1.41-.58l7.99-8c.79-.78.79-2.04.01-2.83zM13.5 14.5V12H10v3H8v-4c0-.55.45-1 1-1h4.5V7.5L17 11l-3.5 3.5z" />
                </svg>
                Cómo llegar
              </a>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
