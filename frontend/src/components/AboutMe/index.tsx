import React from 'react';
import RESUME_DATA from '../../constants/resumeData';
import './AboutMe.scss';

function AboutMe() {
  return (
    <>
      <div className="aboutMe" id="aboutMe">
        <h2>ABOUT ME</h2>
        <p>{RESUME_DATA.aboutMe}</p>
        <div className="generalInformation">
          <div className="personalInformationAndLanguagesContainer">
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
              {RESUME_DATA.languages.map((language) => (
                <div className="language">
                  <span>{language.language}</span>
                  <div className="language__level">
                    <div className="language__levelDots">
                      { Array(language.levelNumber).fill(<span className="material-icons md-light">circle</span>) }
                      { Array(10 - language.levelNumber).fill(<span className="material-icons-outlined md-light">circle</span>) }
                    </div>
                    <span>{language.level}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="competencies">
          <h3>competencies</h3>
          <ul className="competencies__list">
            {RESUME_DATA.competencies.map((competencie) => (
              <li>
                <span className="material-icons-outlined">
                  done
                </span>
                {competencie}
              </li>
            ))}
          </ul>

        </div>
      </div>
    </>
  );
}

export default AboutMe;
