export interface AppConfig {

  paramsGeneral: {
    weddingDate: string;
    coupleNames: string;
    guestName: string;
    numberGuests: number;
    musicUrl: string;
  },
  landing1: {
    background: string;
    message: string;
    messageFont: string;
    messageColor: string;
  };
  landing2: {
    colorPrimary: string;
    colorSecondary: string;
    colorLight: string;
    colorAccent: string;
    colorCream: string;
    colorGold: string;
    colorDark: string;
    background: string;
  };
  envelope: {
    sealColor: string;
    envelopeColor: string;
    envelopeColorDeg: string;
    innerColor: string;
    cardCouplePhoto: string;
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
    initialsCoupleTextColor: string;
    initialsCoupleText: string;
    cardMessageforguestsText: string;
    
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
    textSize: string;
  };
  countdown: {
    backgroundColor: string;
    titleTextFont: string,
    titleTextColor: string,
    titleTextMsg: string,
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
    titleTextColor: string;
    titleTextFont: string;
    titleMsgText: string;
    monthColorText: string,
    monthFontText: string,
    dayweekColorText: string,
    dayweekFontText: string,
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
    buttonCloseColor: string,
  };
  dressCode: {
    titleFont: string;
    titleColor: string;
    titletext: string;
    dressCodeTextWomen: string;
    dressCodeTextMen: string;
    dressCodeIconWomen: string;
    dressCodeIconMen: string;
    iconbackgroundColor: string;
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
    buttonYes1Style: {
    backgroundColor: string,
    color: string,
    borderColor: string,
    fontFamily: string,
    },
    buttonYes2Style: {
    backgroundColor: string,
    color: string,
    borderColor: string,
    fontFamily: string,
    },
    buttonNot1Style: {
    backgroundColor: string,
    color: string,
    borderColor: string,
    fontFamily: string,
    },
    buttonNot2Style: {
    backgroundColor: string,
    color: string,
    borderColor: string,
    fontFamily: string,
    },
    buttonSendStyle: {
    backgroundColor: string,
    color: string,
    borderColor: string,
    fontFamily: string,
    },
    buttonYesMsg: string,
    buttonNotMsg: string,
    msgTextColor: string,
    msgTextFont: string,
    msgTextMsg: string,
    textareaStyle: {
    backgroundColor: string,
    colorText: string,
    borderColor: string,
    fontFamily: string,
    },
    buttonSendMsg: string,
    confirmationTitleTextColor: string,
    confirmationTitleTextFont: string,
    confirmationTitleTextMsg: string,
    confirmationCircleColor: string,
    confirmationTextFont: string,
    confirmationTextColor: string,
  };
  webhookUrl: string;

}

