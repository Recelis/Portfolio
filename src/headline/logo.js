import React, { Component } from 'react'
import logo from "../images/logo.png"

import { Image } from "react-bootstrap"

export default class Logo extends Component{
    render(){
        return(
            <img src = {logo} alt = "logo" className = "logo"/>
        )
    }
}