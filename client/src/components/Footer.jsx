function Footer() {
  return (
    <footer>
      <a href="#" className="footer-logo">Abdul Mannan Siddiqi</a>
      <div className="social-links">
        <a href="https://github.com/abdulmannansiddiqi" target="_blank" rel="noreferrer" className="social-link" title="GitHub">
          <i className="fab fa-github"></i>
        </a>
        <a href="https://www.linkedin.com/in/abdul-mannan-siddiqi-62a04b332" target="_blank" rel="noreferrer" className="social-link" title="LinkedIn">
          <i className="fab fa-linkedin-in"></i>
        </a>
        <a href="https://instagram.com/thedev404" target="_blank" rel="noreferrer" className="social-link" title="Instagram">
          <i className="fab fa-instagram"></i>
        </a>
        <a href="mailto:abdulmannansiddiqi7@gmail.com" className="social-link" title="Email">
          <i className="fas fa-envelope"></i>
        </a>
        <a href="https://wa.me/923069035379" target="_blank" rel="noreferrer" className="social-link" title="WhatsApp">
          <i className="fab fa-whatsapp"></i>
        </a>
      </div>
      <p className="footer-copy">
        © {new Date().getFullYear()} <span>Abdul Mannan Siddiqi</span>. Designed &amp; engineered in Lahore.
      </p>
    </footer>
  );
}

export default Footer;