import React, { Component } from 'react';
import downarrow from '../style/downarrow.png'
import Footer from "./Footer"

class Languages extends Component {

  render() {
    return (
      <React.Fragment>
      <div>
      <div className="card">
          <div className="languages">
            <div className="languages__list">
              <div className="language-title">Front-End</div>
              <div><i className="devicon-react-plain"></i> React/Redux</div>
              <div><i className="devicon-javascript-plain"></i> Javascript</div>
              <div><i className="devicon-jquery-plain"></i> jQuery/Lodash</div>
              <div><i className="devicon-d3js-plain"></i> D3</div>
              <div><i className="devicon-html5-plain"></i> HTML5</div>
              <div><i className="devicon-css3-plain"></i> CSS3/SASS</div>
              <div><i className="devicon-bootstrap-plain"></i> Bootstrap/Materialize</div>
              <div><i className="#"></i> GraphQL/Apollo</div>
            </div>
            <div className="languages__list">
            <div className="language-title">Back-End</div>
              <div><i className="devicon-nodejs-plain"></i> NodeJs</div>
              <div><i className="devicon-express-original"></i> Express</div>
              <div><i className="devicon-csharp-plain"></i> C#</div>
              <div><i className="devicon-dot-net-plain"></i>ASP.NET</div>
              <div><i className="devicon-handlebars-plain"></i> HandleBars/EJS</div>
              <div><i className="devicon-mongoose-plain"></i> Mongoose</div>
              <div><i className="devicon-sequelize-plain"></i> Sequelize</div>
              <div><i className="devicon-passport-plain"></i> Passport.js/Cheerio.js</div>
            </div>
            <div className="languages__list">
            <div className="language-title">Databases</div>
            <div><i className="devicon-mysql-plain"></i> SQL/MySQL</div>
            <div><i className="devicon-firebase-plain"></i> Firebase</div>
            <div><i className="devicon-mongodb-plain"></i> MongoDb</div>
            </div>
            <div className="languages__list">
            <div className="language-title">Deployment</div>
            <div><i className="devicon-heroku-plain"></i> Heroku</div>
            <div><i className="devicon-git-plain"></i> Git</div>
            <div><i className="devicon-amazonwebservices-plain"></i> AWS</div>
            <div><i className="devicon-travis-plain"></i> Travis CLI</div>
            <div><i className="devicon-docker-plain"></i> Docker</div>
            <div><i className="devicon-jest-plain"></i> Jest</div>
            <div><i className="devicon-mocha-plain"></i> Mocha</div>
            </div>
            <div className="additional">
              <div className="title">Additional</div>
              <div className="langs">
              <div className="additional__left">              
                <div><i className="devicon-native-plain"></i> ReactNative</div>
                <div><i className="devicon-agile-plain"></i> Scrum PM</div>
                <div><i className="#"></i> UX/UI Design</div>
                <div><i className="#"></i> CS Principles</div>
                <div><i className="#"></i> Refactoring</div>
              </div>
              <div className="additional__right">
                <div><i className="devicon-chrome-plain"></i> Chrome Extension</div>
                <div><i className="#"></i> SEO</div>
                <div><i className="devicon-wordpress-plain"></i> Wordpress</div>
                <div><i className="devicon-adobe-plain"></i> Adobe Suites</div>
                <div><i className="devicon-microsoft-plain"></i> Microsoft Office</div>
                <div><i className="#"></i> Client Presentations</div>
                <div><i className="devicon-linux-plain"></i> Linux/Mac/PC</div>
              </div>
              </div>
            </div>
            </div>
          </div>
        </div>
        <Footer comp={"Languages"}/>
      </React.Fragment>
    )
  }
}

  export default Languages;