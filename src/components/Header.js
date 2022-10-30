import React from "react";
import { Navbar, Nav, Container, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../styles/NavLink.scss";

const Header = () => {
  return (
    <Navbar bg="dark" expand="lg">
      <Container>
        <Image
          style={{ width: 50 }}
          fluid
          as="img"
          src="https://cdn-icons-png.flaticon.com/512/3912/3912342.png"
        />
        <p className="px-2 mb-0 NavLink-title">
          Mars Voyage <br />{" "}
          <span className="fs-6 text-light ">Martians, we come in peace</span>
        </p>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse
          id="basic-navbar-nav"
          className="d-flex justify-content-end"
        >
          <Nav>
            <Nav.Link>
              <Link className="NavLink" to="/">
                Home
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link className="NavLink" to="/ticket">
                Ticket
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link className="NavLink" to="/weather">
                Weather
              </Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
