import React, { Component } from 'react';
import signature from '../style/Signature.png'
import { history } from 'react-router-dom';

class Footer extends Component {

  whichQuote = () => {
    switch (this.props.comp) {
      case "Bio":
        return "Order and simplification are the first steps toward the mastery of a subject.";
      case "Work":
        return "We are what we repeatedly do. Excellence is not an act, but a habit."
      case "Landing":
        return "The future is now. It’s just not evenly distributed yet."
      case "Languages":
        return "Every great developer you know got there by solving problems they were unqualified to solve until they actually did it."
      case "Contact":
        return "On the Internet, nobody knows you're a dog."
      default:
        break;
    }
  }

  render() {
    return (
        <footer className="footer">
        <div className="quote">{this.whichQuote()}</div>
        <div className="empty"></div>
        <img className="signature" src={signature} alt="Jake's Signature"></img>
        </footer>
    );
  }
}

export default Footer;