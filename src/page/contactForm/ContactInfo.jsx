import React from 'react'
import { FaEnvelope, FaFacebookF, FaGithub, FaLinkedinIn, FaPhoneAlt } from "react-icons/fa";


function ContactInfo() {
  return (
    <div className="contactInfo">
      <h2>Get in Touch</h2>
      <p>
        Have a question about your order, returns, or our products? Our support
        team at <strong>ShamyStore</strong> is always happy to help.
      </p>
      <div className="infoDetails">
        <div>
          <FaEnvelope />
          <span>support@shamystore.com</span>
        </div>
        <div>
          <FaPhoneAlt />
          <span>+20 123 456 7891</span>
        </div>
      </div>
      <div className="icons">
        <a
          href="https://www.facebook.com/ibrahim.elshamy.370177"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebookF />
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer">
          <FaLinkedinIn />
        </a>
        <a
          href="https://github.com/Ibrahim-Elshamy"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub />
        </a>
      </div>
    </div>
  );
}

export default ContactInfo
