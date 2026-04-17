import React, { useEffect, useState } from "react"
import "./Resume.css"

import LightModeIcon from "@mui/icons-material/LightMode"
import DarkModeIcon from "@mui/icons-material/DarkMode"
import PrintIcon from "@mui/icons-material/Print"

import Header from "../../components/Header/Header"
import Summary from "../../components/Summary/Summary"
import Skills from "../../components/Skills/Skills"
import Experience from "../../components/Experience/Experience"
import Projects from "../../components/Projects/Projects"
import Education from "../../components/Education/Education"
import Certifications from "../../components/Certifications/Certifications"
import Declaration from "../../components/Declaration/Declaration"
import Languages from "../../components/Languages/Languages"

const Resume: React.FC = () => {
    const [theme, setTheme] = useState<"light" | "dark">("light")

    useEffect(() => {
        const savedTheme = localStorage.getItem("resume-theme") as
            | "light"
            | "dark"
            | null

        if (savedTheme) {
            setTheme(savedTheme)
        }
    }, [])

    const toggleTheme = () => {
        const newTheme = theme === "light" ? "dark" : "light"
        setTheme(newTheme)
        localStorage.setItem("resume-theme", newTheme)
    }

    return (
        <div className={`resume-page ${theme}`}>
            <div className="resume-toolbar">
                <button onClick={toggleTheme} className="toolbar-btn">
                    {theme === "light" ? <DarkModeIcon /> : <LightModeIcon />}
                </button>

                <button
                    className="toolbar-btn"
                    onClick={() => window.print()}
                >
                    <PrintIcon />
                </button>
            </div>

            <div className="resume-container">
                <Header />

                <div className="resume-content">
                    <Summary />
                    <Experience />
                    <Languages />
                    <Education />
                    <Skills />
                    <Projects />
                    <Certifications />
                    <Declaration />
                </div>
            </div>
        </div>
    )
}

export default Resume