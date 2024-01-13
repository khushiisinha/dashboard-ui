import React, { useState } from "react";
import RadialBarChart from "./RadialBarChart";
import cross from "../src/assets/cross.png";
function ThirdPage(props) {
  const [employeeContribution, setEmployeeContribution] = useState(12);
  const [retirementAge, setRetirementAge] = useState(65);

  return (
    <div
      className={`relative bg-background-grey mt-4 ml-3 mr-3  md:p-5 md:mt-6 md:mr-4 md:m-0 flex flex-col md:gap-8 gap-4 `}
    >
      <button
        className="absolute top-0 right-4 md:hidden"
        onClick={() => {
          props.setOpen(false);
        }}
      >
        <img src={cross} className="w-4 h-4" alt="Close" />
      </button>
      <div className="md:hidden  block  p-2">
        <div className=" flex flex-col w-full  md:gap-0">
          <span className="font-semibold text-base md:text-lg ">
            How Do I compare to my peers
          </span>
          <span className="text-xs md:text-sm w-full">
            These numbers represent current goal acievement
          </span>
        </div>
        <div className="flex flex-col md:flex-row md:mt-4 md:gap-10 gap-5 mt-3">
          <div className="flex flex-col md:gap-4 gap-1 mt-2 md:mt-0">
            <div className="flex text-xs gap-2 ">
              <label htmlFor="" className="font-bold">
                Age :
              </label>
              <select name="" id="" className="border-2 p-0.5">
                <option value="">Under 30</option>
                <option value="">Under 20</option>
              </select>
            </div>
            <div className="flex text-xs gap-1  md:gap-2 ">
              <label htmlFor="" className="font-bold">
                Salary:
              </label>
              <select name="" id="" className="border-2 p-0.5 ">
                <option value="">k 20 - k 30</option>
                <option value="">k 30 - k 40</option>
              </select>
            </div>
            <div className="flex text-xs gap-1 md:gap-2 ">
              <label htmlFor="" className="font-bold">
                Gender:
              </label>
              <select name="" id="" className="border-2 p-0.5">
                <option value="">Male</option>
                <option value="">Female</option>
                <option value="">Others</option>
              </select>
            </div>
          </div>
          <div className="flex justify-evenly items-center   md:ml-10">
            <RadialBarChart value="75" title="Average" />
            <RadialBarChart value="95" title="Top" />
            <RadialBarChart value="59" title="Me" />
          </div>
        </div>
      </div>
      <div className="text-xl font-bold ">Retirement Strategy</div>
      <div className="flex flex-col md:gap-7  gap-5 ">
        <div className="flex flex-col gap-2">
          <label className="text-base font-bold">Employee Contribution</label>
          <div className="flex gap-2 w-full">
            <input
              type="range"
              value={employeeContribution}
              min="1"
              max="100"
              onChange={(e) => {
                setEmployeeContribution(e.target.value);
              }}
              className="w-full md:w-auto"
            />
            <output className="flex">
              <span>{employeeContribution} </span>
              <span>%</span>
            </output>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-base font-bold">Retirement Age</label>
          <div className="flex gap-2 w-full">
            {" "}
            <input
              type="range"
              value={retirementAge}
              min="1"
              max="100"
              onChange={(e) => {
                setRetirementAge(e.target.value);
              }}
              className="w-full md:w-auto"
            />
            <output>{retirementAge} </output>
          </div>
        </div>
        <div className="border-b-2 "></div>
      </div>
      <div className="flex flex-col gap-5">
        <div className="flex justify-between w-full font-bold">
          <span>Employeer Contribution</span>
          <span>8.4%</span>
        </div>
        <div className="flex justify-between w-full font-bold">
          <span>Interest Rate</span>
          <span>5%</span>
        </div>
      </div>
      <button className="w-full bg-blue-e-700 text-white p-3 md:ml-3 md:mr-5 md:rounded-lg font-bold rounded-xl text-center ">
        Update
      </button>
      <div className=" text-blue-e-700 font-bold hidden md:block text-center">
        View Help Docs ..
      </div>
      <div className="border-l-2  hidden md:block border-blue-e-700">
        <div className="flex flex-col ml-5 text-sm gap-2">
          <div className="text-lg font-normal">Are you considering a</div>
          <div className="text-xl font-bold"> Housing Advance?</div>
          <div>Limited time reduced Interest.</div>
          <div className="text-blue-e-700 font-bold">Learn More</div>
        </div>
      </div>
    </div>
  );
}

export default ThirdPage;
