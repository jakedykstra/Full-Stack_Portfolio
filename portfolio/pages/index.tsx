import Head from 'next/head'
import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from "./Navbar"
import Footer from "./Footer"
import Landing from "./Landing";
import Work from "./Work";
import Bio from "./Bio";
import Languages from "./Language";
import Contact from "./Contact";
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
        <BrowserRouter>
            <div className="container">
              <Route render={(props) => {
                  console.log(props.location)
                  return <Navbar location={props.location}/> }} />
              <Switch>
                <Route exact path="/" component={Landing} />
                <Route exact path="/bio" component={Bio} />                
                <Route exact path="/languages" component={Languages} />                
                <Route exact path="/work" component={Work} />
                <Route exact path="/contact" component={Contact} />
              </Switch>
              <Route render={(props) => {
                  console.log(props.location)
                  return <Footer location={props.location}/> }} />
            </div>
          </BrowserRouter>
      </div>
      )
}
