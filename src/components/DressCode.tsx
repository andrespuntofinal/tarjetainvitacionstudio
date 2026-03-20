import { motion } from "framer-motion";
import { APP_CONFIG } from "../constants";

export default function DressCode() {
  const details = [
    {
      title: "Mujeres",
      iconUrl: APP_CONFIG.dressCode.dressCodeIconWomen,
      text: APP_CONFIG.dressCode.dressCodeTextWomen,
    },
    {
      title: "Hombres",
      iconUrl: APP_CONFIG.dressCode.dressCodeIconMen,
      text: APP_CONFIG.dressCode.dressCodeTextMen,
    },
  ];

  return (
    <section className={`${APP_CONFIG.dressCode.backgroundColor} py-16 px-6`}>
      <div className="max-w-5xl mx-auto">
        <h2 className="font-serif text-3xl text-center mb-12 text-[#D7B272]">Código de vestimenta</h2>
        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          {details.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="p-10 rounded-3xl shadow-lg flex flex-col items-center text-center "
            >
              <div className="w-20 h-20 bg-[#19284c] rounded-full flex items-center justify-center mb-6 border border-[#616E33]/50 group-hover:scale-110 group-hover:bg-[#616E33]/30 transition-all duration-300">
                <div
                className="w-18 h-18 bg-[#D7B272]"
                style={{
                  WebkitMaskImage: `url(${item.iconUrl})`,
                  maskImage: `url(${item.iconUrl})`,
                  WebkitMaskRepeat: "no-repeat",
                  maskRepeat: "no-repeat",
                  WebkitMaskSize: "contain",
                  maskSize: "contain",
                  WebkitMaskPosition: "center",
                  maskPosition: "center"
    }}
  />
              </div>
              <h3 className="font-serif text-2xl mb-4 text-[#19284c] tracking-wide">{item.title}</h3>
              
              <div className="w-16 h-px bg-[#616E33]/50 mb-6"></div>

              <p className="text-[#A5ADB8] font-medium text-lg leading-relaxed">
                {item.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
