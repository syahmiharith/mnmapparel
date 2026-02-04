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
import {
  buildQuoteMessage,
  DEFAULT_WHATSAPP_MESSAGE,
  formatSizeLabel,
  JERSEY_PLACEHOLDER_DATA_URI,
  PAGE_TEXT,
  WHATSAPP_NUMBER,
} from "../lib/site"
import { buildWhatsAppUrl } from "../utils/whatsapp"

const whatsappNumber = WHATSAPP_NUMBER
const whatsappMessage = DEFAULT_WHATSAPP_MESSAGE

const jerseyPlaceholder = JERSEY_PLACEHOLDER_DATA_URI

const whatsappHref = buildWhatsAppUrl(whatsappNumber, whatsappMessage)

function HeroSection() {
  const { heroSubRef, heroSectionRef, registerCta } = useMotionRefs()

  return (
    <section
      id="hero"
      className={`section ${heroStyles.sectionHero}`}
      aria-labelledby="hero-title"
      data-chapter={PAGE_TEXT.hero.chapter}
      data-title={PAGE_TEXT.hero.dataTitle}
      ref={heroSectionRef}
    >
      <div className={layoutStyles.sectionInner}>
        <div className={layoutStyles.chapterMeta}>
          <div className={heroStyles.metaBlock}>
            <MetaLabelObserver text={PAGE_TEXT.hero.metaStatus} sectionId="hero" sectionRef={heroSectionRef} />
            <MetaLabelObserver text={PAGE_TEXT.hero.metaCategory} sectionId="hero" sectionRef={heroSectionRef} />
          </div>
          <div className={heroStyles.specGrid}>
            <div className={heroStyles.specItem}>
              <span className={heroStyles.specLabel}>{PAGE_TEXT.hero.specs.moqLabel}</span>
              <span className={heroStyles.specValue}>{PAGE_TEXT.hero.specs.moqValue}</span>
            </div>
            <div className={heroStyles.specItem}>
              <span className={heroStyles.specLabel}>{PAGE_TEXT.hero.specs.designLabel}</span>
              <span className={heroStyles.specValue}>{PAGE_TEXT.hero.specs.designValue}</span>
            </div>
            <div className={heroStyles.specItem}>
              <span className={heroStyles.specLabel}>{PAGE_TEXT.hero.specs.priceLabel}</span>
              <span className={heroStyles.specValue}>{PAGE_TEXT.hero.specs.priceValue}</span>
            </div>
            <div className={heroStyles.specItem}>
              <span className={heroStyles.specLabel}>{PAGE_TEXT.hero.specs.leadTimeLabel}</span>
              <span className={heroStyles.specValue}>{PAGE_TEXT.hero.specs.leadTimeValue}</span>
            </div>
          </div>
        </div>
        <div className={layoutStyles.chapterContent}>
          <MetaLabelObserver text={PAGE_TEXT.hero.metaLabel} sectionId="hero" sectionRef={heroSectionRef} />
          <div className={heroStyles.heroHeadingWrapper}>
            <ScrambleHeading
              as="h1"
              id="hero-title"
              className="reveal-text"
              text={PAGE_TEXT.hero.heading}
            />
            <div className={heroStyles.heroLogoRight}>
              <Image
                src={MNMLogo}
                alt={PAGE_TEXT.hero.logoAlt}
                width={300}
                height={300}
                priority
                style={{ maxWidth: '100%', height: 'auto', display: 'block' }}
              />
            </div>
          </div>
          <p className={layoutStyles.lead} ref={heroSubRef}>{PAGE_TEXT.hero.lead}</p>
          <a className={ctaStyles.ctaButton} href={whatsappHref} ref={registerCta}>
            <span className={ctaStyles.ctaText}>{PAGE_TEXT.hero.ctaPrimary}</span>
          </a>
          <p className={ctaStyles.ctaMicrocopy}>{PAGE_TEXT.hero.ctaMicrocopy}</p>
          <a className={ctaStyles.ctaLink} href="#proof" ref={registerCta}>{PAGE_TEXT.hero.ctaSecondary}</a>
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
      data-chapter={PAGE_TEXT.factory.chapter}
      data-title={PAGE_TEXT.factory.dataTitle}
      ref={factorySectionRef}
    >
      <div className={layoutStyles.sectionInner}>
        <div className={layoutStyles.chapterMeta}>
          <MetaLabelObserver
            text={PAGE_TEXT.factory.metaTitle}
            sectionId="quality"
            sectionRef={factorySectionRef}
          />
          <MetaLabelObserver
            text={PAGE_TEXT.factory.metaModule}
            sectionId="quality"
            sectionRef={factorySectionRef}
          />
        </div>
        <div className={layoutStyles.chapterContent}>
          <ScrambleHeading
            as="h2"
            id="factory-title"
            className="reveal-text"
            text={PAGE_TEXT.factory.heading}
          />
          <div className={factoryStyles.factoryBlueprint} aria-hidden="true">
            <div className={factoryStyles.blueprintLabel}>{PAGE_TEXT.factory.blueprintLabel}</div>
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
            {PAGE_TEXT.factory.dataList.map((item) => (
              <div key={item.label} className={dataListStyles.dataItem}>
                <span className={dataListStyles.dataLabel}>{item.label}</span>
                <span className={dataListStyles.dataValue}>{item.value}</span>
              </div>
            ))}
          </div>
          <a className={ctaStyles.ctaLink} href={whatsappHref} ref={registerCta}>{PAGE_TEXT.factory.cta}</a>
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
      data-chapter={PAGE_TEXT.process.chapter}
      data-title={PAGE_TEXT.process.dataTitle}
      ref={processSectionRef}
    >
      <div className={layoutStyles.sectionInner}>
        <div className={layoutStyles.chapterMeta}>
          <MetaLabelObserver
            text={PAGE_TEXT.process.metaTitle}
            sectionId="process"
            sectionRef={processSectionRef}
          />
          <MetaLabelObserver
            text={PAGE_TEXT.process.metaSequence}
            sectionId="process"
            sectionRef={processSectionRef}
          />
        </div>
        <div className={layoutStyles.chapterContent}>
          <ScrambleHeading
            as="h2"
            id="process-title"
            className="reveal-text"
            text={PAGE_TEXT.process.heading}
          />
          <ol className={processStyles.stepList}>
            {PAGE_TEXT.process.steps.map((step, index) => (
              <li key={step.title}>
                <span className={processStyles.stepIndex}>{String(index + 1).padStart(2, "0")}</span>
                <span className={processStyles.stepBg}>{String(index + 1).padStart(2, "0")}</span>
                <div>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </div>
              </li>
            ))}
          </ol>
          <a className={ctaStyles.ctaLink} href="#quote" ref={registerCta}>{PAGE_TEXT.process.cta}</a>
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
      alert(PAGE_TEXT.quote.alertMissingFields)
      return
    }

    const message = buildQuoteMessage({
      name,
      shirtType,
      totalQty,
      sizeBreakdown,
      date,
    })

    const url = buildWhatsAppUrl(whatsappNumber, message)
    window.open(url, "_blank")
  }

  return (
    <section
      id="quote"
      className="section section-quote"
      aria-labelledby="quote-title"
      data-chapter={PAGE_TEXT.quote.chapter}
      data-title={PAGE_TEXT.quote.dataTitle}
      ref={quoteSectionRef}
    >
      <div className={layoutStyles.sectionInner}>
        <div className={layoutStyles.chapterMeta}>
          <MetaLabelObserver
            text={PAGE_TEXT.quote.metaTitle}
            sectionId="quote"
            sectionRef={quoteSectionRef}
          />
          <MetaLabelObserver
            text={PAGE_TEXT.quote.metaAction}
            sectionId="quote"
            sectionRef={quoteSectionRef}
          />
        </div>
        <div className={layoutStyles.chapterContent}>
          <ScrambleHeading
            as="h2"
            id="quote-title"
            className="reveal-text"
            text={PAGE_TEXT.quote.heading}
          />
          <p className={layoutStyles.lead}>{PAGE_TEXT.quote.lead}</p>
          
          <form className={quoteStyles.quoteForm} onSubmit={handleSubmit}>
            <div className={quoteStyles.formGroup}>
              <label htmlFor="name" className={quoteStyles.formLabel}>{PAGE_TEXT.quote.form.nameLabel}</label>
              <input
                id="name"
                type="text"
                placeholder={PAGE_TEXT.quote.form.namePlaceholder}
                value={name}
                onChange={e => setName(e.target.value)}
                className={quoteStyles.formInput}
              />
            </div>

            <div className={quoteStyles.formGroup}>
              <label htmlFor="shirtType" className={quoteStyles.formLabel}>{PAGE_TEXT.quote.form.shirtTypeLabel}</label>
              <input
                id="shirtType"
                type="text"
                placeholder={PAGE_TEXT.quote.form.shirtTypePlaceholder}
                value={shirtType}
                onChange={e => setShirtType(e.target.value)}
                className={quoteStyles.formInput}
              />
              <p className={quoteStyles.formHelper}>{PAGE_TEXT.quote.form.shirtTypeHelper}</p>
            </div>

            <div className={quoteStyles.formGroup}>
              <label className={quoteStyles.formLabel}>{PAGE_TEXT.quote.form.sizesLabel}</label>
              <div className={quoteStyles.sizeGrid}>
                {Object.keys(sizes).map((size) => (
                  <div key={size} className={quoteStyles.sizeItem}>
                    <label htmlFor={`size-${size}`} className={quoteStyles.sizeLabel}>{formatSizeLabel(size)}</label>
                    <input
                      id={`size-${size}`}
                      type="number"
                      min="0"
                      value={sizes[size as keyof typeof sizes] || ""}
                      onChange={e => handleSizeChange(size, e.target.value)}
                      className={quoteStyles.sizeInput}
                      placeholder={PAGE_TEXT.quote.form.sizePlaceholder}
                    />
                  </div>
                ))}
              </div>
              <div className={quoteStyles.totalQuantity}>
                <span className={quoteStyles.totalLabel}>{PAGE_TEXT.quote.form.totalLabel}</span>
                <span className={quoteStyles.totalValue}>{getTotalQuantity()}{PAGE_TEXT.quote.form.totalSuffix}</span>
              </div>
            </div>

            <div className={quoteStyles.formGroup}>
              <label htmlFor="date" className={quoteStyles.formLabel}>{PAGE_TEXT.quote.form.dateLabel}</label>
              <input
                id="date"
                type="date"
                value={date}
                onChange={e => setDate(e.target.value)}
                className={quoteStyles.formInput}
              />
              <p className={quoteStyles.formHelper}>{PAGE_TEXT.quote.form.dateHelper}</p>
            </div>

            <button type="submit" className={quoteStyles.quoteSubmitButton}>
              {PAGE_TEXT.quote.form.submitButton}
            </button>
            <p className={quoteStyles.formFooter}>{PAGE_TEXT.quote.form.footer}</p>
          </form>

          <div className={dataListStyles.dataList} style={{ marginTop: '2rem' }}>
            {PAGE_TEXT.quote.dataList.map((item) => (
              <div key={item.label} className={dataListStyles.dataItem}>
                <span className={dataListStyles.dataLabel}>{item.label}</span>
                <span className={dataListStyles.dataValue}>{item.value}</span>
              </div>
            ))}
          </div>

          <a className={ctaStyles.ctaButton} href={whatsappHref} ref={registerCta} style={{ marginTop: '1.5rem', display: 'inline-flex' }}>
            <span className={ctaStyles.ctaText}>{PAGE_TEXT.quote.ctaPrimary}</span>
          </a>
          <p className={ctaStyles.ctaMicrocopy}>{PAGE_TEXT.quote.ctaMicrocopy}</p>
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