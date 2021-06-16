import React, { Component } from 'react';
import axios from 'axios';

class Contact extends Component {

  state = {
      name: "",
      email: "",
      message: "",
      project: "off",
      hiring: "off"
  }

  handleChange = (inputElement, e) => {
      console.log(this.state);
      this.setState({
          [inputElement]: e.value
      })
  }

  handleButton = (type, e) => {
    let notOn;
    type === "hiring" ? notOn = "project" : notOn = "hiring"; 
      this.setState({
          [type]: e.target.value,
          [notOn]: "off"
      })
  }

  resetForm = () => {
    this.setState ({
        name: "",
        email: "",
        message: "",
        project: "off",
        hiring: "off"
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    console.log("sending");
    axios.post("/api/email", this.state).then((response)=>{
        if (response.data.msg === 'success'){
            alert("Message Sent."); 
            this.resetForm()
        }else if(response.data.msg === 'fail'){
            alert("Message failed to send.")
        }
    })
  }

  render() {
    return (
              <React.Fragment>
      <div className="card">
      <form action="#" className="contact__form">
                                <div className="contact__header">
                                    <h2 className="heading-secondary">
                                        Contact me.
                                    </h2>
                                </div>
                            <div className="top-input">
                                <div className="form__group first-input inputs-group">
                                        <input onChange={(e) => this.handleChange("name", e.target)} type="text" className="form__input" placeholder="Full name" id="name" value={this.state.name} required />
                                        <label for="name" className="form__label">Full name</label>
                                    </div>

                                    <div className="form__group inputs-group">
                                        <input onChange={(e) => this.handleChange("email", e.target)} type="email" className="form__input" placeholder="Email address" id="email" value={this.state.email} required />
                                        <label for="email" className="form__label">Email address</label>
                                    </div>
                            </div>


                                <div className="form__group">
                                    <textarea onChange={(e) => this.handleChange("message", e.target)}className="form__textarea" rows="4" placeholder="Reason for contact" value={this.state.message} required /> 
                                    <label for="message" className="form__label">Message</label>                       
                                </div>


                                <div className="radio">
                                    <div className="radio-buttons">
                                        <div className="form__radio-group">
                                            <input onChange={e => this.handleButton("hiring", e)} type="radio" className="form__radio-input" id="small" name="size" value={this.state.hiring} />
                                            <label for="small" className="form__radio-label">
                                                <span className="form__radio-button"></span>
                                                <b>Hiring.</b>
                                            </label>
                                        </div>

                                        <div className="form__radio-group">
                                            <input onChange={e => this.handleButton("project", e)} type="radio" className="form__radio-input" id="large" name="size"/>
                                            <label for="large" className="form__radio-label">
                                                <span className="form__radio-button"></span>
                                                <b>Project.</b>
                                            </label>
                                        </div>
                                    </div>
                                    <div className="form__group">
                                    <button onClick={this.handleSubmit} className="button"><b>Send. &rarr;</b></button>
                                    </div>
                                </div>


                            </form>
      </div>
      </React.Fragment>
    )
  }
}

  export default Contact;