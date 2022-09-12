import React from "react";
import { Link } from "react-router-dom";

const ServiceCard = ({ service }) => {
  const { id, name, icon, description, explore } = service;
  return (
    <div className="py-3 px-3 bg-white rounded">
      <div className="flex justify-between">
        <h5 className="mb-3 text-sm">{name}</h5>
        <span>
          {" "}
          <i className={icon}></i>
        </span>
      </div>
      <h5 className="text-sm mb-6">{description}</h5>
      <Link to="/">{explore}</Link>
    </div>
  );
};

export default ServiceCard;
