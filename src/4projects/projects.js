import React, { Component } from "react"

import { Grid, Row, Col } from "react-bootstrap"

import ProjectStory from "./projectStory"

// images
import Opposts from "../images/village.jpg"
import PizzaAndChills from "../images/pizza.png"

const projectText = {
    Opposts:`To explore what it means to build a full stack app, I ventured further to build a social media app based on uploading 6 images stories. Built with React and Firebase for a mock backend, all 'server' functions
    were moved to one server file as I realised that full stack apps were built with front-end separate from the backend code.
    `,
    PizzaAndChills:"This was the first full-stack app that I had attempted. This app notifies people when they are free to hang out with. Built with React and Firebase."
}

const projectLink = {
    Opposts:"https://www.opposts.com",
    PizzaAndChills:"https://pizzaandchills.herokuapp.com/"
}


export default class Projects extends Component{
    render(){
        return(
            <Grid className = "project">
                <Row>
                    <Col xs = {12} md = {12}>
                        <h3 className = "articleHeading">Projects</h3>
                    </Col>
                </Row>
                <Row>
                    <Col xs = {12} md = {12}>
                        <ProjectStory 
                            project = "Opposts"
                            projectImg = {Opposts}
                            projectText = {projectText.Opposts}
                            projectLink = {projectLink.Opposts}
                        />

                    </Col>
                    <Col xs = {12} md = {12}>
                        <ProjectStory 
                                project = "Pizza&Chills"
                                projectImg = {PizzaAndChills}
                                projectText = {projectText.PizzaAndChills}
                        />
                    </Col>
                </Row>
            </Grid>
        )
    }
}