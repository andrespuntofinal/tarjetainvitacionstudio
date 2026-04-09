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
             
              {!isFormVisible ? (
                <button
                  onClick={() => setIsFormVisible(true)}
                  className={`${APP_CONFIG.rsvp.buttonColor} ${APP_CONFIG.rsvp.buttonTextColor} px-10 py-4 rounded-full text-lg  ${APP_CONFIG.rsvp.buttonTextFont} hover:scale-105 transition-transform shadow-xl`}
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
                    <h2 className={`${APP_CONFIG.rsvp.title2TextFont} text-3xl text-center mb-12 ${APP_CONFIG.rsvp.title2TextColor}`}> {APP_CONFIG.rsvp.title2TextMsg} </h2>
                    
                    <label className= {`block text-sm ${APP_CONFIG.rsvp.title3TextFont} ${APP_CONFIG.rsvp.title3TextColor} uppercase tracking-widest mb-4 `}>
                     
                      {APP_CONFIG.rsvp.title3TextMsg}
                    </label>
                    <div className="grid grid-cols-2 gap-4">
                      <button
                        type="button"
                        onClick={() => setFormData({ ...formData, attendance: "si" })}
                        className={`py-3 px-4 rounded-xl border-2 transition-all font-medium ${
                          formData.attendance === "si"
                            ? APP_CONFIG.rsvp.buttonYes1Style
                            : APP_CONFIG.rsvp.buttonYes2Style
                        }`}
                      >
                         {APP_CONFIG.rsvp.buttonYesMsg}
                      </button>
                      <button
                        type="button"
                        onClick={() => setFormData({ ...formData, attendance: "no" })}
                        className={`py-3 px-4 rounded-xl border-2 transition-all font-medium ${
                          formData.attendance === "no"
                            ? APP_CONFIG.rsvp.buttonNot1Style
                            : APP_CONFIG.rsvp.buttonNot2Style
                        }`}
                      >
                         {APP_CONFIG.rsvp.buttonNotMsg}
                      </button>
                    </div>
                  </div>

                  <div>
                    <label className= {`block text-sm ${APP_CONFIG.rsvp.msgTextFont} ${APP_CONFIG.rsvp.msgTextColor} uppercase tracking-widest mb-2`}>
                     {APP_CONFIG.rsvp.msgTextMsg}
                    </label>
                    <textarea
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className={`${APP_CONFIG.rsvp.textareaStyle}`}
                      
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`${APP_CONFIG.rsvp.buttonSendStyle}`}
                  >
                    {isSubmitting ? (
                      <span className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                    ) : (
                      APP_CONFIG.rsvp.buttonSendMsg
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
              <CheckCircle2 className={`w-16 h-16 ${APP_CONFIG.rsvp.confirmationCircleColor} mx-auto mb-6 `} />
              
              <h3 className= {`${APP_CONFIG.rsvp.confirmationTitleTextFont} text-2xl mb-4 ${APP_CONFIG.rsvp.confirmationTitleTextColor}`}>{APP_CONFIG.rsvp.confirmationTitleTextMsg}</h3>
             
              <p className={`${APP_CONFIG.rsvp.confirmationTextColor} ${APP_CONFIG.rsvp.confirmationTextFont} leading-relaxed`}>
              
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
