import React from "react";
import { Container } from "../NewsLetter/style.js";
const NewsLetter = () => {
  return (
    <Container>
      <Container.Group>
        <h1 style={{ marginBottom: "1.5rem" }}>Sign Up For Our Newsletter</h1>
        <Container.Input type="text" placeholder="Enter your e-mail here" />
        <Container.Button>Subscribe Now</Container.Button>
      </Container.Group>
    </Container>
  );
};

export default NewsLetter;
