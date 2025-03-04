import Contact from "./Components/Contact";
import Navbar from "./Components/Navbar";
import "./globals.css"; // Ensure global styles are included
import Script from "next/script";

export const metadata = {
  title: "Liladhar Harode",
  description:
    "Liladhar Harode is a Frontend Web Developer specializing in React and Next.js, crafting seamless user experiences with modern web technologies.",
  keywords:
    "Frontend Developer, Web Developer, React, Next.js, JavaScript, UI/UX, Portfolio, Liladhar Harode.liladhar,liladhar harode",
  authors: [{ name: "Liladhar Harode", url: "https://liladhar.in/" }],
  generator: "Next.js",
  applicationName: "Liladhar Harode Portfolio",
  referrer: "no-referrer-when-downgrade",
  creator: "Liladhar Harode",
  publisher: "Liladhar Harode",
  robots: "index, follow",
  openGraph: {
    title: "Liladhar Harode | Frontend Developer",
    description:
      "Frontend Web Developer crafting seamless user experiences with modern web technologies.",
    url: "https://liladhar.in/",
    siteName: "Liladhar Harode Portfolio",
    images: [
      {
        url: "/liladhar_image.jpg",
        width: 1200,
        height: 630,
        alt: "Liladhar Harode Portfolio",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Liladhar Harode | Frontend Developer",
    description:
      "Frontend Web Developer crafting seamless user experiences with modern web technologies.",
    images: ["/liladhar_image.jpg"],
    creator: "@liladharharode",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="canonical" href="https://liladhar.in" />
      </head>
      <body className="">
        {/* Navbar */}
        <Navbar />

        {/* Main Content */}
        {children}

        {/* Footer */}
        <Contact />

        {/* JSON-LD Structured Data */}
        <Script
          id="structured-data"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Liladhar Harode",
              url: "https://liladhar.in",
              jobTitle: "Frontend Developer",
              sameAs: [
                "https://www.linkedin.com/in/lokeshharode/",
                "https://github.com/lokesh1987-hack",
                "https://stackoverflow.com/users/17967960/liladhar-harode",
                "https://www.instagram.com/lokeshharode1111/",
              ],
            }),
          }}
        />
      </body>
    </html>
  );
}
