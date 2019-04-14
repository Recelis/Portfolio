import React, { Component } from "react";

import { Row, Col } from "react-bootstrap";

export default class Footer extends Component {
  render() {
    return (
        <Row>
          <Col xs={12} md={12}>
            <hr />
            <p className="copyright">&#169; Jacky Lui 2019.</p>
          </Col>
        </Row>
    );
  }
}
