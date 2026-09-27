import "./globals.css";

const siteUrl = "https://circlecitysiteworks.com";

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Indianapolis Web Design & Custom Business Tools | Circle City Siteworks",
    template: "%s | Circle City Siteworks",
  },
  description: "Indianapolis web design, e-commerce, and custom business tools for small businesses. Clear scope, practical builds, and straightforward handoff.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "Circle City Siteworks",
    title: "Indianapolis Web Design & Custom Business Tools | Circle City Siteworks",
    description: "Websites, online stores, and custom business tools built for Indianapolis businesses and beyond.",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Circle City Siteworks",
    description: "Websites, online stores, and custom business tools for Indianapolis businesses.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Circle City Siteworks",
  url: siteUrl,
  email: "hello@circlecitysiteworks.com",
  description: "Web design, e-commerce, and custom business tools for small businesses.",
  areaServed: {
    "@type": "City",
    name: "Indianapolis",
  },
  serviceType: [
    "Web Design",
    "E-commerce Development",
    "Custom Web Applications",
    "Business Automation",
  ],
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "sales",
    email: "hello@circlecitysiteworks.com",
    areaServed: "US",
    availableLanguage: "English",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        {children}
      </body>
    </html>
  );
}
