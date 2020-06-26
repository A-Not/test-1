import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";

export const About = () => (
  <div>
    <Jumbotron className="jb">
      <Container>
        <h1 className="ah1">ABOUT</h1>
        <br />
        <center>
          <p className="aboutp1">
            Pests, diseases, and fungi have become a real threat for many
            producers across the globe for a very long time. While some can be
            mitigated by using certain chemicals, others have little to no
            remedy. Also, these diseases or fungi are evolving to adapt and
            overcome the solutions available in the market. And this has been
            the case for many coffee producers. Kapeng Barako or Coffea Liberica
            is a coffee species with distinctive taste and strong aroma, and is
            popularly known to be found at the province of Batangas.
          </p>
          <br />
          <p className="aboutp1">
            Within a century after being planted to our native soil, it has set
            our sail into the coffee trade and paved the way for our country to
            be in the World Coffe Belt. However in the late 1880s, coffee
            plantations from around the world are attacked by the deadly fungus
            "coffee leaf rust." The Philippines and liberica coffee are not
            exempted from this. Coffee producers then started planting other
            coffee species other than liberica which are resistant to coffee
            rust. This software will identify the disease using coffee liberica
            leaves while showing percentage of the detected disease. We used
            leaves because it is where primary symptoms appear, making the
            detection easier and the prevention of the spread of the diseases
            faster.
          </p>
        </center>
      </Container>
    </Jumbotron>
  </div>
);
