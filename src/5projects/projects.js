import React from "react";

import Grid from "@material-ui/core/Grid";

import ProjectsStory from "./projectsStory";

// images
import Yggdrasil from "../images/genius.png";
import Opposts from "../images/village.jpg";
import PizzaAndChills from "../images/pizza.png";
import Geodi from "../images/Geodi.png";
import NaturesWayWater from "../images/naturesway.png";
import RandomQuote from "../images/RandomQuote.png";
import DrumMachine from "../images/drummachine.png";
import BilgyBeagle from "../images/BilgyBeagle.png";

const projectText = {
  Yggdrasil: "An app to learn better",
  NaturesWayWater: "Simple HTML Website for Nature's Way Water Technologies",
  DrumMachine: "a React-Redux app that saves and plays a cool",
  Opposts: "a Firebase app: 6 images to tell a story",
  PizzaAndChills: "Firebase app: My once in a lifetime online-to-offline app.",
  Geodi: "A home page",
  BilgyBeagle: "a tribute page",
  RandomQuote: "an Ajax app",
};

const projectLink = {
  Yggdrasil: "https://yggdrasilapp.herokuapp.com/",
  NatureswayWater: "http://natureswaywt.com/index.html",
  DrumMachine: "https://recelis.github.io/drummachine/",
  Opposts: "https://www.opposts.com",
  PizzaAndChills: "https://pizzaandchills.herokuapp.com/",
  Geodi: "https://recelis.github.io/Geodi/",
  Calculator: "https://recelis.github.io/calculator/",
  BilgyBeagle: "https://recelis.github.io/BilgyBeagle/",
  RandomQuote: "https://recelis.github.io/RandomQuoteMachine/",
};

export default function Projects(props) {
  return (
    <section className="projects">
      <Grid container spacing={0} direction="row" alignItems="left" justify="left" style={{ minHeight: "60vh" }}>
        <Grid xs={12}>
          <h2 className="projects__heading">Current projects</h2>
        </Grid>
        <Grid xs>
          <ProjectsStory
            project="Yggdrasil"
            projectImg={Yggdrasil}
            projectText={projectText.Yggdrasil}
            projectLink={projectLink.Yggdrasil}
          />
        </Grid>
      </Grid>
    </section>
  );
}
