import React from 'react';
import { ContactForm } from 'components/Contact/Form/Form';
import { ContactWrapper } from './Contact.styles';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { FiPhone } from 'react-icons/fi';
import { BsEnvelope } from 'react-icons/bs';
import { RiHome2Line } from 'react-icons/ri';

export const Contact = () => {
  return (
    <ContactWrapper>
      <div className="side">
        <div className="links">
          <h2 className="title">contact me</h2>
          <BsEnvelope className="icons" />
          <FaGithub className="icons" />
          <FaLinkedin className="icons" />
          <FiPhone className="icons" />
        </div>
      </div>
      <div className="form">
        <ContactForm />
      </div>
    </ContactWrapper>
  );
};
