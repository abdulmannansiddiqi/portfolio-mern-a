import { useState, useEffect } from 'react';
import coaltradeImg from '../assets/projects/coaltrade.jpg'
import handmadeImg from '../assets/projects/handmade-crafts.jpg'
import daycareImg from '../assets/projects/daycare.jpg'

const imageMap = {
  'coaltrade.jpg': coaltradeImg,
  'handmade-crafts.jpg': handmadeImg,
  'daycare.jpg': daycareImg,
};

function Projects() {
  const [projectsList, setProjectsList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/api/projects`)
      .then((res) => res.json())
      .then((data) => {
        setProjectsList(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching projects:', error);
        setLoading(false);
      });
  }, []);

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

        {loading ? (
          <p style={{ textAlign: 'center', color: 'var(--muted)' }}>Loading projects...</p>
        ) : (
          <div className="projects-grid">
            {projectsList.map((proj) => (
              <div className="proj-card reveal" key={proj._id}>
                <div className="proj-thumb">
                  <img
                    src={imageMap[proj.image]}
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
        )}
      </div>
    </section>
  );
}

export default Projects;