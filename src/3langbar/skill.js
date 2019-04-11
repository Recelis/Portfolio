import React, { Component } from "react"

import { Image } from "react-bootstrap"

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
            <div className = "langbar__skill">
                <Image className = "langbar__img" src = {this.props.skillImg} alt = {this.props.skill} responsive></Image>
                <p className = "langbar_text">{this.props.skill}</p>
            </div>
        )
    }
}