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
    innerColor: string;
    couplePhoto: string;
    textureUrl?: string;
    envelopeMsg: string;
    envelopeMsgColor: string;
    envelopeFont: string;
    sealImage: string;
  };
  banner: {
    image: string;
    videoDesktop: string;
    videoResponsive: string;
    titleFont: string;
    titleSize: string;
    textColor: string;
  };
  message: {
    text: string;
    font: string;
    color: string;
    background: string;
  };
  countdown: {
    backgroundColor: string;
    textColor: string;
    labelColor: string;
  };
  calendar: {
    dateText: string;
    dateImg: string;
    backgroundColor: string;
    textColor: string;
  };
  carousel: {
    carouselMsg: string;
    images: string[];
    autoPlayInterval: number;
    backgroundColor: string;
  };
  dressCode: {
    text: string;
    dressCodeTextWomen: string;
    dressCodeTextMen: string;
    dressCodeIconWomen: string;
    dressCodeIconMen: string;
    iconColor: string;
    backgroundColor: string;
  };
  eventDetails: {
    ceremony: {
      place: string;
      time: string;
    };
    celebration: {
      place: string;
      time: string;
    };
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
  rsvp: {
    buttonText: string;
    successMessage: string;
    backgroundColor: string;
    buttonColor: string;
  };
  landing2Background: string;
  googleAppsScriptUrl: string;
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
    innerColor: "#ffffff",
    couplePhoto: "https://res.cloudinary.com/dtfr6ngda/image/upload/v1773852607/preboda4_j66mlm.jpg",
    textureUrl: "https://us.123rf.com/450wm/tomo00/tomo001502/tomo00150200192/36801568-papel-tapiz-de-fondo-de-material-marca-de-coraz%C3%B3n-modelo-del-coraz%C3%B3n-amor-d%C3%ADa-de-san-valent%C3%ADn-s.jpg?ver=6",
    envelopeMsg: "Queremos invitarte a ser parte de un momento inolvidable",
    envelopeMsgColor: "#D7B272",
    envelopeFont: "var(--font-romantic)",
    sealImage: "https://res.cloudinary.com/dtfr6ngda/image/upload/v1773802450/sello-removebg-preview_vaqap3.png",
  },
  banner: {
    image: "https://picsum.photos/seed/wedding-banner/1200/800",
    videoDesktop: "https://res.cloudinary.com/dtfr6ngda/video/upload/v1773852992/invitacion-boda-desktop_eso5oy.webm",
    videoResponsive: "https://res.cloudinary.com/dtfr6ngda/video/upload/v1773852980/video-responsive_mii2mt.webm",
    titleFont: "'Playfair Display', serif",
    titleSize: "text-5xl md:text-7xl",
    textColor: "text-white",
  },
  message: {
    text: "Dios nos ha unido para formar una familia maravillosa",
    font: "'Cormorant Garamond', serif",
    color: "text-[#19284c]",
    background: "w-full h-full my-4 md:my-0  backdrop-blur-lg  relative overflow-hidden",
  },
  countdown: {
    backgroundColor: "w-full h-full md:rounded-3xl bg-[rgba(25, 40, 76, 0)] backdrop-blur-lg  relative overflow-hidden",
    textColor: "text-[#F7F9FA]",
    labelColor: "text-[#A5ADB8]",
  },
  calendar: {
    dateText: "17 de Noviembre, 2026",
    dateImg: "https://res.cloudinary.com/dtfr6ngda/image/upload/v1774403705/PREBODA_Andres_y_Johana-58_dgf0jl.jpg",
    backgroundColor: "w-full md:w-[95%] max-w-2xl mx-auto my-4 md:my-35 md:rounded-3xl shadow-xl bg-[#19284c] border-4  border-[#A5ADB8] ",
    textColor: "text-[#19284c]",
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
    backgroundColor: "w-full md:w-[95%] max-w-7xl mx-auto my-4 md:my-12 md:rounded-3xl ackdrop-blur-lg  relative overflow-hidden",
  },
  dressCode: {
    text: "Mujer: Vestido elegante (no blanco) - Hombre: Traje elegante",
    dressCodeTextWomen: "Vestido elegante (no blanco)",
    dressCodeTextMen: "Traje elegante",
    dressCodeIconWomen: "https://res.cloudinary.com/dtfr6ngda/image/upload/v1773940159/womenico_vnki8h.png",
    dressCodeIconMen: "https://res.cloudinary.com/dtfr6ngda/image/upload/v1773939750/menicon_m1huiv.png",
    iconColor: "text-[#D7B272]",
    backgroundColor: "w-full md:w-[95%] max-w-7xl mx-auto my-4 md:my-12 md:rounded-3xl backdrop-blur-lg relative overflow-hidden",
  },
  eventDetails: {
    ceremony: {
      place: "Iglesia Dios Salva",
      time: "5:00 PM",
    },
    celebration: {
      place: "Salón de Eventos AmorReal",
      time: "7:00 PM",
    },
    backgroundColor: "w-full md:w-[95%] max-w-7xl mx-auto my-4 md:my-12 md:rounded-3xl  backdrop-blur-lg relative overflow-hidden",
    textColor: "text-[#F7F9FA]",
  },
  timeline: {
    font: "'Cormorant Garamond', serif",
    textColor: "text-[#19284c]",
    backgroundColor: "w-full md:w-[95%] max-w-7xl mx-auto my-4 md:my-12 md:rounded-3xl backdrop-blur-lg relative overflow-hidden",
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
  rsvp: {
    buttonText: "Confirmar asistencia",
    successMessage: "Es un honor contar con tu asistencia a nuestra boda, gracias por confirmar",
    backgroundColor: "w-full md:w-[95%] max-w-7xl mx-auto my-4 md:my-12 md:rounded-3xl relative overflow-hidden",
    buttonColor: "bg-[#19284c]",
  },
  landing2Background: "https://res.cloudinary.com/dtfr6ngda/image/upload/v1773861644/texturamain_eg3hpd.png",
  googleAppsScriptUrl: "https://script.google.com/macros/s/AKfycbzrYOi4H3XGg2VmAdTaMr7O_ySoQYD3dU2nL9EiUd3VTs_8xlr4hJFXKgSC_JbEQd83/exec", // Pega aquí la URL de tu Google Apps Script
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
