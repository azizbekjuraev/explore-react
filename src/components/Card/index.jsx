import React from "react";
import { Container } from "../Card/style.js";
const Card = ({ card }) => {
  const { id, title, day, person, rating, review, location, price, img, icon } =
    card;
  return (
    <Container>
      <Container.Img src={img} alt="" />

      <Container.Header>{title}</Container.Header>
      <Container.Icons>
        <i className="fa-solid fa-clock"></i>
        <span>{day}</span>
        <i className="fa-solid fa-people-group"></i>
        <span>{person}</span>
        <i className="fa-solid fa-star"></i>
        <span>{rating}</span>
        <span>{review}</span>
      </Container.Icons>
      <Container.Price>
        <Container.Location>
          <a
            style={{ textDecoration: "none" }}
            href="https://goo.gl/maps/nKfrB9JSSeu3z3eU7?coh=178572&entry=tt"
          >
            <i className="fa-solid fa-location-dot"></i>
            <span className="small">Bali, Indonesia</span>
          </a>
        </Container.Location>
        <span>
          <Container.Button style={{ cursor: "pointer" }} className="price-btn">
            $1200
          </Container.Button>
        </span>
      </Container.Price>
    </Container>
  );
};

export default Card;
