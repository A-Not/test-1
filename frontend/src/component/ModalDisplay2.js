import React, { Component } from "react";
import { Modal, Button } from "react-bootstrap";
import Iframe from "react-iframe";
import axios from "axios";

import { Redirect } from "react-router-dom";
export class ModalDisplay2 extends Component {
  state = {
    stop: Date.now(),
    redirect: false,
  };

  direct() {
    setTimeout(() => {
      this.setState({
        redirect: true,
      });
    }, 4000);
  }
  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
    let form_data = new FormData();
    form_data.append("stop", this.state.stop);
    let url = "http://localhost:8000/api/terminate/";
    axios
      .post(url, form_data, {
        headers: {
          "Content-Type": "application/json",
        },
      })

      .then((res) => {
        console.log(res.data);
      })

      .catch((err) => console.log(err));
    this.direct();
  };

  render() {
    if (this.state.redirect) {
      return <Redirect to={"/"} />;
    }
    return (
      <Modal centered show={true} size="xl">
        <Modal.Header closeButton>
          <Modal.Title id="example-custom-modal-styling-title">
            YOLO Detection Result
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="ifr3">
            <Iframe
              url="http://localhost:8090"
              width="100%"
              height="100%"
              frameBorder="0"
              scrolling="false"
              display="initial"
              position="relative"
            />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <form onSubmit={this.handleSubmit}>
            <div className="bp">
              <Button
                onClick={this.setRedirect}
                variant="success"
                type="submit"
                class="input-file-trigger"
              >
                Stop Detection
              </Button>
            </div>
          </form>
        </Modal.Footer>
      </Modal>
    );
  }
}
