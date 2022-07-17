
import React from "react";
import { Container } from "react-bootstrap";
import  "../styles/about.css";

function About() {
    return (
        
            <section className="App-about">
            {/* className="App-header" id="about-area" */}
                <Container id="home-area">
                <hr className="t_border my-4 ml-5 text-left" />   
            <h1>About Me</h1>
            
            <p>
                As a junior full stack developer I have worked with  teams to build a website and other applications.
                Communicating with front-end and back-end engineers. I work well with project leads. I give my full
                support. This is a continueing education and enjoy learning something new.
            </p>
            </Container>
            </section>
        
    );
}

export default About;