import React, { useState, useEffect } from 'react';
import { FolderGit, ExternalLink, Info, X } from 'lucide-react';
import { Github } from './Icons';
import { staticProjects } from '../data/portfolioData';

export default function Projects() {
  const [projectList] = useState(staticProjects);
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <div className="tab-content">
      <h2 className="section-title">
        PROJECTS
      </h2>

      <div className="projects-grid">
        {projectList.map((project) => (
          <div className="card project-card" key={project._id || project.id} style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%', minHeight: '220px' }}>
            <div className="project-info" style={{ display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
              <h3 className="card-title" style={{ fontSize: '15px', fontWeight: '500', marginBottom: '8px', color: 'var(--text-primary)' }}>{project.title}</h3>
              <p className="project-desc" style={{ fontSize: '12px', color: 'var(--text-secondary)', marginBottom: '12px', lineHeight: '1.5', flexGrow: 1 }}>{project.tagline}</p>
              
              <div className="tag-list" style={{ marginBottom: '16px', display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                {project.stack.map((tech, index) => {
                  const tagText = tech.startsWith('#') ? tech : `#${tech}`;
                  return (
                    <span className="tag" key={index} style={{ backgroundColor: '#27272a', border: 'none', color: '#e4e4e7', fontSize: '10px', padding: '2px 8px', borderRadius: '3px' }}>
                      {tagText}
                    </span>
                  );
                })}
              </div>
            </div>
            
            <div className="project-footer" style={{ display: 'flex', gap: '8px', width: '100%', marginTop: 'auto' }}>
              {project.demo && (
                <a 
                  href={project.demo} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="form-submit-btn" 
                  style={{ 
                    flex: 1,
                    padding: '6px 0', 
                    fontSize: '10px', 
                    fontWeight: '600',
                    textDecoration: 'none',
                    textTransform: 'uppercase',
                    textAlign: 'center',
                    backgroundColor: 'var(--accent-purple)',
                    color: '#09090b',
                    lineHeight: '1.2',
                    borderRadius: 'var(--border-radius)',
                    display: 'inline-block'
                  }}
                >
                  View Demo
                </a>
              )}
              {project.github && (
                <a 
                  href={project.github} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="form-submit-btn" 
                  style={{ 
                    flex: 1,
                    padding: '6px 0', 
                    fontSize: '10px', 
                    fontWeight: '600',
                    textDecoration: 'none',
                    textTransform: 'uppercase',
                    textAlign: 'center',
                    backgroundColor: 'var(--accent-purple)',
                    color: '#09090b',
                    lineHeight: '1.2',
                    borderRadius: 'var(--border-radius)',
                    display: 'inline-block'
                  }}
                >
                  GitHub Code
                </a>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Details Modal */}
      {selectedProject && (
        <div className="modal-overlay" onClick={() => setSelectedProject(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close-btn" onClick={() => setSelectedProject(null)}>
              <X size={14} />
            </button>
            
            <img src={selectedProject.img} alt={selectedProject.title} className="modal-img" />
            
            <div className="modal-body">
              <h3 className="card-title" style={{ fontSize: '18px', marginBottom: '8px' }}>{selectedProject.title}</h3>
              <p className="card-desc" style={{ marginBottom: '16px' }}>{selectedProject.desc}</p>
              
              <hr style={{ border: '0', borderTop: '0.5px solid var(--border-color)', margin: '16px 0' }} />
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {selectedProject.metrics && (
                  <div>
                    <h4 className="modal-detail-title">PROJECT HIGHLIGHTS</h4>
                    <ul style={{ listStyleType: 'none', display: 'flex', flexDirection: 'column', gap: '4px', fontSize: '13px', color: 'var(--text-secondary)' }}>
                      {(selectedProject.metrics.performance || selectedProject.metrics.dataHandling) && (
                        <li>
                          <strong>Performance:</strong> {selectedProject.metrics.performance || selectedProject.metrics.dataHandling}
                        </li>
                      )}
                      {(selectedProject.metrics.conversion || selectedProject.metrics.efficiency) && (
                        <li>
                          <strong>Impact:</strong> {selectedProject.metrics.conversion || selectedProject.metrics.efficiency}
                        </li>
                      )}
                      {(selectedProject.metrics.dbSpeed || selectedProject.metrics.uptime || selectedProject.metrics.latency) && (
                        <li>
                          <strong>Reliability:</strong> {selectedProject.metrics.dbSpeed || selectedProject.metrics.uptime || selectedProject.metrics.latency}
                        </li>
                      )}
                    </ul>
                  </div>
                )}
                
                {selectedProject.challenge && (
                  <div>
                    <h4 className="modal-detail-title">ENGINEERING CHALLENGE</h4>
                    <p className="card-desc">{selectedProject.challenge}</p>
                  </div>
                )}
                
                {selectedProject.solution && (
                  <div>
                    <h4 className="modal-detail-title">APPLIED SOLUTION</h4>
                    <p className="card-desc">{selectedProject.solution}</p>
                  </div>
                )}
              </div>
              
              <div style={{ display: 'flex', gap: '12px', marginTop: '24px' }}>
                {selectedProject.github && (
                  <a 
                    href={selectedProject.github} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="form-submit-btn" 
                    style={{ textDecoration: 'none', flexGrow: 1, gap: '6px' }}
                  >
                    <Github size={14} />
                    Browse Repository
                  </a>
                )}
                {selectedProject.demo && (
                  <a 
                    href={selectedProject.demo} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="form-submit-btn" 
                    style={{ textDecoration: 'none', flexGrow: 1, gap: '6px', backgroundColor: 'var(--bg-secondary)', border: '0.5px solid var(--border-color)', color: 'var(--text-primary)' }}
                  >
                    <ExternalLink size={14} />
                    Launch Live Demo
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
