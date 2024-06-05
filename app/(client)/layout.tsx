import type { Metadata } from "next";
import { Hanken_Grotesk } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import Provider from "../utils/Provider";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://rigneyreviews.com"),
  title: {
    default: "RigneyReviews | A Film & TV Review Blog",
    template: `%s | RigneyReviews - A Film & TV Review Blog`,
  },
  description: "A blog of no-nonense Film & TV Reviews by Rigney",
  openGraph: {
    type: "website",
    locale: "en_EN",
    url: "https://rigneyreviews.com",
    siteName: "RigneyReviews",
    title: "RigneyReviews | A Film & TV Review Blog",
    description: "A blog of no-nonense Film & TV Reviews by Rigney",
    images: [
      {
        url: "https://rigneyreviews.com/opengraph-image.png",
        width: 1200,
        height: 675,
        alt: "RigneyReviews | A Film & TV Review Blog",
      },
    ],
  },
};

//👇 Configure our font object
const gantari = Hanken_Grotesk({
  display: "swap",
  weight: ["200", "300", "400", "500", "700"],
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <head>
        <link
          rel="apple-touch-icon"
          sizes="76x76"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff"></meta>
      </head>
      <body
        className={`${gantari.className} flex flex-col  min-h-screen leading-relaxed bg-neutral-50 text-scooter-950 dark:bg-scooter-950 dark:text-scooter-50`}
      >
        <Provider>
          <Navbar />
          <div className="flex-1">
            <main id="main" className=" max-w-5xl mx-auto px-6 pb-8">
              {children}
            </main>
          </div>
          <Footer />
        </Provider>
      </body>
    </html>
  );
}
