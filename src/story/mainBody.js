import React, { Component } from "react"
import Paragraph from "./paragraph"

export default class MainBody extends Component{
    render(){
        return(
            <div>
                <Paragraph />
                <Paragraph />
                <Paragraph />
            </div>
        )
    }
}