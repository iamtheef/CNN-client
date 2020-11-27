import React, { FC, useContext } from "react";
import { Button, Row } from "react-bootstrap";
import { PredictionContext } from "../Context/Prediction";
import { MessageBoard } from "./MessageBoard";

export const Buttons: FC = () => {
  const { predict } = useContext(PredictionContext);

  return (
    <div>
      <Row>
        <Button
          variant="light"
          className="predict-button"
          onClick={async (e) => {
            await predict();
          }}
        >
          Guess
        </Button>
      </Row>
      <MessageBoard />
    </div>
  );
};
