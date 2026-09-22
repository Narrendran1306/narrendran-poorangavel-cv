import React from 'react';
import type { EducationItem } from '../../types/portfolio.types';
import './Education.css';

interface EducationProps {
  education: EducationItem[];
}

export const Education: React.FC<EducationProps> = ({ education }) => {
  return (
    <section className="education-card">
      <div className="section-title-wrapper">
        <span className="section-pill"></span>
        <h2 className="section-title">EDUCATION</h2>
      </div>

      <div className="education-list">
        {education.map((item, idx) => (
          <div key={idx} className="education-item">
            <div className="education-degree">{item.degree}</div>
            <div className="education-institution-period">
              <span>{item.institution}</span>
              <span className="edu-divider">|</span>
              <span>{item.period}</span>
            </div>
            <div className="education-score-location">
              <span className="edu-score">{item.score}</span>
              <span className="edu-divider">|</span>
              <span>{item.location}</span>
            </div>
            {item.coursework && item.coursework.length > 0 && (
              <div className="education-coursework">
                <span className="coursework-label">Coursework:</span>
                <span className="coursework-text">
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
