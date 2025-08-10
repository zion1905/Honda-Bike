import React, { useState } from "react";
import "../Styles/ContactForm .css";

const ContactForm = () => {
  const [captcha, setCaptcha] = useState(generateCaptcha());

  function generateCaptcha() {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    return Array.from({ length: 6 }, () => chars.charAt(Math.floor(Math.random() * chars.length))).join("");
  }

  const refreshCaptcha = () => {
    setCaptcha(generateCaptcha());
  };

  return (
    <div className="contact-container">
      <form className="contact-form">
        <div className="form-group">
          <label>About<span className="required">*</span></label>
          <select>
            <option value="">Select an Option.</option>
            <option>Product Inquiry</option>
            <option>Service Inquiry</option>
          </select>
          <p className="error">Please select an option.</p>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>State<span className="required">*</span></label>
            <select>
              <option value="">Select State.</option>
              <option>Tamil Nadu</option>
              <option>Karnataka</option>
            </select>
            <p className="error">Please select your state.</p>
          </div>

          <div className="form-group">
            <label>City</label>
            <select disabled>
              <option>Select state first</option>
            </select>
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>Your Name<span className="required">*</span></label>
            <input type="text" placeholder="First Name Last Name" />
          </div>
          <div className="form-group">
            <label>Your E-mail ID<span className="required">*</span></label>
            <input type="email" placeholder="john.doe@example.com" />
          </div>
        </div>

        <div className="form-group">
          <label>Message<span className="required">*</span></label>
          <textarea placeholder="Describe your query or feedback here."></textarea>
        </div>

        <div className="form-row captcha-row">
          <div className="captcha-image">
            <span>{captcha}</span>
          </div>
          <input type="text" placeholder="Enter CAPTCHA" />
          <button type="button" onClick={refreshCaptcha} className="refresh-btn">↻</button>
        </div>

        <div className="form-group checkbox">
          <input type="checkbox" />
          <span>
            You must agree to the <a href="#">terms and conditions</a> before submitting.
          </span>
        </div>

        <div className="form-buttons">
          <button type="submit" className="submit-btn">Submit</button>
          <button type="reset" className="reset-btn">Reset</button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
