import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { Grid } from "react-bootstrap"

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
          <Headline />
        </header>
        <section>
          <article>
            <Title /> 
            <SubTitle />
            <MainImage />
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
