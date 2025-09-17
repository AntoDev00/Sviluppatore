"use client";

import Link from "next/link";
import { ArrowLeft, CheckCircle } from "lucide-react";

export default function SuccessPage() {
  return (
    <div className="px-4 py-32 space-y-24">
      <section className="max-w-xl mx-auto pt-20 text-center">
        <div className="flex justify-center mb-6">
          <CheckCircle className="h-24 w-24 text-green-500" />
        </div>
        <h1 className="text-6xl font-bold mb-6 text-black dark:text-white mt-12">Messaggio inviato!✅</h1>
        <p className="text-lg mb-8 text-gray-700 dark:text-gray-300">
          Grazie per avermi contattato. Ho ricevuto il tuo messaggio e ti risponderò il prima possibile.
        </p>
        <Link
          href="/"
          className="inline-flex items-center px-6 py-3 rounded-lg bg-black dark:bg-white text-white dark:text-black hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors"
        >
          <ArrowLeft className="mr-2 h-5 w-5" />
          Torna alla home
        </Link>
      </section>
    </div>
  );
}
