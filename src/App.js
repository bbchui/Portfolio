import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Nav from './nav';
import AboutMe from './about-me';
import Projects from './projects';
import Skills from './skills';
import Contact from './contact';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <Nav />
        </div>
        <section className="background">
        </section>
        <section className="about">
          <div className="title">About Me</div>
          <AboutMe />
        </section>
        <section className="skills-section">
          <div className="title">Skills</div>
          <Skills />
        </section>
        <section className="project">
          <div className="title">Projects</div>
          <Projects />
        </section>
        <section className="contact">
          <div className="title">Contact</div>
          <Contact />
        </section>
      </div>
    );
  }
}

export default App;

// <img src='http://res.cloudinary.com/bbchui/image/upload/v1501015551/pano_msaljt.jpg' alt="image" className="background" />

// <h2>Welcome to React</h2>
// <img src={logo} className="App-logo" alt="logo" />


// <p className="App-intro">
//   To get started, edit <code>src/App.js</code> and save to reload.
// </p>
