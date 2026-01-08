import { Col, Row, Container } from "react-bootstrap"
import { FaGithub, FaLinkedin, FaWhatsapp, FaFacebook } from 'react-icons/fa';

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col sm={6} className="text-center text-sm-start">
            <span className='logo'>TOMMAX</span>
          </Col>
          <Col sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://github.com/Tommax2"><FaGithub color="white" size={20} /></a>
              <a href="https://www.linkedin.com/in/martins-olumi-9b6b07317"><FaLinkedin color="white" size={20} /></a>
              <a href="https://wa.me/2348110736175"><FaWhatsapp color="white" size={20} /></a>
              <a href="#"><FaFacebook color="white" size={20} /></a>
            </div>
            <p>© 2026 Martins(TOMMAX). All Rights Reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
