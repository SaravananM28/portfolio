import experienceData from "../data/experience";

export default function Experience() {
    return (
        <section className="experience" id="experience">
            <div className="container">
                <div className="section-header">
                    <span className="section-tag">Career Path</span>
                    <h2>Work Experience</h2>
                </div>

                <div className="experience-timeline">
                    {experienceData.map((exp, index) => (
                        <div key={index} className="experience-card">
                            <div className="exp-top">
                                <span className="exp-duration">{exp.duration}</span>
                                <h3 className="exp-role">{exp.role}</h3>
                                <h4 className="exp-company">{exp.company}</h4>
                            </div>
                            <p className="exp-desc">{exp.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}