import projects from "../data/projects";

const Projects = () => {
    return (
        <section className="projects" id="projects">
            <div className="container">
                <div className="section-header">
                    <span className="section-tag">Portfolio</span>
                    <h2>Featured Projects</h2>
                    <p className="section-subtext">Selected works demonstrating full-stack problem solving and interface craftsmanship.</p>
                </div>

                <div className="project-grid">
                    {projects.map((project) => (
                        <article key={project.id} className="project-card">
                            <div className="project-img-wrapper">
                                <img src={project.image} alt={project.title} loading="lazy" />
                            </div>
                            <div className="project-body">
                                {project.category && <span className="project-cat">{project.category}</span>}
                                <h3>{project.title}</h3>
                                <p className="project-desc">{project.description}</p>
                                
                                <div className="technologies">
                                    {project.technologies.map((tech, index) => (
                                        <span key={index} className="tech-badge">{tech}</span>
                                    ))}
                                </div>
                                
                                <div className="project-links">
                                    {project.github && (
                                        <a href={project.github} target="_blank" rel="noopener noreferrer" className="link-item">
                                            Code ↗
                                        </a>
                                    )}
                                    {project.liveDemo && (
                                        <a href={project.liveDemo} target="_blank" rel="noopener noreferrer" className="link-item primary">
                                            Live Demo ↗
                                        </a>
                                    )}
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;