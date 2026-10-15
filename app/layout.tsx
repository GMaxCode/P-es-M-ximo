import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { site } from "@/lib/site";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.siteUrl),
  title: `${site.clientName} — Qualidade que você merece! | ${site.city}`,
  description: `Pães fofos, saborosos e de qualidade. ${site.clientName} em ${site.city}: pão integral doce, pão integral de sal e challah.`,
  keywords: ["padaria", site.city, site.clientName, "pão integral doce", "pão integral de sal", "challah"],
  alternates: { canonical: "/" },
  openGraph: {
    title: `${site.clientName} — Qualidade que você merece!`,
    description: `Pães fofos, saborosos e de qualidade em ${site.city}.`,
    url: site.siteUrl,
    siteName: site.clientName,
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.clientName} — Qualidade que você merece!`,
    description: `Pães fofos, saborosos e de qualidade em ${site.city}.`,
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: site.clientName,
              description: `Pães fofos, saborosos e de qualidade em ${site.city}.`,
              address: {
                "@type": "PostalAddress",
                streetAddress: site.address,
                addressLocality: "Ji-Paraná",
                addressRegion: "RO",
                addressCountry: "BR",
              },
              telephone: site.whatsappNumber,
              openingHours: ["Mo 12:00-17:00", "We 12:00-17:00"],
              url: site.siteUrl,
              sameAs: [site.instagram, site.facebook, site.linkedin].filter(Boolean),
            }),
          }}
        />
        {children}
      </body>
    </html>
  );
}
