import React, { Component } from "react"
import Skill from "./skill"

import { Grid, Row, Col } from "react-bootstrap"

import reactImg from "../images/react.jpeg"
import reduxImg from "../images/redux.jpeg"
import htmlImg from "../images/HTML5.png"
import jsImg from "../images/javascript.jpeg"
import cssImg from "../images/css3.png"
import bootstrapImg from "../images/bootstrap.svg"

export default class MainBody extends Component{
    render(){
        return(
            <Grid>
                <Row>
                    <Col xs = {12} md = {12}>
                        <h3 className = "articleHeading">Languages and Frameworks</h3>
                    </Col>
                </Row>
                <Row>
                    <Col xs = {12} md = {4}>
                        <Skill 
                            skill = "React"
                            skillImg = {reactImg}
                        />
                    </Col>
                    <Col xs = {12} md = {4}>
                        <Skill 
                            skill = "Redux"
                            skillImg = {reduxImg}
                        />
                    </Col>
                    <Col xs = {12} md = {4}>
                        <Skill 
                            skill = "HTML5"
                            skillImg = {htmlImg}
                        />
                    </Col>
                </Row>
                <Row>
                    <Col xs = {12} md = {4}>
                        <Skill 
                            skill = "Javascript"
                            skillImg = {jsImg}
                        />
                    </Col>
                    <Col xs = {12} md = {4}>
                        <Skill 
                            skill = "CSS"
                            skillImg = {cssImg}
                        />
                    </Col>
                    <Col xs = {12} md = {4}>
                        <Skill  
                            skill = "Bootstrap"
                            skillImg = {bootstrapImg}
                        />
                    </Col>
                </Row>
            </Grid>
        )
    }
}