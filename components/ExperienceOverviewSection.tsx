'use client';
import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { experience } from '@/lib/data';
import gsap from 'gsap';

interface ExperienceOverviewSectionProps {
  id?: string;
  className?: string;
  style?: React.CSSProperties;
}

function ExperienceItem({ exp }: { exp: typeof experience[0] }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const descRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (descRef.current) {
      if (isExpanded) {
        gsap.to(descRef.current, {
          height: 'auto',
          opacity: 1,
          duration: 0.4,
          ease: 'power3.out',
        });
      } else {
        gsap.to(descRef.current, {
          height: 0,
          opacity: 0,
          duration: 0.3,
          ease: 'power2.inOut',
        });
      }
    }
  }, [isExpanded]);

  return (
    <div
      className="exp-overview__row"
      style={{
        display: 'grid',
        gridTemplateColumns: '160px 1fr 1fr',
        gap: 40,
        padding: '36px 0',
        borderBottom: '1px solid var(--border)',
        alignItems: 'start',
      }}
    >
      <div>
        <div
          style={{
            fontSize: 11,
            color: 'var(--muted)',
            letterSpacing: '.06em',
            lineHeight: 1.6,
          }}
        >
          {exp.period}
        </div>
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 5,
            marginTop: 10,
            padding: '3px 10px',
            borderRadius: 100,
            border: '1px solid var(--border)',
            fontSize: 10,
            color: 'var(--muted)',
            letterSpacing: '.07em',
            textTransform: 'uppercase',
          }}
        >
          <span
            style={{
              width: 5,
              height: 5,
              borderRadius: '50%',
              background: 'var(--accent)',
              flexShrink: 0,
            }}
          />
          {exp.location}
        </div>
      </div>

      {/* Middle Column */}
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        
        {/* Logo + Info Row */}
        <div style={{ display: 'flex', alignItems: 'stretch', gap: 14 }}>
          {/* Logo Container */}
          <div
            style={{
              aspectRatio: '1 / 1',
              height: 'auto',
              borderRadius: 12,
              border: '.5px solid var(--border)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              overflow: 'hidden',
              flexShrink: 0,
              padding: 0,
            }}
          >
          {exp.logoUrl ? (
            <Image
              src={exp.logoUrl}
              alt={`${exp.company} logo`}
              width={400}
              height={400}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
              }}
            />
          ) : (
            <span
              style={{
                color: '#fff',
                fontSize: 13,
                fontWeight: 700,
                letterSpacing: '.04em',
              }}
            >
              {exp.logo}
            </span>
          )}
        </div>

        {/* Right Side: Role, Company, Stack Tags */}
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 8, flexGrow: 1, padding: '2px 0' }}>
          <div
            className="font-display"
            style={{
              fontSize: 'clamp(16px,1.8vw,24px)',
              fontWeight: 500,
              letterSpacing: '-.02em',
              lineHeight: 1.2,
            }}
          >
            {exp.role}
          </div>

          {exp.domain ? (
            <a
              href={`https://${exp.domain}`}
              target="_blank"
              rel="noreferrer"
              aria-label={`Visit ${exp.company} website`}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 6,
                fontSize: 13,
                color: 'var(--accent)',
                fontWeight: 500,
                textDecoration: 'none',
                width: 'fit-content',
                lineHeight: 1,
              }}
            >
              <span>{exp.company}</span>

              <svg
                style={{
                  color: 'currentColor',
                  flexShrink: 0,
                  transform: 'translateY(-1px)',
                }}
                width="12"
                height="12"
                viewBox="0 0 18 18"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M1 17L17 1M17 1H1M17 1V17"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          ) : (
            <div
              style={{
                fontSize: 13,
                color: 'var(--accent)',
                fontWeight: 500,
                lineHeight: 1,
              }}
            >
              {exp.company}
            </div>
          )}

          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: 6,
            }}
          >
            {exp.stack.map((skill) => (
              <span
                key={skill}
                style={{
                  padding: '3px 9px',
                  background: 'var(--surface-2)',
                  border: '1px solid var(--border)',
                  borderRadius: 4,
                  fontSize: 10,
                  color: 'var(--muted)',
                  letterSpacing: '.04em',
                }}
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
          
      <button
        className="mobile-view-more"
        onClick={() => setIsExpanded(!isExpanded)}
        style={{
          background: 'none',
          border: 'none',
          color: 'var(--muted)',
          fontSize: 11,
          letterSpacing: '.08em',
          textTransform: 'uppercase',
          display: 'none',
          alignItems: 'center',
          gap: 6,
          cursor: 'pointer',
          padding: '16px 0 0 0',
          width: 'fit-content',
          transition: 'color .2s',
        }}
        onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--text)')}
        onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--muted)')}
      >
        {isExpanded ? 'Hide description' : 'Read description'}
        <svg
          width="12"
          height="12"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{
            transform: isExpanded ? 'rotate(180deg)' : 'rotate(0deg)',
            transition: 'transform 0.3s ease',
          }}
        >
          <polyline points="6 9 12 15 18 9"></polyline>
        </svg>
      </button>
      </div>

      <div
        ref={descRef}
        className="exp-overview__desc-wrapper"
        style={{
          overflow: 'hidden',
          height: 0,
          opacity: 0,
        }}
      >
        <div className="exp-overview__desc-inner" style={{ paddingTop: 12 }}>
          <p
            style={{
              fontSize: 14,
              color: 'var(--muted)',
              lineHeight: 1.75,
              margin: 0,
            }}
          >
            {exp.desc}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function ExperienceOverviewSection({
  id = 'work',
  className = 'pg',
  style,
}: ExperienceOverviewSectionProps) {
  return (
    <section
      id={id}
      className={className}
      style={{
        paddingTop: 50,
        ...style,
      }}
    >
      <style>{`
        @media (max-width: 768px) {
          .exp-overview__row {
            grid-template-columns: 1fr !important;
            gap: 16px !important;
          }
          .mobile-view-more {
            display: inline-flex !important;
          }
        }
        @media (min-width: 769px) {
          .exp-overview__desc-wrapper {
            height: auto !important;
            opacity: 1 !important;
          }
        }
        @media (min-width: 769px) and (max-width: 1100px) {
          .exp-overview__row {
            grid-template-columns: 130px 1fr !important;
          }
          .exp-overview__desc-wrapper {
            grid-column: 2 !important;
          }
        }
      `}</style>

      <div
        style={{
          fontSize: 11,
          letterSpacing: '.28em',
          textTransform: 'uppercase',
          color: 'var(--muted)',
          marginBottom: 48,
        }}
      >
        Experience
      </div>

      <div style={{ borderTop: '1px solid var(--border)' }}>
        {experience.map((exp) => (
          <ExperienceItem key={`${exp.company}-${exp.period}`} exp={exp} />
        ))}
      </div>
    </section>
  );
}
