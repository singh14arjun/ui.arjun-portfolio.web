import React from "react";
import "../style/footer.css"; // create this CSS file

const Footer = () => {
  return (
    <footer className="footer bg-gray-900 text-white p-6 mt-10">
      <div className="footer-content">
        <div className="feedback-section">
          <h2>Feedback</h2>
          <p>Have suggestions or thoughts? We'd love to hear them!</p>
          <button className="feedback-button">Open Feedback Book</button>
        </div>

        <div className="bottom-section">
          <p>
            &copy; {new Date().getFullYear()} Arjun Singh. All rights reserved.
          </p>
          <div className="social-icons">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-github"></i>
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-linkedin"></i>
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-twitter"></i>
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i class="fa-brands fa-instagram"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
