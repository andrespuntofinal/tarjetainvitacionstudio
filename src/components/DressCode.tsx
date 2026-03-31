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
    <section className="w-full h-full flex flex-col">
      <div className="w-full mx-auto flex-1 flex flex-col">
        <h2 className="font-serif text-xl md:text-2xl text-center mb-6 md:mb-10 tracking-widest uppercase text-[#735309] px-4 md:px-0">
          Código de Vestimenta
        </h2>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex-1 py-6 px-1 md:p-10 rounded-none md:rounded-3xl shadow-xl flex flex-row items-start justify-center  bg-gradient-to-br from-[#19284c] via-[#5c678d] to-[#19284c] border-y md:border border-x-0 md:border-x border-[#A5ADB8]/30 relative overflow-hidden divide-x divide-[#D7B272]/30 gap-0"
        >
          {details.map((item, index) => (
            <div
              key={item.title}
              className="flex-1 flex flex-col items-center text-center px-1 md:px-8 group w-full"
            >
              <div className="w-10 h-10 md:w-20 md:h-20 bg-[#E8E2D9] rounded-full flex items-center justify-center mb-3 md:mb-6 border-2 md:border-4 border-[#D7B272] group-hover:scale-110 group-hover:bg-[#A5ADB8] transition-all duration-300">
                <div
                  className="w-5 h-5 md:w-12 md:h-12 bg-[#735309]"
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
              <h3 className="font-serif text-lg md:text-3xl mb-2 md:mb-4 text-[#D7B272] leading-relaxed">{item.title}</h3>
              
              <div className="w-6 md:w-16 h-px bg-[#616E33]/50 mb-2 md:mb-6"></div>

              <p className="text-[#E8E2D9] font-light  text-xs sm:text-sm md:text-base leading-relaxed">
                {item.text}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
