import React from "react";
import experienceImg from "../../assets/experience-doctor.png";

const Experience = () => {
  return (
    <div className="py-7 flex">
      <div className="experience-left w-7/12">
        <h5 className=" text-xs text-[#642DFF]">16+ Years Experiences </h5>
        <h2 className=" text-3xl font-bold my-3">
          We Are Always ensure Best Medical Treatment For Your Health
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
      <div className="experience-right flex justify-center items-center w-5/12">
        <img src={experienceImg} alt="" />
      </div>
    </div>
  );
};

export default Experience;
