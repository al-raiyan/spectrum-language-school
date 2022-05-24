import React from "react";
import { Button, Card, CardGroup } from "react-bootstrap";
import "./Course.css";
const Course = (props) => {
  const { name, img, price } = props.course;
  return (
    <div>
      <CardGroup>
        <Card className="cards">
          <Card.Img className="course-img" variant="top" src={img} />
          <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Button>${price}</Button>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">12 week</small>
          </Card.Footer>
        </Card>
      </CardGroup>
    </div>
  );
};

export default Course;
