import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import { APP_CONFIG } from "../constants";

export default function Presents() {
  return (
    <section className="w-full h-full flex flex-col">
      <div className="w-full mx-auto flex-1 flex flex-col">
        <h2 className={` ${APP_CONFIG.presents.titleFont} text-xl md:text-2xl text-center mb-6 md:mb-10 ${APP_CONFIG.presents.titleColor} tracking-widest uppercase`}>
          {APP_CONFIG.presents.presentTitle}
        </h2>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className={`${APP_CONFIG.presents.cardStyle}`}
        >
          <div className={`${APP_CONFIG.presents.circleStyle}`}>
            <Mail className={`w-8 h-8 md:w-12 md:h-12 ${APP_CONFIG.presents.iconColor}`} />
          </div>
          
          <p className={`${APP_CONFIG.presents.textColor} ${APP_CONFIG.presents.textFont} text-xs sm:text-sm md:text-base leading-relaxed max-w-2xl`}>
            {APP_CONFIG.presents.presentMessage}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
