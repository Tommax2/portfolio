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
        className="project-card-wrapper"
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.3 }}
      >
        <div className="proj-imgbx">
          <img src={imgUrl} alt={title} />
        </div>
        <div className="proj-txtx">
          <h4>{title}</h4>
          <p>{description}</p>
          <a href={url} target="_blank" rel="noreferrer" className="view-project-link">View Project</a>
        </div>
      </motion.div>
    </Col>
  );
};
