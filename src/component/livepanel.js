import React, { Component } from "react";
import axios from "axios";
import { Redirect } from "react-router-dom";
import { Button } from "react-bootstrap";

export class Livepanel extends Component {
  state = {
    date: Date.now(),
    counter: 7,
    redirect: false,
  };

  //immediately is triggered. This only happens once. And we have it immediately call our countdown
  direct() {
    setTimeout(() => {
      this.setState({
        redirect: true,
      });
    }, 8000);
  }
  countDown = () => {
    this.setState((prevState) => {
      return {
        counter: prevState.counter - 1,
      };
    });
  };

  //will get called everyt time we update the component state
  componentDidUpdate() {
    if (this.state.counter > 0) {
      setTimeout(this.countDown, 1000); //calls the function that updates our component state, thus creating a loop effect
    }
  }
  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
    let form_data = new FormData();
    form_data.append("date", this.state.date);
    let url = "http://localhost:8000/api/live/";
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
    this.countDown();
    this.direct();
  };

  render() {
    if (this.state.redirect) {
      return <Redirect to={"/cam"} />;
    }

    return (
      <div>
        <div id="separator" className="time">
          Click the Button and your Live Detection will be ready in :{" "}
          {this.state.counter} s
        </div>
        <br />
        <form className="form-detect" onSubmit={this.handleSubmit}>
          <Button
            onClick={this.setRedirect}
            variant="success"
            type="submit"
            class="input-file-trigger"
          >
            Start Detecting
          </Button>
        </form>
      </div>
    );
  }
}
