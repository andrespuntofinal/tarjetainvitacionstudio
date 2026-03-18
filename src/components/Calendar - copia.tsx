import { motion } from "framer-motion";
import { Calendar as CalendarIcon } from "lucide-react";
import { APP_CONFIG } from "../constants";

export default function Calendar() {
  return (
    <section className={`${APP_CONFIG.calendar.backgroundColor} py-16 px-6`}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-md mx-auto bg-gradient-to-br from-[#19284c] to-[#27272B] rounded-2xl shadow-2xl p-8 text-center border border-[#D7B272]/20"
      >
        <CalendarIcon className="w-12 h-12 mx-auto mb-6 text-[#D7B272]" />
        <h3 className="font-serif text-2xl mb-4 text-[#F7F9FA]">Reserva la fecha</h3>
        <p className={`text-[#E8E2D9] text-2xl font-accent italic`}>
          {APP_CONFIG.calendar.dateText}
        </p>
        <div className="mt-8 pt-8 border-t border-[#D7B272]/20">
          <p className="text-[#A5ADB8] text-sm uppercase tracking-widest">Martes</p>
        </div>
      </motion.div>
    </section>
  );
}
