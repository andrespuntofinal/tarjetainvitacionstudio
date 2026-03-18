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
    <section className={`${APP_CONFIG.eventDetails.backgroundColor} py-20 px-6`}>
      <div className="max-w-5xl mx-auto">
        <h2 className="font-serif text-3xl text-center mb-16 text-[#F7F9FA]">Detalles del Evento</h2>
        <div className="grid md:grid-cols-2 gap-12">
          {details.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, x: index === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-[#F7F9FA] to-[#E8E2D9] p-10 rounded-3xl shadow-lg flex flex-col items-center text-center border border-[#D7B272]/30"
            >
              <div className="w-16 h-16 bg-[#19284c]/5 rounded-full flex items-center justify-center mb-6 border border-[#D7B272]/20">
                <item.icon className="w-8 h-8 text-[#D7B272]" />
              </div>
              <h3 className="font-serif text-2xl mb-6 text-[#19284c]">{item.title}</h3>
              
              <div className="space-y-4">
                <div className="flex items-center justify-center gap-3 text-[#19284c]/80 font-medium">
                  <MapPin className="w-5 h-5 text-[#616E33]" />
                  <span>{item.place}</span>
                </div>
                <div className="flex items-center justify-center gap-3 text-[#19284c]/80 font-medium">
                  <Clock className="w-5 h-5 text-[#616E33]" />
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
