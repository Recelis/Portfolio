import React, { Component } from "react";

import Grid from "@material-ui/core/Grid";

export default class Footer extends Component {
  render() {
    const currentDate = new Date();
    return (
      <Grid xs={12} md={12}>
        <p className="copyright">&#169; Jacky Lui {currentDate.getFullYear()}.</p>
      </Grid>
    );
  }
}
