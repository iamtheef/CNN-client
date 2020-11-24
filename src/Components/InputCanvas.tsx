import React, { FC, useContext } from "react";
import { Row, Col } from "react-bootstrap";
import { InputContext } from "../Context/Input";

export const InputCanvas: FC = () => {
  const { input, isLink, imgPreview } = useContext(InputContext);

  return (
    <Row>
      <Col></Col>
      <Col>
        <img src={isLink ? input : imgPreview} alt="" id="input-canvas" />
      </Col>
    </Row>
  );
};
