import React, { Component } from "react"

import { Image } from "react-bootstrap" 
import image from "../images/jacky.png"

export default class MainImage extends Component{
    render(){
        return(
            <Image className = "mainImage" src={image} alt="person sternly looking into the souls of the viewers" rounded responsive/>
        )
    }
}