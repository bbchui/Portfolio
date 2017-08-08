import React from 'react';

class Skills extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return(
      <section className="skills">
        <div className="icons">
            <i className="devicon-javascript-plain colored"></i>
            <p>JavaScript</p>
        </div>
        <div className="icons">
          <i className="devicon-react-original colored"></i>
          <p>React/Redux</p>
        </div>
        <div className="icons">
          <i className="devicon-ruby-plain colored"></i>
          <p>Ruby</p>
        </div>
        <div className="icons">
          <i className="devicon-rails-plain colored"></i>
          <p>Rails</p>
        </div>
        <div className="icons">
          <i className="devicon-python-plain colored"></i>
          <p>Python</p>
        </div>
        <div className="icons">
          <i className="devicon-postgresql-plain colored"></i>
          <p>PostgreSQL</p>
        </div>
        <div className="icons">
          <i className="devicon-mysql-plain-wordmark colored"></i>
          <p>MySQL</p>
        </div>
        <div className="icons">
          <i className="devicon-git-plain colored"></i>
          <p>Git</p>
        </div>
        <div className="icons">
          <i className="devicon-webpack-plain colored"></i>
          <p>Webpack</p>
        </div>
        <div className="icons">
          <i className="devicon-html5-plain colored"></i>
          <p>HTML5</p>
        </div>
        <div className="icons">
          <i className="devicon-css3-plain colored"></i>
          <p>CSS3</p>
        </div>
        <div className="icons">
          <i className="devicon-sass-original colored"></i>
          <p>Sass</p>
        </div>
      </section>
    )
  }
}

export default Skills;
