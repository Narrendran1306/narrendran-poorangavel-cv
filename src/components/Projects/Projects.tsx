import React from 'react';
import type { ProjectItem } from '../../types/portfolio.types';
import { formatRichText } from '../../utils/formatText';
import './Projects.css';

interface ProjectsProps {
  projects: ProjectItem[];
}

export const Projects: React.FC<ProjectsProps> = ({ projects }) => {
  return (
    <section className="projects-card">
      <div className="section-title-wrapper">
        <span className="section-pill"></span>
        <h2 className="section-title">FEATURED PROJECT</h2>
      </div>

      <div className="projects-list">
        {projects.map((project, idx) => (
          <div key={idx} className="project-item">
            <div className="project-header">
              <div className="project-title-type">
                <span className="project-title">{project.title}</span>
                <span className="project-separator">—</span>
                <span className="project-type">{project.type}</span>
              </div>
              <div className="project-tech-stack">
                {project.techStack.join(' · ')}
              </div>
            </div>

            <ul className="project-highlights">
              {project.highlights.map((highlight, hIdx) => (
                <li key={hIdx} className="highlight-bullet">
                  {formatRichText(highlight)}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
