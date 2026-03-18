import { motion } from "framer-motion";
import { Shirt } from "lucide-react";
import { APP_CONFIG } from "../constants";

export default function DressCode() {
  return (
    <section className={`${APP_CONFIG.dressCode.backgroundColor} py-16 px-6`}>
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="max-w-2xl mx-auto text-center border border-[#D7B272]/30 rounded-3xl p-10 bg-[#F7F9FA]/50 backdrop-blur-sm shadow-lg"
      >
        <Shirt className={`w-10 h-10 mx-auto mb-6 ${APP_CONFIG.dressCode.iconColor}`} />
        <h3 className="font-serif text-2xl mb-4 tracking-widest uppercase text-[#19284c]">Código de Vestimenta</h3>
        <p className="text-[#19284c]/80 text-lg leading-relaxed font-medium">
          {APP_CONFIG.dressCode.text}
        </p>
      </motion.div>
    </section>
  );
}
