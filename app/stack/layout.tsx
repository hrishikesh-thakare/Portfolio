import type { Metadata } from 'next';
import JsonLd from '@/components/JsonLd';
import Breadcrumb from '@/components/Breadcrumb';

export const metadata: Metadata = {
  title: 'Tech Stack - Hrishikesh Thakare | React, Next.js, TypeScript, React Native',
  description:
    'Full technology stack of Hrishikesh Thakare: React.js, Next.js, TypeScript, Node.js, React Native, PostgreSQL, MongoDB, AWS, Docker, Firebase, Flask, Payload CMS, and more.',
  alternates: { canonical: 'https://hrishikeshthakare.dev/stack' },
  openGraph: {
    title: 'Tech Stack - Hrishikesh Thakare | Full Stack Developer',
    description:
      'Every tool Hrishikesh reaches for: frontend, backend, mobile, cloud, databases, and ML.',
    url: 'https://hrishikeshthakare.dev/stack',
  },
};

const SITE_URL = 'https://hrishikeshthakare.dev';

const skills = [
  // Languages
  { name: 'Java', category: 'Languages' },
  { name: 'SQL', category: 'Languages' },
  { name: 'JavaScript', category: 'Languages' },
  { name: 'TypeScript', category: 'Languages' },
  { name: 'Python', category: 'Languages' },
  { name: 'HTML5', category: 'Languages' },
  { name: 'CSS3', category: 'Languages' },
  // Frontend
  { name: 'React.js', category: 'Frontend' },
  { name: 'Next.js', category: 'Frontend' },
  { name: 'React Native', category: 'Frontend' },
  { name: 'Tailwind CSS', category: 'Frontend' },
  { name: 'Bootstrap', category: 'Frontend' },
  // Backend
  { name: 'Node.js', category: 'Backend' },
  { name: 'Express.js', category: 'Backend' },
  { name: 'Flask', category: 'Backend' },
  { name: 'Payload CMS', category: 'Backend' },
  { name: 'REST APIs', category: 'Backend' },
  { name: 'JWT', category: 'Backend' },
  // Databases
  { name: 'PostgreSQL', category: 'Database' },
  { name: 'MongoDB', category: 'Database' },
  { name: 'Redis', category: 'Database' },
  { name: 'Mongoose', category: 'Database' },
  // Cloud & Tools
  { name: 'AWS', category: 'Cloud' },
  { name: 'Docker', category: 'Cloud' },
  { name: 'Firebase', category: 'Cloud' },
  { name: 'Supabase', category: 'Cloud' },
  { name: 'Vercel', category: 'Cloud' },
  { name: 'Render', category: 'Cloud' },
  { name: 'Git', category: 'Cloud' },
  { name: 'GitHub', category: 'Cloud' },
  { name: 'Postman', category: 'Cloud' },
  { name: 'Linux', category: 'Cloud' },
  // ML
  { name: 'TensorFlow', category: 'ML' },
  { name: 'Scikit-learn', category: 'ML' },
];

const stackGraph = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'BreadcrumbList',
      '@id': `${SITE_URL}/stack#breadcrumb`,
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Tech Stack',
          item: `${SITE_URL}/stack`,
        },
      ],
    },
    {
      '@type': 'WebPage',
      '@id': `${SITE_URL}/stack#page`,
      url: `${SITE_URL}/stack`,
      name: "Hrishikesh Thakare's Tech Stack - React, Next.js, TypeScript, React Native",
      description:
        'Complete technology stack of Full Stack Developer Hrishikesh Thakare, covering languages, frontend, backend, mobile, cloud, databases, and ML technologies.',
      isPartOf: { '@id': `${SITE_URL}/#website` },
      author: { '@id': `${SITE_URL}/#person` },
      inLanguage: 'en-IN',
      breadcrumb: { '@id': `${SITE_URL}/stack#breadcrumb` },
      about: { '@id': `${SITE_URL}/#person` },
    },
    {
      '@type': 'ItemList',
      '@id': `${SITE_URL}/stack#skillslist`,
      name: "Hrishikesh Thakare's Technology Stack",
      description:
        'Complete list of technologies and tools used by Full Stack Developer Hrishikesh Thakare',
      numberOfItems: skills.length,
      itemListElement: skills.map((skill, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        item: {
          '@type': 'DefinedTerm',
          name: skill.name,
          inDefinedTermSet: {
            '@type': 'DefinedTermSet',
            name: `${skill.category} Technologies`,
          },
        },
      })),
    },
  ],
};

export default function StackLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <JsonLd data={stackGraph} />
      <Breadcrumb
        items={[{ label: 'Home', href: '/' }, { label: 'Tech Stack' }]}
      />
      {children}
    </>
  );
}
