import React, { Component } from "react";
import { Videopanel } from "./videopanel";
import { Imagepanel } from "./imagepanel";
import { Livepanel } from "./livepanel";

import Card from "react-bootstrap/Card";
import CardDeck from "react-bootstrap/CardDeck";

export class Home extends Component {
  render() {
    return (
      <div>
        <div className="title">
          <h1>COFFEE LIBERICA DISEASE DETECTION IN LEAVES</h1>
        </div>
        <br />
        <hr className="hr1" />
        <div className="spacer"></div>
        <CardDeck>
          <Card className="text-center p-3">
            <Card.Body>
              <Card.Title style={{ color: "rgb(17, 186, 26)" }}>
                <h2>Live Detection</h2>
              </Card.Title>
              <Card.Text>
                This will detect a certain disease in coffee liberica leaves in
                live Feeds
              </Card.Text>
              <Livepanel />
            </Card.Body>
          </Card>
          <Card>
            <Card.Body>
              <Card.Title style={{ color: "rgb(17, 186, 26)" }}>
                <h2>Image Detection</h2>
              </Card.Title>
              <Card.Text>
                This will be uploaded to the server
                <br />
                and make a detection in your image
              </Card.Text>

              <Imagepanel />
            </Card.Body>
          </Card>
          <Card>
            <Card.Body>
              <Card.Title style={{ color: "rgb(17, 186, 26)" }}>
                <h2>Video Detection</h2>
              </Card.Title>
              <Card.Text>
                This will be uploaded to the server
                <br />
                and make a detection in your video
              </Card.Text>
              <Videopanel />
            </Card.Body>
          </Card>
        </CardDeck>
      </div>
    );
  }
}
