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
        className="fixed inset-0 z-0 opacity-25 pointer-events-none"
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
        <Countdown />
        <Calendar />
        <EventDetails />
        <DressCode />
        <Carousel />
        <Timeline />
        <RSVP />
      </div>
      
      <FooterControls onClose={onClose} />
    </motion.div>
  );
}
