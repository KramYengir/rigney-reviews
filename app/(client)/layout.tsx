import type { Metadata } from "next";
import { Gantari } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import Provider from "../utils/Provider";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

//👇 Configure our font object
const gantari = Gantari({
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
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${gantari.className} flex flex-col  min-h-screen bg-neutral-50 text-scooter-950 dark:bg-scooter-950 dark:text-scooter-50`}
      >
        <Provider>
          <Navbar />
          <div className="flex-1">
            <main className=" max-w-5xl mx-auto px-6 pb-8">{children}</main>
          </div>
          <Footer />
        </Provider>
      </body>
    </html>
  );
}
