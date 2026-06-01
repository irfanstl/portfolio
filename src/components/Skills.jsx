import React, { useEffect, useState } from 'react';
import { Code, Server, Wrench, Award } from 'lucide-react';
import { staticSkills } from '../data/portfolioData';

const iconMap = {
  Code: <Code className="accent-icon" size={14} />,
  Server: <Server className="accent-icon" size={14} />,
  Wrench: <Wrench className="accent-icon" size={14} />
};

export default function Skills() {
  const [categories] = useState(staticSkills);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setAnimate(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="tab-content">
      <h2 className="section-title">
        CORE SKILLS
      </h2>

      <div className="skills-grid">
        {categories.map((cat, idx) => (
          <div className="card" key={cat._id || idx}>
            <h3 className="skill-category-title">
              {iconMap[cat.icon] || <Code className="accent-icon" size={14} />}
              <span>{cat.title}</span>
            </h3>
            
            <div className="skills-list">
              {cat.skills.map((skill, sIdx) => (
                <div className="skill-item" key={sIdx}>
                  <div className="skill-info">
                    <span className="skill-name">{skill.name}</span>
                    <span className="skill-pct">{skill.pct}%</span>
                  </div>
                  <div className="skill-bar-bg">
                    <div 
                      className="skill-bar-fill" 
                      style={{ width: animate ? `${skill.pct}%` : '0%', backgroundColor: 'var(--accent-purple)' }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>

            {cat.tags && cat.tags.length > 0 && (
              <div style={{ marginTop: '16px' }}>
                <h4 className="card-subtitle-label">Libraries & Concepts</h4>
                <div className="tag-list">
                  {cat.tags.map((tag, tIdx) => (
                    <span className="tag" key={tIdx}>{tag}</span>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
