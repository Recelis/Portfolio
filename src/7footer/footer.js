import React, { Component } from "react";

import Grid from "@material-ui/core/Grid";

export default class Footer extends Component {
  render() {
    return (
          <Grid xs={12} md={12}>
            <p className="copyright">&#169; Jacky Lui 2019.</p>
          </Grid>
    );
  }
}
