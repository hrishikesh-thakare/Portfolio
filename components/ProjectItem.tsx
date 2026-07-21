'use client';
import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';

interface Project {
  num: string;
  title: string;
  desc: string;
  motivation?: string;
  tags: string[];
  year: string;
  slug: string;
  images: string[];
  href?: string;
  featured: boolean;
  company: string;
  logo: string;
  logoUrl?: string;
  logoColor?: string;
}

export default function ProjectItem({ project }: { project: Project }) {
  const [currentImgIndex, setCurrentImgIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const sliderRef = useRef<HTMLDivElement>(null);
  
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  useEffect(() => {
    if (sliderRef.current) {
      gsap.to(sliderRef.current, {
        xPercent: -currentImgIndex * 100,
        duration: 0.6,
        ease: 'power3.inOut'
      });
    }
  }, [currentImgIndex]);

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImgIndex((prev) => (prev === 0 ? project.images.length - 1 : prev - 1));
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImgIndex((prev) => (prev === project.images.length - 1 ? 0 : prev + 1));
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartX.current === null || touchEndX.current === null) return;
    
    const diff = touchStartX.current - touchEndX.current;
    const swipeThreshold = 50;

    if (diff > swipeThreshold) {
      setCurrentImgIndex((prev) => (prev === project.images.length - 1 ? 0 : prev + 1));
    } else if (diff < -swipeThreshold) {
      setCurrentImgIndex((prev) => (prev === 0 ? project.images.length - 1 : prev - 1));
    }

    touchStartX.current = null;
    touchEndX.current = null;
  };

  useEffect(() => {
    if (!project.images || project.images.length <= 1 || isHovered) return;
    
    const interval = setInterval(() => {
      setCurrentImgIndex((prev) => (prev === project.images.length - 1 ? 0 : prev + 1));
    }, 3000);

    return () => clearInterval(interval);
  }, [project.images, isHovered, currentImgIndex]);

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
      <div
        className="preview-column"
        style={{ position: 'relative', background: '#0a0a0a', overflow: 'hidden', touchAction: 'pan-y' }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {project.images && project.images.length > 0 ? (
          <>
            <div
              ref={sliderRef}
              style={{
                display: 'flex',
                width: '100%',
                height: '100%',
              }}
            >
              {project.images.map((src, idx) => (
                <div
                  key={src}
                  style={{
                    minWidth: '100%',
                    height: '100%',
                    position: 'relative'
                  }}
                >
                  <Image
                    src={src}
                    alt={`${project.title} Preview ${idx + 1}`}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    style={{
                      objectFit: 'cover',
                      objectPosition: 'center',
                    }}
                  />
                </div>
              ))}
            </div>
            {project.images.length > 1 && (
              <>
                {currentImgIndex > 0 && (
                  <button
                    className="hide-on-mobile"
                    onClick={handlePrev}
                    aria-label="Previous image"
                    style={{
                      position: 'absolute',
                      left: 16,
                      top: '50%',
                      transform: 'translateY(-50%)',
                      background: 'rgba(0, 0, 0, 0.4)',
                      border: '1px solid var(--border)',
                      borderRadius: '50%',
                      width: 38,
                      height: 38,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'var(--muted)',
                      cursor: 'pointer',
                      transition: 'background 0.2s, color 0.2s, opacity 0.2s, border-color 0.2s',
                      opacity: isHovered ? 1 : 0,
                      zIndex: 3
                    }}
                    onMouseEnter={e => {
                      e.currentTarget.style.background = 'rgba(0, 0, 0, 0.85)';
                      e.currentTarget.style.color = 'var(--text)';
                      e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)';
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.background = 'rgba(0, 0, 0, 0.4)';
                      e.currentTarget.style.color = 'var(--muted)';
                      e.currentTarget.style.borderColor = 'var(--border)';
                    }}
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M15 18l-6-6 6-6" /></svg>
                  </button>
                )}
                {currentImgIndex < project.images.length - 1 && (
                  <button
                    className="hide-on-mobile"
                    onClick={handleNext}
                    aria-label="Next image"
                    style={{
                      position: 'absolute',
                      right: 16,
                      top: '50%',
                      transform: 'translateY(-50%)',
                      background: 'rgba(0, 0, 0, 0.4)',
                      border: '1px solid var(--border)',
                      borderRadius: '50%',
                      width: 38,
                      height: 38,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'var(--muted)',
                      cursor: 'pointer',
                      transition: 'background 0.2s, color 0.2s, opacity 0.2s, border-color 0.2s',
                      opacity: isHovered ? 1 : 0,
                      zIndex: 3
                    }}
                    onMouseEnter={e => {
                      e.currentTarget.style.background = 'rgba(0, 0, 0, 0.85)';
                      e.currentTarget.style.color = 'var(--text)';
                      e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)';
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.background = 'rgba(0, 0, 0, 0.4)';
                      e.currentTarget.style.color = 'var(--muted)';
                      e.currentTarget.style.borderColor = 'var(--border)';
                    }}
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18l6-6-6-6" /></svg>
                  </button>
                )}
                <div
                  style={{
                    position: 'absolute',
                    bottom: 16,
                    left: '50%',
                    transform: 'translateX(-50%)',
                    display: 'flex',
                    gap: 8,
                    zIndex: 3,
                    background: 'rgba(0, 0, 0, 0.4)',
                    padding: '8px 14px',
                    borderRadius: '100px',
                    border: '1px solid var(--border)'
                  }}
                >
                  {project.images.map((_: string, idx: number) => (
                    <button
                      key={idx}
                      onClick={(e) => {
                        e.stopPropagation();
                        setCurrentImgIndex(idx);
                      }}
                      aria-label={`Go to image ${idx + 1}`}
                      style={{
                        padding: 0,
                        border: 'none',
                        cursor: 'pointer',
                        width: 6,
                        height: 6,
                        borderRadius: '50%',
                        background: idx === currentImgIndex ? 'var(--accent)' : 'var(--muted)',
                        transition: 'background 0.3s, transform 0.3s',
                        transform: idx === currentImgIndex ? 'scale(1.2)' : 'scale(1)',
                      }}
                    />
                  ))}
                </div>
              </>
            )}
          </>
        ) : (
          <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", color: 'var(--muted)', fontSize: 12, letterSpacing: '.05em', textTransform: 'uppercase' }}>
            No Preview Available
          </div>
        )}
      </div>

      <style>{`

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
          aspect-ratio: 4/3;
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
            padding-top: 32px;
            padding-bottom: 32px;
          }

          .preview-column {
            width: 50%;
            aspect-ratio: 4/3;
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
