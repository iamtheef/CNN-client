import React, { FC } from "react";
import { Container, Row, Card } from "react-bootstrap";
import { BackIcon } from "../assets/BackIcon";

export const Info: FC = () => {
  return (
    <div>
      <BackIcon />
      <Container className="info-page">
        <Row>
          <Card body>
            <h1>Some info</h1>
            <p>
              This app was designed by <b>Thergiakis Eftichios </b>by{" "}
              <b>November 2020</b>. It runs a flask API in the backend in order
              to retrieve the model and being able to make the predictions. The
              model as of the last training has an accuracy of 93%, not perfect
              but it can be better if it gets extensively trained in a larger
              dataset. You can always contact the developer of this app on the
              email <b>iamthteef_th@protonmail.com</b> and on discord under the
              nickname <b>Th#1833</b>.
            </p>
            <h6>{"Thanks for coming this far... :)"}</h6>

            <h5 style={{ marginTop: "3%" }}>Here's some AI fun facts:</h5>
            <ul>
              <li>
                A self learning super computer named Nautilus can predict the
                future, and it became famous when it was able to locate Osama
                Bin Laden.
              </li>
              <li>
                China plans to use Artificial Intelligence to gain global
                economic dominance by 2030.
              </li>
              <li>
                Microsoft is infusing AI into everything they deliver across
                computing platforms and experiences.
              </li>
              <li>
                When you interact with AI as a default voice it is mostly a
                female as studies have shown that both women and men prefer the
                sound of a female voice.{" "}
              </li>
              <li>80% of Artificial Intelligence professors are male.</li>
            </ul>
          </Card>
        </Row>
      </Container>
    </div>
  );
};
