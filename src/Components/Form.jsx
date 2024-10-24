import React from "react";
import { useFormik } from "formik";
import "../Css/FreeConsultation.css";

export default function Form() {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      option: "",
      message: "",
    },
    onSubmit: (values) => {
      console.log(JSON.stringify(values, null, 2));
    },
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="row">
        <div className="col">
          <input
            type="text"
            className="form-control"
            placeholder="Your name"
            onChange={formik.handleChange}
            value={formik.values.name}
            name="name"
          />
        </div>
        <div className="col">
          <input
            onChange={formik.handleChange}
            value={formik.values.email}
            type="text"
            className="form-control"
            placeholder="Your Email"
            name="email"
          />
        </div>
        <div className="mb-3">
          <select
            className="form-select"
            required
            onChange={formik.handleChange}
            value={formik.values.option}
            name="option"
          >
            <option value="">Select an Option</option>
            <option value="criminal-law">Criminal Law</option>
            <option value="international-law">International Law</option>
            <option value="financial-law">Financial Law</option>
          </select>
          <div className="invalid-feedback">
            Example invalid select feedback
          </div>
        </div>
      </div>
      <div className="mb-3">
        <textarea
          onChange={formik.handleChange}
          value={formik.values.message}
          className="form-control"
          id="exampleFormControlTextarea1"
          placeholder="Your Message"
          rows="5"
          name="message"
        ></textarea>
      </div>
      <button className="sub-btn" type="submit">
        send
      </button>
    </form>
  );
}
