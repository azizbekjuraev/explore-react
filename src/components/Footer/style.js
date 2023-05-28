import styled from "styled-components";

const Box = styled.div`
  /* padding: 80px 60px; */
  background: linear-gradient(0deg, #0c1218, #0c1218);
  bottom: 0;
  @media (max-width: 1440px) {
    padding: 70px 30px;
  }
`;

Box.Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 80px 0 40px;
`;

Box.Column = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  /* margin-left: 80px; */
  width: 300px;
`;

Box.Row = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(185px, 1fr));
  grid-gap: 100px;

  @media (max-width: 1000px) {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  }
`;

Box.FooterLink = styled.a`
  color: #fff;
  margin-bottom: 20px;
  /* font-size: 18px; */
  text-decoration: none;

  &:hover {
    color: #6347f9;
    transition: 200ms ease-in;
  }
`;

Box.Icons = styled.ul`
  display: flex;
  list-style: none;
  gap: 1rem;
  align-items: center;
`;

Box.Heading = styled.div`
  font-size: 24px;
  color: #fff;
  margin-bottom: 20px;
  font-weight: bold;
  display: flex;
  align-items: center;
  gap: 1rem;
`;

Box.Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.5rem;
`;

Box.Item = styled.div`
  border: 1px solid green;
  width: 100px;
  height: 100px;
  display: flex;
  gap: 1rem;
  background: #d9d9d9;
  border-radius: 4px;
`;

export { Box };
