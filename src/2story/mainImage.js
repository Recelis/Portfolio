import React, { Component } from "react"

import { Image } from "react-bootstrap" 
import image from "../images/jacky.png"

export default class MainImage extends Component{
    render(){
        return(
            <Image src={image} alt="Jacky in the City" rounded responsive/>
        )
    }
}