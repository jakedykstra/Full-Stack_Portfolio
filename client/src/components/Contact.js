import React, { Component } from 'react';

class Contact extends Component {
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
                                        <input type="text" className="form__input" placeholder="Full name" id="name" required />
                                        <label for="name" className="form__label">Full name</label>
                                    </div>

                                    <div className="form__group inputs-group">
                                        <input type="email" className="form__input" placeholder="Email address" id="email" required />
                                        <label for="email" className="form__label">Email address</label>
                                    </div>
                            </div>


                                <div className="form__group">
                                    <textarea className="form__textarea" rows="4" placeholder="Reason for contact" required /> 
                                    <label for="message" className="form__label">Message</label>                       
                                </div>


                                <div className="radio">
                                    <div className="radio-buttons">
                                        <div className="form__radio-group">
                                            <input type="radio" className="form__radio-input" id="small" name="size"/>
                                            <label for="small" className="form__radio-label">
                                                <span className="form__radio-button"></span>
                                                <b>Hiring.</b>
                                            </label>
                                        </div>

                                        <div className="form__radio-group">
                                            <input type="radio" className="form__radio-input" id="large" name="size"/>
                                            <label for="large" className="form__radio-label">
                                                <span className="form__radio-button"></span>
                                                <b>Project.</b>
                                            </label>
                                        </div>
                                    </div>
                                    <div className="form__group">
                                    <button className="button"><b>Send. &rarr;</b></button>
                                    </div>
                                </div>


                            </form>
      </div>
      </React.Fragment>
    )
  }
}

  export default Contact;