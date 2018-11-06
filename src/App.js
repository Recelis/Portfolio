import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { Grid, Row, Col } from "react-bootstrap"

import Headline from "./headline/headline"
import Title from "./story/title"
import SubTitle from "./story/subTitle"
import MainImage from "./story/mainImage"
import MainBody from "./story/mainBody"
import Footer from "./footer/footer"


class App extends Component {
  render() {
    return (
      <Grid>
        <header>
          <hr/>
          <Headline />
          <hr/>
        </header>
        <section>
          <article>

             
            
            <Row className = "show-grid">
                    <Col xs={12} md={6}>
                      <Title />
                      <SubTitle />
                    </Col>
                    <Col xs={12} md={6}>
                        <MainImage />
                    </Col>
            </Row>
          </article>
          <p>See more under the fold.</p>
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
