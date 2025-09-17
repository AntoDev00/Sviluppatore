"use client";

import Link from "next/link";
import { ArrowLeft, AlertCircle } from "lucide-react";

export default function ErrorPage() {
  return (
    <div className="px-4 py-32 space-y-24">
      <section className="max-w-xl mx-auto pt-20 text-center">
        <div className="flex justify-center mb-6">
          <AlertCircle className="h-24 w-24 text-red-500" />
        </div>
        <h1 className="text-4xl font-bold mb-6 text-black dark:text-white">Invio non riuscito❌</h1>
        <p className="text-lg mb-8 text-gray-700 dark:text-gray-300">
          Si è verificato un problema durante l&apos;invio del messaggio. Per favore, riprova o contattami direttamente via email.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link
            href="/contact"
            className="inline-flex items-center px-6 py-3 rounded-lg bg-black dark:bg-white text-white dark:text-black hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors"
          >
            Riprova
          </Link>
          <Link
            href="/"
            className="inline-flex items-center px-6 py-3 rounded-lg border border-black dark:border-white text-black dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          >
            <ArrowLeft className="mr-2 h-5 w-5" />
            Torna alla home
          </Link>
        </div>
      </section>
    </div>
  );
}
