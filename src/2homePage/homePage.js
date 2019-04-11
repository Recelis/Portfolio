import React, { Component } from "react";

import { Grid, Row, Col, Image } from "react-bootstrap";
import image from "../images/jacky.png";

class HomePage extends Component {
  render() {
    return (
      <section className="home">
        <Row>
          <Col xs={12} md={6}>
            <p className="home__heading">Run. Code. Connect.</p>
            <p className="home__tagline">
              Hi, I'm Jacky Lui. A web developer with a passion for well written
              code.
            </p>
          </Col>
          <Col xs={12} md={6}>
            <Image
              className="home__image"
              src={image}
              alt="person sternly looking into the souls of the viewers"
              rounded
              responsive
            />
          </Col>
        </Row>
      </section>
    );
  }
}

export default HomePage;
