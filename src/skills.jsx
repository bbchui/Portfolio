import React from 'react';

class Skills extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return(
      <div>
        <div class="col-sm-3 skills">
            <i class="devicon-javascript-plain colored"></i>
            <p>JavaScript</p>
          </div>
          <div class="col-sm-3 skills">
            <i class="devicon-react-original colored"></i>
            <p>React/Redux</p>
          </div>
          <div class="col-sm-3 skills">
            <i class="devicon-ruby-plain colored"></i>
            <p>Ruby</p>
          </div>
          <div class="col-sm-3 skills">
            <i class="devicon-rails-plain colored"></i>
            <p>Rails</p>
          </div>
          <div class="col-sm-3 skills">
            <i class="devicon-postgresql-plain colored"></i>
            <p>PostgreSQL</p>
          </div>
          <div class="col-sm-3 skills">
            <i class="devicon-mysql-plain-wordmark colored"></i>
            <p>MySQL</p>
          </div>
          <div class="col-sm-3 skills">
            <i class="devicon-git-plain colored"></i>
            <p>Git</p>
          </div>
          <div class="col-sm-3 skills">
            <i class="devicon-webpack-plain colored"></i>
            <p>Webpack</p>
          </div>
          <div class="col-sm-3 skills">
            <i class="devicon-html5-plain colored"></i>
            <p>HTML5</p>
          </div>
          <div class="col-sm-3 skills">
            <i class="devicon-css3-plain colored"></i>
            <p>CSS3</p>
          </div>
          <div class="col-sm-3 skills">
            <i class="devicon-sass-original colored"></i>
            <p>Sass</p>
          </div>
          <div class="col-sm-3 skills">
            <i class="devicon-bootstrap-plain colored"></i>
            <p>Bootstrap</p>
          </div>
      </div>
    )
  }
}

export default Skills;
