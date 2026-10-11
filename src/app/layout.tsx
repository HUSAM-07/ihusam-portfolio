import Navbar from "@/components/navbar";
import { ThemeProvider } from "@/components/theme-provider";
import { TooltipProvider } from "@/components/ui/tooltip";
import { DATA } from "@/data/resume";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import "./globals.css";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  metadataBase: new URL(DATA.url),
  title: {
    default: `${DATA.fullName} (${DATA.name}) – ${DATA.jobTitle} & Product Builder`,
    template: `%s | ${DATA.fullName}`,
  },
  description: DATA.headline,
  keywords: [...DATA.keywords],
  authors: [{ name: DATA.fullName, url: DATA.url }],
  creator: DATA.fullName,
  alternates: {
    canonical: "/",
    // Points agents at the plain-text profile (see /llms.txt).
    types: { "text/plain": "/llms.txt" },
  },
  openGraph: {
    title: `${DATA.fullName} – ${DATA.jobTitle} & Product Builder`,
    description: DATA.headline,
    url: DATA.url,
    siteName: DATA.fullName,
    images: [{ url: DATA.avatarUrl, alt: DATA.fullName }],
    locale: "en_US",
    type: "website",
  },
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
  twitter: {
    title: `${DATA.fullName} – ${DATA.jobTitle} & Product Builder`,
    description: DATA.headline,
    card: "summary",
    creator: "@HU_SAM007",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased max-w-2xl mx-auto py-12 sm:py-24 px-6",
          fontSans.variable
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="light">
          <TooltipProvider delayDuration={0}>
            {children}
            <Navbar />
          </TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
