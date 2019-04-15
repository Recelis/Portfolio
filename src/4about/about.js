import React from "react";
import Grid from "@material-ui/core/Grid";

import VisualStudioCode from "../images/visualstudiocode.png";

export default function About(props) {
  return (
    <section className="about">
      <Grid
        container
        spacing={0}
        direction="row"
        alignItems="top"
        justify="top"
        style={{ minHeight: "60vh" }}
        className="about__grid"
      >
        <Grid xs={12} md={6}>
          <h2 className="about__heading">About</h2>
          <p className="about__text">
            Located in Brisbane and with two years experience, I am mainly a
            MERN front-end developer, who knows a set of web developer languages
            and frameworks. Such as HTML, CSS, Javascript, React, Redux,
            Bootstrap, NodeJS, Material UI, MongoDB, mLab, Firebase, Jest, and
            Enzyme.
          </p>
          <p className="about__text">
            I am dedicated to making a subset of the general population’s lives
            better.
          </p>
        </Grid>
        <Grid xs={12} md={6}>
          <img
            className="about__img"
            src={VisualStudioCode}
            alt="visual studio code image"
          />
        </Grid>
      </Grid>
    </section>
  );
}
