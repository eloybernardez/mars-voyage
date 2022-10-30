import React from "react";
import { Container, Row, Image, Col, ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <Container as="footer" fluid className="bg-dark mt-4 h-auto">
      <Row className="align-items-center">
        <Col>
          <figure
            style={{ width: 70, height: 100 }}
            className="d-flex align-items-center"
          >
            <Image
              src="https://api.nasa.gov/assets/img/favicons/favicon-192.png"
              alt="NASA logo"
              fluid
            />
            <figcaption className="text-light">
              Space information provided by{" "}
              <Link to="https://api.nasa.gov/">NASA</Link>
            </figcaption>
          </figure>
        </Col>
        <Col>
          <ListGroup horizontal>
            <ListGroup.Item
              action
              href="https://api.nasa.gov/assets/insight/InSight%20Weather%20API%20Documentation.pdf"
              variant="primary"
            >
              Documentation
            </ListGroup.Item>
            <ListGroup.Item action href="/" disabled variant="primary">
              Buy Merch
            </ListGroup.Item>
            <ListGroup.Item action variant="primary">
              Contact us
            </ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;
