import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <div className="footer-brand-row">
            <img className="nav-logo-img footer-logo-img" src="/logo.png" alt="" />
            <span className="nav-logo-text">
              Kii<span className="nav-logo-accent">Net</span> Media
            </span>
          </div>
          <p>Independent full-service digital agency. Founder-led. Established 2026.</p>
        </div>
        <div>
          <h4>Company</h4>
          <Link to="/services">Services</Link>
          <Link to="/process">Process</Link>
          <Link to="/about">About</Link>
        </div>
        <div>
          <h4>Contact</h4>
          <a href="mailto:kiinetmedia@gmail.com">kiinetmedia@gmail.com</a>
          <a href="tel:+919930345007">+91 99303 45007</a>
          <a href="tel:+919820334955">+91 98203 34955</a>
          <span className="muted">Remote · Worldwide</span>
        </div>
        <div>
          <h4>Social</h4>
          <a
            href="https://www.linkedin.com/company/kiinet-media/?viewAsMember=true"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn ↗
          </a>
          <a
            href="https://www.instagram.com/kiinet.media/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram ↗
          </a>
        </div>
      </div>
      <div className="footer-bottom container">
        <span>© {new Date().getFullYear()} KiiNet Media. All rights reserved.</span>
        <span className="mono">FULL-SERVICE DIGITAL AGENCY · EST. 2026</span>
      </div>
    </footer>
  );
}
