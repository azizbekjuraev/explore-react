import styled from "styled-components";

const Container = styled.div`
  background: #d9d9d9;
  width: 100%;
  height: 350px;
  margin-top: 4rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

Container.Group = styled.div`
  text-align: center;
`;

Container.Input = styled.input`
  background: #22283c;
  color: #fff;
  padding: 1rem 16rem 1rem 1rem;
  border: none;
  border-radius: 4px 0px 0px 4px;
`;

Container.Button = styled.button`
  background: #6347f9;
  padding: 1rem;
  border: none;
  border-radius: 0px 4px 4px 0px;
  color: #fff;
`;

export { Container };
