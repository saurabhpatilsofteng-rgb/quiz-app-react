import React from "react";

function Footer() {
  return (
    <footer className="footer">
      <p>
        Developed by <strong>Saurabh</strong>
      </p>

      <p>
        Email:{" "}
        <a
          href="mailto:saurabhpatil.soft.eng@gmail.com"
          className="email-link"
        >
          saurabhpatil.soft.eng@gmail.com
        </a>
      </p>

      <p>
        © 2026 React Learning Platform
      </p>
    </footer>
  );
}

export default Footer;