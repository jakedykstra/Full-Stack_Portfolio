import React, { Component } from 'react';
import bio_pic from "../style/jake_greyscale.jpg";
import Footer from "./Footer"

class Bio extends Component {
  render() {
    return (
      <React.Fragment>
      <div className="card">
          <h2 className="card__head">Brief Career Bio.</h2>
            <div className="card__contents">
            <img src={bio_pic} alt="Picture of Jake Dykstra"></img>
            <p className="about-blurb">
            Coming from a background in account management at a top ad firm. With this unique skillset, I have strong knowledge of the client needs and the importance of developer functional clean code. I strive to build powerful applications that fulfill a user or business needs. <br /><br/><br/>
            <b>Education.</b> <br/>
            - B.A. in Advertising at the CalState Fullerton <br/>
            - Certificate in Software Engineering from UC Davis <br/>
            - Online courses from Udemy and EDX
            </p>
            <div id="card__bio--personal-bio">
              <h3>Personal Life.</h3>
              <ul>
                <li>Born and raised in the beautiful Windsor, CA.</li>
                <li>Enjoyed hiking, camping, and anything sports growing up.</li>
                <li>Board games and puzzles sound like a great way to spend my free time.</li>
                <li>I entain myself with casual beer brewing and I aspire to be a woodworker when I have the time.</li>
                <li>As a kid I wanted to be a DBZ fighter when I grew up</li>
                <li>My goal a few years ago was to travel overseas... That is still my goal</li>
                <li>I Worked for a michelin star restaurant where I learned there’s more to life than pizza and hamburgers. </li>
                <li>I love to learn new things</li>
              </ul>
      </div>
      </div>
    </div>
       <Footer comp={"Bio"}/>
      </React.Fragment>
    );
  }
}

export default Bio;