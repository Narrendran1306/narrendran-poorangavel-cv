import React from 'react';
import type { SkillCategory } from '../../types/portfolio.types';
import './TechnicalSkills.css';

interface TechnicalSkillsProps {
  skills: SkillCategory[];
}

export const TechnicalSkills: React.FC<TechnicalSkillsProps> = ({ skills }) => {
  return (
    <section className="ats-section ats-skills-section">
      <div className="ats-section-header">
        <h2 className="ats-section-title">TECHNICAL SKILLS</h2>
      </div>

      <div className="ats-skills-list">
        {skills.map((item, index) => (
          <div key={index} className="ats-skill-row">
            <span className="ats-skill-category">{item.category}:</span>
            <span className="ats-skill-items">{item.skills.join(', ')}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechnicalSkills;
