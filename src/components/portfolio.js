import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { profile, products, experience, capabilities } from './portfolioData';

function Arrow() { return <span aria-hidden="true">↗</span>; }

function SectionHeading({ eyebrow, title, children }) {
  return <div className="section-heading"><div><p className="eyebrow">{eyebrow}</p><h2>{title}</h2></div>{children}</div>;
}

function ProductCard({ product, index }) {
  return (
    <article className={`product-card tone-${product.color}`}>
      <div className="product-visual" aria-label={`${product.name}: ${product.metric} ${product.metricLabel}`}>
        <div className="visual-top"><span className="product-category">{product.category}</span><span className="product-index">0{index + 1}</span></div>
        <div className="product-wordmark"><span className="product-monogram" aria-hidden="true">{product.mark}</span>{product.name}<span className="wordmark-dot" aria-hidden="true">.</span></div>
        <div className="visual-bottom"><span className="metric-value">{product.metric}</span><span>{product.metricLabel}</span><span className="visual-arrow" aria-hidden="true">↗</span></div>
      </div>
      <div className="product-body"><p className="card-meta">{product.region}</p><h3>{product.headline}</h3><p>{product.description}</p><ul className="tags">{product.tags.map(tag => <li key={tag}>{tag}</li>)}</ul>
        <details className="product-details"><summary>Explore {product.name} <span aria-hidden="true">+</span></summary><div className="product-detail-content"><p className="detail-role">{product.role}</p><h4>The challenge</h4><p>{product.challenge}</p><h4>My contribution</h4><p>{product.contribution}</p><h4>The outcome</h4><p>{product.outcome}</p></div></details>
      </div>
    </article>
  );
}

function ContactBanner() {
  return <section className="contact-banner"><div><p className="eyebrow">THE NEXT CHAPTER</p><h2>Let’s build something<br /><em>that matters.</em></h2><p>Exploring Product Manager and Product Owner opportunities.</p></div><Link className="button button-light" to="/contact">Start a conversation <Arrow /></Link></section>;
}

export function HomePage() {
  return <>
    <section className="hero container">
      <div className="hero-copy"><div className="hero-identity"><img className="hero-portrait" src={profile.portrait} alt={`Portrait of ${profile.name}`} width="76" height="76" /><p className="availability"><span />Open to Product Management roles</p></div><p className="eyebrow hero-intro">HI, I’M DIVYANSH CHAUDHARY</p><h1>Turning complex<br />problems into<br /><em>products that work.</em></h1><p className="hero-description">CSPO. Product thinker. Delivery partner.<br />I connect user needs, business goals, and engineering to take meaningful products from discovery to launch.</p><div className="button-row"><Link className="button button-primary" to="/projects">Explore my work <Arrow /></Link><Link className="button button-secondary" to="/resume">View résumé <span aria-hidden="true">→</span></Link></div><div className="hero-footnote"><span className="location-dot" aria-hidden="true">◎</span> Noida, India <span className="divider">/</span> SaaS · B2B · B2C</div></div>
      <aside className="hero-board" aria-label="Product approach and credentials"><div className="board-top"><span className="eyebrow">MY PRODUCT NORTH STAR</span><span className="board-symbol" aria-hidden="true">✳</span></div><p className="board-statement">The right problem.<br />The right people.<br /><em>Real impact.</em></p><div className="process-map"><span>Discover</span><span aria-hidden="true">→</span><span>Define</span><span aria-hidden="true">→</span><span>Deliver</span></div><div className="board-note"><span className="note-icon" aria-hidden="true">↗</span><div><strong>Built around outcomes</strong><p>Not just a list of shipped features.</p></div></div><div className="credential"><span className="credential-stamp" aria-hidden="true">✓</span><div><strong>Certified Scrum Product Owner</strong><span>CSPO · Strategy meets execution</span></div></div></aside>
    </section>
    <section className="impact-strip container" aria-label="Selected career outcomes"><div><strong>6+<span> years</span></strong><p>Product & agile delivery</p></div><div><strong>150%<span> ↑</span></strong><p>User growth · Venuemonk</p></div><div><strong>30%<span> ↑</span></strong><p>Engagement · ImpexDocs</p></div><div><strong>17</strong><p>Products migrated · Axis Max Life</p></div></section>
    <section className="section container"><SectionHeading eyebrow="01 / SELECTED WORK" title="Different products. Real impact."><Link className="text-link" to="/projects">All product work <span aria-hidden="true">→</span></Link></SectionHeading><p className="section-intro">From simplifying global trade to helping people find their perfect venue. A selection of products I’ve helped move forward.</p><div className="product-grid">{products.slice(0, 3).map((product, index) => <ProductCard key={product.id} product={product} index={index} />)}</div><p className="source-note">Outcomes and contributions based on my professional experience. Product summaries, not confidential client deliverables.</p></section>
    <section className="approach-section"><div className="container section"><SectionHeading eyebrow="02 / HOW I WORK" title="Clarity first. Momentum next." /><div className="capability-grid">{capabilities.slice(0, 3).map(item => <article key={item.number}><span className="step-number">{item.number}</span><h3>{item.title}</h3><p>{item.description}</p><ul className="plain-list">{item.skills.slice(0, 3).map(skill => <li key={skill}>{skill}</li>)}</ul></article>)}</div></div></section>
    <section className="section container journey-preview"><div><p className="eyebrow">03 / THE JOURNEY</p><h2>A business analyst’s rigor.<br /><em>A product owner’s mindset.</em></h2><p>From customer operations to owning an event-booking MVP and delivering global SaaS platforms, my work has always been about connecting the dots between people, problems, and possibilities.</p><Link className="text-link" to="/aboutMe">A little more about me <span aria-hidden="true">→</span></Link></div><div className="journey-list">{experience.slice(0, 4).map(item => <div key={item.company}><span>{item.company}</span><span>{item.title.split(' · ')[0]}</span><span>{item.dates}</span></div>)}</div></section>
    <div className="container"><ContactBanner /></div>
  </>;
}

