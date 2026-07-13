import type { Metadata } from 'next';
import JsonLd from '@/components/JsonLd';
import Breadcrumb from '@/components/Breadcrumb';

export const metadata: Metadata = {
  title: 'About - Hrishikesh Thakare | Full Stack Developer Mumbai',
  description:
    "Hrishikesh Thakare's journey as a Full Stack Developer. B.Tech IT student at Vidyalankar Institute of Technology (CGPA: 9.75), specializing in MERN, Next.js, and React Native. Building production-ready applications.",
  alternates: { canonical: 'https://hrishikeshthakare.dev/about' },
  openGraph: {
    title: 'About Hrishikesh Thakare - Full Stack Developer',
    description:
      'Full Stack Developer from Mumbai. B.Tech IT (CGPA: 9.75). Specializing in MERN, Next.js, React Native. SIH 2025 top 30 team, DMCE HackHive finalist.',
    url: 'https://hrishikeshthakare.dev/about',
    type: 'profile',
  },
  twitter: {
    title: 'About Hrishikesh Thakare - Full Stack Developer',
    description:
      'The story behind the code. Building scalable web and mobile applications from Mumbai.',
  },
};

const SITE_URL = 'https://hrishikeshthakare.dev';

const aboutGraph = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'BreadcrumbList',
      '@id': `${SITE_URL}/about#breadcrumb`,
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'About',
          item: `${SITE_URL}/about`,
        },
      ],
    },
    {
      '@type': 'ProfilePage',
      '@id': `${SITE_URL}/about#page`,
      url: `${SITE_URL}/about`,
      name: 'About Hrishikesh Thakare',
      description:
        'The story of Hrishikesh Thakare - Full Stack Developer from Mumbai, pursuing B.Tech IT at VIT with a CGPA of 9.75, building scalable applications with MERN, Next.js, and React Native.',
      isPartOf: { '@id': `${SITE_URL}/#website` },
      author: { '@id': `${SITE_URL}/#person` },
      inLanguage: 'en-IN',
      breadcrumb: { '@id': `${SITE_URL}/about#breadcrumb` },
      speakable: {
        '@type': 'SpeakableSpecification',
        cssSelector: ['h1', 'h2', '.about-summary', '.bio-text'],
      },
      mainEntity: {
        '@type': 'Person',
        '@id': `${SITE_URL}/#person`,
        name: 'Hrishikesh Thakare',
        jobTitle: 'Full Stack Developer',
        description:
          'Detail-oriented Full Stack Developer specializing in MERN, Next.js, and React Native. B.Tech IT student at Vidyalankar Institute of Technology, Mumbai (CGPA: 9.75). Building scalable web and mobile applications.',
        workLocation: { '@type': 'Place', name: 'Mumbai, India' },
        hasOccupation: {
          '@type': 'Occupation',
          name: 'Full Stack Developer',
          occupationLocation: { '@type': 'City', name: 'Mumbai' },
          skills:
            'React.js, Next.js, TypeScript, Node.js, React Native, PostgreSQL, MongoDB, AWS, Docker, Firebase, Flask, Payload CMS, Tailwind CSS',
        },
        memberOf: [
          {
            '@type': 'OrganizationRole',
            roleName: 'Full Stack Developer (Project-Based)',
            startDate: '2025-12',
            endDate: '2026-03',
            memberOf: {
              '@type': 'Organization',
              name: 'SpriteGenix',
            },
          },
        ],
      },
    },
  ],
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <JsonLd data={aboutGraph} />
      <Breadcrumb items={[{ label: 'Home', href: '/' }, { label: 'About' }]} />
      {children}
    </>
  );
}
