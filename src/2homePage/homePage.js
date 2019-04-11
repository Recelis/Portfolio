import React, { Component } from "react";

import { Grid, Row, Col } from "react-bootstrap"

import MainImage from "./mainImage";

class FrontPage extends Component {
  render() {
    return (
      <div>
        <section className="page">
          <Row>
          <Col xs={12} md={6}>
                <p className = "tagline">Run. Code. Connect.</p>
                <p className = "subHeading">Hi, I'm Jacky Lui. A web developer with a passion for well written code.</p>
            </Col>
            <Col xs={12} md={6}>
              <MainImage />
            </Col>
            
          </Row>
        </section>
        <hr />
        <section className="About">About
            <p>WePortfolio is a simple way to share your Portfolio. (It only works with React so far). Just sign up and then upload your portfolio as a React component. Created by Jacky Lui when he was redesigning his portfolio page another time, it quickly spiralled out of control and became a place where anyone can upload their own portfolio page.</p>
        </section>
        <section className="Feedback">Feedback
            <p>This site allows for people to message others to show their appreciation of their work or to reach out for employment opportunities. So keep things clean people!</p>
        </section>
        <section className="About2">
            <p>We've create a small marketplace for downloading specific modules.</p>
        </section>
        {/* <section>
            <p>Drills</p>
        </section> */}
        <section>Get started Login</section>
      </div>
    );
  }
}

export default FrontPage;