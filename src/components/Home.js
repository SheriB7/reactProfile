
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../styles/home.css";
import portfolio from "../images/portfolioPic.jpg";


const image = [
  {
    img: portfolio,
    description: "",
   
  },
  
];

function Home() {
  return (
    <section className="App-header">
      <Container id="home-area">
        <Row className="mb-5 mt-3">
          <Col lg="8">
            <h1 className="display-4 mb-4"> Sheri Brown </h1>
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
        <div className="mb-5 homeitemsBrowse">
          {image.map((data, i) => {
            return (
              <div key={i} className="homeitem">
                <img src={data.img} alt="" />
                {/* <div className="content">
                  <p className = "description">{data.description}</p>                  
                  <a className = "description" rel="noreferrer" href={data.link} target="_blank">
                    view about                 </a>
                </div> */}
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

export default Home;