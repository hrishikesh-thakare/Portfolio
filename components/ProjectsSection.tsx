'use client';
import { projects } from '@/lib/data';
import ProjectItem from './ProjectItem';

export default function ProjectsSection() {

  return (
    <section id="projects" style={{ paddingTop: 60, paddingBottom: 0 }}>
      <style>{`
        @media (max-width: 768px) {
          .pj-hero { padding-top: 56px !important; }
          .pj-filters { display: none !important; }
          .pj-row-meta { display: none !important; }
        }
        .pj-filter-btn {
          padding: 5px 16px;
          border-radius: 100px;
          border: 1px solid var(--border);
          background: transparent;
          color: var(--muted);
          font-size: 11px;
          letter-spacing: .06em;
          text-transform: uppercase;
          cursor: pointer;
          font-family: inherit;
          transition: background .15s, color .15s, border-color .15s;
        }
        .pj-filter-btn:hover { border-color: rgba(255,255,255,.18); color: var(--text); }
        .pj-filter-btn--active { background: var(--accent) !important; color: #000 !important; border-color: var(--accent) !important; font-weight: 600; }
        .pj-filter-btn--active:hover { background: var(--accent) !important; color: #000 !important; }
      `}</style>

      <div
        className="pg"
        style={{
          fontSize: 11,
          letterSpacing: '.28em',
          textTransform: 'uppercase',
          color: 'var(--muted)',
          marginBottom: 48,
        }}
      >
        Projects
      </div>

      {/* Projects list */}
      <div style={{ paddingTop: 0, paddingLeft: 0, paddingRight: 0 }}>
        <div style={{ display: 'flex', flexDirection: 'column', borderTop: '1px solid var(--border)' }}>
          {projects.map((p) => (
            <ProjectItem key={p.slug} project={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
