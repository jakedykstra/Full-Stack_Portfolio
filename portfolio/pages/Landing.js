import React, { Component } from 'react';

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
            Let's build something new.
          </div>
        </div>
      </React.Fragment>
    )
  }
}

  export default Landing;