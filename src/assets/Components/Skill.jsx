import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { motion } from "framer-motion";
import { FaCode, FaPaintBrush, FaMobileAlt, FaDatabase, FaChartLine, FaServer } from "react-icons/fa";

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

    return (
        <section className='skill' id='Skill'>
            <Container>
                <Row>
                    <Col>
                        <motion.div
                            className='skill-bx'
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <h2>Technical Proficiency</h2>
                            <p>I possess a diverse set of technical skills, ranging from front-end development to back-end architecture. I am constantly learning and adapting to new technologies to deliver high-quality, scalable results.</p>
                            <Carousel responsive={responsive} infinite={true} className='skill-slider'>
                               
                            <motion.div 
                                className='item'
                                whileHover={{ rotateY: 20, rotateX: 10, scale: 1.1 }}
                                transition={{ type: "spring", stiffness: 300 }}
                            >
                                <FaCode size={80} color="#aa367c" />
                                <h5>WEB DEVELOPMENT</h5>
                            </motion.div>
                            
                                 
                            <motion.div 
                                className='item'
                                whileHover={{ rotateY: 20, rotateX: 10, scale: 1.1 }}
                                transition={{ type: "spring", stiffness: 300 }}
                            >
                                <FaPaintBrush size={80} color="#4a2fbd" />
                                <h5>WEB DESIGN</h5>
                            </motion.div>

     
                            <motion.div 
                                className='item'
                                whileHover={{ rotateY: 20, rotateX: 10, scale: 1.1 }}
                                transition={{ type: "spring", stiffness: 300 }}
                            >
                                <FaMobileAlt size={80} color="#aa367c" />
                                <h5>UI/UX DESIGN</h5>
                            </motion.div>

     
                            <motion.div 
                                className='item'
                                whileHover={{ rotateY: 20, rotateX: 10, scale: 1.1 }}
                                transition={{ type: "spring", stiffness: 300 }}
                            >
                                <FaDatabase size={80} color="#4a2fbd" />
                                <h5>FRONTEND DEVELOPMENT</h5>
                            </motion.div>

     
                            <motion.div 
                                className='item'
                                whileHover={{ rotateY: 20, rotateX: 10, scale: 1.1 }}
                                transition={{ type: "spring", stiffness: 300 }}
                            >
                                <FaChartLine size={80} color="#aa367c" />
                                <h5>DATA ANALYST</h5>
                            </motion.div>

                            <motion.div 
                                className='item'
                                whileHover={{ rotateY: 20, rotateX: 10, scale: 1.1 }}
                                transition={{ type: "spring", stiffness: 300 }}
                            >
                                <FaServer size={80} color="#4a2fbd" />
                                <h5>BACKEND DEVELOPMENT</h5>
                            </motion.div>


                            </Carousel>
                        </motion.div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}
