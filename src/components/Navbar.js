import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import logo from '../style/DevByJakeLogo.png';
import video from '../style/Golden_Gate_Traffic.mp4';
import video_image from '../style/Golden_Gate_Traffic.jpg';

class Navbar extends Component {
  render() {
    return (
        <nav className="nav">
        <nav className="nav__user-nav">
                        <div className="nav__user-nav--left">
                          <span>
                                <Link to="/work">Work.</Link>
                          </span>
                          <span>
                                <Link to="/contact">Contact.</Link>
                          </span>
                          <span>
                                <Link to="/bio">Bio.</Link>
                          </span>
                        </div>
                        <div className="nav__user-nav--right">
                          <span>
                                <a href="https://github.com/jakedykstra">Github.</a>
                          </span>
                          <span>
                                <a href="https://www.linkedin.com/in/jacob-dykstra/">LinkedIn.</a>
                          </span>
                          <span>
                                <a href="#">Resume.</a>
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