export function ProjectsPage() {
  const [filter, setFilter] = useState('All products');
  const filtered = products.filter(product => filter === 'All products' || product.category === filter);
  return <div className="container page-section"><div className="page-heading"><p className="eyebrow">PRODUCT PORTFOLIO</p><h1>Work that moves<br /><em>the needle.</em></h1><p>Product strategy, discovery, and delivery across global SaaS, marketplaces, and fintech. Explore the problem, my contribution, and the outcome.</p></div><div className="filter-bar" role="group" aria-label="Filter products by domain">{['All products', 'B2B SaaS', 'B2C Marketplace', 'Fintech'].map(category => <button key={category} className={filter === category ? 'filter active' : 'filter'} aria-pressed={filter === category} onClick={() => setFilter(category)}>{category}</button>)}</div><p className="results-count" role="status">{filtered.length} {filtered.length === 1 ? 'product' : 'products'}</p><div className="product-grid">{filtered.map(product => <ProductCard key={product.id} product={product} index={products.indexOf(product)} />)}</div><p className="source-note">Metrics are drawn from my résumé. These summaries describe my contributions without sharing proprietary product artifacts.</p><ContactBanner /></div>;
}

export function AboutPage() {
  return <div className="container page-section"><div className="page-heading"><p className="eyebrow">ABOUT ME</p><h1>Curious by nature.<br /><em>Product-minded by choice.</em></h1><p>{profile.summary}</p></div><div className="about-layout"><div><img className="about-portrait" src={profile.portrait} alt={`Portrait of ${profile.name}`} width="112" height="112" /><h2>Building the bridge.</h2><p>My background in business analysis gives me a practical foundation for Product Management: understanding the real need, asking better questions, and helping teams agree on what to build next.</p><p>I’ve worked with global clients, engineers, designers, and QA teams to turn that understanding into roadmaps, prototypes, user stories, and validated releases. I bring both strategic thinking and hands-on delivery experience.</p><p>I’m now looking to bring that perspective to a Product Manager or Product Owner role, with a focus on meaningful customer outcomes and business growth.</p></div><aside className="about-card"><p className="eyebrow">AT A GLANCE</p><dl><div><dt>Credential</dt><dd>Certified Scrum Product Owner (CSPO)</dd></div><div><dt>Foundation</dt><dd>B.Tech · Information Technology</dd></div><div><dt>Experience</dt><dd>SaaS, B2B, B2C & fintech</dd></div><div><dt>Based in</dt><dd>Noida, India</dd></div></dl></aside></div><section className="section"><SectionHeading eyebrow="MY TOOLKIT" title="From discovery to delivery." /><div className="capability-grid four-columns">{capabilities.map(item => <article key={item.number}><span className="step-number">{item.number}</span><h3>{item.title}</h3><p>{item.description}</p><ul className="plain-list">{item.skills.map(skill => <li key={skill}>{skill}</li>)}</ul></article>)}</div></section><ContactBanner /></div>;
}

