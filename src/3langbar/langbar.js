import React, { Component } from "react";
import LangBarSkill from "./skill";

import Grid from "@material-ui/core/Grid";

import reactImg from "../images/react.jpeg";
import reduxImg from "../images/redux.jpeg";
import htmlImg from "../images/HTML5.png";
import jsImg from "../images/javascript.jpeg";
import cssImg from "../images/css3.png";
import BEM from "../images/bem.png";
import bootstrapImg from "../images/bootstrap.svg";
import Node from "../images/nodejs.png";
import MaterialUI from "../images/materialui.png";

export default class LangBar extends Component {
  render() {
    return (
      <section className="langbar">
        <Grid container justify="center">
          <Grid xs={4} md = {1}>
            <LangBarSkill skill="HTML5" skillImg={htmlImg} />
          </Grid>
          <Grid xs={4} md = {1}>
            <LangBarSkill skill="CSS" skillImg={cssImg} />
          </Grid>
          <Grid xs={4} md = {1}>
            <LangBarSkill skill="Javascript" skillImg={jsImg} />
          </Grid>
          <Grid xs={4} md = {1}>
            <LangBarSkill skill="React" skillImg={reactImg} />
          </Grid>
          <Grid xs={4} md = {1}>
            <LangBarSkill skill="Redux" skillImg={reduxImg} />
          </Grid>
          <Grid xs={4} md = {1}>
            <LangBarSkill skill="Bootstrap" skillImg={bootstrapImg} />
          </Grid>
          <Grid xs={4} md = {1}>
            <LangBarSkill skill="BEM" skillImg={BEM} />
          </Grid>
          <Grid xs={4} md = {1}>
            <LangBarSkill skill="Node.js" skillImg={Node} />
          </Grid>
          <Grid xs={4} md = {1}>
            <LangBarSkill skill="Material UI" skillImg={MaterialUI} />
          </Grid>
        </Grid>
      </section>
    );
  }
}
