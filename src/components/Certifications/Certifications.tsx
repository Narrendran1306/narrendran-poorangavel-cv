import React from "react"
import "./Certifications.css"
import { certificates } from "../../data/certifications/certifications"

const Certifications: React.FC = () => {
    const visibleCertificates = Object.values(certificates).filter(
        (certificate) => certificate.show
    )

    return (
        <section className="certifications" id="certifications">
            <h2 className="certifications__title">Certifications</h2>

            <div className="certifications__list">
                {visibleCertificates.map((certificate) => (
                    <div
                        key={certificate.id}
                        className="certification__item"
                    >
                        {certificate.title}
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Certifications