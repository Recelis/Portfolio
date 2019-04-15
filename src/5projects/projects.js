import React, { Component } from "react";

import Grid from "@material-ui/core/Grid";

import ProjectsStory from "./projectsStory";

// images
import Opposts from "../images/village.jpg";
import PizzaAndChills from "../images/pizza.png";
import Geodi from "../images/Geodi.png";
import BilgyBeagle from "../images/BilgyBeagle.png";
import RandomQuote from "../images/RandomQuote.png";

const projectText = {
  Opposts: `a Firebase app: 6 images to tell a story`,
  PizzaAndChills: `Firebase app: Every software engineer builds one online-to-offline app in their lifetime.`,
  Geodi: "A home page",
  BilgyBeagle: "a tribute page",
  RandomQuote: "an Ajax app"
};

const projectLink = {
  Opposts: "https://www.opposts.com",
  PizzaAndChills: "https://pizzaandchills.herokuapp.com/",
  Geodi: "https://recelis.github.io/Geodi/",
  Calculator: "https://recelis.github.io/calculator/",
  BilgyBeagle: "https://recelis.github.io/BilgyBeagle/",
  RandomQuote: "https://recelis.github.io/RandomQuoteMachine/"
};

export default class Projects extends Component {
  render() {
    return (
      <section className="projects">
        <Grid
          container
          spacing={0}
          direction="row"
          alignItems="left"
          justify="left"
          style={{ minHeight: "60vh" }}
        >
          <Grid xs={12}>
            <h2 className="projects__heading">
              Look through my completed projects
            </h2>
          </Grid>
          <Grid xs={6} md = {2}>
            <ProjectsStory
              project="Opposts"
              projectImg={Opposts}
              projectText={projectText.Opposts}
              projectLink={projectLink.Opposts}
            />
          </Grid>
          <Grid xs={6} md = {2}>
            <ProjectsStory
              project="Geodi"
              projectImg={Geodi}
              projectText={projectText.Geodi}
              projectLink={projectLink.Geodi}
            />
          </Grid>
          <Grid xs={6} md = {2}>
            <ProjectsStory
              project="BilgyBeagle"
              projectImg={BilgyBeagle}
              projectText={projectText.BilgyBeagle}
              projectLink={projectLink.BilgyBeagle}
            />
          </Grid>
          <Grid xs={6} md = {2}>
            <ProjectsStory
              project="RandomQuote"
              projectImg={RandomQuote}
              projectText={projectText.RandomQuote}
              projectLink={projectLink.RandomQuote}
            />
          </Grid>
          <Grid xs={6} md = {2}>
            <ProjectsStory
              project="Pizza&Chills"
              projectImg={PizzaAndChills}
              projectText={projectText.PizzaAndChills}
              projectLink={projectLink.PizzaAndChills}
            />
          </Grid>
        </Grid>
      </section>
    );
  }
}
