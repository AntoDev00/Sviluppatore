"use client";

import ImageCarousel from '@/components/ImageCarousel';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import Link from 'next/link';
import Image from 'next/image';
import Script from 'next/script';

// Array di immagini di esempio per il carosello con tag alt ottimizzati per SEO
const carouselImages = [
  { src: "/OwlyPhoto.png", alt: "Progetto Owly Libreria Online - E-commerce sviluppato da Antonio Abbruzzese" },
  { src: "/MindtopPhoto.png", alt: "MindTop App di Meditazione - Applicazione desktop sviluppata da Antonio Abbruzzese" },
  { src: "/SoftwareAzienda.png", alt: "Daphne Software Gestionale - Soluzione per magazzino, logistica e gestione dipendenti sviluppata da Antonio Abbruzzese" },
];

// Array di skills tecnologiche
const techSkills = [
  {
    title: "Frontend",
    description: "Sviluppo di interfacce moderne e responsive",
    skills: ["HTML/CSS", "JavaScript", "TypeScript", "React", "Next.js", "Tailwind CSS", "..."]
  },
  {
    title: "Backend",
    description: "Architetture scalabili e performanti",
    skills: ["Node.js", "Express", "MongoDB", "PostgreSQL", "API RESTful", "GraphQL", "..."]
  },
  {
    title: "Mobile",
    description: "Applicazioni native e cross-platform",
    skills: ["React Native","Xcode", "Flutter", "Android Studio", "App Store", "Google Play", "..."]
  },
  {
    title: "DevOps",
    description: "Automazione e deployment continuo",
    skills: ["Docker", "AWS", "CI/CD", "Git", "GitHub Actions", "..."]
  }
];

