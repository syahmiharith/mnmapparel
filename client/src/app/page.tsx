"use client"

import { useState } from "react"
import Image from "next/image"
import MotionEffects from "../components/MotionEffects"
import ScrambleHeading from "../components/ScrambleHeading"
import { MetaLabelObserver } from "../components/MetaLabel"
import ArchiveSection from "../components/ArchiveSection"
import StickyChat from "../components/StickyChat"
import MNMLogo from "../assets/MNMLOGO.png"
import './globals.css'


const whatsappNumber = "60183825033"
const whatsappMessage = 
  "Hi I would like to purchase this item"

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
              <span className="spec-value">SYAHMI TAK HENSEM</span>
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
          <div className="hero-heading-wrapper">
            <ScrambleHeading
              as="h1"
              id="hero-title"
              className="reveal-text"
              text={"ORDER BAJU SIAP BAWAH 24 JAM .\nBAJU SIAP ON TIME.\n"}
            />
            <div className="hero-logo-right">
              <Image
                src={MNMLogo}
                alt="MNM Apparel Logo"
                width={300}
                height={300}
                priority
                style={{ maxWidth: '100%', height: 'auto', display: 'block' }}
              />
            </div>
          </div>
          <p className="lead">
            Kami menyediakan harga terus dari kilang, pengeluaran pantas dan penghantaran yang boleh dipercayai.
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
          <a className="cta-link" href="#quote">Get Your Free Quote</a>
        </div>
      </div>
    </section>
  )
}

function QuoteFormSection() {
  const [name, setName] = useState("")
  const [shirtType, setShirtType] = useState("")
  const [sizes, setSizes] = useState({
    XS: 0,
    S: 0,
    M: 0,
    L: 0,
    XL: 0,
    "2XL": 0,
    "3XL": 0,
    "4XL": 0
  })
  const [date, setDate] = useState("")

  const handleSizeChange = (size: string, value: string) => {
    setSizes(prev => ({
      ...prev,
      [size]: value === "" ? 0 : parseInt(value) || 0
    }))
  }

  const getTotalQuantity = () => {
    return Object.values(sizes).reduce((sum, qty) => sum + qty, 0)
  }

  const getSizeBreakdown = () => {
    return Object.entries(sizes)
      .filter(([_, qty]) => qty > 0)
      .map(([size, qty]) => `${size}: ${qty}`)
      .join(", ")
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    
    const totalQty = getTotalQuantity()
    const sizeBreakdown = getSizeBreakdown()

    if (!name || !shirtType || totalQty === 0) {
      alert("Sila isi Nama, Jenis Baju, dan sekurang-kurangnya satu saiz")
      return
    }

    const message = `Hi MNM Apparel 👋
I'd like to get a jersey quote.

Name: ${name}
Shirt Type: ${shirtType}
Total Quantity: ${totalQty} pcs
Size Breakdown: ${sizeBreakdown}
Date Needed: ${date || "Not specified"}

Please advise price & next steps.`

    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`
    window.open(url, "_blank")
  }

  return (
    <section
      id="quote"
      className="section section-quote"
      aria-labelledby="quote-title"
      data-chapter="05"
      data-title="QUOTE_FORM"
    >
      <div className="section-inner">
        <div className="chapter-meta">
          <MetaLabelObserver text="[ 05 ] QUOTE FORM: GET INSTANT PRICING" sectionId="quote" />
          <MetaLabelObserver text="[ ACTION: SUBMIT_DETAILS ]" sectionId="quote" />
        </div>
        <div className="chapter-content">
          <ScrambleHeading
            as="h2"
            id="quote-title"
            className="reveal-text"
            text="Start your 3D design today."
          />
          <p className="lead">
            Nak cepat dapat harga? Isi ringkas & terus WhatsApp dengan designer
          </p>
          
          <form className="quote-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name" className="form-label">[ Nama ]</label>
              <input
                id="name"
                type="text"
                placeholder="Nama anda"
                value={name}
                onChange={e => setName(e.target.value)}
                className="form-input"
              />
            </div>

            <div className="form-group">
              <label htmlFor="shirtType" className="form-label">[ Jenis Baju ]</label>
              <input
                id="shirtType"
                type="text"
                placeholder="Korporat / Jersey / Baggy / Jacket / Muslimah / Custom"
                value={shirtType}
                onChange={e => setShirtType(e.target.value)}
                className="form-input"
              />
              <p className="form-helper">[ SPECIFY_TYPE // REQUIRED ]</p>
            </div>

            <div className="form-group">
              <label className="form-label">[ Kuantiti & Saiz ]</label>
              <div className="size-grid">
                {Object.keys(sizes).map((size) => (
                  <div key={size} className="size-item">
                    <label htmlFor={`size-${size}`} className="size-label">[ {size} ]</label>
                    <input
                      id={`size-${size}`}
                      type="number"
                      min="0"
                      value={sizes[size as keyof typeof sizes] || ""}
                      onChange={e => handleSizeChange(size, e.target.value)}
                      className="size-input"
                      placeholder="0"
                    />
                  </div>
                ))}
              </div>
              <div className="total-quantity">
                <span className="total-label">[ Total ]</span>
                <span className="total-value">{getTotalQuantity()} PCS</span>
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="date" className="form-label">[ Tarikh Diperlukan ]</label>
              <input
                id="date"
                type="date"
                value={date}
                onChange={e => setDate(e.target.value)}
                className="form-input"
              />
              <p className="form-helper">[ DATE_REQUIRED // OPTIONAL ]</p>
            </div>

            <button type="submit" className="quote-submit-button">
              SUBMIT & CHAT WHATSAPP
            </button>
            <p className="form-footer">[ FREE QUOTE · INSTANT REPLY · NO COMMITMENT ]</p>
          </form>

          <div className="data-list" style={{ marginTop: '2rem' }}>
            <div className="data-item">
              <span className="data-label">No Payment Required</span>
              <span className="data-value">Get factory-accurate 3D preview before committing</span>
            </div>
            <div className="data-item">
              <span className="data-label">Quick Response</span>
              <span className="data-value">Our designer replies within minutes during business hours</span>
            </div>
          </div>

          <a className="cta-button js-cta" href={whatsappHref} style={{ marginTop: '1.5rem', display: 'inline-flex' }}>
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
      <ArchiveSection jerseyPlaceholder={jerseyPlaceholder} />
      <FactorySection />
      <ProcessSection />
      <QuoteFormSection />
      <StickyChat whatsappNumber={whatsappNumber} />
      <MotionEffects />
    </main>
  )
}