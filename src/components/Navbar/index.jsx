import React from "react";
import logo from "../../assets/Logo- 1.png";
import { navLink } from "../../data.js";
import { Container, Img, Wrapper, Span, Link } from "./style.js";

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Wrapper.Logo>
          <Img src={logo} alt="" />
          <Span>Explore</Span>
        </Wrapper.Logo>
        <Wrapper.Link>
          {navLink.map((link) => {
            return <Link key={link.id}>{link.title}</Link>;
          })}
          <Wrapper.SignUpButton>Sign Up</Wrapper.SignUpButton>
        </Wrapper.Link>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
