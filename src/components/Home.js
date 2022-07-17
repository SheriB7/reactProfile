
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
            <h1 className="display-4 mb-4 contact-about"> Sheri Brown </h1>
            <hr />
            </Col>
        </Row>
        <div className="mb-5 homeitemsBrowse">
        {/* style={{ backgroundImage:`url(${image})` }} */}
          {image.map((data, i) => {
            return (
              
              <div key={i} className="homeitem">
                <img src={data.img} alt="" />
                
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

export default Home;