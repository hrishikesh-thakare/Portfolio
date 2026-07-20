'use client';

import { useState } from 'react';

interface Category {
  label: string;
  icon: string;
  skills: string[];
}

const CATEGORIES: Category[] = [
  {
    label: "Languages",
    icon: "◈",
    skills: ["Java", "SQL", "JavaScript", "TypeScript"],
  },
  {
    label: "Frontend",
    icon: "▣",
    skills: ["React.js", "React Native", "Next.js", "Tailwind CSS"],
  },
  {
    label: "Backend",
    icon: "◉",
    skills: ["Node.js", "Express.js", "Flask", "Payload CMS", "REST APIs"],
  },
  {
    label: "Databases",
    icon: "▦",
    skills: ["PostgreSQL", "MongoDB"],
  },
  {
    label: "Cloud & Tools",
    icon: "◬",
    skills: ["Firebase", "Supabase", "Vercel", "Render", "Git", "GitHub", "Postman", "Linux"],
  },
];

function SkillTag({ skill }: { skill: string }) {
  const [hovered, setHovered] = useState(false);

  return (
    <span
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: "inline-flex",
        alignItems: "center",
        padding: "7px 14px",
        border: hovered ? "1px solid rgba(255,255,255,.2)" : "1px solid var(--border)",
        borderRadius: 100,
        fontSize: 13,
        letterSpacing: ".01em",
        transition: "border-color .15s, background .15s",
        cursor: "default",
        background: hovered ? "rgba(255,255,255,0.02)" : "transparent",
      }}
    >
      <span style={{ color: hovered ? "var(--text)" : "var(--muted)", transition: "color .2s" }}>
        {skill}
      </span>
    </span>
  );
}

function CategorySection({ cat }: { cat: Category }) {
  return (
    <div>
      <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 18 }}>
        <span style={{ color: "var(--accent)", fontSize: 16 }}>{cat.icon}</span>
        <h3 className="font-display" style={{ fontSize: "clamp(16px,1.8vw,22px)", fontWeight: 600, letterSpacing: "-.02em" }}>
          {cat.label}
        </h3>
      </div>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
        {cat.skills.map(skill => (
          <SkillTag key={skill} skill={skill} />
        ))}
      </div>
    </div>
  );
}

export default function StackSection() {
  return (
    <section id="stack" className="pg stack-section">
      <style>{`
        .stack-section {
          padding-top: 60px;
          padding-bottom: 100px;
        }
        @media (max-width: 768px) {
          .stack-section {
            padding-top: 50px !important;
            padding-bottom: 50px !important;
          }
          .st-cats { grid-template-columns: 1fr !important; gap: 40px !important; }
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
        My Stack
      </div>

      <div style={{ borderTop: "1px solid var(--border)", paddingTop: 48 }}>
        <div className="st-cats" style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: "56px 80px" }}>
          {CATEGORIES.map(cat => (
            <CategorySection key={cat.label} cat={cat} />
          ))}
        </div>
      </div>
    </section>
  );
}
