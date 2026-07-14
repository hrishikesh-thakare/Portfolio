"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

const links = [
  { href: "/#work", label: "Experience" },
  { href: "/#projects", label: "Projects" },
  { href: "/#stack", label: "Stack" },
  { href: "/#contact", label: "Hire Me" },
];

export default function NavStatic() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [time, setTime] = useState("");
  const pathname = usePathname();

  useEffect(() => {
    const updateTime = () => {
      const options: Intl.DateTimeFormatOptions = {
        timeZone: "Asia/Kolkata",
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
      };
      const formatter = new Intl.DateTimeFormat("en-US", options);
      setTime(formatter.format(new Date()));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleScroll = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    if (href.startsWith("/#")) {
      const targetId = href.replace("/", ""); // '#projects' or '#contact'
      if (pathname === "/") {
        e.preventDefault();
        if (targetId === "#contact") {
          window.scrollTo({
            top: document.documentElement.scrollHeight,
            behavior: "smooth",
          });
        } else {
          const element = document.querySelector(targetId);
          if (element) {
            element.scrollIntoView({ behavior: "smooth" });
          }
        }
      }
    }
  };

  return (
    <>
      <header
        style={{
          position: "relative",
          zIndex: 100,
          paddingTop: "16px",
          paddingBottom: "16px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          borderBottom: "1px solid var(--border)",
        }}
        className="pg"
      >
        <Link
          href="/"
          className="font-display nav-static__logo"
          style={{
            fontSize: 17,
            fontWeight: 800,
            letterSpacing: "-.02em",
            color: "var(--text)",
            textDecoration: "none",
          }}
        >
          Hrishikesh
        </Link>

        {/* Desktop nav */}
        <nav className="nav-static__links" style={{ display: "flex", gap: 32 }}>
          {links.map((l) => {
            const isActive =
              l.href === "/" ? pathname === "/" : pathname.startsWith(l.href);
            return (
              <Link
                key={l.href}
                href={l.href}
                onClick={(e) => handleScroll(e, l.href)}
                className="nav-static__link"
                style={{
                  fontSize: 12,
                  letterSpacing: ".08em",
                  textTransform: "uppercase",
                  color: isActive ? "var(--text)" : "var(--muted)",
                  textDecoration: "none",
                  transition: "color .1s ease",
                  fontWeight: isActive ? 500 : 300,
                  borderBottom: isActive
                    ? "1px solid var(--accent)"
                    : "1px solid transparent",
                  paddingBottom: 2,
                }}
              >
                {l.label}
              </Link>
            );
          })}
        </nav>

        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          {/* Mumbai Time & Location */}
          <div
            className="nav-static__time"
            style={{
              fontSize: 10,
              letterSpacing: ".08em",
              textTransform: "uppercase",
              color: "var(--muted)",
              display: "flex",
              alignItems: "center",
              gap: 8,
              padding: "6px 0",
            }}
          >
            <span
              style={{
                width: 6,
                height: 6,
                borderRadius: "50%",
                background: "var(--accent)",
                flexShrink: 0,
                boxShadow: "0 0 8px var(--accent)",
                animation: "pulse 2s infinite",
              }}
            />
            <span>Mumbai, India - {time || "--:--"}</span>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Toggle menu"
            style={{
              display: "none",
              background: "none",
              border: "1px solid var(--border)",
              borderRadius: 6,
              padding: "6px 10px",
              color: "var(--muted)",
              cursor: "pointer",
              fontSize: 16,
              lineHeight: 1,
            }}
            className="nav-hamburger"
          >
            {mobileOpen ? "✕" : "☰"}
          </button>
        </div>
      </header>

      {/* Mobile dropdown */}
      {mobileOpen && (
        <nav
          style={{
            position: "relative",
            zIndex: 99,
            background: "var(--surface)",
            borderBottom: "1px solid var(--border)",
            display: "flex",
            flexDirection: "column",
            padding: "16px 20px",
            gap: 4,
          }}
        >
          {links.map((l) => {
            const isActive =
              l.href === "/" ? pathname === "/" : pathname.startsWith(l.href);
            return (
              <Link
                key={l.href}
                href={l.href}
                onClick={(e) => {
                  setMobileOpen(false);
                  handleScroll(e, l.href);
                }}
                style={{
                  fontSize: 13,
                  letterSpacing: ".08em",
                  textTransform: "uppercase",
                  color: isActive ? "var(--accent)" : "var(--muted)",
                  textDecoration: "none",
                  padding: "12px 0",
                  borderBottom: "1px solid var(--border)",
                  transition: "color .2s",
                  fontWeight: isActive ? 500 : 300,
                }}
              >
                {l.label}
              </Link>
            );
          })}
        </nav>
      )}

      <style>{`
        @keyframes pulse {
          0% { transform: scale(0.95); opacity: 0.8; box-shadow: 0 0 0 0 rgba(34, 197, 94, 0.4); }
          70% { transform: scale(1); opacity: 1; box-shadow: 0 0 0 6px rgba(34, 197, 94, 0); }
          100% { transform: scale(0.95); opacity: 0.8; box-shadow: 0 0 0 0 rgba(34, 197, 94, 0); }
        }
        @media (max-width: 768px) {
          .nav-static__links { display: none !important; }
          .nav-hamburger { display: block !important; }
        }
        @media (max-width: 540px) {
          .nav-static__time { display: none !important; }
        }
        @media (max-width: 480px) {
          .nav-static__cta { padding: 6px 12px !important; font-size: 10px !important; letter-spacing: .06em !important; }
        }
      `}</style>
    </>
  );
}
