import React from 'react';

import '../CSS/App.css';
import '../CSS/About.css';
import AboutBG from '../Assets/AboutBG.gif' ;

function About() {
  return (
    <div className="about">
      <section className="about">
      <h1>About Me</h1>
      </section>
      
      
      <section className="bio">
        <p>Hello! I'm Umamaheswari, a passionate AI Engineer with a knack for creating engaging and dynamic user experiences. I bring a unique perspective to every project I work on.</p>
      </section>
      
      <section className="experience">
        <h2>Education</h2>
        <p>I had completed my SSLC in Excel matriculation higher secondary school with 100%.</p>
        <p>I had completed my Higher secondary in Sri Ramakrishma matriculation higher secondary school with 91%</p>
        <p>Now I'm persuing BE.CSE(AI-ML) in Sri Eshwar College of Engineering with cgpa of 7.14</p>
      </section>
      
      
      <img className="react-gif" src={AboutBG} alt="Background GIF" />

    </div>
  );
}

export default About;
