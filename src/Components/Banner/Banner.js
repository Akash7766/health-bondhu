import React, { useEffect, useState } from "react";
import "./Banner.css";
import bannerImage from "../../assets/banner-man.png";

const Banner = () => {
  const [stat, setStat] = useState([]);
  useEffect(() => {
    fetch("stat.json")
      .then((res) => res.json())
      .then((data) => setStat(data));
  }, []);
  console.log(stat);
  return (
    <div className="grid grid-cols-2 py-14">
      <div className="banner-left">
        <div className="text">
          <h1 className="text-[65px] text-bold leading-[72px] mb-4">
            Your <span className="text-[#2D89FF]">Health</span> Is Our <br />{" "}
            Top <span className="text-[#642DFF]">Priority</span>
          </h1>
          <p className=" mb-8 text-[#575757]">
            There are many variations of passages of lpsum <br /> available, but
            the majority hae suffered.
          </p>
          <button className="btn bg-[#2D89FF] border-none capitalize">
            Meet Our Specialist
          </button>
        </div>
        <div className="stat flex justify-between mt-14">
          {stat.map((item) => (
            <>
              <div className="text-center">
                <h3 className="text-[#642DFF] text-2xl">{item.number}</h3>
                <p>{item.title}</p>
              </div>
            </>
          ))}
        </div>
      </div>
      <div className="banner-right relative">
        <div className="banner-image">
          <img className=" mx-auto" src={bannerImage} alt="" />
        </div>
        <div className="bg-[#642DFF] w-40 h-11 flex justify-center items-center rounded absolute left-0 top-[65%]">
          <p className=" text-xs text-white">
            <i class="fa-regular fa-circle-check"></i> Regular Checkup
          </p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
