import React, { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";

const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("services.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  console.log(services);
  return (
    <div className="py-10">
      <div className="service-heading text-center ">
        <h4 className="text-sm text-[#642DFF] mb-3">Our Services</h4>
        <h2 className="text-[#1E1E1E] text-3xl mb-7">
          Services For Your Health
        </h2>
      </div>
      <div className="grid grid-cols-4 gap-4">
        {services.map((service) => (
          <ServiceCard service={service} />
        ))}
      </div>
    </div>
  );
};

export default Services;
