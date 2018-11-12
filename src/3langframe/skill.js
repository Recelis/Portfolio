import React, { Component } from "react"

import { Image } from "react-bootstrap"

export default class Paragraph extends Component{
    constructor(props){
        super(props);
        this.state = {
            
        }
    }
    componentDidMount(){

    }
    render(){
        return(
            <div className = "skill">
                <Image className = "skillImg" src = {this.props.skillImg} alt = {this.props.skill} responsive></Image>
                <p>{this.props.skill}</p>
            </div>
        )
    }
}