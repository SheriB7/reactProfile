import React from "react";
import "../styles/footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="content has-text-spaced">
        <a
          className="footText1"
          href="https://github.com/SheriB7"
          target="_blank"
          rel="noreferrer"
        >
          *Github**
        </a>
        <a
          className="footText2"
          href="https://www.linkedin.com/in/sheri-brown-0b012042/"
          target="_blank"
          rel="noreferrer"
        >
          *LinkedIn*
        </a>
      </div>
    </footer>
  );
}

export default Footer;
