import React from "react";
import featureImg from "../../assets/feature-doctor.png";

const Feature = () => {
  return (
    <div className="py-7 flex">
      <div className="experience-right flex justify-center items-center w-5/12">
        <img src={featureImg} alt="" />
      </div>
      <div className="experience-left w-7/12">
        <h5 className=" text-xs text-[#642DFF]">Our Hospital Feature </h5>
        <h2 className=" text-3xl font-bold my-3">
          Make An Appointment Easy And Fast Services{" "}
        </h2>
        <p className="text-sm text-[#575757]">
          simply dummy text of the printing and typesetting industry. Lorem
          Ipsum has been the industry's standard dummy text ever since the
          1500s, when an unknown printer took a galley of type and scrambled it
          is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using 'Content here, content here', making it
          look lik
        </p>
      </div>
    </div>
  );
};

export default Feature;
