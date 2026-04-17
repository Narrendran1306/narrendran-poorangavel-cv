import React from "react"
import "./Education.css"
import { education } from "../../data/education/education"

const Education: React.FC = () => {
    const visibleEducation = Object.values(education).filter(
        (item) => item.show
    )

    return (
        <section className="education" id="education">
            <h2 className="education__title">Education</h2>

            <div className="education__list">
                {visibleEducation.map((item) => (
                    <div key={item.id} className="education__card">
                        <h3>{item.degree}</h3>
                        <p>{item.institution}</p>
                        <span>
                            {item.year} • {item.score}
                        </span>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Education