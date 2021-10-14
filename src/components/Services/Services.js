import React from "react";
import useServices from "../../hooks/useServices";
import "./info.css";
import Service from "./Service/Service";

const Services = () => {
  const [services] = useServices();
  return (
    <div className="container">
      <div className="intro">
        <h2>Why You Choose Us</h2>
        <p>
          Healthful eating has many health benefits, such as reducing the risk
          of heart disease, stroke, obesity, and type 2 diabetes.
        </p>
      </div>
      <div className="services-container">
        {services?.map((service) => (
          <Service key={service.id} service={service} />
        ))}
      </div>
    </div>
  );
};

export default Services;
