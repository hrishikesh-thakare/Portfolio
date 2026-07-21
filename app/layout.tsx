import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import localFont from 'next/font/local';
import './globals.css';
import NavStatic from '@/components/NavStatic';
import GlobalShell from '@/components/GlobalShell';
import { SITE_URL } from '@/lib/data';


const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  weight: ['300', '400', '500'],
});

const clashDisplay = localFont({
  src: [
    { path: '../public/fonts/ClashDisplay-400.woff2', weight: '400' },
    { path: '../public/fonts/ClashDisplay-500.woff2', weight: '500' },
    { path: '../public/fonts/ClashDisplay-600.woff2', weight: '600' },
    { path: '../public/fonts/ClashDisplay-700.woff2', weight: '700' },
  ],
  variable: '--font-clash',
  display: 'swap',
});


const FULL_NAME = 'Hrishikesh Thakare';
const TITLE = 'Hrishikesh Thakare - Full Stack Developer, Mumbai';
const DESCRIPTION =
  'Detail-oriented Full Stack Developer specializing in MERN, Next.js, and React Native. Experienced in building scalable web and mobile applications with REST APIs, databases, and modern development tools. Based in Mumbai, India.';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: TITLE,
    template: `%s - ${FULL_NAME}`,
  },
  description: DESCRIPTION,
  keywords: [
    'Hrishikesh Thakare',
    'Full Stack Developer Mumbai',
    'MERN Stack Developer',
    'React Developer India',
    'Next.js Developer',
    'TypeScript Engineer',
    'Full Stack Developer India',
    'React Native Developer',
    'Software Engineer for hire',
    'React Next.js TypeScript developer',
    'Node.js developer Mumbai',
    'Payload CMS developer',
    'Flask Python developer',
    'PostgreSQL MongoDB developer',
    'Vidyalankar Institute of Technology',
  ],
  authors: [{ name: FULL_NAME, url: SITE_URL }],
  creator: FULL_NAME,
  publisher: FULL_NAME,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: SITE_URL,
    siteName: `${FULL_NAME} - Portfolio`,
    title: TITLE,
    description: DESCRIPTION,
    images: [],
  },

  manifest: '/site.webmanifest',
  category: 'technology',
  classification: 'Software Engineering Portfolio',
  other: {
    'theme-color': '#0d0d0d',
    'color-scheme': 'dark',
    'msapplication-TileColor': '#0d0d0d',
  },
};



export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${clashDisplay.variable}`}>
      <head>
        <meta name="geo.region" content="IN-MH" />
        <meta name="geo.placename" content="Mumbai, India" />
        <meta name="language" content="English" />
        <meta name="revisit-after" content="3 days" />
        <meta name="rating" content="general" />
        <meta property="profile:first_name" content="Hrishikesh" />
        <meta property="profile:last_name" content="Thakare" />
        <link rel="me" href="https://linkedin.com/in/hrishikesh-thakare" />
      </head>
      <body className="antialiased" suppressHydrationWarning>
        <NavStatic />
        {children}
        <GlobalShell />
      </body>
    </html>
  );
}
