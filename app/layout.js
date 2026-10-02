import { Public_Sans } from 'next/font/google';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../src/index.css';
import '../src/App.css';

const publicSans = Public_Sans({ subsets: ['latin'], weight: ['400', '500', '600', '700', '800'] });

export const metadata = {
  title: 'David Mejía | Full Stack Developer · Python, Django, React',
  description: 'Desarrollador Full Stack con raíz backend: Python, Django y React. Integraciones de pago, APIs y sistemas transaccionales.',
  keywords: 'David Mejía, Software Engineer, Full Stack Developer, Python, Django, React, Backend, Frontend, Freelance, México',
  authors: [{ name: 'David Mejía' }],
  canonical: 'https://dmejia.vercel.app/',
  openGraph: {
    type: 'website',
    title: 'David Mejía | Full Stack Developer',
    description: 'Desarrollador Full Stack con raíz backend: Python, Django y React. Integraciones de pago, APIs y sistemas transaccionales.',
    url: 'https://dmejia.vercel.app/',
    siteName: 'David Mejía Portfolio',
    images: [
      {
        url: 'https://dmejia.vercel.app/og-image.png',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'es_MX',
    alternateLocale: ['en_US'],
  },
  twitter: {
    card: 'summary_large_image',
    image: 'https://dmejia.vercel.app/og-image.png',
    title: 'David Mejía | Full Stack Developer',
    description: 'Desarrollador Full Stack con raíz backend: Python, Django y React.',
  },
  robots: 'index, follow',
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon.svg', type: 'image/svg+xml' },
    ],
    apple: '/logo192.png',
  },
  manifest: '/manifest.json',
  themeColor: '#0A0A0A',
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Person',
              name: 'David Mejía',
              url: 'https://dmejia.vercel.app/',
              jobTitle: 'Full Stack Developer',
              sameAs: [
                process.env.NEXT_PUBLIC_LINKEDIN,
                process.env.NEXT_PUBLIC_GITHUB,
              ],
              knowsAbout: ['Python', 'Django', 'React', 'JavaScript', 'PostgreSQL', 'AWS', 'GCP'],
            }),
          }}
        />
      </head>
      <body className={publicSans.className} style={{ margin: 0 }}>
        {children}
      </body>
    </html>
  );
}
