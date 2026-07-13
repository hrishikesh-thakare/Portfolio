'use client';
import { AsciiArt } from '@/components/ascii-art';
import ExperienceOverviewSection from '@/components/ExperienceOverviewSection';
import { CV_VIEW_URL, CV_DOWNLOAD_URL } from '@/lib/data';

const VALUES = [
  {
    title: 'Production-Ready Code',
    icon: '⚡',
    desc: 'I focus on writing clean, scalable, and maintainable code. Every project is built with production readiness in mind - from architecture to deployment.',
  },
  {
    title: 'Full Stack Mindset',
    icon: '✦',
    desc: 'From frontend interfaces to backend APIs to mobile apps - I enjoy working across the entire stack and understanding how all the pieces fit together.',
  },
  {
    title: 'Continuous Learning',
    icon: '◎',
    desc: 'Technology evolves fast. I stay current with modern frameworks, AI tooling, and emerging technologies - curiosity is what drives me to keep building and improving.',
  },
];

function FadeUp({
  children,
  delay: _,
}: {
  children: React.ReactNode;
  delay?: number;
}) {
  return <div>{children}</div>;
}

export default function AboutPage() {
  return (
    <main
      style={{ color: 'var(--text)', minHeight: '100vh', paddingBottom: 120 }}
    >
      <style>{`
        @media (max-width: 768px) {
          .ab-narrative { grid-template-columns: 1fr !important; gap: 32px !important; }
          .ab-education { grid-template-columns: 1fr !important; }
          .ab-values    { grid-template-columns: 1fr !important; }
          .ab-hero-pt   { padding-top: 56px !important; }
        }
      `}</style>

      {/* ── Hero ── */}
      <section
        className="pg ab-hero-pt flex flex-col gap-6 md:gap-0 justify-between items-center md:items-start md:flex-row"
        style={{
          paddingTop: 100,
          paddingBottom: 72,
          borderBottom: '1px solid var(--border)',
        }}
      >
        <div>
          <div
            style={{
              fontSize: 11,
              letterSpacing: '.28em',
              textTransform: 'uppercase',
              color: 'var(--accent)',
              marginBottom: 24,
            }}
          >
            About
          </div>
          <h1
            className="font-display"
            style={{
              fontSize: 'clamp(52px,10vw,120px)',
              fontWeight: 700,
              letterSpacing: '-.045em',
              lineHeight: 0.92,
              marginBottom: 28,
            }}
          >
            My Journey
          </h1>
          <p
            style={{
              fontSize: 'clamp(16px,1.8vw,20px)',
              color: 'var(--muted)',
              maxWidth: 520,
              lineHeight: 1.65,
              marginBottom: 32,
            }}
          >
            From Mumbai classrooms to building real-world applications - a story of code, craft, and constant growth.
          </p>
          <div style={{ display: 'flex', alignItems: 'center', gap: 16, flexWrap: 'wrap' }}>
            <a
              href={CV_DOWNLOAD_URL}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 8,
                padding: '11px 24px',
                borderRadius: 100,
                background: 'var(--accent)',
                color: '#000',
                fontSize: 12,
                fontWeight: 600,
                letterSpacing: '.08em',
                textTransform: 'uppercase',
                textDecoration: 'none',
                transition: 'opacity .15s',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.opacity = '.85')}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
            >
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
              Download CV
            </a>
            <a
              href={CV_VIEW_URL}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 6,
                fontSize: 12,
                letterSpacing: '.08em',
                textTransform: 'uppercase',
                color: 'var(--muted)',
                textDecoration: 'none',
                transition: 'color .15s',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--text)')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--muted)')}
            >
              View PDF ↗
            </a>
          </div>
        </div>
        {/* ── Portrait placeholder ── */}
        <AsciiArt
          src=""
          resolution={100}
          color="var(--color-neutral-500)"
          animationStyle="fade"
          animationDuration={1.5}
          animateOnView={false}
          className="mx-auto aspect-square w-full max-w-lg bg-neutral-950"
        />
      </section>

      {/* ── Narrative ── */}
      <section className="pg" style={{ paddingTop: 80 }}>
        <div
          className="ab-narrative"
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: 72,
            alignItems: 'start',
          }}
        >
          <FadeUp>
            <p
              className="font-display"
              style={{
                fontSize: 'clamp(20px,2.5vw,36px)',
                fontWeight: 400,
                letterSpacing: '-.02em',
                lineHeight: 1.3,
              }}
            >
              I was always fascinated by how technology can solve real-world
              problems. With a strong academic foundation and an insatiable
              curiosity, I started my journey into software development,
              driven by a passion for building things that matter.
            </p>
          </FadeUp>

          <FadeUp delay={0.1}>
            <p
              style={{ fontSize: 16, lineHeight: 1.85, color: 'var(--muted)' }}
            >
              Currently pursuing B.Tech in Information Technology at Vidyalankar
              Institute of Technology, Mumbai, I&apos;ve maintained a CGPA of 9.75
              while actively building production-ready projects. My academic
              excellence was preceded by scoring 96.12 percentile in CET and
              81.17% in HSC from BK Birla College.
            </p>

            <p
              style={{
                fontSize: 16,
                lineHeight: 1.85,
                color: 'var(--muted)',
                marginTop: 24,
              }}
            >
              My first professional experience came at SpriteGenix, where I
              built &quot;ThePuranik&quot; — a blog website with an old manuscript-style
              aesthetic using Payload CMS, Next.js, TypeScript, and Tailwind CSS.
              This project-based role sharpened my skills in scalable CMS
              architecture and modern development practices.
            </p>

            <p
              style={{
                fontSize: 16,
                lineHeight: 1.85,
                color: 'var(--muted)',
                marginTop: 24,
              }}
            >
              Beyond professional work, I&apos;ve built projects like FitLedger
              (a gym workout tracker with React Native and Payload CMS), a Smart
              Product Warranty Tracker using Firebase and Google Document AI, and
              a Multilingual Text Summarizer combining NLP with translation for
              Hindi and Marathi.
            </p>

            <p
              style={{
                fontSize: 16,
                lineHeight: 1.85,
                color: 'var(--muted)',
                marginTop: 24,
              }}
            >
              I was selected among the top 30 teams for Smart India Hackathon
              2025 national submission and was a finalist at DMCE HackHive 2.0.
              Today, I continue to focus on building scalable, production-ready
              applications while exploring new technologies and pushing my
              boundaries as a developer.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* ── Experience ── */}
      <ExperienceOverviewSection className="pg" style={{ paddingTop: 100 }} />

      {/* ── Education ── */}
      <section className="pg" style={{ paddingTop: 100 }}>
        <div
          style={{
            fontSize: 11,
            letterSpacing: '.28em',
            textTransform: 'uppercase',
            color: 'var(--muted)',
            marginBottom: 48,
          }}
        >
          Education
        </div>
        <div
          className="ab-education"
          style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}
        >
          {[
            {
              school: 'Vidyalankar Institute of Technology',
              degree: 'B.Tech in Information Technology',
              grade: 'CGPA: 9.75',
              year: '2023 – Present',
              note: 'Currently pursuing B.Tech with a focus on software development, data structures, algorithms, and modern web technologies. Maintaining outstanding academic performance.',
            },
            {
              school: 'BK Birla College of Science, Arts and Commerce',
              degree: 'Higher Secondary Certificate (HSC)',
              grade: '81.17% | CET: 96.12%ile',
              year: '2021 – 2023',
              note: 'Completed HSC with strong performance. Achieved 96.12 percentile in CET examination, demonstrating exceptional aptitude in science and mathematics.',
            },
          ].map((edu, i) => (
            <FadeUp key={i} delay={i * 0.1}>
              <div
                style={{
                  border: '1px solid var(--border)',
                  borderRadius: 16,
                  padding: '32px',
                  height: '100%',
                  transition: 'border-color .1s',
                }}
                onMouseEnter={(e) =>
                  ((e.currentTarget as HTMLDivElement).style.borderColor =
                    'rgba(255,255,255,.2)')
                }
                onMouseLeave={(e) =>
                  ((e.currentTarget as HTMLDivElement).style.borderColor =
                    'var(--border)')
                }
              >
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'flex-start',
                    marginBottom: 16,
                    gap: 12,
                    flexWrap: 'wrap',
                  }}
                >
                  <div
                    style={{
                      fontSize: 10,
                      letterSpacing: '.1em',
                      textTransform: 'uppercase',
                      color: 'var(--muted)',
                    }}
                  >
                    {edu.year}
                  </div>
                  <span
                    style={{
                      padding: '3px 10px',
                      background: 'rgba(34,197,94,.1)',
                      border: '1px solid rgba(34,197,94,.3)',
                      borderRadius: 100,
                      fontSize: 10,
                      color: 'var(--accent)',
                      fontWeight: 500,
                    }}
                  >
                    {edu.grade}
                  </span>
                </div>
                <div
                  className="font-display"
                  style={{
                    fontSize: 'clamp(16px,1.8vw,22px)',
                    fontWeight: 600,
                    letterSpacing: '-.02em',
                    marginBottom: 4,
                  }}
                >
                  {edu.school}
                </div>
                <div
                  style={{
                    fontSize: 13,
                    color: 'var(--muted)',
                    marginBottom: 14,
                  }}
                >
                  {edu.degree}
                </div>
                <p
                  style={{
                    fontSize: 13,
                    color: 'rgba(255,255,255,.35)',
                    lineHeight: 1.7,
                  }}
                >
                  {edu.note}
                </p>
              </div>
            </FadeUp>
          ))}
        </div>
      </section>

      {/* ── Values ── */}
      <section className="pg" style={{ paddingTop: 100 }}>
        <div
          style={{
            fontSize: 11,
            letterSpacing: '.28em',
            textTransform: 'uppercase',
            color: 'var(--muted)',
            marginBottom: 48,
          }}
        >
          What I Stand For
        </div>
        <div
          className="ab-values"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3,1fr)',
            gap: 24,
          }}
        >
          {VALUES.map((v, i) => (
            <FadeUp key={v.title} delay={i * 0.1}>
              <div
                style={{
                  padding: '32px',
                  border: '1px solid var(--border)',
                  borderRadius: 16,
                  height: '100%',
                  transition: 'border-color .1s',
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLDivElement).style.borderColor =
                    'rgba(255,255,255,.15)';
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLDivElement).style.borderColor =
                    'var(--border)';
                }}
              >
                <div style={{ fontSize: 26, marginBottom: 18 }}>{v.icon}</div>
                <div
                  className="font-display"
                  style={{
                    fontSize: 'clamp(16px,1.5vw,20px)',
                    fontWeight: 600,
                    letterSpacing: '-.02em',
                    marginBottom: 12,
                  }}
                >
                  {v.title}
                </div>
                <p
                  style={{
                    fontSize: 13.5,
                    color: 'var(--muted)',
                    lineHeight: 1.75,
                  }}
                >
                  {v.desc}
                </p>
              </div>
            </FadeUp>
          ))}
        </div>
      </section>
    </main>
  );
}
