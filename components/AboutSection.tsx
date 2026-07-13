'use client';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { experience } from '@/lib/data';

export default function AboutSection() {
  const textRef = useRef<HTMLDivElement>(null);
  const statRefs = useRef<HTMLDivElement[]>([]);
  const expRefs = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.from(textRef.current, {
      opacity: 0,
      y: 48,
      duration: 1.1,
      ease: 'power3.out',
      scrollTrigger: { trigger: textRef.current, start: 'top 85%' },
    });

    statRefs.current.forEach((s, i) => {
      gsap.from(s, {
        opacity: 0,
        y: 30,
        duration: 0.8,
        delay: i * 0.12,
        ease: 'power3.out',
        scrollTrigger: { trigger: s, start: 'top 88%' },
      });
    });

    expRefs.current.forEach((e, i) => {
      gsap.from(e, {
        opacity: 0,
        x: -24,
        duration: 0.8,
        delay: i * 0.1,
        ease: 'power3.out',
        scrollTrigger: { trigger: e, start: 'top 88%' },
      });
    });
  }, []);

  return (
    <section
      id="about"
      style={{
        position: 'relative',
        zIndex: 2,
        padding: '130px 52px',
        borderTop: '1px solid var(--border)',
      }}
    >
      {/* Top grid: bio + stats */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: 100,
          alignItems: 'start',
          marginBottom: 100,
        }}
      >
        <div ref={textRef}>
          <div
            style={{
              fontSize: 11,
              letterSpacing: '.3em',
              textTransform: 'uppercase',
              color: 'var(--muted)',
              marginBottom: 28,
            }}
          >
            About Me
          </div>
          <p
            className="font-display"
            style={{
              fontSize: 'clamp(26px,3.2vw,46px)',
              fontWeight: 400,
              letterSpacing: '-.02em',
              lineHeight: 1.22,
            }}
          >
            I obsess over{' '}
            <em style={{ fontStyle: 'italic', color: 'var(--muted)' }}>
              the details
            </em>{' '}
            - clean architecture, responsive interfaces, and code
            that&apos;s scalable and maintainable.
          </p>

          <p
            style={{
              fontSize: 14.5,
              color: 'var(--muted)',
              marginTop: 28,
              lineHeight: 1.75,
              maxWidth: 420,
            }}
          >
            Specializing in MERN, Next.js, and React Native - from fitness
            tracking apps to NLP-powered summarizers - I
            bridge full-stack engineering with practical, production-ready solutions.
          </p>

          <a
            href="#"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 10,
              marginTop: 36,
              fontSize: 12,
              letterSpacing: '.07em',
              textTransform: 'uppercase',
              color: 'var(--text)',
              textDecoration: 'none',
              borderBottom: '1px solid var(--border)',
              paddingBottom: 4,
              transition: 'border-color .12s',
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.borderColor = 'var(--accent)')
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.borderColor = 'var(--border)')
            }
          >
            Download CV
            <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
              <path
                d="M6.5 1v10M1 6l5.5 5.5L12 6"
                stroke="currentColor"
                strokeWidth="1.5"
              />
            </svg>
          </a>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 36 }}>
          {[
            { num: '9.75', label: 'CGPA at VIT Mumbai' },
            { num: '4+', label: 'Projects delivered' },
            { num: '1', label: 'Industry experience' },
            { num: '2', label: 'Hackathon achievements' },
          ].map((s, i) => (
            <div
              key={s.num}
              ref={(el) => {
                if (el) statRefs.current[i] = el;
              }}
              style={{ borderTop: '1px solid var(--border)', paddingTop: 22 }}
            >
              <div
                className="font-display"
                style={{
                  fontSize: 60,
                  fontWeight: 600,
                  letterSpacing: '-.045em',
                  lineHeight: 1,
                  color: 'var(--text)',
                }}
              >
                {s.num}
                <sup style={{ fontSize: 24, color: 'var(--accent)' }}></sup>
              </div>
              <div
                style={{ fontSize: 13, color: 'var(--muted)', marginTop: 4 }}
              >
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Experience timeline */}
      <div>
        <div
          style={{
            fontSize: 11,
            letterSpacing: '.3em',
            textTransform: 'uppercase',
            color: 'var(--muted)',
            marginBottom: 48,
          }}
        >
          Experience
        </div>
        <div style={{ borderTop: '1px solid var(--border)' }}>
          {experience.map((e, i) => (
            <div
              key={i}
              ref={(el) => {
                if (el) expRefs.current[i] = el;
              }}
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: 40,
                padding: '40px 0',
                borderBottom: '1px solid var(--border)',
              }}
            >
              <div>
                <div
                  className="font-display"
                  style={{
                    fontSize: 'clamp(18px,2.2vw,28px)',
                    fontWeight: 500,
                    letterSpacing: '-.02em',
                  }}
                >
                  {e.role}
                </div>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 12,
                    marginTop: 8,
                  }}
                >
                  <span
                    style={{
                      fontSize: 13,
                      fontWeight: 500,
                      color: 'var(--accent)',
                    }}
                  >
                    {e.company}
                  </span>
                  <span
                    style={{
                      width: 4,
                      height: 4,
                      borderRadius: '50%',
                      background: 'var(--muted)',
                      flexShrink: 0,
                    }}
                  />
                  <span style={{ fontSize: 12, color: 'var(--muted)' }}>
                    {e.period}
                  </span>
                </div>
              </div>
              <p
                style={{ fontSize: 14, color: 'var(--muted)', lineHeight: 1.7 }}
              >
                {e.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
