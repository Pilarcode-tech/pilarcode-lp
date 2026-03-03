import type { Metadata, Viewport } from "next";
import { Manrope, Plus_Jakarta_Sans, DM_Sans } from "next/font/google";
import "./globals.css";

const manropeSans = Manrope({
  variable: "--font-manrope-mono",
  subsets: ["latin"],
});

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-jakarta-sans",
  subsets: ["latin"],
});

const DMSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});


export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#211cda",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://pilarcode.com.br"),
  title: {
    default: "Pilarcode | Inovação ao seu alcance",
    template: "%s | Pilarcode",
  },
  description:
    "A Pilarcode conecta você ao futuro com soluções tecnológicas sob medida: desenvolvimento de apps, sites, software, integrações e automação de processos.",
  keywords: [
    "Desenvolvimento de Apps",
    "Desenvolvimento Web",
    "Software Sob Medida",
    "Integração de Sistemas",
    "E-Commerce",
    "Automação de Processos",
    "Transformação Digital",
    "Soluções Tecnológicas",
    "Desenvolvimento de Software São Paulo",
    "Empresa de Tecnologia",
  ],
  authors: [{ name: "Pilarcode", url: "https://pilarcode.com.br" }],
  creator: "Pilarcode",
  publisher: "Pilarcode",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://pilarcode.com.br/",
  },
  openGraph: {
    type: "website",
    url: "https://pilarcode.com.br/",
    siteName: "Pilarcode",
    title: "Pilarcode | Inovação ao seu alcance",
    description:
      "Soluções tecnológicas sob medida para transformar sua empresa: apps, sites, software, integrações e automação.",
    locale: "pt_BR",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Pilarcode - Soluções em Tecnologia",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pilarcode | Inovação ao seu alcance",
    description:
      "Soluções tecnológicas sob medida: apps, sites, software, integrações e automação de processos.",
    images: ["/og-image.png"],
  },
  category: "technology",
  applicationName: "Pilarcode",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "32x32" },
      { url: "/favicon.png", sizes: "512x512", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Pilarcode",
              url: "https://pilarcode.com.br",
              logo: "https://pilarcode.com.br/logo.png",
              description:
                "Soluções tecnológicas sob medida: desenvolvimento de apps, sites, software, integrações e automação de processos.",
              address: {
                "@type": "PostalAddress",
                addressLocality: "São Paulo",
                addressRegion: "SP",
                addressCountry: "BR",
              },
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+55-11-91895-8384",
                contactType: "sales",
                availableLanguage: ["Portuguese"],
              },
              sameAs: [
                "https://instagram.com/pilarcode",
                "https://linkedin.com/company/pilarcode",
              ],
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Serviços de Tecnologia",
                itemListElement: [
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Desenvolvimento de Apps",
                      description:
                        "Aplicativos intuitivos e de alta performance, personalizados para as necessidades do seu negócio.",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Desenvolvimento Web",
                      description:
                        "Sites atraentes, funcionais e otimizados para todos os dispositivos, com foco em conversão.",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Software Sob Medida",
                      description:
                        "Soluções de software personalizadas que atendem às necessidades específicas da sua empresa.",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Integração de Sistemas",
                      description:
                        "Conectamos sistemas distintos para criar um ambiente de TI coeso e eficiente.",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "E-Commerce",
                      description:
                        "Plataformas de comércio eletrônico eficientes, projetadas para impulsionar suas vendas online.",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Automação de Processos",
                      description:
                        "Otimize operações, reduza erros e aumente a eficiência com automação inteligente.",
                    },
                  },
                ],
              },
            }),
          }}
        />
      </head>
      <body
        className={`${DMSans.variable} ${manropeSans.variable} ${plusJakartaSans.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
