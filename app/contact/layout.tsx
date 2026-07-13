import type { Metadata } from 'next';
import JsonLd from '@/components/JsonLd';
import Breadcrumb from '@/components/Breadcrumb';

export const metadata: Metadata = {
  title: 'Contact - Hire Hrishikesh Thakare | Full Stack Developer Mumbai',
  description:
    'Get in touch with Hrishikesh Thakare, Full Stack Developer based in Mumbai. Available for full stack development roles, freelance projects, and internship opportunities. Email: hrishikeshthakare0809@gmail.com',
  alternates: { canonical: 'https://hrishikeshthakare.dev/contact' },
  openGraph: {
    title: 'Contact Hrishikesh Thakare - Hire a Full Stack Developer',
    description:
      'Available for full stack development roles, freelance projects, and internship opportunities. Mumbai-based, working remotely across India.',
    url: 'https://hrishikeshthakare.dev/contact',
  },
};

const SITE_URL = 'https://hrishikeshthakare.dev';

const contactGraph = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'BreadcrumbList',
      '@id': `${SITE_URL}/contact#breadcrumb`,
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Contact',
          item: `${SITE_URL}/contact`,
        },
      ],
    },
    {
      '@type': 'ContactPage',
      '@id': `${SITE_URL}/contact#page`,
      url: `${SITE_URL}/contact`,
      name: 'Contact Hrishikesh Thakare - Hire a Full Stack Developer',
      description:
        'Contact Hrishikesh Thakare, Full Stack Developer based in Mumbai, India. Available for development roles, freelance projects, and internship opportunities.',
      isPartOf: { '@id': `${SITE_URL}/#website` },
      author: { '@id': `${SITE_URL}/#person` },
      inLanguage: 'en-IN',
      breadcrumb: { '@id': `${SITE_URL}/contact#breadcrumb` },
      potentialAction: [
        {
          '@type': 'CommunicateAction',
          target: 'mailto:hrishikeshthakare0809@gmail.com',
          name: 'Email Hrishikesh Thakare',
        },
        {
          '@type': 'ViewAction',
          target: 'https://linkedin.com/in/hrishikesh-thakare',
          name: 'Connect on LinkedIn',
        },
      ],
      mainEntity: {
        '@type': 'Person',
        '@id': `${SITE_URL}/#person`,
        name: 'Hrishikesh Thakare',
        email: 'hrishikeshthakare0809@gmail.com',
        telephone: '+919594443558',
        jobTitle: 'Full Stack Developer',
        url: SITE_URL,
        contactPoint: {
          '@type': 'ContactPoint',
          contactType: 'professional inquiries',
          email: 'hrishikeshthakare0809@gmail.com',
          availableLanguage: 'English',
          areaServed: ['IN'],
          hoursAvailable: {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
            opens: '09:00',
            closes: '18:00',
          },
        },
        seeks: {
          '@type': 'Demand',
          name: 'Full Stack Developer opportunities',
          description:
            'Hrishikesh Thakare is actively seeking full stack development roles, freelance projects, and internship opportunities in Mumbai and remotely across India.',
          eligibleRegion: [
            { '@type': 'Country', name: 'India' },
          ],
        },
      },
    },
  ],
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <JsonLd data={contactGraph} />
      <Breadcrumb
        items={[{ label: 'Home', href: '/' }, { label: 'Contact' }]}
      />
      {children}
    </>
  );
}
