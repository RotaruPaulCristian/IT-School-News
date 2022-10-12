import React from "react";
import BootstrapAlert from "react-bootstrap/Alert";
import { Link } from "react-router-dom";

const Alert = () => {
  return (
    <BootstrapAlert variant="success">
      <BootstrapAlert.Heading>
        You have added this news to your favorites
      </BootstrapAlert.Heading>
      <hr />
      <p className="mb-0">
        Go to the{" "}
        <BootstrapAlert.Link as={Link} to="/favorites">
          favorites page
        </BootstrapAlert.Link>{" "}
        to access it
      </p>
    </BootstrapAlert>
  );
};

export default Alert;
