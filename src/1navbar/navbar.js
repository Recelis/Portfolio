import React, { Component } from "react";

import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

import { Link } from "react-scroll";

export default class Navbar extends Component{
  constructor(props){
    super(props);
    this.handleGoToResume = this.handleGoToResume.bind(this);
  }
  handleGoToResume(){
    window.open("https://drive.google.com/file/d/1g341NkPWsUYFX6es04ffhJdcnQeT-Q-A/view?usp=sharing");
  }
  render(){
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
              >
                Projects
              </Link>
            </Button>
            <Button className="nav-bar__button" onClick = {this.handleGoToResume}>Resume</Button>
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

