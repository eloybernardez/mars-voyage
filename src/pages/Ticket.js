import React, { useState } from "react";
import { Form, Button, Container } from "react-bootstrap";
import "../styles/Ticket.scss";

const USERS = [
  { email: "johndoe@gmail.com", pass: "DoeAdmin" },
  { email: "janedoe@gmail.com", pass: "DoeAdmin" },
];

const Ticket = () => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [isValid, setIsValid] = useState(false);

  const handleEmail = (data) => {
    setEmail(data);
  };

  const handlePass = (data) => {
    setPass(data);
  };

  const handleValidation = () => {
    if (
      USERS.find((user) => user.email === email) &&
      USERS.find((user) => user.pass === pass)
    ) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  };

  return (
    <Container className="FormContainer">
      {!isValid ? (
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              onChange={(data) => handleEmail(data.target.value)}
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              onChange={(data) => handlePass(data.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me to start login" />
          </Form.Group>
          <Button variant="primary" type="button" onClick={handleValidation}>
            Submit
          </Button>
        </Form>
      ) : (
        <h1>Validated!</h1>
      )}
    </Container>
  );
};

export default Ticket;
