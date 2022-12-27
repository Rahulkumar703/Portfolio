import React from 'react';
import './Style/project.css';

function Project(props) {
  const { thumbnail, name, desc, techs, isCompleted, github, webpage } = props;


  return (
    <div className='project'>
      <div className="thumbnail">
        <img src={thumbnail} alt="project-thumbnail" />
      </div>
      <div className="project-details">
        <div className="project-title">
          <h1>{name}</h1>
        </div>
        <div className="project-desc">
          <p>{desc}</p>
        </div>
        <div className="project-techs">
          {techs.map((tech, key) =>
            <div className="tech-name" key={key}>
              <b>{tech}</b>
            </div>)}
        </div>
        <div className="row">
          <div className={`project-status ${isCompleted ? "completed" : "not-completed"}`}>
            {isCompleted ? <i className="fa-solid fa-check" title='Completed'></i> : <i className="fa-solid fa-screwdriver-wrench" title='Under Construction'></i>}
          </div>
          <div className="project-links">
            <a href={github} target="_blank" title='GitHub' rel="noreferrer">
              <i className="fa-brands fa-github" target="_blank"></i>
            </a>
            <a href={webpage} target="_blank" title='Website' rel="noreferrer">
              <i className="fa-solid fa-earth-asia"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Project;
