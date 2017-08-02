import React from 'react'

class Nav extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="nav-bar">
        <span>Home</span>
        <span>About Me</span>
        <span>Skills</span>
        <span>Projects</span>
        <span>Contact</span>
      </div>
    )
  }
}

export default Nav;
