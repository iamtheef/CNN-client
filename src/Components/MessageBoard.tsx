import React, { useContext, FC } from "react";
import { PredictionContext } from "../Context/Prediction";
import { Alert, Spinner, Col } from "react-bootstrap";

export const MessageBoard: FC = () => {
  const { error, prediction, isLoading } = useContext(PredictionContext);

  if (isLoading) {
    return (
      <Col>
        <Spinner animation="border" variant="light" className="spinner" />
      </Col>
    );
  } else if (prediction.success) {
    return (
      <Alert variant="success" className="message-board">
        {`It's a ${prediction.message}!`}
      </Alert>
    );
  } else if (error.length > 0) {
    return (
      <Alert variant="danger" className="message-board">
        {error}
      </Alert>
    );
  } else {
    return <div></div>;
  }
};
