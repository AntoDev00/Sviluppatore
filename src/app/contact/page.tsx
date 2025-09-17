"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Contact() {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  // Email dove riceverai i messaggi (sostituisci con la tua email)
  const formEmail = "infodomtech00@gmail.com";

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const form = e.currentTarget;
      const formData = new FormData(form);
      
      const response = await fetch(`https://formsubmit.co/${formEmail}`, {
        method: "POST",
        body: formData
      });
      
      if (response.ok) {
        router.push("/contact/success");
      } else {
        router.push("/contact/error");
      }
    } catch {
      router.push("/contact/error");
    }
  };

  return (
    <div className="px-4 py-32 space-y-24">
      <section className="max-w-5xl mx-auto pt-20">
        <h1 className="text-4xl sm:text-4xl md:text-6xl lg:text-7xl tracking-[6px] sm:tracking-[12px] md:tracking-[20px] font-bold text-black dark:text-white text-center">Contatti</h1>
        <div className="mt-10 max-w-xl mx-auto">
          <p className="text-center text-lg text-black dark:text-white mb-8">
            Hai un progetto in mente? Parliamone! Compila il form sottostante e ti risponderò al più presto.
          </p>
          
          <form className="space-y-6" onSubmit={handleSubmit} action={`https://formsubmit.co/${formEmail}`} method="POST">
            {/* Campi nascosti per configurare FormSubmit */}
            <input type="hidden" name="_next" value="https://antodev.vercel.app/contact/success" />
            <input type="hidden" name="_subject" value="Nuovo messaggio dal sito web" />
            <input type="hidden" name="_captcha" value="false" />
            
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-black dark:text-white mb-1">
                Nome
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md bg-white dark:bg-gray-800 text-black dark:text-white"
                placeholder="Il tuo nome"
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-black dark:text-white mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md bg-white dark:bg-gray-800 text-black dark:text-white"
                placeholder="la-tua-email@esempio.com"
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-black dark:text-white mb-1">
                Messaggio
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md bg-white dark:bg-gray-800 text-black dark:text-white"
                placeholder="Raccontami del tuo progetto..."
              />
            </div>
            
            <div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-4 py-2 bg-black dark:bg-white text-white dark:text-black font-medium rounded-md hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Invio in corso..." : "Invia messaggio"}
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}
