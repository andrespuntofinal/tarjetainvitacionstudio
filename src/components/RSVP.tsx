import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { APP_CONFIG } from "../constants";

export default function RSVP() {
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({ name: "", message: "", attendance: "yes" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const scriptUrl = APP_CONFIG.googleAppsScriptUrl || import.meta.env.VITE_GOOGLE_APPS_SCRIPT_URL;

    if (scriptUrl) {
      try {
        const data = new FormData();
        data.append("Nombre", formData.name);
        data.append("Mensaje", formData.message);
        data.append("Número invitados", String(APP_CONFIG.numberGuests));
        data.append("Asistencia", formData.attendance);

        await fetch(scriptUrl, {
          method: "POST",
          body: data,
          mode: "no-cors",
        });
      } catch (error) {
        console.error("Error al guardar en Google Sheets:", error);
      }
    } else {
      console.warn("VITE_GOOGLE_APPS_SCRIPT_URL no está definida. Simulando envío.");
      await new Promise(resolve => setTimeout(resolve, 1000));
    }

    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  return (
    <section className={`${APP_CONFIG.rsvp.backgroundColor} py-24 px-6`}>
      <div className="max-w-xl mx-auto text-center">
        <AnimatePresence mode="wait">
          {!isSubmitted ? (
            <motion.div
              key="form"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <h2 className="font-serif text-3xl mb-8 text-[#F7F9FA]">¿Nos acompañas?</h2>
              
              {!isFormVisible ? (
                <button
                  onClick={() => setIsFormVisible(true)}
                  className={`${APP_CONFIG.rsvp.buttonColor} text-white px-10 py-4 rounded-full text-lg font-medium hover:scale-105 transition-transform shadow-xl`}
                >
                  {APP_CONFIG.rsvp.buttonText}
                </button>
              ) : (
                <motion.form
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  onSubmit={handleSubmit}
                  className="space-y-6 text-left"
                >
                  <div>
                    <label className="block text-sm font-medium text-[#A5ADB8] uppercase tracking-widest mb-4">
                      ¿Asistirás al evento?
                    </label>
                    <div className="grid grid-cols-2 gap-4">
                      <button
                        type="button"
                        onClick={() => setFormData({ ...formData, attendance: "yes" })}
                        className={`py-3 px-4 rounded-xl border-2 transition-all font-medium ${
                          formData.attendance === "yes"
                            ? "border-[#D7B272] bg-[#D7B272] text-[#19284c]"
                            : "border-[#A5ADB8]/50 text-[#F7F9FA] hover:border-[#D7B272]"
                        }`}
                      >
                        Sí asistiré
                      </button>
                      <button
                        type="button"
                        onClick={() => setFormData({ ...formData, attendance: "no" })}
                        className={`py-3 px-4 rounded-xl border-2 transition-all font-medium ${
                          formData.attendance === "no"
                            ? "border-[#D7B272] bg-[#D7B272] text-[#19284c]"
                            : "border-[#A5ADB8]/50 text-[#F7F9FA] hover:border-[#D7B272]"
                        }`}
                      >
                        No podré asistir
                      </button>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-[#A5ADB8] uppercase tracking-widest mb-2">
                      Nombre Completo
                    </label>
                    <input
                      required
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-[#A5ADB8]/30 bg-[#F7F9FA]/10 text-[#F7F9FA] focus:ring-2 focus:ring-[#D7B272] focus:border-transparent outline-none transition-all placeholder:text-[#A5ADB8]/50"
                      placeholder="Tu nombre"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#A5ADB8] uppercase tracking-widest mb-2">
                      Mensaje para los novios
                    </label>
                    <textarea
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-[#A5ADB8]/30 bg-[#F7F9FA]/10 text-[#F7F9FA] focus:ring-2 focus:ring-[#D7B272] focus:border-transparent outline-none transition-all h-32 resize-none placeholder:text-[#A5ADB8]/50"
                      placeholder="Escribe algo lindo..."
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-[#D7B272] text-[#19284c] py-4 rounded-xl font-bold hover:bg-[#D7B272]/90 transition-colors shadow-lg disabled:opacity-70 flex justify-center items-center"
                  >
                    {isSubmitting ? (
                      <span className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                    ) : (
                      "Confirmar Asistencia"
                    )}
                  </button>
                </motion.form>
              )}
            </motion.div>
          ) : (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-stone-50 p-10 rounded-3xl"
            >
              <CheckCircle2 className="w-16 h-16 text-[#616E33] mx-auto mb-6" />
              <h3 className="font-serif text-2xl mb-4 text-[#19284c]">¡Gracias por confirmar!</h3>
              <p className="text-[#19284c]/80 leading-relaxed">
                {formData.attendance === "yes" 
                  ? APP_CONFIG.rsvp.successMessage 
                  : "Lamentamos que no puedas acompañarnos, pero agradecemos mucho que nos hayas avisado."}
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
