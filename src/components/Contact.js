import React, { useState } from "react";
import { Container, Row, Col, Alert, Button, Form } from "react-bootstrap";
import "../styles/contact.css";
import axios from "axios";

const Contact = () => {
  const [formData, setFormdata] = useState({
    email: "",
    name: "",
    message: "",
    loading: false,
    show: false,
    alertmessage: "",
    variant: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      service_id: "service_b1c1z6v",
      template_id: "template_y4njkta",
      user_id: "4uycf6jI6rYxV6PB9",
      template_params: {
        email: formData.email,
        name: formData.name,
        message: formData.message,
      },
    };
    setFormdata({ ...formData, loading: true });
    try {
      await axios.post("https://api.emailjs.com/api/v1.0/email/send", data);
      setFormdata({
        email: "",
        name: "",
        message: "",
        loading: false,
        show: false,
        alertmessage: "",
        variant: "",
      });
    } catch (error) {
      console.error(error);
    }
  };

  const handleChange = (e) => {
    const currentForm = {
      ...formData,
      [e.target.name]: e.target.value,
    };
    console.log(currentForm);
    setFormdata(currentForm);
  };
  return (
    <section className="App-header">
      <Container id="contact-area">
        <Row className="mb-5 mt-3">
          <Col lg="8">
            <h1 className="display-4 mb-4 contact-about">
              Contact Information
            </h1>
            <hr />
          </Col>
        </Row>
        <Row>
          <Col lg="12">
            <Alert
              className={formData.show}
              variant={formData.variant}
              onClose={() => setFormdata({ show: false })}
            ></Alert>
          </Col>
          <Col lg="5" className="mb-5">
            <h2 className="py-4 contact-about">How to reach me!</h2>
            <div className="contact-about">
              Email: <a href="mailto:sherib70@gmail.com"> sherib70@gmail</a>
              <br />
              <br />
            </div>
          </Col>
          <Col lg="7" className="d-flex align-items-center">
                  <Form onSubmit={handleSubmit} className="contact-form w-100">
              <Row>
                <Col lg="6" className="form-group">
                  <input
                    className="form-control"
                    id="name"
                    name="name"
                    placeholder="Your Contact Information"
                    // value={formData.name || ""}
                    type="text"
                    // required
                    // onChange={handleChange}
                  />
                </Col>
                <Col lg="6" className="form-group">
                  <input
                    className="form-control"
                    id="name"
                    name="name"
                    placeholder="Name:"
                    value={formData.name || ""}
                    type="text"
                    required
                    onChange={handleChange}
                  />
                </Col>
                <Col lg="6" className="form-group">
                  <input
                    className="form-control rounded-0"
                    id="email"
                    name="email"
                    placeholder="Email:"
                    type="email"
                    value={formData.email || ""}
                    required
                    onChange={handleChange}
                  />
                </Col>
              </Row>
              <textarea
                className="form-control"
                id="message"
                name="message"
                placeholder="Leave A Message"
                rows="7"
                value={formData.message}
                required
                onChange={handleChange}
              ></textarea>
              <br />
              <Row>
                <Col lg="12" className="form-group">
                  <Button className="mb-5" id="subButton" type="submit">
                    {formData.loading ? "Sending" : "Send"}
                  </Button>
                </Col>
              </Row>
            </Form>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;
