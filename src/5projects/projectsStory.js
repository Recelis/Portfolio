import React, { Component } from "react"

import { Container, Row, Col, Image } from "react-bootstrap"

export default class ProjectsStory extends Component{
    constructor(props){
        super(props);
        this.state = {

        }
    }
    render(){
        return(
            <Container className = "projects__story" fluid>
                <Row>
                    <Col xs = {12} md = {12}>
                        <Image className = "projects__img" src= {this.props.projectImg} responsive/>
                    </Col>
                </Row>
                <Row>
                    <Col xs = {0} md = {0}></Col>
                    <Col xs = {12} md = {12}>
                        <h3 className = "projects__heading"><a href = {this.props.projectLink}>{this.props.project}</a></h3>
                        <p className = "projects__text">{this.props.projectText}</p>
                    </Col>
                    <Col xs = {0} md = {0}></Col>
                </Row>
            </Container>
        )
    }
}