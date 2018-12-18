import React, { Component } from 'react';
import downarrow from '../style/downarrow.png';
import firebase from "../style/firebase-icon.svg";

class Languages extends Component {

  render() {
    return (
      <React.Fragment>
      <div>
      <div className="card">
          <div className="languages__card">
            <div className="languages__list">
              <div className="language-title"><strong>Front-End</strong></div>
              <div><i className="devicon-react-plain"></i> React/Redux</div>
              <div><i className="devicon-javascript-plain"></i> Javascript</div>
              <div><i className="devicon-jquery-plain"></i> jQuery/Lodash</div>
              <div><i className="devicon-html5-plain"></i> HTML5</div>
              <div><i className="devicon-css3-plain"></i> CSS3/SASS</div>
              <div><i className="devicon-bootstrap-plain"></i> Bootstrap/Materialize</div>
            </div>
            <div className="languages__list">
            <div className="language-title"><strong>Back-End</strong></div>
              <div><i className="devicon-nodejs-plain"></i> NodeJs</div>
              <div><i className="devicon-express-original"></i> Express</div>
              <div><i className="devicon-csharp-plain"></i> C#</div>
              <div><i className="devicon-dot-net-plain"></i> ASP.NET</div>
              <div><i className="devicon-sequelize-plain"></i> Sequelize/Mongoose</div>
              {/* <div><i className="devicon-wordpress-plain"></i> Wordpress</div> */}
              
            </div>
            <div className="languages__list">
            <div className="language-title"><strong>Databases</strong></div>
            <div><i className="devicon-mysql-plain"></i> SQL/MySQL</div>
            {/* <div> Firebase</div> */}
            <div><i className="devicon-mongodb-plain"></i> MongoDb</div>
            </div>
            <div className="languages__list">
            <div className="language-title"><strong>Deployment</strong></div>
            <div><i className="devicon-heroku-plain"></i> Heroku</div>
            <div><i className="devicon-git-plain"></i> Git</div>
            <div><i className="devicon-amazonwebservices-plain"></i> AWS</div>
            <div><i className="devicon-travis-plain"></i> Travis CLI</div>
            <div><i className="devicon-docker-plain"></i> Docker</div>
            <div><i className="devicon-mocha-plain"></i> Mocha/Jest</div>
            </div>
            <div className="additional">
              <div className="title"><strong>Additional</strong></div>
              <div className="langs">
              <div className="additional__left">              
                <div><i className="devicon-native-plain"></i> ReactNative</div>
                <div> GraphQL/Apollo</div>
                <div><i className="devicon-agile-plain"></i> Scrum PM</div>
                <div> UX/UI Design</div>
                <div> CS Principles</div>
                <div> SEO/SEM</div>
              </div>
              <div className="additional__right">
                <div> Chrome Extension</div>
                <div> Adobe Suites</div>
                <div> Microsoft Office</div>
                <div> Client Presentations</div>
                <div> Code Refactoring</div>
                <div> Mac/PC</div>
              </div>
              </div>
            </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    )
  }
}

  export default Languages;