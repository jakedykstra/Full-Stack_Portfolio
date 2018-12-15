import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import logo from '../style/DevByJakeLogo.png';
import video from '../style/Golden_Gate_Traffic.mp4';
import video_image from '../style/Golden_Gate_Traffic.jpg';
import { Document } from 'react-pdf';
import resume from "../style/resume.pdf.pdf";

class Navbar extends Component {

      state = {
            clicked: false
      }

  isActiveView = (path) => {
        console.log(this.props.location.pathname);
        if (this.props.location.pathname === path) {
              return "active-view"
        }
  }

  renderPDF = () => {
        console.log("clicked");
      this.setState({
            clicked: true
      })
  }

  renderResume = () => {
        if (this.state.clicked === true) {
            return (
                  <div>
            <Document
              file={resume}
            >
            </Document>
          </div>
            )
        }
        else {
              return null
        }

  }

  render() {
        console.log(this.props);
    return (
        <nav className="nav">
        <nav className="nav__user-nav">
                        <div className="nav__user-nav--left">
                          <span className={this.isActiveView("/work")}>
                                <Link to="/work">Work.</Link>
                          </span>
                          <span className={this.isActiveView("/contact")}>
                                <Link to="/contact">Contact.</Link>
                          </span>
                          <span className={this.isActiveView("/bio")}>
                                <Link to="/bio">About.</Link>
                          </span>
                        </div>
                        <div className="nav__user-nav--right">
                          <span>
                                <a target="_blank" rel="noopener noreferrer" href="https://github.com/jakedykstra">Github.</a>
                          </span>
                          <span>
                                <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/jacob-dykstra/">LinkedIn.</a>
                          </span>
                          <span>
                                <button onClick={() => this.renderPDF()}>Resume.{this.renderResume()}</button>
                          </span>
                        </div>
                  </nav>
                  <div className="nav__logo">
                        <Link to="/"><img src={logo} alt="DevByJake Logo"></img></Link>
                  </div>
                  <div className="bg-video">                  
                        <video className="bg-video__content" autoPlay muted loop>
                        <source src={video} type="video/mp4" />
                        <source src={video_image} type="video/webm" />
                        Your browser is not supported!
                    </video>
                  </div>

        </nav>
    );
  }
}

export default Navbar;