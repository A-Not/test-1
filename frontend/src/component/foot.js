import React from "react";
import Card from "react-bootstrap/Card";
import CardFooter from "react-bootstrap/Card";
import logo1 from "./bsu.png";

console.log(logo1);

export const Foot = () => (
  <div>
    <Card bg="dark" text="white">
      <Card.Body>
        <Card.Text>
          {" "}
          <img src={logo1} width="40" height="40" alt="bsu logo" />
          Batangas State University
        </Card.Text>
        <CardFooter bg="dark">Alright Recieved 2019</CardFooter>
      </Card.Body>
    </Card>
  </div>
);
