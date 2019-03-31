import React, { Component } from "react";

import { Row, Col } from "react-bootstrap";

export default class Navbar extends Component {
  render() {
    return (
      <Row id="title">
        <Col xs={12} md={4}>
          <h1 className="logo">wePortfolio</h1>
        </Col>
        <Col xs={12} md = {4}>
          <form>
            <input 
                type="search"
                value="search name, location, or stack"
            />
          </form>
        </Col>
        <Col xs={12} md={4}>
          <button> login </button>
          <button> signup</button>
        </Col>
      </Row>
    );
  }
}
