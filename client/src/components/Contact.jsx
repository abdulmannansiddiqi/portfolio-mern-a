import { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    if (!formData.name || !formData.email || !formData.message) {
      alert('Please fill in your name, email, and message.');
      return;
    }

    setSending(true);
    try {
      const response = await fetch('https://formspree.io/f/mojzeaok', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        alert('Something went wrong. Please try again or email me directly.');
      }
    } catch (error) {
      alert('Network error. Please try again or email me directly.');
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="contact">
      <div className="contact-inner">
        <div style={{ textAlign: 'center' }} className="reveal">
          <span className="section-tag">Get In Touch</span>
          <h2 className="section-title">Start a Conversation</h2>
          <p className="section-sub" style={{ margin: '0 auto' }}>
            Have a project, an idea, or just want to connect? I'm always open — reach out directly or send a note below.
          </p>
          <div className="divider" style={{ marginLeft: 'auto', marginRight: 'auto', marginBottom: 0 }}></div>
        </div>

        <div className="contact-grid">

          {/* LEFT: Direct Connect */}
          <div className="connect-side reveal d1">
            <h3 className="connect-headline">Let's<br /><span>Connect.</span></h3>
            <p className="connect-sub">Whether it's a freelance project, a full-time role, or just a conversation — I'm here and happy to talk.</p>
            <div className="connect-nodes">
              <div className="connect-node">
                <div className="node-icon"><i className="fas fa-envelope"></i></div>
                <div className="node-text">
                  <span className="node-label">Email</span>
                  <span className="node-val">
                    <a href="mailto:abdulmannansiddiqi7@gmail.com">abdulmannansiddiqi7@gmail.com</a>
                  </span>
                </div>
              </div>
              <div className="connect-node">
                <div className="node-icon"><i className="fas fa-map-marker-alt"></i></div>
                <div className="node-text">
                  <span className="node-label">Location</span>
                  <span className="node-val">Lahore, Pakistan</span>
                </div>
              </div>
              <div className="connect-node">
                <div className="node-icon"><i className="fab fa-whatsapp"></i></div>
                <div className="node-text">
                  <span className="node-label">WhatsApp</span>
                  <span className="node-val">
                    <a href="https://wa.me/923069035379" target="_blank" rel="noreferrer">+92 306 9035379</a>
                  </span>
                </div>
              </div>
            </div>
            <div className="connect-status">
              <span className="status-dot"></span>
              Open for freelance &amp; remote software roles
            </div>
          </div>

          {/* RIGHT: Form */}
          <div className="form-side reveal d2">
            <div className="form-row-2">
              <div className="form-group">
                <label>Name</label>
                <input type="text" name="name" placeholder="John Doe" value={formData.name} onChange={handleChange} />
              </div>
              <div className="form-group">
                <label>Email</label>
                <input type="email" name="email" placeholder="john@example.com" value={formData.email} onChange={handleChange} />
              </div>
            </div>
            <div className="form-group">
              <label>Subject</label>
              <input type="text" name="subject" placeholder="Project Inquiry" value={formData.subject} onChange={handleChange} />
            </div>
            <div className="form-group">
              <label>Message</label>
              <textarea name="message" placeholder="Tell me about your idea…" value={formData.message} onChange={handleChange}></textarea>
            </div>
            <button className="submit-arrow-btn" onClick={handleSubmit} disabled={sending}>
              {sending ? 'Sending...' : 'Send Message'}
              <span className="arrow-circle"><i className="fas fa-arrow-right"></i></span>
            </button>
            {submitted && (
              <div className="form-success show">
                <i className="fas fa-check-circle"></i>
                Message sent! I'll get back to you within 24 hours.
              </div>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}

export default Contact;