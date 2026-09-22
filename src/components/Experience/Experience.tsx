import React from 'react';
import type { ExperienceItem } from '../../types/portfolio.types';
import { formatRichText } from '../../utils/formatText';
import './Experience.css';

interface ExperienceProps {
  experience: ExperienceItem[];
}

export const Experience: React.FC<ExperienceProps> = ({ experience }) => {
  return (
    <section className="experience-card">
      <div className="section-title-wrapper">
        <span className="section-pill"></span>
        <h2 className="section-title">WORK EXPERIENCE</h2>
      </div>

      <div className="experience-items-list">
        {experience.map((item, index) => (
          <div key={index} className="experience-item">
            <div className="experience-header">
              <div className="experience-title-company">
                <span className="experience-role">{item.role}</span>
                <span className="experience-separator">—</span>
                <span className="experience-company">{item.company}</span>
              </div>
              <div className="experience-meta">
                <span className="experience-period">{item.period}</span>
                <span className="meta-divider">|</span>
                <span className="experience-location">{item.location}</span>
              </div>
            </div>

            <ul className="experience-highlights">
              {item.highlights.map((highlight, hIdx) => (
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

export default Experience;
