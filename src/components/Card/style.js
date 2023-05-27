import styled from "styled-components";

const Container = styled.div`
  width: 250px;
  height: 300px;
  border-radius: 0.5rem;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
`;

Container.Img = styled.img`
  width: 100%;
  height: 200px;
  border-radius: 0.5rem 0.5rem 0 0rem;
`;

Container.Header = styled.p`
  margin-bottom: 0.5rem;
  font-family: "Poppins";
  font-style: normal;
  text-align: center;
  color: #1f3347;
`;

Container.Icons = styled.div`
  font-size: 12px;
  text-align: center;
  padding: 0 1px 0 1px;
`;

Container.Price = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 0.3rem;
  padding: 0 2px 0 2px;
`;

Container.Location = styled.div``;

Container.Button = styled.button`
  background-color: #6347f9;
  color: #fff;
  border: none;
  border-radius: 2px;
  padding: 0.1rem 0.5rem 0.1rem 0.5rem;
`;

export { Container };
