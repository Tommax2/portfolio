import { Col } from "react-bootstrap";
import { motion } from "framer-motion";

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5 }
  }
};

export const ProjectCards = ({ title, description, imgUrl, url }) => {
  return (
    <Col sm={6} md={4}>
      <motion.div
        variants={cardVariants}
        className="proj-imgbx"
        whileHover={{ 
          scale: 1.05,
          rotateY: 15,
          rotateX: 5,
          perspective: 1000
        }}
        transition={{ duration: 0.3 }}
        style={{ transformStyle: "preserve-3d" }}
      >
        <img src={imgUrl} alt={title} />
        <div className="proj-txtx">
          <a href={url} target="_blank" rel="noreferrer">{title}</a><br></br>
          <span>{description}</span>
        </div>
      </motion.div>
    </Col>
  );
};
