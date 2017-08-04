import React from 'react';
import personalpic from './personalpic.png'

class AboutMe extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="about-me">
        <div>
          <div>
            <h2>About Me</h2>
            <p>
              I am a software engineer that enjoys building web applications from the back-end to the front-end, emphasizing on easy and fluid user experience. I am an avid volleyball player that also enjoys a good tabletop game here and there.
            </p>
          </div>
        <img src={personalpic} className="personalpic" />
        </div>
      </div>
    )
  }

}

export default AboutMe;

// I am a software engineer attracted to building impactful products while providing users with an easy and intuitive experience.
