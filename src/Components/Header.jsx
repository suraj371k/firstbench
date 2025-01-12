import React from "react";
import { IoChevronDownOutline } from "react-icons/io5";
import { GiProgression } from "react-icons/gi";
import { TbClockBolt } from "react-icons/tb";
import { WiStars } from "react-icons/wi";
import { FaArrowUp } from "react-icons/fa";
import CompareAccuracyChart from "./graphs/CompareAccuracyChart";
import TimeTakenScale from "./graphs/TimeTakenChart";

function Header() {
  return (
    <div className="p-4">
      <div className="flex flex-wrap gap-8 mb-7 md:flex-col lg:flex-row">
        {/* Card Section */}
        {Array(3)
          .fill(0)
          .map((_, index) => (
            <div
              key={index}
              className="w-full md:w-[48%] lg:w-[426px] p-3 rounded-xl border-2 border-[#6f6e6] h-[310px]"
            >
              <div className="flex gap-x-2">
                <div className="border-2 px-1 border-[#9a9999] rounded-sm">
                  <IoChevronDownOutline className="mt-1" />
                </div>
                <div>
                  <p className="text-[#9a9999] font-semibold">
                    Compare Accuracy
                  </p>
                </div>
              </div>
            </div>
          ))}
      </div>

      <div className="flex flex-wrap gap-5">
        {/* Improvements Section */}
        <div className="w-full md:w-[48%] lg:w-[320px] text-sm p-3 rounded-xl h-auto border-2 border-[#6f6e6]">
          <div className="flex gap-3 mb-4">
            <GiProgression className="mt-2 text-[#9a9999]" />
            <p className="text-xl text-[#9a9999] font-semibold">Improvements</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-3">Subject Understanding</h3>
          </div>
          <div className="text-white">
            <div className="flex flex-wrap gap-2 mb-2">
              <p className="bg-[#2c99a1e4] p-2 rounded-full">Geography</p>
              <p className="bg-yellow-400 p-2 rounded-full">Politics</p>
              <p className="bg-[#2c99a1e4] p-2 rounded-full">Current Affairs</p>
            </div>
            <div className="flex flex-wrap gap-2">
              <p className="bg-red-600 p-2 rounded-full">General Studies</p>
              <p className="bg-[#2c99a1e4] p-2 rounded-full">Mathematics</p>
              <p className="bg-slate-400 p-2 rounded-full">Social Studies</p>
              <p className="bg-red-600 p-2 rounded-full">English Literature</p>
            </div>
          </div>
        </div>

        {/* Response Time Section */}
        <div className="w-full md:w-[48%] lg:w-[320px] rounded-xl h-auto border-2 border-[#6f6e6] p-3">
          <div className="flex gap-3 mb-4">
            <TbClockBolt className="text-xl mt-1 text-[#9a9999]" />
            <h3 className="text-xl text-[#9a9999] font-semibold">Response Time</h3>
          </div>
          <div>
            <p className="bg-violet-800 text-white inline-block p-1 font-semibold text-sm">
              Std Time - 2min
            </p>
          </div>
          <div className="flex border-4 p-2 border-dotted border-[#6f6e6] gap-3 mt-3 bg-violet-50">
            <p className="text-3xl font-semibold text-[#2c99a1e4]">60</p>
            <span className="text-[#9a9999] text-xl font-semibold mt-2">
              % Ans took
            </span>
            <FaArrowUp className="text-red-600 text-2xl mt-2" />
            <p className="text-violet-600 font-semibold text-xl mt-2">2min</p>
          </div>
          <div className="w-full h-1 bg-slate-400 mt-5"></div>
          <div className="mt-5 text-center">
            <p className="text-2xl font-semibold">You are <span className="text-red-600">slow</span>!</p>
          </div>
        </div>
        <div className="lg:w-[320px] rounded-xl h-auto  border-2 border-[#6f6e6] p-3">
          <div className="flex gap-3">
            <GiProgression className="mt-2 text-[#9a9999]"/>
            <h3 className="text-xl text-[#9a9999] font-semibold">Approach Data</h3>
          </div>
          <div className="flex text-xl border-2 border-violet-200 p-2 mt-3">
            <p className="bg-violet-100 inline-block p-1">25% </p>
            <p className="p-1">Based on </p>
            <p className="text-violet-500 font-semibold p-1">Facts</p>
          </div>
          <div className="flex text-xl border-2 border-violet-200 p-2 mt-3">
            <p className="bg-violet-100 inline-block p-1">32% </p>
            <p className="p-1">Based on </p>
            <p className="text-violet-500 font-semibold p-1">Analysis</p>
          </div>
          <div className="flex text-xl border-2 border-violet-200 p-2 mt-3">
            <p className="bg-violet-100 inline-block p-1">19% </p>
            <p className="p-1">Based on </p>
            <p className="text-violet-500 font-semibold p-1">Elimination</p>
          </div>
          <div className="flex text-xl border-2 border-violet-200 p-2 mt-3">
            <p className="bg-violet-100 inline-block p-1">24% </p>
            <p className="p-1">Based on </p>
            <p className="text-violet-500 font-semibold p-1">Guess</p>
          </div>
        </div>
        <div className="lg:w-[320px] rounded-xl h-auto  border-2 border-[#6f6e6] p-3 gap-3">
          <div className="flex gap-3">
        <WiStars className="mt-2 text-[#9a9999] text-2xl font-bold"/>
        <h3 className="text-xl text-[#9a9999] font-semibold">Suggestions</h3>
        </div>
        <div className="flex gap-8 mt-7">
          <p className="bg-violet-700 inline-block px-3 font-semibold text-sm text-white">Q. 1-12</p>
          <p className="bg-violet-700 inline-block px-3 font-semibold text-sm text-white">Q. 12-32</p>
          <p className="bg-violet-700 inline-block px-3 font-semibold text-sm text-white">Q. 32-40</p>
        </div>
        <div className="flex gap-8 mt-6">
          <div className="p-2 border-2 border-dashed border-[#b7b6b6] rounded-lg bg-violet-50">
            <p className="text-2xl font-semibold inline-block">40</p>
            <p className="text-lg font-semibold inline-block mt-1">sec</p>
          </div>
          <div className="p-2 border-2 border-dashed border-[#b7b6b6] rounded-lg bg-violet-50">
            <p className="text-2xl font-semibold inline-block">1.5</p>
            <p className="text-lg font-semibold inline-block mt-1">min</p>
          </div>
          <div className="p-2 border-2 border-dashed border-[#b7b6b6] rounded-lg bg-violet-50">
            <p className="text-2xl font-semibold inline-block">3</p>
            <p className="text-lg font-semibold inline-block mt-1">min</p>
          </div>
        </div>
        <div className="mt-8 flex justify-center gap-10">
          <p className="font-bold text-[#2c99a1e4] text-xl">Easy</p>
          <p className="font-bold text-xl text-yellow-400">Medium</p>
          <p className="font-bold text-xl text-red-700">Hard</p>
        </div>
        </div>
      </div>
      <div className="flex gap-3 mt-5 rounded-lg w-full">
        <div className="mt-5 w-[640px]">
          <CompareAccuracyChart />
        </div>
        <div className="w-[640px] mt-5 border-2 rounded-xl  border-[#e3e0e0]">
           <TimeTakenScale />
        </div>
      </div>
    </div>
  );
}

export default Header;
