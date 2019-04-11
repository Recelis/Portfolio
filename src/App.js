import React, { Component } from "react";
import "./App.css";
import { Grid } from "react-bootstrap";

import Navbar from "./1navbar/navbar";
import HomePage from "./2homePage/homePage";
// import LangFrame from "../Portfolio/3langframe/langframe"
// import Projects from "../Portfolio/4projects/projects"
// import Sponsors from "../Portfolio/5sponsors/sponsors"
// import Footer from "./6footer/footer"

export default class App extends Component {
  render() {
    return (
      <Grid fluid>
        <header>
          <Navbar />
        </header>
        <HomePage />

        <footer>{/* <Footer/> */}</footer>
      </Grid>
    );
  }
}
