import React from "react";
import Grid from "@material-ui/core/Grid";

import VisualStudioCode from "../images/visualstudiocode.png";

import ReactJS from "../images/react.jpeg";
import Redux from "../images/redux.jpeg";
import HTML from "../images/HTML5.png";
import JS from "../images/javascript.jpeg";
import CSS from "../images/css3.png";
import BEM from "../images/bem.png";
import Bootstrap from "../images/bootstrap.svg";
import Node from "../images/nodejs.png";
import ExpressJs from "../images/expressjs.png";
import MongooseJs from "../images/mongoose.jpg";
import MaterialUI from "../images/materialui.png";
import Mongo from "../images/mongodb.png";
import Mlab from "../images/mlab.png";
import Firebase from "../images/firebase.png";

export default function About(props) {
  return (
    <section className="about">
      <Grid
        container
        spacing={0}
        direction="row"
        alignItems="top"
        justify="top"
        style={{ minHeight: "60vh" }}
        className="about__grid"
      >
        <Grid xs={12} md={6}>
          <h2 className="about__heading">About</h2>
          <p className="about__text">
            Located in Brisbane and with two years experience, I am mainly a MERN front-end developer, who knows a set
            of web developer languages and frameworks. Such as
            <img className="about__skill__img mr-2" src={HTML} alt={"HTML"}></img> HTML,{" "}
            <img className="about__skill__img mr-2" src={CSS} alt={"HTML"}></img> CSS,
            <img className="about__skill__img mr-2" src={JS} alt={"HTML"}></img>Javascript,
            <img className="about__skill__img mr-2" src={ReactJS} alt={"HTML"}></img>React,
            <img className="about__skill__img mr-2" src={Redux} alt={"HTML"}></img> Redux,
            <img className="about__skill__img mr-2" src={Bootstrap} alt={"HTML"}></img>Bootstrap,
            <img className="about__skill__img mr-2" src={Node} alt={"HTML"}></img>NodeJS,
            <img className="about__skill__img mr-2" src={ExpressJs} alt={"HTML"}></img>Express,
            <img className="about__skill__img mr-2" src={MongooseJs} alt={"HTML"}></img>Mongoose,
            <img className="about__skill__img mr-2" src={Mongo} alt={"HTML"}></img>MongoDB,
            <img className="about__skill__img mr-2" src={Firebase} alt={"HTML"}></img>and Firebase.
          </p>
        </Grid>
        <Grid xs={12} md={6}>
          <img className="about__img" src={VisualStudioCode} alt="visual studio code image" />
        </Grid>
      </Grid>
    </section>
  );
}
