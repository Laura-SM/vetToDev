import React from 'react';
import RESUME_DATA from '../../constants/resumeData';
import './AboutMe.scss';

function AboutMe() {
  return (
    <>
      <div className="aboutMe">
        <h2>ABOUT ME</h2>
        <p>{RESUME_DATA.aboutMe}</p>
      </div>
      <div className="generalInformation">
        <div className="personalInformation-and-languages-container">
          <div className="personalInformation">
            <h3>personal information</h3>
            <dl>
              <dt>FULL NAME</dt>
              <dd>{RESUME_DATA.name}</dd>
              <dt>D.O.B</dt>
              <dd>07 March 1987</dd>
              <dt>CITY</dt>
              <dd>{RESUME_DATA.contactDetails.city}</dd>
              <dt>E-MAIL</dt>
              <dd>{RESUME_DATA.contactDetails.email}</dd>
              <dt>PHONE</dt>
              <dd>{RESUME_DATA.contactDetails.phoneNumber}</dd>
            </dl>
          </div>
          <div className="languages">
            <h3>languages</h3>
            {RESUME_DATA.languages.map((language) => <li>{language}</li>)}
          </div>
        </div>

        <div className="competencies">
          <h3>competencies</h3>
          {RESUME_DATA.competencies.map((competencie) => <li>{competencie}</li>)}
        </div>
      </div>
    </>
  );
}

export default AboutMe;
