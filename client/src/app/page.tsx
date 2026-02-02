import Image from "next/image"
import MotionEffects from "../components/MotionEffects"
import ScrambleHeading from "../components/ScrambleHeading"
import { MetaLabelObserver } from "../components/MetaLabel"
import { ProofLabelObserver } from "../components/ProofLabel"

const whatsappNumber = "YOUR_WHATSAPP_NUMBER"
const whatsappMessage =
  "Hi, I'd like to see my jersey design in 3D. Can you help?"

const jerseyPlaceholder = `data:image/svg+xml;utf8,${encodeURIComponent(
  `<svg xmlns="http://www.w3.org/2000/svg" width="700" height="900" viewBox="0 0 700 900">
    <rect width="700" height="900" fill="#0d0d0d" />
    <rect x="40" y="40" width="620" height="820" fill="#111" stroke="#2a2a2a" stroke-width="2" />
    <path d="M180 160 L260 80 H440 L520 160 V720 H180 Z" fill="#171717" stroke="#3a3a3a" stroke-width="2" />
    <rect x="260" y="120" width="180" height="80" fill="#0f0f0f" stroke="#3a3a3a" stroke-width="2" />
    <text x="350" y="520" font-family="IBM Plex Mono, monospace" font-size="28" fill="#2f2f2f" text-anchor="middle">MNM // BATCH</text>
  </svg>`
)}`

