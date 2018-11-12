import React, { Component } from 'react';
import './App.css';

import { Grid, Row, Col } from "react-bootstrap"

import Title from "./1title/title"
import Heading from "./2story/heading"
import SubHeading from "./2story/subHeadiing"
import MainImage from "./2story/mainImage"
import LangFrame from "./3langframe/langframe"
import Footer from "./footer/footer"


class App extends Component {
  render() {
    return (
      <Grid fluid>
        <header>
          <hr/>
          <Title />
          <hr/>
        </header>
        <section>
          <article className = "headingContainer">
            <Row>
              <Col xs={12} md={12}>
                <Heading />
              </Col>
            </Row>
            <Row>
              <Col xs={12} md={3}>
                  <MainImage />
              </Col>
              <Col xs={12} md={6}>
                <SubHeading />
              </Col>
            </Row>
          </article>
          <LangFrame />
        </section>
        <footer>
          <Footer />
        </footer>
      </Grid>
    );
  }
}

export default App;
