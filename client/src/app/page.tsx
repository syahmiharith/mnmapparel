"use client"

import { useState } from "react"
import Image from "next/image"
import MotionRoot from "../components/MotionRoot"
import ScrambleHeading from "../components/ScrambleHeading"
import { MetaLabelObserver } from "../components/MetaLabel"
import ArchiveSection from "../components/ArchiveSection"
import StickyChat from "../components/StickyChat"
import MotionChrome from "../components/MotionChrome"
import { MotionRefsProvider, useMotionRefs } from "../contexts/MotionRefsContext"
import MNMLogo from "../assets/MNMLOGO.png"
import './globals.css'
import heroStyles from "./HeroSection.module.css"
import factoryStyles from "./FactorySection.module.css"
import processStyles from "./ProcessSection.module.css"
import quoteStyles from "./QuoteFormSection.module.css"
import ctaStyles from "./Cta.module.css"
import dataListStyles from "./DataList.module.css"
import layoutStyles from "./SectionLayout.module.css"
import { DEFAULT_WHATSAPP_MESSAGE, HERO_SPEC_DESIGN, WHATSAPP_NUMBER } from "../lib/site"
import { buildWhatsAppUrl } from "../utils/whatsapp"

const whatsappNumber = WHATSAPP_NUMBER
const whatsappMessage = DEFAULT_WHATSAPP_MESSAGE

const jerseyPlaceholder = `data:image/svg+xml;utf8,${encodeURIComponent(
  `<svg xmlns="http://www.w3.org/2000/svg" width="700" height="900" viewBox="0 0 700 900">
    <rect width="700" height="900" fill="#0d0d0d" />
    <rect x="40" y="40" width="620" height="820" fill="#111" stroke="#2a2a2a" stroke-width="2" />
    <path d="M180 160 L260 80 H440 L520 160 V720 H180 Z" fill="#171717" stroke="#3a3a3a" stroke-width="2" />
    <rect x="260" y="120" width="180" height="80" fill="#0f0f0f" stroke="#3a3a3a" stroke-width="2" />
    <text x="350" y="520" font-family="IBM Plex Mono, monospace" font-size="28" fill="#2f2f2f" text-anchor="middle">MNM // BATCH</text>
  </svg>`
)}`

const whatsappHref = buildWhatsAppUrl(whatsappNumber, whatsappMessage)

function HeroSection() {
  const { heroSubRef, heroSectionRef, registerCta } = useMotionRefs()

  return (
    <section
      id="hero"
      className={`section ${heroStyles.sectionHero}`}
      aria-labelledby="hero-title"
      data-chapter="01"
      data-title="SYSTEM_INITIALIZE"
      ref={heroSectionRef}
    >
      <div className={layoutStyles.sectionInner}>
        <div className={layoutStyles.chapterMeta}>
          <div className={heroStyles.metaBlock}>
            <MetaLabelObserver text="[ STATUS: ACTIVE ]" sectionId="hero" sectionRef={heroSectionRef} />
            <MetaLabelObserver text="[ CATEGORY: PREMIUM SUBLIMATION ]" sectionId="hero" sectionRef={heroSectionRef} />
          </div>
          <div className={heroStyles.specGrid}>
            <div className={heroStyles.specItem}>
              <span className={heroStyles.specLabel}>[ MOQ ]</span>
              <span className={heroStyles.specValue}>10 PCS (LOW VOLUME ACCESSIBLE)</span>
            </div>
            <div className={heroStyles.specItem}>
              <span className={heroStyles.specLabel}>[ DESIGN ]</span>
              <span className={heroStyles.specValue}>{HERO_SPEC_DESIGN}</span>
            </div>
            <div className={heroStyles.specItem}>
              <span className={heroStyles.specLabel}>[ PRICE ]</span>
              <span className={heroStyles.specValue}>FACTORY-DIRECT (NO AGENT MARKUPS)</span>
            </div>
            <div className={heroStyles.specItem}>
              <span className={heroStyles.specLabel}>[ LEAD TIME ]</span>
              <span className={heroStyles.specValue}>7-10 WORKING DAYS</span>
            </div>
          </div>
        </div>
        <div className={layoutStyles.chapterContent}>
          <MetaLabelObserver text="[ 01 ] SYSTEM: THE HERO INTERFACE" sectionId="hero" sectionRef={heroSectionRef} />
          <div className={heroStyles.heroHeadingWrapper}>
            <ScrambleHeading
              as="h1"
              id="hero-title"
              className="reveal-text"
              text={"ORDER BAJU SIAP BAWAH 24 JAM .\nBAJU SIAP ON TIME.\n"}
            />
            <div className={heroStyles.heroLogoRight}>
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
          <p className={layoutStyles.lead} ref={heroSubRef}>
            Kami menyediakan harga terus dari kilang, pengeluaran pantas dan penghantaran yang boleh dipercayai.
          </p>
          <a className={ctaStyles.ctaButton} href={whatsappHref} ref={registerCta}>
            <span className={ctaStyles.ctaText}>START MY 3D DESIGN</span>
          </a>
          <p className={ctaStyles.ctaMicrocopy}>Chat with our designer · Free preview · No payment required</p>
          <a className={ctaStyles.ctaLink} href="#proof" ref={registerCta}>See Real Jerseys</a>
        </div>
      </div>
    </section>
  )
}


