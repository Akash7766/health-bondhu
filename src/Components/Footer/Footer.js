import React from "react";
import logo from "../../assets/logo.png";
import fb from "../../assets/fb.png";
import google from "../../assets/google.png";
import youtube from "../../assets/youtube.png";
import insta from "../../assets/insta.png";
import twitter from "../../assets/twitter.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-[#E5EEF5] py-10 ">
      <div className="container mx-auto mb-7 flex flex-col lg:flex-row  gap-14">
        <div className="lg:w-1/3">
          <div>
            <img src={logo} alt="" />
            <p className="mt-3 mb-7">
              simply dummy text of the printing and typesetting industry. Lorem
              Ipsum has bee
            </p>
          </div>
          <div className="flex justify-between">
            <a href="#">
              {" "}
              <div className="border-4 p-2 rounded-full">
                {" "}
                <img src={fb} alt="" />
              </div>
            </a>
            <a href="#">
              {" "}
              <div className="border-4 p-2 rounded-full">
                {" "}
                <img src={insta} alt="" />
              </div>
            </a>
            <a href="#">
              {" "}
              <div className="border-4 p-2 rounded-full">
                {" "}
                <img src={google} alt="" />
              </div>
            </a>
            <a href="#">
              {" "}
              <div className="border-4 p-2 rounded-full">
                {" "}
                <img src={twitter} alt="" />
              </div>
            </a>
            <a href="#">
              {" "}
              <div className="border-4 p-2 rounded-full">
                {" "}
                <img src={youtube} alt="" />
              </div>
            </a>
          </div>
        </div>
        <div className="grid sm:grid-cols-2 lg:w-2/3 gap-10">
          <div>
            <div className="text-[#642DFF] text-md mb-3">
              <h5 className="sm:text-left text-center">Quick Links</h5>
            </div>
            <div className="flex sm:justify-between justify-center">
              <div className="leading-8">
                <div>
                  {" "}
                  <Link to="/">About Us</Link>
                </div>
                <div>
                  {" "}
                  <Link to="/">Our Pricing</Link>
                </div>
                <div>
                  {" "}
                  <Link to="/">Our Gallery</Link>
                </div>
                <div>
                  {" "}
                  <Link to="/">Appointment</Link>
                </div>
                <div>
                  {" "}
                  <Link to="/">Privacy Policy</Link>
                </div>
              </div>
              <div className="leading-8">
                <div>
                  {" "}
                  <Link to="/">Services</Link>
                </div>
                <div>
                  {" "}
                  <Link to="/">Our Doctors</Link>
                </div>
                <div>
                  {" "}
                  <Link to="/">Our Latest News</Link>
                </div>
                <div>
                  {" "}
                  <Link to="/">Careers</Link>
                </div>
                <div>
                  {" "}
                  <Link to="/">Contact Us</Link>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <div>
              <div className="text-[#642DFF] text-md mb-3">
                <h5>Opening Hours</h5>
              </div>
              <div className="flex">
                <div className="mr-10 leading-8 text-[#2D89FF]">
                  <div>
                    <p>Mon- Tue</p>
                  </div>
                  <div>
                    <p>Wed- Thu</p>
                  </div>
                  <div>
                    <p>Fri- Sat</p>
                  </div>
                  <div>
                    <p>Sunday</p>
                  </div>
                  <div>
                    <p>Personal</p>
                  </div>
                </div>
                <div className="leading-8">
                  <div>
                    <p>08:00 AM- 05:00 PM</p>
                  </div>
                  <div>
                    <p>09:00 AM- 06:00 PM</p>
                  </div>
                  <div>
                    <p>10:00 AM- 07:00 PM</p>
                  </div>
                  <div>
                    <p>Emergency Only</p>
                  </div>
                  <div>
                    <p>Mon- 05:00 PM</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto">
        <p className="text-xs text-[#1E1E1E]">
          Copyright @222 Medicom All Rights Reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
