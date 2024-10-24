import React from 'react';
import { Link } from 'react-router-dom';
import team1 from '../img/team-1.jpg';
import team2 from '../img/team-2.jpg';
import team3 from '../img/team-3.jpg';
import {
  faFacebookF,
  faTwitter,
  faGoogle,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../Css/Them.css';
export default function Them() {
  return (
    <>
      <div id="them" className="them">
        <div className="container">
          <div className="them_content">
            <h2>Experted Attorneys</h2>
            <p>
              Lorem ipsum dolor amet, consectetur adipisice elitesede eiusmod
              tempor incidide labeore dolore magna.
            </p>
          </div>
          <div className="row">
            <div class="col-xs-12 col-sm-4 col-md-4">
              <div className="conn-them">
                <div className="img-them">
                  <Link href="#">
                    <img src={team1} alt="img" />
                  </Link>
                  <div className="overlaay">
                    <div className="icon-them">
                      <FontAwesomeIcon icon={faFacebookF} />
                    </div>
                    <div className="icon-them">
                      <FontAwesomeIcon icon={faTwitter} />
                    </div>
                    <div className="icon-them">
                      <FontAwesomeIcon icon={faGoogle} />
                    </div>
                    <div className="icon-them">
                      <FontAwesomeIcon icon={faLinkedin} />
                    </div>
                  </div>
                </div>
                <div className="them-info">
                  <h5>Mark Smith</h5>
                  <h6>CEO & Manager</h6>
                </div>
              </div>
            </div>
            <div class="col-xs-12 col-sm-4 col-md-4">
              <div className="conn-them">
                <div className="img-them">
                  <Link href="#">
                    <img src={team2} alt="img" />
                  </Link>
                  <div className="overlaay">
                    <div className="icon-them">
                      <FontAwesomeIcon icon={faFacebookF} />
                    </div>
                    <div className="icon-them">
                      <FontAwesomeIcon icon={faTwitter} />
                    </div>
                    <div className="icon-them">
                      <FontAwesomeIcon icon={faGoogle} />
                    </div>
                    <div className="icon-them">
                      <FontAwesomeIcon icon={faLinkedin} />
                    </div>
                  </div>
                </div>
                <div className="them-info">
                  <h5>Mark Smith</h5>
                  <h6>CEO & Manager</h6>
                </div>
              </div>
            </div>
            <div class="col-xs-12 col-sm-4 col-md-4">
              <div className="conn-them">
                <div className="img-them">
                  <Link href="#">
                    <img src={team3} alt="img" />
                  </Link>
                  <div className="overlaay">
                    <div className="icon-them">
                      <FontAwesomeIcon icon={faFacebookF} />
                    </div>
                    <div className="icon-them">
                      <FontAwesomeIcon icon={faTwitter} />
                    </div>
                    <div className="icon-them">
                      <FontAwesomeIcon icon={faGoogle} />
                    </div>
                    <div className="icon-them">
                      <FontAwesomeIcon icon={faLinkedin} />
                    </div>
                  </div>
                </div>
                <div className="them-info">
                  <h5>Mark Smith</h5>
                  <h6>CEO & Manager</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
