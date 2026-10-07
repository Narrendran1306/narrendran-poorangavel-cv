import React from 'react';
import { formatRichText } from '../../utils/formatText';
import './Summary.css';

interface SummaryProps {
  summary: string;
}

export const Summary: React.FC<SummaryProps> = ({ summary }) => {
  return (
    <section className="ats-section ats-summary-section">
      <div className="ats-section-header">
        <h2 className="ats-section-title">PROFESSIONAL SUMMARY</h2>
      </div>
      <p className="ats-summary-text">{formatRichText(summary)}</p>
    </section>
  );
};

export default Summary;
