import React, { Component } from 'react';
import Footer from "./Footer"

class Landing extends Component {
  render() {
    console.log(this.props);
    return (
      <React.Fragment>
        <div className="landing">
          <div className="header">
            My NAMES JAKE AND I'M A JUNIOR FULL-STACK DEVELOPER
          </div>
          <div className="sub">
            Let's build something new.
          </div>
        </div>
        <Footer comp={"Landing"}/>
      </React.Fragment>
    )
  }
}

  export default Landing;