import React from 'react';
import type { ResumeData } from '../types/portfolio.types';
import resumeDataDefault from '../data/resumeData';
import Header from './Header/Header';
import Summary from './Summary/Summary';
import TechnicalSkills from './TechnicalSkills/TechnicalSkills';
import Experience from './Experience/Experience';
import Projects from './Projects/Projects';
import Education from './Education/Education';
import Certifications from './Certifications/Certifications';
import './ResumeContainer.css';

interface ResumeContainerProps {
  data?: ResumeData;
}

export const ResumeContainer: React.FC<ResumeContainerProps> = ({
  data = resumeDataDefault,
}) => {
  return (
    <div className="resume-sheet ats-document" id="resume-container">
      {/* 1. Formal Executive ATS Header */}
      <Header contact={data.contact} />

      {/* 2. Professional Summary Section */}
      <Summary summary={data.summary} />

      {/* 3. Technical Expertise / Skills Section */}
      <TechnicalSkills skills={data.skills} />

      {/* 4. Work Experience Section */}
      <Experience experience={data.experience} />

      {/* 5. Featured Projects Section */}
      <Projects projects={data.projects} />

      {/* 6. Education (Single-Column ATS Compliant) */}
      <Education education={data.education} />

      {/* 7. Certifications & Competencies (Single-Column ATS Compliant) */}
      <Certifications
        certifications={data.certifications}
        coreCompetencies={data.coreCompetencies}
      />

      {/* 8. Formal ATS Footer Line */}
      <footer className="resume-footer no-print-optional">
        <span className="footer-left">{data.footer.leftText}</span>
        <span className="footer-center">• Single-Page A4 ATS Tech Resume •</span>
        <span className="footer-right">{data.footer.rightText}</span>
      </footer>
    </div>
  );
};

export default ResumeContainer;
