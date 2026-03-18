import { motion } from "framer-motion";
import { APP_CONFIG } from "../constants";

export default function Banner() {
  return (
    <section className="relative h-[80vh] w-full overflow-hidden">
      <motion.div 
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2 }}
        className="absolute inset-0"
      >
        <video 
          src={APP_CONFIG.banner.videoDesktop} 
          className="w-full h-full object-cover hidden md:block"
          autoPlay 
          loop 
          muted 
          playsInline
        />
        <video 
          src={APP_CONFIG.banner.videoResponsive} 
          className="w-full h-full object-cover block md:hidden"
          autoPlay 
          loop 
          muted 
          playsInline
        />
        <div className="absolute inset-0 bg-[#19284c]/40 mix-blend-multiply" />
      </motion.div>
      
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4">
        <motion.h1 
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className={`${APP_CONFIG.banner.titleSize} text-[#F7F9FA] font-serif tracking-widest drop-shadow-lg`}
          style={{ fontFamily: APP_CONFIG.banner.titleFont }}
        >
          {APP_CONFIG.coupleNames}
        </motion.h1>
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "100px" }}
          transition={{ delay: 1, duration: 0.8 }}
          className="h-px bg-[#D7B272] my-6"
        />
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="text-[#E8E2D9] font-accent text-3xl italic drop-shadow-md"
        >
          Nuestra Boda
        </motion.p>
      </div>
    </section>
  );
}
