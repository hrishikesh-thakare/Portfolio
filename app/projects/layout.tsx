import type { Metadata } from 'next';
import JsonLd from '@/components/JsonLd';
import Breadcrumb from '@/components/Breadcrumb';
import { projects } from '@/lib/data';

export const metadata: Metadata = {
  title: "Projects - Hrishikesh Thakare | Things I've Built",
  description:
    'All projects by Hrishikesh Thakare - fitness trackers, warranty management apps, NLP summarizers, and CMS-powered blogs. Built with React, Next.js, React Native, and Node.js.',
  alternates: { canonical: 'https://hrishikeshthakare.dev/projects' },
  openGraph: {
    title: 'Projects - Hrishikesh Thakare | Full Stack Developer',
    description:
      'Things built by Hrishikesh Thakare - from gym workout trackers to NLP-powered summarizers. React, Next.js, React Native, Node.js.',
    url: 'https://hrishikeshthakare.dev/projects',
    type: 'website',
  },
};

const SITE_URL = 'https://hrishikeshthakare.dev';

function getAppType(tags: string[]) {
  const t = tags.join(' ').toLowerCase();
  if (t.includes('flutter') || t.includes('react native'))
    return 'MobileApplication';
  if (t.includes('browser extension')) return 'SoftwareApplication';
  return 'WebApplication';
}

const projectsGraph = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'BreadcrumbList',
      '@id': `${SITE_URL}/projects#breadcrumb`,
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Projects',
          item: `${SITE_URL}/projects`,
        },
      ],
    },
    {
      '@type': 'CollectionPage',
      '@id': `${SITE_URL}/projects#page`,
      url: `${SITE_URL}/projects`,
      name: "Hrishikesh Thakare's Projects",
      description:
        'A curated collection of software projects by Hrishikesh Thakare - web apps, mobile apps, NLP tools, and CMS platforms.',
      isPartOf: { '@id': `${SITE_URL}/#website` },
      author: { '@id': `${SITE_URL}/#person` },
      inLanguage: 'en-IN',
      breadcrumb: { '@id': `${SITE_URL}/projects#breadcrumb` },
    },
    {
      '@type': 'ItemList',
      '@id': `${SITE_URL}/projects#list`,
      name: 'Software Projects by Hrishikesh Thakare',
      description:
        'All software projects built by Full Stack Developer Hrishikesh Thakare',
      numberOfItems: projects.filter((p) => p.href).length,
      itemListElement: projects
        .filter((p) => p.href)
        .map((p, i) => ({
          '@type': 'ListItem',
          position: i + 1,
          item: {
            '@type': getAppType(p.tags),
            '@id': p.href
              ? `${p.href}#app`
              : `${SITE_URL}/projects#project-${p.num}`,
            name: p.title,
            description: p.desc,
            url: p.href || undefined,
            applicationCategory: p.tags.includes('AI')
              ? 'AIApplication'
              : p.tags.includes('Flutter') || p.tags.includes('React Native')
                ? 'LifestyleApplication'
                : 'BusinessApplication',
            operatingSystem:
              p.tags.includes('Flutter') || p.tags.includes('React Native')
                ? 'iOS, Android'
                : 'Web',
            datePublished: `${p.year}-01-01`,
            creator: { '@id': `${SITE_URL}/#person` },
            author: { '@id': `${SITE_URL}/#person` },
            keywords: p.tags.join(', '),
            ...(p.company !== 'Personal Project'
              ? {
                  producer: {
                    '@type': 'Organization',
                    name: p.company,
                  },
                }
              : {}),
          },
        })),
    },
  ],
};

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <JsonLd data={projectsGraph} />
      <Breadcrumb
        items={[{ label: 'Home', href: '/' }, { label: 'Projects' }]}
      />
      {children}
    </>
  );
}
