import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SiteHeader } from "../components/site-header";

export const metadata: Metadata = {
  title: "About | Angolo Isaac Jr.",
  description: "Learn about Angolo Isaac Jr., a full-stack developer based in Nigeria.",
};

export default function AboutPage() {
  return (
    <>
      <SiteHeader activePage="about" />
      <main className="page-shell inner-page">
        <header className="page-intro">
          <span className="eyebrow">A LITTLE ABOUT ME</span>
          <h1>Building useful things <span>for the web.</span></h1>
          <p>Full-stack developer, problem solver, and lifelong learner based in Nigeria.</p>
        </header>
        <section className="about-page-card">
          <div className="about-page-image">
            <Image src="/angolo-portrait.jpg" alt="Portrait of Angolo Isaac Jr." width={310} height={471} loading="eager" />
          </div>
          <div className="about-page-copy">
            <span className="availability"><i /> Available for Remote Work</span>
            <h2>Hi, I&apos;m Angolo Isaac Jr.</h2>
            <p>
              I&apos;m a Full-Stack Developer with over three years of hands-on
              experience building web applications, backend APIs, and
              automation tools. I enjoy turning ideas into practical,
              user-friendly products that solve real-world problems.
            </p>
            <p>
              With a B.Sc. in Computer Science from Niger Delta University, I
              bring both technical foundations and a thoughtful approach to
              shipping reliable, accessible experiences. I&apos;m open to
              remote opportunities and collaborating with teams around the world.
            </p>
            <div className="about-facts">
              <div><b>3+ Years</b><span>Development experience</span></div>
              <div><b>Nigeria</b><span>Open to remote work</span></div>
              <div><b>B.Sc. Computer Science</b><span>Niger Delta University</span></div>
            </div>
            <div className="hero-actions">
              <Link className="button button-primary" href="/projects">Explore my work <span aria-hidden="true">→</span></Link>
              <a className="button button-outline" href="mailto:">Get in touch</a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
