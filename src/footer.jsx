import React from 'react';
import '../node_modules/font-awesome/css/font-awesome.min.css';


class Footer extends React.Component {

  render() {
    return(
      <div className="footer">
        <ul className="social-icons">
          <li><a href="https://www.github.com/bbchui" target="_blank"><i className="fa fa-github" aria-hidden="true"></i></a></li>

          <li><a href="https://www.linkedin.com/in/brandon-chui/" target="_blank"><i className="fa fa-linkedin" aria-hidden="true"></i></a></li>
          <li><a href="mailto:bbchui325@gmail.com?subject=Let's Chat!"><i className="fa fa-envelope-o" aria-hidden="true"></i></a></li>
          <li><a href="https://angel.co/brandon-chui" target="_blank"><i className="fa fa-angellist" aria-hidden="true"></i></a></li>
          <li><a href="https://www.facebook.com/bbchui" target="_blank"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
        </ul>
      </div>
    )
  }
}

export default Footer;
