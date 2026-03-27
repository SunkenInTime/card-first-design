import VariantSwitcher from "./VariantSwitcher";

const workflow = [
  {
    step: "Capture",
    title: "Drop anything in",
    body: "Text, voice memos, screenshots, links, and half-finished thoughts all become structured memory cards.",
  },
  {
    step: "Connect",
    title: "Let the brain build context",
    body: "Auto-linked cards connect notes by people, themes, projects, and timing so ideas stop living in isolation.",
  },
  {
    step: "Recall",
    title: "Ask and retrieve instantly",
    body: "Semantic recall cards surface the exact insight you forgot, plus the trail that explains why it matters.",
  },
  {
    step: "Act",
    title: "Turn memory into momentum",
    body: "Decision cards, writing cards, and daily brief cards transform knowledge into output without tab chaos.",
  },
];

const testimonials = [
  {
    quote: "It feels like my notes finally have posture. Everything important comes back when I need it.",
    name: "Mina",
    role: "Product Designer",
  },
  {
    quote: "The card system makes messy research feel premium, navigable, and strangely calm.",
    name: "Rohan",
    role: "Founder",
  },
  {
    quote: "I write faster because the context is already waiting for me instead of hiding in ten tools.",
    name: "Elena",
    role: "Writer",
  },
];

export default function LandingPage({ variant }) {
  return (
    <div className={`page-shell ${variant.themeClass}`}>
      <VariantSwitcher />

      <main className="landing">
        <section className="hero">
          <div className="hero__copy card card--xl">
            <span className="eyebrow">
              {variant.eyebrow}
              <strong>{variant.title}</strong>
            </span>
            <h1>{variant.heroTitle}</h1>
            <p>{variant.heroBody}</p>

            <div className="hero__actions">
              <a className="button button--primary" href="#cta">
                {variant.primaryCta}
              </a>
              <a className="button button--ghost" href="#details">
                {variant.secondaryCta}
              </a>
            </div>
          </div>

          <div className="hero__stack">
            {variant.heroCards.map((card, index) => (
              <article
                className={`card feature-card feature-card--${index + 1}`}
                key={card.title}
              >
                <span className="card__kicker">{card.kicker}</span>
                <h2>{card.title}</h2>
              </article>
            ))}
          </div>
        </section>

        <section className="metrics">
          {variant.metrics.map((metric) => (
            <article className="card metric-card" key={metric.label}>
              <strong>{metric.value}</strong>
              <span>{metric.label}</span>
            </article>
          ))}
        </section>

        <section className="details-grid" id="details">
          <article className="card card--section">
            <span className="section-tag">Why it lands</span>
            <h3>The landing page treats every promise like a tangible object.</h3>
            <p>
              Instead of flat marketing sections, each capability lives inside a
              distinct surface so the product feels premium, organized, and memorable
              before a user ever signs in.
            </p>
          </article>

          <article className="card card--section card--tall">
            <span className="section-tag">Core features</span>
            <div className="feature-list">
              {variant.features.map((feature) => (
                <div className="mini-card" key={feature}>
                  {feature}
                </div>
              ))}
            </div>
          </article>
        </section>

        <section className="workflow">
          {workflow.map((item) => (
            <article className="card workflow-card" key={item.step}>
              <span className="card__kicker">{item.step}</span>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </article>
          ))}
        </section>

        <section className="testimonials">
          {testimonials.map((item) => (
            <article className="card quote-card" key={item.name}>
              <p>"{item.quote}"</p>
              <strong>{item.name}</strong>
              <span>{item.role}</span>
            </article>
          ))}
        </section>

        <section className="cta" id="cta">
          <div className="card card--cta">
            <span className="section-tag">Second brain, first choice</span>
            <h2>Capture everything once. Find it when it matters.</h2>
            <p>
              Five visual directions, one clear product story: your notes should
              think back with you, not just sit in storage.
            </p>
            <div className="hero__actions">
              <a className="button button--primary" href={`/${variant.slug}`}>
                Stay on this concept
              </a>
              <a className="button button--ghost" href="/one">
                Reset to concept one
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
