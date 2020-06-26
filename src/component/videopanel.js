import React, { Component } from "react";
import axios from "axios";
import { Progress } from "reactstrap";
import { Redirect } from "react-router-dom";
import { Button } from "react-bootstrap";

export class Videopanel extends Component {
  state = {
    file: null,
    loaded: 0,
    redirect: false,
  };
  direct() {
    setTimeout(() => {
      if (this.state.loaded === 100) {
        this.setState({
          redirect: true,
        });
      }
    }, 7000);
  }
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  handleFileChange = (e) => {
    this.setState({
      file: e.target.files[0],
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
    let form_data = new FormData();
    form_data.append("file", this.state.file);
    let url = "http://localhost:8000/api/video/";
    axios
      .post(url, form_data, {
        headers: {
          "content-type": "multipart/form-data",
        },
        onUploadProgress: (ProgressEvent) => {
          this.setState({
            loaded: (ProgressEvent.loaded / ProgressEvent.total) * 100,
          });
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
      return <Redirect to={"/video"} />;
    }
    return (
      <form className="form-detect" onSubmit={this.handleSubmit}>
        <div class="input-file-container">
          <input
            className="input1"
            type="file"
            id="file"
            accept="video/mp4, video/avi"
            onChange={this.handleFileChange}
            required
          />

          <div class="form-group">
            <br />
            <Progress max="100" color="success" value={this.state.loaded}>
              {Math.round(this.state.loaded, 2)}%
            </Progress>
          </div>
          <Button variant="success" type="submit" class="input-file-trigger">
            Start Detecting
          </Button>
          <br />
        </div>
      </form>
    );
  }
}
