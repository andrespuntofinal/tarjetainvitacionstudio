import { motion } from "framer-motion";
import { Church, PartyPopper, Clock, MapPin } from "lucide-react";
import { APP_CONFIG } from "../constants";

export default function EventDetails() {
  const details = [
    {
      title: APP_CONFIG.eventDetails.ceremony.title,
      icon: Church,
      place: APP_CONFIG.eventDetails.ceremony.place,
      time: APP_CONFIG.eventDetails.ceremony.time,
      mapUrl: APP_CONFIG.eventDetails.ceremonyMaps,
    },
    {
      title: APP_CONFIG.eventDetails.celebration.title,
      icon: PartyPopper,
      place: APP_CONFIG.eventDetails.celebration.place,
      time: APP_CONFIG.eventDetails.celebration.time,
      mapUrl: APP_CONFIG.eventDetails.celebrationMaps,
    },
  ];

  return (
    <section className="w-full h-full flex flex-col py-0 -mt-6 md:mt-0">
      <div className="w-full mx-auto flex-1 flex flex-col">
       
        <h2 className="text-xl md:text-2xl text-center mb-6 md:mb-10 tracking-widest uppercase"
        style={{ color: APP_CONFIG.eventDetails.detailsColor, fontFamily: APP_CONFIG.eventDetails.detailsFont }}>
        {APP_CONFIG.eventDetails.detailsTitle} </h2>
       
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className= {APP_CONFIG.eventDetails.cardStyle} 
        >
          {details.map((item, index) => (
            <div
              key={item.title}
              className="flex-1 flex flex-col items-center text-center px-1 md:px-8 group w-full"
            >
              <div className={`${APP_CONFIG.eventDetails.detailsIcons}`}>
                <item.icon className="w-5 h-5 md:w-8 md:h-8"
                style={{ color: APP_CONFIG.eventDetails.detailIconColor }}/>
                
              </div>
              <h3 className="text-lg md:text-3xl mb-2 md:mb-6 leading-relaxed"
               style={{ fontFamily: APP_CONFIG.eventDetails.detailItemTitleFont, color: APP_CONFIG.eventDetails.detailItemTitleColor }}>{item.title}</h3>
              
              <div className="space-y-2 md:space-y-4 w-full mb-3 md:mb-6">
               <div className="flex flex-col xl:flex-row items-center justify-center gap-1 md:gap-3 text-xs sm:text-sm md:text-base leading-relaxed"
               style={{ color: APP_CONFIG.eventDetails.detailItemText1Color, fontFamily: APP_CONFIG.eventDetails.detailItemText1Font }}>
                
                  <MapPin className="w-3 h-3 md:w-5 md:h-5 shrink-0" 
                   style={{ color: APP_CONFIG.eventDetails.detailIcon2Color }}/>
                  
                  <span>{item.place}</span>
                </div>
                <div className="flex flex-col xl:flex-row items-center justify-center gap-1 md:gap-3 text-xs sm:text-sm md:text-base leading-relaxed"
                style={{ color: APP_CONFIG.eventDetails.detailItemText1Color, fontFamily: APP_CONFIG.eventDetails.detailItemText1Font }}>
                  <Clock className="w-3 h-3 md:w-5 md:h-5 shrink-0" 
                   style={{ color: APP_CONFIG.eventDetails.detailIcon2Color }}/>
                  <span>{item.time}</span>
                </div>
              </div>

              <a
                href={item.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className= {`${APP_CONFIG.eventDetails.detailsMapsStyle}`}> 
              <svg
                className="w-3.5 h-3.5 md:w-4 md:h-4 opacity-80"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
     <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5A2.5 2.5 0 1 1 12 6a2.5 2.5 0 0 1 0 5.5z"/>
  </svg>

  <span className="relative top-[0.5px]">
    {APP_CONFIG.eventDetails.detailsMapsTitle}
  </span>
</a>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
