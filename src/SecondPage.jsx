import React from 'react'
import MixBarChart from './MixBarChart'
import Example from './MixBarChart'
import RadialBarChart from './RadialBarChart'

function SecondPage(props) {
  return (
    <div className='relative flex flex-col md:px-16 md:py-7 w-full gap-8 px-5 py-4 md:gap-4 h-screen md:min-h-screen'>
           <div className='flex flex-col'>
                <div className='font-bold text-lg text-blue-e-700'>Retirement Income</div>
                <div className='text-2xl font-medium'>Starting Year 2056</div>
            </div> 
            <div className='flex md:flex-row flex-col w-full md:justify-between gap-8 md:gap-8  '>
              <div className='flex flex-col  border-b-2 md:pr-8 md:p-1 border-blue-e-500 '>
                   <span className='md:text-2xl font-bold text-xl'>$300,000</span>
                   <span>My Goal</span>
              </div>
              <div className='flex flex-row gap-3 justify-between md:flex-none  md:w-4/5 md:justify-evenly    '>
              <div className='flex flex-col  border-b-2 md:pr-8 md:p-1 border-blue-e-500'>
                   <span className='md:text-2xl font-bold text-xl'>59%</span>
                   <span>Goal Achieved</span>
              </div>
              <div className='flex flex-col  border-b-2 md:pr-8 md:p-1  border-blue-e-500 '>
                   <span className='md:text-2xl font-bold text-xl'>$300</span>
                   <span>Est. Monthly Income</span>
              </div>
              </div>

              
            </div>
            <div className=' flex flex-col gap-5 mt-4 md:mt-2  md:gap-2'>
               <div className='text-2xl md:text-xl font-bold'>Contributions Overtime</div>
               <div className=''> <MixBarChart/></div>
              
              </div>
              <button className='md:hidden block bg-blue-e-700 p-1 text-white absolute top-8 right-8' onClick={()=>{props.setOpen(true)}}> View</button>
              <div className='hidden  md:block'>
               <div className=' flex flex-col'><span className='font-semibold text-lg'>How Do I compare to my peers</span> <span>These numbers represent current goal acievement</span></div>
                <div className='flex flex-col md:flex-row mt-4 gap-10'>
                    <div className='flex flex-col gap-4'>
                         <div className='flex text-xs gap-2 '>
                              <label htmlFor="" className='font-bold'>Age :</label>
                              <select name="" id="" className='border-2 p-0.5'>
                                   <option value="">Under 30</option>
                                   <option value="">Under 20</option>
                              </select>
                         </div>
                         <div className='flex text-xs gap-2 '>
                              <label htmlFor="" className='font-bold'>Salary:</label>
                              <select name="" id="" className='border-2 p-0.5 '>
                                   <option value="">k 20 - k 30</option>
                                   <option value="">k 30 - k 40</option>
                              </select>
                         </div>
                         <div className='flex text-xs gap-2 '>
                              <label htmlFor="" className='font-bold'>Gender:</label>
                              <select name="" id="" className='border-2 p-0.5'>
                                   <option value="">Male</option>
                                   <option value="">Female</option>
                                   <option value="">Others</option>
                              </select>
                         </div>
                    </div>
                    <div className='flex justify-evenly items-center   md:ml-10'>
                         <RadialBarChart value="75" title="Average"/>
                         <RadialBarChart value="95" title="Top"/>
                         <RadialBarChart value="59" title="Me"/>
                    </div>
                </div>
              </div>
    </div>
  )
}

export default SecondPage