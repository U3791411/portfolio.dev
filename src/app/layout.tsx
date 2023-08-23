import '../../styles/globals.scss';
import type { Metadata } from 'next';
import Navigation from './navigation';
import Footer from './footer';

export const metadata: Metadata = {
  metadataBase: new URL('http://localhost:3000'),
  title: {
    default: 'NEXT.JS PWA',
    template: '%s | NEXT.JS PWA',
  },
  description: 'Software Developer, Creator, Artist',
  openGraph: {
    title: 'NEXT.JS PWA',
    description: 'Software Developer, Creator, Artist',
    url: 'http://localhost:3000',
    siteName: 'NEXT.JS PWA',
    locale: 'en-UK',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
