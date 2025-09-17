import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { ThemeProvider } from "@/components/ui/theme-provider"
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Antonio Abbruzzese - Sviluppatore Web e Software | Soluzioni Personalizzate",
  description: "Sviluppatore specializzato nella creazione di siti web professionali, applicazioni e software aziendali personalizzati. Soluzioni moderne, affidabili e ottimizzate per le tue esigenze.",
  keywords: ["sviluppatore web", "sviluppatore software", "applicazioni web", "software aziendali", "soluzioni informatiche", "sviluppo personalizzato", "Antonio Abbruzzese", "sviluppo professionale", "siti web moderni"],
  authors: [{ name: "Antonio Abbruzzese" }],
  creator: "Antonio Abbruzzese",
  publisher: "Antonio Abbruzzese",
  icons: {
    icon: '/LogoLight.png',
    apple: '/LogoLight.png',
  },
  openGraph: {
    type: "website",
    locale: "it_IT",
    url: "https://antonioabbruzzese.com",
    title: "Antonio Abbruzzese - Sviluppo Web e Software Professionale",
    description: "Realizzo siti web, applicazioni e software aziendali personalizzati con un approccio professionale e moderno.",
    siteName: "Antonio Abbruzzese - Sviluppatore",
    images: [{
      url: "/LogoLight.png",
      width: 1200,
      height: 630,
      alt: "Antonio Abbruzzese"
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Antonio Abbruzzese - Sviluppatore Web e Software",
    description: "Soluzioni web e software personalizzate per aziende",
    images: ["/LogoLight.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="it" suppressHydrationWarning>
      <body className="min-h-screen flex flex-col">
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <Navbar />
          <div className="flex-1 flex flex-col">
            <section className="flex-1">
              {children}
            </section>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}