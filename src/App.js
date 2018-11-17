import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Landing from "./components/Landing";
import Work from "./components/Work";
import Bio from "./components/Bio";
import Languages from "./components/Language";
import Contact from "./components/Contact";

class App extends Component {
  
  render() {
    return (
      <div>
        <BrowserRouter>
            <div className="container">
              <Navbar />
              <Switch>
                <Route exact path="/" component={Landing} />
                <Route exact path="/bio" component={Bio} />                
                <Route exact path="/languages" component={Languages} />                
                <Route exact path="/work" component={Work} />
                <Route exact path="/contact" component={Contact} />
              </Switch>
            </div>
          </BrowserRouter>
      </div>
    );
  }
}

export default App;
