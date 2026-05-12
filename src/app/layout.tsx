import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { MobileBottomCTA } from "@/components/layout/MobileBottomCTA";
import { defaultSeo, siteConfig } from "@/data/site";

export const metadata: Metadata = {
  metadataBase: new URL("https://xn--ej5bunp8a.kr"),
  title: defaultSeo.title,
  description: defaultSeo.description,
  openGraph: { title: defaultSeo.title, description: defaultSeo.description, images: [siteConfig.images.heroMain] },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="ko"><body><Header /><main>{children}</main><Footer /><MobileBottomCTA /></body></html>;
}
