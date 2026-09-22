import React from 'react';
import type { ResumeData } from '../types/portfolio.types';
import resumeDataDefault from '../data/resume-details';
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
    <div className="resume-sheet" id="resume-container">
      {/* 1. Header Section */}
      <Header contact={data.contact} />

      {/* 2. Professional Summary Section */}
      <Summary summary={data.summary} />

      {/* 3. Technical Expertise Section */}
      <TechnicalSkills skills={data.skills} />

      {/* 4. Work Experience Section */}
      <Experience experience={data.experience} />

      {/* 5. Featured Project Section */}
      <Projects projects={data.projects} />

      {/* 6. Education & Certifications 2-Column Row */}
      <div className="resume-two-column-row">
        <div className="resume-col-left">
          <Education education={data.education} />
        </div>
        <div className="resume-col-right">
          <Certifications
            certifications={data.certifications}
            coreCompetencies={data.coreCompetencies}
          />
        </div>
      </div>

      {/* 7. Resume Footer Bar */}
      {/* <footer className="resume-footer">
        <span className="footer-left">{data.footer.leftText}</span>
        <span className="footer-right">{data.footer.rightText}</span>
      </footer> */}
    </div>
  );
};

export default ResumeContainer;
