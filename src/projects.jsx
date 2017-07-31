import React from 'react';

class Projects extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return(
      <div>
        <ul className="projects">
          <li>
            <img src='http://res.cloudinary.com/bbchui/image/upload/v1501028042/Screen_Shot_2017-07-25_at_5.01.34_PM_lxvlkv.png' alt="OpenGym" className="project-img" />
            <div>
              <h2>OpenGym</h2>
              <p>OpenGym is a full-stack web application modeled after Yelp, built to help users find volleyball open gyms</p>
              <p>Technologies: Javascript, React/Redux, Ruby on Rails, PostgreSQL</p>
            </div>
          </li>
          <li>
            <img src='https://s3.amazonaws.com/poly-screenshots.angel.co/Project/f5/553428/a413b9bdbe36e2a58c6ce49a1a1d36e3-original.jpg' alt="OpenGym" className="project-img" />
          </li>
          <li>
            <img src='http://res.cloudinary.com/bbchui/image/upload/v1501094626/Screen_Shot_2017-06-02_at_11.07.23_AM_sybhmb.png' alt="OpenGym" className="project-img" />
          </li>
        </ul>

      </div>
    )
  }
}

export default Projects;
