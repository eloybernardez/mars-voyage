import React from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

const PriceTab = ({ price, time, description }) => {
  return (
    <div>
      <p>
        <b>Traveling time: </b>
        {time}
      </p>
      <p>
        <b>Technical information: </b>
        {description}
      </p>
      <p>
        <b>Price: </b>
        {price}
      </p>
      <Button variant="primary">
        <Link className="CTA" to="/ticket">
          See my ticket!
        </Link>
      </Button>
    </div>
  );
};

export default PriceTab;
