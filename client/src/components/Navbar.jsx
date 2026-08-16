import { useState, useEffect } from "react";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 28);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav id="navbar" className={scrolled ? "scrolled" : ""}>
        <a href="#" className="nav-logo">AMS.</a>

        <ul className="nav-links">
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>

        <div className="nav-actions">
          <a href="/resume.pdf" target="_blank" rel="noreferrer" className="nav-resume">
            <i className="fas fa-file-alt"></i> Resume
          </a>
          <a href="#contact" className="nav-hire">Hire Me</a>
        </div>

        <button className={mobileOpen ? "hamburger open" : "hamburger"} onClick={() => setMobileOpen(!mobileOpen)}>
          <span></span><span></span><span></span>
        </button>
      </nav>

      <div className={mobileOpen ? "mobile-nav open" : "mobile-nav"}>
        <a href="#about" onClick={() => setMobileOpen(false)}>About</a>
        <a href="#skills" onClick={() => setMobileOpen(false)}>Skills</a>
        <a href="#projects" onClick={() => setMobileOpen(false)}>Projects</a>
        <a href="#contact" onClick={() => setMobileOpen(false)}>Contact</a>
        <a href="#contact" onClick={() => setMobileOpen(false)}>Hire Me</a>
        <a href="/resume.pdf" target="_blank" rel="noreferrer" className="mobile-resume">
          <i className="fas fa-file-alt"></i> Download Resume
        </a>
      </div>
    </>
  );
}

export default Navbar;