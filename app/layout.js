import "./globals.css";

export const metadata = {
  title: "Appscrip Task — Product Listing",
  description: "A responsive Product Listing Page built with Next.js and SSR. Browse products fetched from a mock API.",
  openGraph: {
    title: "Appscrip Task — Product Listing",
    description: "A responsive Product Listing Page built with Next.js and SSR.",
  },
};

const siteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Appscrip Product Demo",
  url: "https://example.com/",
  description: "Product listing demo built with Next.js and SSR.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(siteSchema) }}
        />
      </body>
    </html>
  );
}
