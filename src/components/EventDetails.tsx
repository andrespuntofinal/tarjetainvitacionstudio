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
    },
    {
      title: "Celebración",
      icon: PartyPopper,
      place: APP_CONFIG.eventDetails.celebration.place,
      time: APP_CONFIG.eventDetails.celebration.time,
    },
  ];

  return (
    <section className={`${APP_CONFIG.eventDetails.backgroundColor} py-12 md:py-20 px-4 md:px-6`}>
      <div className="max-w-5xl mx-auto">
        <h2 className="font-serif text-2xl md:text-3xl text-center mb-8 md:mb-16 text-[#D7B272] tracking-widest uppercase">Detalles del Evento</h2>
        <div className="grid grid-cols-2 gap-4 md:gap-12">
          {details.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, x: index === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className=" bg-[#19284c] p-4 md:p-10 rounded-2xl md:rounded-3xl shadow-xl flex flex-col items-center text-center border border-[#D7B272]/30 relative overflow-hidden group hover:shadow-[0_0_20px_rgba(215,178,114,0.2)] transition-all duration-300"
            >
              <div className="w-20 h-20 bg-[#19284c] rounded-full flex items-center justify-center mb-6  border-4 border-[#A5ADB8] group-hover:scale-110 group-hover:bg-[#616E33]/30 transition-all duration-300">
                <item.icon className="w-8 h-8 text-[#F7F9FA] " />
              </div>
              <h3 className="font-serif text-lg md:text-2xl mb-4 md:mb-6 text-[#D7B272]">{item.title}</h3>
              
              <div className="space-y-3 md:space-y-4 w-ful">
                <div className="flex flex-col xl:flex-row items-center justify-center gap-1 md:gap-3 text-[#A5ADB8] font-medium text-xs md:text-lg leading-tight">
                  <MapPin className="w-4 h-4 md:w-5 md:h-5 text-[#E8E2D9] shrink-0" />
                  <span>{item.place}</span>
                </div>
                <div className="flex flex-col xl:flex-row items-center justify-center gap-1 md:gap-3 text-[#F7F9FA]/50 font-medium text-xs md:text-base">
                  <Clock className="w-4 h-4 md:w-5 md:h-5 text-[#E8E2D9] shrink-0" />
                  <span>{item.time}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
