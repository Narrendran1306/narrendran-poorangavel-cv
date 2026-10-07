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
    <section className="ats-section ats-certifications-section">
      <div className="ats-section-header">
        <h2 className="ats-section-title">CERTIFICATIONS & COMPETENCIES</h2>
      </div>

      <div className="ats-cert-body">
        <ul className="ats-cert-list">
          {certifications.map((item, idx) => (
            <li key={idx} className="ats-cert-item">
              <span className="ats-cert-title">{item.title}</span>
              <span className="ats-cert-sep">–</span>
              <span className="ats-cert-issuer">{item.issuer}</span>
              {item.date && (
                <span className="ats-cert-date"> ({item.date})</span>
              )}
            </li>
          ))}
        </ul>

        {coreCompetencies.length > 0 && (
          <div className="ats-competencies-line">
            <span className="ats-comp-label">Core Competencies:</span>{' '}
            <span className="ats-comp-text">
              {coreCompetencies.join(' · ')}
            </span>
          </div>
        )}
      </div>
    </section>
  );
};

export default Certifications;
