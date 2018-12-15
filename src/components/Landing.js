import React, { Component } from 'react';
import Footer from "./Footer"

class Landing extends Component {
  render() {
    console.log(this.props);
    return (
      <React.Fragment>
        <div className="landing">
          <div className="header">
            MY NAMES JAKE AND I'M A FULL-STACK DEVELOPER
          </div>
          <div className="sub">
            React, MySQL, GraphQL, Docker, ... - You name it and I'll build with it.
          </div>
        </div>
        <Footer comp={"Landing"}/>
      </React.Fragment>
    )
  }
}

  export default Landing;