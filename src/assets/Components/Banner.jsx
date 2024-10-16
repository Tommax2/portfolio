import { Container, Row , Col} from "react-bootstrap"
import { ArrowRightCircle } from "react-bootstrap-icons"
import Port1 from '../img/port1.jpg'
import { useEffect, useState } from "react"
    
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
  
    return(
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                    <span className="tagline">Welcome to my portfolio</span>
                    <h1>{'Hi I`m Martins'} <span className="wrap">{text}</span></h1>
                    <p>I grew up in kogi state,Nigeria And i have a great passion to do code since when i was little i do pick interest in online activites and love tech,here are some details to get in touch with me or know more about me </p>
                     <button onClick={()=> console.log('connect')}>
                        let's connect < ArrowRightCircle  size ={25}/>
                     </button>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                    <img src={Port1} alt="" />
                    </Col>
                </Row>
            </Container>

        </section>
    )
        
      
        

    }





