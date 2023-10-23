import React from "react";
import { Link } from "react-router-dom";

const ServicesCard = ({ card }) => {
  return (
    <div className="card">
      <figure>
        <img src={card?.img} className="img-fluid" alt="services" />
      </figure>
      <h3 className="level-3">{card?.name}</h3>
      <Link to="#" className="level-5 text-primary">
        LEARN MORE
      </Link>
    </div>
  );
};

export default ServicesCard;