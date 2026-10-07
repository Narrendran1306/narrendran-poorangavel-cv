import React from 'react';
import type { EducationItem } from '../../types/portfolio.types';
import './Education.css';

interface EducationProps {
  education: EducationItem[];
}

export const Education: React.FC<EducationProps> = ({ education }) => {
  return (
    <section className="ats-section ats-education-section">
      <div className="ats-section-header">
        <h2 className="ats-section-title">EDUCATION</h2>
      </div>

      <div className="ats-education-list">
        {education.map((item, idx) => (
          <div key={idx} className="ats-education-item">
            <div className="ats-edu-header">
              <div className="ats-edu-degree-inst">
                <span className="ats-degree">{item.degree}</span>
                <span className="ats-divider">—</span>
                <span className="ats-institution">{item.institution}</span>
              </div>
              <div className="ats-edu-meta">
                <span className="ats-score">{item.score}</span>
                <span className="ats-meta-sep">|</span>
                <span className="ats-period">{item.period}</span>
                <span className="ats-meta-sep">|</span>
                <span className="ats-location">{item.location}</span>
              </div>
            </div>
            {item.coursework && item.coursework.length > 0 && (
              <div className="ats-coursework">
                <span className="ats-coursework-label">Relevant Coursework:</span>{' '}
                <span className="ats-coursework-text">
                  {item.coursework.join(' · ')}
                </span>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
