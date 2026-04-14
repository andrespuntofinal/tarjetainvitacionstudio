import { motion } from "framer-motion";
import { Users } from "lucide-react";
import { APP_CONFIG } from "../constants";

export default function ChildRestriction() {
  return (
    <section className="w-full h-full flex flex-col py-0 -mt-6 md:mt-0">
      <div className="w-full mx-auto flex-1 flex flex-col ">
        <h2 className="text-xl md:text-2xl text-center mb-6 md:mb-10 tracking-widest uppercase"
        style={{ color: APP_CONFIG.childRestriction.titleColor, fontFamily: APP_CONFIG.childRestriction.titleFont }}>
          {APP_CONFIG.childRestriction.childrestrictionTitle}
        </h2>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className={`${APP_CONFIG.childRestriction.cardStyle}`}
        >
          <div className={`${APP_CONFIG.childRestriction.circleStyle}`}>
            <Users className= "w-8 h-8 md:w-12 md:h-12"
            style={{ color: APP_CONFIG.childRestriction.iconColor }}
            />
           
          </div>
          
          <p className="text-xs sm:text-sm md:text-base leading-relaxed max-w-2xl"
          style={{ color: APP_CONFIG.childRestriction.textColor, fontFamily: APP_CONFIG.childRestriction.textFont}}>         
            {APP_CONFIG.childRestriction.childrestrictionMessage}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
