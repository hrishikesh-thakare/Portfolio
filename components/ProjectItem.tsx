'use client';
import { useState } from 'react';

export default function ProjectItem({ project }: { project: any }) {
  const [imgLoaded, setImgLoaded] = useState(false);
  const imgSrc = project.image || null;

  return (
    <div className="project-layout" style={{ borderBottom: '1px solid var(--border)' }}>
      {/* Left Column - Content */}
      <div className="content-column">
        <div className="hero-info-col" style={{ paddingRight: 40 }}>
          <div style={{ display: 'flex', gap: 12, alignItems: 'center', marginBottom: 20, flexWrap: 'wrap' }}>
            <span style={{ fontSize: 11, letterSpacing: '.1em', textTransform: 'uppercase', color: 'var(--accent)', fontWeight: 600 }}>
              {project.company}
            </span>
            <span style={{ color: 'var(--border)' }}>/</span>
            <span style={{ fontSize: 11, letterSpacing: '.1em', textTransform: 'uppercase', color: 'var(--muted)' }}>
              {project.year}
            </span>
          </div>
          
          <h3 className="font-display" style={{ fontSize: 'clamp(32px, 5vw, 60px)', fontWeight: 700, letterSpacing: '-.03em', lineHeight: 1.05, marginBottom: 24 }}>
            {project.title}
          </h3>

          <p style={{ fontSize: 'clamp(16px, 1.8vw, 20px)', color: 'var(--muted)', lineHeight: 1.7, marginBottom: 36 }}>
            {project.desc}
            {project.motivation && (
              <>
                <br /><br />
                <em>{project.motivation}</em>
              </>
            )}
          </p>
          
          <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', marginBottom: 48 }}>
            {project.tags.map((tag: string) => (
              <span
                key={tag}
                style={{
                  fontSize: 11,
                  letterSpacing: '.07em',
                  textTransform: 'uppercase',
                  color: 'var(--text)',
                  border: '1px solid var(--border)',
                  padding: '6px 14px',
                  borderRadius: 100,
                  background: 'rgba(255,255,255,0.02)',
                }}
              >
                {tag}
              </span>
            ))}
          </div>

          {project.href && (
            <a
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 10,
                padding: '14px 28px',
                borderRadius: 100,
                background: 'var(--accent)',
                color: '#000',
                fontSize: 12,
                fontWeight: 600,
                letterSpacing: '.07em',
                textTransform: 'uppercase',
                textDecoration: 'none',
                transition: 'opacity .2s',
              }}
              onMouseEnter={e => e.currentTarget.style.opacity = '.85'}
              onMouseLeave={e => e.currentTarget.style.opacity = '1'}
            >
              View on GitHub
              <svg width="12" height="12" viewBox="0 0 13 13" fill="none">
                <path d="M1 12L12 1M12 1H1M12 1V12" stroke="currentColor" strokeWidth="1.5" />
              </svg>
            </a>
          )}
        </div>
      </div>
      
      {/* Right Column - Preview */}
      <div className="preview-column">
        {imgSrc ? (
          <>
            {!imgLoaded && (
              <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
                <div style={{ width: 24, height: 24, border: "2px solid var(--border)", borderTopColor: "var(--accent)", borderRadius: "50%", animation: "spin 0.8s linear infinite" }} />
              </div>
            )}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={imgSrc}
              alt={`${project.title} Preview`}
              onLoad={() => setImgLoaded(true)}
              style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center', opacity: imgLoaded ? 1 : 0, transition: "opacity 0.3s ease" }}
            />
          </>
        ) : (
          <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", color: 'var(--muted)', fontSize: 12, letterSpacing: '.05em', textTransform: 'uppercase' }}>
            No Preview Available
          </div>
        )}
      </div>

      <style>{`
        @keyframes spin { to { transform: rotate(360deg); } }
        
        .project-layout {
          display: flex;
          flex-direction: column;
        }

        .content-column {
          width: 100%;
          padding-top: 40px;
          padding-bottom: 40px;
          padding-left: 52px;
        }
        @media (max-width: 1024px) {
          .content-column {
            padding-left: 32px;
          }
        }
        @media (max-width: 640px) {
          .content-column {
            padding-left: 20px;
            padding-right: 20px;
          }
        }
        
        .preview-column {
          width: 100%;
          aspect-ratio: 16/9;
          background: #0a0a0a;
          position: relative;
          overflow: hidden;
          border-top: 1px solid var(--border);
        }

        @media (min-width: 1024px) {
          .project-layout {
            flex-direction: row;
            align-items: stretch;
          }
          
          .content-column {
            width: 50%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            padding-top: 60px;
            padding-bottom: 60px;
          }

          .preview-column {
            width: 50%;
            border-top: none;
            border-left: 1px solid var(--border);
          }
        }
        
        @media (max-width: 1023px) {
          .hero-info-col {
            padding-right: 20px !important;
          }
        }
      `}</style>
    </div>
  );
}
