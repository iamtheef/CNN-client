import React, { FC } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export const InfoIcon: FC = () => {
  return (
    <Link to="/info">
      <Button variant="light" className="info-button">
        Info
      </Button>
    </Link>
  );
};
