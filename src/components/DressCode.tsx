import { motion } from "framer-motion";
import { APP_CONFIG } from "../constants";

export default function DressCode() {
  const details = [
    {
      title: APP_CONFIG.dressCode.titleWomen,
      iconUrl: APP_CONFIG.dressCode.dressCodeIconWomen,
      text: APP_CONFIG.dressCode.dressCodeTextWomen,
    },
    {
      title: APP_CONFIG.dressCode.titleMen,
      iconUrl: APP_CONFIG.dressCode.dressCodeIconMen,
      text: APP_CONFIG.dressCode.dressCodeTextMen,
    },
  ];

  return (
    <section className="w-full h-full flex flex-col">
      <div className="w-full mx-auto flex-1 flex flex-col">
        <h2 className={` ${APP_CONFIG.dressCode.titleFont} text-xl md:text-2xl text-center mb-6 md:mb-10 tracking-widest uppercase ${APP_CONFIG.dressCode.titleColor}`}
          >
          
          { APP_CONFIG.dressCode.titletext}
        </h2>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className={`${APP_CONFIG.dressCode.cardStyle}`}
        >
          {details.map((item, index) => (
            <div
              key={item.title}
              className="flex-1 flex flex-col items-center text-center px-1 md:px-8 group w-full"
            >
              <div className={`${APP_CONFIG.dressCode.circleStyle}`}>
                <div
                  className=
                  {`w-5 h-5 md:w-12 md:h-12 ${APP_CONFIG.dressCode.iconColor}`}
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
              <h3 className={` ${APP_CONFIG.dressCode.title2Font} text-lg md:text-3xl mb-2 md:mb-4 ${APP_CONFIG.dressCode.title2Color} leading-relaxed`}>{item.title}</h3>
              
              <p className={` ${APP_CONFIG.dressCode.text2Color} ${APP_CONFIG.dressCode.text2Font} text-xs sm:text-sm md:text-base leading-relaxed`}>
                
                {item.text}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
