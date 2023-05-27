import React from "react";
import { Container, BannerIcon } from "./style.js";
const Banner = () => {
  return (
    <Container>
      <BannerIcon />
      <Container.Header>Tour Grid</Container.Header>
      <Container.P>Home - Tour Grid</Container.P>
    </Container>
  );
};

export default Banner;
