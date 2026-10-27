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
              SPP operates with transparency, inclusivity, and accountability — ensuring that professional insight informs every aspect of governance.
            </p>
          </div>
          <div className="card">
            <h3>Our Mission</h3>
            <p>
              To bridge the gap between professional expertise and policy-making by providing rigorous, evidence-based input to Sudan&apos;s legislative and governance processes.
            </p>
            <h3 style={{ marginTop: "1.5rem" }}>Our Vision</h3>
            <p>
              A Sudan where every policy is informed by expertise, every law serves the public interest, and every citizen has a voice in their future.
            </p>
          </div>
        </div>
      </section>

      {/* Objectives */}
      <section className="section section-alt" id="objectives">
        <div className="container">
          <h2>Our Objectives</h2>
          <div className="objectives-grid">
            <div className="objective-card">
              <div className="objective-icon">📋</div>
              <h3>Policy Development</h3>
              <p>Draft evidence-based policy proposals across key sectors including health, education, infrastructure, and economic reform.</p>
            </div>
            <div className="objective-card">
              <div className="objective-icon">🤝</div>
              <h3>National Dialogue</h3>
              <p>Facilitate constructive dialogue between professionals, civil society, and government institutions to build national consensus.</p>
            </div>
            <div className="objective-card">
              <div className="objective-icon">📚</div>
              <h3>Capacity Building</h3>
              <p>Train and mentor the next generation of Sudanese professionals and policy analysts through workshops and programs.</p>
            </div>
            <div className="objective-card">
              <div className="objective-icon">⚖️</div>
              <h3>Good Governance</h3>
              <p>Promote transparency, accountability, and the rule of law in all aspects of public administration and governance.</p>
            </div>
            <div className="objective-card">
              <div className="objective-icon">🌱</div>
              <h3>Sustainable Development</h3>
              <p>Advocate for policies that balance economic growth with environmental protection and social equity across all regions.</p>
            </div>
            <div className="objective-card">
              <div className="objective-icon">🌍</div>
              <h3>International Cooperation</h3>
              <p>Build partnerships with professional bodies and parliaments worldwide to share knowledge and best practices.</p>
            </div>
          </div>
        </div>
      </section>

      {/* News */}
      <section className="section" id="news">
        <div className="container">
          <h2>Latest News</h2>
          <div className="news-grid">
            <div className="news-card">
              <div className="news-date">October 2026</div>
              <h3>SPP Launches National Education Policy Framework</h3>
              <p>After months of consultation with educators across all 18 states, SPP has published a comprehensive framework for reforming Sudan&apos;s education system.</p>
              <a href="#contact" style={{ fontWeight: 600, color: "#0d6e3a" }}>Read more →</a>
            </div>
            <div className="news-card">
              <div className="news-date">September 2026</div>
              <h3>Healthcare Access Conference Held in Khartoum</h3>
              <p>SPP brought together medical professionals, policymakers, and international partners to discuss strategies for expanding healthcare access in rural areas.</p>
              <a href="#contact" style={{ fontWeight: 600, color: "#0d6e3a" }}>Read more →</a>
            </div>
            <div className="news-card">
              <div className="news-date">August 2026</div>
              <h3>New Members Welcomed from Five States</h3>
              <p>SPP is proud to welcome 40 new professional members from South Darfur, Red Sea, Gezira, North Kordofan, and River Nile states.</p>
              <a href="#contact" style={{ fontWeight: 600, color: "#0d6e3a" }}>Read more →</a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="section section-alt" id="contact">
        <div className="container two-col">
          <div>
            <h2>Get in Touch</h2>
            <p>
              SPP welcomes inquiries from professionals, civil society organizations, government institutions, and international partners. Together, we can build a better future for Sudan.
            </p>
            <div className="contact-info">
              <div className="contact-item">
                <div className="contact-icon">📍</div>
                <div>
                  <strong>Address</strong>
                  <p>Khartoum, Republic of the Sudan</p>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-icon">✉️</div>
                <div>
                  <strong>Email</strong>
                  <p>info@sudanparliament.is-a.dev</p>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-icon">🌐</div>
                <div>
                  <strong>Website</strong>
                  <p>sudanparliament.is-a.dev</p>
                </div>
              </div>
            </div>
          </div>
          <div className="card">
            <h3>Join SPP</h3>
            <p>
              Are you a Sudanese professional passionate about your country&apos;s future? SPP is always looking for dedicated members who can contribute their expertise to policy development and national dialogue.
            </p>
            <p style={{ marginTop: "1rem" }}>
              Membership is open to professionals from all fields and all states. Contact us to learn more about how you can get involved.
            </p>
            <a href="mailto:info@sudanparliament.is-a.dev" className="btn btn-primary" style={{ marginTop: "1.5rem", display: "inline-block" }}>
              Contact Us
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container footer-inner">
          <div>
            <div className="footer-logo">🇸🇩 Sudanese Professionals Parliament</div>
            <p className="footer-text">Drafting the Future of Sudan</p>
          </div>
          <div className="footer-links">
            <a href="#about">About</a>
            <a href="#objectives">Objectives</a>
            <a href="#news">News</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
        <div className="container footer-bottom">
          <p>© 2026 Sudanese Professionals Parliament (SPP). All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
