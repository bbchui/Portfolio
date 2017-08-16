import React from 'react';
// import Mailto from 'react-mailto';
import axios from 'axios';

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {name: "", email: "", message: "", error: 0}
    this.update = this.update.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleError = this.handleError.bind(this);
    this.invalidEmail = this.invalidEmail.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    if (!this.state.name || !this.state.email || !this.state.message) {
      this.setState({error: 1})
    } else if (this.invalidEmail(this.state.email)) {
      this.setState({error: 2})
    } else {
      this.setState({error: false})
      axios({
      url: "https://formspree.io/bbchui325@gmail.com",
      method: "POST",
      data: {name: this.state.name,
            email: this.state.email,
            message: this.state.message},
      dataType: "json"
      }).then(this.clearForm())
    }
  }

  clearForm() {
    this.setState({name: "", email: "", message: ""})
  }

  invalidEmail(email) {
    let arr;
    if (email.indexOf("@") === -1) {
      return true;
    } else {
      arr = email.split("@")
    }
    if (arr.length != 2) {
      return true;
    } else if (arr[1].split(".") != 2) {
      return true;
    }
    return false;
  }

  handleError() {
    if (this.state.error === 1) {
      return(
        <div>Please complete the form!</div>
      );
    } else if (this.state.error === 2) {
      return(
        <div>Please enter a valid e-mail</div>
      )
    }
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  render() {
    return(
      <div className="contacts-section">
        <div className="contact-border">
          <form>
            <input type="text" onChange={this.update('name')} value={this.state.name} placeholder="Name"/>
            <input type="text" onChange={this.update('email')} value={this.state.email} placeholder="Email"/>
            <textarea type="text" onChange={this.update('message')} value={this.state.message} placeholder="Message"/>
            <button className="send" onClick={this.handleSubmit}>Send</button>
            {this.handleError()}
          </form>
          <div className="contact-info">
            <p>Email: bbchui325@gmail.com</p>
            <p>Phone: (415) 823-6303</p>
          </div>
        </div>
      </div>
    )
  }
}

export default Contact;
