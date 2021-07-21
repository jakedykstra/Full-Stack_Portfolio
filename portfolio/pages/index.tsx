import Head from 'next/head';
import React, { Component } from 'react';
// import Navbar from "./Navbar"
// import Footer from "./Footer"
// import Work from "./Work";
// import Bio from "./Bio";
// import Languages from "./Language";
// import Contact from "./Contact";
// import Image from 'next/image'
import styles from '../assets/Home.module.css';

export default function Home() {
    return (
        <div className='landing'>
            <div className='header'>JACOB FINCH | FULL-STACK</div>
            <div className='sub'>Let's build something new.</div>
        </div>
    );
}
