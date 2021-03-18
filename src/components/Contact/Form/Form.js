import React from 'react';
import emailjs from 'emailjs-com';
import { FormWrapper } from './Form.styles';

export const ContactForm = (e) => {
  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('default_service', 'template_2lsf4xd', e.target, 'user_DwITUkp8xJtnFK8Qky6q0').then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );
    e.target.reset();
  }

  return (
    <FormWrapper onSubmit={sendEmail} id="form">
      <div className="field">
        <label for="subject">subject</label>
        <input type="text" name="subject" id="subject" />
      </div>
      <div className="field">
        <label for="name">name</label>
        <input type="text" name="name" id="name" />
      </div>
      <div className="field">
        <label for="email">email</label>
        <input type="text" name="email" id="email" />
      </div>
      <div className="field">
        <label for="message">message</label>
        <input className="message" type="text" name="message" id="message" />
      </div>

      <input type="submit" id="button" value="Send Email" />
    </FormWrapper>
  );
};
