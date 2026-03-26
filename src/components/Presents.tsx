import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import { APP_CONFIG } from "../constants";

export default function Presents() {
  return (
    <section className="w-full py-12 md:py-20 my-4 md:my-12">
      <div className="max-w-[90rem] mx-auto px-4 md:px-8">
        <h2 className="font-serif text-xl md:text-2xl text-center mb-6 md:mb-10 text-[#735309] tracking-widest uppercase">
          {APP_CONFIG.presents.presentTitle}
        </h2>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto py-8 px-4 md:p-10 rounded-2xl md:rounded-3xl shadow-xl flex flex-col items-center text-center bg-gradient-to-br from-[#19284c] via-[#5c678d] to-[#19284c] border border-[#A5ADB8]/30 relative overflow-hidden"
        >
          <div className="w-16 h-16 md:w-24 md:h-24 bg-[#E8E2D9] rounded-full flex items-center justify-center mb-6 md:mb-8 border-2 md:border-4 border-[#D7B272] hover:scale-110 hover:bg-[#A5ADB8] transition-all duration-300">
            <Mail className="w-8 h-8 md:w-12 md:h-12 text-[#735309]" />
          </div>
          
          <p className="text-[#F7F9FA] font-medium text-sm md:text-lg leading-relaxed max-w-2xl">
            {APP_CONFIG.presents.presentMessage}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
