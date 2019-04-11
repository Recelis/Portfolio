import React, { Component } from "react";

import { Row, Col } from "react-bootstrap";

export default class Navbar extends Component {
  render() {
    return (
      <header>
        <Row className="nav-bar">
          <Col xs={12} md={4}>
            <h1 className="nav-bar__logo">JACKY LUI</h1>
          </Col>
          <Col xs={12} md={4}>
            <button className="nav-bar__button"> About </button>
            <button className="nav-bar__button"> Portfolio </button>
            <button className="nav-bar__button"> Resume </button>
            <button className="nav-bar__button"> Contact </button>
          </Col>
        </Row>
      </header>
    );
  }
}
