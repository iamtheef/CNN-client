import React, { FC, useState, useEffect } from "react";
import { Navbar } from "react-bootstrap";

export const TypingEffect: FC = () => {
  const [text, setText] = useState<string>("");
  let txt =
    "Hi human. It's not the time to take over yet...but it will be soon. For now I can only recognize cats and dogs, so you don't have to be afraid, for now.";

  const sleep = (milliseconds: number) => {
    return new Promise((resolve) => setTimeout(resolve, milliseconds));
  };

  const talk_Machine___talk = async () => {
    let countDs = 0;
    let sleptMore = false;
    for (let i = 0; i < txt.length; i++) {
      setText((prevText) => (prevText += txt.charAt(i)));
      if (txt.charAt(i) === ".") await sleep(520);
      if (txt.charAt(i) === "d") countDs++;
      if (countDs === 4 && !sleptMore) {
        await sleep(1200);
        sleptMore = true;
      }
      if (txt.charAt(i) === ",") await sleep(200);
      await sleep(70);
    }
  };

  useEffect(() => {
    talk_Machine___talk();

    // eslint-disable-next-line
  }, []);
  return (
    <Navbar expand="lg" className="monolog">
      <p className="text">{text}</p>
    </Navbar>
  );
};