function FactorySection() {
  const { factorySectionRef, registerCta } = useMotionRefs()

  return (
    <section
      id="quality"
      className="section section-factory"
      aria-labelledby="factory-title"
      data-chapter="03"
      data-title="HARDWARE_SPECS"
      ref={factorySectionRef}
    >
      <div className={layoutStyles.sectionInner}>
        <div className={layoutStyles.chapterMeta}>
          <MetaLabelObserver
            text="[ 03 ] THE FACTORY: HARDWARE &amp; SPECS"
            sectionId="quality"
            sectionRef={factorySectionRef}
          />
          <MetaLabelObserver
            text="[ MODULE: PRODUCTION FACILITY ]"
            sectionId="quality"
            sectionRef={factorySectionRef}
          />
        </div>
        <div className={layoutStyles.chapterContent}>
          <ScrambleHeading
            as="h2"
            id="factory-title"
            className="reveal-text"
            text="Built in-house. Premium Quality. No outsourcing."
          />
          <div className={factoryStyles.factoryBlueprint} aria-hidden="true">
            <div className={factoryStyles.blueprintLabel}>[ SCHEMATIC: JERSEY_CORE ]</div>
            <svg
              className={factoryStyles.factoryWireframe}
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
          <div className={dataListStyles.dataList}>
            <div className={dataListStyles.dataItem}>
              <span className={dataListStyles.dataLabel}>Color That Holds</span>
              <span className={dataListStyles.dataValue}>Anti-fade ink that stays sharp after 30+ washes.</span>
            </div>
            <div className={dataListStyles.dataItem}>
              <span className={dataListStyles.dataLabel}>Performance Fabrics</span>
              <span className={dataListStyles.dataValue}>Breathable micro‑eyelet and durable interlock blends.</span>
            </div>
            <div className={dataListStyles.dataItem}>
              <span className={dataListStyles.dataLabel}>Reinforced Stitching</span>
              <span className={dataListStyles.dataValue}>Built to last through training, matches, and travel.</span>
            </div>
          </div>
          <a className={ctaStyles.ctaLink} href={whatsappHref} ref={registerCta}>Talk to a Designer</a>
        </div>
      </div>
    </section>
  )
}

function ProcessSection() {
  const { processSectionRef, registerCta } = useMotionRefs()

  return (
    <section
      id="process"
      className="section section-process"
      aria-labelledby="process-title"
      data-chapter="04"
      data-title="PROCESS_MANUAL"
      ref={processSectionRef}
    >
      <div className={layoutStyles.sectionInner}>
        <div className={layoutStyles.chapterMeta}>
          <MetaLabelObserver
            text="[ 04 ] THE PROCESS: 1-2-3 MANUAL"
            sectionId="process"
            sectionRef={processSectionRef}
          />
          <MetaLabelObserver
            text="[ SEQUENCE: INITIALIZATION TO DELIVERY ]"
            sectionId="process"
            sectionRef={processSectionRef}
          />
        </div>
        <div className={layoutStyles.chapterContent}>
          <ScrambleHeading
            as="h2"
            id="process-title"
            className="reveal-text"
            text="What happens after you WhatsApp."
          />
          <ol className={processStyles.stepList}>
            <li>
              <span className={processStyles.stepIndex}>01</span>
              <span className={processStyles.stepBg}>01</span>
              <div>
                <h3>INPUT</h3>
                <p>Send your idea via WhatsApp — sketch, photo, or simple description.</p>
              </div>
            </li>
            <li>
              <span className={processStyles.stepIndex}>02</span>
              <span className={processStyles.stepBg}>02</span>
              <div>
                <h3>PROCESS</h3>
                <p>
                  We design a high‑fidelity mockup and refine until it&apos;s approved.
                </p>
              </div>
            </li>
            <li>
              <span className={processStyles.stepIndex}>03</span>
              <span className={processStyles.stepBg}>03</span>
              <div>
                <h3>OUTPUT</h3>
                <p>
                  Production starts and ships factory‑direct to your doorstep.
                </p>
              </div>
            </li>
          </ol>
          <a className={ctaStyles.ctaLink} href="#quote" ref={registerCta}>Get Your Free Quote</a>
        </div>
      </div>
    </section>
  )
}

