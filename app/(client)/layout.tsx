import type { Metadata } from "next";
import { Hanken_Grotesk, Inter } from "next/font/google";
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
  description:
    "A blog dedicated to no-nonsense, spoiler-free Film & TV Reviews.",
  openGraph: {
    type: "website",
    locale: "en_EN",
    url: "https://rigneyreviews.com",
    siteName: "RigneyReviews",
    title: "RigneyReviews | A Film & TV Review Blog",
    description:
      "A blog dedicated to no-nonsense, spoiler-free Film & TV Reviews.",
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
const inter = Inter({
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
        {/* Google Tag (gtag.js) */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-2B0ZZNVZS8"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-2B0ZZNVZS8');
            `,
          }}
        />
        <link
          rel="icon"
          type="image/png"
          href="/favicon-96x96.png"
          sizes="96x96"
        />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <meta name="apple-mobile-web-app-title" content="RigneyReviews" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body
        className={`${inter.className} flex flex-col  min-h-screen leading-relaxed bg-neutral-50 text-scooter-950 dark:bg-gradient-to-b dark:from-stone-900 dark:to-scooter-950 dark:text-scooter-50`}
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
