import React from "react";
import { motion } from "framer-motion";
import Banner from "./Banner";
import Message from "./Message";
import Countdown from "./Countdown";
import Calendar from "./Calendar";
import Carousel from "./Carousel";
import DressCode from "./DressCode";
import EventDetails from "./EventDetails";
import Timeline from "./Timeline";
import RSVP from "./RSVP";
import FooterControls from "./FooterControls";
import { APP_CONFIG } from "../constants";

interface Landing2Props {
  onClose: () => void;
  key?: string;
}

export default function Landing2({ onClose }: Landing2Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen w-full relative"
      style={{ backgroundColor: APP_CONFIG.colors.light }}
    >
      {/* Subtle Floral Background */}
      <div 
        className="fixed inset-0 z-0 opacity-20 pointer-events-none "
        style={{
          backgroundImage: `url(${APP_CONFIG.landing2Background})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      />

       <div className="relative z-10 pb-24">
        <Banner />
        <Message />
        <div className="w-full md:w-[95%] max-w-7xl mx-auto flex flex-col md:flex-row gap-4 md:gap-8 px-0 md:px-0 my-4 md:my-12">
          <div className="flex-1 w-full">
            <Countdown />
          </div>
          <div className="flex-1 w-full">
            <Calendar />
          </div>
        </div>
        <Carousel />
        <DressCode />
        <EventDetails />
        <Timeline />
        <RSVP />
      </div>
      
      <FooterControls onClose={onClose} />
    </motion.div>
  );
}
