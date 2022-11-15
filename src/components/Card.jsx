import React from "react";

const Card = ({ img, country, name, fromDate, toDate, description }) => {
  return (
    <div className="card-wrapper">
      <img src={img} alt="image of site" />
      <div className="description-wrapper">
        <div className="view-on-maps">
          <h2>{country}</h2>
          <p>view on maps</p>
        </div>
        <div className="name">
          <h1>{name}</h1>
        </div>
        <div className="dates">
          <span>{fromDate} -</span>
          <span>{toDate}</span>
        </div>
        <div className="description">
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
