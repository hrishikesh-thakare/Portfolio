import { Metadata } from 'next';
import { projects } from '@/lib/data';
import { notFound } from 'next/navigation';

export async function generateMetadata(props: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const params = await props.params;
  const project = projects.find((p) => p.slug === params.slug);
  if (!project) return {};

  return {
    title: `${project.title} - Projects | Hrishikesh Thakare`,
    description: project.desc,
    alternates: {
      canonical: `https://hrishikeshthakare.dev/projects/${params.slug}`,
    },
    openGraph: {
      title: `${project.title} - Projects | Hrishikesh Thakare`,
      description: project.desc,
      url: `https://hrishikeshthakare.dev/projects/${params.slug}`,
      type: 'website',
    },
  };
}

export default function ProjectDetailLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
