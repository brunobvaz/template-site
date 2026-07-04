import heroImage from '../assets/hero.png'

export function FullBleedHeroTemplate() {
  return (
    <section
      className="template-hero template-hero--image"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      <div>
        <p className="template-kicker">Wellness Studio</p>
        <h1>Beauty, wellness, and confidence in one place</h1>
        <p>
          A calm landing-page hero for appointment-led service businesses.
        </p>
        <div className="template-actions">
          <a className="template-action" href="#booking">
            Book now
          </a>
          <a className="template-link" href="#services">
            View services
          </a>
        </div>
      </div>
    </section>
  )
}

export function EditorialHeroTemplate() {
  return (
    <section className="template-hero template-hero--split">
      <div>
        <p className="template-kicker">Launch System</p>
        <h1>Build crisp landing pages from reusable sections</h1>
        <p>
          A split hero designed for SaaS, tools, portfolios, and focused
          product launches.
        </p>
        <a className="template-action template-action--dark" href="#library">
          Browse blocks
        </a>
      </div>
      <div className="template-hero__panel" aria-hidden="true">
        <span>01</span>
        <strong>Hero</strong>
        <small>Header + CTA + trust proof</small>
      </div>
    </section>
  )
}
