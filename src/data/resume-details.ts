import {
  baseContactDetails,
  baseEducation,
  baseCertifications,
  profilesData,
  roleMetadataList,
  getResumeForRole,
  defaultRoleKey,
  centralizedResumeData,
  resumeData,
} from './resumeData';

export const contactDetails = baseContactDetails;
export const summaryText = profilesData[defaultRoleKey].customSummary;
export const skillsData = profilesData[defaultRoleKey].skillsPriority;
export const experienceData = profilesData[defaultRoleKey].experienceBullets;
export const projectsData = profilesData[defaultRoleKey].featuredProjects;
export const educationData = baseEducation;
export const certificationsData = baseCertifications;
export const coreCompetenciesData = profilesData[defaultRoleKey].coreCompetencies || [];
export const footerData = profilesData[defaultRoleKey].footer;

export {
  baseContactDetails,
  baseEducation,
  baseCertifications,
  profilesData,
  roleMetadataList,
  getResumeForRole,
  defaultRoleKey,
  centralizedResumeData,
};

export default resumeData;