import React from "react";
import logo from "../../assets/Logo- 1.png";
import { Box } from "../Footer/style.js";
import { SocialIcons } from "../../data";
const Footer = () => {
  return (
    <Box>
      <Box.Container>
        <Box.Row>
          {/* Explore Column */}
          <Box.Column>
            <Box.Heading>
              <img src={logo} alt="logo" />
              <h2>Explore</h2>
            </Box.Heading>
            <Box.FooterLink href="#">
              Continually productize compelling dome packed with all Elated
              utilize website and creating supply next-generation
            </Box.FooterLink>
            <Box.FooterLink href="#">
              <h2 style={{ marginBottom: "0.5rem" }}>Follow Us On:</h2>
              <Box.Icons>
                {SocialIcons.map((icon) => {
                  return (
                    <li key={icon.id}>
                      <img src={icon.img} alt="" />
                    </li>
                  );
                })}
              </Box.Icons>
            </Box.FooterLink>
          </Box.Column>
          {/* Tour Column */}
          <Box.Column>
            <Box.Heading>Tour Type</Box.Heading>
            <Box.FooterLink href="#">Adventure Tours</Box.FooterLink>
            <Box.FooterLink href="#">Group Tour</Box.FooterLink>
            <Box.FooterLink href="#">Seasonal Tours</Box.FooterLink>
            <Box.FooterLink href="#">Relaxation Toure</Box.FooterLink>
            <Box.FooterLink href="#">Family Friendly Tour</Box.FooterLink>
          </Box.Column>
          {/* Contact Info */}
          <Box.Column>
            <Box.Heading>Contact Info</Box.Heading>
            <Box.FooterLink href="#">
              88130-589-745-6987 <br /> +1655-456-523
            </Box.FooterLink>
            <Box.FooterLink href="#">
              Mon-Fri 09:00-18:00 <br /> (except public holidays)
            </Box.FooterLink>
            <Box.FooterLink href="#">
              25/2 Vokte Street Building <br /> Melborn City
            </Box.FooterLink>
          </Box.Column>
          {/* Gallery */}
          <Box.Column>
            <Box.Heading>Gallery</Box.Heading>
            <Box.Grid>
              <Box.Item></Box.Item>
              <Box.Item></Box.Item>
              <Box.Item></Box.Item>
              <Box.Item></Box.Item>
              <Box.Item></Box.Item>
              <Box.Item></Box.Item>
            </Box.Grid>
          </Box.Column>
        </Box.Row>
      </Box.Container>
    </Box>
  );
};
export default Footer;
