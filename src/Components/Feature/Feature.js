import React from "react";
import featureImg from "../../assets/feature-doctor.png";
import feature1 from "../../assets/feature-1.png";
import feature2 from "../../assets/feature-2.png";
import feature3 from "../../assets/feature-3.png";
import feature4 from "../../assets/feature-4.png";
const Feature = () => {
  return (
    <div className="py-7 flex">
      <div className="experience-right flex justify-center items-center w-5/12">
        <img src={featureImg} alt="" />
      </div>
      <div className="experience-left w-7/12">
        <div className="mb-10">
          <h5 className=" text-xs text-[#642DFF]">Our Hospital Feature </h5>
          <h2 className=" text-3xl font-bold my-3">
            Make An Appointment Easy And Fast Services{" "}
          </h2>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="p-3 bg-white rounded">
            <div className="flex justify-between items-center mb-2">
              <h4>24 Hours Doctor Support</h4>
              <img src={feature1} alt="" />
            </div>
            <div>
              <p className="text-[#575757]">
                simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's
              </p>
            </div>
          </div>
          <div className="p-3 bg-white rounded">
            <div className="flex justify-between items-center mb-2">
              <h4>24 Hours Doctor Support</h4>
              <img src={feature2} alt="" />
            </div>
            <div>
              <p className="text-[#575757]">
                simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's
              </p>
            </div>
          </div>
          <div className="p-3 bg-white rounded">
            <div className="flex justify-between items-center mb-2">
              <h4>24 Hours Doctor Support</h4>
              <img src={feature3} alt="" />
            </div>
            <div>
              <p className="text-[#575757]">
                simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's
              </p>
            </div>
          </div>
          <div className="p-3 bg-white rounded">
            <div className="flex justify-between items-center mb-2">
              <h4>24 Hours Doctor Support</h4>
              <img src={feature4} alt="" />
            </div>
            <div>
              <p className="text-[#575757]">
                simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feature;
