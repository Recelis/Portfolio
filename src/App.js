import React, { Component } from "react";
import "./App.css";
import { Grid } from "react-bootstrap";

import Navbar from "./1navbar/navbar";
import HomePage from "./2homepage/homepage";
import LangBar from "./3langbar/langbar";
import About from "./4about/about";
import Projects from "./5projects/projects";
import Contact from "./6contact/contact";
import Footer from "./7footer/footer";

import {
  Link,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller
} from "react-scroll";

export default class App extends Component {
  render() {
    return (
      <Grid fluid>
        <Navbar />
        <Element name = "homepage"><HomePage /></Element>
        <LangBar />
        <Element name = "about"><About/></Element>
        <Element name = "projects"><Projects /></Element>
        <Element name = "contact"><Contact /></Element>
        <Footer />
      </Grid>
    );
  }
}
