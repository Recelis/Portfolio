import React, { Component } from "react"

import { Row, Col } from "react-bootstrap"

export default class Title extends Component{
    render(){
        return(
            <Row>
                <Col xs={12} md={12}><h1>NEW PROMISING DEVELOPER TO BE HIRED!</h1></Col>
            </Row>
        )
    }
}