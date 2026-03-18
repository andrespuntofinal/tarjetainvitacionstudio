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
    backgroundColor: string;
    textColor: string;
  };
  carousel: {
    images: string[];
    autoPlayInterval: number;
    backgroundColor: string;
  };
  dressCode: {
    text: string;
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
  musicUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
  landing1: {
    background: "https://media.istockphoto.com/id/1330668657/es/vector/tarjeta-vectorial-de-acuarela-de-ramas-verdes-y-hojas-aisladas-sobre-un-fondo-blanco-flor.jpg?s=612x612&w=0&k=20&c=TDAGJ6S_KIG6LKqVmfO0EhxEkopQhI55W_EtZrOekNk=",
    message: "Queremos invitarte a ser parte de un momento inolvidable.",
    messageFont: "'Cormorant Garamond', serif",
    messageColor: "text-stone-800",
  },
  envelope: {
    sealColor: "#8D939B", // amber-700
    envelopeColor: "#19284c", // amber-100
    innerColor: "#ffffff",
    couplePhoto: "https://picsum.photos/seed/wedding1/400/600",
    textureUrl: "https://www.transparenttextures.com/patterns/stardust.png",
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
    background: "w-full md:w-[95%] max-w-7xl mx-auto my-4 md:my-12 md:rounded-3xl shadow-xl bg-gradient-to-br from-[#F7F9FA] to-[#E8E2D9] border-y md:border border-[#D7B272]/30",
  },
  countdown: {
    backgroundColor: "w-full h-full md:rounded-3xl shadow-xl bg-[#19284c] border-y md:border border-[#D7B272]/20",
    textColor: "text-[#F7F9FA]",
    labelColor: "text-[#A5ADB8]",
  },
  calendar: {
    dateText: "17 de Noviembre, 2026",
    backgroundColor: "w-full h-full md:rounded-3xl shadow-xl bg-[#19284c] border-y md:border border-[#D7B272]/20",
    textColor: "text-[#19284c]",
  },
  carousel: {
    images: [
      "https://picsum.photos/seed/couple1/800/600",
      "https://picsum.photos/seed/couple2/800/600",
      "https://picsum.photos/seed/couple3/800/600",
      "https://picsum.photos/seed/couple4/800/600",
      "https://picsum.photos/seed/couple5/800/600",
    ],
    autoPlayInterval: 3000,
    backgroundColor: "w-full md:w-[95%] max-w-7xl mx-auto my-4 md:my-12 md:rounded-3xl shadow-xl bg-gradient-to-br from-[#19284c] to-[#27272B] border-y md:border border-[#D7B272]/20",
  },
  dressCode: {
    text: "Mujer: Vestido elegante (no blanco) - Hombre: Traje elegante",
    iconColor: "text-[#D7B272]",
    backgroundColor: "w-full md:w-[95%] max-w-7xl mx-auto my-4 md:my-12 md:rounded-3xl shadow-xl bg-gradient-to-br from-[#F7F9FA] to-[#E8E2D9] border-y md:border border-[#D7B272]/30",
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
    backgroundColor: "w-full md:w-[95%] max-w-7xl mx-auto my-4 md:my-12 md:rounded-3xl shadow-xl bg-gradient-to-br from-[#19284c] to-[#27272B] border-y md:border border-[#D7B272]/20",
    textColor: "text-[#F7F9FA]",
  },
  timeline: {
    font: "'Cormorant Garamond', serif",
    textColor: "text-[#19284c]",
    backgroundColor: "w-full md:w-[95%] max-w-7xl mx-auto my-4 md:my-12 md:rounded-3xl shadow-xl bg-gradient-to-br from-[#F7F9FA] to-[#E8E2D9] border-y md:border border-[#D7B272]/30",
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
    buttonText: "Quiero asistir",
    successMessage: "Es un honor contar con tu asistencia a nuestra boda, gracias por confirmar",
    backgroundColor: "w-full md:w-[95%] max-w-7xl mx-auto my-4 md:my-12 md:rounded-3xl shadow-xl bg-gradient-to-br from-[#19284c] to-[#27272B] border-y md:border border-[#D7B272]/20",
    buttonColor: "bg-[#D7B272]",
  },
  landing2Background: "https://media.istockphoto.com/id/1330668657/es/vector/tarjeta-vectorial-de-acuarela-de-ramas-verdes-y-hojas-aisladas-sobre-un-fondo-blanco-flor.jpg?s=612x612&w=0&k=20&c=TDAGJ6S_KIG6LKqVmfO0EhxEkopQhI55W_EtZrOekNk=",
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
