export default function About() {
  return (
    <section className="section alt" id="about">
      <div className="container">
        <p className="section-label">About</p>
        <h2>Engineering → Design → Frontend.</h2>
        <div className="about-grid">
          <div>
            <p>
              I started in <strong>mechatronics engineering</strong>, spent years
              doing <strong>professional graphic design</strong> — typography,
              layout, brand identities — and moved into{" "}
              <strong>frontend development</strong>, because it's where those
              two worlds meet.
            </p>
            <p>
              My edge is that I designed the Figma file long before I ever
              translated one into code. I care about spacing, hierarchy and
              responsiveness the way a designer does — and I think in
              components and state the way a developer does.
            </p>
            <p>
              Right now I build with React, Vite and Firebase, and I'm
              deepening that practice with every project.
            </p>
          </div>
          <ul className="fact-list">
            <li>
              <span>Frontend</span>
              <span>React · JavaScript · TypeScript · Vite</span>
            </li>
            <li>
              <span>Backend</span>
              <span>Firebase · Node.js · Electron</span>
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
