import React from 'react'
import DetailsCard from '../Components/DetailsCard'
import './style/About.css'

function About() {
    return (
        <div className="About-page page">
            <div className="education-details details">
                <div className="details-heading">
                    <h1>Educations</h1>
                </div>
                <div className="details-body">
                    <DetailsCard
                        title="Bachelors of Technology"
                        department="(Computer Science and Engineering)"
                        college="Motihari College Of Engineering, Motihari, Bihar (845401)"
                        dates="2021-2025"
                        marks="CGPA = 8.22"
                    />
                    <DetailsCard
                        title="Bachelors of Technology"
                        department="(Electrical and Electronics Engineering)"
                        college="Purnea College Of Engineering, Purnea, Bihar (854301)"
                        dates="2020-2021"
                        marks="CGPA = N/A"
                    />
                    <DetailsCard
                        title="Intermidiate"
                        department="(Physics, Chemistry and Math)"
                        college="R.D.H High School, Rajgir, Bihar (803116)"
                        dates="2017-2019"
                        marks="Marks = 76.4%"
                    />
                    <DetailsCard
                        title="Matriculation"
                        department=""
                        college="R.D.H High School, Rajgir, Bihar (803116)"
                        dates="2016-2017"
                        marks="Marks = 81.6%"
                    />
                </div>
            </div>
            <div className="skills-details details">
                <div className="details-heading">
                    <h1>Skills</h1>
                </div>
                <div className="details-body">
                    <p className='skill'>C++</p>
                    <p className='skill'>React JS</p>
                    <p className='skill'>HTML</p>
                    <p className='skill'>CSS</p>
                    <p className='skill'>JavaScript</p>
                </div>
                <div className="details-heading">
                    <h1>Familier With</h1>
                </div>
                <div className="details-body">
                    <p className='skill'>Java</p>
                    <p className='skill'>MongoDB</p>
                    <p className='skill'>Express JS</p>
                    <p className='skill'>Node JS</p>
                    <p className='skill'>JavaScript</p>
                </div>
            </div>
        </div>
    )
}

export default About
