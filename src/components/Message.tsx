import { motion } from "framer-motion";
import { APP_CONFIG } from "../constants";

export default function Message() {
  return (
    <section className={`${APP_CONFIG.message.background} py-20 px-6 text-center`}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-2xl mx-auto"
      >
        <p 
          className={`${APP_CONFIG.message.color} text-2xl md:text-3xl italic leading-relaxed`}
          style={{ fontFamily: APP_CONFIG.message.font }}
        >
          "{APP_CONFIG.message.text}"
        </p>
      </motion.div>
    </section>
  );
}
