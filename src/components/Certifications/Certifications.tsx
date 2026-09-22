import React from 'react';
import type { CertificationItem } from '../../types/portfolio.types';
import './Certifications.css';

interface CertificationsProps {
  certifications: CertificationItem[];
  coreCompetencies?: string[];
}

export const Certifications: React.FC<CertificationsProps> = ({
  certifications,
  coreCompetencies = [],
}) => {
  return (
    <section className="certifications-card">
      <div className="section-title-wrapper">
        <span className="section-pill"></span>
        <h2 className="section-title">CERTIFICATIONS & COMPETENCIES</h2>
      </div>

      <ul className="certifications-list">
        {certifications.map((item, idx) => (
          <li key={idx} className="cert-item">
            <span className="cert-title">{item.title}</span>
            <span className="cert-divider">–</span>
            <span className="cert-issuer">{item.issuer}</span>
            {item.date && <span className="cert-date"> ({item.date})</span>}
          </li>
        ))}
        {coreCompetencies.length > 0 && (
          <li className="cert-item competency-item">
            <span className="competency-label">Core:</span>
            <span className="competency-text">
              {coreCompetencies.join(', ')}
            </span>
          </li>
        )}
      </ul>
    </section>
  );
};

export default Certifications;
