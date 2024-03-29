import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
const inter = Inter({ subsets: ["latin"] });
import { ThemeProvider } from "../provider/ThemeProvider";

export const metadata: Metadata = {
  title: "Country App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          // defaultTheme="system"
          // enableSystem
          // disableTransitionOnChange
        >
          <Header />
          <main className="flex justify-center dark:bg-slate-800  bg-slate-100">
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}