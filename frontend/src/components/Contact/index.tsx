import React from 'react';
import RESUME_DATA from '../../constants/resumeData';
import './style.scss';

function Contact() {
  return (
    <div className="contact" id="contact">
      <h2>CONTACT</h2>
      <dl>
        <div className="contact__item">
          <dt>
            <span className="material-icons-outlined">
              email
            </span>
          </dt>
          <dd>
            <a href="mailto:laura@vettodev.com" aria-label="mailto" title="mailto">
              {RESUME_DATA.contactDetails.email}
            </a>
          </dd>
        </div>
        <div className="contact__item">
          <dt>
            <span className="material-icons-outlined">
              call
            </span>
          </dt>
          <dd>{RESUME_DATA.contactDetails.phoneNumber}</dd>
        </div>
        <div className="contact__item">
          <dt>
            <i className="fab fa-linkedin" />
          </dt>
          <dd>
            <a href="https://linkedin.com/in/laura-sabater-musach" target="_blank" aria-label="linkedin" title="Laura's LinkedIn" rel="noreferrer">
              {RESUME_DATA.contactDetails.linkedIn}
            </a>
          </dd>
        </div>
        <div className="contact__item">
          <dt>
            <i className="fab fa-github" />
          </dt>
          <dd>
            <a href="https://github.com/Laura-SM" target="_blank" aria-label="github" title="Laura's gitHub" rel="noreferrer">
              {RESUME_DATA.contactDetails.gitHub}
            </a>
          </dd>
        </div>
        <div className="contact__item">
          <dt>
            <span className="material-icons-outlined">
              place
            </span>
          </dt>
          <dd>{RESUME_DATA.contactDetails.city}</dd>
        </div>
      </dl>
    </div>
  );
}

export default Contact;
