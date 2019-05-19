import React from "react";
import BaseLayout from "../components/layouts/BaseLayout";
import BasePage from "../components/BasePage";

import { Row, Col } from "reactstrap";

class About extends React.Component {
  render() {
    return (
      <BaseLayout title="Max Kramer - Learn More About Me" {...this.props.auth}>
        <BasePage className="about-page">
          <Row className="mt-5">
            <Col md="6">
              <div className="left-side">
                <h1 className="title fadein">Hello, Welcome</h1>
                <h4 className="subtitle fadein">To About Page</h4>
                <p className="subsubTitle fadein">
                  Feel free to read short description about me.
                </p>
              </div>
            </Col>
            <Col md="6">
              <div className="fadein">
                <p>
                  My name is Max Kramer and I am an experienced webdev and
                  freelance developer.{" "}
                </p>
                <p>
                  I have a Master's degrees in Social Science and Business
                  Administration and several years of experience working on a
                  wide range of technologies and projects from development for
                  social and media researches to modern web applications in
                  React.
                </p>
              </div>
            </Col>
          </Row>
        </BasePage>
      </BaseLayout>
    );
  }
}

export default About;
