import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SessionProvider } from "next-auth/react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "MyVisionBoard - Transforme tes intentions en actions",
  description:
    "MyVisionBoard est une application web qui t’aide à fixer tes objectifs (court, moyen et long terme), suivre ta progression et rester connecté à ton 'Why'. Un vision board digital simple, motivant et intuitif.",
  icons: [{ url: "/favicon.ico", sizes: "48x48", type: "image/x-icon" }],
  keywords: [
    "vision board",
    "objectif personnel",
    "suivi d’objectifs",
    "motivation",
    "productivité",
    "développement personnel",
    "application de motivation",
    "gestion d’objectifs",
    "Next.js",
    "Auth.js",
    "recharts",
    "growth mindset",
    "planification",
    "projets personnels",
    "vision board digital",
    "accomplissement",
    "why",
    "tableau de visualisation",
    "suivi de progression",
  ],
  authors: [{ name: "MyVisionBoard – Arthur BARRAUD (0x414854)" }],
  openGraph: {
    title: "MyVisionBoard - Transforme tes intentions en actions",
    description:
      "Crée ton vision board digital, fixe tes objectifs, suis ta progression et garde le cap sur ton 'Why'.",
    url: "https://www.myvisionboard.life",
    siteName: "MyVisionBoard",
    images: [
      {
        url: "/ogImage.png",
        width: 1200,
        height: 630,
        alt: "Aperçu de l'application MyVisionBoard",
      },
    ],
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "MyVisionBoard - Transforme tes intentions en actions",
    description:
      "Crée ton vision board digital, fixe tes objectifs, suis ta progression et garde le cap sur ton 'Why'.",
    images: ["/ogImage.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <SessionProvider>{children}</SessionProvider>
      </body>
    </html>
  );
}
