// import React from "react";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "../styles/footer.css";


function Footer() {
    return (
        <footer className="footer" id="footerText">
            <div className="content has-text-spaced">
                <a
                    className="footText1"
                    href="https://github.com/SheriB7"
                    target="_blank"
                    rel="noreferrer"
                    
                >
                    {/* <FontAwesomeIcon icon="fa-brands fa-github" /> */}
                    *Github**
                </a>
                <a
                    className="footText2"
                    href="https://www.linkedin.com/in/sheri-brown-0b012042/"
                    target="_blank"
                    rel="noreferrer"
                    
                >
                    {/* <FontAwesomeIcon icon="fa-brands fa-linkedin" /> */}
                                     *LinkedIn*
                </a>

            </div>
        </footer>
    );
}

export default Footer;

