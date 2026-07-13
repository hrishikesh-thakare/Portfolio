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
    skills: ["Java", "SQL", "JavaScript", "TypeScript", "Python", "HTML5", "CSS3"],
  },
  {
    label: "Frontend",
    icon: "▣",
    skills: ["React.js", "Next.js", "React Native", "Tailwind CSS", "Bootstrap"],
  },
  {
    label: "Backend",
    icon: "◉",
    skills: ["Node.js", "Express.js", "Flask", "Payload CMS", "REST APIs", "JWT"],
  },
  {
    label: "Databases",
    icon: "▦",
    skills: ["PostgreSQL", "MongoDB", "Redis", "Mongoose"],
  },
  {
    label: "Cloud & Tools",
    icon: "◬",
    skills: ["AWS", "Docker", "Firebase", "Supabase", "Vercel", "Render", "Git", "GitHub", "Postman", "Linux"],
  },
  {
    label: "Machine Learning",
    icon: "◎",
    skills: ["TensorFlow", "Scikit-learn"],
  },
];

const SLUGS: Record<string, string> = {
  "Java": "java",
  "SQL": "postgresql",
  "JavaScript": "javascript",
  "TypeScript": "typescript",
  "Python": "python",
  "HTML5": "html5",
  "CSS3": "css3",
  "React.js": "react",
  "Next.js": "nextdotjs",
  "React Native": "react",
  "Tailwind CSS": "tailwindcss",
  "Bootstrap": "bootstrap",
  "Node.js": "nodedotjs",
  "Express.js": "express",
  "Flask": "flask",
  "Payload CMS": "payloadcms",
  "REST APIs": "postman",
  "JWT": "jsonwebtokens",
  "PostgreSQL": "postgresql",
  "MongoDB": "mongodb",
  "Redis": "redis",
  "Mongoose": "mongoose",
  "AWS": "amazonaws",
  "Docker": "docker",
  "Firebase": "firebase",
  "Supabase": "supabase",
  "Vercel": "vercel",
  "Render": "render",
  "Git": "git",
  "GitHub": "github",
  "Postman": "postman",
  "Linux": "linux",
  "TensorFlow": "tensorflow",
  "Scikit-learn": "scikitlearn",
};

function SkillTag({ skill }: { skill: string }) {
  const [hovered, setHovered] = useState(false);
  const slug = SLUGS[skill];
  const iconUrl = slug
    ? hovered
      ? `https://cdn.simpleicons.org/${slug}` // Brand color on hover
      : `https://cdn.simpleicons.org/${slug}/c8c1c1` // Theme-muted color by default
    : null;

  return (
    <span
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 8,
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
      {iconUrl && (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={iconUrl}
          alt=""
          style={{
            width: 14,
            height: 14,
            opacity: hovered ? 1 : 0.8,
            transition: "opacity .15s ease",
          }}
        />
      )}
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
    <section id="stack" className="pg" style={{ paddingTop: 60, paddingBottom: 100 }}>
      <style>{`
        @media (max-width: 768px) {
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
