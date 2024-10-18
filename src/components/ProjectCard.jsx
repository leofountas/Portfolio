import { Col } from "react-bootstrap";

export default function ProjectCard({ title, description, imgUrl, Url }) {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl}></img>
        <div className="proj-txtx">
          <h4>
            <a href={Url}>{title}</a>
          </h4>
          <span>{description}</span>
        </div>
      </div>
    </Col>
  );
}
