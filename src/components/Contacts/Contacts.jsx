import React from 'react'
import "./contacts.css"

export const Contacts = () => {
    return (
      <div id="contactsSection">
        <h1>Contact me</h1>
        <h2>If you'd like to get in touch, feel free to reach out!</h2>
        <div className="contact-info">
          <h3>Email:</h3>
          <p>&nbsp;s17321104@gmail.com</p>
        </div>
        <div className="contact-info">
          <h3>Phone:</h3>
          <p>&nbsp; +91 8904261131</p>
        </div>
        <div className="contact-info">
          <h3>LinkedIn:</h3>
          <p>
            <a href="https://www.linkedin.com/in/oshashanko/">
            &nbsp;https://www.linkedin.com/in/oshashanko/
            </a>
          </p>
        </div>
        <div className="contact-info">
          <h3>GitHub:</h3>
          <p>
            <a href="https://github.com/oSHASHANKo">
            &nbsp;https://github.com/oSHASHANKo
            </a>
          </p>
        </div>
        <div className="contact-info">
          <h3>Twitter:</h3>
          <p>
            <a href="https://x.com/oSHASHANKo">
              &nbsp;https://x.com/oSHASHANKo
            </a>
          </p>
        </div>
      </div>
    );

}
