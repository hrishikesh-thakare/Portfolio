'use client';

import { useState } from 'react';
import { CV_VIEW_URL } from '@/lib/data';

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
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!form.name.trim()) {
      newErrors.name = 'Name is required';
    }
    if (!form.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (!form.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }
    if (!form.message.trim()) {
      newErrors.message = 'Message is required';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (field: string, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: '' }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setStatus('sending');

    const key = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY || "YOUR_ACCESS_KEY_HERE";
    if (key === "YOUR_ACCESS_KEY_HERE") {
      console.warn("Web3Forms access key is not set. Falling back to simulation.");
      await new Promise((r) => setTimeout(r, 1200));
      setStatus('sent');
      setForm({ name: '', email: '', subject: '', message: '' });
      return;
    }

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          access_key: key,
          name: form.name,
          email: form.email,
          subject: form.subject,
          message: form.message,
        }),
      });

      const result = await response.json();
      if (result.success) {
        setStatus('sent');
        setForm({ name: '', email: '', subject: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error(error);
      setStatus('error');
    }
  };

  const inputStyle = (name: string): React.CSSProperties => ({
    width: '100%',
    background:
      focused === name ? 'rgba(255,255,255,.04)' : 'rgba(255,255,255,.02)',
    border: `1px solid ${errors[name] ? '#EF4444' : focused === name ? 'rgba(34,197,94,.4)' : 'var(--border)'}`,
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
      className="pg contact-section"
      style={{
        position: 'relative',
        zIndex: 2,
        borderTop: '1px solid var(--border)',
        minHeight: 'calc(100vh - 53px)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
      }}
    >
      <style>{`
        .contact-section {
          padding-top: 80px;
          padding-bottom: 80px;
        }
        @media (max-width: 768px) {
          .contact-section {
            padding-top: 40px !important;
            padding-bottom: 40px !important;
            min-height: auto !important;
          }
          .ct-layout { grid-template-columns: 1fr !important; gap: 32px !important; }
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

          <div style={{ marginTop: 48, maxWidth: 440 }}>
            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
              <a
                href={CV_VIEW_URL}
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
                View Resume ↗
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
                onClick={() => setStatus('idle')}
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
          ) : status === 'error' ? (
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
                  background: 'rgba(239,68,68,.12)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M18 6L6 18M6 6l12 12"
                    stroke="#EF4444"
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
                Oops!
              </h3>
              <p
                style={{
                  fontSize: 15,
                  color: 'var(--muted)',
                  maxWidth: 320,
                  lineHeight: 1.6,
                }}
              >
                Something went wrong. Please check your connection or try again.
              </p>
              <button
                onClick={() => setStatus('idle')}
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
                Try again
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
                    placeholder="Your name"
                    value={form.name}
                    onChange={(e) => handleChange('name', e.target.value)}
                    onFocus={() => setFocused('name')}
                    onBlur={() => setFocused(null)}
                    style={inputStyle('name')}
                    suppressHydrationWarning={true}
                  />
                  {errors.name && (
                    <span style={{ fontSize: 11, color: '#EF4444', marginTop: 4 }}>
                      {errors.name}
                    </span>
                  )}
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
                    placeholder="your@email.com"
                    value={form.email}
                    onChange={(e) => handleChange('email', e.target.value)}
                    onFocus={() => setFocused('email')}
                    onBlur={() => setFocused(null)}
                    style={inputStyle('email')}
                    suppressHydrationWarning={true}
                  />
                  {errors.email && (
                    <span style={{ fontSize: 11, color: '#EF4444', marginTop: 4 }}>
                      {errors.email}
                    </span>
                  )}
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
                  placeholder="Project enquiry / Job opportunity / Collaboration"
                  value={form.subject}
                  onChange={(e) => handleChange('subject', e.target.value)}
                  onFocus={() => setFocused('subject')}
                  onBlur={() => setFocused(null)}
                  style={inputStyle('subject')}
                  suppressHydrationWarning={true}
                />
                {errors.subject && (
                  <span style={{ fontSize: 11, color: '#EF4444', marginTop: 4 }}>
                    {errors.subject}
                  </span>
                )}
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
                  rows={7}
                  placeholder="Tell me about your project, timeline, and budget..."
                  value={form.message}
                  onChange={(e) => handleChange('message', e.target.value)}
                  onFocus={() => setFocused('message')}
                  onBlur={() => setFocused(null)}
                  style={inputStyle('message')}
                  suppressHydrationWarning={true}
                />
                {errors.message && (
                  <span style={{ fontSize: 11, color: '#EF4444', marginTop: 4 }}>
                    {errors.message}
                  </span>
                )}
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
                    fontWeight: 600,
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
