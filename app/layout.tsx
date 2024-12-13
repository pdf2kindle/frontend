import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Toaster } from "@/components/ui/toaster";
import Script from 'next/script';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'PDF to Kindle - Send Documents to Your Kindle Device',
  description: 'Convert and send PDFs, EPUBs, MOBI files directly to your Kindle device. Simple, fast, and secure document delivery service.',
  keywords: 'pdf to kindle, send to kindle, kindle converter, epub to kindle, mobi converter, kindle document sender',
  openGraph: {
    title: 'PDF to Kindle - Send Documents to Your Kindle Device',
    description: 'Convert and send PDFs, EPUBs, MOBI files directly to your Kindle device',
    url: 'https://pdf2kindle.pro',
    siteName: 'PDF to Kindle',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
          `}
        </Script>
      </head>
      <body className={inter.className}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}