export interface AppConfig {
  weddingDate: string;
  coupleNames: string;
  guestName: string;
  numberGuests: number;
  musicUrl: string;
  landing1: {
    background: string;
    message: string;
    messageFont: string;
    messageColor: string;
  };
  envelope: {
    sealColor: string;
    envelopeColor: string;
    envelopeColorDeg: string;
    innerColor: string;
    couplePhoto: string;
    textureUrl?: string;
    envelopeMsg: string;
    envelopeMsgColor: string;
    envelopeFont: string;
    sealImage: string;
    confettiColors: string[];
    overlayColor: string;
    cardBackgroundColor: string;
    accentColor: string;
    textColor: string;
    textDarkColor: string;
    photoBackgroundColor: string;
    titleFont: string;
    sealTextColor: string;
  };
  banner: {
    image: string;
    videoDesktop: string;
    videoResponsive: string;
    titleFont: string;
    titleSize: string;
    textColor: string;
    subtitleFont: string;
    subtitleSize: string;
    subtextMsg: string;
    lineColor: string;
  };
  message: {
    text1: string;
    text2: string;
    groomParents: string;
    brideParents: string;
    font: string;
    colorText1: string;
    colorText2: string;
    colorParents: string;
    background: string;
    textSize: string;
  };
  countdown: {
    backgroundColor: string;
    textColor: string;
    labelColor: string;
    textMsg: string;
    textSize: string;
    boxShadowColor: string,
    borderColor: string,
    backgroundColor2: string,
    borderColorCircle: string,
    backgroundColorCircle: string,
    numberColorText1: string,
    numberColorText2: string,
    numberFontText: string,
  };
  calendar: {
    dateText: string;
    dateImg: string;
    backgroundColor: string;
    textColor: string;
    titleColorText: string;
    titleFontText: string;
    titleSizeText: string;
    titleMsgText: string;
    monthColorText: string,
    monthFontText: string,
    dayweekColorText: string,
    dayweekFontText: string,
    dayweekSizeText: string,
    dayHoverColor: string,
    dayColorText1: string,
    dayColorText2: string,
    daySelectedColor: string,
    
  };
  carousel: {
    carouselMsg: string;
    images: string[];
    autoPlayInterval: number;
    backgroundColor: string;
    titleColor: string,
    titleFont: string,
    cardStyle: string,
    durationTransition: number,
    buttonPrevStyle: string,
    buttonNextStyle: string,
    backgroundImgZoomStyle: string,
    closeColor: string,
  };
  dressCode: {
    titleFont: string;
    titleColor: string;
    titletext: string;
    dressCodeTextWomen: string;
    dressCodeTextMen: string;
    dressCodeIconWomen: string;
    dressCodeIconMen: string;
    iconColor: string;
    backgroundColor: string;
    cardStyle: string;
    circleStyle: string;
    titleWomen: string,
    titleMen: string,
    title2Color: string,
    title2Font: string,
    text2Color: string,
    text2Font: string,
    
  };
  eventDetails: {
    detailsTitle: string;
    detailsColor: string;
    detailsFont: string;
    cardStyle: string;
    detailsIcons: string;
    detailIconColor: string;
    detailItemTitleColor: string;
    detailItemTitleFont: string;
    detailItemText1Color: string;
    detailItemText1Font: string;
    detailIcon2Color: string;
    detailsMapsStyle: string;
    detailsMapsTitle: string;
    ceremony: {
      title: string;
      place: string;
      time: string;
    };
    celebration: {
      title: string;
      place: string;
      time: string;
    };
    ceremonyMaps: string;
    celebrationMaps: string;
    backgroundColor: string;
    textColor: string;
  };
  timeline: {
    font: string;
    textColor: string;
    backgroundColor: string;
    iconStep1: string;
    iconStep2: string;
    iconStep3: string;
    iconStep4: string;
    iconStep5: string;
    textStep1: string;
    textStep2: string;
    textStep3: string;
    textStep4: string;
    textStep5: string;
    timeStep1: string;
    timeStep2: string;
    timeStep3: string;
    timeStep4: string;
    timeStep5: string;
  };
  presents: {
    presentTitle: string;
    presentMessage: string;
    titleColor: string;
    titleFont: string;
    cardStyle: string;
    circleStyle: string;
    iconColor: string;
    textColor: string,
    textFont: string,
  };
    childRestriction: {
    childrestrictionTitle: string;
    childrestrictionMessage: string;
    titleColor:string,
    titleFont: string,
    cardStyle: string,
    circleStyle: string,
    iconColor: string,
    textColor: string,
    textFont: string,
  };
  rsvp: {
    buttonText: string;
    successMessage: string;
    rejectedMessage: string;
    backgroundColor: string;
    buttonColor: string;
    buttonTextColor: string;
    buttonTextFont: string;
    title2TextColor: string;
    title2TextFont: string;
    title2TextMsg: string;
    title3TextColor: string,
    title3TextFont: string,
    title3TextMsg: string,
    buttonYes1Style: string,
    buttonYes2Style: string,
    buttonYesMsg: string,
    buttonNot1Style: string,
    buttonNot2Style: string,
    buttonNotMsg: string,
    msgTextColor: string,
    msgTextFont: string,
    msgTextMsg: string,
    textareaStyle: string,
    buttonSendStyle: string,
    buttonSendMsg: string,
    confirmationTitleTextColor: string,
    confirmationTitleTextFont: string,
    confirmationTitleTextMsg: string,
    confirmationCircleColor: string,
    confirmationTextFont: string,
    confirmationTextColor: string,
  };
  landing2Background: string;
  googleAppsScriptUrl: string;
  webhookUrl: string;
  colors: {
    primary: string;
    secondary: string;
    light: string;
    accent: string;
    cream: string;
    gold: string;
    dark: string;
  };
}

