"use client";

import Image from "next/image";
import Link from "next/link";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";

export default function Footer() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  return (
    <footer className="bg-transparent rounded-lg dark:bg-transparent m-4">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <Link href="/" className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
            {mounted ? (
              <Image
                src={theme === "dark" ? "/LogoDark.png" : "/LogoLight.png"}
                alt="Logo"
                width={32}
                height={32}
              />
            ) : (
              <span className="w-20 h-20 inline-block" />
            )}
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">AntoDev</span>
          </Link>
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
            <li>
              <Link href="/about" className="hover:underline me-4 md:me-6">Chi sono</Link>
            </li>
            <li>
              <Link href="/portfolio" className="hover:underline me-4 md:me-6">Portfolio</Link>
            </li>
            <li>
              <Link href="/contact" className="hover:underline">Contatti</Link>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-gray-200 border-t-2 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
          &copy; {new Date().getFullYear()} <Link href="/" className="hover:underline">AntoDev</Link>. Tutti i diritti riservati.
        </span>
      </div>
    </footer>
  );
}
