import React, { useState } from 'react';
import { Printer, ZoomIn, ZoomOut, RotateCcw, CheckCircle2 } from 'lucide-react';
import ResumeContainer from './components/ResumeContainer';
import resumeData from './data/resume-details';
import './App.css';

export const App: React.FC = () => {
  const [scale, setScale] = useState<number>(1);

  const handlePrint = () => {
    window.print();
  };

  const handleZoomIn = () => {
    setScale((prev) => Math.min(prev + 0.1, 1.5));
  };

  const handleZoomOut = () => {
    setScale((prev) => Math.max(prev - 0.1, 0.6));
  };

  const handleResetZoom = () => {
    setScale(1);
  };

  return (
    <div className="app-layout">
      {/* Top Controls Bar - Hidden on Print */}
      <header className="control-bar no-print">
        <div className="control-bar-left">
          <div className="app-brand">
            <span className="brand-dot"></span>
            <span className="brand-title">Resume Preview</span>
            <span className="brand-badge">A4 Pixel-Perfect</span>
          </div>
        </div>

        <div className="control-bar-center">
          <div className="zoom-controls">
            <button
              type="button"
              className="ctrl-btn icon-btn"
              onClick={handleZoomOut}
              title="Zoom Out"
              aria-label="Zoom Out"
            >
              <ZoomOut size={15} />
            </button>
            <span className="zoom-value">{Math.round(scale * 100)}%</span>
            <button
              type="button"
              className="ctrl-btn icon-btn"
              onClick={handleZoomIn}
              title="Zoom In"
              aria-label="Zoom In"
            >
              <ZoomIn size={15} />
            </button>
            <button
              type="button"
              className="ctrl-btn icon-btn"
              onClick={handleResetZoom}
              title="Reset Zoom"
              aria-label="Reset Zoom"
            >
              <RotateCcw size={14} />
            </button>
          </div>
        </div>

        <div className="control-bar-right">
          <div className="print-hint">
            <CheckCircle2 size={14} className="hint-icon" />
            <span>Single Page A4 Ready</span>
          </div>
          <button
            type="button"
            className="ctrl-btn print-action-btn"
            onClick={handlePrint}
          >
            <Printer size={16} />
            <span>Print / Save PDF</span>
          </button>
        </div>
      </header>

      {/* Resume Canvas Area */}
      <main className="resume-viewport">
        <div
          className="resume-scale-wrapper"
          style={{ transform: `scale(${scale})`, transformOrigin: 'top center' }}
        >
          <ResumeContainer data={resumeData} />
        </div>
      </main>
    </div>
  );
};

export default App;
