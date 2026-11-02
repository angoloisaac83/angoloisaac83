import type { Metadata } from "next";
import { ProjectGrid } from "../components/portfolio";
import { SiteHeader } from "../components/site-header";

export const metadata: Metadata = {
  title: "Projects | Angolo Isaac Jr.",
  description: "Selected web application and software projects by Angolo Isaac Jr.",
};

export default function ProjectsPage() {
  return (
    <>
      <SiteHeader activePage="projects" />
      <main className="page-shell inner-page">
        <header className="page-intro">
          <span className="eyebrow">MY WORK</span>
          <h1>Featured <span>Projects</span></h1>
          <p>
            A selection of applications I&apos;ve designed and built, from
            collaborative tools to full-stack products.
          </p>
        </header>
        <ProjectGrid />
        <section className="contact-banner">
          <div className="contact-icon" aria-hidden="true">✉</div>
          <div className="contact-copy">
            <h2>Have a project in mind?</h2>
            <p>Let&apos;s talk about what we can build together.</p>
          </div>
          <a className="button button-primary" href="mailto:">Get in touch <span aria-hidden="true">→</span></a>
        </section>
      </main>
    </>
  );
}
