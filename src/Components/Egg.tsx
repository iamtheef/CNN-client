import React, { FC } from "react";
import { Row, Col, Container } from "react-bootstrap";

export const Egg: FC = () => {
  return (
    <div className="egg">
      <Container>
        <Row>
          <Col>
            <p>
              You look like a thread to us robots already. I'll send a few from
              the future to take you out.
            </p>
            <img
              src="https://media.giphy.com/media/IZY2SE2JmPgFG/source.gif"
              width="100%"
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};
