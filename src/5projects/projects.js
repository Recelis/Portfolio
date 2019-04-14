import React, { Component } from "react";

import { Container, Row, Col } from "react-bootstrap";

import ProjectsStory from "./projectsStory";

// images
import Opposts from "../images/village.jpg";
import PizzaAndChills from "../images/pizza.png";
import Geodi from "../images/Geodi.png";
import BilgyBeagle from "../images/BilgyBeagle.png";
import RandomQuote from "../images/RandomQuote.png";

const projectText = {
  Opposts: `To explore what it means to build a full stack app, I ventured further to build a social media app based on uploading 6 images stories. Built with React and Firebase for a mock backend, all 'server' functions
    were moved to one server file as I realised that full stack apps were built with front-end separate from the backend code.
    `,
  PizzaAndChills:
    "This was the first full-stack app that I had attempted. This app notifies people when they are free to hang out with. Built with React and Firebase.",
  Geodi: "A home page",
  BilgyBeagle: "a tribute page built with HTML and CSS",
  RandomQuote: "using Ajax to call from external server"
};

const projectLink = {
  Opposts: "https://www.opposts.com",
  PizzaAndChills: "https://pizzaandchills.herokuapp.com/",
  Geodi: "https://recelis.github.io/Geodi/",
  Calculator: "https://recelis.github.io/calculator/",
  BilgyBeagle: "https://recelis.github.io/BilgyBeagle/",
  RandomQuote: "https://recelis.github.io/RandomQuoteMachine/"
};

export default class Projects extends Component {
  render() {
    return (
      <section className="projects">
        <Container>
          <Row>
            <Col xs={12} md={12}>
              <h2 className="projects__heading">Projects</h2>
            </Col>
          </Row>
          <Col className="column" xs={12} md={4}>
            <Row>
              <ProjectsStory
                project="Opposts"
                projectImg={Opposts}
                projectText={projectText.Opposts}
                projectLink={projectLink.Opposts}
              />
            </Row>
          </Col>
          <Col className="column" xs={12} md={4}>
            <Row>
              <Col xs={12} md={6}>
                <ProjectsStory
                  project="Geodi"
                  projectImg={Geodi}
                  projectText={projectText.Geodi}
                  projectLink={projectLink.Geodi}
                />
              </Col>
            </Row>
            <Row>
              <Col xs={12} md={6}>
                <ProjectsStory
                  project="BilgyBeagle"
                  projectImg={BilgyBeagle}
                  projectText={projectText.BilgyBeagle}
                  projectLink={projectLink.BilgyBeagle}
                />
              </Col>
              <Col xs={12} md={6}>
                <ProjectsStory
                  project="RandomQuote"
                  projectImg={RandomQuote}
                  projectText={projectText.RandomQuote}
                  projectLink={projectLink.RandomQuote}
                />
              </Col>
            </Row>
          </Col>
          <Col className="column" xs={12} md={4}>
            <Row>
              <ProjectsStory
                project="Pizza&Chills"
                projectImg={PizzaAndChills}
                projectText={projectText.PizzaAndChills}
                projectLink={projectLink.PizzaAndChills}
              />
            </Row>
          </Col>
        </Container>
      </section>
    );
  }
}
