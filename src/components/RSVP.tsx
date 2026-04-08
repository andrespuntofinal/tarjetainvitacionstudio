import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, X } from "lucide-react";
import { APP_CONFIG } from "../constants";

export default function RSVP() {
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({ message: "", attendance: "si" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);      
    
    const webhookUrl = APP_CONFIG.webhookUrl;
    
    if (webhookUrl) {
      try {
        const payload = {
          nombre: APP_CONFIG.guestName,
          mensaje: formData.message,
          numeroInvitados: APP_CONFIG.numberGuests,
          asistencia: formData.attendance,
          fechaConfirmacion: new Date().toISOString()
        };

        await fetch(webhookUrl, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        });
      } catch (error) {
        console.error("Error al enviar datos al webhook:", error);
      }
    } else {
      console.warn("Webhook URL no está definida. Simulando envío.");
      await new Promise(resolve => setTimeout(resolve, 1000));
    }

    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const handleClose = () => {
    setIsSubmitted(false);
    setIsFormVisible(false);
    setFormData({ message: "", attendance: "si" });
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
              <h2 className="font-serif text-3xl text-center mb-0 text-[#19284c]"></h2>
              
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
                    <h2 className="font-serif text-3xl text-center mb-12 text-[#D7B272]">Confirmar asistencia</h2>
                    <label className="block text-sm font-medium text-[#A5ADB8] uppercase tracking-widest mb-4">
                      ¿Asistirás al evento?
                    </label>
                    <div className="grid grid-cols-2 gap-4">
                      <button
                        type="button"
                        onClick={() => setFormData({ ...formData, attendance: "si" })}
                        className={`py-3 px-4 rounded-xl border-2 transition-all font-medium ${
                          formData.attendance === "si"
                            ? "border-[#D7B272] bg-[#19284c] text-[#A5ADB8]"
                            : "border-[#A5ADB8]/50 text-[#A5ADB8] hover:border-[#D7B272]"
                        }`}
                      >
                        Sí asistiré
                      </button>
                      <button
                        type="button"
                        onClick={() => setFormData({ ...formData, attendance: "no" })}
                        className={`py-3 px-4 rounded-xl border-2 transition-all font-medium ${
                          formData.attendance === "no"
                            ? "border-[#D7B272] bg-[#19284c] text-[#A5ADB8]"
                            : "border-[#A5ADB8]/50 text-[#A5ADB8] hover:border-[#D7B272]"
                        }`}
                      >
                        No podré asistir
                      </button>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-[#A5ADB8] uppercase tracking-widest mb-2">
                      Mensaje para los novios
                    </label>
                    <textarea
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-[#A5ADB8] bg-[#F7F9FA]/10 text-[#27272B] focus:ring-2 focus:ring-[#D7B272] focus:border-transparent outline-none transition-all h-32 resize-none placeholder:text-[#A5ADB8]/50"
                      placeholder="Escribe algo lindo..."
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-[#19284c] text-[#E8E2D9] py-4 rounded-xl font-bold hover:bg-[#616E33]/90 transition-colors shadow-lg disabled:opacity-70 flex justify-center items-center"
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
              className="bg-stone-50 p-10 rounded-3xl relative"
            >
              <button 
                onClick={handleClose}
                className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
              <CheckCircle2 className="w-16 h-16 text-[#616E33] mx-auto mb-6" />
              <h3 className="font-serif text-2xl mb-4 text-[#19284c]">¡Gracias por confirmar!</h3>
              <p className="text-[#19284c]/80 leading-relaxed">
                {formData.attendance === "si" 
                  ? `${APP_CONFIG.guestName} ${APP_CONFIG.rsvp.successMessage}`
                  : `${APP_CONFIG.guestName} ${APP_CONFIG.rsvp.rejectedMessage}`}
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