export default function Home() {
  return (
    <>
      {/* Schema.org structured data for SEO */}
      <Script id="schema-org" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "ProfessionalService",
        "name": "Antonio Abbruzzese - Sviluppatore Web e Software",
        "description": "Sviluppatore specializzato nella creazione di siti web professionali, applicazioni e software aziendali personalizzati.",
        "url": "https://antonioabbruzzese.com",
        "logo": "https://antonioabbruzzese.com/LogoLight.png",
        "sameAs": [
          "https://github.com/antonioabbruzzese",
          "https://linkedin.com/in/antonioabbruzzese"
        ],
        "address": {
          "@type": "PostalAddress",
          "addressCountry": "IT"
        },
        "contactPoint": {
          "@type": "ContactPoint",
          "contactType": "customer support",
          "email": "infodomtech00@gmail.com"
        },
        "offers": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Sviluppo Siti Web",
              "description": "Creazione di siti web moderni e ottimizzati"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Sviluppo Software Aziendali",
              "description": "Soluzioni software personalizzate per le esigenze aziendali"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Sviluppo E-commerce",
              "description": "Creazione di negozi online professionali"
            }
          }
        ]
      })}} />

    <div className="px-4 py-32 space-y-24">
      {/* Hero Section - Centrata verticalmente e orizzontalmente */}
      <section className="max-w-5xl mx-auto pt-20">
        <h1 className="text-4xl sm:text-4xl md:text-6xl lg:text-7xl tracking-[6px] sm:tracking-[12px] md:tracking-[20px] font-bold text-black dark:text-white text-center">Benvenut*!</h1>
        <p className="mt-6 text-base sm:text-lg md:text-xl text-black dark:text-white text-center">Sono uno sviluppatore Full Stack appassionato di tecnologia e innovazione.</p>
        <p className="mt-10 text-base sm:text-lg md:text-xl text-black dark:text-white text-center">Aiuto aziende a trasformare in realtà digitali le loro idee, con siti e app performanti e moderni.</p>
        <div className="flex justify-center">
          <Link href="/about" className="rounded-lg text-black dark:text-white text-center border border-black dark:border-white px-8 py-2 mt-10 mr-20 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors">Chi sono</Link>
          <Link href="/portfolio" className="rounded-lg text-black dark:text-white text-center border border-black dark:border-white px-8 py-2 mt-10 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors">Portfolio</Link>
        </div>
      </section>

      {/* Sezione Carosello Portfolio */}
      <section className="py-20">
        <h2 className="text-3xl font-bold text-center mb-8 text-black dark:text-white">I miei lavori recenti</h2>
        <ImageCarousel images={carouselImages} />
      </section>
      
      {/* Sezione Competenze */}
      <section className="max-w-6xl mx-auto py-20">
        <h2 className="text-5xl font-bold text-center mb-10 text-black dark:text-white">Le mie competenze</h2>
        <p className="text-lg text-center mb-16 max-w-3xl mx-auto text-gray-700 dark:text-gray-300">
          Dalla progettazione dell&apos;interfaccia utente all&apos;implementazione backend, ecco le tecnologie che utilizzo quotidianamente per trasformare le idee in prodotti digitali di successo.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {techSkills.map((skill, index) => (
            <Card key={index} className="border-2 border-gray-200 dark:border-gray-800 shadow-sm hover:shadow-md transition-shadow">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-black dark:text-white">{skill.title}</CardTitle>
                <CardDescription className="text-gray-600 dark:text-gray-400">{skill.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {skill.skills.map((item, i) => (
                    <li key={i} className="flex items-center">
                      <span className="mr-2 text-blue-500">•</span>
                      <span className="text-gray-700 dark:text-gray-300">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
      
      {/* Sezione E-commerce Shopify */}
      <section className="max-w-6xl mx-auto py-20 px-4">
        <h2 className="text-5xl font-bold text-center mb-10 text-black dark:text-white">Soluzioni E-commerce</h2>
        
        <div className="max-w-5xl mx-auto">
          <div className="overflow-hidden">
            <div className="md:flex">
              <div className="md:w-1/3 relative rounded-lg bg-gradient-to-br from-green-500 to-purple-700 flex items-center justify-center p-8">
                <div className="text-white text-center">
                  <Image
                    src="/FotoShopify.jpg"
                    alt="Shopify Expert"
                    width={200}
                    height={200}
                    className="rounded-lg mb-4 mx-auto"
                    priority
                  />
                  <h3 className="text-2xl font-bold">Shopify Expert</h3>
                </div>
              </div>
              
              <div className="md:w-2/3 p-8">
                <CardHeader className="p-0 mb-4">
                  <CardTitle className="text-2xl font-bold text-black dark:text-white mb-5">E-commerce Professionali</CardTitle>
                  <CardDescription className="text-lg text-gray-600 dark:text-gray-400">
                    Trasformo la tua visione in un negozio online di successo
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="p-0">
                  <p className="text-gray-700 dark:text-gray-300 mb-6">
                    Progetto e sviluppo soluzioni e-commerce complete su Shopify, personalizzate per soddisfare le esigenze specifiche del tuo business. Dal design all&apos;implementazione, mi occupo di ogni aspetto per garantire un&apos;esperienza d&apos;acquisto fluida e coinvolgente.
                  </p>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                    <div className="flex items-start">
                      <span className="mr-2 text-blue-500 mt-1">•</span>
                      <span className="text-gray-700 dark:text-gray-300">Design personalizzato del negozio</span>
                    </div>
                    <div className="flex items-start">
                      <span className="mr-2 text-blue-500 mt-1">•</span>
                      <span className="text-gray-700 dark:text-gray-300">Ottimizzazione per dispositivi mobili</span>
                    </div>
                    <div className="flex items-start">
                      <span className="mr-2 text-blue-500 mt-1">•</span>
                      <span className="text-gray-700 dark:text-gray-300">Integrazione sistemi di pagamento</span>
                    </div>
                    <div className="flex items-start">
                      <span className="mr-2 text-blue-500 mt-1">•</span>
                      <span className="text-gray-700 dark:text-gray-300">SEO e Marketing Automation</span>
                    </div>
                    <div className="flex items-start">
                      <span className="mr-2 text-blue-500 mt-1">•</span>
                      <span className="text-gray-700 dark:text-gray-300">Sviluppo di app e funzionalità custom</span>
                    </div>
                    <div className="flex items-start">
                      <span className="mr-2 text-blue-500 mt-1">•</span>
                      <span className="text-gray-700 dark:text-gray-300">Migrazione dati da altre piattaforme</span>
                    </div>
                  </div>
                  
                  <Link 
                    href="/contact" 
                    className="inline-flex items-center px-4 py-2 bg-black hover:bg-gray-800 dark:hover:bg-gray-500 text-white dark:text-white rounded-lg transition-colors"
                  >
                    Parliamo del tuo progetto
                  </Link>
                </CardContent>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Sezione Servizi Personalizzati */}
      <section className="max-w-6xl mx-auto py-20 px-4">
        <h2 className="text-5xl font-bold text-center mb-10 text-black dark:text-white">Soluzioni Su Misura</h2>
        
        <div className="max-w-5xl mx-auto mb-12">
          <p className="text-xl text-center mb-8 text-gray-700 dark:text-gray-300">
            <strong>Dal concept alla realizzazione</strong>: trasformo qualsiasi idea in realtà digitale.
          </p>
          <p className="text-lg text-center mb-4 text-gray-600 dark:text-gray-400">
            Ogni progetto è unico e merita un approccio personalizzato. Che tu abbia bisogno di un semplice sito web, 
            una complessa applicazione o un software aziendale su misura, sono qui per trasformare la tua visione in realtà.
          </p>
          <p className="text-lg text-center mb-8 text-gray-600 dark:text-gray-400">
            Mi occupo di ogni fase del processo: dalla progettazione iniziale, all&apos;implementazione, fino al supporto post-lancio.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="border-2 border-gray-200 dark:border-gray-800 shadow-sm hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-black dark:text-white">Siti Web & Web App</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="mr-2 text-blue-500 mt-1">•</span>
                  <span className="text-gray-700 dark:text-gray-300">Siti web aziendali professionali</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-blue-500 mt-1">•</span>
                  <span className="text-gray-700 dark:text-gray-300">Landing page ad alta conversione</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-blue-500 mt-1">•</span>
                  <span className="text-gray-700 dark:text-gray-300">Applicazioni web interattive</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-blue-500 mt-1">•</span>
                  <span className="text-gray-700 dark:text-gray-300">Progressive Web App (PWA)</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-blue-500 mt-1">•</span>
                  <span className="text-gray-700 dark:text-gray-300">Blog e portali di contenuti</span>
                </li>
              </ul>
            </CardContent>
          </Card>
          
          <Card className="border-2 border-gray-200 dark:border-gray-800 shadow-sm hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-black dark:text-white">Software Aziendali</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="mr-2 text-blue-500 mt-1">•</span>
                  <span className="text-gray-700 dark:text-gray-300">CRM personalizzati</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-blue-500 mt-1">•</span>
                  <span className="text-gray-700 dark:text-gray-300">Sistemi di gestione inventario</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-blue-500 mt-1">•</span>
                  <span className="text-gray-700 dark:text-gray-300">Dashboard analitiche</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-blue-500 mt-1">•</span>
                  <span className="text-gray-700 dark:text-gray-300">Automazione processi aziendali</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-blue-500 mt-1">•</span>
                  <span className="text-gray-700 dark:text-gray-300">Integrazioni API e servizi terzi</span>
                </li>
              </ul>
            </CardContent>
          </Card>
          
          <Card className="border-2 border-gray-200 dark:border-gray-800 shadow-sm hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-black dark:text-white">App & Soluzioni Mobile</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="mr-2 text-blue-500 mt-1">•</span>
                  <span className="text-gray-700 dark:text-gray-300">App per iOS e Android</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-blue-500 mt-1">•</span>
                  <span className="text-gray-700 dark:text-gray-300">App ibride cross-platform</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-blue-500 mt-1">•</span>
                  <span className="text-gray-700 dark:text-gray-300">Sincronizzazione cloud</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-blue-500 mt-1">•</span>
                  <span className="text-gray-700 dark:text-gray-300">Soluzioni per eCommerce mobile</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-blue-500 mt-1">•</span>
                  <span className="text-gray-700 dark:text-gray-300">Integrazione hardware specifico</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
        
        <div className="text-center mt-12">
          <p className="text-lg mb-6 text-gray-700 dark:text-gray-300">
            <strong>Hai un&apos;idea o un progetto in mente?</strong> Non importa quanto semplice o complesso sia, insieme possiamo realizzarlo.
          </p>
          <Link 
            href="/contact" 
            className="inline-flex items-center px-6 py-3 bg-black hover:bg-gray-800 dark:hover:bg-gray-500 text-white dark:text-white rounded-lg transition-colors text-lg font-medium"
          >
            Richiedi una consulenza gratuita
          </Link>
        </div>
      </section>
    </div>
    </>
  );
}
