import React, {Component} from "react"
import './../App.css';
import { Grid, Row, Col } from "react-bootstrap"
import Navbar from "./1navbar/navbar";

import FrontPage from "./2frontPage/frontPage"
import LangFrame from "../Portfolio/3langframe/langframe"
import Projects from "../Portfolio/4projects/projects"
import Sponsors from "../Portfolio/5sponsors/sponsors"
import Footer from "./6footer/footer"

export default class Entry extends Component{
    render(){
        return(
            <Grid fluid>
        <header>
          <Navbar />
        </header>
        <FrontPage/>
        
        <footer>
          <Footer/>
        </footer>
      </Grid>
        )
    }
}