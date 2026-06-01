import React, { useState, useEffect } from 'react';
import { Award, GraduationCap, FolderGit, Mail, Image, Sun, Moon, ArrowRight } from 'lucide-react';
import './index.css';

// Component imports
import Skills from './components/Skills';
import Education from './components/Education';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Gallery from './components/Gallery';

export default function App() {
  const [isLightMode, setIsLightMode] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme === 'light' || (!savedTheme && window.matchMedia('(prefers-color-scheme: light)').matches);
  });
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    if (isLightMode) {
      document.body.classList.add('light');
      localStorage.setItem('theme', 'light');
    } else {
      document.body.classList.remove('light');
      localStorage.setItem('theme', 'dark');
    }
  }, [isLightMode]);

  // Scroll listener to update active tab highlight
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'projects-section', 'experience-section', 'contact-section'];
      const scrollPosition = window.scrollY + 220;

      if (window.scrollY < 120) {
        setActiveSection('home');
        return;
      }

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Smooth scroll handler
  const scrollToSection = (id) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // offset for sticky header
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const navItems = [
    { id: 'home', label: '[HOME]', action: () => { setActiveSection('home'); window.scrollTo({ top: 0, behavior: 'smooth' }); } },
    { id: 'projects-section', label: '[PROJECTS]', action: () => scrollToSection('projects-section') },
    { id: 'experience-section', label: '[ABOUT]', action: () => scrollToSection('experience-section') },
    { id: 'contact-section', label: '[CONTACT]', action: () => scrollToSection('contact-section') }
  ];

  return (
    <div className="app-container">
      {/* Sticky Top Navigation (New Mockup Style) */}
      <header className="header-nav" style={{ borderBottom: 'none' }}>
        <div 
          className="brand" 
          onClick={() => { setActiveSection('home'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} 
          style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', fontSize: '24px', fontWeight: '500', color: 'var(--accent-purple)', filter: 'drop-shadow(0 0 4px var(--accent-purple-glow))' }}
        >
          &#123;/&#125;
        </div>
        
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <nav className="tabs-navigation" role="navigation">
            {navItems.map((item) => (
              <button
                key={item.id}
                className="tab-btn"
                onClick={item.action}
                style={{ 
                  color: activeSection === item.id ? 'var(--accent-purple)' : 'var(--text-secondary)', 
                  fontWeight: '500', 
                  fontSize: '12px', 
                  letterSpacing: '0.05em',
                  background: 'transparent',
                  border: 'none',
                  padding: '6px 12px',
                  cursor: 'pointer',
                  transition: 'color 0.15s ease'
                }}
              >
                <span>{item.label}</span>
              </button>
            ))}
          </nav>
          
          <button 
            className="theme-switch-btn"
            onClick={() => setIsLightMode(!isLightMode)}
            aria-label="Toggle Theme"
            title={isLightMode ? "Switch to Dark Mode" : "Switch to Light Mode"}
          >
            {isLightMode ? <Moon size={14} /> : <Sun size={14} />}
          </button>
        </div>
      </header>

      {/* 2-Column Hero Section matching the new UI/UX Mockup */}
      <section className="hero-section" style={{ borderBottom: 'none', padding: '40px 0 60px 0' }}>
        <div className="hero-grid">
          <div className="hero-left">
            <h1 className="hero-title" style={{ fontSize: '30px', fontWeight: '600', textTransform: 'uppercase', marginBottom: '8px', lineHeight: '1.2' }}>
              FULL-STACK ENGINEER<br />
              &amp; SYSTEMS ARCHITECT
            </h1>
            
            <p className="hero-tagline" style={{ fontSize: '13px', fontWeight: '500', color: 'var(--text-primary)', marginBottom: '12px', letterSpacing: '0.01em' }}>
              Crafting high-performance, self-hosted web applications.
            </p>
            
            <p className="hero-desc" style={{ fontSize: '13px', maxWidth: '440px', marginBottom: '24px', color: 'var(--text-secondary)', lineHeight: '1.6' }}>
              I am an Information Technology student at I2IT, specializing in building end-to-end web applications using the MERN Stack and Python. From optimizing database queries to self-hosting production apps on dedicated Linux servers, I bridge the gap between clean frontend UI and robust DevOps pipelines.
            </p>

            <div style={{ display: 'flex', gap: '12px' }}>
              <button 
                className="form-submit-btn" 
                onClick={() => scrollToSection('projects-section')}
                style={{ 
                  padding: '10px 20px', 
                  fontSize: '11px', 
                  fontWeight: '600', 
                  textTransform: 'uppercase', 
                  letterSpacing: '0.05em',
                  boxShadow: '0 0 10px var(--accent-purple-glow)' 
                }}
              >
                View My Projects
              </button>
              <a 
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="project-btn" 
                style={{ 
                  padding: '10px 20px', 
                  fontSize: '11px', 
                  fontWeight: '600', 
                  textTransform: 'uppercase', 
                  letterSpacing: '0.05em',
                  textDecoration: 'none',
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                Read My Resume
              </a>
            </div>
          </div>

          <div className="hero-right">
            {/* Tech Stack 2x2 Grid inside Corner Brackets */}
            <div className="tech-grid-wrapper">
              <span className="corner-bracket top-left"></span>
              <span className="corner-bracket top-right"></span>
              <span className="corner-bracket bottom-left"></span>
              <span className="corner-bracket bottom-right"></span>
              
              <div className="tech-grid">
                {/* React Icon */}
                <div className="tech-icon-box" title="React">
                  <svg viewBox="0 0 100 100" width="36" height="36" stroke="currentColor" strokeWidth="2.5" fill="none">
                    <circle cx="50" cy="50" r="8" fill="currentColor" />
                    <ellipse cx="50" cy="50" rx="38" ry="14" />
                    <ellipse cx="50" cy="50" rx="38" ry="14" transform="rotate(60 50 50)" />
                    <ellipse cx="50" cy="50" rx="38" ry="14" transform="rotate(120 50 50)" />
                  </svg>
                </div>
                
                {/* Node.js Icon */}
                <div className="tech-icon-box" title="Node.js">
                  <svg viewBox="0 0 24 24" width="36" height="36" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2L2 7v10l10 5 10-5V7L12 2z" />
                    <path d="M12 22V12" />
                    <path d="M2 7l10 5 10-5" />
                    <circle cx="12" cy="17" r="2" fill="currentColor" />
                  </svg>
                </div>
                
                {/* MongoDB Icon */}
                <div className="tech-icon-box" title="MongoDB">
                  <svg viewBox="0 0 24 24" width="36" height="36" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2c0 0-5 4-5 10s5 10 5 10 5-4 5-10-5-10-5-10z" />
                    <path d="M12 2v20" />
                  </svg>
                </div>
                
                {/* Tailwind CSS Icon */}
                <div className="tech-icon-box" title="Tailwind CSS">
                  <svg viewBox="0 0 24 24" width="36" height="36" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 3a4.5 4.5 0 0 0-4.5 4.5c0 .77.19 1.5.53 2.14L3 17.5a1 1 0 0 0 1 1.5h10.5a4.5 4.5 0 0 0 4.5-4.5c0-.77-.19-1.5-.53-2.14L21 6.5A1 1 0 0 0 20 5H9.5A4.5 4.5 0 0 0 12 3z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Sections */}
      <main style={{ display: 'flex', flexDirection: 'column', gap: '64px' }}>
        {/* Projects Section */}
        <section id="projects-section" className="scroll-section" style={{ borderTop: '0.5px solid var(--border-color)', paddingTop: '40px' }}>
          <Projects />
        </section>

        <hr style={{ border: '0', borderTop: '0.5px solid var(--border-color)' }} />

        {/* Experience & Skills Section */}
        <section id="experience-section" className="scroll-section" style={{ display: 'flex', flexDirection: 'column', gap: '48px' }}>
          <div>
            <Skills />
          </div>
          <div>
            <Education />
          </div>
        </section>

        <hr style={{ border: '0', borderTop: '0.5px solid var(--border-color)' }} />

        {/* Professional Gallery Section */}
        <section id="gallery-section" className="scroll-section">
          <Gallery />
        </section>

        <hr style={{ border: '0', borderTop: '0.5px solid var(--border-color)' }} />

        {/* Contact Section */}
        <section id="contact-section" className="scroll-section">
          <Contact />
        </section>
      </main>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} Irfan. Built with React, Express, & MongoDB. All rights reserved.</p>
      </footer>
    </div>
  );
}
