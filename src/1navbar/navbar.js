import React, { Component } from "react";

import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

import {
  Link,
} from "react-scroll";

export default class Navbar extends Component {
  render() {
    return (
      <header>
        <Grid className="nav-bar">
          <Grid xs={12}>
            <Link
              activeClass="active"
              to="homepage"
              spy={true}
              smooth={true}
              offset={-50}
              duration={1000}
            >
              <h1 className="nav-bar__logo">JACKY LUI</h1>
            </Link>
          </Grid>
          <Grid xs = {12} className="nav-bar__group">
            <Link
              activeClass="active"
              to="about"
              spy={true}
              smooth={true}
              offset={-50}
              duration={1000}
            >
              <Button className="nav-bar__button" variant="primary">About</Button>
            </Link>
            <Button className="nav-bar__button">
              <Link
                activeClass="active"
                to="projects"
                spy={true}
                smooth={true}
                offset={-50}
                duration={1000}
              >
                Projects
              </Link>
            </Button>
            <Button className="nav-bar__button">Resume</Button>
            <Button className="nav-bar__button">
              <Link
                activeClass="active"
                to="contact"
                spy={true}
                smooth={true}
                offset={50}
                duration={1000}
              >
                Contact
              </Link>
            </Button>
          </Grid>
        </Grid>
      </header>
    );
  }
}
