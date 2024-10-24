import React from 'react';
import '../Css/why.css';
import whyMan from '../img/man-why.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAddressBook } from '@fortawesome/free-regular-svg-icons';
import { faHandshake } from '@fortawesome/free-regular-svg-icons';
import { faIdBadge } from '@fortawesome/free-regular-svg-icons';
import { faFile } from '@fortawesome/free-regular-svg-icons';
export default function Why() {
  return (
    <>
      <div className=" bg-why">
        <div className="why container" id="why-us">
          <div className="leftWhy">
            <img src={whyMan} alt="whyMan" />
          </div>
          <div className="rightWhy">
            <h1>Why Hire Us ?</h1>
            <p className="exc">
              Lorem ipsum dolor amet, consectetur adipisice elite sede eiusmod
              tempor incidide labeore dolore magna.
            </p>
            <div className="icon-why">
              <div>
                <FontAwesomeIcon icon={faAddressBook} className="font-icon" />
                <h4>Exclusively Areas</h4>
                <p>
                  Lorem ipsum dolor sit amet, conse adipise elit, sed eiusmod
                  tempor incidide.
                </p>
              </div>
              <div>
                <FontAwesomeIcon icon={faHandshake} className="font-icon" />
                <h4>Group Of Lawyers</h4>
                <p>
                  Lorem ipsum dolor sit amet, conse adipise elit, sed eiusmod
                  tempor incidide.
                </p>
              </div>
              <div>
                <FontAwesomeIcon icon={faIdBadge} className="font-icon" />
                <h4>Cases Results</h4>
                <p>
                  Lorem ipsum dolor sit amet, conse adipise elit, sed eiusmod
                  tempor incidide.
                </p>
              </div>
              <div>
                <FontAwesomeIcon icon={faFile} className="font-icon" />
                <h4>Experts In Law</h4>
                <p>
                  Lorem ipsum dolor sit amet, conse adipise elit, sed eiusmod
                  tempor incidide.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
