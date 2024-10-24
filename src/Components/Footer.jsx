import React from 'react';
import imglogo from '../img/logo-light.png';
import footerimg1 from '../img/footer img1.jpg';
import footerimg2 from '../img/footer img2.jpg';
import footerimg3 from '../img/footer img3.jpg';
import { faComment } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPhone,
  faEnvelope,
  faMapMarkerAlt,
} from '@fortawesome/free-solid-svg-icons';
import {
  faTwitter,
  faFacebook,
  faLinkedin,
  faPinterest,
} from '@fortawesome/free-brands-svg-icons';
import '../Css/Footer.css';
export default function Footer() {
  return (
    <div>
      <div className="footer-bg ">
        <div className="counter container">
          <div className="footer-content">
            <div className="footer-logo">
              <img src={imglogo} alt="img-logo" />
              <p>
                Proin gravida nibh vel velit auctor aliquet anean lorem quis.
                bindum auctor, nisi elite conset ipsums sagtis id duis sed odio
                sit.
              </p>
              <div className="icon_logo">
                {' '}
                <FontAwesomeIcon icon={faTwitter} />
                <FontAwesomeIcon icon={faFacebook} />
                <FontAwesomeIcon icon={faLinkedin} />
                <FontAwesomeIcon icon={faPinterest} />
              </div>
            </div>
            <div className="footer-img">
              <h3>Blog Posts</h3>
              <div className="img-content">
                <div>
                  <img src={footerimg1} alt="im1" />
                </div>
                <div>
                  <p>Four ways to cheer yourself up on the Blue Monday!</p>
                  <div className="details">
                    <span>Jan 20, 2024 </span>
                    <FontAwesomeIcon
                      className="details_icon"
                      icon={faComment}
                    />
                    <span> 6 comment</span>
                  </div>
                </div>
              </div>
              <div className="img-content">
                <div>
                  <img src={footerimg2} alt="im1" />
                </div>
                <div>
                  <p>Four ways to cheer yourself up on the Blue Monday!</p>
                  <div className="details">
                    <span>Jan 20, 2024 </span>
                    <FontAwesomeIcon
                      className="details_icon"
                      icon={faComment}
                    />
                    <span> 6 comment</span>
                  </div>
                </div>
              </div>
              <div className="img-content">
                <div>
                  <img src={footerimg3} alt="im1" />
                </div>
                <div>
                  <p>Four ways to cheer yourself up on the Blue Monday!</p>
                  <div className="details">
                    <span>Jan 20, 2024 </span>
                    <FontAwesomeIcon
                      className="details_icon"
                      icon={faComment}
                    />
                    <span> 6 comment</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="footer-info">
              <h3>content info</h3>
              <div className="icon_flex">
                <FontAwesomeIcon className="contact" icon={faMapMarkerAlt} />
                <p>
                  1220 Petersham town, Wardll St New South <br /> Wales
                  Australia PA 6550
                </p>
              </div>
              <div className="icon_flex">
                <FontAwesomeIcon className="contact" icon={faPhone} />
                <p>(04) 491 570 110</p>
              </div>
              <div className="icon_flex">
                <FontAwesomeIcon className="contact" icon={faEnvelope} />
                <p>contact@zytheme.com</p>
              </div>
            </div>
          </div>
        </div>
        <div className="end_footer">© 2024, All Rights Reserved.</div>
      </div>
    </div>
  );
}
