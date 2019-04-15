import React, { Component } from "react";

import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";

export default class Contact extends Component {
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
              <input type="text" className="form-control" id="name" />
            </div>
            <div className="contact__form-group">
              <label for="exampleInputEmail1">Email address</label>
              <input
                type="email"
                className="form-control"
                id="email"
                aria-describedby="emailHelp"
              />
            </div>
            <div className="contact__form-group">
              <label for="message">Message</label>
              <textarea className="form-control" rows="5" id="message" />
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