export function ResumePage() {
  return <div className="container page-section resume-page"><div className="resume-top"><div className="page-heading"><p className="eyebrow">EXPERIENCE & CREDENTIALS</p><h1>Divyansh Chaudhary<span className="accent">.</span></h1><p className="resume-subtitle">CSPO · Senior Business Analyst · Product Strategy & Agile Delivery</p><p className="resume-contact">Noida, India · <a href={`mailto:${profile.email}`}>{profile.email}</a> · <a href="tel:+917382971692">{profile.phone}</a></p></div><button className="button button-primary print-button" onClick={() => window.print()}>Print / Save PDF <span aria-hidden="true">↓</span></button></div><p className="print-hint">Use your browser’s “Save as PDF” option in the print dialog.</p><section className="resume-section"><h2>Profile</h2><p>{profile.summary} Seeking Product Management opportunities to drive innovation and business growth.</p></section><section className="resume-section"><h2>Experience</h2><div className="timeline">{experience.map(item => <article className="timeline-item" key={item.company}><div className="timeline-date">{item.dates}<span>{item.location}</span></div><div><h3>{item.company}</h3><p className="job-title">{item.title}</p><p>{item.description}</p><p className="job-highlight">{item.highlight}</p></div></article>)}</div></section><section className="resume-section"><h2>Product contributions</h2><div className="resume-products">{products.map(product => <article key={product.id}><h3>{product.name} <span>{product.region}</span></h3><p>{product.description}</p></article>)}</div></section><section className="resume-section"><h2>Capabilities</h2><div className="resume-skills">{capabilities.map(item => <div key={item.number}><h3>{item.title}</h3><p>{item.skills.join(' · ')}</p></div>)}</div><p>Tools & practices: Jira, Freshworks, Salesforce, Figma, BRD/FRD, API documentation, acceptance criteria, process mapping, stakeholder demos, and risk mitigation.</p></section><section className="resume-section"><h2>Education & certification</h2><div className="education-grid"><article><h3>Certified Scrum Product Owner</h3><p>CSPO</p></article><article><h3>B.Tech in Information Technology</h3><p>SCRIET (C.C.S University), Meerut · 2012–2016</p><p>Government scholarship for outstanding performance in engineering education.</p></article><article><h3>Meerut Public School · CBSE</h3><p>Class XII · 2012 · Science, with distinction</p><p>Class X · 2010 · With distinction</p></article></div></section><Link className="text-link resume-contact-link" to="/contact">Discuss a Product Management opportunity <Arrow /></Link></div>;
}

export function ContactPage() {
  const [copyStatus, setCopyStatus] = useState('');
  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopyStatus('Email copied to clipboard.');
    } catch (error) {
      setCopyStatus('Unable to copy automatically. Please select the email address below to copy it.');
    }
  }
  return <div className="container page-section contact-page"><div className="page-heading"><p className="availability"><span />Open to Product Management roles</p><p className="eyebrow">LET’S CONNECT</p><h1>Good products start<br />with a <em>conversation.</em></h1><p>Hiring a Product Manager or Product Owner? I’d love to hear about your team, the problems you’re solving, and where I can contribute.</p></div><div className="contact-layout"><section className="email-card"><p className="eyebrow">DROP ME A NOTE</p><h2><a href={`mailto:${profile.email}`}>{profile.email} <Arrow /></a></h2><p>Share the role, your product, and what success looks like.</p><div className="button-row"><a className="button button-primary" href={`mailto:${profile.email}?subject=Product%20Management%20opportunity`}>Write an email <Arrow /></a><button className="button button-secondary" onClick={copyEmail}>Copy email</button></div><p className="copy-status" role="status">{copyStatus}</p></section><div className="contact-options"><a href={profile.linkedin} target="_blank" rel="noopener noreferrer"><span><small>PROFESSIONAL PROFILE</small><strong>Connect on LinkedIn</strong><span className="sr-only">(opens in a new tab)</span></span><Arrow /></a><a href="tel:+917382971692"><span><small>PHONE</small><strong>{profile.phone}</strong></span><Arrow /></a><Link to="/resume"><span><small>THE FULL PICTURE</small><strong>View my résumé</strong></span><Arrow /></Link></div></div><p className="contact-location">◎ Based in Noida, India · Experienced with teams across US, EMEA, APAC, and AU.</p></div>;
}

export function NotFoundPage() {
  return <div className="container page-section page-heading"><p className="eyebrow">404 / PAGE NOT FOUND</p><h1>A fresh direction.</h1><p>This page doesn’t exist. Head back to the portfolio to explore my work.</p><Link className="button button-primary" to="/">Back to overview <Arrow /></Link></div>;
}
