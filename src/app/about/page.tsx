"use client";

import Image from "next/image";

export default function About() {
  return (
    <div className="px-4 py-32 space-y-24">
      <section className="max-w-5xl mx-auto pt-20">
        <h1 className="text-4xl sm:text-4xl md:text-6xl lg:text-7xl tracking-[6px] sm:tracking-[12px] md:tracking-[20px] font-bold text-black dark:text-white text-center mb-20">Chi sono</h1>
        
        {/* Immagine responsiva - Desktop vs Mobile */}
        <div className="relative w-full max-w-4xl mx-auto mb-12">
          {/* Immagine desktop (visibile solo su sm e superiori) */}
          <div className="rounded-xl hidden sm:block w-full" style={{ height: '500px' }}>
            <Image 
              src="/FotoDesktop.png" 
              alt="Foto profilo" 
              fill 
              className="object-contain object-center rounded-xl" 
              priority
            />
          </div>
          
          {/* Immagine mobile (visibile solo su xs) */}
          <div className="rounded-xl block sm:hidden w-full mx-auto" style={{ height: '700px', maxWidth: '350px' }}>
            <Image 
              src="/FotoMobile.png" 
              alt="Foto profilo" 
              fill 
              className="object-contain object-center rounded-xl" 
              priority
            />
          </div>
        </div>
        
        <div className="mt-10 space-y-6 text-lg text-black dark:text-white">
          <p>
            Sono un Developer Full Stack con esperienza in diverse tecnologie web moderne.
            La mia passione è sviluppare soluzioni digitali eleganti e funzionali che risolvono
            problemi reali.
          </p>
          <p>
            Nel corso della mia carriera, ho lavorato con React, Next.js, TypeScript, Node.js e
            diverse altre tecnologie per creare applicazioni web responsive e performanti.
          </p>
          <p>
            Credo che il buon design e il codice pulito vadano di pari passo. Mi piace creare
            progetti che non solo funzionano bene tecnicamente, ma che offrono anche un&apos;ottima
            esperienza utente.
          </p>
        </div>
      </section>
    </div>
  );
}
