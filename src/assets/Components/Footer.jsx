import { Col, Row, Container } from "react-bootstrap"
import navIcon1 from '../img/github.jpg';
import navIcon2 from '../img/linkdelin.jpg';
import navIcon3 from '../img/whatapp.png';

export const Footer = () =>{
    return(
        <footer className="footer">
            <Container>
                <Row className = "align-item-center">
                    <Col sm={6}>
                    <span className='logo'>TOMMAX</span>
                    </Col>
                    <Col sm={6} className="text-center text-sm-end">
                     <div className="social-icon">
                     <a href="#"><img src={navIcon1} alt="" /></a>
                    <a href="#"><img src={navIcon2} alt=""/></a>
                    <a href="#"><img src={navIcon3} alt="" /></a>
                     </div>
                     <p>CopyRight 2024. All Right Resevered by tommax</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}