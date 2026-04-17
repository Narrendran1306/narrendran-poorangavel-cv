import React from "react"
import "./Header.css"

import LinkedInIcon from "@mui/icons-material/LinkedIn"
import GitHubIcon from "@mui/icons-material/GitHub"
import EmailIcon from "@mui/icons-material/Email"
import PhoneIcon from "@mui/icons-material/Phone"
import LanguageIcon from "@mui/icons-material/Language"

import { personalDetails } from "../../data/personalDetails/personalDetails"

const Header: React.FC = () => {
    return (
        <header className="header">
            <div className="header__top">
                <h1>{personalDetails.name}</h1>
                <h3>{personalDetails.role}</h3>
            </div>

            {/* Screen */}
            <div className="header__contact screen-only">
                <a href={personalDetails.linkedin} target="_blank" rel="noopener noreferrer">
                    <LinkedInIcon fontSize="small" />
                    <span>LinkedIn</span>
                </a>

                <a href={personalDetails.github} target="_blank" rel="noopener noreferrer">
                    <GitHubIcon fontSize="small" />
                    <span>GitHub</span>
                </a>

                <a href={`mailto:${personalDetails.email}`}>
                    <EmailIcon fontSize="small" />
                    <span>Email</span>
                </a>

                <span className="header__phone">
                    <PhoneIcon fontSize="small" />
                    <span>{personalDetails.phone}</span>
                </span>

                <a href={personalDetails.portfolio} target="_blank" rel="noopener noreferrer">
                    <LanguageIcon fontSize="small" />
                    <span>Portfolio</span>
                </a>
            </div>

            {/* Print */}
            <div className="header__print print-only">
                <div className="print-item">
                    <PhoneIcon fontSize="small" />
                    <span>{personalDetails.phone}</span>
                </div>

                <div className="print-item">
                    <EmailIcon fontSize="small" />
                    <span>{personalDetails.email}</span>
                </div>

                <div className="print-item">
                    <LinkedInIcon fontSize="small" />
                    <span>{personalDetails.linkedinName}</span>
                </div>

                <div className="print-item">
                    <GitHubIcon fontSize="small" />
                    <span>{personalDetails.githubName}</span>
                </div>
            </div>
        </header>
    )
}

export default Header