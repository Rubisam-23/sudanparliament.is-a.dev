export default function Home() {
  return (
    <div>
      {/* Header */}
      <header className="header">
        <div className="container header-inner">
          <a href="/" className="logo">
            <span className="logo-emblem">🇸🇩</span>
            <div>
              <div className="logo-title">Sudanese Professionals Parliament</div>
              <div className="logo-subtitle">Drafting the Future of Sudan</div>
            </div>
          </a>
          <nav className="nav">
            <a href="#about">About</a>
            <a href="#objectives">Objectives</a>
            <a href="#news">News</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="hero">
        <div className="container">
          <h1>Sudanese Professionals Parliament</h1>
          <p className="hero-lead">
            A unified voice for Sudan&apos;s professionals — drafting policies, shaping governance, and building a democratic future for all Sudanese people.
          </p>
          <div className="hero-actions">
            <a href="#about" className="btn btn-primary">Learn More</a>
            <a href="#contact" className="btn btn-outline">Get Involved</a>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="stats">
        <div className="container stats-grid">
          <div>
            <div className="stat-number">18</div>
            <div className="stat-label">States Represented</div>
          </div>
          <div>
            <div className="stat-number">200+</div>
            <div className="stat-label">Professional Members</div>
          </div>
          <div>
            <div className="stat-number">12</div>
            <div className="stat-label">Policy Committees</div>
          </div>
          <div>
            <div className="stat-number">2019</div>
            <div className="stat-label">Year Founded</div>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="section" id="about">
        <div className="container two-col">
          <div>
            <h2>About SPP</h2>
            <p>
              The Sudanese Professionals Parliament (SPP) is a collective of professionals from diverse fields — medicine, engineering, law, education, agriculture, and more — united by a shared commitment to Sudan&apos;s democratic transition and sustainable development.
            </p>
            <p style={{ marginTop: "1rem" }}>
              We serve as an advisory and policy-drafting body, bringing technical expertise and evidence-based recommendations to the legislative process. Our members volunteer their knowledge to help shape laws and policies that serve all Sudanese citizens.
            </p>
            <p style={{ marginTop: "1rem" }}>
              SPP operates with transparency, inc
