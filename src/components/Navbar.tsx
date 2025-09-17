"use client";

import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import ThemeToggle from "@/components/ThemeToggle";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => setMounted(true), []);
  
  // Aggiungi event listener per il click outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    }
    
    // Solo se il menu è aperto, aggiungi l'event listener
    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    
    // Cleanup dell'event listener
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [open]);

  return (
    <nav className="w-full z-50 bg-transparent" style={{height: '64px'}}>
      <div className="container mx-auto flex h-16 items-center justify-between px-4" style={{height: '64px'}}>
        {/* Logo + Toggle */}
        <div className="flex items-center">
          <Link href="/" className="font-bold text-xl">
            {mounted ? (
              <Image
                src={theme === "dark" ? "/logoDark.png" : "/LogoLight.png"}
                alt="Logo"
                width={32}
                height={32}
              />
            ) : (
              <span style={{ width: 32, height: 32, display: "inline-block" }} />
            )}
          </Link>
          {mounted && <ThemeToggle />}
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-6">
          <Link href="/" className="hover:underline text-black dark:text-white">Home</Link>
          <Link href="/about" className="hover:underline text-black dark:text-white">About</Link>
          <Link href="/contact" className="hover:underline text-black dark:text-white">Contatti</Link>
          <Link href="/portfolio" className="hover:underline text-black dark:text-white">Portfolio</Link>
        </div>

        {/* Mobile Menu Button (hamburger) a destra */}
        <div className="md:hidden ml-2" ref={menuRef}>
          <div className="relative">
            <Button
              variant="ghost"
              size="icon"
              aria-label="Menu di navigazione"
              className="text-black dark:text-white hover:bg-gray-200/50 dark:hover:bg-gray-700/50 transition-colors cursor-pointer"
              onClick={() => setOpen(!open)}
            >
              <Menu className="h-6 w-6" />
            </Button>
            
            {/* Menu completamente trasparente senza bordi in light mode */}
            <div 
              className={`absolute right-0 top-full mt-2 w-56 dark:shadow-md rounded-md overflow-hidden transition-all duration-200 ${open ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
            >
              <Link 
                href="/" 
                onClick={() => setOpen(false)} 
                className="block px-4 py-2 text-gray-700 dark:text-gray-200 hover:text-black dark:hover:text-white cursor-pointer text-left transition-colors"
              >
                Home
              </Link>
              <Link 
                href="/about" 
                onClick={() => setOpen(false)} 
                className="block px-4 py-2 text-gray-700 dark:text-gray-200 hover:text-black dark:hover:text-white cursor-pointer text-left transition-colors"
              >
                About
              </Link>
              <Link 
                href="/contact" 
                onClick={() => setOpen(false)} 
                className="block px-4 py-2 text-gray-700 dark:text-gray-200 hover:text-black dark:hover:text-white cursor-pointer text-left transition-colors"
              >
                Contatti
              </Link>
              <Link 
                href="/portfolio" 
                onClick={() => setOpen(false)} 
                className="block px-4 py-2 text-gray-700 dark:text-gray-200 hover:text-black dark:hover:text-white cursor-pointer text-left transition-colors"
              >
                Portfolio
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;