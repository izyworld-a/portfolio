export default function About() {
  return (
    <section className="section alt" id="about">
      <div className="container">
        <p className="section-label">About</p>
        <h2>Engineering → Design → Building.</h2>
        <div className="about-grid">
          <div>
            <p>
              I studied <strong>mechatronics engineering</strong>, then spent
              years as a <strong>graphic designer</strong> — typography,
              layout, brand work. Frontend development is where those two
              roads meet, so that's where I set up camp.
            </p>
            <p>
              I designed Figma files long before I ever translated one into
              code. So I care about spacing and hierarchy the way a designer
              does — and I think in components and state the way a developer
              does.
            </p>
            <p>
              These days I build the whole thing: React on the front,
              Node.js Cloud Functions behind, Firestore underneath, and
              whatever API the job calls for.
            </p>
          </div>
          <ul className="fact-list">
            <li>
              <span>Frontend</span>
              <span>React · TypeScript · JavaScript · Vite</span>
            </li>
            <li>
              <span>Backend</span>
              <span>Firebase · Cloud Functions · Node.js</span>
            </li>
            <li>
              <span>Also builds with</span>
              <span>Electron · PWA · REST APIs</span>
            </li>
            <li>
              <span>Design</span>
              <span>Figma · CorelDRAW · Photoshop</span>
            </li>
            <li>
              <span>Education</span>
              <span>B.Eng, Mechatronics Engineering</span>
            </li>
            <li>
              <span>Certification</span>
              <span>freeCodeCamp — Responsive Web Design</span>
            </li>
            <li>
              <span>Based in</span>
              <span>Enugu, Nigeria</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
