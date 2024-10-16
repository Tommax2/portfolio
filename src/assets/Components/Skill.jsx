import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import meter1 from '../img/percent85.jpg';

import meter2 from '../img/percent85.jpg';
import meter4 from '../img/percent85.jpg';
import meter5 from '../img/percent95.jpg';
export const Skill = () => {

    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };

    return(
        <section className='skill' id='Skill'>
            <Container>
                <Row>
                    <Col>
                    <div className='skill-bx'>

                        <h2>
                            Skills
                        </h2>
                        <p>Here are some of my skils </p>
                        <Carousel responsive={responsive} infinite={true} className='skill-slider'>
                               
                            <div className='item'>
                            <img src={meter4} alt="meter" />
                            <h5>Web DEVELOPMENT</h5>
                            </div>
                            
                                 
                            <div className='item'>
                            <img src={meter2} alt="meter" />
                            <h5>Web DESIGN</h5>
                            </div>

     
                            <div className='item'>
                            <img src={meter4} alt="meter" />
                            <h5>UI/UX DESIGN</h5>
                            </div>

     
                            <div className='item'>
                            <img src={meter5} alt="meter" />
                            <h5>FONTTEND DEVLOPMENT</h5>
                            </div>

     
                            <div className='item'>
                            <img src={meter4} alt="meter" />
                            <h5>CRYPTO ANALYSIS</h5>
                            </div>

                            <div className='item'>
                            <img src={meter1} alt="meter" />
                            <h5>BACKTEND DEVELOPMENT</h5>
                            </div>


                       </Carousel>
                    </div>
                    </Col>
                </Row>
            </Container>

        </section>
    )
}

