function Hero() {
  return (
    <section id="hero">
      <div className="hero-grid"></div>
      <div className="hero-glow"></div>
      <div className="hero-content">
        <div className="hero-badge">
          <span className="badge-dot"></span>
          Open to freelance & full-time remote roles
        </div>
        <h1 className="hero-name">
          Abdul Mannan<br /><span>Siddiqi</span>
        </h1>
        <p className="hero-role">Full Stack Developer</p>
        <p className="hero-tagline">
          Engineering fast, scalable, and elegantly crafted web applications — from pixel-perfect interfaces to resilient back-end systems.
        </p>
        <div className="hero-meta">
          <div className="hero-meta-item">
            <i className="fas fa-map-marker-alt"></i>
            <span>Lahore, Pakistan</span>
          </div>
          <div className="hero-meta-item">
            <i className="fas fa-envelope"></i>
            <span>abdulmannansiddiqi7@gmail.com</span>
          </div>
        </div>
        <div className="hero-btns">
          <a href="#projects" className="btn-fill">View My Work &nbsp;→</a>
          <a href="#contact" className="btn-ghost">Contact Me</a>
        </div>
      </div>
      <div className="hero-scroll">
        <div className="scroll-line"></div>
        <span>scroll</span>
      </div>
    </section>
  );
}

export default Hero;