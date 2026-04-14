import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import { APP_CONFIG } from "../constants";

export default function Presents() {
  return (
    <section className="w-full h-full flex flex-col">
      <div className="w-full mx-auto flex-1 flex flex-col">
        <h2 className="text-xl md:text-2xl text-center mb-6 md:mb-10 tracking-widest uppercase"
        style={{ color: APP_CONFIG.presents.titleColor, fontFamily: APP_CONFIG.presents.titleFont }}>
          {APP_CONFIG.presents.presentTitle}
        </h2>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className={`${APP_CONFIG.presents.cardStyle}`}
        >
          <div className={`${APP_CONFIG.presents.circleStyle}`}>
            <Mail className="w-8 h-8 md:w-12 md:h-12"
            style={{ color: APP_CONFIG.presents.iconColor }}/>
          </div>
          
          <p className="text-xs sm:text-sm md:text-base leading-relaxed max-w-2xl"
          style={{ color: APP_CONFIG.presents.textColor, fontFamily: APP_CONFIG.presents.textFont}}>         
            {APP_CONFIG.presents.presentMessage}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
