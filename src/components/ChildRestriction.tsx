import { motion } from "framer-motion";
import { Users } from "lucide-react";
import { APP_CONFIG } from "../constants";

export default function ChildRestriction() {
  return (
    <section className="w-full h-full flex flex-col py-0 -mt-6 md:mt-0">
      <div className="w-full mx-auto flex-1 flex flex-col ">
        <h2 className={` ${APP_CONFIG.childRestriction.titleFont} text-xl md:text-2xl text-center mb-6 md:mb-10 ${APP_CONFIG.childRestriction.titleColor} tracking-widest uppercase`}>
          {APP_CONFIG.childRestriction.childrestrictionTitle}
        </h2>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className={`${APP_CONFIG.childRestriction.cardStyle}`}
        >
          <div className={`${APP_CONFIG.childRestriction.circleStyle}`}>
            <Users className= {`w-8 h-8 md:w-12 md:h-12 ${APP_CONFIG.childRestriction.iconColor}`} />
           
          </div>
          
          <p className={`${APP_CONFIG.childRestriction.textColor} ${APP_CONFIG.childRestriction.textFont} text-xs sm:text-sm md:text-base leading-relaxed max-w-2xl`}>         
            {APP_CONFIG.childRestriction.childrestrictionMessage}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
