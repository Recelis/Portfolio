import React, { Component } from "react";

import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { throws } from "assert";
import { ENETDOWN } from "constants";
import axios from "axios";

export default class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      message: "",
      sent: false,
      buttonText: "Send Message",
      warning:""
    };
    this.handleChangeName = this.handleChangeName.bind(this);
    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.handleChangleMessage = this.handleChangleMessage.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
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

  resetForm = () => {
    this.setState({
        name: '',
        message: '',
        email: '',
        buttonText: 'Message Sent',
        warning:''
    })
}

  handleSubmit(e) {
    e.preventDefault();
    this.setState({
      buttonText: "...sending"
    });

    let data = {
      name: this.state.name,
      email: this.state.email,
      message: this.state.message
    };

    if (this.state.name.length === 0 || data.email.length === 0 || data.message.length === 0){
      this.setState({
        warning:"Please ensure all inputs are filled",
        buttonText:"Send Message"
      });
      return;
    }

    axios
      .post("https://fast-waters-24063.herokuapp.com/api/v1", data)
      .then(res => {
        this.setState({ sent: true, warning:'' }, this.resetForm());
      })
      .catch(() => {
        console.log("Message not sent");
        this.setState({warning:"message was not sent"});
      });
  }

  render() {
    return (
      <section className="contact">
        <Grid>
          <Grid xs={12} md={12}>
            <h2 className="contact__heading">Contact</h2>
          </Grid>
          <form className = "contact__form">
            <div className="contact__form-group">
              <label for="name">Name</label>
              <input
                type="text"
                value={this.state.name}
                onChange={this.handleChangeName}
                className="form-control contact__control"
                id="name"
                required
              />
            </div>
            <div className="contact__form-group">
              <label for="exampleInputEmail1">Email address</label>
              <input
                type="email"
                value={this.state.email}
                onChange={this.handleChangeEmail}
                className="form-control contact__control"
                id="email"
                aria-describedby="emailHelp"
                required
              />
            </div>
            <div className="contact__form-group">
              <label for="message">Message</label>
              <textarea
                value={this.state.message}
                onChange={this.handleChangleMessage}
                className="form-control contact__control"
                rows="5"
                id="message"
                required
              />
            </div>
            <Button variant="contained" size = "large" color="primary" type="submit"  onClick = {this.handleSubmit}>
              {this.state.buttonText}
            </Button>
          </form>
          <p className = "contact__warning">{this.state.warning}</p>
        </Grid>
      </section>
    );
  }
}
