import React, { Component } from 'react';

import downarrow from '../style/downarrow.png'
import Footer from "./Footer"
import image from "../style/300x600.png"
import projectData from "../util/projectData"

class Work extends Component {

  state = {
    mainProjectName: "DayWon",
    allProjects: ["DayWon", "Crypto Market Simulator", "News Webscraper", "FlashCard Chrome Extension", "Millenial Budget"]
  }
    
  newProjectMain = (project) => {
        return this.setState({mainProjectName: project})
    }

  languageClick = () => {
    this.props.history.push('/languages')
  }

  isActive = (project) => {
    if(this.state.mainProjectName === project) {
      return "active"
    } else {
      return
    }
  }

  componentDidMount() {
    setInterval(() => {
      let next = (this.state.allProjects.indexOf(this.state.mainProjectName)) + 1;
      if(typeof(this.state.allProjects[next]) === "string") {
        next = this.state.allProjects[next]
      } else {
        next = this.state.allProjects[0];
      }
      this.setState({mainProjectName: next})
    },10000)
  }

  render() {
    return (
            <React.Fragment>
      <div>
      <div className="arrow">
        <h3 className="with-arrow">languages</h3>
        <img onClick={this.languageClick} className="down-arrow" src={downarrow} alt="arrow pointing down"/>
      </div>
      <div className="card-project">
          <div className="projects__main">
            <img src={image} alt="Screenshot of main project" className="screenshot"/>
            <div className="projects__main--text">
              <div className="main-project-name"><strong>{this.state.mainProjectName}</strong> <a href="#">Github</a></div>
              <div className="languages"><em>{projectData[this.state.mainProjectName].lang}</em></div>
              <div className="description">{projectData[this.state.mainProjectName].desc}</div>
            </div>
          </div>
          <div className="projects__lists">
            <div className="projects__lists--box" id={this.isActive("DayWon")} onClick={() => this.newProjectMain("DayWon")}>
              <div className="project-name"><strong>DayWon</strong></div>
              <div className="project-languages" data=""><em>React/Redux, MongoDb/Mongoose, Node/Express, React Native, PassportJS, D3</em></div>
            </div>
            <div className="projects__lists--box" id={this.isActive("Crypto Market Simulator")} onClick={() => this.newProjectMain("Crypto Market Simulator")}>
            <div className="project-name"><strong>Crypto Market Simulator</strong></div>
              <div className="project-languages"><em>React, Axios, Node, Sequelize, MySql, PassportJS, D3, Heroku</em></div>
            </div>
            <div className="projects__lists--box" id={this.isActive("News Webscraper")} onClick={() => this.newProjectMain("News Webscraper")}>
            <div className="project-name"><strong>News Webscraper</strong></div>
              <div className="project-languages"><em>React, Axios, Node, MongoDb/Mongoose, Cheerio, Heroku</em></div>
            </div>
            <div className="projects__lists--box" id={this.isActive("FlashCard Chrome Extension")} onClick={() => this.newProjectMain("FlashCard Chrome Extension")}>
            <div className="project-name"><strong>FlashCard Chrome Extension</strong>(In Progress)</div>
              <div className="project-languages"><em>React/Redux, Mongodb/Mongoose, Node/Express</em></div>
            </div>
            <div className="projects__lists--box" id={this.isActive("Millenial Budget")} onClick={() => this.newProjectMain("Millenial Budget")}>
            <div className="project-name"><strong>Millenial Budget</strong>(In Progress)</div>
              <div className="project-languages"><em>C#, ASP.NET MVC5, Access, MySQL,  Docker, Kubernetes</em></div>
            </div>
        </div>
      </div>
      </div>
      <Footer comp={"Work"}/>
      </React.Fragment>
    )
  }
}

  export default Work;