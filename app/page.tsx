import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { ProjectGrid, SkillsGrid } from "./components/portfolio";
import { SiteHeader } from "./components/site-header";

type IconName = "calendar" | "download" | "graduation" | "mail" | "pin" | "terminal" | "arrow";

function Icon({ name }: { name: IconName }) {
  const paths: Record<IconName, ReactNode> = {
    arrow: (
      <>
        <path d="M5 12h14" />
        <path d="m13 6 6 6-6 6" />
      </>
    ),
    calendar: (
      <>
        <rect x="3" y="5" width="18" height="16" rx="2" />
        <path d="M16 3v4M8 3v4M3 11h18" />
      </>
    ),
    download: (
      <>
        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
        <path d="m7 10 5 5 5-5M12 15V3" />
      </>
    ),
    graduation: (
      <>
        <path d="m2 10 10-5 10 5-10 5-10-5Z" />
        <path d="M6 12v5c3.5 3 8.5 3 12 0v-5M22 10v6" />
      </>
    ),
    mail: (
      <>
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="m3 7 9 6 9-6" />
      </>
    ),
    pin: (
      <>
        <path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z" />
        <circle cx="12" cy="10" r="2.5" />
      </>
    ),
    terminal: (
      <>
        <path d="m4 7 5 5-5 5M12 17h8" />
      </>
    ),
  };

  return (
    <svg
      aria-hidden="true"
      className="icon"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {paths[name]}
    </svg>
  );
}

const stack = ["React", "Next.js", "TypeScript", "Node.js", "Express", "Tailwind CSS", "Firebase", "MySQL"];
const stackMarks = ["⚛", "N", "TS", "⬡", "EX", "≋", "▲", "〽"];

export default function Home() {
  return (
    <>
      <SiteHeader activePage="home" />
      <main className="page-shell" id="home">
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero-copy">
            <span className="availability"><i /> Available for Remote Work</span>
            <h1 id="hero-title">Hi, I&apos;m <span>Angolo Isaac Jr.</span></h1>
            <h2>Full-Stack Developer</h2>
            <p>
              I build modern, scalable web applications with great user
              experiences, from responsive interfaces to robust backend systems
              and API integrations.
            </p>
            <div className="hero-actions">
              <Link className="button button-primary" href="/projects">
                <Icon name="terminal" /> View Projects <Icon name="arrow" />
              </Link>
              <a className="button button-outline" href="mailto:">
                <Icon name="download" /> Download CV
              </a>
            </div>
            <div className="quick-facts">
              <div><Icon name="calendar" /><span><b>3+ Years</b><small>Coding Experience</small></span></div>
              <div><Icon name="graduation" /><span><b>B.Sc. Computer Science</b><small>Niger Delta University</small></span></div>
              <div><Icon name="pin" /><span><b>Nigeria</b><small>Open to Remote</small></span></div>
            </div>
          </div>
          <div className="hero-visual" aria-label="Portrait of Angolo Isaac Jr.">
            <div className="portrait-backdrop" />
            <Image className="portrait" src="/angolo-portrait.jpg" alt="Angolo Isaac Jr." width={155} height={236} priority />
            <span className="floating-badge badge-react">⚛</span>
            <span className="floating-badge badge-js">JS</span>
            <span className="floating-badge badge-ts">TS</span>
            <span className="floating-badge badge-next">N</span>
            <span className="floating-badge badge-node">
              <span className="node-badge-mark" aria-hidden="true">⬡</span>
              <span>Node.js</span>
            </span>
            <span className="floating-badge badge-github">●</span>
          </div>
        </section>

        <section className="stack-strip" aria-label="Technology stack">
          <strong>Tech<br />Stack</strong>
          <div className="stack-items">
            {stack.map((item, index) => (
              <span className="stack-item" key={item}>
                <i className={`stack-logo stack-logo-${index}`}>{stackMarks[index]}</i>
                {item}
              </span>
            ))}
          </div>
        </section>

        <section className="projects-section" aria-labelledby="projects-title">
          <div className="section-heading">
            <h2 id="projects-title">Featured Projects</h2>
            <Link href="/projects">View All Projects <Icon name="arrow" /></Link>
          </div>
          <ProjectGrid compact />
        </section>

        <section className="about-skills">
          <div className="about-copy">
            <h2>About Me</h2>
            <p>
              I&apos;m a Full-Stack Developer with 3+ years of hands-on
              experience building web applications, backend APIs, and
              automation tools. I enjoy turning ideas into practical,
              user-friendly products that solve real-world problems.
            </p>
            <Link className="button button-outline button-more" href="/about">
              More About Me <Icon name="arrow" />
            </Link>
          </div>
          <div className="skills-panel">
            <div className="section-heading">
              <h2>Core Skills</h2>
              <Link href="/skills">View All <Icon name="arrow" /></Link>
            </div>
            <SkillsGrid />
          </div>
        </section>

        <section className="contact-banner" id="contact">
          <div className="contact-icon"><Icon name="mail" /></div>
          <div className="contact-copy">
            <h2>Let&apos;s Build Something Together</h2>
            <p>Have a project in mind or a remote opportunity? I&apos;d love to hear from you.</p>
          </div>
          <a className="button button-primary" href="mailto:">
            Contact Me <Icon name="arrow" />
          </a>
        </section>
      </main>
    </>
  );
}
