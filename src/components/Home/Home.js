import "./Home.css";
import { Button, Card, CardGroup, Carousel } from "react-bootstrap";
const Home = () => {
  return (
    <div>
      <div>
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://language-school.cmsmasters.net/wp-content/uploads/2016/01/home-bg-4-1.jpg"
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://language-school.cmsmasters.net/wp-content/uploads/2016/01/home-bg-6.jpg"
              alt="Second slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://language-school.cmsmasters.net/wp-content/uploads/2016/01/home-bg-7.jpg"
              alt="Third slide"
            />
          </Carousel.Item>
        </Carousel>
      </div>
      <div className="language-container">
        <p className="choose">Choose Your Language</p>
        <CardGroup>
          <Card className="cards">
            <Card.Img
              className="course-img"
              variant="top"
              src="https://bit.ly/39oat5C"
            />
            <Card.Body>
              <Card.Title>ENGLISH LEARNING</Card.Title>
              <Button>$220</Button>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">12 week</small>
            </Card.Footer>
          </Card>
          <Card className="cards">
            <Card.Img
              className="course-img"
              variant="top"
              src="https://bit.ly/37M2K0Q"
            />
            <Card.Body>
              <Card.Title>GERMAN LEARNING</Card.Title>
              <Button>$230</Button>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
          </Card>
          <Card className="cards">
            <Card.Img
              className="course-img"
              variant="top"
              src="https://bit.ly/3yBShQL"
            />
            <Card.Body>
              <Card.Title>FRENCH LEARNING</Card.Title>
              <Button>$240</Button>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
          </Card>
          <Card className="cards">
            <Card.Img
              className="course-img"
              variant="top"
              src="https://bit.ly/3LpfHLH"
            />
            <Card.Body>
              <Card.Title>SPANISH LEARNING</Card.Title>
              <Button>$250</Button>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
          </Card>
        </CardGroup>
      </div>
    </div>
  );
};

export default Home;
