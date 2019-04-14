import React, { Component } from "react"

import Grid from "@material-ui/core/Grid";

export default class ProjectsStory extends Component{
    constructor(props){
        super(props);
        this.state = {

        }
    }
    render(){
        return(
            <Grid className = "projects__story">
                        <img className = "projects__img" src= {this.props.projectImg} responsive/>
                        <h3 className = "projects__heading"><a href = {this.props.projectLink}>{this.props.project}</a></h3>
                        <p className = "projects__text">{this.props.projectText}</p>
            </Grid>
        )
    }
}