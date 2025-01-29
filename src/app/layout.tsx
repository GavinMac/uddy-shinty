import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "@mantine/core/styles.css";

import {
  ColorSchemeScript,
  MantineProvider,
  createTheme,
  mantineHtmlProps,
} from "@mantine/core";
import Navbar from "./components/navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Uddingston Shinty",
  description: "Uddingston Shinty team",
  keywords: ["Scotland", "Glasgow", "Uddingston", "Shinty", "Sports", "Team"],
  authors: { name: "Gavin Macleod", url: "https://gavin.works/" },
};

const theme = createTheme({});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" {...mantineHtmlProps}>
      <head>
        <ColorSchemeScript />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />     
        <MantineProvider theme={theme} forceColorScheme="light" defaultColorScheme="light">
          {children}
        </MantineProvider>
        <footer>
          <a
            className="flex items-center gap-2 hover:underline hover:underline-offset-4"
            href="https://gavin.works"
            target="_blank"
            rel="noopener noreferrer"
          >
            Site by Gavin
          </a>
        </footer>
      </body>
    </html>
  );
}
