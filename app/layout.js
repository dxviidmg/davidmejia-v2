import { Public_Sans } from 'next/font/google';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../src/index.css';
import '../src/App.css';

const publicSans = Public_Sans({ subsets: ['latin'], weight: ['400', '500', '600', '700', '800'] });

export const metadata = {
  title: 'David Mejía | Full Stack Developer · FastAPI, Django, React | Entropia',
  description: '10+ años de experiencia en desarrollo backend y sistemas web. Especializado en Python, Django, FastAPI, React. Integraciones de pago, APIs transaccionales, arquitectura multi-tenant. Actualmente en Entropia.',
  keywords: 'David Mejía, Ingeniero de Software, Full Stack Developer, Python, Django, FastAPI, React, Backend, Frontend, API REST, PostgreSQL, AWS, GCP, Entropia, México, CDMX',
  authors: [{ name: 'David Mejía', url: 'https://dmejia.vercel.app' }],
  creator: 'David Mejía',
  publisher: 'David Mejía',
  canonical: 'https://dmejia.vercel.app/',
  openGraph: {
    type: 'website',
    title: 'David Mejía | Full Stack Developer · FastAPI, Django, React',
    description: '10+ años construyendo sistemas transaccionales. Backend sólido, producto completo.',
    url: 'https://dmejia.vercel.app/',
    siteName: 'David Mejía',
    images: [
      {
        url: 'https://dmejia.vercel.app/og-image.png',
        width: 1200,
        height: 630,
        alt: 'David Mejía - Full Stack Developer',
      },
    ],
    locale: 'es_MX',
    alternateLocale: ['en_US'],
  },
  twitter: {
    card: 'summary_large_image',
    image: 'https://dmejia.vercel.app/og-image.png',
    title: 'David Mejía | Full Stack Developer',
    description: '10+ años de experiencia en desarrollo backend y sistemas web. Python, Django, FastAPI, React.',
  },
  robots: {
    index: true,
    follow: true,
    'max-snippet': -1,
    'max-image-preview': 'large',
    'max-video-preview': -1,
  },
  alternates: {
    languages: {
      es: 'https://dmejia.vercel.app/es',
      en: 'https://dmejia.vercel.app/en',
    },
  },
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
              image: 'https://dmejia.vercel.app/og-image.png',
              email: process.env.NEXT_PUBLIC_EMAIL,
              description: '10+ años de experiencia en desarrollo Full Stack. Especializado en Python, Django, FastAPI y React. Desarrollo de integraciones de pago, APIs transaccionales, sistemas multi-tenant. Actualmente en Entropia.',
              jobTitle: 'Full Stack Developer · Senior Engineer',
              workLocation: {
                '@type': 'Place',
                name: 'Ciudad de México, México',
              },
              knowsAbout: [
                'Python',
                'Django',
                'FastAPI',
                'React',
                'TypeScript',
                'JavaScript',
                'PostgreSQL',
                'MySQL',
                'AWS',
                'GCP',
                'Docker',
                'Git',
                'API REST',
                'GraphQL',
              ],
              sameAs: [
                process.env.NEXT_PUBLIC_LINKEDIN,
                process.env.NEXT_PUBLIC_GITHUB,
              ],
              givenName: 'David',
              familyName: 'Mejía',
              alumniOf: {
                '@type': 'EducationalOrganization',
                name: 'ITESM-CEM',
              },
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