export const APP_CONFIG: AppConfig = {

  paramsGeneral: {
    weddingDate: "2026-09-19T17:00:00",
    coupleNames: "Juan & Laura",
    guestName: "Andrés & Johanna",
    numberGuests: 4,
    musicUrl: "https://res.cloudinary.com/dtfr6ngda/video/upload/v1776108444/Boda-JuanYLaura/pista-canci%C3%B3n_kox17r.mp3",
  },
  
  landing1: {
    background: "https://res.cloudinary.com/dtfr6ngda/image/upload/v1773861644/texturamain_eg3hpd.png",
    message: "",
    messageFont: "'Cormorant Garamond', serif",
    messageColor: "text-stone-800",
  },
  landing2: {
    colorPrimary: "#19284c",
    colorSecondary: "#A5ADB8",
    colorLight: "#F7F9FA",
    colorAccent: "#616E33",
    colorCream: "#E8E2D9",
    colorGold: "#D7B272",
    colorDark: "#27272B",
    background: "https://res.cloudinary.com/dtfr6ngda/image/upload/v1773861644/texturamain_eg3hpd.png",
  },
  envelope: {
    sealColor: "#9b958d", // amber-700
    envelopeColor: "#19284c", // amber-100
    envelopeColorDeg: "#5c678d",
    innerColor: "#ffffff",
    cardCouplePhoto: "https://res.cloudinary.com/dtfr6ngda/image/upload/v1776093978/Boda-JuanYLaura/FOTO43_-_Juan_David_Jaramillo_Osorio_uucwp9.jpg",
    textureUrl: "https://us.123rf.com/450wm/tomo00/tomo001502/tomo00150200192/36801568-papel-tapiz-de-fondo-de-material-marca-de-coraz%C3%B3n-modelo-del-coraz%C3%B3n-amor-d%C3%ADa-de-san-valent%C3%ADn-s.jpg?ver=6",
    envelopeMsg: "Nuestra historia sigue creciendo y queremos que seas parte de este capítulo tan importante",
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
    initialsCoupleTextColor: "#F7F9FA",
    initialsCoupleText:"J&L",
    cardMessageforguestsText:"Nos honra invitar a:"
    
  },
  banner: {
    image: "https://picsum.photos/seed/wedding-banner/1200/800",
    videoDesktop: "https://res.cloudinary.com/dtfr6ngda/video/upload/v1776098622/Boda-JuanYLaura/video-desktop_nn99oo.webm",
    videoResponsive: "https://res.cloudinary.com/dtfr6ngda/video/upload/v1773852980/video-responsive_mii2mt.webm",
    titleFont: "'Playfair Display', serif",
    subtitleFont: "'Playfair Display', serif",
    titleSize: "text-5xl md:text-7xl",
    subtitleSize: "text-3xl italic drop-shadow-md",
    textColor: "#F7F9FA",
    subtextMsg: "Nuestra Boda",
    
  },
  message: {
    text1: "Más valen dos que uno, porque obtienen más fruto de su esfuerzo. La cuerda de tres hilos no se rompe fácilmente.",
    text2: "Con el corazón lleno de amor, te invitamos a compartir con nosotros la alegría de unir nuestras vidas en matrimonio. Queremos que seas parte de este momento tan especial donde el amor será el lazo que nos unirá para siempre.",
    groomParents: "Eclesiastés 4, 9-12",
    brideParents: "",
    font: "'Cormorant Garamond', serif",
    colorText1: "#19284c",
    textSize: "text-2xl md:text-3xl italic leading-relaxed",
    colorText2: "text-[#19284c]",
    colorParents: "#735309",
   
  },
  countdown: {
    backgroundColor: "w-full my-4 md:my-12 md:rounded-3xl bg-gradient-to-br from-[#19284c] via-[#5c678d] to-[#19284c]  border border-[#A5ADB8] backdrop-blur-lg  relative overflow-hidden",  
    titleTextFont: "'Montserrat', sans-serif",
    titleTextColor: "#F7F9FA",
    titleTextMsg: "La espera casi termina",
    boxShadowColor: "#d79972",
    borderColor: "#f8f7fa",
    backgroundColor2: "#A5ADB8",
    borderColorCircle: "#D7B272",
    backgroundColorCircle: "#E8E2D9",
    numberColorText1: "#735309",
    numberColorText2: "#27272B",
    numberFontText: "'Montserrat', sans-serif",
   
  },
  calendar: {
    dateText: "17 de Noviembre, 2026",
    dateImg: "https://res.cloudinary.com/dtfr6ngda/image/upload/v1776115271/Boda-JuanYLaura/foto-calendar_vr1glp.jpg",
    backgroundColor: "w-full md:w-[95%] max-w-4xl mx-auto my-4 md:my-12 md:rounded-3xl shadow-[0_10px_40px_rgba(0,0,0,0.15)] px-4 md:px-8 px-4 md:px-8  ",
    titleTextColor: "#735309",
    titleTextFont: "'Montserrat', sans-serif",
    titleMsgText: "El día del “SÍ” ",
    monthColorText: "#27272B",
    monthFontText: "'Montserrat', sans-serif",
    dayweekColorText: "#735309",
    dayweekFontText: "'Montserrat', sans-serif",
    dayColorText1: "#A5ADB8",
    dayColorText2: "#F7F9FA",
    daySelectedColor: "#19284c",
    
  },
  carousel: {
    carouselMsg: "Instantes que nos definen",
    images: [
      "https://res.cloudinary.com/dtfr6ngda/image/upload/v1776198486/Boda-JuanYLaura/carrusel1_pnno6y.jpg",
      "https://res.cloudinary.com/dtfr6ngda/image/upload/v1776200181/Boda-JuanYLaura/carrusel2_wceact.jpg",
      "https://res.cloudinary.com/dtfr6ngda/image/upload/v1776198487/Boda-JuanYLaura/carrusel3_angtcs.jpg",
      "https://res.cloudinary.com/dtfr6ngda/image/upload/v1776198486/Boda-JuanYLaura/carrusel4_krgbax.jpg",
      "https://res.cloudinary.com/dtfr6ngda/image/upload/v1776198486/Boda-JuanYLaura/carrusel5_qeplmx.jpg",
    ],
    autoPlayInterval: 3000,
    backgroundColor: "w-full my-0 md:my-12 md:rounded-3xl  backdrop-blur-lg relative overflow-hidden",
    titleColor:"#735309",
    titleFont:"'Montserrat', sans-serif",
    cardStyle:"aspect-video md:aspect-[21/9] overflow-hidden rounded-none md:rounded-2xl shadow-[0_0_15px_rgba(215,178,114,0.15)] relative border-y md:border border-x-0 md:border-x border-[#616E33]/50 bg-gradient-to-br from-[#19284c] via-[#5c678d] to-[#19284c]",
    durationTransition: 0.8,
    buttonPrevStyle:"absolute left-4 top-1/2 -translate-y-1/2 bg-[#19284c]/80 text-[#D7B272] border border-[#D7B272]/50 p-2 rounded-full shadow-[0_0_10px_rgba(215,178,114,0.2)] opacity-0 group-hover:opacity-100 transition-all hover:bg-[#19284c] hover:scale-110",
    buttonNextStyle:"absolute right-4 top-1/2 -translate-y-1/2 bg-[#19284c]/80 text-[#D7B272] border border-[#D7B272]/50 p-2 rounded-full shadow-[0_0_10px_rgba(215,178,114,0.2)] opacity-0 group-hover:opacity-100 transition-all hover:bg-[#19284c] hover:scale-110",
    backgroundImgZoomStyle:"fixed inset-0 z-[100] bg-gradient-to-br from-[#19284c] via-[#5c678d] to-[#19284c] flex items-center justify-center p-4 backdrop-blur-sm",
    buttonCloseColor:"#F7F9FA",
  },
  dressCode: {
    titletext: "Código de Vestimenta",
    titleColor: "#735309",
    titleFont: "'Montserrat', sans-serif",
    dressCodeTextWomen: "Formal - Color blanco reservado para la novia",
    dressCodeTextMen: "Formal - Color azul reservado para el novio",
    dressCodeIconWomen: "https://res.cloudinary.com/dtfr6ngda/image/upload/v1773940159/womenico_vnki8h.png",
    dressCodeIconMen: "https://res.cloudinary.com/dtfr6ngda/image/upload/v1773939750/menicon_m1huiv.png",
    iconbackgroundColor: "#735309",
    backgroundColor: "w-full my-4 md:my-12 md:rounded-3xl bg-[#19284c] border border-[#A5ADB8]/30 backdrop-blur-lg relative overflow-hidden",
    cardStyle: "flex-1 py-6 px-1 md:p-10 rounded-none md:rounded-3xl shadow-xl flex flex-row items-start justify-center  bg-gradient-to-br from-[#19284c] via-[#5c678d] to-[#19284c] border-y md:border border-x-0 md:border-x border-[#A5ADB8]/30 relative overflow-hidden divide-x divide-[#D7B272]/30 gap-0",
    circleStyle: "w-10 h-10 md:w-20 md:h-20 bg-[#E8E2D9] rounded-full flex items-center justify-center mb-3 md:mb-6 border-2 md:border-4 border-[#D7B272] group-hover:scale-110 group-hover:bg-[#A5ADB8] transition-all duration-300",
    titleWomen: "Mujeres",
    titleMen: "Hombres",
    title2Color: "#D7B272",
    title2Font: "'Montserrat', sans-serif",
    text2Color: "#F7F9FA",
    text2Font: "'Montserrat', sans-serif",
  },
  eventDetails: {
    detailsTitle: "Detalles del Evento",
    detailsColor: "#735309",
    detailsFont: "'Montserrat', sans-serif",
    cardStyle: "flex-1 py-6 px-1 md:p-10 rounded-none md:rounded-3xl shadow-xl flex flex-row items-start justify-center bg-gradient-to-br from-[#19284c] via-[#5c678d] to-[#19284c] border-y md:border border-x-0 md:border-x border-[#A5ADB8]/30 relative overflow-hidden divide-x divide-[#D7B272]/30 gap-0",
    detailsIcons: "w-10 h-10 md:w-20 md:h-20 bg-[#E8E2D9] rounded-full flex items-center justify-center mb-3 md:mb-6 border-2 md:border-4 border-[#D7B272] group-hover:scale-110 group-hover:bg-[#A5ADB8] transition-all duration-300",
    detailIconColor: "#735309",
    detailItemTitleColor: "#D7B272",
    detailItemTitleFont: "'Montserrat', sans-serif",
    detailItemText1Color: "#F7F9FA",
    detailItemText1Font: "'Montserrat', sans-serif",
    detailIcon2Color: "#D7B272",
    detailsMapsStyle: "mt-auto inline-flex items-center justify-center gap-1.5 md:gap-2 px-3 py-1.5 md:px-5 md:py-2.5 rounded-full text-[10px] sm:text-xs md:text-sm font-medium tracking-wide border border-[#D7B272]/60 text-[#19284c] bg-white/70 backdrop-blur-sm hover:bg-[#D7B272]/10 hover:border-[#D7B272] ransition-all duration-300 ease-out",
    detailsMapsTitle: "Cómo llegar",
    ceremony: {
      title: "Ceremonia",
      place: "Parroquia San Juan Evangelista",
      time: "6:00 PM",
    },
    celebration: {
      title: "Celebración",
      place: "Eventos Sinaí",
      time: "7:00 PM",
    },
    ceremonyMaps: "https://maps.app.goo.gl/Ni2qgRDWrR534BDT7",
    celebrationMaps: "https://maps.app.goo.gl/BETiTWBgGTA44Q6v8",
  
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
    presentMessage: "Tu presencia es nuestro mayor regalo. Si deseas un detalle adicional, te invitamos a formar parte de nuestra “lluvia de sobres”",
    titleColor:"#735309",
    titleFont:"'Montserrat', sans-serif",
    cardStyle:"flex-1 py-8 px-4 md:p-10 rounded-none md:rounded-3xl shadow-xl flex flex-col items-center justify-center text-center bg-gradient-to-br from-[#19284c] via-[#5c678d] to-[#19284c] border-y md:border border-x-0 md:border-x border-[#A5ADB8]/30 relative overflow-hidden divide-x divide-[#D7B272]/30 gap-0",
    circleStyle:"w-16 h-16 md:w-24 md:h-24 bg-[#E8E2D9] rounded-full flex items-center justify-center mb-6 md:mb-8 border-2 md:border-4 border-[#D7B272] hover:scale-110 hover:bg-[#A5ADB8] transition-all duration-300",
    iconColor:"#735309",
    textColor:"#f8faf7",
    textFont:"'Montserrat', sans-serif",
  },
   childRestriction: {
    childrestrictionTitle: "Recomendaciones",
    childrestrictionMessage: "Queremos que disfruten al máximo, por eso en nuestra boda hemos optado por una celebración íntima solo para adultos. Agradecemos de corazón su comprensión y apoyo en esta decisión.",
    titleColor:"#735309",
    titleFont:"'Montserrat', sans-serif",
    cardStyle:"flex-1 py-8 px-4 md:p-10 rounded-none md:rounded-3xl shadow-xl flex flex-col items-center justify-center text-center bg-gradient-to-br from-[#19284c] via-[#5c678d] to-[#19284c] border-y md:border border-x-0 md:border-x border-[#A5ADB8]/30 relative overflow-hidden divide-x divide-[#D7B272]/30 gap-0",
    circleStyle:"w-16 h-16 md:w-24 md:h-24 bg-[#E8E2D9] rounded-full flex items-center justify-center mb-6 md:mb-8 border-2 md:border-4 border-[#D7B272] hover:scale-110 hover:bg-[#A5ADB8] transition-all duration-300",
    iconColor:"#735309",
    textColor:"#F7F9FA",
    textFont:"'Montserrat', sans-serif",
  },
  rsvp: {
    buttonText: "Confirmar tu asistencia",
    successMessage: "¡Genial! Tu presencia hará nuestra fiesta aún más especial.",
    rejectedMessage: "Gracias por notificarnos. Lamentamos tu ausencia, pero apreciamos mucho tu cariño y buenos deseos.",
    backgroundColor: "w-full md:w-[95%] max-w-7xl mx-auto my-4 md:my-12 md:rounded-3xl relative overflow-hidden",
    buttonColor: "#19284c",
    buttonTextColor:"#F7F9FA",
    buttonTextFont:"'Montserrat', sans-serif",
    title2TextColor:"#D7B272",
    title2TextFont:"'Montserrat', sans-serif",
    title2TextMsg:"Confirmar asistencia",
    title3TextColor:"#27272B",
    title3TextFont:"'Montserrat', sans-serif",
    title3TextMsg:"¿Asistirás al evento?",
    buttonYes1Style: {
    backgroundColor: "#19284c",
    color: '#A5ADB8',
    borderColor: '#A5ADB8',
    fontFamily:"'Montserrat', sans-serif",
    },
    buttonYes2Style: {
    backgroundColor: "#E8E2D9",
    color: '#A5ADB8',
    borderColor: "#D7B272",
    fontFamily:"'Montserrat', sans-serif",
    },
    buttonNot1Style: {
    backgroundColor: "#E8E2D9",
    color: "#A5ADB8",
    borderColor: "#D7B272",
    fontFamily:"'Montserrat', sans-serif",
    },
    buttonNot2Style: {
    backgroundColor: "#19284c",
    color: "#A5ADB8",
    borderColor: "#A5ADB8",
    fontFamily:"'Montserrat', sans-serif",
    },
    buttonSendStyle: {
    backgroundColor: "#19284c",
    color: "#A5ADB8",
    borderColor: "#A5ADB8",
    fontFamily:"'Montserrat', sans-serif",
    },
    buttonYesMsg:"Si asistiré",
    buttonNotMsg:"No podré asistir",
    msgTextColor:"#27272B",
    msgTextFont:"'Montserrat', sans-serif",
    msgTextMsg:"Mensaje para los novios",

    textareaStyle: {
    backgroundColor: "#F7F9FA",
    colorText: "#19284c",
    borderColor: "#A5ADB8",
    fontFamily: "'Montserrat', sans-serif"
    },
    buttonSendMsg:"Confirmar Asistencia",
    confirmationTitleTextColor:"#19284c",
    confirmationTitleTextFont:"'Montserrat', sans-serif",
    confirmationTitleTextMsg:"",
    confirmationCircleColor:"#D7B272",
    confirmationTextFont:"'Montserrat', sans-serif",
    confirmationTextColor:"#27272B",

  },
    
  webhookUrl:"http://localhost:5678/webhook-test/4626d0ef-daae-4826-a7c2-ed5316a446fe",
};

// Update guestName and numberGuests from URL parameters if they exist
if (typeof window !== "undefined") {
  const urlParams = new URLSearchParams(window.location.search);
  const guestNameParam = urlParams.get("guestName");
  const numberGuestsParam = urlParams.get("numberGuests");

  if (guestNameParam) {
    APP_CONFIG.paramsGeneral.guestName = guestNameParam;
  }

  if (numberGuestsParam) {
    const parsedNumber = parseInt(numberGuestsParam, 10);
    if (!isNaN(parsedNumber)) {
      APP_CONFIG.paramsGeneral.numberGuests = parsedNumber;
    }
  }
}
