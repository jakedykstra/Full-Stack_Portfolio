import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import logo from '../style/Logo.png';
import video from '../style/Golden_Gate_Traffic.mp4';
import video_image from '../style/Golden_Gate_Traffic.jpg';
import resume from "../style/resume.pdf";

class Navbar extends Component {

      state = {
            clicked: false,
      }

  isActiveView = (path) => {
        console.log(this.props.location.pathname);
        if (this.props.location.pathname === path) {
              return "active-view"
        }
  }

  windowWidth = () => {
        console.log(window.innerWidth);
      if(window.innerWidth > 500) {
            return "45";
      } else {
            return "55";
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
                          <span className={this.isActiveView("/languages")}>
                                <Link to="/languages">Languages.</Link>
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
                                <a target="_blank" rel="noopener noreferrer" href="http://www.UseCase.tech/">Blog.</a>
                          </span>
                          <span>
                          <a href={resume} target='_blank' rel="noopener noreferrer">Resume.</a>
                          </span>
                        </div>
                  </nav>
                  <div className="nav__logo">
                        <Link to="/"><img src={logo} alt="DevByJake Logo" height={this.windowWidth()}></img></Link>
                  </div>
                  <div className="bg-video">                  
                        <video className="bg-video__content" autoPlay muted loop>
                        <source src={video} type="video/mp4" />
                        <source src={video_image} type="video/webm" />
                        Your browser is not supported!
                    </video>
                  </div>
                  <div className="bg-video-reversed">                  
                        <video className="bg-video__content" autoPlay muted playsinline loop>
                              <source src={video} poster={video_image} type="video/mp4" />
                              <source src={video_image} type="video/webm" />
                              Your browser is not supported!
                        </video>
                  </div>
                  <div className="background-box"/>

        </nav>
    );
  }
}

export default Navbar;