import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  display: flex;
  padding: 0 130px;
`;

Container.Wrapper = styled.div`
  width: 100%;
  max-width: 1440px;
  display: flex;
  flex-wrap: wrap;
  row-gap: 24px;
  gap: 1rem;
  justify-content: center;
`;

export { Container };
