import styled from "styled-components";
import bg from "../../assets/BG.svg";
import { ReactComponent as banner } from "../../assets/vector.svg";

const Container = styled.div`
  width: 100%;
  background-image: url(${bg});
  height: 310px;
  position: relative;
  margin: 20px 0 100px 0;
`;

const BannerIcon = styled(banner)`
  width: 100%;
`;

Container.Header = styled.h1`
  text-align: center;
  font-weight: 700;
  font-size: 36px;
  line-height: 28px;
  color: #1f3347;
  position: absolute;
  top: 40%;
  left: 45%;
  transform: translate(-50% -50%);
`;

Container.P = styled.p`
  position: absolute;
  top: 50%;
  left: 46%;
  transform: translate(-50% -50%);
`;
export { Container, BannerIcon };
