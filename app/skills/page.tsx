import type { Metadata } from "next";
import Link from "next/link";
import { SkillsGrid } from "../components/portfolio";
import { SiteHeader } from "../components/site-header";

export const metadata: Metadata = {
  title: "Skills | Angolo Isaac Jr.",
  description: "Technologies and tools Angolo Isaac Jr. uses to build web applications.",
};

export default function SkillsPage() {
  return (
    <>
      <SiteHeader activePage="skills" />
      <main className="page-shell inner-page">
        <header className="page-intro">
          <span className="eyebrow">WHAT I WORK WITH</span>
          <h1>Core <span>Skills</span></h1>
          <p>
            The technologies I use to build responsive interfaces, dependable
            backends, and polished end-to-end experiences.
          </p>
        </header>
        <section className="skills-page-panel" aria-label="Skills and technologies">
          <SkillsGrid />
        </section>
        <section className="skills-details">
          <article>
            <span className="detail-number">01</span>
            <h2>Frontend</h2>
            <p>React, Next.js, TypeScript, and Tailwind CSS for accessible, responsive user interfaces.</p>
          </article>
          <article>
            <span className="detail-number">02</span>
            <h2>Backend</h2>
            <p>Node.js and Express for APIs, application logic, authentication, and integrations.</p>
          </article>
          <article>
            <span className="detail-number">03</span>
            <h2>Data &amp; Tools</h2>
            <p>MySQL and Firebase for data, plus Git and GitHub for collaboration and version control.</p>
          </article>
        </section>
        <Link className="button button-outline button-more" href="/projects">
          See my projects <span aria-hidden="true">→</span>
        </Link>
      </main>
    </>
  );
}