export const APP_CONFIG: AppConfig = {
  weddingDate: "2026-11-17T17:00:00",
  coupleNames: "Juan & Laura",
  guestName: "Andrés & Johanna",
  numberGuests: 4,
  musicUrl: "https://res.cloudinary.com/dtfr6ngda/video/upload/v1773854087/pistaboda_heo1hi.mp3",
  landing1: {
    background: "https://res.cloudinary.com/dtfr6ngda/image/upload/v1773861644/texturamain_eg3hpd.png",
    message: "",
    messageFont: "'Cormorant Garamond', serif",
    messageColor: "text-stone-800",
  },
  envelope: {
    sealColor: "#9b958d", // amber-700
    envelopeColor: "#19284c", // amber-100
    envelopeColorDeg: "#5c678d",
    innerColor: "#ffffff",
    couplePhoto: "https://res.cloudinary.com/dtfr6ngda/image/upload/v1773852607/preboda4_j66mlm.jpg",
    textureUrl: "https://us.123rf.com/450wm/tomo00/tomo001502/tomo00150200192/36801568-papel-tapiz-de-fondo-de-material-marca-de-coraz%C3%B3n-modelo-del-coraz%C3%B3n-amor-d%C3%ADa-de-san-valent%C3%ADn-s.jpg?ver=6",
    envelopeMsg: "Queremos invitarte a ser parte de un momento inolvidable",
    envelopeMsgColor: "#F7F9FA",
    envelopeFont: "'Cormorant Garamond', serif",
    sealImage: "https://res.cloudinary.com/dtfr6ngda/image/upload/v1773802450/sello-removebg-preview_vaqap3.png",
    confettiColors: ["#b45309", "#fef3c7", "#ffffff"],
    overlayColor: "rgba(255, 255, 255, 0.4)",
    cardBackgroundColor: "#fdfbf7",
    accentColor: "#d4af37",
    textColor: "#57534e", // stone-600
    textDarkColor: "#44403c", // stone-700
    photoBackgroundColor: "#ffffff",
    titleFont: "'Playfair Display', serif",
    sealTextColor: "rgba(255, 255, 255, 0.9)", // white/90
  },
  banner: {
    image: "https://picsum.photos/seed/wedding-banner/1200/800",
    videoDesktop: "https://res.cloudinary.com/dtfr6ngda/video/upload/v1773852992/invitacion-boda-desktop_eso5oy.webm",
    videoResponsive: "https://res.cloudinary.com/dtfr6ngda/video/upload/v1773852980/video-responsive_mii2mt.webm",
    titleFont: "'Playfair Display', serif",
    subtitleFont: "'Playfair Display', serif",
    titleSize: "text-5xl md:text-7xl",
    subtitleSize: "text-3xl italic drop-shadow-md",
    textColor: "#F7F9FA",
    subtextMsg: "Nuestra Boda",
    lineColor: "bg-[#D7B272]",
  },
  message: {
    text1: "Cordón de tres hilos no se rompe fácilmente: Dios, tú y yo. Con amor y fe en nuestra unión, y con al bendición de nuestros padres:",
    text2: "Queremos invitarte a acompañarnos en el día más importante de nuestras vidas.",
    groomParents: "Albeiro Jaramillo & Marleny Torres",
    brideParents: "Héctor León & Bertha Perilla",
    font: "'Cormorant Garamond', serif",
    colorText1: "text-[#19284c]",
    textSize: "text-2xl md:text-3xl italic leading-relaxed",
    colorText2: "text-[#19284c]",
    colorParents: "text-[#735309]",
    background: "w-full my-1 md:my-1 md:rounded-3xl  backdrop-blur-lg  relative overflow-hidden",
  },
  countdown: {
    backgroundColor: "w-full my-4 md:my-12 md:rounded-3xl bg-gradient-to-br from-[#19284c] via-[#5c678d] to-[#19284c]  border border-[#A5ADB8] backdrop-blur-lg  relative overflow-hidden",
    textColor: "text-[#F7F9FA]",
    labelColor: "text-[#A5ADB8]",
    textMsg: "Tan sólo faltan",
    textSize: "font-serif text-2xl md:text-3xl",
    boxShadowColor: "#d79972",
    borderColor: "#f8f7fa",
    backgroundColor2: "#A5ADB8",
    borderColorCircle: "border-4 border-[#D7B272]",
    backgroundColorCircle: "bg-[#E8E2D9]",
    numberColorText1: "text-[#735309]",
    numberColorText2: "text-[#27272B]",
    numberFontText: "font-serif",
   
  },
  calendar: {
    dateText: "17 de Noviembre, 2026",
    dateImg: "https://res.cloudinary.com/dtfr6ngda/image/upload/v1774403705/PREBODA_Andres_y_Johana-58_dgf0jl.jpg",
    backgroundColor: "w-full md:w-[95%] max-w-4xl mx-auto my-4 md:my-12 md:rounded-3xl shadow-[0_10px_40px_rgba(0,0,0,0.15)] px-4 md:px-8 px-4 md:px-8  ",
    textColor: "text-[#19284c]",
    titleColorText: "text-[#735309]",
    titleFontText: "font-serif",
    titleSizeText: "text-2xl",
    titleMsgText: "El gran día",
    monthColorText: "text-[#27272B]",
    monthFontText: "font-serif",
    dayweekColorText: "text-[#735309]",
    dayweekFontText: "font-serif",
    dayweekSizeText: "text-[10px]",
    dayHoverColor: "hover:bg-[#D7B272]/20",
    dayColorText1: "#A5ADB8",
    dayColorText2: "#F7F9FA",
    daySelectedColor: "#19284c",
    
  },
  carousel: {
    carouselMsg: "Nuestros momentos",
    images: [
      "https://res.cloudinary.com/dtfr6ngda/image/upload/v1774407977/PREBODA_Andres_y_Johana-48_g77xpl.jpg",
      "https://res.cloudinary.com/dtfr6ngda/image/upload/v1774407982/PREBODA_Andres_y_Johana-135_zau7f5.jpg",
      "https://res.cloudinary.com/dtfr6ngda/image/upload/v1774407981/PREBODA_Andres_y_Johana-14_glaka6.jpg",
      "https://res.cloudinary.com/dtfr6ngda/image/upload/v1774407975/PREBODA_Andres_y_Johana-6_osi9wx.jpg",
      "https://res.cloudinary.com/dtfr6ngda/image/upload/v1774403621/PREBODA_Andres_y_Johana-67_aqnyjo.jpg",
    ],
    autoPlayInterval: 3000,
    backgroundColor: "w-full my-0 md:my-12 md:rounded-3xl  backdrop-blur-lg relative overflow-hidden",
    titleColor:"text-[#735309]",
    titleFont:"font-serif",
    cardStyle:"aspect-video md:aspect-[21/9] overflow-hidden rounded-none md:rounded-2xl shadow-[0_0_15px_rgba(215,178,114,0.15)] relative border-y md:border border-x-0 md:border-x border-[#616E33]/50 bg-gradient-to-br from-[#19284c] via-[#5c678d] to-[#19284c]",
    durationTransition: 0.8,
    buttonPrevStyle:"absolute left-4 top-1/2 -translate-y-1/2 bg-[#19284c]/80 text-[#D7B272] border border-[#D7B272]/50 p-2 rounded-full shadow-[0_0_10px_rgba(215,178,114,0.2)] opacity-0 group-hover:opacity-100 transition-all hover:bg-[#19284c] hover:scale-110",
    buttonNextStyle:"absolute right-4 top-1/2 -translate-y-1/2 bg-[#19284c]/80 text-[#D7B272] border border-[#D7B272]/50 p-2 rounded-full shadow-[0_0_10px_rgba(215,178,114,0.2)] opacity-0 group-hover:opacity-100 transition-all hover:bg-[#19284c] hover:scale-110",
    backgroundImgZoomStyle:"fixed inset-0 z-[100] bg-gradient-to-br from-[#19284c] via-[#5c678d] to-[#19284c] flex items-center justify-center p-4 backdrop-blur-sm",
    closeColor:"text-[#F7F9FA]",
  },
  dressCode: {
    titletext: "Código de Vestimenta",
    titleColor: "text-[#735309]",
    titleFont: "font-serif",
    dressCodeTextWomen: "Vestido elegante (no blanco)",
    dressCodeTextMen: "Traje elegante",
    dressCodeIconWomen: "https://res.cloudinary.com/dtfr6ngda/image/upload/v1773940159/womenico_vnki8h.png",
    dressCodeIconMen: "https://res.cloudinary.com/dtfr6ngda/image/upload/v1773939750/menicon_m1huiv.png",
    iconColor: "bg-[#735309]",
    backgroundColor: "w-full my-4 md:my-12 md:rounded-3xl bg-[#19284c] border border-[#A5ADB8]/30 backdrop-blur-lg relative overflow-hidden",
    cardStyle: "flex-1 py-6 px-1 md:p-10 rounded-none md:rounded-3xl shadow-xl flex flex-row items-start justify-center  bg-gradient-to-br from-[#19284c] via-[#5c678d] to-[#19284c] border-y md:border border-x-0 md:border-x border-[#A5ADB8]/30 relative overflow-hidden divide-x divide-[#D7B272]/30 gap-0",
    circleStyle: "w-10 h-10 md:w-20 md:h-20 bg-[#E8E2D9] rounded-full flex items-center justify-center mb-3 md:mb-6 border-2 md:border-4 border-[#D7B272] group-hover:scale-110 group-hover:bg-[#A5ADB8] transition-all duration-300",
    titleWomen: "Mujeres",
    titleMen: "Hombres",
    title2Color: "text-[#D7B272]",
    title2Font: "font-serif",
    text2Color: "text-[#E8E2D9]",
    text2Font: "font-light",
  },
  eventDetails: {
    detailsTitle: "Detalles del Evento",
    detailsColor: "text-[#735309]",
    detailsFont: "font-serif",
    cardStyle: "flex-1 py-6 px-1 md:p-10 rounded-none md:rounded-3xl shadow-xl flex flex-row items-start justify-center bg-gradient-to-br from-[#19284c] via-[#5c678d] to-[#19284c] border-y md:border border-x-0 md:border-x border-[#A5ADB8]/30 relative overflow-hidden divide-x divide-[#D7B272]/30 gap-0",
    detailsIcons: "w-10 h-10 md:w-20 md:h-20 bg-[#E8E2D9] rounded-full flex items-center justify-center mb-3 md:mb-6 border-2 md:border-4 border-[#D7B272] group-hover:scale-110 group-hover:bg-[#A5ADB8] transition-all duration-300",
    detailIconColor: "text-[#735309]",
    detailItemTitleColor: "text-[#D7B272]",
    detailItemTitleFont: "font-serif",
    detailItemText1Color: "text-[#E8E2D9]",
    detailItemText1Font: "font-light",
    detailIcon2Color: "text-[#D7B272]",
    detailsMapsStyle: "mt-auto inline-flex items-center justify-center gap-1.5 md:gap-2 px-3 py-1.5 md:px-5 md:py-2.5 rounded-full text-[10px] sm:text-xs md:text-sm font-medium tracking-wide border border-[#D7B272]/60 text-[#19284c] bg-white/70 backdrop-blur-sm hover:bg-[#D7B272]/10 hover:border-[#D7B272] ransition-all duration-300 ease-out",
    detailsMapsTitle: "Cómo llegar",
    ceremony: {
      title: "Ceremonia",
      place: "Iglesia Restauración y Poder",
      time: "5:00 PM",
    },
    celebration: {
      title: "Celebración",
      place: "Finca Aguas Claras Girardota",
      time: "7:00 PM",
    },
    ceremonyMaps: "https://maps.app.goo.gl/Ky1GMM5PuLfsGpcq9",
    celebrationMaps: "https://maps.app.goo.gl/Epp7d7ge5K2MuUfw8",
    backgroundColor: "w-full my-4 md:my-12 md:rounded-3xl bg-[#19284c] border border-[#A5ADB8] backdrop-blur-lg relative overflow-hidden",
    textColor: "text-[#F7F9FA]",
  },
  timeline: {
    font: "'Cormorant Garamond', serif",
    textColor: "text-[#19284c]",
    backgroundColor: "w-full my-4 md:my-12 md:rounded-3xl border-3 border-[#A5ADB8]/30 backdrop-blur-lg relative overflow-hidden",
    iconStep1: "Church",
    iconStep2: "Camera",
    iconStep3: "Wine",
    iconStep4: "Utensils",
    iconStep5: "Music",
    textStep1: "Ceremonia",
    textStep2: "Recepción",
    textStep3: "Brindis",
    textStep4: "Cena",
    textStep5: "Cierre",
    timeStep1: "4:00 pm",
    timeStep2: "6:00 pm",
    timeStep3: "6:30 pm",
    timeStep4: "7:00 pm",
    timeStep5: "8:00 pm",
  },
  presents: {
    presentTitle: "Lluvia de sobres",
    presentMessage: "Tu presencia es nuestro mejor regalo, pero si deseas acompañarnos con un detalle, agradecemos tu lluvia de sobres",
    titleColor:"text-[#735309]",
    titleFont:"font-serif",
    cardStyle:"flex-1 py-8 px-4 md:p-10 rounded-none md:rounded-3xl shadow-xl flex flex-col items-center justify-center text-center bg-gradient-to-br from-[#19284c] via-[#5c678d] to-[#19284c] border-y md:border border-x-0 md:border-x border-[#A5ADB8]/30 relative overflow-hidden divide-x divide-[#D7B272]/30 gap-0",
    circleStyle:"w-16 h-16 md:w-24 md:h-24 bg-[#E8E2D9] rounded-full flex items-center justify-center mb-6 md:mb-8 border-2 md:border-4 border-[#D7B272] hover:scale-110 hover:bg-[#A5ADB8] transition-all duration-300",
    iconColor:"text-[#735309]",
    textColor:"text-[#E8E2D9]",
    textFont:"font-light",
  },
   childRestriction: {
    childrestrictionTitle: "Recomendaciones",
    childrestrictionMessage: "Para que todos puedan disfrutar plenamente de la celebración, este será un evento solo para adultos. Agradecemos tu comprensión.",
    titleColor:"text-[#735309]",
    titleFont:"font-serif",
    cardStyle:"flex-1 py-8 px-4 md:p-10 rounded-none md:rounded-3xl shadow-xl flex flex-col items-center justify-center text-center bg-gradient-to-br from-[#19284c] via-[#5c678d] to-[#19284c] border-y md:border border-x-0 md:border-x border-[#A5ADB8]/30 relative overflow-hidden divide-x divide-[#D7B272]/30 gap-0",
    circleStyle:"w-16 h-16 md:w-24 md:h-24 bg-[#E8E2D9] rounded-full flex items-center justify-center mb-6 md:mb-8 border-2 md:border-4 border-[#D7B272] hover:scale-110 hover:bg-[#A5ADB8] transition-all duration-300",
    iconColor:"text-[#735309]",
    textColor:"text-[#E8E2D9]",
    textFont:"font-light",
  },
  rsvp: {
    buttonText: "Confirmar tu asistencia",
    successMessage: "es un honor contar con tu asistencia a nuestra boda, gracias por confirmar",
    rejectedMessage: "lamentamos no poder contar con su presencia, pero agradecemos mucho que nos hayas avisado.",
    backgroundColor: "w-full md:w-[95%] max-w-7xl mx-auto my-4 md:my-12 md:rounded-3xl relative overflow-hidden",
    buttonColor: "bg-[#19284c]",
    buttonTextColor:"text-[#F7F9FA]",
    buttonTextFont:"font-serif",
    title2TextColor:"text-[#D7B272]",
    title2TextFont:"font-serif",
    title2TextMsg:"Confirmar asistencia",
    title3TextColor:"text-[#A5ADB8]",
    title3TextFont:"font-medium",
    title3TextMsg:"¿Asistirás al evento?",
    buttonYes1Style:"border-[#D7B272] bg-[#19284c] text-[#A5ADB8]",
    buttonYes2Style:"border-[#A5ADB8]/50 bg-[#19284c]/10 text-[#A5ADB8] hover:border-[#D7B272]",
    buttonYesMsg:"Si asistiré",
    buttonNot1Style:"border-[#D7B272] bg-[#19284c] text-[#A5ADB8]",
    buttonNot2Style:"border-[#A5ADB8]/50 bg-[#19284c]/10 text-[#A5ADB8] hover:border-[#D7B272]",
    buttonNotMsg:"No podré asistir",
    msgTextColor:"text-[#A5ADB8]",
    msgTextFont:"font-medium",
    msgTextMsg:"Mensaje para los novios",
    textareaStyle:"w-full px-4 py-3 rounded-xl border border-[#A5ADB8] bg-[#F7F9FA]/10 text-[#27272B] focus:ring-2 focus:ring-[#D7B272] focus:border-transparent outline-none transition-all h-32 resize-none placeholder:text-[#A5ADB8]/50",
    buttonSendStyle:"w-full bg-[#19284c] text-[#A5ADB8] py-4 rounded-xl font-bold hover:bg-[#19284c]/80 transition-colors shadow-lg disabled:opacity-70 flex justify-center items-center",
    buttonSendMsg:"Confirmar Asistencia",
    confirmationTitleTextColor:"text-[#19284c]",
    confirmationTitleTextFont:"font-serif",
    confirmationTitleTextMsg:"¡Gracias por confirmar!",
    confirmationCircleColor:"text-[#616E33]",
    confirmationTextFont:"font-serif",
    confirmationTextColor:"text-[#19284c]/80!",

  },
  landing2Background: "https://res.cloudinary.com/dtfr6ngda/image/upload/v1773861644/texturamain_eg3hpd.png",
  googleAppsScriptUrl: "https://script.google.com/macros/s/AKfycbzrYOi4H3XGg2VmAdTaMr7O_ySoQYD3dU2nL9EiUd3VTs_8xlr4hJFXKgSC_JbEQd83/exec", // Pega aquí la URL de tu Google Apps Script
  webhookUrl:"http://localhost:5678/webhook-test/4626d0ef-daae-4826-a7c2-ed5316a446fe",
  colors: {
    primary: "#19284c",
    secondary: "#A5ADB8",
    light: "#F7F9FA",
    accent: "#616E33",
    cream: "#E8E2D9",
    gold: "#D7B272",
    dark: "#27272B"
  }
};

// Update guestName and numberGuests from URL parameters if they exist
if (typeof window !== "undefined") {
  const urlParams = new URLSearchParams(window.location.search);
  const guestNameParam = urlParams.get("guestName");
  const numberGuestsParam = urlParams.get("numberGuests");

  if (guestNameParam) {
    APP_CONFIG.guestName = guestNameParam;
  }

  if (numberGuestsParam) {
    const parsedNumber = parseInt(numberGuestsParam, 10);
    if (!isNaN(parsedNumber)) {
      APP_CONFIG.numberGuests = parsedNumber;
    }
  }
}
