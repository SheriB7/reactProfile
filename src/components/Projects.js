import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../styles/projects.css";
import flores from "../images/PastelPinkPurpleBouquet.jpeg";
import cooking from "../images/cooking.png";

const portfolioImages = [
  {
    img: flores,
    description: "Flores Rosa Emilia",
    link: "https://flores-rosa-emilia.herokuapp.com/",
  },
  {
    img: cooking,
    description: "Home Cooking",
    link: "https://github.com/SheriB7/home-cooking-app-project-1",
  },
];

function Projects() {
  return (
    <section className="App-header">
      <Container id="projects-area">
        <Row className="mb-5 mt-3">
          <Col lg="8">
            <h1 className="display-4 mb-4"> My Projects </h1>{" "}
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
        <div className="mb-5 projectItemsBrowse">
          {portfolioImages.map((data, i) => {
            return (
              <div key={i} className="projectItem">
                <img src={data.img} alt="" />
                <div className="content">
                  <p className = "description">{data.description}</p>                  
                  <a className = "description" rel="noreferrer" href={data.link} target="_blank">
                    view project
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

export default Projects;

// export default function Projects() {
//     return (
//         <div>
//             <h1>My Projects</h1>
//             <p>

//             </p>
//         </div>
//     );
// }
