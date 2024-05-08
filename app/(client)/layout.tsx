import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import Provider from "../utils/Provider";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

//👇 Configure our font object
const openSans = Open_Sans({
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${openSans.className} h-full bg-dark-jungle-green-50 text-slate-900 dark:bg-slate-900 dark:text-amber-50`}
      >
        <Provider>
          <Navbar />
          <main className=" max-w-5xl mx-auto px-6">{children}</main>
        </Provider>
      </body>
    </html>
  );
}