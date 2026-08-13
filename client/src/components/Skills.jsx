const skillsList = [
  { icon: 'fab fa-html5', name: 'HTML5' },
  { icon: 'fab fa-css3-alt', name: 'CSS3' },
  { icon: 'fab fa-js', name: 'JavaScript' },
  { icon: 'fab fa-react', name: 'React.js' },
  { icon: 'fas fa-wind', name: 'Tailwind CSS' },
  { icon: 'fab fa-node-js', name: 'Node.js' },
  { icon: 'fas fa-server', name: 'Express.js' },
  { icon: 'fab fa-php', name: 'PHP' },
  { icon: 'fab fa-laravel', name: 'Laravel' },
  { icon: 'fab fa-python', name: 'Python' },
  { icon: 'fas fa-flask', name: 'Flask' },
  { icon: 'fas fa-plug', name: 'REST APIs' },
  { icon: 'fas fa-leaf', name: 'MongoDB' },
  { icon: 'fas fa-database', name: 'MySQL' },
  { icon: 'fab fa-git-alt', name: 'Git & GitHub' },
];

function Skills() {
  return (
    <section id="skills">
      <div className="skills-inner">
        <div className="skills-header reveal">
          <span className="section-tag">My Stack</span>
          <h2 className="section-title">Tech Stack & Skills</h2>
          <p className="section-sub" style={{ margin: '0 auto' }}>
            Technologies I wield to architect powerful, full-stack web products — front to back.
          </p>
          <div className="divider" style={{ marginLeft: 'auto', marginRight: 'auto' }}></div>
        </div>

        <div className="skills-grid">
          {skillsList.map((skill) => (
            <div className="skill-card reveal" key={skill.name}>
              <i className={`${skill.icon} skill-icon`}></i>
              <div className="skill-name">{skill.name}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;