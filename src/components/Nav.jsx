export default function Nav() {
  return (
    <header className="nav">
      <div className="nav-inner">
        <a className="nav-logo" href="#top">
          israel<span>.</span>enweji
        </a>
        <nav className="nav-links">
          <a href="#work">Work</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
          <a
            href="https://github.com/izyworld-a"
            target="_blank"
            rel="noreferrer"
            className="nav-gh"
          >
            github/izyworld-a ↗
          </a>
        </nav>
      </div>
    </header>
  );
}
