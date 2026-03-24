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
    return <IconComponent className="w-8 h-8 text-[#F7F9FA] group-hover:text-[#F7F9FA] transition-colors duration-300" strokeWidth={1.5} />;
  };

  return (
    <section className={`${timeline.backgroundColor} py-16 px-6`}>
      <div className="max-w-5xl mx-auto">
        <h2 className="font-serif text-3xl text-center mb-12 text-[#D7B272]">Itinerario</h2>

        <div className="relative">
          {/* Horizontal line for desktop */}
          <div className="hidden md:block absolute top-10 left-[10%] right-[10%] h-0.5 bg-[#D7B272]/50 z-0" />
          
          {/* Vertical line for mobile */}
          <div className="md:hidden absolute left-1/2 top-10 bottom-10 w-0.5 bg-[#D7B272]/50 -translate-x-1/2 z-0" />

          <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-12 md:gap-4">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative z-10 flex flex-col items-center text-center w-full md:w-1/5 group"
              >
                <div className="w-20 h-20 bg-[#19284c] rounded-full flex items-center justify-center mb-6 border-4 border-[#A5ADB8] shadow-xl group-hover:scale-110 group-hover:bg-[#616E33]/30 group-hover:border-[#D7B272]/30 transition-all duration-300">
                  {renderIcon(step.iconName)}
                </div>
                
                <div className="bg-[#F7F9FA]/80 backdrop-blur-sm px-4 py-3 rounded-2xl shadow-sm border border-[#D7B272]/20 w-48 md:w-full group-hover:shadow-[0_0_15px_rgba(215,178,114,0.15)] transition-all duration-300">
                  <span className="text-sm font-bold tracking-widest uppercase text-[#616E33] mb-1 block">
                    {step.time}
                  </span>
                  <h3 className="text-lg font-serif text-[#19284c] font-medium leading-tight">
                    {step.title}
                  </h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
