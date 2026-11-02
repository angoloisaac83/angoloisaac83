const projects = [
  {
    name: "TaskFlow",
    description:
      "A task management app with team collaboration, authentication, and real-time updates.",
    tags: ["Next.js", "Node.js", "MySQL"],
    preview: "taskflow",
  },
  {
    name: "DevStore",
    description:
      "A modern e-commerce platform with cart, secure payments, and order management.",
    tags: ["React", "Express", "MongoDB"],
    preview: "devstore",
  },
  {
    name: "ChatBridge",
    description:
      "A real-time chat application with user authentication and file sharing.",
    tags: ["Next.js", "Socket.io", "Firebase"],
    preview: "chatbridge",
  },
];

export const skills = [
  { label: "React", mark: "⚛", className: "react-mark" },
  { label: "Next.js", mark: "N", className: "next-mark" },
  { label: "TypeScript", mark: "TS", className: "ts-mark" },
  { label: "Node.js", mark: "⬡", className: "node-mark" },
  { label: "Tailwind CSS", mark: "≋", className: "tailwind-mark" },
  { label: "Firebase", mark: "▲", className: "firebase-mark" },
  { label: "MySQL", mark: "〽", className: "mysql-mark" },
  { label: "Git & GitHub", mark: "●", className: "github-mark" },
];

export function ProjectPreview({ type }: { type: string }) {
  if (type === "devstore") {
    return (
      <div className="project-preview store-preview" aria-hidden="true">
        <div className="store-top">
          <strong>DevStore</strong>
          <span>Home　 Shop　 Orders</span>
          <span className="store-avatar">A</span>
        </div>
        <div className="store-content">
          <div className="store-copy">
            <small>NEW COLLECTION</small>
            <b>
              Modern
              <br />
              E-commerce
              <br />
              Experience
            </b>
            <span>Discover quality products made for you.</span>
            <i>Explore collection　→</i>
          </div>
          <div className="product-card">
            <span className="headphones">◉</span>
            <small>Studio Headphones</small>
            <b>$129.00</b>
            <span className="product-button">Add to Cart</span>
          </div>
        </div>
      </div>
    );
  }

  if (type === "chatbridge") {
    return (
      <div className="project-preview chat-preview" aria-hidden="true">
        <aside className="chat-sidebar">
          <b>
            <span>◉</span> ChatBridge
          </b>
          <small>◉　 Chats</small>
          <small>♧　 Groups</small>
          <small>♧　 Contacts</small>
          <small>⚙　 Settings</small>
        </aside>
        <div className="chat-window">
          <div className="chat-heading">
            <b>Development Team</b>
            <small>5 members</small>
          </div>
          <div className="chat-bubble">
            The new update is ready! <small>10:42 AM</small>
          </div>
          <div className="chat-reply">
            Great! Let&apos;s deploy it. <small>10:43 AM</small>
          </div>
          <div className="chat-input">
            Message your team... <span>➤</span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="project-preview task-preview" aria-hidden="true">
      <aside className="task-sidebar">
        <b>
          <span>◉</span> TaskFlow
        </b>
        <small className="selected">▣　 Dashboard</small>
        <small>◷　 Tasks</small>
        <small>♧　 Team</small>
        <small>▤　 Analytics</small>
        <small>⚙　 Settings</small>
      </aside>
      <div className="task-board">
        <div className="task-topline">
          <span>Recent</span>
          <span className="task-share">◉ Share</span>
        </div>
        <b>Good morning, Isaac 👋</b>
        <small>Here&apos;s what&apos;s happening with your team.</small>
        <div className="task-stats">
          <span>
            <b>24</b>
            <small>Total Tasks</small>
          </span>
          <span>
            <b>16</b>
            <small>In Progress</small>
          </span>
          <span>
            <b>8</b>
            <small>Completed</small>
          </span>
        </div>
        <div className="task-chart">
          <i />
          <i />
          <i />
          <i />
          <i />
          <i />
          <i />
          <i />
        </div>
      </div>
    </div>
  );
}

export function ProjectGrid({ compact = false }: { compact?: boolean }) {
  return (
    <div className={`project-grid${compact ? " project-grid-compact" : ""}`}>
      {projects.map((project) => (
        <article className="project-card" key={project.name}>
          <ProjectPreview type={project.preview} />
          <div className="project-info">
            <h3>{project.name}</h3>
            <p>{project.description}</p>
            <div className="project-tags">
              {project.tags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}

export function SkillsGrid() {
  return (
    <div className="skills-grid">
      {skills.map((skill) => (
        <div className="skill-tile" key={skill.label}>
          <span className={`skill-mark ${skill.className}`}>{skill.mark}</span>
          <span>{skill.label}</span>
        </div>
      ))}
    </div>
  );
}
