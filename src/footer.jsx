import React from 'react';
import FontAwesome from 'react-fontawesome';

class Footer extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return(
      <div className="footer">
        <ul class="list-inline nipp-social-icon">
          <li><a href="https://www.facebook.com/achen1231"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
          <li><a href="https://www.instagram.com/"><i className="fa fa-instagram" aria-hidden="true"></i></a></li>

          <li><a href="mailto:alchen1231@gmail.com?subject=Let's Chat!"><i className="fa fa-envelope-o" aria-hidden="true"></i></a></li>
          <li><a href="https://www.linkedin.com/in/alchen1231/"><i className="fa fa-linkedin" aria-hidden="true"></i></a></li>
          <li><a href="https://www.github.com/alnchen"><i className="fa fa-github" aria-hidden="true"></i></a></li>
        </ul>
      </div>
    )
  }
}

export default Footer;
