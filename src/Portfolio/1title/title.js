import React, { Component } from "react";

import { Row, Col } from "react-bootstrap";

let d;
let day;
let month;
let monthString;
let year;

export default class Title extends Component {
  render() {
    d = new Date();
    day = d.getDate();
    month = d.getMonth();
    monthString = convertToMonthString(month);
    year = d.getFullYear();
    return (
        <Row>
          <Col xs={12} md={4}>
            <p className = "tagline" id = "title-time"> 
                <b>{day + ", " + monthString + " " + year}</b>
            </p>
          </Col>
          <Col xs={12} md={4}>
              <h1 className="logo">TheDailyPortfolio</h1>
          </Col>
          <Col xs={12} md={4}>
            <p className="tagline" id = "title-advertise">
              <b>Proudly supported by AdvertiserCorp</b>
            </p>
          </Col>
        </Row>
    );
  }
}

function convertToMonthString() {
  switch (month) {
    case 0:
      return "Jan";
    case 1:
      return "Feb";
    case 2:
      return "Mar";
    case 3:
      return "Apr";
    case 4:
      return "May";
    case 5:
      return "Jun";
    case 6:
      return "Jul";
    case 7:
      return "Aug";
    case 8:
      return "Sep";
    case 9:
      return "Oct";
    case 10:
      return "Nov";
    case 11:
      return "Dec";
    default:
      return "Unk";
  }
}
