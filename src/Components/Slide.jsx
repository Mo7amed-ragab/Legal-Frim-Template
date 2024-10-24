import React from "react";

const Slide = ({ image, paragraph, authorName }) => {
  return (
    <div className="slide">
      <img src={image} alt="Slide" />
      <p>{paragraph}</p>
      <h6>{authorName}</h6>
    </div>
  );
};

export default Slide;