import React, { useState, useMemo, useEffect } from 'react';
import {
  Download,
  ZoomIn,
  ZoomOut,
  RotateCcw,
  CheckCircle2,
  Sparkles,
  Smartphone,
  Monitor,
} from 'lucide-react';
import ResumeContainer from './components/ResumeContainer';
import RoleSwitcher from './components/RoleSwitcher/RoleSwitcher';
import {
  roleMetadataList,
  defaultRoleKey,
  getResumeForRole,
  profilesData,
} from './data/resumeData';
import type { RoleKey } from './types/portfolio.types';
import './App.css';

export const App: React.FC = () => {
  const [activeRole, setActiveRole] = useState<RoleKey>(defaultRoleKey);
  const [scale, setScale] = useState<number>(1);
  const [mobileViewMode, setMobileViewMode] = useState<'card' | 'canvas'>('card');
  const [isMobileScreen, setIsMobileScreen] = useState<boolean>(false);

  // Derive compiled resume data for currently selected role
  const currentResume = useMemo(() => {
    return getResumeForRole(activeRole);
  }, [activeRole]);

  // Current profile metadata
  const currentProfileMeta = useMemo(() => {
    return (
      roleMetadataList.find((r) => r.id === activeRole) || roleMetadataList[0]
    );
  }, [activeRole]);

  // Detect mobile screen width for adaptive controls
  useEffect(() => {
    const handleResize = () => {
      const isMobile = window.innerWidth <= 860;
      setIsMobileScreen(isMobile);
      if (isMobile) {
        setScale(1);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // 1-Click PDF Export / Print
  const handleDownloadPdf = () => {
    const originalTitle = document.title;
    const cleanRole = currentProfileMeta.shortLabel.replace(/\s+/g, '_');
    document.title = `Narrendran_Poorangavel_${cleanRole}_Resume`;

    window.print();

    setTimeout(() => {
      document.title = originalTitle;
    }, 1500);
  };

  const handleZoomIn = () => {
    setScale((prev) => Math.min(Number((prev + 0.1).toFixed(1)), 1.4));
  };

  const handleZoomOut = () => {
    setScale((prev) => Math.max(Number((prev - 0.1).toFixed(1)), 0.6));
  };

  const handleResetZoom = () => {
    setScale(1);
  };

  return (
    <div className="app-layout">
      {/* Top Application Control Bar - Centered Container */}
      <header className="control-bar no-print">
        <div className="control-bar-inner">
          {/* Brand & Active Role */}
          <div className="control-bar-left">
            <div className="app-brand">
              <span className="brand-dot"></span>
              <div className="brand-text-group">
                <span className="brand-title">Resume Studio</span>
                <span className="brand-subtitle">
                  {currentProfileMeta.shortLabel}
                </span>
              </div>
              <span className="brand-badge">ATS Single-Page A4</span>
            </div>
          </div>

          {/* Dynamic Role Switcher */}
          <div className="control-bar-center">
            <RoleSwitcher
              roles={roleMetadataList}
              activeRole={activeRole}
              onSelectRole={setActiveRole}
            />
          </div>

          {/* Action Group */}
          <div className="control-bar-right">
            {isMobileScreen && (
              <button
                type="button"
                className="ctrl-btn view-mode-toggle"
                onClick={() =>
                  setMobileViewMode((prev) => (prev === 'card' ? 'canvas' : 'card'))
                }
                title={`Switch to ${mobileViewMode === 'card' ? 'A4 Canvas' : 'Card'} View`}
              >
                {mobileViewMode === 'card' ? (
                  <>
                    <Monitor size={13} />
                    <span>A4 View</span>
                  </>
                ) : (
                  <>
                    <Smartphone size={13} />
                    <span>Card View</span>
                  </>
                )}
              </button>
            )}

            {!isMobileScreen && (
              <div className="zoom-controls">
                <button
                  type="button"
                  className="ctrl-btn icon-btn"
                  onClick={handleZoomOut}
                  title="Zoom Out"
                  aria-label="Zoom Out"
                >
                  <ZoomOut size={14} />
                </button>
                <span className="zoom-value">{Math.round(scale * 100)}%</span>
                <button
                  type="button"
                  className="ctrl-btn icon-btn"
                  onClick={handleZoomIn}
                  title="Zoom In"
                  aria-label="Zoom In"
                >
                  <ZoomIn size={14} />
                </button>
                <button
                  type="button"
                  className="ctrl-btn icon-btn"
                  onClick={handleResetZoom}
                  title="Reset Zoom"
                  aria-label="Reset Zoom"
                >
                  <RotateCcw size={13} />
                </button>
              </div>
            )}

            <button
              type="button"
              className="ctrl-btn download-pdf-btn"
              onClick={handleDownloadPdf}
              title="Download or Print clean ATS single-page A4 PDF"
            >
              <Download size={15} className="btn-icon" />
              <span className="btn-text">Download PDF</span>
            </button>
          </div>
        </div>
      </header>

      {/* Profile Notification & Guidance Banner */}
      <div className="role-highlight-banner no-print">
        <div className="banner-inner">
          <div className="banner-content">
            <Sparkles size={13} className="banner-icon" />
            <span className="banner-target">
              <strong>Active Role:</strong> {profilesData[activeRole].targetRoleTitle}
            </span>
            <span className="banner-separator">•</span>
            <span className="banner-hint">
              100% ATS-Compliant Single-Column Layout & Tailored Keywords
            </span>
          </div>
          <div className="banner-badge-group">
            <span className="a4-guarantee-badge">
              <CheckCircle2 size={12} />
              ATS Tested
            </span>
          </div>
        </div>
      </div>

      {/* Resume Canvas Viewport */}
      <main
        className={`resume-viewport ${
          isMobileScreen && mobileViewMode === 'canvas' ? 'mobile-canvas-mode' : ''
        }`}
      >
        <div
          className="resume-scale-wrapper"
          style={{
            transform: !isMobileScreen ? `scale(${scale})` : undefined,
            transformOrigin: 'top center',
          }}
        >
          <ResumeContainer data={currentResume} />
        </div>
      </main>
    </div>
  );
};

export default App;
