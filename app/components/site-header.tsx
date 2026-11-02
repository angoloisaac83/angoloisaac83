"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

type SitePage = "home" | "projects" | "skills" | "about";

const links: { label: string; href: string; page: SitePage }[] = [
  { label: "Home", href: "/", page: "home" },
  { label: "Projects", href: "/projects", page: "projects" },
  { label: "Skills", href: "/skills", page: "skills" },
  { label: "About", href: "/about", page: "about" },
];

export function SiteHeader({ activePage }: { activePage: SitePage }) {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (!menuOpen) return;

    function closeOnEscape(event: KeyboardEvent) {
      if (event.key === "Escape") setMenuOpen(false);
    }

    document.addEventListener("keydown", closeOnEscape);
    return () => document.removeEventListener("keydown", closeOnEscape);
  }, [menuOpen]);

  return (
    <header className="site-header">
      <nav className="nav-shell" aria-label="Main navigation">
        <Link className="brand" href="/">
          <span>&lt;/&gt;</span> Angolo.dev
        </Link>
        <div className={`nav-links${menuOpen ? " menu-open" : ""}`} id="primary-navigation">
          <p className="mobile-menu-heading">Navigate</p>
          {links.map(({ label, href, page }, index) => (
            <Link
              aria-current={page === activePage ? "page" : undefined}
              className={page === activePage ? "active" : undefined}
              href={href}
              key={page}
              onClick={() => setMenuOpen(false)}
            >
              <span className="mobile-link-number">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span>{label}</span>
            </Link>
          ))}
          <div className="mobile-menu-footer">
            <span>ANGOLO.DEV</span>
            <span>Full-stack developer · Nigeria</span>
          </div>
          <a
            className="mobile-menu-cta button button-primary"
            href="mailto:"
            onClick={() => setMenuOpen(false)}
          >
            Contact Me <span aria-hidden="true">↗</span>
          </a>
        </div>
        <div className="nav-actions">
          <a
            className="button button-outline button-small"
            href="/Angolo_Isaac_Jr_CV.pdf"
            rel="noreferrer"
            target="_blank"
          >
            View CV
          </a>
          <a className="button button-primary button-small" href="mailto:">
            Contact Me
          </a>
        </div>
        <button
          aria-controls="primary-navigation"
          aria-expanded={menuOpen}
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          className={`menu-toggle${menuOpen ? " menu-toggle-open" : ""}`}
          onClick={() => setMenuOpen((isOpen) => !isOpen)}
          type="button"
        >
          <span />
          <span />
          <span />
        </button>
      </nav>
      {menuOpen && (
        <button
          aria-label="Close navigation menu"
          className="menu-backdrop"
          onClick={() => setMenuOpen(false)}
          tabIndex={-1}
          type="button"
        />
      )}
    </header>
  );
}
