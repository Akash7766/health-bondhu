import React from "react";
import Slider from "./Slider";

const Testimonial = () => {
  return (
    <div className="py-14">
      <div className="text-center">
        <h5 className="text-[#642DFF] mb-3">Testimonial</h5>
        <h2 className="text-3xl mb-10">What they say?</h2>
      </div>
      <div className="lg:w-[90%] mx-auto">
        <Slider />
      </div>
    </div>
  );
};

export default Testimonial;
