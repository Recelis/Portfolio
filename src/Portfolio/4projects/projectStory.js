import React, { Component } from "react"

import { Grid, Row, Col, Image } from "react-bootstrap"

export default class ProjectStory extends Component{
    constructor(props){
        super(props);
        this.state = {

        }
    }
    render(){
        return(
            <Grid className = "projectStory" fluid>
                <Row>
                    <Col xs = {12} md = {12}>
                        <Image className = "projectImg" src= {this.props.projectImg} responsive/>
                    </Col>
                </Row>
                <Row>
                    <Col xs = {0} md = {0}></Col>
                    <Col xs = {12} md = {12}>
                        <h3 className = "projectHeading"><a href = {this.props.projectLink}>{this.props.project}</a></h3>
                        <p className = "projectText">{this.props.projectText}</p>
                    </Col>
                    <Col xs = {0} md = {0}></Col>
                </Row>
            </Grid>
        )
    }
}