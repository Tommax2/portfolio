import { Col } from "react-bootstrap";

export const ProjectCards = ({ title, description, imgUrl, url }) => {
  return (
    <Col sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} alt={title} />
        <div className="proj-txtx">
          <a href={url}>{title}</a><br></br>
          <span>{description}</span>
        </div>
      </div>
    </Col>
  );
};
