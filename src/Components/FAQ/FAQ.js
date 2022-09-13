import React from "react";
import FaqImg from "../../assets/faq-doctor.png";
import FaqIcon from "../../assets/Faq-icon.png";

const FAQ = () => {
  return (
    <div className="py-7 flex">
      <div className="experience-left w-7/12">
        <div>
          <h5 className=" text-xs text-[#642DFF]">FAQ Questions </h5>
          <h2 className=" text-3xl font-bold my-3">Get Your General Answer </h2>
        </div>
        <div className="w-[500px] md:w-96">
          <div tabIndex={0} className="collapse collapse-plus ">
            <div className="collapse-title text-xl font-medium">
              Get Your General Answer
            </div>
            <div className="collapse-content">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi in{" "}
              </p>
            </div>
          </div>
        </div>
        <div className="w-[500px] md:w-96">
          <div tabIndex={0} className="collapse collapse-plus ">
            <div className="collapse-title text-xl font-medium">
              Will I always see my own doctor?{" "}
            </div>
            <div className="collapse-content">
              <p>sint voluptatem. Doloribus, explicabo delectus a, aliquid </p>
            </div>
          </div>
        </div>
        <div className="w-[500px] md:w-96">
          <div tabIndex={0} className="collapse collapse-plus ">
            <div className="collapse-title text-xl font-medium">
              What is one Medical’s care?{" "}
            </div>
            <div className="collapse-content">
              <p>
                blanditiis eaque sit molestiae quod ad at voluptates fugit,{" "}
              </p>
            </div>
          </div>
        </div>
        <div className=" lg:w-[500px] md:w-96">
          <div tabIndex={0} className="collapse collapse-plus ">
            <div className="collapse-title text-xl font-medium">
              What is evidence based medicine?{" "}
            </div>
            <div className="collapse-content">
              <p>perferendis fugiat ea consectetur. </p>
            </div>
          </div>
        </div>
        <div className="w-[500px] md:w-96">
          <div tabIndex={0} className="collapse collapse-plus ">
            <div className="collapse-title text-xl font-medium">
              What is an academic medical center?{" "}
            </div>
            <div className="collapse-content">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi in
                sint voluptatem. Doloribus, explicabo delectus a, aliquid
                blanditiis eaque sit molestiae quod ad at voluptates fugit,
                perferendis fugiat ea consectetur.{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="experience-right flex justify-center items-center w-5/12 relative">
        <img src={FaqImg} alt="" />
        <div className="bg-white w-52 h-14 flex justify-center items-center rounded-md absolute left-0 top-[65%] p-3">
          <div className="flex justify-center items-center">
            <img src={FaqIcon} alt="" />
            <p className=" text-xs text-black ml-2">
              Get Solutions From Our Experts
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
