import profileImg from '../assets/profile.jpg'

function About() {
  return (
    <section id="about">
      <div className="about-grid">

        {/* Info Card */}
        <div className="about-card reveal">
          <div className="about-avatar-img">
            <img src={profileImg} alt="Abdul Mannan Siddiqi" />
          </div>
          <div className="about-card-name">Abdul Mannan Siddiqi</div>
          <div className="about-card-role">Full Stack Developer</div>
          <div className="about-sep"></div>
          <div className="info-row">
            <i className="fas fa-map-marker-alt"></i>
            <span>Lahore, Pakistan</span>
          </div>
          <div className="info-row">
            <i className="fas fa-envelope"></i>
            <a href="mailto:abdulmannansiddiqi7@gmail.com">abdulmannansiddiqi7@gmail.com</a>
          </div>
          <div className="info-row">
            <i className="fab fa-whatsapp"></i>
            <a href="https://wa.me/923069035379" target="_blank" rel="noreferrer">+92 306 9035379</a>
          </div>
          <div className="info-row">
            <i className="fab fa-github"></i>
            <a href="https://github.com/abdulmannansiddiqi" target="_blank" rel="noreferrer">github.com/abdulmannansiddiqi</a>
          </div>
          <div className="info-row">
            <i className="fab fa-linkedin-in"></i>
            <a href="https://www.linkedin.com/in/abdul-mannan-siddiqi-62a04b332" target="_blank" rel="noreferrer">LinkedIn Profile</a>
          </div>
          <div className="stat-strip">
            <div className="stat-box">
              <div className="stat-num">10+</div>
              <div className="stat-lbl">Projects</div>
            </div>
            <div className="stat-box">
              <div className="stat-num">13+</div>
              <div className="stat-lbl">Technologies</div>
            </div>
            <div className="stat-box">
              <div className="stat-num">∞</div>
              <div className="stat-lbl">Passion</div>
            </div>
          </div>
        </div>

        {/* About Text */}
        <div className="about-text-wrap reveal d1">
          <span className="section-tag">About Me</span>
          <h2 className="section-title">Thoughtful Engineer,<br />Passionate Builder</h2>
          <div className="divider"></div>
          <p>I'm <strong>Abdul Mannan Siddiqi</strong>, a Full Stack Web Developer based in Lahore, Pakistan. I build fast, scalable, and polished web applications that solve real problems — with clean architecture and great user experiences at the core.</p>
          <p>My stack spans the full spectrum: <strong>React.js</strong> and <strong>Tailwind CSS</strong> on the frontend; <strong>Node.js / Express</strong> and <strong>PHP / Laravel</strong> on the backend; and production databases including <strong>MongoDB</strong> and <strong>MySQL</strong>. I've shipped AI-integrated platforms using Flask APIs and built role-based multi-user systems from scratch.</p>
          <p>Great software lives at the intersection of technical precision and thoughtful design. Every line I write is intentional — optimized for performance, readability, and long-term maintainability.</p>
          <a href="#contact" className="btn-fill" style={{ fontSize: '14px', padding: '12px 26px', marginTop: '4px' }}>
            Let's Work Together &nbsp;→
          </a>
        </div>

      </div>
    </section>
  );
}

export default About;