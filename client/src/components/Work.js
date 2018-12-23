import React, { Component } from 'react';
import DayWonImg from "../style/images/DayWon.png";
import projectData from "../util/projectData";
import crypMarkImg from "../style/images/crypt.png";
import chromeExtImg from "../style/images/Chrome_ext.png";
import portImg from "../style/images/Port.png";
import puppImg from "../style/images/pupp.png";

class Work extends Component {

  state = {
    mainProjectName: "DayWon",
    allProjects: ["DayWon", "Crypto Market Simulator", "Research Scraper", "FlashCard Chrome Extension", "DevByJake"]
  }

  projectImg = () => {
    switch (this.state.mainProjectName) {
      case "DayWon":
        return DayWonImg;
      case "Crypto Market Simulator":
        return crypMarkImg;
      case "Research Scraper":
        return puppImg;
      case "FlashCard Chrome Extension":
        return chromeExtImg;
      case "DevByJake":
        return portImg;
      default: 
        return null;
    }
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

  isPage = () => {
    if (projectData[this.state.mainProjectName].pageLink) {
      return <a className="project-page-anchor" target="_blank" href="projectData[this.state.mainProjectName].pageLink">Project</a>
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
              <img src={this.projectImg()} alt="Screenshot of main project" className="screenshot"/>
              <div className="projects__main--text">
                <div className="main-project-name"><strong>{this.state.mainProjectName}</strong> <a target="_blank" rel="noopener noreferrer" href={projectData[this.state.mainProjectName].link}>Github</a> {"   "}{this.isPage()}</div>
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
              <div className="projects__lists--box" id={this.isActive("Research Scraper")} onClick={() => this.newProjectMain("Research Scraper")}>
              <div className="project-name"><strong>Research Scraper</strong></div>
                <div className="project-languages"><em>Puppeteer, CheerioJS, NodeJS/Express</em></div>
              </div>
              <div className="projects__lists--box" id={this.isActive("FlashCard Chrome Extension")} onClick={() => this.newProjectMain("FlashCard Chrome Extension")}>
              <div className="project-name"><strong>FlashCard Chrome Extension</strong>(In Progress)</div>
                <div className="project-languages"><em>React/Redux, Mongodb/Mongoose, Node/Express</em></div>
              </div>
              <div className="projects__lists--box" id={this.isActive("DevByJake")} onClick={() => this.newProjectMain("DevByJake")}>
              <div className="project-name"><strong>DevByJake</strong></div>
                <div className="project-languages"><em>React, NodeJS/Express, MongoDb, Emailer </em></div>
              </div>
          </div>
        </div>
        </div>
      </React.Fragment>
    )
  }
}

  export default Work;