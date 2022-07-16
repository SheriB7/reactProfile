import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../styles/resume.css";
import resume from "../images/myResume2022.jpg";


const image = [
    {
      img: resume,
      description: "",
     
    },
];

function Resume() {
  return (
    <section className="App-header">
      <Container id="resume-area">
        <Row className="mb-5 mt-3">
          <Col lg="8">
            <h1 className="resume">My Resume</h1>{" "}
            <hr className="t_border my-4 ml-0 text-center" />
          </Col>
        </Row>
        <div className="mb-5 resumeitemsBrowse">
          {image.map((data, i) => {
            return (
              <div key={i} className="resumeitem">
                <img src={data.img} alt="" />
                <div className="content">
                  <p className = "description">{data.description}</p> 
                  <a
                className="w-100 alight-text-center"
                href="https://www.myperfectresume.com/me/sheri-brown"
              >
                Digital Resume
              </a>        
                  {/* <a className = "description" rel="noreferrer" href={data.link} target="_blank">
                Download Resume                 </a> */}
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

export default Resume;

// export default Resume;
//     <div className="brassborder darkbg p-2 shadow">
//       <h1>Resume</h1>
//       <a
//         className="w-100 alight-text-center"
//         href="https://www.myperfectresume.com/me/sheri-brown"
//       >
//         Download Resume
//       </a>
//       <div className="d-flex justify-content-center">
//         <img src={process.env.PUBLIC_URL + "Resume2022.jpg"}></img>
//       </div>
//     </div>
//   );
// }
