import "../styles/footer.css";

function Footer() {
    return (
        <footer className="footer" id="footerText">
            <div className="content has-text-centered">
                <a
                    className="footText text-left"
                    href="https://github.com/SheriB7"
                    target="_blank"
                    rel="noreferrer"
                    
                >
                    *Github*
                </a>
                <a
                    className="footText justify-content-end"
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


// const Footer =
//   {
//     link: "https://www.linkedin.com/in/sheri-brown-0b012042/"
//   }
//   {
//     link: "https://github.com/SheriB7"
//   }

// function Contact() {
//     return (
//         <footer className='social-link'>
//             <a href={link} target='_blank' rel="noreferrer">LinkedIn</a>
//             <a href={githubUrl} target='_blank' rel="noreferrer">GitHub</a>

//         </footer>
//     );
// }


// export default Footer;