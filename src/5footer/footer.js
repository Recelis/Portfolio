import React, { Component } from "react"

import BottomAds from "./bottomAds"
import CopyRight from "./copyright"

import { Row, Col } from "react-bootstrap"

export default class Footer extends Component{
    render(){
        return(
            <div>
                <Row className = "show-grid">
                    <Col xs={12} md={4}>
                        <BottomAds />
                    </Col>
                    <Col xs={12} md={4}>
                        <BottomAds />
                    </Col>
                    <Col xs={12} md={4}>
                        <BottomAds />
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} md={12}>
                        <CopyRight />
                    </Col>
                </Row>
            </div>
        );
    }
} 