function QuoteFormSection() {
  const { quoteSectionRef, registerCta } = useMotionRefs()

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
      .filter(([, qty]) => qty > 0)
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

    const url = buildWhatsAppUrl(whatsappNumber, message)
    window.open(url, "_blank")
  }

  return (
    <section
      id="quote"
      className="section section-quote"
      aria-labelledby="quote-title"
      data-chapter="05"
      data-title="QUOTE_FORM"
      ref={quoteSectionRef}
    >
      <div className={layoutStyles.sectionInner}>
        <div className={layoutStyles.chapterMeta}>
          <MetaLabelObserver
            text="[ 05 ] QUOTE FORM: GET INSTANT PRICING"
            sectionId="quote"
            sectionRef={quoteSectionRef}
          />
          <MetaLabelObserver
            text="[ ACTION: SUBMIT_DETAILS ]"
            sectionId="quote"
            sectionRef={quoteSectionRef}
          />
        </div>
        <div className={layoutStyles.chapterContent}>
          <ScrambleHeading
            as="h2"
            id="quote-title"
            className="reveal-text"
            text="Start your 3D design today."
          />
          <p className={layoutStyles.lead}>
            Nak cepat dapat harga? Isi ringkas & terus WhatsApp dengan designer
          </p>
          
          <form className={quoteStyles.quoteForm} onSubmit={handleSubmit}>
            <div className={quoteStyles.formGroup}>
              <label htmlFor="name" className={quoteStyles.formLabel}>[ Nama ]</label>
              <input
                id="name"
                type="text"
                placeholder="Nama anda"
                value={name}
                onChange={e => setName(e.target.value)}
                className={quoteStyles.formInput}
              />
            </div>

            <div className={quoteStyles.formGroup}>
              <label htmlFor="shirtType" className={quoteStyles.formLabel}>[ Jenis Baju ]</label>
              <input
                id="shirtType"
                type="text"
                placeholder="Korporat / Jersey / Baggy / Jacket / Muslimah / Custom"
                value={shirtType}
                onChange={e => setShirtType(e.target.value)}
                className={quoteStyles.formInput}
              />
              <p className={quoteStyles.formHelper}>[ SPECIFY_TYPE // REQUIRED ]</p>
            </div>

            <div className={quoteStyles.formGroup}>
              <label className={quoteStyles.formLabel}>[ Kuantiti & Saiz ]</label>
              <div className={quoteStyles.sizeGrid}>
                {Object.keys(sizes).map((size) => (
                  <div key={size} className={quoteStyles.sizeItem}>
                    <label htmlFor={`size-${size}`} className={quoteStyles.sizeLabel}>[ {size} ]</label>
                    <input
                      id={`size-${size}`}
                      type="number"
                      min="0"
                      value={sizes[size as keyof typeof sizes] || ""}
                      onChange={e => handleSizeChange(size, e.target.value)}
                      className={quoteStyles.sizeInput}
                      placeholder="0"
                    />
                  </div>
                ))}
              </div>
              <div className={quoteStyles.totalQuantity}>
                <span className={quoteStyles.totalLabel}>[ Total ]</span>
                <span className={quoteStyles.totalValue}>{getTotalQuantity()} PCS</span>
              </div>
            </div>

            <div className={quoteStyles.formGroup}>
              <label htmlFor="date" className={quoteStyles.formLabel}>[ Tarikh Diperlukan ]</label>
              <input
                id="date"
                type="date"
                value={date}
                onChange={e => setDate(e.target.value)}
                className={quoteStyles.formInput}
              />
              <p className={quoteStyles.formHelper}>[ DATE_REQUIRED // OPTIONAL ]</p>
            </div>

            <button type="submit" className={quoteStyles.quoteSubmitButton}>
              SUBMIT & CHAT WHATSAPP
            </button>
            <p className={quoteStyles.formFooter}>[ FREE QUOTE · INSTANT REPLY · NO COMMITMENT ]</p>
          </form>

          <div className={dataListStyles.dataList} style={{ marginTop: '2rem' }}>
            <div className={dataListStyles.dataItem}>
              <span className={dataListStyles.dataLabel}>No Payment Required</span>
              <span className={dataListStyles.dataValue}>Get factory-accurate 3D preview before committing</span>
            </div>
            <div className={dataListStyles.dataItem}>
              <span className={dataListStyles.dataLabel}>Quick Response</span>
              <span className={dataListStyles.dataValue}>Our designer replies within minutes during business hours</span>
            </div>
          </div>

          <a className={ctaStyles.ctaButton} href={whatsappHref} ref={registerCta} style={{ marginTop: '1.5rem', display: 'inline-flex' }}>
            <span className={ctaStyles.ctaText}>START MY 3D DESIGN</span>
          </a>
          <p className={ctaStyles.ctaMicrocopy}>Free · No commitment · Reply within minutes</p>
        </div>
      </div>
    </section>
  )
}

export default function Home() {
  return (
    <MotionRefsProvider>
      <main className="page">
        <MotionChrome />
        <HeroSection />
        <ArchiveSection jerseyPlaceholder={jerseyPlaceholder} />
        <FactorySection />
        <ProcessSection />
        <QuoteFormSection />
        <StickyChat whatsappNumber={whatsappNumber} defaultMessage={whatsappMessage} />
        <MotionRoot />
      </main>
    </MotionRefsProvider>
  )
}