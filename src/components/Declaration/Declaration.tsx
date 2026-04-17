import React from "react"
import "./Declaration.css"
import { personalDetails } from "../../data/personalDetails/personalDetails"

const Declaration: React.FC = () => {
    return (
        <section className="declaration">
            <h2>Declaration</h2>

            <p>
                I hereby declare that the information provided above is true and
                accurate to the best of my knowledge and belief.
            </p>

            <div className="declaration__footer">
                <span>{personalDetails.location}</span>
                <span>{personalDetails.name}</span>
            </div>
        </section>
    )
}

export default Declaration