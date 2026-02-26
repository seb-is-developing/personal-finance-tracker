import "./footer.css";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer-container">
        <div className="site-footer-brand">
          <h3 className="site-footer-title">Personal Finance Tracker</h3>
          <p className="site-footer-description">
            Build smarter money habits with clear insights, practical budgeting,
            and long-term financial confidence.
          </p>
        </div>

        <div className="site-footer-links-group">
          <h4>Product</h4>
          <a href="#">Features</a>
          <a href="#">Pricing</a>
          <a href="#">Security</a>
        </div>

        <div className="site-footer-links-group">
          <h4>Company</h4>
          <a href="#">About</a>
          <a href="#">Contact</a>
          <a href="#">Careers</a>
        </div>

        <div className="site-footer-links-group">
          <h4>Legal</h4>
          <a href="#">Privacy</a>
          <a href="#">Terms</a>
          <a href="#">Cookies</a>
        </div>

        <div className="site-footer-social">
          <h4>Follow Us</h4>
          <div className="site-footer-social-links">
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <rect
                  x="3"
                  y="3"
                  width="18"
                  height="18"
                  rx="5"
                  ry="5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                />
                <circle
                  cx="12"
                  cy="12"
                  r="4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                />
                <circle cx="17.4" cy="6.6" r="1.2" fill="currentColor" />
              </svg>
            </a>
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path
                  fill="currentColor"
                  d="M6.8 8.6a1.65 1.65 0 1 1 0-3.3 1.65 1.65 0 0 1 0 3.3Zm-1.5 1.6h3V19h-3v-8.8Zm5.3 0h2.9v1.2h.1c.4-.8 1.4-1.5 2.9-1.5 3.1 0 3.7 2 3.7 4.7V19h-3v-3.8c0-.9 0-2.1-1.3-2.1s-1.5 1-1.5 2v3.9h-3v-8.8Z"
                />
              </svg>
            </a>
            <a
              href="https://www.x.com"
              target="_blank"
              rel="noreferrer"
              aria-label="X"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path
                  fill="currentColor"
                  d="M4.6 4.5h3.7l4.1 5.5 4.8-5.5h2.3l-6 6.8 6.5 8.2h-3.8l-4.5-5.9-5.2 5.9H4.1l6.4-7.2-5.9-7.8Z"
                />
              </svg>
            </a>
            <a
              href="https://www.youtube.com"
              target="_blank"
              rel="noreferrer"
              aria-label="YouTube"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path
                  fill="currentColor"
                  d="M20.3 8.1a2.5 2.5 0 0 0-1.8-1.8C16.8 6 12 6 12 6s-4.8 0-6.5.3a2.5 2.5 0 0 0-1.8 1.8C3.4 9.8 3.4 12 3.4 12s0 2.2.3 3.9a2.5 2.5 0 0 0 1.8 1.8c1.7.3 6.5.3 6.5.3s4.8 0 6.5-.3a2.5 2.5 0 0 0 1.8-1.8c.3-1.7.3-3.9.3-3.9s0-2.2-.3-3.9ZM10.4 14.6v-5.2L15 12l-4.6 2.6Z"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>

      <div className="site-footer-bottom">
        <p>
          © {new Date().getFullYear()} Personal Finance Tracker. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
}
