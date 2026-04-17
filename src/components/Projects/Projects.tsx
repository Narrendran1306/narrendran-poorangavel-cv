import React from "react"
import "./Projects.css"
import { projects } from "../../data/projects/projects"

const Projects: React.FC = () => {
    const visibleProjects = Object.values(projects).filter(
        (project) => project.show
    )

    return (
        <section className="projects" id="projects">
            <h2 className="projects__title">Projects</h2>

            <div className="projects__table-wrapper">
                <table className="projects__table">
                    <thead>
                        <tr>
                            <th>Project Name</th>
                            <th>Description</th>
                            <th>Tech Stack</th>
                        </tr>
                    </thead>

                    <tbody>
                        {visibleProjects.map((project) => (
                            <tr key={project.id}>
                                <td className="project__name">{project.title}</td>
                                <td className="project__description">
                                    {project.description}
                                </td>
                                <td className="project__stack">
                                    {project.techStack.join(", ")}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </section>
    )
}

export default Projects