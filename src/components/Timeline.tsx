import React from "react";
import { motion } from "framer-motion";
import { APP_CONFIG } from "../constants";
import * as Icons from "lucide-react";

export default function Timeline() {
  const { timeline } = APP_CONFIG;

  const steps = [
    { time: timeline.timeStep1, title: timeline.textStep1, iconName: timeline.iconStep1 },
    { time: timeline.timeStep2, title: timeline.textStep2, iconName: timeline.iconStep2 },
    { time: timeline.timeStep3, title: timeline.textStep3, iconName: timeline.iconStep3 },
    { time: timeline.timeStep4, title: timeline.textStep4, iconName: timeline.iconStep4 },
    { time: timeline.timeStep5, title: timeline.textStep5, iconName: timeline.iconStep5 },
  ];

  const renderIcon = (iconName: string) => {
    const IconComponent = (Icons as any)[iconName] || Icons.Circle;
    return <IconComponent className="w-6 h-6" />;
  };

  return (
    <section className={`${timeline.backgroundColor} py-24 px-6`}>
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className={`text-4xl md:text-5xl mb-6 ${timeline.textColor}`} style={{ fontFamily: timeline.font }}>
            Itinerario
          </h2>
          <div className="w-24 h-1 bg-[#D7B272] mx-auto rounded-full" />
        </motion.div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-[#D7B272]/30 -translate-x-1/2" />

          <div className="space-y-12">
            {steps.map((step, index) => {
              const isEven = index % 2 === 0;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`relative flex items-center ${
                    isEven ? "md:flex-row-reverse" : "md:flex-row"
                  } flex-row`}
                >
                  {/* Icon */}
                  <div className="absolute left-8 md:left-1/2 w-12 h-12 bg-[#F7F9FA] rounded-full border-4 border-[#19284c] shadow-md flex items-center justify-center -translate-x-1/2 z-10 text-[#D7B272]">
                    {renderIcon(step.iconName)}
                  </div>

                  {/* Content */}
                  <div className={`ml-20 md:ml-0 md:w-1/2 ${isEven ? "md:pl-16" : "md:pr-16 text-left md:text-right"}`}>
                    <div className="bg-[#F7F9FA]/60 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-[#D7B272]/20">
                      <span className="text-sm font-bold tracking-widest uppercase text-[#A5ADB8] mb-2 block">
                        {step.time}
                      </span>
                      <h3 className={`text-2xl ${timeline.textColor}`} style={{ fontFamily: timeline.font }}>
                        {step.title}
                      </h3>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
