import React, { useState } from 'react';
import {
  ArrowDown, ArrowUpRight, Code2, Database, Globe, Layers3, Menu,
  Github, Linkedin, Mail, MapPin, X, CheckCircle2, Sparkles
} from 'lucide-react';

const skills = [
  { name: 'HTML5', type: 'Frontend', level: 'Structure' },
  { name: 'CSS3', type: 'Frontend', level: 'Styling' },
  { name: 'JavaScript', type: 'Frontend', level: 'Interactivity' },
  { name: 'React', type: 'Frontend', level: 'UI development' },
  { name: 'PHP', type: 'Backend', level: 'Server-side' },
  { name: 'MySQL', type: 'Database', level: 'Data management' },
];

const projects = [
  {
    number: '01',
    name: 'Just Edith Beauty Parlour',
    category: 'Beauty business platform',
    description: 'A beauty parlour web application designed to bring service bookings, customer interactions and business administration together in one place.',
    features: ['Service booking experience', 'Admin dashboard and customer management', 'Product and sales management', 'Ratings and private customer chats'],
    stack: ['React', 'PHP', 'MySQL', 'JavaScript', 'CSS'],
    className: 'beauty',
    mark: 'JE',
  },
  {
    number: '02',
    name: 'Gadget Store',
    category: 'E-commerce application',
    description: 'An online shopping experience for browsing electronics, managing shopping lists and moving through the purchase journey.',
    features: ['Product catalogue and management', 'Shopping cart and wishlist', 'Product comparison', 'Checkout flow'],
    stack: ['React', 'PHP', 'MySQL', 'JavaScript', 'CSS'],
    className: 'gadget',
    mark: 'GS',
  },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState('All');
  const [copied, setCopied] = useState(false);

  const closeMenu = () => setMenuOpen(false);
  const filters = ['All', 'Frontend', 'Backend', 'Database'];
  const visibleSkills = activeFilter === 'All' ? skills : skills.filter(s => s.type === activeFilter);

  const copyEmail = async () => {
    const email = 'martinsakang54@gmail.com';
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      window.location.href = `mailto:${email}`;
    }
  };

  return (
    <>
      <header className="site-header">
        <a className="brand" href="#home" onClick={closeMenu}><span className="brand-mark">M</span><span>Martin<span className="brand-dot">.</span></span></a>
        <button className="menu-toggle" aria-label="Toggle navigation" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu />}</button>
        <nav className={menuOpen ? 'nav open' : 'nav'}>
          {['Home', 'About', 'Skills', 'Projects', 'Contact'].map(item =>
            <a key={item} href={`#${item.toLowerCase()}`} onClick={closeMenu}>{item}</a>
          )}
          <a className="nav-cta" href="#contact" onClick={closeMenu}>Let's talk <ArrowUpRight size={15} /></a>
        </nav>
      </header>

      <main>
        <section className="hero section-wrap" id="home">
          <div className="hero-copy">
            <div className="eyebrow"><span className="status-dot" /> AVAILABLE FOR OPPORTUNITIES</div>
            <p className="hero-kicker">Hello, I'm</p>
            <h1>Martin <span className="gradient-text">Mwiti.</span></h1>
            <h2>Full-Stack Web Developer</h2>
            <p className="hero-description">I build thoughtful, responsive web experiences — from polished user interfaces to the server-side systems and databases that power them.</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#projects">Explore my work <ArrowUpRight size={17} /></a>
              <a className="button button-ghost" href="#contact">Get in touch <Mail size={16} /></a>
            </div>
            <div className="hero-meta"><span><MapPin size={15} /> Kenya</span><span className="meta-separator" /><span>Frontend · Backend · Database</span></div>
          </div>
          <div className="hero-art" aria-label="Developer illustration">
            <div className="orbit orbit-one" /><div className="orbit orbit-two" />
            <div className="hero-glow" />
            <div className="portrait-frame"><img src="/profile-portrait.png" alt="Martin Mwiti profile portrait illustration" /></div>
            <div className="code-window">
              <div className="window-top"><div className="window-dots"><i /><i /><i /></div><span>developer.js</span><span className="window-lock">●</span></div>
              <div className="code-content">
                <div><span className="line-no">01</span><span className="code-purple">const</span> <span className="code-blue">developer</span> = {'{'}</div>
                <div><span className="line-no">02</span>&nbsp;&nbsp;name: <span className="code-green">'Martin Mwiti'</span>,</div>
                <div><span className="line-no">03</span>&nbsp;&nbsp;role: <span className="code-green">'Full-Stack Developer'</span>,</div>
                <div><span className="line-no">04</span>&nbsp;&nbsp;skills: [</div>
                <div><span className="line-no">05</span>&nbsp;&nbsp;&nbsp;&nbsp;<span className="code-yellow">'React'</span>, <span className="code-yellow">'PHP'</span>,</div>
                <div><span className="line-no">06</span>&nbsp;&nbsp;&nbsp;&nbsp;<span className="code-yellow">'JavaScript'</span>, <span className="code-yellow">'MySQL'</span></div>
                <div><span className="line-no">07</span>&nbsp;&nbsp;]</div>
                <div><span className="line-no">08</span>{'}'};</div>
                <div className="code-cursor"><span className="line-no">09</span><span className="code-purple">console</span>.log(<span className="code-green">'Building something great.'</span>);<b /></div>
              </div>
            </div>
            <div className="float-chip chip-react"><span>⚛</span> React</div>
            <div className="float-chip chip-db"><Database size={16} /> MySQL</div>
            <div className="float-chip chip-php"><Code2 size={16} /> PHP</div>
          </div>
          <a href="#about" className="scroll-cue"><span /> Scroll to explore <ArrowDown size={14} /></a>
        </section>

        <section className="about section-wrap section-pad" id="about">
          <div className="section-label">01 / ABOUT ME</div>
          <div className="about-grid">
            <div><h2 className="section-title">Turning ideas into <span className="gradient-text">useful digital</span> experiences.</h2></div>
            <div className="about-copy">
              <p>I'm Martin Mwiti, a Full-Stack Web Developer focused on creating responsive, user-friendly web applications. I enjoy working across the development process — shaping the interface, building application logic and connecting data.</p>
              <p>My toolkit includes HTML, CSS, JavaScript, React, PHP and MySQL. I value clean design, practical problem-solving and building products that make everyday tasks easier.</p>
              <div className="about-highlights">
                <div><strong>06</strong><span>Core technologies</span></div>
                <div><strong>02</strong><span>Featured projects</span></div>
                <div><strong>∞</strong><span>Ideas to build</span></div>
              </div>
            </div>
          </div>
        </section>

        <section className="skills section-wrap section-pad" id="skills">
          <div className="section-label">02 / WHAT I WORK WITH</div>
          <div className="section-heading-row"><h2 className="section-title">My <span className="gradient-text">toolkit.</span></h2><p>Technologies I use to design, develop and power web applications.</p></div>
          <div className="filter-row" role="group" aria-label="Filter skills">
            {filters.map(f => <button key={f} className={activeFilter === f ? 'filter active' : 'filter'} onClick={() => setActiveFilter(f)}>{f}</button>)}
          </div>
          <div className="skills-grid">
            {visibleSkills.map((skill, i) => <article className="skill-card" key={skill.name}><div className="skill-icon">{skill.name === 'MySQL' ? <Database /> : skill.name === 'React' ? <Layers3 /> : skill.name === 'PHP' ? <Code2 /> : <Globe />}</div><div><h3>{skill.name}</h3><p>{skill.level}</p></div><span className="skill-index">0{i + 1}</span></article>)}
          </div>
        </section>

        <section className="projects section-wrap section-pad" id="projects">
          <div className="section-label">03 / SELECTED WORK</div>
          <div className="section-heading-row"><h2 className="section-title">Projects I've <span className="gradient-text">built.</span></h2><p>A look at practical applications I've worked on.</p></div>
          <div className="projects-grid">
            {projects.map(project => <article className={`project-card ${project.className}`} key={project.number}>
              <div className="project-visual"><div className="project-visual-top"><span>FEATURED PROJECT / {project.number}</span><span className="project-open"><ArrowUpRight size={18} /></span></div><div className="project-monogram">{project.mark}</div><div className="visual-caption">{project.category}</div></div>
              <div className="project-info"><div className="project-number">{project.number} — PERSONAL PROJECT</div><span className="project-status">In development · Not deployed yet</span><h3>{project.name}</h3><p>{project.description}</p><ul>{project.features.map(feature => <li key={feature}><CheckCircle2 size={14} />{feature}</li>)}</ul><div className="tag-list">{project.stack.map(tag => <span key={tag}>{tag}</span>)}</div></div>
            </article>)}
          </div>
          <p className="project-note"><Sparkles size={15} /> These are personal development projects. Live demo and repository links will be added when they are published.</p>
        </section>

        <section className="contact section-wrap section-pad" id="contact">
          <div className="section-label">04 / LET'S CONNECT</div>
          <div className="contact-panel">
            <div className="contact-orb" />
            <div className="contact-content"><p className="contact-kicker">HAVE A PROJECT IN MIND?</p><h2>Let's build something <span className="gradient-text">meaningful.</span></h2><p>I'm open to discussing web development opportunities, collaborations and interesting ideas.</p><a className="button button-primary" href="mailto:martinsakang54@gmail.com">Email Martin <ArrowUpRight size={17} /></a></div>
            <div className="contact-details">
              <div><span>EMAIL</span><button className="contact-value" onClick={copyEmail}>{copied ? 'Copied!' : 'martinsakang54@gmail.com'}</button></div>
              <div><span>PHONE</span><a className="contact-value" href="tel:+254796368348">0796368348</a></div>
              <div><span>LOCATION</span><p className="contact-value">Kenya</p></div>
              <div><span>GITHUB</span><a className="contact-value muted-link" href="https://github.com/sakang401" target="_blank" rel="noreferrer">github.com/sakang401 <ArrowUpRight size={14} /></a></div>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer section-wrap"><a className="brand" href="#home"><span className="brand-mark">M</span><span>Martin<span className="brand-dot">.</span></span></a><p>Designed & built by Martin Mwiti · <span>{new Date().getFullYear()}</span></p><a href="#home" className="back-top">Back to top ↑</a></footer>
    </>
  );
}

export default App;
