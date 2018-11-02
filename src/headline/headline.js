import React, { Component } from "react"
import TopAds from "./topAds";
import Banner from "./banner";

import { Row, Col } from "react-bootstrap"

export default class Headline extends Component{
    render(){
        return(
            <div>
                

                <Row className = "show-grid">
                    <Col xs={12} md={4}>
                        <TopAds />
                    </Col>
                    <Col xs={12} md={4}>
                        <TopAds />
                    </Col>
                    <Col xs={12} md={4}>
                        <TopAds />
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} md={12}>
                        <Banner />
                    </Col>
                </Row>
                
            </div>
        )
    }
    
}