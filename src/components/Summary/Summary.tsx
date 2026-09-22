import React from 'react';
import { formatRichText } from '../../utils/formatText';
import './Summary.css';

interface SummaryProps {
  summary: string;
}

export const Summary: React.FC<SummaryProps> = ({ summary }) => {
  return (
    <section className="summary-card">
      <div className="section-title-wrapper">
        <span className="section-pill"></span>
        <h2 className="section-title">PROFESSIONAL SUMMARY</h2>
      </div>
      <p className="summary-text">{formatRichText(summary)}</p>
    </section>
  );
};

export default Summary;
