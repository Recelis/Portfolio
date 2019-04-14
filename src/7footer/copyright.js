import React, { Component } from "react"

export default class CopyRight extends Component{
    constructor(props){
        super(props);
        this.state = {

        }
    }
    
    render(){
        return(
            <div>
                <hr/>
                <p className = "copyRight"> 
                    &#169; Jacky Lui 2019.
                </p>
            </div>
        )
    }
}