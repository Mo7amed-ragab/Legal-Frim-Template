import React from 'react';
import '../Css/FreeConsultation.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from './Form';
import { motion, MotionProps } from 'framer-motion';
export default function FreeConsultation() {
  return (
    <>
      <div className="container">
        <div className="consultation-sec" id="form">
          <div className="form-section">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              <div className="consultation-content">
                <h2>Free Consultation</h2>
                <p>
                  Lorem ipsum dolor amet, consectetur adipisice elite sede
                  eiusmod tempor incidide labeore dolore magna.
                </p>
              </div>
            </motion.div>
            <Form />
          </div>
          <div className="consultation-img"></div>
        </div>
      </div>
    </>
  );
}
