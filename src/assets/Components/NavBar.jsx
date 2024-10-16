
import { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import navIcon1 from '../img/github.jpg';
import navIcon2 from '../img/linkdelin.jpg';
import navIcon3 from '../img/whatapp.png';
export const NavBar = () =>{
    const {activeLink,setActiveLink} = useState('home');
    const {scrolled, setScrcolled} = useState(false);
     useEffect(() =>{
       const onScroll = () =>{
         if (window.scrollY > $0){
            setScrcolled(true);
         } else{
            setScrcolled(false);
         }
       }
       window.addEventListener("scroll",onscroll);
       return () => window.removeEventListener('scroll',onScroll);
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
                    <a href="https://github.com/Tommax2"><img src={navIcon1} alt="" /></a>
                    <a href="https://www.linkedin.com/in/martins-olumi-9b6b07317?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"><img src={navIcon2} alt=""/></a>
                    <a href="https://wa.me/2348110736175"><img src={navIcon3} alt="" /></a>
                </div>
                <button className='vvd' onClick={() => console.log('connect')}><span>Let's connect</span></button>
            </span>
           
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
    
}
