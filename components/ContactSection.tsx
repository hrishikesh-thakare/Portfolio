'use client';

import { useState } from 'react';
import { CV_VIEW_URL, CV_DOWNLOAD_URL } from '@/lib/data';

type FormState = 'idle' | 'sending' | 'sent' | 'error';

export default function ContactSection() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [status, setStatus] = useState<FormState>('idle');
  const [focused, setFocused] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    await new Promise((r) => setTimeout(r, 1400));
    setStatus('sent');
  };

  const inputStyle = (name: string): React.CSSProperties => ({
    width: '100%',
    background:
      focused === name ? 'rgba(255,255,255,.04)' : 'rgba(255,255,255,.02)',
    border: `1px solid ${focused === name ? 'rgba(34,197,94,.4)' : 'var(--border)'}`,
    borderRadius: 10,
    padding: '14px 18px',
    fontSize: 14,
    color: 'var(--text)',
    outline: 'none',
    transition: 'border-color .25s, background .25s',
    fontFamily: 'inherit',
    resize: 'none' as const,
  });

  return (
    <section
      id="contact"
      className="pg"
      style={{
        position: 'relative',
        zIndex: 2,
        borderTop: '1px solid var(--border)',
        minHeight: 'calc(100vh - 53px)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        paddingTop: 80,
        paddingBottom: 80,
      }}
    >
      <style>{`
        @media (max-width: 768px) {
          .ct-layout { grid-template-columns: 1fr !important; gap: 48px !important; }
          .ct-name-email { grid-template-columns: 1fr !important; }
        }
        @keyframes bounce {
          0%, 80%, 100% { transform: translateY(0); }
          40% { transform: translateY(-4px); }
        }
        input::placeholder, textarea::placeholder { color: rgba(255,255,255,.2); }
        input, textarea { caret-color: var(--accent); }
      `}</style>

      {/* Two-column layout */}
      <div
        className="ct-layout"
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: 80,
          alignItems: 'flex-start',
          maxWidth: 1100,
          margin: '0 auto',
          textAlign: 'left',
        }}
      >
        {/* Left: Heading block */}
        <div>
          <div
            style={{
              fontSize: 11,
              letterSpacing: '.3em',
              textTransform: 'uppercase',
              color: 'var(--accent)',
              marginBottom: 24,
              fontWeight: 600,
            }}
          >
            Contact
          </div>

          <h2
            className="font-display"
            style={{
              fontSize: 'clamp(48px, 6vw, 90px)',
              fontWeight: 700,
              lineHeight: 0.92,
              letterSpacing: '-.04em',
              marginBottom: 28,
            }}
          >
            Let&apos;s work
            <br />
            <span
              style={{
                WebkitTextStroke: '1.5px var(--text)',
                color: 'transparent',
              }}
            >
              together.
            </span>
          </h2>

          <p
            style={{
              fontSize: 16,
              lineHeight: 1.7,
              color: 'var(--muted)',
              maxWidth: 440,
            }}
          >
            Have a project in mind or looking to hire a Software Developer? Drop
            a message and I&apos;ll reply within 24 hours.
          </p>

          <div style={{ marginTop: 48, paddingTop: 32, borderTop: '1px solid var(--border)', maxWidth: 440 }}>
            <span style={{ fontSize: 10, letterSpacing: '.2em', textTransform: 'uppercase', color: 'var(--muted)', display: 'block', marginBottom: 16 }}>
              Resume
            </span>
            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
              <a
                href={CV_DOWNLOAD_URL}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: 8,
                  padding: '10px 22px', borderRadius: 100,
                  background: 'var(--accent)', color: '#000',
                  fontSize: 11, fontWeight: 600, letterSpacing: '.08em',
                  textTransform: 'uppercase', textDecoration: 'none',
                  transition: 'opacity .15s',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.opacity = '.85')}
                onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
              >
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" y1="15" x2="12" y2="3" />
                </svg>
                Download CV
              </a>
              <a
                href={CV_VIEW_URL}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: 6,
                  padding: '10px 18px', borderRadius: 100,
                  border: '1px solid var(--border)', color: 'var(--muted)',
                  fontSize: 11, letterSpacing: '.08em',
                  textTransform: 'uppercase', textDecoration: 'none',
                  transition: 'border-color .15s, color .15s',
                }}
                onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'rgba(255,255,255,.2)'; e.currentTarget.style.color = 'var(--text)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.color = 'var(--muted)'; }}
              >
                View PDF ↗
              </a>
            </div>
          </div>
        </div>

        {/* Right: form */}
        <div>
          {status === 'sent' ? (
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                minHeight: 400,
                textAlign: 'center',
                gap: 20,
              }}
            >
              <div
                style={{
                  width: 64,
                  height: 64,
                  borderRadius: '50%',
                  background: 'rgba(34,197,94,.12)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M5 12l5 5L20 7"
                    stroke="var(--accent)"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h3
                className="font-display"
                style={{
                  fontSize: 28,
                  fontWeight: 600,
                  letterSpacing: '-.02em',
                }}
              >
                Message sent!
              </h3>
              <p
                style={{
                  fontSize: 15,
                  color: 'var(--muted)',
                  maxWidth: 320,
                  lineHeight: 1.6,
                }}
              >
                Thanks for reaching out. I&apos;ll get back to you within 24
                hours.
              </p>
              <button
                onClick={() => {
                  setStatus('idle');
                  setForm({ name: '', email: '', subject: '', message: '' });
                }}
                style={{
                  marginTop: 8,
                  padding: '12px 28px',
                  borderRadius: 100,
                  border: '1px solid var(--border)',
                  background: 'transparent',
                  color: 'var(--muted)',
                  fontSize: 12,
                  letterSpacing: '.07em',
                  textTransform: 'uppercase',
                  cursor: 'pointer',
                  transition: 'color .2s, border-color .2s',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = 'var(--text)';
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,.25)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = 'var(--muted)';
                  e.currentTarget.style.borderColor = 'var(--border)';
                }}
              >
                Send another
              </button>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              style={{ display: 'flex', flexDirection: 'column', gap: 20 }}
            >
              <div
                className="ct-name-email"
                style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  gap: 16,
                }}
              >
                <div
                  style={{ display: 'flex', flexDirection: 'column', gap: 8 }}
                >
                  <label
                    style={{
                      fontSize: 11,
                      letterSpacing: '.12em',
                      textTransform: 'uppercase',
                      color: 'var(--muted)',
                    }}
                  >
                    Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Your name"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    onFocus={() => setFocused('name')}
                    onBlur={() => setFocused(null)}
                    style={inputStyle('name')}
                  />
                </div>
                <div
                  style={{ display: 'flex', flexDirection: 'column', gap: 8 }}
                >
                  <label
                    style={{
                      fontSize: 11,
                      letterSpacing: '.12em',
                      textTransform: 'uppercase',
                      color: 'var(--muted)',
                    }}
                  >
                    Email *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="your@email.com"
                    value={form.email}
                    onChange={(e) =>
                      setForm({ ...form, email: e.target.value })
                    }
                    onFocus={() => setFocused('email')}
                    onBlur={() => setFocused(null)}
                    style={inputStyle('email')}
                  />
                </div>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                <label
                  style={{
                    fontSize: 11,
                    letterSpacing: '.12em',
                    textTransform: 'uppercase',
                    color: 'var(--muted)',
                  }}
                >
                  Subject *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Project enquiry / Job opportunity / Collaboration"
                  value={form.subject}
                  onChange={(e) =>
                    setForm({ ...form, subject: e.target.value })
                  }
                  onFocus={() => setFocused('subject')}
                  onBlur={() => setFocused(null)}
                  style={inputStyle('subject')}
                />
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                <label
                  style={{
                    fontSize: 11,
                    letterSpacing: '.12em',
                    textTransform: 'uppercase',
                    color: 'var(--muted)',
                  }}
                >
                  Message *
                </label>
                <textarea
                  required
                  rows={7}
                  placeholder="Tell me about your project, timeline, and budget..."
                  value={form.message}
                  onChange={(e) =>
                    setForm({ ...form, message: e.target.value })
                  }
                  onFocus={() => setFocused('message')}
                  onBlur={() => setFocused(null)}
                  style={inputStyle('message')}
                />
              </div>

              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  paddingTop: 4,
                }}
              >
                <span style={{ fontSize: 12, color: 'var(--muted)' }}>
                  * Required fields
                </span>
                <button
                  type="submit"
                  disabled={status === 'sending'}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 10,
                    padding: '15px 32px',
                    borderRadius: 100,
                    background:
                      status === 'sending'
                        ? 'rgba(34,197,94,.6)'
                        : 'var(--accent)',
                    color: '#000',
                    fontSize: 12,
                    fontWeight: 500,
                    letterSpacing: '.07em',
                    textTransform: 'uppercase',
                    border: 'none',
                    cursor: status === 'sending' ? 'not-allowed' : 'pointer',
                    transition: 'opacity .25s, background .25s',
                  }}
                  onMouseEnter={(e) => {
                    if (status !== 'sending')
                      e.currentTarget.style.opacity = '.85';
                  }}
                  onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
                >
                  {status === 'sending' ? (
                    <>
                      Sending
                      <span style={{ display: 'inline-flex', gap: 3 }}>
                        {[0, 1, 2].map((i) => (
                          <span
                            key={i}
                            style={{
                              width: 4,
                              height: 4,
                              borderRadius: '50%',
                              background: '#000',
                              animation: `bounce 0.9s ease ${i * 0.15}s infinite`,
                            }}
                          />
                        ))}
                      </span>
                    </>
                  ) : (
                    <>
                      Send Message
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 13 13"
                        fill="none"
                      >
                        <path
                          d="M1 12L12 1M12 1H1M12 1V12"
                          stroke="currentColor"
                          strokeWidth="1.5"
                        />
                      </svg>
                    </>
                  )}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
