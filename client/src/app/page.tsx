import MotionEffects from "../components/MotionEffects"

const whatsappNumber = "YOUR_WHATSAPP_NUMBER"
const whatsappMessage =
  "Hi MNM Apparel HQ, I want to initialize my free 3D mockup."

const whatsappHref = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
  whatsappMessage
)}`

function HeroSection() {
  return (
    <section
      className="section section-hero"
      aria-labelledby="hero-title"
      data-chapter="01"
      data-title="SYSTEM_INITIALIZE"
    >
      <div className="section-inner">
        <div className="chapter-meta">
          <div className="meta-block">
            <span className="meta-label">[ STATUS: ACTIVE ]</span>
            <span className="meta-label">[ CATEGORY: PREMIUM SUBLIMATION ]</span>
          </div>
          <div className="spec-grid">
            <div className="spec-item">
              <span className="spec-label">[ MOQ ]</span>
              <span className="spec-value">10 PCS (LOW VOLUME ACCESSIBLE)</span>
            </div>
            <div className="spec-item">
              <span className="spec-label">[ DESIGN ]</span>
              <span className="spec-value">UNLIMITED REVISIONS + FULL SUBLIMATION</span>
            </div>
            <div className="spec-item">
              <span className="spec-label">[ PRICE ]</span>
              <span className="spec-value">FACTORY-DIRECT (NO AGENT MARKUPS)</span>
            </div>
            <div className="spec-item">
              <span className="spec-label">[ LEAD TIME ]</span>
              <span className="spec-value">7-10 WORKING DAYS</span>
            </div>
          </div>
        </div>
        <div className="chapter-content">
          <p className="eyebrow">[ 01 ] SYSTEM: THE HERO INTERFACE</p>
          <h1 id="hero-title" className="js-scramble reveal-text">
            UNLIMITED DESIGN. FACTORY PRECISION. ZERO REPUTATION RISK.
          </h1>
          <p className="lead js-hero-sub">
            Stop gambling with middleman suppliers. You provide the vision (even a
            scribble); we provide the professional 3D Mockup and factory-direct
            production. Designed for Batch Leaders who cannot afford to fail.
          </p>
          <a className="cta-button js-cta" href={whatsappHref}>
            <span className="cta-text">&gt; INITIALIZE FREE 3D MOCKUP</span>
            <span className="cta-text alt">&gt; DIRECT TO WHATSAPP</span>
          </a>
          <p className="cta-note">(DIRECT TO WHATSAPP)</p>
        </div>
      </div>
    </section>
  )
}

function ProblemSection() {
  return (
    <section
      className="section section-problem"
      aria-labelledby="problem-title"
      data-chapter="02"
      data-title="PROBLEM_DIAGNOSIS"
    >
      <div className="section-inner">
        <div className="chapter-meta">
          <p className="eyebrow">[ 02 ] THE PROBLEM: THE BATCH LEADER’S ANXIETY</p>
          <div className="alert-block">
            <span className="meta-label">[ ERROR CODE: LOW-QUALITY-JERSEY ]</span>
          </div>
        </div>
        <div className="chapter-content">
          <h2 id="problem-title" className="js-scramble reveal-text">
            Expectation vs. Reality is a reputation risk.
          </h2>
          <p className="lead">
            Collecting money from 50 people is hard. Delivering a &quot;low-quality&quot; or
            &quot;ugly&quot; jersey is worse. Most Batch Leaders are terrified of the
            &quot;expectation vs. reality&quot; gap. You aren&apos;t just buying shirts; you are
            buying the trust of your team. MNM HQ is the insurance policy for your
            reputation.
          </p>
        </div>
      </div>
    </section>
  )
}

function FactorySection() {
  return (
    <section
      className="section section-factory"
      aria-labelledby="factory-title"
      data-chapter="03"
      data-title="HARDWARE_SPECS"
    >
      <div className="section-inner">
        <div className="chapter-meta">
          <p className="eyebrow">[ 03 ] THE FACTORY: HARDWARE &amp; SPECS</p>
          <span className="meta-label">[ MODULE: PRODUCTION FACILITY ]</span>
        </div>
        <div className="chapter-content">
          <h2 id="factory-title" className="js-scramble reveal-text">
            We don&apos;t outsource. Every stitch is monitored in our own facility.
          </h2>
          <div className="data-list">
            <div className="data-item">
              <span className="data-label">Precision Sublimation</span>
              <span className="data-value">Anti-fade Italian ink technology.</span>
            </div>
            <div className="data-item">
              <span className="data-label">Advanced Fabrics</span>
              <span className="data-value">High-performance Microfiber Eyelet &amp; Interlock.</span>
            </div>
            <div className="data-item">
              <span className="data-label">The &quot;Manual&quot; Finish</span>
              <span className="data-value">Reinforced stitching for high-contact sports and long-term durability.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function ProcessSection() {
  return (
    <section
      className="section section-process"
      aria-labelledby="process-title"
      data-chapter="04"
      data-title="PROCESS_MANUAL"
    >
      <div className="section-inner">
        <div className="chapter-meta">
          <p className="eyebrow">[ 04 ] THE PROCESS: 1-2-3 MANUAL</p>
          <span className="meta-label">[ SEQUENCE: INITIALIZATION TO DELIVERY ]</span>
        </div>
        <div className="chapter-content">
          <h2 id="process-title" className="js-scramble reveal-text">
            Initialization protocol.
          </h2>
          <ol className="step-list">
            <li>
              <span className="step-index">01</span>
              <div>
                <h3>INPUT</h3>
                <p>Send us your idea via WhatsApp. A sketch, a photo, or just a description.</p>
              </div>
            </li>
            <li>
              <span className="step-index">02</span>
              <div>
                <h3>PROCESS</h3>
                <p>
                  Our pro designers generate a high-fidelity 3D Mockup for your approval.
                  Unlimited tweaks until it&apos;s perfect.
                </p>
              </div>
            </li>
            <li>
              <span className="step-index">03</span>
              <div>
                <h3>OUTPUT</h3>
                <p>
                  Production begins immediately. Your high-quality jerseys are shipped
                  factory-direct to your doorstep.
                </p>
              </div>
            </li>
          </ol>
        </div>
      </div>
    </section>
  )
}

function ArchiveSection() {
  return (
    <section
      className="section section-archive"
      aria-labelledby="archive-title"
      data-chapter="05"
      data-title="ARCHIVE_DATABASE"
    >
      <div className="section-inner">
        <div className="chapter-meta">
          <p className="eyebrow">[ 05 ] THE ARCHIVE: SOCIAL PROOF</p>
          <span className="meta-label">[ DATABASE: COMPLETED BATCHES ]</span>
        </div>
        <div className="chapter-content">
          <h2 id="archive-title" className="js-scramble reveal-text">
            Verified batches across multiple industries.
          </h2>
          <div className="archive-grid">
            <div className="archive-card">[ SERIES A ] : MRSM / SBP / UNIVERSITY BATCHES</div>
            <div className="archive-card">[ SERIES B ] : MOTORSPORT &amp; BIKER CLUBS</div>
            <div className="archive-card">[ SERIES C ] : HARI KELUARGA &amp; CORPORATE EVENTS</div>
            <div className="archive-card">[ SERIES D ] : PRO GAMING &amp; ESPORTS TEAMS</div>
          </div>
        </div>
      </div>
    </section>
  )
}

function FinalCTASection() {
  return (
    <section
      className="section section-cta"
      aria-labelledby="cta-title"
      data-chapter="06"
      data-title="INITIALIZE_MOCKUP"
    >
      <div className="section-inner">
        <div className="chapter-meta">
          <p className="eyebrow">[ 06 ] TERMINAL: CALL TO ACTION</p>
          <span className="meta-label">[ ACTION: START_FREE_MOCKUP ]</span>
        </div>
        <div className="chapter-content">
          <h2 id="cta-title" className="js-scramble reveal-text">
            Ready to be the hero of your batch?
          </h2>
          <p className="lead">
            Secure your production slot today. Our designers are standing by to turn your
            idea into a 3D reality.
          </p>
          <a className="cta-button js-cta" href={whatsappHref}>
            <span className="cta-text">&gt; INITIALIZE FREE 3D MOCKUP</span>
            <span className="cta-text alt">&gt; DIRECT TO WHATSAPP</span>
          </a>
          <p className="cta-note">(DIRECT TO WHATSAPP)</p>
        </div>
      </div>
    </section>
  )
}

export default function Home() {
  return (
    <main className="page">
      <div className="status-sidebar" aria-hidden="true">
        <div className="status-label">STATUS</div>
        <div className="status-chapter js-status-chapter">CH. 01</div>
        <div className="status-title js-status-title">SYSTEM_INITIALIZE</div>
      </div>
      <div className="crosshair" aria-hidden="true">
        <span className="crosshair-line x" />
        <span className="crosshair-line y" />
        <span className="coord-data">[X: 000px] [Y: 000px]</span>
      </div>
      <HeroSection />
      <ProblemSection />
      <FactorySection />
      <ProcessSection />
      <ArchiveSection />
      <FinalCTASection />
      <MotionEffects />
    </main>
  )
}
