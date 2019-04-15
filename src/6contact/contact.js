import React, { Component } from "react";

import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import { throws } from "assert";
import { ENETDOWN } from "constants";

export default class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      message: ""
    };
    this.handleChangeName = this.handleChangeName.bind(this);
    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.handleChangleMessage = this.handleChangleMessage.bind(this);
  }
  handleChangeName(event) {
    this.setState({ name: event.target.value });
  }

  handleChangeEmail(event) {
    this.setState({ email: event.target.value });
  }

  handleChangleMessage(event) {
    this.setState({ message: event.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
  }

  render() {
    return (
      <section className="contact">
        <Grid>
          <Grid xs={12} md={12}>
            <h2 className="contact__heading">Contact</h2>
          </Grid>
          <form>
            <div className="contact__form-group">
              <label for="name">Name</label>
              <input
                type="text"
                value={this.state.name}
                onChange={this.handleChangeName}
                id="name"
              />
            </div>
            <div className="contact__form-group">
              <label for="exampleInputEmail1">Email address</label>
              <input
                type="email"
                value={this.state.email}
                onChange={this.handleChangeEmail}
                className="form-control"
                id="email"
                aria-describedby="emailHelp"
              />
            </div>
            <div className="contact__form-group">
              <label for="message">Message</label>
              <textarea 
              value={this.state.message}
              onChange={this.handleChangleMessage}
              className="form-control" rows="5" id="message" />
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </Grid>
      </section>
    );
  }
}
