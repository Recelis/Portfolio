import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";

export default class About extends Component {
  render() {
    return (
      <Grid>
        <h2>About</h2>
        <p>
          I have been developing web apps for the past two years. I am mainly use MERN
          with a clear focus on the front-end, and know a set of web developer languages and frameworks, such as
          HTML, CSS, Javascript, React, Redux, Bootstrap, NodeJS, Material UI, MongoDB, mLab, Firebase, Jest, and Enzyme.
        </p>
        <p>
          I graduated from
          Mechatronics Engineering from QUT 2015. So I have a technical background
          and bring along the same kind of process-mindset that I use in
          engineering. I have spent the last three years working at a startup
          company in the water filtration space for countries such as India and
          China, and had recently been to China to help start their
          manufacturing process. 
        </p>
        <p>
          I am looking for a role that is exciting, challenging, and helps
          make a subset’s of the general population lives better.
        </p>
      </Grid>
    );
  }
}
