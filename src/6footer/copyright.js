import React, { Component } from "react"

export default class CopyRight extends Component{
    constructor(props){
        super(props);
        this.state = {

        }
    }
    
    render(){
        return(
        <p> 
            The Jacky Portfolio is copyrighted by Jacky Lui 2018. If you want to work with Jacky Lui and provide a feature story for his web portfolio, or 
            fancy hiring his skills contact him via jackymlui at live dot com.
        </p>
        )
    }
}