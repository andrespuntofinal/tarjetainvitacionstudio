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
          className={`${APP_CONFIG.message.colorText1} ${APP_CONFIG.message.textSize}`}
          style={{ fontFamily: APP_CONFIG.message.font }}
        >
          {APP_CONFIG.message.text1}
        </p>

        <br />

        <p 
          className={`${APP_CONFIG.message.colorParents} ${APP_CONFIG.message.textSize}`}
          style={{ fontFamily: APP_CONFIG.message.font }}
        >
          {APP_CONFIG.message.groomParents}
        </p>

         <p 
          className={`${APP_CONFIG.message.colorParents} ${APP_CONFIG.message.textSize}`}
          style={{ fontFamily: APP_CONFIG.message.font }}
        >
          {APP_CONFIG.message.brideParents}
        </p>

         <br />

        <p 
          className={`${APP_CONFIG.message.colorText1} ${APP_CONFIG.message.textSize} `}
          style={{ fontFamily: APP_CONFIG.message.font }}
        >
          {APP_CONFIG.message.text2}
        </p>
      </motion.div>
    </section>
  );
}
