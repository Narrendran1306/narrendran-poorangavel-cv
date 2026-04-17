import React from "react"
import "./Summary.css"
import { summary } from "../../data/summary/summary"

const Summary: React.FC = () => {
    return (
        <section className="summary">
            <h2>Professional Summary</h2>
            <p>{summary}</p>
        </section>
    )
}

export default Summary