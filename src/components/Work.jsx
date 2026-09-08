const projects = [
  {
    featured: true,
    title: "TEC — Weekly Accountability Platform",
    badge: "Live · Full-stack",
    flow: ["React + Vite SPA", "Firebase Functions", "WhatsApp Cloud API", "Gemini", "Firestore"],
    description:
      "A full-stack team platform, built end to end: weekly goal tracking, live activity feed, and role-based dashboards for members, moderators and admins. The automation layer sends reminders and announcements over WhatsApp, with an AI Q&A engine on Google Gemini answering members directly — Cloud Functions on the backend, Firestore for data, deployed on Firebase Hosting.",
    tags: [
      "React",
      "Vite",
      "TypeScript",
      "Firebase",
      "Cloud Functions",
      "Firestore",
      "Node.js",
      "WhatsApp Cloud API",
      "Gemini",
    ],
    links: [
      { label: "live demo ↗", url: "https://tec-weekly-goals.web.app" },
      {
        label: "view code ↗",
        url: "https://github.com/izyworld-a/TEC_WEBSITE",
      },
    ],
  },
  {
    title: "Book Inventory App",
    badge: "freeCodeCamp",
    flow: ["HTML5", "CSS3"],
    description:
      "Responsive book inventory interface from the freeCodeCamp Responsive Web Design certification.",
    tags: ["HTML5", "CSS3", "Responsive"],
    links: [
      {
        label: "view code ↗",
        url: "https://github.com/izyworld-a/Book-Inventory-App",
      },
    ],
  },
  {
    title: "Playing Cards",
    badge: "freeCodeCamp",
    flow: ["HTML5", "CSS3"],
    description:
      "A playing cards page from the same certification — semantic HTML and precise CSS layout.",
    tags: ["HTML5", "CSS3"],
    links: [
      {
        label: "view code ↗",
        url: "https://github.com/izyworld-a/Playing-Cards",
      },
    ],
  },
];

function Flow({ steps }) {
  return (
    <div className="flow" aria-label="Architecture flow">
      {steps.map((s, i) => (
        <span key={s}>
          {i > 0 && <span className="arrow"> → </span>}
          <b>{s}</b>
        </span>
      ))}
    </div>
  );
}

function Card({ project }) {
  return (
    <article className="work-card reveal">
      <span className="work-badge">{project.badge}</span>
      <h3>{project.title}</h3>
      <Flow steps={project.flow} />
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
    </article>
  );
}

export default function Work() {
  return (
    <section className="section" id="work">
      <div className="container">
        <p className="section-label reveal">selected work</p>
        <h2 className="reveal">Designed and built. Shipped and running.</h2>
        <div className="work-grid">
          {projects.map((p) => (
            <Card key={p.title} project={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
