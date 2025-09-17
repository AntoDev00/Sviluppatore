"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Registra il plugin ScrollTrigger
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

// Progetti del portfolio con link alle GitHub Pages
const projects = [
  {
    title: "Owly - Libreria Online",
    description: "Piattaforma di e-commerce per una libreria online con catalogo prodotti, sistema di ricerca avanzata e gestione dell'inventario.",
    image: "/OwlyPhoto.png",
    tags: ["HTML", "CSS", "JavaScript", "E-commerce"],
    githubUrl: "https://github.com/antodev00/Owly.github.io",
    demoUrl: "https://antodev00.github.io/Owly.github.io/"
  },
  {
    title: "Daphne - Gestione Aziendale",
    description: "Software aziendale completo per la gestione di magazzino, logistica e dipendenti. Sistema integrato per ottimizzare i processi operativi aziendali.",
    image: "/SoftwareAzienda.png",
    tags: ["React", "Node.js", "MongoDB", "Express"],
    githubUrl: "https://github.com/AntoDev00/Daphne",
    demoUrl: "https://antodev00.github.io/Daphne"
  },
  {
    title: "MindTop - App di Meditazione",
    description: "Applicazione desktop per la meditazione guidata con timer personalizzabili, tracciamento delle sessioni e consigli per il benessere mentale.",
    image: "/MindtopPhoto.png",
    tags: ["React", "Vite", "CSS", "Desktop App"],
    githubUrl: "https://github.com/antodev00/MindTop.github.io",
    demoUrl: "https://antodev00.github.io/MindTop.github.io/"
  },
];

export default function Portfolio() {
  const projectsRef = useRef<HTMLDivElement>(null);

  // Effetto di animazione con ScrollTrigger
  useEffect(() => {
    if (projectsRef.current) {
      const projectItems = projectsRef.current.querySelectorAll('.project-item');
      
      gsap.fromTo(projectItems, 
        {
          y: 50,
          opacity: 0
        },
        {
          y: 0,
          opacity: 1,
          stagger: 0.1,
          duration: 0.6,
          ease: "power2.out",
          scrollTrigger: {
            trigger: projectsRef.current,
            start: "top bottom-=100",
            end: "bottom center",
            toggleActions: "play none none none", // Modificato per non invertire l'animazione
            once: true // Assicura che l'animazione avvenga solo una volta
          }
        }
      );
    }
    
    return () => {
      // Pulizia
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div className="px-4 py-32 space-y-24">
      <section className="max-w-5xl mx-auto pt-20">
        <h1 className="text-4xl sm:text-4xl md:text-6xl lg:text-7xl tracking-[6px] sm:tracking-[12px] md:tracking-[20px] font-bold text-black dark:text-white text-center">Portfolio</h1>
        <p className="mt-6 text-lg text-black dark:text-white text-center">
          Una selezione dei miei progetti più recenti e significativi.
        </p>
        
        {/* Griglia dei progetti */}
        <div 
          ref={projectsRef}
          className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <div key={index} className="project-item bg-white dark:bg-gray-800 rounded-lg overflow-hidden transition-all duration-300 hover:shadow-xl border border-gray-200 dark:border-gray-700 h-full flex flex-col">
              <div className="relative h-52 w-full group overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  priority={index < 2}
                />
                <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Link 
                    href={project.demoUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-white text-black font-medium rounded-lg hover:bg-opacity-90 transition-all transform hover:scale-105 mr-3"
                  >
                    Demo Live
                  </Link>
                  <Link 
                    href={project.githubUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-black text-white font-medium rounded-lg hover:bg-opacity-90 transition-all transform hover:scale-105"
                  >
                    GitHub
                  </Link>
                </div>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-black dark:text-white mb-2">{project.title}</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4 flex-grow">{project.description}</p>
                <div className="mt-auto">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, idx) => (
                      <span key={idx} className="px-2 py-1 text-xs bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex justify-between items-center mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                    <Link 
                      href={project.demoUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-blue-600 dark:text-blue-400 hover:underline text-sm font-medium"
                    >
                      Visita Demo
                    </Link>
                    <Link 
                      href={project.githubUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-gray-800 dark:text-gray-200 hover:underline text-sm font-medium flex items-center"
                    >
                      <svg className="w-4 h-4 mr-1" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                      Codice sorgente
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
