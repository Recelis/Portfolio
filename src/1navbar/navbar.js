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
