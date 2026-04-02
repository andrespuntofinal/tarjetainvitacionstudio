import { motion } from "framer-motion";
import { Users } from "lucide-react";
import { APP_CONFIG } from "../constants";

export default function ChildRestriction() {
  return (
    <section className="w-full h-full flex flex-col py-0 -mt-6 md:mt-0">
      <div className="w-full mx-auto flex-1 flex flex-col ">
        <h2 className="font-serif text-xl md:text-2xl text-center mb-6 md:mb-10 text-[#735309] tracking-widest uppercase">
          {APP_CONFIG.childRestriction.childrestrictionTitle}
        </h2>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex-1 py-8 px-4 md:p-10 rounded-none md:rounded-3xl shadow-xl flex flex-col items-center justify-center text-center bg-gradient-to-br from-[#19284c] via-[#5c678d] to-[#19284c] border-y md:border border-x-0 md:border-x border-[#A5ADB8]/30 relative overflow-hidden divide-x divide-[#D7B272]/30 gap-0"
        >
          <div className="w-16 h-16 md:w-24 md:h-24 bg-[#E8E2D9] rounded-full flex items-center justify-center mb-6 md:mb-8 border-2 md:border-4 border-[#D7B272] hover:scale-110 hover:bg-[#A5ADB8] transition-all duration-300">
            <Users className="w-8 h-8 md:w-12 md:h-12 text-[#735309]" />
          </div>
          
          <p className="text-[#E8E2D9] font-light  text-xs sm:text-sm md:text-base leading-relaxed max-w-2xl">
            {APP_CONFIG.childRestriction.childrestrictionMessage}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
