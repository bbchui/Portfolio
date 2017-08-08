import React from 'react'
require('smoothscroll-polyfill').polyfill();


class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    if (e === 'Home') {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
    } else if (e === 'About') {
      window.scrollTo({
        top: 920,
        left: 0,
        behavior: 'smooth'
      });
    } else if (e === 'Skills') {
      window.scrollTo({
        top: 1760,
        left: 0,
        behavior: 'smooth'
      });
    }
  }

  render() {
    return (
      <div className="nav-bar">
        <span onClick={() => this.handleClick('Home')}>Home</span>
        <span onClick={() => this.handleClick('About')}>About Me</span>
        <span onClick={() => this.handleClick('Skills')}>Skills</span>
        <span>Projects</span>
        <span>Contact</span>
      </div>
    )
  }
}

export default Nav;
