export default function Contact() {
    return (
        <section className="contact" id="contact">
            <div className="container contact-container">
                <div className="section-header">
                    <span className="section-tag">Let's Connect</span>
                    <h2>Get In Touch</h2>
                    <p className="contact-subtext">
                        I'm currently looking for full-time software engineering roles and freelance opportunities. 
                        Whether you have a question or just want to say hi, my inbox is always open!
                    </p>
                </div>
                <div className="contact-actions">
                    <a href="mailto:saravananm1028@gmail.com" className="btn btn-primary">Say Hello Via Email</a>
                    <div className="social-links">
                        <a href="https://github.com/SaravananM28" target="_blank" rel="noopener noreferrer" className="social-link">GitHub ↗</a>
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-link">LinkedIn ↗</a>
                    </div>
                </div>
            </div>
        </section>
    );
}