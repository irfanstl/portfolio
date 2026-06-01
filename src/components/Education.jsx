import React, { useEffect, useState } from 'react';
import { BookOpen } from 'lucide-react';
import { staticEducation } from '../data/portfolioData';

export default function Education() {
  const [educationList] = useState(staticEducation);

  return (
    <div className="tab-content">
      <h2 className="section-title">
        EDUCATION
      </h2>
      
      <div className="timeline">
        {educationList.map((edu, idx) => (
          <div className="timeline-item" key={edu._id || idx}>
            <div className="timeline-dot"></div>
            
            <div className="card">
              <div className="timeline-header">
                <h3 className="card-title" style={{ fontSize: '15px', fontWeight: '500' }}>{edu.degree}</h3>
                <span className="timeline-date" style={{ fontSize: '11px', color: 'var(--text-muted)' }}>{edu.period}</span>
              </div>
              
              <div className="timeline-institution" style={{ fontSize: '13px', color: 'var(--text-secondary)', marginBottom: '8px' }}>{edu.institution}</div>
              
              <div style={{ marginBottom: '12px' }}>
                <span className="timeline-grade" style={{ fontSize: '11px', color: 'var(--accent-purple)', backgroundColor: 'var(--accent-purple-tint)', border: '0.5px solid var(--accent-purple)', padding: '2px 6px', borderRadius: '3px' }}>{edu.grade}</span>
              </div>
              
              {edu.courses && edu.courses.length > 0 && (
                <div>
                  <h4 className="card-subtitle-label" style={{ fontSize: '10px', fontWeight: '500', color: 'var(--text-muted)', letterSpacing: '0.05em', marginBottom: '8px', textTransform: 'uppercase' }}>Core Focus Area</h4>
                  <div className="tag-list" style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                    {edu.courses.map((course, cIdx) => (
                      <span className="tag" key={cIdx} style={{ backgroundColor: '#27272a', border: 'none', color: '#e4e4e7', fontSize: '10px', padding: '2px 8px', borderRadius: '3px' }}>{course}</span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* CS Fundamentals Function Matrix Table */}
      <div style={{ marginTop: '32px' }}>
        <h3 className="section-title" style={{ marginBottom: '16px' }}>CS FUNDAMENTALS FUNCTION MATRIX</h3>
        <div style={{ overflowX: 'auto', border: '0.5px solid var(--border-color)', borderRadius: 'var(--border-radius)', backgroundColor: 'var(--bg-card)' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '12px', textAlign: 'left' }}>
            <thead>
              <tr style={{ borderBottom: '0.5px solid var(--border-color)', backgroundColor: 'rgba(255, 255, 255, 0.01)' }}>
                <th style={{ padding: '12px', fontWeight: '500', color: 'var(--text-primary)', textTransform: 'uppercase', fontSize: '10px', letterSpacing: '0.05em', borderRight: '0.5px solid var(--border-color)' }}>Discipline Area</th>
                <th style={{ padding: '12px', fontWeight: '500', color: 'var(--text-primary)', textTransform: 'uppercase', fontSize: '10px', letterSpacing: '0.05em', borderRight: '0.5px solid var(--border-color)' }}>Core Concepts</th>
                <th style={{ padding: '12px', fontWeight: '500', color: 'var(--text-primary)', textTransform: 'uppercase', fontSize: '10px', letterSpacing: '0.05em' }}>Project Implementation Application</th>
              </tr>
            </thead>
            <tbody>
              <tr style={{ borderBottom: '0.5px solid var(--border-color)' }}>
                <td style={{ padding: '12px', fontWeight: '500', color: 'var(--accent-purple)', borderRight: '0.5px solid var(--border-color)' }}>Data Structures & Algorithms (DSA)</td>
                <td style={{ padding: '12px', color: 'var(--text-secondary)', borderRight: '0.5px solid var(--border-color)' }}>Arrays, Linked Lists, Trees, Stacks, Queues, Sorting & Searching</td>
                <td style={{ padding: '12px', color: 'var(--text-muted)' }}>Writing computationally efficient logic, minimizing time complexity in frontend filtering.</td>
              </tr>
              <tr style={{ borderBottom: '0.5px solid var(--border-color)' }}>
                <td style={{ padding: '12px', fontWeight: '500', color: 'var(--accent-purple)', borderRight: '0.5px solid var(--border-color)' }}>Object-Oriented Programming (OOP)</td>
                <td style={{ padding: '12px', color: 'var(--text-secondary)', borderRight: '0.5px solid var(--border-color)' }}>Encapsulation, Inheritance, Polymorphism, Abstraction</td>
                <td style={{ padding: '12px', color: 'var(--text-muted)' }}>Structuring backend controllers, models, and reusable modular UI components.</td>
              </tr>
              <tr>
                <td style={{ padding: '12px', fontWeight: '500', color: 'var(--accent-purple)', borderRight: '0.5px solid var(--border-color)' }}>Relational Database Systems</td>
                <td style={{ padding: '12px', color: 'var(--text-secondary)', borderRight: '0.5px solid var(--border-color)' }}>Schema Design, Normalization, Complex JOIN Queries, Indexing</td>
                <td style={{ padding: '12px', color: 'var(--text-muted)' }}>Structuring transactional data for user profiles, relational order tracking, and inventory tables.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
