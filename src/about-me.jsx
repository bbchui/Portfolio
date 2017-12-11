import React from 'react';
import resume from './resume.pdf';
import personalpic from './personalpic.png'

class AboutMe extends React.Component {

  render() {
    return (
      <div className="about-me">
        <div>
          <p>
            I am a software engineer that enjoys building web applications from the back-end to the front-end, emphasizing on easy and fluid user experience. As a former healthcare professional, nothing is more satisfying than providing a product that is useful and convenient to users.
          </p>
          <p>
            Aside from software development, I enjoy playing volleyball, exploring, and playing tabletop games.
          </p>
          <a href="http://brandon-chui.com/static/media/resume.2ba67661.pdf" className="about-me-resume" target="_blank">Resume</a>
        </div>
        <img src='http://res.cloudinary.com/bbchui/image/upload/v1512971948/IMG_3301_mmir1h.jpg' className="personalpic" alt="loading" />
      </div>
    )
  }

}

export default AboutMe;

// I am a software engineer attracted to building impactful products while providing users with an easy and intuitive experience.
