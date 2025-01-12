import React from "react";
import { IoBagCheckOutline } from "react-icons/io5";
import { FaRegFile } from "react-icons/fa";
import profile from "../assets/profile.avif";
import sidebar from "../assets/sidebar1 (1).webp";
import { IoInformationCircleOutline } from "react-icons/io5";

function Sidebar() {
  return (
    <div className="bg-violet-50 flex flex-col justify-center items-center h-auto min-w-[360px] p-4 sm:p-6 lg:p-8">
      <div>
        <img className="w-[70px] sm:w-[80px] lg:w-[90px]" src={sidebar} alt="Sidebar Image" />
      </div>
      <div className="mb-6 sm:mb-8 lg:mb-10 text-center">
        <h1 className="text-violet-700 text-2xl sm:text-3xl font-semibold">Your Result!</h1>
        <p className="text-[#6f6e6e] text-sm sm:text-base">
          All your insights & details in one place
        </p>
      </div>
      <div className="bg-white border-2 w-full max-w-[315px] border-[#cac8c8] p-4 rounded-xl">
        <div className="flex mb-6 sm:mb-8 lg:mb-10 gap-3 sm:gap-5 justify-center bg-violet-50 rounded-sm p-3 items-center">
          <div className="bg-violet-200 rounded-sm p-2">
            <IoBagCheckOutline className="text-base sm:text-lg lg:text-xl" />
          </div>
          <div>
            <p className="text-white bg-violet-700 px-3 sm:px-4 rounded-full text-xs sm:text-sm mb-2">
              PASSED
            </p>
            <div className="flex gap-x-1 sm:gap-x-2">
              <p className="text-xl sm:text-2xl font-semibold">136</p>
              <span className="text-[#6f6e6e] font-semibold mt-1 sm:mt-2">/240</span>
            </div>
          </div>
          <div className="w-[1px] h-[20px] sm:h-[30px] bg-[#6f6e6e]"></div>
          <div>
            <p className="bg-[#2c99a1e4] text-white inline-block px-2 py-1 font-bold text-xs sm:text-sm mb-2">
              76%
            </p>
            <p className="text-[#2c99a1e4] font-semibold text-xs sm:text-base">ACCURACY</p>
          </div>
        </div>
        <div className="bg-violet-50 p-3 sm:p-4 rounded-lg">
          <div className="flex gap-x-3 sm:gap-x-5 items-center">
            <img className="w-[40px] sm:w-[50px]" src={profile} alt="Profile Image" />
            <div>
              <p className="text-violet-700 font-semibold text-sm sm:text-base">Top Score</p>
              <p className="text-xl sm:text-2xl font-semibold">
                230
                <span className="text-xs sm:text-sm font-semibold text-[#6f6e6e]">/240</span>
              </p>
            </div>
          </div>
          <div className="flex justify-between mt-2 sm:mt-4">
            <p className="text-xs sm:text-sm text-[#6f6e6e]">
              By <span className="font-semibold text-black">Parth Akotkar</span>
            </p>
            <p className="font-semibold text-white rounded-full px-2 sm:px-3 text-xs sm:text-sm bg-[#2c99a1e4]">
              92% ACCURACY
            </p>
          </div>
        </div>
        <div className="mt-4 sm:mt-6">
          <p className="font-semibold text-base sm:text-lg">Improve your Marks</p>
          <p className="text-[#6f6e6e] text-sm sm:text-base mb-3 sm:mb-4 font-semibold">
            Improve your score by practicing more
          </p>
          <button className="bg-violet-700 text-white w-full py-2 rounded-xl text-sm sm:text-base">
            Practice more
          </button>
        </div>
      </div>
      <div className="bg-white border-2 mt-6 sm:mt-8 lg:mt-10 w-full max-w-[315px] border-[#cac8c8] p-4 rounded-xl">
        <div>
          <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Revisit Paper</h3>
        </div>
        <div className="text-[#6f6e6e] text-sm sm:text-base font-semibold mb-6 sm:mb-8">
          <p>Challenge your friends by simply sharing a link to this test</p>
        </div>
        <div className="flex w-full bg-violet-700 py-2 rounded-xl justify-center text-white gap-x-2 mb-3 sm:mb-4">
          <FaRegFile className="text-sm sm:text-base mt-1" />
          <button className="text-sm sm:text-base">Visit</button>
        </div>
        <div className="flex gap-2">
          <IoInformationCircleOutline className="text-xs sm:text-sm" />
          <p className="text-[#6f6e6e] text-[9px] sm:text-[10px]">
            Instructions for how to upload your handwritten material in given
          </p>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
