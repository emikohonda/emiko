import type { Metadata } from 'next';
import '@/styles/globals.css';
import '@/styles/layout.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {

  metadataBase: new URL('https://dot-emiko.vercel.app/'),

  title: ".emiko（Portfolio）",
  description: ".emikoのポートフォリオサイトです。これまでに制作したWebサイトやアプリをまとめています。",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/android-chrome-192x192.png", type: "image/png", sizes: "192x192" },
      { url: "/android-chrome-512x512.png", type: "image/png", sizes: "512x512" }
    ],
  },
  manifest: "/manifest.json",

  openGraph: {
    title: ".emiko（Portfolio）",
    description: ".emikoのポートフォリオサイトです。これまでに制作したWebサイトやアプリをまとめています。",
    url: "/",               // metadataBase と結合されて絶対URL化
    siteName: ".emiko（Portfolio）",
    images: [
      { url: "/emiko.png", width: 1200, height: 700, alt: ".emiko（Portfolio）" }
    ],
    locale: "ja_JP",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: ".emiko（Portfolio）",
    description: ".emikoのポートフォリオサイトです。これまでに制作したWebサイトやアプリをまとめています。",
    images: ["/emiko.png"],
    creator: "@dot_emiko"
  },
};

export default function RootLayout({ children }: {children: React.ReactNode}) {
  return (
    <html lang='ja'>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}