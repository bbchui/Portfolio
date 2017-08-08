import React from 'react';
// import Mailto from 'react-mailto';
import axios from 'axios';

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {name: "", email: "", message: "", error: false}
    this.update = this.update.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleError = this.handleError.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    if (!this.state.name || !this.state.email || !this.state.message) {
      this.setState({error: true})
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

  handleError() {
    if (this.state.error) {
      return(
        <div>Please complete the form!</div>
      );
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
        <form>
          <input type="text" onChange={this.update('name')} value={this.state.name} placeholder="Name"/>
          <input type="text" onChange={this.update('email')} value={this.state.email} placeholder="Email"/>
          <textarea type="text" onChange={this.update('message')} value={this.state.message} placeholder="Message"/>
        </form>
        <button onClick={this.handleSubmit}>send</button>
        {this.handleError()}
      </div>
    )
  }
}

export default Contact;
