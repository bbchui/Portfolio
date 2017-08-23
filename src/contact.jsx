import React from 'react';
// import Mailto from 'react-mailto';
import axios from 'axios';
import ModalStyle from './modal_style';
import Modal from 'react-modal';

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {name: "",
                  email: "",
                  message: "",
                  error: 0,
                  modalOpen: false};
    this.onModalOpen = this.onModalOpen.bind(this);
    this.onModalClose = this.onModalClose.bind(this);
    this.onTransition = this.onTransition.bind(this);
    this.update = this.update.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleError = this.handleError.bind(this);
    this.invalidEmail = this.invalidEmail.bind(this);
  }

  onModalOpen(e) {
    e.preventDefault()
    this.setState({modalOpen: true});
  }

  onModalClose() {
    this.setState({modalOpen: false});
    ModalStyle.content.opacity = 0;
  }

  onTransition() {
    ModalStyle.content.opacity = 100;
  }


  handleSubmit(e) {
    e.preventDefault();
    this.setState({modalOpen: true});
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
    if (arr.length !== 2) {
      return true;
    } else if (arr[1].split(".").length !== 2) {
      return true;
    }
    return false;
  }

  handleError() {
    if (this.state.error === 1) {
      return(
        <div className="submit">Please complete the form!</div>
      );
    } else if (this.state.error === 2) {
      return(
        <div className="submit">Please enter a valid e-mail</div>
      )
    } else {
      return(
        <div className="submit">Thank You! I will get back to you as soon as possible!</div>
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


          <Modal
            contentLabel="Modal"
            style={ModalStyle}
            isOpen={this.state.modalOpen}
            onRequestClose={this.onModalClose}
            onAfterOpen={this.onTransition}
            >
            <div>{this.handleError()}</div>
          </Modal>


          <form>
            <input type="text" onChange={this.update('name')} value={this.state.name} placeholder="Name"/>
            <input type="text" onChange={this.update('email')} value={this.state.email} placeholder="Email"/>
            <textarea type="text" onChange={this.update('message')} value={this.state.message} placeholder="Message"/>
            <button className="send" onClick={this.handleSubmit}>Send</button>
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


// {this.handleError()}
