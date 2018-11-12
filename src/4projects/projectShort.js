import React, { Component } from "react"

import { Grid, Row, Col, Image } from "react-bootstrap"

export default class ProjectShort extends Component{
    constructor(props){
        super(props);
        this.state = {

        }
    }
    render(){
        return(
            <Grid className = "projectShort" fluid>
                <Row>
                    <Col xs = {12} md = {12}>
                        <Image className = "projectImg" src= {this.props.projectImg} responsive/>
                    </Col>
                    <Col xs = {12} md = {12}>
                        <h3 className = "projectHeading"><a href = {this.props.projectLink}>{this.props.project}</a></h3>
                        <p className = "projectText">{this.props.projectText}</p>
                    </Col>
                </Row>
            </Grid>
        )
    }
}