import React, { useState, useEffect } from "react";
import eduList from "./education-list.json"
import "../Education/education-list.css"

export default function Education() {

    return (
        <section className="education-container">
            <h1>Education</h1>
            {eduList.Education.map((edu, i) => (
                <div className="education-section">
                    <h3>Institution: {edu.Institution}</h3>
                    <ul>
                        <h4>Program: {edu.Program}</h4>
                        <p>Duration: {edu.Duration}</p>
                        <p>Description: {edu.Description}</p>
                    </ul>
                </div>
            ))}
        </section>
    )

}