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
    <section className={`${APP_CONFIG.dressCode.backgroundColor} py-12 md:py-16 px-4 md:px-6`}>
      <div className="max-w-5xl mx-auto">
        <h2 className="font-serif text-2xl md:text-3xl text-center mb-8 md:mb-12 tracking-widest uppercase text-[#735309]">
          Código de Vestimenta
        </h2>
        <div className="grid grid-cols-2 gap-4 md:gap-12">
          {details.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-[#19284c] p-4 md:p-10 rounded-2xl md:rounded-3xl shadow-xl flex flex-col items-center text-center border border-[#D7B272]/30 relative overflow-hidden group hover:shadow-[0_0_20px_rgba(215,178,114,0.2)] transition-all duration-300"
            >
              <div className="w-20 h-20 bg-[#19284c] rounded-full flex items-center justify-center mb-6 border-4 border-[#E8E2D9] group-hover:scale-110 group-hover:bg-[#616E33]/30 transition-all duration-300">
                <div
                className="w-18 h-18 bg-[#F7F9FA]"
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
              <h3 className="font-serif text-lg md:text-2xl mb-2 md:mb-4 text-[#D7B272] tracking-wide">{item.title}</h3>
              
              <div className="w-8 md:w-16 h-px bg-[#616E33]/50 mb-3 md:mb-6"></div>

              <p className="text-[#A5ADB8] font-medium text-xs md:text-lg leading-tight md:leading-relaxed">
                {item.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
