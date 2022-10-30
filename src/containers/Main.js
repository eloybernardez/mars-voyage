import React from "react";
import {
  Col,
  Container,
  Row,
  Image,
  Card,
  Badge,
  Tabs,
  Tab,
} from "react-bootstrap";
import PriceTab from "../components/PriceTab";
import "../styles/Main.scss";

const SHIPS = [
  {
    image:
      "https://www.universetoday.com/wp-content/uploads/2022/05/nauvoo-ship-expanse-1024x600.jpg",
    name: "Artemis III",
    description:
      "Named after the first mission to the Moon 50 years ago. Artemis III is the third ship built with the new technology that allow us to travel to Mars. Artemis III offers a cheap but comfortable trip to Mars.",
    technical: "Warp drive system powered by solar panels created by Elon Musk",
    speed: "0.1 ly/month",
    time: "6 months",
    price: "USD 100,000",
  },
  {
    image:
      "https://i.pinimg.com/originals/6f/5e/1b/6f5e1b7870f5894ff2d25f1130f1c0a0.jpg",
    name: "Laika VIII",
    description:
      "Named after the first dog in space. Laika VIII is the eighth ship built with top notch Russian tech. Laika VIII offers a slow but party-hard trip to Mars. Parties all day with free Vodka.",
    technical:
      "Quantum-fracture drive system powered with a secret Russian infusion",
    speed: "0.05 ly/month",
    time: "12 months",
    price: "USD 200,000",
  },
  {
    image: "https://i.redd.it/qkp4lzkbtutx.jpg",
    name: "Kaku II",
    description:
      "Named after the famous Japanese physicist. Kaku II is the most advanced ship built with non-human tech found in Mars after the First Contact. Kaku II offers a fast but lonely trip to Mars.",
    technical: "Alien flux-drive warping system powered by Dark Matter",
    speed: "1.1 ly/month",
    time: "1 month",
    price: "USD 1,000,000",
  },
];

const Main = () => {
  return (
    <Container className="mt-4">
      <Row className="align-items-center">
        <Col>
          <h1>
            <span className="Hero-title">Future is now!</span>
            <br /> Travel to <span className="Hero-mars">Mars</span> and settle
            in with your loved ones
          </h1>
        </Col>
        <Col>
          <picture style={{ width: 450, height: 450 }}>
            <Image
              src="https://cdn.mos.cms.futurecdn.net/A3dgJ9x55MdrMt7YniSYuQ.jpg"
              fluid
              rounded
            />
          </picture>
        </Col>
      </Row>
      <Row xs={1} md={2} className=" mt-5 g-4">
        <h2 className="Ship-title">Ships</h2>
        <h4 className="Ship-subtitle">
          Space-traveling was never so secure and fun!
        </h4>

        {SHIPS.map((ship, index) => (
          <Col key={`Travel-${index}`}>
            <Card style={{ height: 500 }}>
              <Card.Img variant="top" src={ship.image} />
              <Card.Body>
                <Card.Title>
                  <b>{ship.name}</b>
                </Card.Title>
                <Card.Text>
                  <p>{ship.description}</p>
                  <p>
                    <span className="Card-speed">Speed:</span>
                    {ship.speed}
                  </p>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
        <Col>
          <Card bg="dark" style={{ height: 500 }}>
            <Card.Img
              variant="top"
              fluid
              src="https://assets.rpgsite.net/images/images/000/041/703/original/me_normandy1.jpg"
            />
            <Card.Body>
              <Card.Title className="text-light">
                <Badge bg="warning" text="dark">
                  Classified
                </Badge>{" "}
                <b>SSV Normandy SR1</b>
              </Card.Title>
              <Card.Text className="text-light">
                <p>
                  Military experimental ship built with the most advanced tech
                  which origin is unknown. Some people say Aliens had built it.{" "}
                  <br />
                  Allowed passengers: Musk and friends only.
                </p>
                <p>
                  <span className="Card-speed">Speed:</span>
                  Classified
                </p>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row className="mt-5">
        <Col>
          <h2 className="Ship-title">Prices</h2>
        </Col>
        <Col>
          <h4 className="Ship-subtitle">Tickets affordable to everyone!</h4>
        </Col>

        <Row>
          <Col>
            <Tabs
              defaultActiveKey="artemis"
              id="uncontrolled-tab-example"
              className="mb-3 Tab"
            >
              {SHIPS.map((ship, index) => (
                <Tab
                  eventKey={ship.name}
                  title={ship.name}
                  key={`ship-${index}`}
                >
                  <PriceTab
                    description={ship.technical}
                    price={ship.price}
                    time={ship.time}
                  />
                </Tab>
              ))}
              <Tab eventKey="normandy" title="SSV Normandy SR1">
                <PriceTab
                  description="Classified"
                  price="Free... for Musk and friends"
                  time="4 days"
                />
              </Tab>
            </Tabs>
          </Col>
        </Row>
      </Row>
    </Container>
  );
};

export default Main;
