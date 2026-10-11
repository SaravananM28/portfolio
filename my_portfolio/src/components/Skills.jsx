import skills from '../data/skills';

export default function Skills() {
    return (
        <section className="skills" id="skills">
            <div className="container">
                <div className="section-header">
                    <span className="section-tag">Expertise</span>
                    <h2>Technical Skills</h2>
                </div>
                
                <div className='cards-container'>
                    {skills.map((skill) => (
                        <div key={skill.id} className='card'>
                            <div className="skill-info">
                                <span className="skill-name">{skill.name}</span>
                                <span className="skill-pct">{skill.level}%</span>
                            </div>
                            <div className="skill-bar-bg">
                                <div className="skill-bar-fill" style={{ width: `${skill.level}%` }}></div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}