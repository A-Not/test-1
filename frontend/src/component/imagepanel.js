import React, { Component } from "react";
import axios from "axios";
import { Button } from "react-bootstrap";
import "../App.scss";
import { Progress } from "reactstrap";
export class Imagepanel extends Component {
  state = {
    file: null,
    loaded: 0
  };
  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };
  handleFileChange = e => {
    this.setState({
      file: e.target.files[0]
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state);
    let form_data = new FormData();
    form_data.append("file", this.state.file);
    let url = "http://localhost:8000/api/image/";
    axios
      .post(url, form_data, {
        headers: {
          "content-type": "multipart/form-data"
        }
      })

      .then(res => {
        console.log(res.data);
      })

      .catch(err => console.log(err));
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          className="input1"
          type="file"
          id="file"
          accept="image/jpeg, image/png"
          onChange={this.handleFileChange}
          required
        />
        <br />
        <br />
        <div class="form-group">
          <Progress max="100" color="success" value={this.state.loaded}>
            {Math.round(this.state.loaded, 2)}%
          </Progress>
        </div>
        <Button variant="success" type="submit">
          Start Detecting
        </Button>
      </form>
    );
  }
}
