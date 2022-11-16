import React from "react";

const Card = ({ img, country, name, fromDate, toDate, description }) => {
  return (
    <div className="card__wrapper">
      <img className="image" src={img} alt="image of site" />
      <h2 className="country__name">{country}</h2>
      <p className="view__maps">view on maps</p>
      <h1 className="location">{name}</h1>
      <p className="dates">
        {fromDate} - {toDate}
      </p>
      <p className="description">{description}</p>
    </div>
  );
};

export default Card;
