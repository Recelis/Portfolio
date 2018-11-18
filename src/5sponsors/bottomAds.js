import React, { Component } from "react"

import { Image } from "react-bootstrap"

export default class BottomAds extends Component{
    constructor(props){
        super(props);
        this.state = {

        }
    }
    
    render(){
        return(
        <div className = "sponsor">
        <Image className = "bottomAdImg" src = {this.props.img} alt= {this.props.company + " image"} responsive></Image>
            <a className = "bottomAdHead" href = {this.props.contactDetails}>{this.props.headline}</a>
            <p className = "bottomAdCompany">{this.props.company}</p>
        </div>
        )
    }
}