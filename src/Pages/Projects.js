import React from 'react'
import Project from '../Components/Project'
import projectsData from '../Json/Projects.json'
import './style/Projects.css'



function Projects() {
    return (
        <div className="projects-page page">
            {projectsData.map(project => <Project
                key={project.sn}
                thumbnail={project.thumbnail}
                name={project.name}
                desc={project.desc}
                techs={project.techs}
                github={project.links.github}
                webpage={project.links.webpage}
                isCompleted={project.isCompleted} />)}
        </div>
    )
}

export default Projects
