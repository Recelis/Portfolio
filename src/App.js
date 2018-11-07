import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { Grid, Row, Col } from "react-bootstrap"

import Title from "./Atitle/title"
import Heading from "./story/heading"
import SubHeading from "./story/subHeadiing"
import MainImage from "./story/mainImage"
import MainBody from "./story/mainBody"
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
          <MainBody />
        </section>
        <footer>
          <Footer />
        </footer>
      </Grid>
    );
  }
}

export default App;
