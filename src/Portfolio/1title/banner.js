import React, { Component } from "react";

export default class Banner extends Component{
    constructor(){
        super();
        this.state = {
            day:"",
            monthString:"",
            year:""
        }
    }
    render(){
        return(
            <h1 className = "logo">The Jacky Portfolio</h1>
        )
    }
} 

