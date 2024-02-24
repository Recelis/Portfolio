import React, { Component } from "react";

import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

import { Link } from "react-scroll";

export default class Navbar extends Component {
  constructor(props) {
    super(props);
    this.handleGoToResume = this.handleGoToResume.bind(this);
  }
  handleGoToResume() {
    window.open(
      "https://drive.google.com/file/d/1WoRY2d9WObmNatBL5cg76Itz7q3Q7y50/view?usp=sharing"
    );
  }
  render() {
    return (
      <header>
        <Grid className="nav-bar" container>
          <Grid item xs={6} sm={6}>
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
          <Grid
            item
            xs={6}
            sm={6}
            className="nav-bar__group"
            container
            direction="row"
            justify="center"
          >
            <Button className="nav-bar__button">
              <Link
                activeClass="active"
                to="about"
                spy={true}
                smooth={true}
                offset={-50}
                duration={1000}
                className="nav-bar__link"
              >
                About
              </Link>
            </Button>
            <Button className="nav-bar__button">
              <Link
                activeClass="active"
                to="projects"
                spy={true}
                smooth={true}
                offset={-50}
                duration={1000}
                className="nav-bar__link"
              >
                Projects
              </Link>
            </Button>
            <Button className="nav-bar__button" onClick={this.handleGoToResume}>
              <span className="nav-bar__link">Resume</span>
            </Button>
            <Button className="nav-bar__button">
              <Link
                activeClass="active"
                to="contact"
                spy={true}
                smooth={true}
                offset={50}
                duration={1000}
                className="nav-bar__link"
              >
                <span className="na-bar__span">Contact</span>
              </Link>
            </Button>
          </Grid>
        </Grid>
      </header>
    );
  }
}
