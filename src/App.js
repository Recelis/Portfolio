import React, { Component } from "react";
import "./App.css";
import { Grid } from "react-bootstrap";

import Navbar from "./1navbar/navbar";
import HomePage from "./2homepage/homepage";
import LangBar from "./3langbar/langbar";
import Projects from "./4projects/projects";
import Contact from "./5contact/contact";
import Footer from "./6footer/footer";

export default class App extends Component {
  render() {
    return (
      <Grid fluid>
        <Navbar />
        <HomePage />
        <LangBar />
        <Projects />
        <Contact />
        <Footer />
      </Grid>
    );
  }
}
