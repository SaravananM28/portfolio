export default function About() {
    return (
        <section className="about" id="about">
            <div className="container about-container">
                <div className="section-header">
                    <span className="section-tag">Overview</span>
                    <h2>About Me</h2>
                </div>
                <p className="about-text">
                    I am a Full Stack Developer with experience developing modern MERN and PHP/MySQL applications. 
                    Focused on building clean architectural code, optimizing database performance, and designing intuitive, 
                    responsive user interfaces.
                </p>
                <div className="about-metrics">
                    <div className="metric-item">
                        <span className="metric-val">30%</span>
                        <span className="metric-label">DB Query Optimization</span>
                    </div>
                    <div className="metric-item">
                        <span className="metric-val">25%</span>
                        <span className="metric-label">UI Load Time Reduction</span>
                    </div>
                    <div className="metric-item">
                        <span className="metric-val">5+</span>
                        <span className="metric-label">Months Experience</span>
                    </div>
                </div>
            </div>
        </section>
    );
}