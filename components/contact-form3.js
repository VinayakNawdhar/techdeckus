"use client";
import React, { useState } from "react";
import axios from 'axios'
import PropTypes from "prop-types";
import toast, { Toaster } from 'react-hot-toast';

const ContactForm3 = (props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault()
    if (name && email && message) {
      const resp = await axios.post("/api/contact-us", {
        name,
        email,
        message,
      });
      setName("");
      setEmail("");
      setMessage("");
      if (resp.data.message == "success") {
        toast.success("Message Sent!");
      } else {
        toast.error("Some error occured..");
      }
    }
  };
  return (
    <>
      <div className="contact-form3-contact9 thq-section-padding">
        <Toaster/>
        <div className="thq-flex-row thq-section-max-width contact-form3-max-width">
          <animate animation="fadeInTopLeft">
            <img
              alt={props.imageAlt}
              src={props.imageSrc}
              data-thq-animate-on-reveal="true"
              className="contact-form3-image1 thq-img-ratio-4-3"
            />
          </animate>
          <div className="contact-form3-content thq-flex-column">
            <h1 className="px-10 text-3xl">Lets talk?</h1>
            <form className="thq-card" onSubmit={handleSubmit}>
              <div className="contact-form3-input">
                <label htmlFor="contact-form-3-name" className="thq-body-small">
                  Name
                </label>
                <input
                  type="text"
                  id="contact-form-3-name"
                  placeholder="Name"
                  className="thq-input contact-form3-text-input"
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                  required="true"
                />
              </div>
              <div className="contact-form3-input1">
                <label
                  htmlFor="contact-form-3-email"
                  className="thq-body-small"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="contact-form-3-email"
                  required="true"
                  placeholder="Email"
                  className="thq-input contact-form3-text-input1"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
              </div>
              <div className="contact-form3-container">
                <label
                  htmlFor="contact-form-3-message"
                  className="thq-body-small"
                >
                  Message
                </label>
                <textarea
                  id="contact-form-3-message"
                  rows="3"
                  placeholder="Enter your message"
                  className="thq-input contact-form3-textarea"
                  value={message}
                  onChange={(e) => {
                    setMessage(e.target.value);
                  }}
                  required="true"
                ></textarea>
              </div>
              <button
                type="submit"
                className="contact-form3-button thq-button-filled"
              >
                <span className="thq-body-small">{props.action}</span>
              </button>
            </form>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .contact-form3-contact9 {
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: column;
          }
          .contact-form3-image1 {
            flex: 1;
            width: auto;
            height: auto;
            max-width: 640px;
            border-radius: var(--dl-radius-radius-radius4);
          }
          .contact-form3-content {
            gap: 0;
            flex: 1;
            align-items: stretch;
          }
          .contact-form3-section-title {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .contact-form3-content1 {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .contact-form3-input {
            gap: var(--dl-space-space-halfunit);
            display: flex;
            align-self: stretch;
            flex-direction: column;
          }
          .contact-form3-input1 {
            gap: var(--dl-space-space-halfunit);
            display: flex;
            align-self: stretch;
            flex-direction: column;
          }
          .contact-form3-container {
            gap: var(--dl-space-space-halfunit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .contact-form3-checkbox {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: center;
          }
          .contact-form3-text6 {
            height: auto;
            font-size: 14px;
            font-style: Regular;
            text-align: left;
            font-family: Roboto;
            font-weight: 400;
            line-height: 150%;
            font-stretch: normal;
            text-decoration: none;
          }
          .contact-form3-button {
            align-self: flex-start;
          }
          @media (max-width: 1600px) {
            .contact-form3-image1 {
              animation-name: jello;
              animation-delay: 0s;
              animation-duration: 300ms;
              animation-direction: normal;
              animation-iteration-count: 1;
              animation-timing-function: ease;
            }
            .contact-form3-text-input {
              width: 100%;
              height: 47px;
            }
            .contact-form3-text-input1 {
              width: 100%;
              height: 47px;
            }
            .contact-form3-textarea {
              width: 100%;
            }
            .contact-form3-text6 {
              width: var(--dl-size-size-large);
              height: auto;
            }
            .contact-form3-button {
              width: 113px;
              height: 52px;
            }
          }
          @media (max-width: 1200px) {
            .contact-form3-image1 {
              width: 414px;
              height: 344px;
            }
            .contact-form3-text-input {
              width: 100%;
            }
            .contact-form3-text-input1 {
              width: 100%;
            }
          }
          @media (max-width: 991px) {
            .contact-form3-max-width {
              flex-direction: column;
            }
            .contact-form3-content {
              width: 100%;
            }
          }
          @media (max-width: 767px) {
            .contact-form3-image1 {
              width: 100%;
            }
          }
        `}
      </style>
    </>
  );
};

ContactForm3.defaultProps = {
  imageSrc:
    "https://images.unsplash.com/photo-1698349145149-f1e4126f2531?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMDI3NzI1MXw&ixlib=rb-4.0.3&q=80&w=700",
  content2: "Get in touch with us",
  imageAlt: "Image1",
  action: "Submit",
  heading1: "Contact us",
  content1: "We are delighted to hear from you.",
};

ContactForm3.propTypes = {
  imageSrc: PropTypes.string,
  content2: PropTypes.string,
  imageAlt: PropTypes.string,
  action: PropTypes.string,
  heading1: PropTypes.string,
  content1: PropTypes.string,
};

export default ContactForm3;
