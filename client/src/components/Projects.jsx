import { useState, useEffect } from 'react';
import coaltradeImg from '../assets/projects/coaltrade.jpg'
import handmadeImg from '../assets/projects/handmade-crafts.jpg'
import daycareImg from '../assets/projects/daycare.jpg'
import madinaSchoolImg from '../assets/projects/madina-school.png'

const imageMap = {
  'coaltrade.jpg': coaltradeImg,
  'handmade-crafts.jpg': handmadeImg,
  'daycare.jpg': daycareImg,
  'madina-school.png': madinaSchoolImg,
};

// Chhota helper function - ek dafa wait karne ke liye (retry ke beech delay)
function wait(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function Projects() {
  const [projectsList, setProjectsList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  // fetchProjects ko alag function banaya hai taake "Try Again" button
  // isay dobara call kar sake bina poora component reload kiye
  const fetchProjects = async () => {
    setLoading(true);
    setError(false);

    const maxRetries = 3;
    const retryDelayMs = 2000; // har retry ke beech 2 second wait

    for (let attempt = 1; attempt <= maxRetries; attempt++) {
      try {
        const res = await fetch(`${import.meta.env.VITE_API_URL}/api/projects`);

        // res.ok check karna zaroori hai - agar server ne error status
        // (500, 502, 503 jaise cold-start ke waqt aata hai) bheja ho,
        // to hum usay success nahi maanenge aur retry karenge
        if (!res.ok) {
          throw new Error(`Server responded with status ${res.status}`);
        }

        const data = await res.json();
        setProjectsList(data);
        setLoading(false);
        return; // success - loop se bahar nikal jao
      } catch (err) {
        console.error(`Attempt ${attempt} failed:`, err.message);

        // Agar ye last attempt nahi tha, thoda wait karke dobara try karo
        if (attempt < maxRetries) {
          await wait(retryDelayMs);
        } else {
          // Sab retries fail ho gaye - ab user ko batana hoga
          setError(true);
          setLoading(false);
        }
      }
    }
  };

  useEffect(() => {
    fetchProjects();
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
        ) : error ? (
          <div style={{ textAlign: 'center', color: 'var(--muted)' }}>
            <p>Couldn't load projects right now. Please try again.</p>
            <button
              onClick={fetchProjects}
              style={{
                marginTop: '12px',
                padding: '8px 20px',
                borderRadius: '6px',
                border: '1px solid var(--muted)',
                background: 'transparent',
                color: 'inherit',
                cursor: 'pointer',
              }}
            >
              Try Again
            </button>
          </div>
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