import React from "react";
import profile from "../src/assets/undraw-1.svg";
function FirstPage() {
  return (
    <div className="w-full h-full flex flex-col md:p-4 md:px-8 p-2 md:bg-background-grey">
      <div className="flex items-center w-full mt-6 ml-3">
        <img src={profile} className="w-16 h-16" />

        <div className=" flex flex-col  p-2 ml-3">
          <span className="text-xl md:text-2xl font-bold">Hii Mike,</span>
          <span className="text-sm md:text-base">welcome back.</span>
        </div>
      </div>

      <div className="flex flex-col mt-8 gap-4 md:gap-3 p-4 md:p-2 w-full ">
        <div className="text-lg font-bold font-sans">Today</div>
        <div className="flex flex-col gap-5">
          <div className="flex flex-col ">
            <span className="text-3xl font-bold">$19,892</span>
            <span className="text-xs">Account Balance</span>
          </div>

          <div className="flex gap-10 md:flex-col w-full md:gap-4 ">
            <div className="flex flex-col justify-center ">
              <span className="tsxt-xl font-bold ">$4,000</span>
              <span className="text-xs  md:text-left">
                Year-to-Date Contributions
              </span>
            </div>

            <div className="flex flex-col">
              <span className="text-lg font-bold">$1,892</span>
              <span className="text-xs md:text-left">Total Interest</span>
            </div>
          </div>
        </div>

        <div className="flex justify-center w-full bg-blue-e-700 rounded-lg md:bg-background-grey md:justify-start">
          <select className="bg-blue-e-700 p-3 rounded-md text-white outline-none">
            <option selected disabled>
              I want to
            </option>
            <option>Others</option>
          </select>
        </div>
      </div>

      <div className="flex flex-col gap-2 text-sm mt-10 md:mt-5 ml-3 md:ml-0 md:mb-8  ">
        <div className="p-2 text-lg font-bold">Recent Transactions</div>
        <div className="flex flex-col gap-2 p-2 w-full">
        <div className="   flex flex-col gap-1 border-b-2 border-grey-e-600 py-1 ">
          <div>2020-08-07</div>
          <div className="text-xs font-bold">Withdrawal Transfer to Bank-XXX11 </div>
          
         
        </div>
        <div className="flex flex-col gap-1 border-b-2  border-grey-e-600  py-1">
          <div>2020-07-21</div>
          <div className="text-xs font-bold">Withdrawal Transfer to Bank-XXX11 </div>
         
        </div>
        <div className="flex flex-col gap-1 border-b-2 border-grey-e-600   py-1">
          <div>2020-07-16</div>
          <div className="text-xs font-bold">Withdrawal Transfer to Bank-XXX11 </div>
          
        </div>
        </div>
      </div>
    </div>
  );
}

export default FirstPage;
