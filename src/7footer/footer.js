import React, { Component } from "react"

import CopyRight from "./copyright"

import { Grid, Row, Col } from "react-bootstrap"

export default class Footer extends Component{
    render(){
        return(
            <Grid>
                <Row>
                    <Col xs={12} md={12}>
                        <CopyRight />
                    </Col>
                </Row>
            </Grid>
        );
    }
} 