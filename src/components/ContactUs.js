import React from "react";
import { useState } from "react";
import contactData from "../data/contactus.json";
import getintough from "../images/contactUs.jpg";
import axios from "axios";
function ContactUs() {
  // All states of input fields defined 
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [messageError, setMessageError] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePhoneChange = (event) => {
    setPhone(event.target.value);
  };

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (validateForm()) {
      axios
        .post("http://localhost:3000/contacts", { name, email, phone, message })
        // .then((response) => {
        //   console.log("Form data posted:", response.data);
        // })
        .then(() => {
          setIsSubmitted(true);
        })
        .catch((error) => {
          console.error("Error posting form data:", error);
        });
    }
  };

  //Form Validation

  const validateForm = () => {
    let valid = true;
    if (!name.match(/^[a-zA-Z ]+$/)) {
      setNameError("Name should not contain special characters or numbers");
      valid = false;
    } else {
      setNameError("");
    }
    if (!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
      setEmailError("Please enter a valid email");
      valid = false;
    } else {
      setEmailError("");
    }
    if (!phone.match(/^[0-9]{10}$/)) {
      setPhoneError("Phone should be 10 digits");
      valid = false;
    } else {
      setPhoneError("");
    }
    if (message.length < 10 || message.length > 150) {
      setMessageError("Message should be between 10 and 150 characters");
      valid = false;
    } else {
      setMessageError("");
    }
    return valid;
  };

  // Form Validation Ended

  return (
    <>
      {/* Card to show contact details fetched from json contactus.file */}

      <div className="card mx-3 mt-2">
        <div className="card-body">
          <h5 className="card-title">Contact Information</h5>
          <p className="card-text">Address: {contactData.address}</p>
          <p className="card-text">Phone: {contactData.phone.join(", ")}</p>
          <p className="card-text">Email: {contactData.email}</p>
        </div>
      </div>
      <div
        className="d-flex justify-content-between w-100 mx-auto my-4 px-4"
        id="contact-us-details"
      >
        {isSubmitted ? (
          <div className="text-success">Thank you for submitting the form!</div>
        ) : (
          // ContactUs form started
          <form
            className="w-50 contact-us-form"
            id="contact-us-form"
            onSubmit={handleSubmit}
          >
            <h3 className="get-in-touch-text">Get In Touch</h3>
            <div className="form-group mb-4">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                className="form-control"
                id="name"
                name="name"
                placeholder="Enter your name"
                required
                value={name}
                onChange={handleNameChange}
              />
              {nameError && <div className="text-danger">{nameError}</div>}
            </div>
            <div className="form-group mb-4">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                placeholder="Enter your email"
                required
                value={email}
                onChange={handleEmailChange}
              />
              {emailError && <div className="text-danger">{emailError}</div>}
            </div>
            <div className="form-group mb-4">
              <label htmlFor="phone">Phone</label>
              <input
                type="tel"
                className="form-control"
                id="phone"
                name="phone"
                placeholder="Enter your phone number"
                required
                value={phone}
                onChange={handlePhoneChange}
              />
              {phoneError && <div className="text-danger">{phoneError}</div>}
            </div>
            <div className="form-group mb-4">
              <label htmlFor="message">Message</label>
              <textarea
                className="form-control"
                id="message"
                name="message"
                placeholder="Enter your message"
                required
                value={message}
                onChange={handleMessageChange}
              />
              {messageError && (
                <div className="text-danger">{messageError}</div>
              )}
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
          // ContactUs form Ended
        )}
        <div className="w-50 pl-5 px-4" id="contact-us-image">
          <img src={getintough} alt="SomeImage" style={{ width: "100%" }} />
        </div>
      </div>
    </>
  );
}

export default ContactUs;
