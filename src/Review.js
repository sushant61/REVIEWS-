import React, { useState } from "react";
import people from "./data";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";

const Review = () => {
  const [index, setIndex] = useState(0);
  const { name, job, image, text } = people[index];
  const checkNumber = (number) => {
    if (number < 0) return people.length - 1;
    return number;
  };
  const prev = () => {
    setIndex((index) => {
      return checkNumber(index - 1);
    });
  };
  const random = () => {
    return setIndex(Math.floor(Math.random() * 4));
  };
  return (
    <article className="review">
      <div className="img-container">
        <img src={image} alt={name} className="person-img" />
        <span className="quote-icon">
          <FaQuoteRight />
        </span>
      </div>
      <h4 className="author">{name}</h4>
      <p className="job">{job}</p>
      <p className="info">{text}</p>
      <div className="btn-container">
        <button className="prev-btn" onClick={prev}>
          <FaChevronLeft />
        </button>
        <button className="next-btn" onClick={() => setIndex((index + 1) % 4)}>
          <FaChevronRight />
        </button>
      </div>
      <button className="random-btn" onClick={random}>
        surprise me
      </button>
    </article>
  );
};
export default Review;
