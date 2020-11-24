import React, { FC } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export const BackIcon: FC = () => {
  return (
    <Link to="/">
      <Button variant="light" className="back-button">
        {`<`}
      </Button>
    </Link>
  );
};
