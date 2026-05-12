import type { Metadata } from "next";
import Script from "next/script";
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

const stripCursorRefsScript = `
(() => {
  const strip = (root = document) => {
    root.querySelectorAll?.("[data-cursor-ref]").forEach((node) => node.removeAttribute("data-cursor-ref"));
  };
  strip();
  const observer = new MutationObserver((mutations) => {
    for (const mutation of mutations) {
      if (mutation.type === "attributes") {
        mutation.target.removeAttribute("data-cursor-ref");
      }
      mutation.addedNodes.forEach((node) => strip(node));
    }
  });
  observer.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ["data-cursor-ref"],
    childList: true,
    subtree: true,
  });
  window.addEventListener("load", () => setTimeout(() => observer.disconnect(), 500), { once: true });
  setTimeout(() => observer.disconnect(), 3000);
})();
`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko" data-scroll-behavior="smooth">
      <body>
        <Script id="strip-cursor-ref-before-hydration" strategy="beforeInteractive" dangerouslySetInnerHTML={{ __html: stripCursorRefsScript }} />
        <Header />
        <main>{children}</main>
        <Footer />
        <MobileBottomCTA />
      </body>
    </html>
  );
}
