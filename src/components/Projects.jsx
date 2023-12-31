// components/Projects.jsx

import { projectData } from './data.js';

const Projects = () => {
    return (
    <div className="projects-container">
        <h2>作品ポートフォリオ</h2>
        <div className="projects-grid">
        {projectData && projectData.map((project) => (
            <div className="project-card" key={project.id}>
            <div className="project-header">
                <i className="fa-regular fa-folder-open folder-icon"></i>
            </div>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            </div>
        ))
        }
        </div>
    </div>
    )
}

export default Projects;