import { useEffect } from "react";

export default function Hero() {
  useEffect(() => {
    // no animation libraries — one observer for the panel entrance
    const el = document.querySelector(".code-panel");
    if (!el) return;
    el.animate(
      [
        { opacity: 0, transform: "translateY(14px)" },
        { opacity: 1, transform: "none" },
      ],
      { duration: 600, delay: 250, easing: "ease-out", fill: "both" }
    );
  }, []);

  return (
    <section className="hero" id="top">
      <div>
        <p className="hero-kicker">Frontend Developer &amp; UI Designer</p>
        <h1>
          Designer's eye. <em>Builder's hands.</em>
        </h1>
        <p>
          I design interfaces, then build them myself — front, back, and
          the WhatsApp bot in between. That's real code up there, from a
          product my team uses every week.
        </p>
        <div className="hero-actions">
          <a className="btn btn-primary" href="#work">
            View my work
          </a>
          <a
            className="btn btn-ghost"
            href="https://github.com/izyworld-a"
            target="_blank"
            rel="noreferrer"
          >
            GitHub ↗
          </a>
        </div>
      </div>

      <div className="code-panel" aria-label="Real code from my TEC project">
        <div className="code-panel-bar">
          <span className="code-dot r" />
          <span className="code-dot y" />
          <span className="code-dot g" />
          <span className="code-file">geminiEngine.js — from my live project</span>
        </div>
        <pre>
          <code>
            <span className="c-com">{"// TEC — WhatsApp AI Q&A (abridged)"}</span>
            {"\n"}
            <span className="c-key">const</span> MASTER_SYSTEM_INSTRUCTION ={" "}
            <span className="c-str">`You are the Execution Circle
{"\n"}Facilitator for TEC Weekly. Your persona is
{"\n"}disciplined, high-agency, direct…`</span>;
            {"\n\n"}
            <span className="c-key">async function</span>{" "}
            <span className="c-fn">getUserProfile</span>(userId) {"{"}
            {"\n  "}
            <span className="c-key">const</span> db = admin.firestore();
            {"\n  "}
            <span className="c-key">const</span> snap ={" "}
            <span className="c-key">await</span> db.collection(
            <span className="c-str">'users'</span>).doc(userId).get();
            {"\n  "}
            <span className="c-key">if</span> (snap.exists){" "}
            <span className="c-key">return</span> {"{"} id: snap.id,
            ...snap.data() {"}"};
            {"\n  "}
            <span className="c-com">{"// …falls back to phone-number lookup"}</span>
            {"\n"}
            {"}"}
          </code>
        </pre>
        <a
          className="code-src"
          href="https://github.com/izyworld-a/TEC_WEBSITE/blob/main/functions/services/geminiEngine.js"
          target="_blank"
          rel="noreferrer"
        >
          full source on github ↗
        </a>
      </div>
    </section>
  );
}
