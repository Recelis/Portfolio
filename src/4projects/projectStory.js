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
                    <Col xs = {12} md = {4}>
                        <Image className = "projectImg" src= {this.props.projectImg} responsive/>
                    </Col>
                    <Col xs = {12} md = {4}>
                        <h3 className = "projectHeading">{this.props.project}</h3>
                        <p className = "projectText">{this.props.projectText}</p>
                        <p className = "projectLink"><a href = {this.props.projectLink}>Go to the {this.props.project} page!</a></p>
                    </Col>

                </Row>
            </Grid>
        )
    }
}