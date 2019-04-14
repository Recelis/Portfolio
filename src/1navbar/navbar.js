import React, { Component } from "react";

import { Row, Col, Button } from "react-bootstrap";

import * as Scroll from "react-scroll";
import {
  Link,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller
} from "react-scroll";

export default class Navbar extends Component {
  scrollTo = function() {
    scroll.scrollTo(100);
  };

  render() {
    return (
      <header>
        <Row className="nav-bar">
          <Col xs={12} md={4}>
          <Link
                activeClass="active"
                to="homepage"
                spy={true}
                smooth={true}
                offset={-50}
                duration={1000}
                onSetActive={this.handleSetActive}
              >
                <h1 className="nav-bar__logo">JACKY LUI</h1>
              </Link>
            
          </Col>
          <Col xs={12} md={4}>
            <Button>
              <Link
                activeClass="active"
                to="about"
                spy={true}
                smooth={true}
                offset={-50}
                duration={1000}
                onSetActive={this.handleSetActive}
              >
                About
              </Link>
            </Button>
            <Button>
              <Link
                activeClass="active"
                to="projects"
                spy={true}
                smooth={true}
                offset={-50}
                duration={1000}
                delay={0}
              >
                Projects
              </Link>
            </Button>
            <Button>Resume</Button>
            <Button>
              <Link
                activeClass="active"
                to="contact"
                spy={true}
                smooth={true}
                offset={50}
                duration={1000}
                delay={0}
              >
                Contact
              </Link>
            </Button>
          </Col>
        </Row>
      </header>
    );
  }
}
