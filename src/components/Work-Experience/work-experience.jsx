import React, { useState, useEffect } from 'react'
import expList from "./json/experience.json"
import skillsList from "./json/skills.json"
import "../Work-Experience/work-experience.css"

export default function WorkExperience() {


    return (
        <section className="cv-section">
            <h1>Curriculum Vitae</h1>
            <h2 className="skills-title">Skills</h2>
            <div className="skills-container">
                {skillsList.Skills.map((skills, i) => (
                    <div className="skills-section" key={i}>
                        <h3>{skills.Category}</h3>
                        <ul>
                            {skills.SpecificSkills.map((specificSkills, i) => (
                                <li key={i}>{specificSkills}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>

            <h2 className='experience-title'>Work Experience</h2>
            {expList.WorkExperience.map((experience, index) => (
                <div className='experience-section' key={index}>
                    <h3>{experience.Position}</h3>
                    <p>Employer: {experience.Employer}</p>
                    <p>Duration: {experience.Duration}</p>
                    <p>Responsibilties:</p>
                    <ul>
                        {experience.Responsibilities.map((responsibilities, index) => (
                            <li key={index}>{responsibilities}</li>
                        ))}
                    </ul>
                </div>
            ))}
        </section>
    );

}