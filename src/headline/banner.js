import React, { Component } from "react";

import Logo from "./logo";


export default class Banner extends Component{
    render(){
        return(
            <h1 className = "banner"><em className = "banner-text">THE DAILY <Logo></Logo>PORTFOLIO</em></h1>
        )
    }
} 