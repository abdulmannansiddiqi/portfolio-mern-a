const skillsList = [
  { icon: 'fab fa-html5', name: 'HTML5' },
  { icon: 'fab fa-css3-alt', name: 'CSS3' },
  { icon: 'fab fa-js', name: 'JavaScript' },
  { icon: 'fab fa-react', name: 'React.js' },
  { icon: 'fas fa-wind', name: 'Tailwind CSS' },
  { icon: 'fab fa-node-js', name: 'Node.js' },
  { icon: 'fas fa-server', name: 'Express.js' },
  { icon: 'fab fa-php', name: 'PHP' },
  { icon: 'next-svg', name: 'Next.js' },
  { icon: 'fab fa-python', name: 'Python' },
  { icon: 'fas fa-flask', name: 'Flask' },
  { icon: 'fas fa-plug', name: 'REST APIs' },
  { icon: 'fas fa-leaf', name: 'MongoDB' },
  { icon: 'fas fa-database', name: 'MySQL' },
  { icon: 'fab fa-git-alt', name: 'Git & GitHub' },
];

// Next.js ka koi official brand icon Font Awesome mein nahi hota,
// isliye isay inline SVG ke through render karte hain (guaranteed dikhega)
function NextJsIcon() {
  return (
    <svg
      className="skill-icon"
      viewBox="0 0 180 180"
      xmlns="http://www.w3.org/2000/svg"
      style={{
        width: '1em',
        height: '1em',
        fill: 'currentColor',
        display: 'block',
        margin: '0 auto',
      }}
    >
      <mask
        id="nextjs-mask"
        style={{ maskType: 'alpha' }}
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="180"
        height="180"
      >
        <circle cx="90" cy="90" r="90" fill="black" />
      </mask>
      <g mask="url(#nextjs-mask)">
        <circle cx="90" cy="90" r="87" fill="black" stroke="currentColor" strokeWidth="6" />
        <path
          d="M149.508 157.52L69.142 54H54V125.97H66.1136V69.3836L139.999 164.845C143.333 162.614 146.509 160.165 149.508 157.52Z"
          fill="currentColor"
        />
        <rect x="115" y="54" width="12" height="72" fill="currentColor" />
      </g>
    </svg>
  );
}

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
              {skill.icon === 'next-svg' ? (
                <NextJsIcon />
              ) : (
                <i className={`${skill.icon} skill-icon`}></i>
              )}
              <div className="skill-name">{skill.name}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;