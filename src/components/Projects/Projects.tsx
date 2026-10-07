import React from 'react';
import type { ProjectItem } from '../../types/portfolio.types';
import { formatRichText } from '../../utils/formatText';
import './Projects.css';

interface ProjectsProps {
  projects: ProjectItem[];
}

export const Projects: React.FC<ProjectsProps> = ({ projects }) => {
  return (
    <section className="ats-section ats-projects-section">
      <div className="ats-section-header">
        <h2 className="ats-section-title">FEATURED PROJECTS</h2>
      </div>

      <div className="ats-projects-list">
        {projects.map((project, idx) => (
          <div key={idx} className="ats-project-item">
            <div className="ats-project-header">
              <div className="ats-project-title-type">
                <span className="ats-project-title">{project.title}</span>
                <span className="ats-divider">—</span>
                <span className="ats-project-type">{project.type}</span>
              </div>
              <div className="ats-project-tech">
                {project.techStack.join(' · ')}
              </div>
            </div>

            <ul className="ats-bullets">
              {project.highlights.map((highlight, hIdx) => (
                <li key={hIdx} className="ats-bullet-item">
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
