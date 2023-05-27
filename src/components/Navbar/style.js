import styled from "styled-components";

const Container = styled.h1`
  width: 100%;
  height: 90px;
  padding: 0 130px;
  display: flex;
  align-items: center;
`;

const Img = styled.img``;

const Span = styled.span`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 600;
  font-size: 36px;
  line-height: 28px;
  color: #181818;
  margin-left: 17px;
`;

const Wrapper = styled.div`
  width: 100%;
  max-width: 1440px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
`;

const Link = styled.a`
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  color: #1f3347;
  margin-left: 10px;
`;

Wrapper.Logo = styled.div`
  display: flex;
  align-items: center;
`;

Wrapper.Link = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
`;

Wrapper.SignUpButton = styled.button`
  background: #6347f9;
  border-radius: 4px;
  border: none;
  font-size: 16px;
  line-height: 24px;
  width: 160px;
  height: 56px;
  text-align: center;
  color: #ffffff;
  cursor: pointer;
  &:active {
    transform: scale(0.98);
  }
  &:hover {
    background: yellowgreen;
  }
`;

export { Container, Wrapper, Img, Span, Link };
