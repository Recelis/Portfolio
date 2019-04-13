import React, { Component } from "react";

export default class Contact extends Component{
    handleSubmit(e){
        e.preventDefault();
        
    }

    render(){
        return(
            <section className = "contact">
                <form>
                    <div className="">
                        <label for = "name">Name</label>
                        <input type ="text" className="form-control" id = "name"/>
                    </div>
                    <div className="form-group">
                        <label for="exampleInputEmail1">Email address</label>
                        <input type="email" className="form-control" id="email" aria-describedby="emailHelp"/>
                    </div>
                    <div className="form-group">
                        <label for="message">Message</label>
                        <textarea className = "form-control" rows="5" id="message"></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </section>
        )
    }
}