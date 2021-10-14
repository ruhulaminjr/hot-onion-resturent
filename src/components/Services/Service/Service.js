import React from "react";
import "./service.css";
import arrow from "../../../images/right-arrow.png";
const Service = ({ service }) => {
  return (
    <div className="service">
      <img src={service.img} alt="" />
      <div className="service-item">
        <div className="service-name">
          <img src={service.icon} alt="" />
          <h4 style={{ fontWeight: "normal" }}>{service.name}</h4>
        </div>

        <div className="service-desc">
          <p>{service.desc}</p>
          <button>
            See More <img src={arrow} alt="" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Service;