const whatsappHref = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
  whatsappMessage
)}`

function HeroSection() {
  return (
    <section
      id="hero"
      className="section section-hero"
      aria-labelledby="hero-title"
      data-chapter="01"
      data-title="SYSTEM_INITIALIZE"
    >
      <div className="section-inner">
        <div className="chapter-meta">
          <div className="meta-block">
            <MetaLabelObserver text="[ STATUS: ACTIVE ]" sectionId="hero" />
            <MetaLabelObserver text="[ CATEGORY: PREMIUM SUBLIMATION ]" sectionId="hero" />
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
          <MetaLabelObserver text="[ 01 ] SYSTEM: THE HERO INTERFACE" sectionId="hero" />
          <ScrambleHeading
            as="h1"
            id="hero-title"
            className="reveal-text"
            text={"CUSTOM JERSEYS.\nUNLIMITED DESIGN.\nFAST DELIVERY."}
          />
          <p className="lead js-hero-sub">
            From rough idea to pro-grade 3D design—no agents, no risk. We handle design and
            production in-house so you looks premium on delivery.
          </p>
          <a className="cta-button js-cta" href={whatsappHref}>
            <span className="cta-text">START MY 3D DESIGN</span>
          </a>
          <p className="cta-microcopy">Chat with our designer · Free preview · No payment required</p>
          <a className="cta-link" href="#proof">See Real Jerseys</a>
        </div>
      </div>
    </section>
  )
}

function ArchiveSection() {
  return (
    <section
      id="proof"
      className="section section-archive archive-section"
      aria-labelledby="archive-title"
      data-chapter="02"
      data-title="ARCHIVE_DATABASE"
    >
      <div className="section-inner">
        <div className="chapter-meta">
          <MetaLabelObserver text="[ 02 ] THE ARCHIVE: PRODUCTS" sectionId="proof" />
          <MetaLabelObserver text="[ DATABASE: COMPLETED BATCHES ]" sectionId="proof" />
        </div>
        <div className="chapter-content">
          <ScrambleHeading
            as="h2"
            id="archive-title"
            className="reveal-text"
            text="Real teams. Real orders. Real outcomes."
          />
          <div className="proof-label-slot">
            <ProofLabelObserver
              text="[ TOTAL_BATCHES_PROCESSED: 4,800+ ]"
              sectionId="proof"
            />
          </div>
          <div className="archive-container">
            <div className="scanner-line" aria-hidden="true" />
            <div className="scan-popup">[ SCAN_DATA // MICROFIBER_EYELET // 210GSM ]</div>
            <div className="conveyor-track">
              <div className="jersey-item">
                <Image
                  src={jerseyPlaceholder}
                  alt="Batch 01"
                  width={350}
                  height={450}
                  unoptimized
                  className="jersey-image"
                />
                <div className="mono-label">[ REF_001 // UNIVERSITY_SERIES ]</div>
                <div className="mono-status shipped">[ STATUS: SHIPPED ]</div>
              </div>
              <div className="jersey-item">
                <Image
                  src={jerseyPlaceholder}
                  alt="Batch 02"
                  width={350}
                  height={450}
                  unoptimized
                  className="jersey-image"
                />
                <div className="mono-label">[ REF_042 // SCHOOL_DIVISION ]</div>
              </div>
              <div className="jersey-item">
                <Image
                  src={jerseyPlaceholder}
                  alt="Batch 03"
                  width={350}
                  height={450}
                  unoptimized
                  className="jersey-image"
                />
                <div className="mono-label">[ REF_107 // MOTORSPORT ]</div>
              </div>
              <div className="jersey-item">
                <Image
                  src={jerseyPlaceholder}
                  alt="Batch 04"
                  width={350}
                  height={450}
                  unoptimized
                  className="jersey-image"
                />
                <div className="mono-label">[ REF_233 // CORPORATE_EVENT ]</div>
              </div>
              <div className="jersey-item">
                <Image
                  src={jerseyPlaceholder}
                  alt="Batch 05"
                  width={350}
                  height={450}
                  unoptimized
                  className="jersey-image"
                />
                <div className="mono-label">[ REF_311 // ESPORTS ]</div>
              </div>
            </div>
          </div>
          <a className="cta-link" href="#process">Ask How the Design Works</a>
        </div>
      </div>
    </section>
  )
}

function FactorySection() {
  return (
    <section
      id="quality"
      className="section section-factory"
      aria-labelledby="factory-title"
      data-chapter="03"
      data-title="HARDWARE_SPECS"
    >
      <div className="section-inner">
        <div className="chapter-meta">
          <MetaLabelObserver text="[ 03 ] THE FACTORY: HARDWARE &amp; SPECS" sectionId="quality" />
          <MetaLabelObserver text="[ MODULE: PRODUCTION FACILITY ]" sectionId="quality" />
        </div>
        <div className="chapter-content">
          <ScrambleHeading
            as="h2"
            id="factory-title"
            className="reveal-text"
            text="Built in-house. Premium Quality. No outsourcing."
          />
          <div className="factory-blueprint" aria-hidden="true">
            <div className="blueprint-label">[ SCHEMATIC: JERSEY_CORE ]</div>
            <svg
              className="factory-wireframe"
              viewBox="0 0 640 460"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                className="wire-path"
                d="M140 120 L240 40 H400 L500 120 V380 H140 Z"
              />
              <path className="wire-path" d="M240 40 L210 140 L140 120" />
              <path className="wire-path" d="M400 40 L430 140 L500 120" />
              <path className="wire-path" d="M210 140 L430 140" />
              <path className="wire-path" d="M250 200 L390 200" />
              <path className="wire-path" d="M230 280 L410 280" />
              <path className="wire-path" d="M180 320 L460 320" />
              <path className="wire-path" d="M140 380 L500 380" />
              <path className="wire-path" d="M270 80 L370 80" />
            </svg>
          </div>
          <div className="data-list">
            <div className="data-item">
              <span className="data-label">Color That Holds</span>
              <span className="data-value">Anti-fade ink that stays sharp after 30+ washes.</span>
            </div>
            <div className="data-item">
              <span className="data-label">Performance Fabrics</span>
              <span className="data-value">Breathable micro‑eyelet and durable interlock blends.</span>
            </div>
            <div className="data-item">
              <span className="data-label">Reinforced Stitching</span>
              <span className="data-value">Built to last through training, matches, and travel.</span>
            </div>
          </div>
          <a className="cta-link" href={whatsappHref}>Talk to a Designer</a>
        </div>
      </div>
    </section>
  )
}

function ProcessSection() {
  return (
    <section
      id="process"
      className="section section-process"
      aria-labelledby="process-title"
      data-chapter="04"
      data-title="PROCESS_MANUAL"
    >
      <div className="section-inner">
        <div className="chapter-meta">
          <MetaLabelObserver text="[ 04 ] THE PROCESS: 1-2-3 MANUAL" sectionId="process" />
          <MetaLabelObserver text="[ SEQUENCE: INITIALIZATION TO DELIVERY ]" sectionId="process" />
        </div>
        <div className="chapter-content">
          <ScrambleHeading
            as="h2"
            id="process-title"
            className="reveal-text"
            text="What happens after you WhatsApp."
          />
          <ol className="step-list">
            <li>
              <span className="step-index">01</span>
              <span className="step-bg">01</span>
              <div>
                <h3>INPUT</h3>
                <p>Send your idea via WhatsApp — sketch, photo, or simple description.</p>
              </div>
            </li>
            <li>
              <span className="step-index">02</span>
              <span className="step-bg">02</span>
              <div>
                <h3>PROCESS</h3>
                <p>
                  We design a high‑fidelity mockup and refine until it&apos;s approved.
                </p>
              </div>
            </li>
            <li>
              <span className="step-index">03</span>
              <span className="step-bg">03</span>
              <div>
                <h3>OUTPUT</h3>
                <p>
                  Production starts and ships factory‑direct to your doorstep.
                </p>
              </div>
            </li>
          </ol>
          <a className="cta-link" href={whatsappHref}>Ask How the Design Works</a>
        </div>
      </div>
    </section>
  )
}

function FinalCTASection() {
  return (
    <section
      id="cta"
      className="section section-cta"
      aria-labelledby="cta-title"
      data-chapter="05"
      data-title="INITIALIZE_MOCKUP"
    >
      <div className="section-inner">
        <div className="chapter-meta">
          <MetaLabelObserver text="[ 05 ] TERMINAL: CALL TO ACTION" sectionId="cta" />
          <MetaLabelObserver text="[ ACTION: START_NOW_FOR_FREE ]" sectionId="cta" />
        </div>
        <div className="chapter-content">
          <ScrambleHeading
            as="h2"
            id="cta-title"
            className="reveal-text"
            text="Start your 3D design today."
          />
          <p className="lead">
            No payment · Factory-accurate · Order only if you like it
          </p>
          <a className="cta-button js-cta" href={whatsappHref}>
            <span className="cta-text">START MY 3D DESIGN</span>
          </a>
          <p className="cta-microcopy">Free · No commitment · Reply within minutes</p>
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
        <div className="status-progress">
          <span className="status-progress-bar js-status-progress" />
        </div>
      </div>
      <div className="crosshair" aria-hidden="true">
        <span className="crosshair-line x" />
        <span className="crosshair-line y" />
        <span className="coord-data">[X: 000px] [Y: 000px]</span>
      </div>
      <HeroSection />
      <ArchiveSection />
      <FactorySection />
      <ProcessSection />
      <FinalCTASection />
      <MotionEffects />
    </main>
  )
}
