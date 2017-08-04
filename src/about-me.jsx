import React from 'react';

class AboutMe extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="about-me">
        <div>
          <div>
            <h3>About Me</h3>
            <p>
              I am a software engineer that enjoys building web applications from the back-end to the front-end, emphasizing on easy and fluid user experience. I am an avid volleyball player that also enjoys a good tabletop game here and there.
            </p>
          </div>
          <div className="personalpic"></div>
        </div>
      </div>
    )
  }

}

export default AboutMe;

// I am a software engineer attracted to building impactful products while providing users with an easy and intuitive experience.
