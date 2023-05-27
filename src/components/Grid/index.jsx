import React from "react";
import Card from "../Card";
import { Container } from "./style.js";
import { cardInfo } from "../../data";

const Grid = () => {
  return (
    <Container>
      <Container.Wrapper>
        {cardInfo.map((card) => {
          return <Card card={card} key={card.id} />;
        })}
      </Container.Wrapper>
    </Container>
  );
};

export default Grid;
