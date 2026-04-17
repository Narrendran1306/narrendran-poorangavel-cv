import React from "react"
import "./Skills.css"
import { skills } from "../../data/skills/skills"

const Skills: React.FC = () => {
    const visibleSkills = Object.values(skills).filter(
        (skill) => skill.show
    )

    return (
        <section className="skills" id="skills">
            <h2 className="skills__title">Skills</h2>

            <div className="skills__list">
                {visibleSkills.map((skill) => (
                    <span key={skill.id} className="skill__badge">
                        {skill.name}
                    </span>
                ))}
            </div>
        </section>
    )
}

export default Skills