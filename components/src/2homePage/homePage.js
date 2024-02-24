import React from "react";

import Grid from "@material-ui/core/Grid";
import image from "../images/jacky.png";

export default function HomePage(props) {
  return (
    <section className="home">
      <Grid container>
        <Grid item xs={12} md={6}>
          <img
            className="home__image-large"
            src={image}
            alt="person sternly looking into the souls of the viewers"
            rounded
            responsive
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <p className="home__heading">Code. Run. Check &#10004;</p>
          <p className="home__tagline">
            Hi, I'm Jacky Lui. I'm a web developer at Intelics in Brisbane. I'm building a knowledge graph structured
            note taking app in my spare time. I also make lousy robots as well!
          </p>
          {/* <p className="mt-2">Check out my micro-blogs below.</p> */}
        </Grid>
        <Grid item xs={12} md={6}>
          <img
            className="home__image-small"
            src={image}
            alt="person sternly looking into the souls of the viewers"
            rounded
            responsive
          />
        </Grid>
      </Grid>
    </section>
  );
}
