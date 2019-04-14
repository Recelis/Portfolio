import React, { Component } from "react";
import LangBarSkill from "./skill";

import { Container, Row, Col } from "react-bootstrap";

import reactImg from "../images/react.jpeg";
import reduxImg from "../images/redux.jpeg";
import htmlImg from "../images/HTML5.png";
import jsImg from "../images/javascript.jpeg";
import cssImg from "../images/css3.png";
import bootstrapImg from "../images/bootstrap.svg";

export default class LangBar extends Component {
  render() {
    return (
      <section className="langbar">
        <Container>
          <Row>
            <Col xs={4} md={4}>
              <LangBarSkill skill="React" skillImg={reactImg} />
            </Col>
            <Col xs={4} md={4}>
              <LangBarSkill skill="Redux" skillImg={reduxImg} />
            </Col>
            <Col xs={4} md={4}>
              <LangBarSkill skill="HTML5" skillImg={htmlImg} />
            </Col>
          </Row>
          <Row>
            <Col xs={4} md={4}>
              <LangBarSkill skill="Javascript" skillImg={jsImg} />
            </Col>
            <Col xs={4} md={4}>
              <LangBarSkill skill="CSS" skillImg={cssImg} />
            </Col>
            <Col xs={4} md={4}>
              <LangBarSkill skill="Bootstrap" skillImg={bootstrapImg} />
            </Col>
            <Col xs={4} md={4}>
                <LangBarSkill skill = "BEM" skillImg = {bootstrapImg} />
            </Col>
            <Col xs={4} md={4}>
                <LangBarSkill skill = "Node.js" skillImg = {bootstrapImg} />
            </Col>
          </Row>
        </Container>
      </section>
    );
  }
}
