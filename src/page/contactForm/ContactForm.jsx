import React from "react";
import "./contactForm.css";
import ContactInfo from "./ContactInfo";
import PageTransition from "../../components/PageTransition";
import FormFields from "../../components/FormFields";

function ContactForm() {
  return (
    <PageTransition>
      <div className="ContactForm">
        <div className="container">
          <section className="header">
            <h1 className="title">Contact US</h1>
            <p className="paragraph">
              We are pleased to receive your inquiries, please fill out the form
              below
            </p>
            <p className="border" />
          </section>
          <section className="content">
            <ContactInfo />
            <FormFields type="contactUs" />
          </section>
        </div>
      </div>
    </PageTransition>
  );
}

export default ContactForm;
