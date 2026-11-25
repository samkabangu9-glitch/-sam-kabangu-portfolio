import React, { useState } from 'react';
import {
  ArrowDown, ArrowRight, ArrowUpRight, AtSign, BriefcaseBusiness, Check,
  Code2, Database, Download, Github, GraduationCap, Linkedin, Mail,
  Menu, Monitor, Network, ShieldCheck, Sparkles, Terminal, X
} from 'lucide-react';
import { profile, skills, projects, experiences } from './data';

const navItems = [
  ['À propos', '#about'], ['Compétences', '#skills'], ['Projets', '#projects'],
  ['Parcours', '#journey'], ['Contact', '#contact']
];

function SectionHeading({ eyebrow, title, text }) {
  return <div className="section-heading">
    <span className="eyebrow">{eyebrow}</span>
    <h2>{title}</h2>
    {text && <p>{text}</p>}
  </div>;
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [expanded, setExpanded] = useState(null);
  const closeMenu = () => setMenuOpen(false);

  const mailLink = `mailto:${profile.email}?subject=${encodeURIComponent('Prise de contact — Portfolio')}`;
  const whatsappLink = `https://wa.me/${profile.whatsapp}`;

  return <div className="site-shell">
    <header className="topbar">
      <a className="brand" href="#home" onClick={closeMenu} aria-label="Sam Kabangu, accueil">
        <span className="brand-mark">SK</span><span>Sam Kabangu<span className="brand-dot">.</span></span>
      </a>
      <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Ouvrir le menu">
        {menuOpen ? <X size={22}/> : <Menu size={22}/>}
      </button>
      <nav className={menuOpen ? 'nav nav-open' : 'nav'}>
        {navItems.map(([label, href]) => <a key={href} href={href} onClick={closeMenu}>{label}</a>)}
        <a className="nav-cta" href="#contact" onClick={closeMenu}>Me contacter <ArrowUpRight size={15}/></a>
      </nav>
    </header>

    <main>
      <section className="hero section-wrap" id="home">
        <div className="hero-copy">
          <div className="availability"><span className="availability-dot"></span> Ouvert aux opportunités professionnelles</div>
          <p className="hero-kicker">Bonjour, je suis</p>
          <h1>Sam <span>Kabangu.</span></h1>
          <h2>Je transforme les idées en <em>solutions numériques.</em></h2>
          <p className="hero-intro">Étudiant en informatique de gestion et développeur web en construction, je m'intéresse à la conception d'outils numériques qui simplifient le travail et répondent à des besoins concrets.</p>
          <div className="hero-actions">
            <a className="button button-primary" href="#projects">Découvrir mes projets <ArrowRight size={17}/></a>
            <a className="button button-quiet" href="#contact">Entrer en contact <ArrowUpRight size={17}/></a>
          </div>
          <div className="hero-meta">
            <span><span className="meta-line"></span>{profile.location}</span>
            <span>Informatique · Gestion · Innovation</span>
          </div>
        </div>
        <div className="hero-visual" aria-label="Illustration abstraite de développement numérique">
          <div className="visual-glow"></div>
          <div className="visual-card">
            <div className="visual-top"><span></span><span></span><span></span><small>sam-kabangu.dev</small></div>
            <div className="code-window">
              <div className="code-line"><i>01</i><b className="code-purple">const</b> <strong>vision</strong> = {'{'}</div>
              <div className="code-line indent"><i>02</i><span className="code-blue">problème</span>: <span className="code-green">'comprendre'</span>,</div>
              <div className="code-line indent"><i>03</i><span className="code-blue">solution</span>: <span className="code-green">'concevoir'</span>,</div>
              <div className="code-line indent"><i>04</i><span className="code-blue">impact</span>: <span className="code-green">'améliorer'</span></div>
              <div className="code-line"><i>05</i>{'}'};</div>
              <div className="code-gap"></div>
              <div className="code-line"><i>06</i><b className="code-purple">function</b> <strong>innover</strong>() {'{'}</div>
              <div className="code-line indent"><i>07</i><b className="code-purple">return</b> vision.impact;</div>
              <div className="code-line"><i>08</i>{'}'}</div>
              <div className="code-cursor"></div>
            </div>
            <div className="visual-footer"><span><span className="tiny-green"></span> En apprentissage continu</span><span>Kinshasa, RDC</span></div>
          </div>
          <div className="floating-chip chip-one"><Code2 size={16}/> Développement web</div>
          <div className="floating-chip chip-two"><Database size={16}/> Gestion des données</div>
          <div className="visual-index">01 <span>/</span> 05</div>
        </div>
        <a className="scroll-cue" href="#about"><span>Défiler pour découvrir</span><ArrowDown size={16}/></a>
      </section>

      <section className="intro-strip">
        <div className="section-wrap strip-inner">
          <span>MA CONVICTION</span>
          <p>La technologie prend tout son sens lorsqu'elle <strong>résout un problème réel.</strong></p>
          <Sparkles size={20}/>
        </div>
      </section>

      <section className="section-wrap content-section about-section" id="about">
        <div className="about-aside"><span className="section-number">01 / À PROPOS</span><div className="aside-rule"></div><span className="aside-note">Curiosité<br/>· Méthode<br/>· Progression</span></div>
        <div className="about-main">
          <SectionHeading eyebrow="Qui suis-je ?" title={<>L'informatique au service<br/><span>des besoins humains.</span></>} />
          <div className="about-grid">
            <p className="about-lead">Je suis <strong>Sam Kabangu</strong>, étudiant en informatique de gestion à Kinshasa. Mon parcours me permet de relier les besoins des organisations aux possibilités offertes par les outils informatiques.</p>
            <div className="about-detail">
              <p>Je développe progressivement mes compétences en développement web, bases de données, systèmes et réseaux. J'aime comprendre le fonctionnement des choses, apprendre par la pratique et transformer une idée en un outil utile.</p>
              <p>Au-delà du code, je m'intéresse à la transmission des connaissances et à la modernisation des méthodes de travail, notamment dans le contexte des entreprises et organisations en RDC.</p>
              <a className="text-link" href="#journey">Voir mon parcours <ArrowUpRight size={16}/></a>
            </div>
          </div>
          <div className="principles">
            <div><span>01</span><h3>Comprendre</h3><p>Identifier le besoin avant de choisir la technologie.</p></div>
            <div><span>02</span><h3>Construire</h3><p>Concevoir des solutions simples, cohérentes et utiles.</p></div>
            <div><span>03</span><h3>Progresser</h3><p>Apprendre continuellement et améliorer chaque réalisation.</p></div>
          </div>
        </div>
      </section>

      <section className="skills-section" id="skills">
        <div className="section-wrap content-section">
          <SectionHeading eyebrow="02 / COMPÉTENCES" title={<>Des bases solides,<br/><span>une progression continue.</span></>} text="Les domaines et outils que j'explore et mobilise dans mes apprentissages et mes projets." />
          <div className="skills-grid">
            {skills.map((group, idx) => {
              const icons = [<Code2/>, <Database/>, <Network/>, <Monitor/>, <ShieldCheck/>];
              return <article className="skill-card" key={group.category}>
                <div className="skill-card-top"><span className="skill-icon">{icons[idx]}</span><span className="skill-count">0{idx+1}</span></div>
                <h3>{group.category}</h3>
                <div className="skill-tags">{group.items.map(item => <span key={item}>{item}</span>)}</div>
              </article>;
            })}
          </div>
          <p className="skills-footnote"><span className="footnote-mark">i</span> Certaines technologies sont en cours d'apprentissage. Je privilégie une présentation honnête de mon niveau et de mon expérience.</p>
        </div>
      </section>

      <section className="section-wrap content-section projects-section" id="projects">
        <SectionHeading eyebrow="03 / SÉLECTION DE PROJETS" title={<>Des idées concrètes.<br/><span>Des solutions en construction.</span></>} text="Quelques projets académiques, pratiques et initiatives personnelles qui illustrent mon parcours." />
        <div className="project-list">
          {projects.map((project, idx) => <article className={`project-item ${expanded === idx ? 'project-expanded' : ''}`} key={project.number}>
            <div className="project-number">{project.number}</div>
            <div className="project-content">
              <span className="project-type">{project.type}</span>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              {expanded === idx && <div className="project-extra">
                <div><h4>Fonctionnalités / axes de travail</h4><ul>{project.details.map(d => <li key={d}><Check size={14}/>{d}</li>)}</ul></div>
                <div><h4>Technologies & méthodes</h4><div className="project-tags">{project.stack.map(s => <span key={s}>{s}</span>)}</div></div>
              </div>}
              <div className="project-bottom"><span className="project-status">{project.status}</span><button onClick={() => setExpanded(expanded === idx ? null : idx)}>{expanded === idx ? 'Réduire' : 'Détails du projet'} <ArrowUpRight size={15}/></button></div>
            </div>
            <div className="project-arrow"><ArrowUpRight size={20}/></div>
          </article>)}
        </div>
        <p className="project-disclaimer">Les projets sont présentés selon leur état actuel : conception, apprentissage ou développement. Les détails pourront être enrichis avec des captures, démonstrations et dépôts de code.</p>
      </section>

      <section className="journey-section" id="journey">
        <div className="section-wrap content-section journey-layout">
          <div className="journey-heading">
            <span className="eyebrow">04 / PARCOURS</span>
            <h2>Apprendre.<br/><span>Expérimenter.</span><br/>Évoluer.</h2>
            <p>Un parcours construit autour de la curiosité, de la pratique et de l'envie de contribuer à des projets utiles.</p>
          </div>
          <div className="timeline">
            {experiences.map((item, idx) => <article className="timeline-item" key={item.title}>
              <span className="timeline-dot"></span><span className="timeline-period">{item.period}</span>
              <h3>{item.title}</h3><h4>{item.place}</h4><p>{item.description}</p>
            </article>)}
            <article className="timeline-item timeline-future"><span className="timeline-dot"></span><span className="timeline-period">Objectif professionnel</span><h3>Contribuer à des projets numériques ambitieux</h3><p>Continuer à développer mes compétences et participer à la transformation numérique des organisations.</p></article>
          </div>
        </div>
      </section>

      <section className="services-section">
        <div className="section-wrap content-section">
          <SectionHeading eyebrow="05 / DOMAINES D'INTERVENTION" title={<>Comment je peux<br/><span>apporter ma contribution.</span></>} text="Des domaines dans lesquels je développe mes capacités pour accompagner les besoins numériques." />
          <div className="services-grid">
            <div><span className="service-icon"><Code2/></span><h3>Développement web</h3><p>Création et amélioration de sites et d'applications web adaptés à des besoins précis.</p></div>
            <div><span className="service-icon"><Database/></span><h3>Gestion des données</h3><p>Structuration de bases de données et conception de solutions de gestion de l'information.</p></div>
            <div><span className="service-icon"><BriefcaseBusiness/></span><h3>Solutions de gestion</h3><p>Réflexion sur la digitalisation de processus et l'amélioration des méthodes de travail.</p></div>
          </div>
        </div>
      </section>

      <section className="contact-section" id="contact">
        <div className="section-wrap contact-inner">
          <div className="contact-copy">
            <span className="eyebrow">06 / CONTACT</span>
            <h2>Parlons de votre<br/><span>prochain projet.</span></h2>
            <p>Une opportunité, une collaboration ou une idée à concrétiser ? Je serai heureux d'échanger avec vous.</p>
            <a className="button button-light" href={mailLink}>M'envoyer un e-mail <ArrowUpRight size={17}/></a>
          </div>
          <div className="contact-details">
            <a href={mailLink}><span className="contact-icon"><Mail size={18}/></span><span><small>E-mail</small>{profile.email}</span><ArrowUpRight size={17}/></a>
            <a href={whatsappLink} target="_blank" rel="noreferrer"><span className="contact-icon"><AtSign size={18}/></span><span><small>WhatsApp</small>{profile.phone}</span><ArrowUpRight size={17}/></a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer"><span className="contact-icon"><Linkedin size={18}/></span><span><small>LinkedIn</small>Voir mon profil</span><ArrowUpRight size={17}/></a>
            <a href={profile.github} target="_blank" rel="noreferrer"><span className="contact-icon"><Github size={18}/></span><span><small>GitHub</small>Voir mes dépôts</span><ArrowUpRight size={17}/></a>
            <div className="contact-location"><span className="location-dot"></span>{profile.location}</div>
          </div>
        </div>
      </section>
    </main>

    <footer className="footer">
      <div className="section-wrap footer-inner">
        <a className="brand footer-brand" href="#home"><span className="brand-mark">SK</span><span>Sam Kabangu<span className="brand-dot">.</span></span></a>
        <p>Construire avec intention. Progresser avec constance.</p>
        <span>© {new Date().getFullYear()} Sam Kabangu. Tous droits réservés.</span>
      </div>
    </footer>
  </div>;
}

export default App;