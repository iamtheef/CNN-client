import React, { FC } from "react";
import Particles from "react-tsparticles";
import { options } from "../assets/particles";

export const Background: FC = () => {
  return (
    <Particles
      className="particles"
      canvasClassName="canvas"
      options={options}
    />
  );
};
