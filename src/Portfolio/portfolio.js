import React, {Component} from "react"
import './portfolio.css';
import { Grid, Row, Col } from "react-bootstrap"

import Title from "./1title/title"
import Heading from "./2story/heading"
import SubHeading from "./2story/subHeadiing"
import MainImage from "./2story/mainImage"
import LangFrame from "./3langframe/langframe"
import Projects from "./4projects/projects"
import Sponsors from "./5sponsors/sponsors"
import Footer from "./6footer/footer"

export default class Portfolio extends Component{
    render(){
        return(
            <Grid fluid>
        <header>
          <Title />
        </header>
        <section className = "headingContainer">
            <Row>
              <Col xs={12} md={12}>
                <Heading />
              </Col>
            </Row>
            <Row>
            <Col xs={12} md={12}>
                <SubHeading />
              </Col>
              <Col xs={12} md={12}>
                  <MainImage />
              </Col>
              
            </Row>
        </section>
        <hr/>
        <section>
          <LangFrame />
        </section>
        <section>
          <Projects />
        </section>
        <section>
          <Sponsors />
        </section>
        <footer>
          <Footer />
        </footer>
      </Grid>
        )
    }
}