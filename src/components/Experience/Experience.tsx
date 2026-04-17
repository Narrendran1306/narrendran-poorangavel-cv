import React from "react"
import "./Experience.css"
import { experience } from "../../data/experience/experience"

const Experience: React.FC = () => {
    const visibleExperience = Object.values(experience).filter(
        (item) => item.show
    )

    return (
        <section className="experience" id="experience">
            <h2 className="experience__title">Experience</h2>

            <div className="experience__list">
                {visibleExperience.map((job) => (
                    <div key={job.id} className="experience__card">
                        <h3>{job.role}</h3>
                        <p className="experience__company">{job.company}</p>
                        <span className="experience__duration">
                            {job.duration} • {job.location}
                        </span>

                        <ul className="experience__highlights">
                            {job.highlights.map((point, index) => (
                                <li key={index}>{point}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Experience