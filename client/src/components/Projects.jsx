import coaltradeImg from '../assets/projects/coaltrade.jpg'
import handmadeImg from '../assets/projects/handmade-crafts.jpg'
import daycareImg from '../assets/projects/daycare.jpg'

const projectsList = [
  {
    image: coaltradeImg,
    live: 'https://coaltrade-ai.vercel.app/',
    github: 'https://github.com/abdulmannansiddiqi',
    tags: ['React', 'Node.js', 'MongoDB', 'Flask', 'REST APIs'],
    title: 'Coal Trade — AI Marketplace',
    desc: 'A full-stack marketplace featuring AI-driven product search and recommendation via Flask APIs, with secure JWT-based multi-user authentication.',
  },
  {
    image: handmadeImg,
    live: 'http://handmade-crafts.fwh.is',
    github: 'https://github.com/abdulmannansiddiqi',
    tags: ['React.js', 'Node.js', 'MongoDB', 'Tailwind CSS'],
    title: 'Online Handmade Craft Store',
    desc: 'A robust e-commerce engine with a reactive shopping cart, scalable order management, and secure role-based multi-user access control.',
  },
  {
    image: daycareImg,
    live: 'http://daycaremanagementsystem.nfy.fyi',
    github: 'https://github.com/abdulmannansiddiqi',
    tags: ['PHP', 'MySQL', 'CSS3'],
    title: 'Daycare Management System',
    desc: 'A comprehensive admin dashboard for tracking child enrollment and staff workflows, backed by highly optimized database queries for rapid retrieval.',
  },
];

function Projects() {
  return (
    <section id="projects">
      <div className="projects-inner">
        <div className="projects-header reveal">
          <span className="section-tag">My Work</span>
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-sub" style={{ margin: '0 auto' }}>
            Real-world projects built with purpose — engineered for performance, scale, and clean architecture.
          </p>
          <div className="divider" style={{ marginLeft: 'auto', marginRight: 'auto' }}></div>
        </div>

        <div className="projects-grid">
          {projectsList.map((proj) => (
            <div className="proj-card reveal" key={proj.title}>
              <div className="proj-thumb">
                <img
                  src={proj.image}
                  alt={proj.title}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
                <div className="proj-overlay">
                  <a href={proj.live} target="_blank" rel="noreferrer" className="proj-link">Live Demo</a>
                  <a href={proj.github} target="_blank" rel="noreferrer" className="proj-link gh">
                    <i className="fab fa-github"></i> GitHub
                  </a>
                </div>
              </div>
              <div className="proj-body">
                <div className="proj-tags">
                  {proj.tags.map((tag) => (
                    <span className="proj-tag" key={tag}>{tag}</span>
                  ))}
                </div>
                <h3 className="proj-title">{proj.title}</h3>
                <p className="proj-desc">{proj.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;