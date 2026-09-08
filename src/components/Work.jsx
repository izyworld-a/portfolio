const projects = [
  {
    featured: true,
    title: "TEC — Weekly Accountability Platform",
    badge: "Live · Full-stack",
    description:
      "A full-stack team platform: weekly goal tracking, live activity feed, role-based dashboards for members, moderators and admins — plus a WhatsApp automation layer with an AI Q&A engine built on Google Gemini, so reminders and announcements go out without anyone lifting a finger.",
    tags: [
      "React",
      "Vite",
      "TypeScript",
      "Firebase",
      "Firestore",
      "Node.js",
      "WhatsApp Cloud API",
      "Gemini",
    ],
    links: [
      { label: "Live demo ↗", url: "https://tec-weekly-goals.web.app" },
      {
        label: "View code ↗",
        url: "https://github.com/izyworld-a/TEC_WEBSITE",
      },
    ],
  },
  {
    title: "Book Inventory App",
    badge: "Certification project",
    description:
      "Responsive book inventory interface from the freeCodeCamp Responsive Web Design certification.",
    tags: ["HTML5", "CSS3", "Responsive Design"],
    links: [
      {
        label: "View code ↗",
        url: "https://github.com/izyworld-a/Book-Inventory-App",
      },
    ],
  },
  {
    title: "Playing Cards",
    badge: "Certification project",
    description:
      "A playing cards page from the same freeCodeCamp certification — semantic HTML and precise CSS layout.",
    tags: ["HTML5", "CSS3"],
    links: [
      {
        label: "View code ↗",
        url: "https://github.com/izyworld-a/Playing-Cards",
      },
    ],
  },
];

function Card({ project }) {
  return (
    <article className={project.featured ? "work-card featured" : "work-card"}>
      <div>
        <span className="work-badge">{project.badge}</span>
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <div className="work-tags">
          {project.tags.map((t) => (
            <span className="tag" key={t}>
              {t}
            </span>
          ))}
        </div>
        <div className="work-links">
          {project.links.map((l) => (
            <a key={l.url} href={l.url} target="_blank" rel="noreferrer">
              {l.label}
            </a>
          ))}
        </div>
      </div>
      {project.featured && (
        <div className="work-visual">
          <span>TEC</span>
        </div>
      )}
    </article>
  );
}

export default function Work() {
  return (
    <section className="section" id="work">
      <div className="container">
        <p className="section-label">Selected work</p>
        <h2>Things I've designed and built.</h2>
        <div className="work-grid">
          {projects.map((p) => (
            <Card key={p.title} project={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
