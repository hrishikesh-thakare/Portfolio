'use client';
import { useEffect } from 'react';
import Lenis from 'lenis';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

import HeroSection from '@/components/HeroSection';
import MarqueeSection from '@/components/MarqueeSection';
import ExperienceOverviewSection from '@/components/ExperienceOverviewSection';
import ProjectsSection from '@/components/ProjectsSection';
import StackSection from '@/components/StackSection';
import ContactSection from '@/components/ContactSection';
import FooterSection from '@/components/FooterSection';
import JsonLd from '@/components/JsonLd';
import { SITE_URL } from '@/lib/data';


const graphSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Person',
      '@id': `${SITE_URL}/#person`,
      name: 'Hrishikesh Thakare',
      givenName: 'Hrishikesh',
      familyName: 'Thakare',
      url: SITE_URL,

      jobTitle: 'Full Stack Developer',
      description:
        'Detail-oriented Full Stack Developer specializing in MERN, Next.js, and React Native. Experienced in building scalable web and mobile applications with REST APIs, databases, and modern development tools. Based in Mumbai, India.',
      email: 'hrishikeshthakare0809@gmail.com',
      telephone: '+919594443558',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Mumbai',
        addressRegion: 'Maharashtra',
        addressCountry: 'IN',
      },
      nationality: {
        '@type': 'Country',
        name: 'India',
      },
      knowsLanguage: [
        { '@type': 'Language', name: 'English' },
        { '@type': 'Language', name: 'Hindi' },
        { '@type': 'Language', name: 'Marathi' },
      ],
      alumniOf: [
        {
          '@type': 'CollegeOrUniversity',
          name: 'Vidyalankar Institute of Technology',
          sameAs: 'https://vit.edu.in',
        },
        {
          '@type': 'EducationalOrganization',
          name: 'BK Birla College of Science, Arts and Commerce',
        },
      ],
      hasCredential: [
        {
          '@type': 'EducationalOccupationalCredential',
          name: 'B.Tech in Information Technology (CGPA: 9.75)',
          credentialCategory: 'degree',
          dateCreated: '2023',
          recognizedBy: {
            '@type': 'CollegeOrUniversity',
            name: 'Vidyalankar Institute of Technology',
          },
        },
        {
          '@type': 'EducationalOccupationalCredential',
          name: 'Higher Secondary Certificate (HSC) - 81.17%',
          credentialCategory: 'certificate',
          dateCreated: '2023',
          recognizedBy: {
            '@type': 'EducationalOrganization',
            name: 'BK Birla College of Science, Arts and Commerce',
          },
        },
      ],
      hasOccupation: {
        '@type': 'Occupation',
        name: 'Full Stack Developer',
        occupationLocation: { '@type': 'City', name: 'Mumbai' },
        description:
          'Builds scalable web and mobile applications using MERN stack, Next.js, React Native, and modern development tools.',
        skills:
          'React.js, Next.js, TypeScript, JavaScript, Node.js, Express.js, React Native, PostgreSQL, MongoDB, Firebase, Flask, Payload CMS, Tailwind CSS, Python, Java',
      },
      knowsAbout: [
        'React.js',
        'Next.js',
        'TypeScript',
        'JavaScript',
        'Node.js',
        'Express.js',
        'React Native',
        'PostgreSQL',
        'MongoDB',
        'Firebase',
        'Supabase',
        'Flask',
        'Payload CMS',
        'Tailwind CSS',
        'Python',
        'Java',
        'REST APIs',
        'JWT',
        'Scikit-learn',
        'Git',
        'Linux',
        'Bootstrap',
      ],
      award: [
        'Smart India Hackathon 2025 - Selected among top 30 teams for national submission',
        'DMCE HackHive 2.0 Finalist',
      ],
      mainEntityOfPage: SITE_URL,
      sameAs: [
        'https://linkedin.com/in/hrishikesh-thakare',
        'https://github.com/hrishikesh-thakare',
        'https://hrishikeshthakare.dev',
      ],
    },
    {
      '@type': 'WebSite',
      '@id': `${SITE_URL}/#website`,
      url: SITE_URL,
      name: 'Hrishikesh Thakare - Full Stack Developer',
      description:
        'Portfolio of Hrishikesh Thakare, Full Stack Developer based in Mumbai, India. MERN, Next.js, React Native, TypeScript expert.',
      author: { '@id': `${SITE_URL}/#person` },
      publisher: { '@id': `${SITE_URL}/#person` },
      inLanguage: 'en-IN',
      copyrightYear: new Date().getFullYear(),
      about: { '@id': `${SITE_URL}/#person` },
    },
    {
      '@type': 'WebPage',
      '@id': `${SITE_URL}/#webpage`,
      url: SITE_URL,
      name: 'Hrishikesh Thakare - Full Stack Developer, Mumbai',
      description:
        'Detail-oriented Full Stack Developer specializing in MERN, Next.js, and React Native. Building scalable web and mobile applications. Based in Mumbai, India.',
      isPartOf: { '@id': `${SITE_URL}/#website` },
      about: { '@id': `${SITE_URL}/#person` },
      author: { '@id': `${SITE_URL}/#person` },
      inLanguage: 'en-IN',
      datePublished: '2026-01-01',
      dateModified: new Date().toISOString().split('T')[0],
      breadcrumb: {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
        ],
      },
      speakable: {
        '@type': 'SpeakableSpecification',
        cssSelector: ['h1', 'h2', '.hero-description', '.about-summary'],
        xpath: [
          '/html/head/title',
          "/html/head/meta[@name='description']/@content",
        ],
      },
      significantLink: [
        `${SITE_URL}/#projects`,
        `${SITE_URL}/#stack`,
        `${SITE_URL}/#contact`,
      ],
    },
    {
      '@type': 'ProfessionalService',
      '@id': `${SITE_URL}/#service`,
      name: 'Hrishikesh Thakare - Full Stack Development Services',
      url: SITE_URL,
      description:
        'Full Stack Development services: MERN stack, Next.js, React Native, REST APIs, databases, and cloud deployment.',
      provider: { '@id': `${SITE_URL}/#person` },
      areaServed: [
        { '@type': 'Country', name: 'India' },
        { '@type': 'AdministrativeArea', name: 'Asia' },
      ],
      availableChannel: {
        '@type': 'ServiceChannel',
        serviceUrl: `${SITE_URL}/#contact`,
        availableLanguage: 'English',
      },
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Full Stack Development Services',
        itemListElement: [
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Full-Stack Web Development',
              description:
                'End-to-end web applications with React, Next.js, Node.js, Express.js, PostgreSQL, and MongoDB.',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Mobile App Development',
              description:
                'Cross-platform mobile apps with React Native and Expo.',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Backend & API Development',
              description:
                'RESTful APIs, authentication, database design with Node.js, Flask, and Payload CMS.',
            },
          },
        ],
      },
    },
    {
      '@type': 'FAQPage',
      '@id': `${SITE_URL}/#faq`,
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Who is Hrishikesh Thakare?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Hrishikesh Thakare is a Full Stack Developer based in Mumbai, India, specializing in MERN, Next.js, and React Native. He is currently pursuing B.Tech in Information Technology from Vidyalankar Institute of Technology with a CGPA of 9.75.',
          },
        },
        {
          '@type': 'Question',
          name: 'What technologies does Hrishikesh Thakare specialize in?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Hrishikesh specializes in React.js, Next.js, React Native, TypeScript, Node.js, Express.js, Flask, PostgreSQL, MongoDB, Redis, AWS, Docker, Firebase, Payload CMS, and Tailwind CSS.',
          },
        },
        {
          '@type': 'Question',
          name: 'Is Hrishikesh Thakare available for hire?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. Hrishikesh is available for full stack development roles, freelance projects, and internship opportunities. You can contact him at hrishikeshthakare0809@gmail.com.',
          },
        },
        {
          '@type': 'Question',
          name: 'What notable projects has Hrishikesh Thakare built?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Notable projects include: FitLedger (gym workout tracker with React Native & Payload CMS), Smart Product Warranty Tracker (React Native, Firebase, Google Document AI, Gemini API), Multilingual Text Summarizer (React.js, Flask, NLTK), and ThePuranik blog website.',
          },
        },
        {
          '@type': 'Question',
          name: "What is Hrishikesh Thakare's educational background?",
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Hrishikesh is pursuing B.Tech in Information Technology from Vidyalankar Institute of Technology, Mumbai (CGPA: 9.75, 2023–Present). He completed his HSC from BK Birla College with 81.17% (CET: 96.12 Percentile).',
          },
        },
      ],
    },
    {
      '@type': 'ItemList',
      '@id': `${SITE_URL}/#nav`,
      name: 'Site Navigation',
      itemListElement: [
        { '@type': 'SiteLinksSearchBox', target: SITE_URL },
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Home',
          item: SITE_URL,
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Projects',
          item: `${SITE_URL}/projects`,
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'Tech Stack',
          item: `${SITE_URL}/stack`,
        },
        {
          '@type': 'ListItem',
          position: 4,
          name: 'Contact',
          item: `${SITE_URL}/contact`,
        },
      ],
    },
  ],
};

export default function Home() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const lenis = new Lenis({
      duration: 0.9,
      easing: (t: number) => 1 - Math.pow(1 - t, 3),
    });

    lenis.on('scroll', () => ScrollTrigger.update());

    const tick = (t: number) => lenis.raf(t * 1000);
    gsap.ticker.add(tick);
    gsap.ticker.lagSmoothing(0);

    return () => {
      lenis.destroy();
      gsap.ticker.remove(tick);
    };
  }, []);

  return (
    <main>
      <JsonLd data={graphSchema} />
      <HeroSection />
      <MarqueeSection />
      <ExperienceOverviewSection />
      <ProjectsSection />
      <StackSection />
      <ContactSection />
      <FooterSection />
    </main>
  );
}
