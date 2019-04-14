import React, { Component } from "react";

import Grid from "@material-ui/core/Grid";

import ReactJS from "../images/react.jpeg";
import Redux from "../images/redux.jpeg";
import HTML from "../images/HTML5.png";
import JS from "../images/javascript.jpeg";
import CSS from "../images/css3.png";
import BEM from "../images/bem.png";
import Bootstrap from "../images/bootstrap.svg";
import Node from "../images/nodejs.png";
import MaterialUI from "../images/materialui.png";
import Mongo from "../images/mongodb.png";
import Mlab from "../images/mlab.png";
import Firebase from "../images/firebase.png";

export default class LangBar extends Component {
  render() {
    return (
      <section className="langbar">
        <Grid container justify="center">
          <Grid xs={2} md = {1}>
            <img className = "langbar__img" src = {HTML} alt = {"HTML"} responsive></img>
          </Grid>
          <Grid xs={2} md = {1}>
            <img className = "langbar__img" src = {CSS} alt = {"CSS"} responsive></img>
          </Grid>
          <Grid xs={2} md = {1}>
            <img className = "langbar__img" src = {JS} alt = {"JS"} responsive></img>
          </Grid>
          <Grid xs={2} md = {1}>
            <img className = "langbar__img" src = {ReactJS} alt = {"ReactJS"} responsive></img>
          </Grid>
          <Grid xs={2} md = {1}>
            <img className = "langbar__img" src = {Redux} alt = {"Redux"} responsive></img>
          </Grid>
          <Grid xs={2} md = {1}>
            <img className = "langbar__img" src = {Bootstrap} alt = {"Bootstrap"} responsive></img>
          </Grid>
          <Grid xs={2} md = {1}>
            <img className = "langbar__img langbar__img_hide" src = {BEM} alt = {"BEM"} responsive></img>
          </Grid>
          <Grid xs={2} md = {1}>
            <img className = "langbar__img langbar__img_hide" src = {Node} alt = {"Node.js"} responsive></img>
          </Grid>
          <Grid xs={2} md = {1}>
            <img className = "langbar__img langbar__img_hide" src = {MaterialUI} alt = {"Material UI"} responsive></img>
          </Grid>
          <Grid xs={2} md = {1}>
            <img className = "langbar__img langbar__img_hide" src = {Mongo} alt = {"MongoDB"} responsive></img>
          </Grid>
          <Grid xs={2} md = {1}>
            <img className = "langbar__img langbar__img_hide" src = {Mlab} alt = {"mlab"} responsive></img>
          </Grid>
          <Grid xs={2} md = {1}>
            <img className = "langbar__img langbar__img_hide" src = {Firebase} alt = {"Firebase"} responsive></img>
          </Grid>
        </Grid>
      </section>
    );
  }
}
