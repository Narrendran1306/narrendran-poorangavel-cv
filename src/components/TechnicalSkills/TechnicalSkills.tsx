import React from 'react';
import type { SkillCategory } from '../../types/portfolio.types';
import './TechnicalSkills.css';

interface TechnicalSkillsProps {
  skills: SkillCategory[];
}

export const TechnicalSkills: React.FC<TechnicalSkillsProps> = ({ skills }) => {
  return (
    <section className="skills-card">
      <div className="section-title-wrapper">
        <span className="section-pill"></span>
        <h2 className="section-title">TECHNICAL EXPERTISE</h2>
      </div>

      <div className="skills-list">
        {skills.map((item, index) => (
          <div key={index} className="skill-row">
            <span className="skill-category">{item.category}:</span>
            <span className="skill-items">
              {item.skills.join(', ')}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechnicalSkills;
