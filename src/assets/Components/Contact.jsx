import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../img/contact.jpeg";

export const Contact = () => {
  const FormInitialDetails = {
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    message: "",
  };
  const [formDetails, setFormDetails] = useState(FormInitialDetails);
  const [buttonText, setButtonText] = useState("Send");
  const [status, setStatus] = useState({});
  const onFormUpdate = (category, value) => {
    setFormDetails({
      ...formDetails,
      [category]: value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setButtonText("Sending...");
    let response = await fetch("https://portfolio-server-5soy.onrender.com", {
      method: "POST",
      headers: {
        "Content-Type": "Application/json;charset=utf-8",
      },
      body: JSON.stringify(formDetails),
    });
    setButtonText("Send");
    let result = await response.json();
    setFormDetails(FormInitialDetails);
    if (result.code === 200) {
      setStatus({ success: true, message: "Message sent sucessfully" });
    } else {
      setStatus({
        success: false,
        message: "Something went wrong please try again later",
      });
    }
  };
  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col md={6}>
            <img src={contactImg} alt="" />
          </Col>
          <Col md={6}>
            <h2>Get In Touch</h2>
            <form onSubmit={handleSubmit}>
              <Row className="mt-3">
                <Col md={6}>
                  <input
                    type="text"
                    value={formDetails.firstname}
                    placeholder="First Name"
                    onChange={(e) => onFormUpdate("firstname", e.target.value)}
                  />
                </Col>
                <Col md={6}>
                  <input
                    type="text"
                    value={formDetails.lastname}
                    placeholder="Last Name"
                    onChange={(e) => onFormUpdate("lastname", e.target.value)}
                  />
                </Col>
              </Row>

              <Row className="mt-3">
                <Col md={12}>
                  <input
                    type="email"
                    value={formDetails.email}
                    placeholder="Email Address"
                    onChange={(e) => onFormUpdate("email", e.target.value)}
                  />
                </Col>
              </Row>

              <Row className="mt-3">
                <Col md={12}>
                  <input
                    type="tel"
                    value={formDetails.phone}
                    placeholder="Phone Number"
                    onChange={(e) => onFormUpdate("phone", e.target.value)}
                  />
                </Col>
              </Row>

              <Row className="mt-3">
                <Col md={12}>
                  <textarea
                    rows="6"
                    value={formDetails.message}
                    placeholder="Message"
                    onChange={(e) => onFormUpdate("message", e.target.value)}
                  />
                </Col>
              </Row>

              <Row className="mt-3">
                <Col md={12}>
                  <button type="submit">
                    <span>{buttonText}</span>
                  </button>
                </Col>
              </Row>

              {status.message && (
                <Row className="mt-3">
                  <Col md={12}>
                    <p
                      className={
                        status.success === false ? "danger" : "success"
                      }
                    >
                      {status.message}
                    </p>
                  </Col>
                </Row>
              )}
            </form>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
