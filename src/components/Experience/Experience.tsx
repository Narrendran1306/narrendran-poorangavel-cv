import React from 'react';
import type { ExperienceItem } from '../../types/portfolio.types';
import { formatRichText } from '../../utils/formatText';
import './Experience.css';

interface ExperienceProps {
  experience: ExperienceItem[];
}

export const Experience: React.FC<ExperienceProps> = ({ experience }) => {
  return (
    <section className="ats-section ats-experience-section">
      <div className="ats-section-header">
        <h2 className="ats-section-title">WORK EXPERIENCE</h2>
      </div>

      <div className="ats-experience-list">
        {experience.map((item, index) => (
          <div key={index} className="ats-experience-item">
            <div className="ats-experience-header">
              <div className="ats-role-company">
                <span className="ats-role">{item.role}</span>
                <span className="ats-divider">—</span>
                <span className="ats-company">{item.company}</span>
              </div>
              <div className="ats-meta">
                <span className="ats-period">{item.period}</span>
                <span className="ats-meta-sep">|</span>
                <span className="ats-location">{item.location}</span>
              </div>
            </div>

            <ul className="ats-bullets">
              {item.highlights.map((highlight, hIdx) => (
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

export default Experience;
