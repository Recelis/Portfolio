import React, { Component } from "react"

import Grid from "@material-ui/core/Grid"

export default class LangBarSkill extends Component{
    constructor(props){
        super(props);
        this.state = {
            
        }
    }
    componentDidMount(){

    }
    render(){
        return(
            <Grid className = "langbar__skill">
                <img className = "langbar__img" src = {this.props.skillImg} alt = {this.props.skill} responsive></img>
                <p className = "langbar_text">{this.props.skill}</p>
            </Grid>
        )
    }
}