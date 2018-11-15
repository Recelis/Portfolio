import React, { Component } from "react"

import { Col, Row, Grid } from "react-bootstrap"
import BottomAds from "./bottomAds";

import AdvertiseCorp from "../images/advertisercorp.png"
import W3BDEV from "../images/W3bDev.png"
import SilentPanther from "../images/SilentPanther.png"
import CoffeeMega from "../images/CoffeeMega.png"

export default class Sponsors extends Component{
    render(){
        return(
            <Grid>
                <Col xs = {12} md = {12}>
                    <Row>                        
                        <h3 className = "articleHeading">Features</h3>
                    </Row>
                </Col>
                <Row>
                    <Col xs = {12} md = {3}>
                        <BottomAds 
                            img = {AdvertiseCorp}
                            headline = "Advertise your business to potential employees of industries for pre-hire converts!"
                            company = "AdvertiseCorp"
                            contactDetails = "https://advertisercorp.com"
                        />
                    </Col>
                    <Col xs = {12} md = {3}>
                        <BottomAds 
                            img = {W3BDEV}
                            headline = "W3bDev Work Stations are Revolutionary products for innovation"
                            company = "W3bDev"
                            contactDetails = "https://W3bDev.com"
                        />
                    </Col>
                    <Col xs = {12} md = {3}>
                        <BottomAds 
                            img = {SilentPanther}
                            headline = "Better More Secure Work Communication"
                            company = "SilentPanther"
                            contactDetails = "https://SilentPanther.org/"
                        />
                    </Col>
                    <Col xs = {12} md = {3}>
                        <BottomAds 
                            img = {CoffeeMega}
                            headline = "Startup for Coffee for Startups"
                            company = "CoffeeMega"
                            contactDetails = "https://CoffeeMega.com"
                        />
                    </Col>
                </Row>
                <hr/>
            </Grid>
        )
    }
}