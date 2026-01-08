import { Container, Row, Col } from "react-bootstrap"
import { ArrowRightCircle } from "react-bootstrap-icons"
import Port1 from '../img/port1.jpg'
import { useEffect, useState } from "react"
import { motion } from "framer-motion"

export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const toRotate = ["Web Developer", "Web Designer", "UI/UX Designer"];
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const period = 2000;
  
    useEffect(() => {
      let ticker = setInterval(() => {
        tick();
      }, delta);
  
      return () => {
        clearInterval(ticker);
      };
    }, [text]);
  
    const tick = () => {
      let i = loopNum % toRotate.length;
      let fullText = toRotate[i];
      let updatedText = isDeleting
        ? fullText.substring(0, text.length - 1)
        : fullText.substring(0, text.length + 1);
  
      setText(updatedText);
  
      if (isDeleting) {
        setDelta((prevDelta) => prevDelta / 2);
      }
  
      if (!isDeleting && updatedText === fullText) {
        setIsDeleting(true);
        setDelta(period);
      } else if (isDeleting && updatedText === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        setDelta(500);
      }
    };
  
    return (
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <motion.div
                            initial={{ opacity: 0, x: -100 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <span className="tagline">Welcome to my portfolio</span>
                            <h1>{'Hi, I`m Martins'} <span className="wrap">{text}</span></h1>
                            <p>I am a dedicated    Developer with a passion for building innovative digital solutions. With expertise in modern web technologies, I transform complex ideas into elegant, user-centric applications. Explore my work and let's build something amazing together.</p>
                            <button onClick={() => console.log('connect')}>
                                let's connect <ArrowRightCircle size={25} />
                            </button>
                        </motion.div>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.5 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8 }}
                        >
                            <motion.img 
                                src={Port1} 
                                alt="Header Img" 
                                animate={{
                                    y: [0, -20, 0],
                                    rotateZ: [0, 5, 0],
                                    rotateX: [0, 10, 0],
                                    perspective: 1000
                                }}
                                transition={{
                                    duration: 5,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }}
                                style={{ transformStyle: "preserve-3d" }}
                            />
                        </motion.div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
        
      
        

    }
