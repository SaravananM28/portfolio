const Hero = () => {
    return (
        <header className="hero container" id="home">
            <div className="hero-content">
                <span className="hero-badge">Available for Work</span>
                <h1>Hi, I'm <span className="hero-highlight">Saravanan</span></h1>
                <p className="hero-subtext">A passionate Full Stack Developer crafting clean, performant, and thoughtful digital experiences.</p>
                <div className="hero-actions">
                    <a href="#projects" className="btn btn-primary">View Projects</a>
                    <a href="#contact" className="btn btn-secondary">Get in Touch</a>
                </div>
            </div>
            <div className="profilePic">
                <img src="/profilepic/portfolio-portrait.webp" alt="Saravanan" id="profileImg"/>
            </div>
        </header>
    )
}

export default Hero;