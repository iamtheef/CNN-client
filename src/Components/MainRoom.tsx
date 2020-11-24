import React, { FC } from "react";
import { MainForm } from "./MainForm";
import { Container } from "react-bootstrap";
import { InputProvider } from "../Context/Input";
import { PredictionProvider } from "../Context/Prediction";
import { InputCanvas } from "./InputCanvas";
import { Buttons } from "./Buttons";
import { InfoIcon } from "../assets/InfoIcon";

export const MainRoom: FC = () => {
  return (
    <InputProvider>
      <PredictionProvider>
        <Container>
          <InfoIcon />
          <InputCanvas />
          <MainForm />
          <Buttons />
        </Container>
      </PredictionProvider>
    </InputProvider>
  );
};
