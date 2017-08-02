import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Nav from './nav';
import AboutMe from './about-me';
import Projects from './projects';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <Nav />
        </div>
        <section className="background">

        </section>
        <section>
          <AboutMe />
        </section>
        <section>
          <h2>Projects</h2>
          <Projects />
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
