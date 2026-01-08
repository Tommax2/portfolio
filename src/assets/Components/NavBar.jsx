
import { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FaGithub, FaLinkedin, FaWhatsapp, FaFacebook } from 'react-icons/fa';

export const NavBar = () =>{
    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);

     useEffect(() =>{
       const onScroll = () =>{
         if (window.scrollY > 50){
            setScrolled(true);
         } else{
            setScrolled(false);
         }
       }
       window.addEventListener("scroll", onScroll);
       return () => window.removeEventListener('scroll', onScroll);
     },[])
     const  onUpdateActiveLink = (value) => {
      setActiveLink(value);
     }
    return(
        <Navbar expand="lg" className={scrolled ? 'scrolled':"" }>
        <Container>
          <Navbar.Brand href="#home">
            <span className='logo'>TOMMAX</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home" className={activeLink === 'home'? 'active navbar-link' : "navbar-link"} onClick ={() => onUpdateActiveLink ('home')}>Home</Nav.Link>
              <Nav.Link href="#Skill" className={activeLink === 'Skill'? 'active navbar-link' : "navbar-link"} onClick ={() => onUpdateActiveLink ('Skill')}>Skill</Nav.Link>
              <Nav.Link href="#Projects" className={activeLink === 'Projects'? 'active navbar-link' : "navbar-link"} onClick ={() => onUpdateActiveLink ('Projects')}>Projects</Nav.Link>
           
            </Nav>
            
            <span className="navbar-text">
                <div className='social-icon'>
                    <a href="https://github.com/Tommax2"><FaGithub color="white" size={20} /></a>
                    <a href="https://www.linkedin.com/in/martins-olumi-9b6b07317?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"><FaLinkedin color="white" size={20} /></a>
                    <a href="https://wa.me/2348110736175"><FaWhatsapp color="white" size={20} /></a>
                    <a href="#"><FaFacebook color="white" size={20} /></a>
                </div>
                <button className='vvd' onClick={() => console.log('connect')}><span>Let's connect</span></button>
            </span>
           
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
    
}
