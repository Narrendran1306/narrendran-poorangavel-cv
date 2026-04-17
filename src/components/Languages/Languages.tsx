import React from "react"
import "./Languages.css"
import { languages } from "../../data/languages/languages"

const Languages: React.FC = () => {
    const visibleLanguages = Object.values(languages).filter(
        (lang) => lang.show
    )

    return (
        <section className="languages">
            <h2>Languages Known</h2>

            {visibleLanguages.map((language) => (
                <div key={language.id} className="languages__group">
                    <h3>{language.title}</h3>

                    <div className="languages__list">
                        {language.items.map((item, index) => (
                            <span key={index} className="language__badge">
                                {item}
                            </span>
                        ))}
                    </div>
                </div>
            ))}
        </section>
    )
}

export default Languages