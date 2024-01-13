import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Label,
} from "recharts";

const data = [
  {
    name: "20",
    TotalInterest: 1500,
    Employer: 2000,
    Employee: 1200,
  },
  {
    name: "Page B",
    TotalInterest: 3000,
    Employer: 1398,
    Employee: 2210,
  },
  {
    name: "25",
    TotalInterest: 2000,
    Employer: 2400,
    Employee: 2400,
  },
  {
    name: "Page I",
    TotalInterest: 2800,
    Employer: 3200,
    Employee: 1800,
  },
  {
    name: "30",
    TotalInterest: 2390,
    Employer: 3800,
    Employee: 2500,
  },
  {
    name: "Page D",
    TotalInterest: 2780,
    Employer: 3908,
    Employee: 2000,
  },
  {
    name: "35",
    TotalInterest: 1890,
    Employer: 4800,
    Employee: 2181,
  },
  {
    name: "Page G",
    TotalInterest: 3490,
    Employer: 4300,
    Employee: 2100,
  },
  {
    name: "40",
    TotalInterest: 4200,
    Employer: 5000,
    Employee: 3000,
  },
  {
    name: "Page C",
    TotalInterest: 2000,
    Employer: 9800,
    Employee: 2290,
  },
  {
    name: "45",
    TotalInterest: 5000,
    Employer: 6000,
    Employee: 4000,
  },
  {
    name: "Page L",
    TotalInterest: 6000,
    Employer: 7000,
    Employee: 5000,
  },
  {
    name: "50",
    TotalInterest: 7000,
    Employer: 8000,
    Employee: 6000,
  },
  {
    name: "Page N",
    TotalInterest: 8000,
    Employer: 9000,
    Employee: 7000,
  },
  {
    name: "55",
    TotalInterest: 9000,
    Employer: 10000,
    Employee: 8000,
  },
  {
    name: "Page P",
    TotalInterest: 10000,
    Employer: 11000,
    Employee: 9000,
  },
  {
    name: "60",
    TotalInterest: 11000,
    Employer: 12000,
    Employee: 10000,
  },
  {
    name: "Page R",
    TotalInterest: 12000,
    Employer: 13000,
    Employee: 11000,
  },
  {
    name: "65",
    TotalInterest: 13000,
    Employer: 14000,
    Employee: 12000,
  },
];

const LegendValue = ["K 73,500", "K 52,500", "K 244,313"];

const MixBarChart = () => {
  return (
    <ResponsiveContainer className="w-full md:w-4/5" height={270}>
      <BarChart data={data}>
        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#d6d6d6" />
        <XAxis dataKey="name" axisLine={false} tickLine={false} />
        <YAxis axisLine={false} tickLine={false} />

        <Legend
          verticalAlign="top"
          height={70}
          align="center"
          content={(props) => {
            const { payload } = props;
            return (
              <div className="flex justify-between items-center md:mb-0 mb-4">
                {payload.map((entry, index) => (
                  <div key={`item-${index}`} className="mr-4 md:mr-8">
                    <div
                      style={{ display: "flex" }}
                      className="flex flex-col md:flex-row md:items-center items-start"
                    >
                      <svg width={15} height={15} className="ml-1 md:ml-0">
                        <rect width={15} height={15} rx={5} ry={5} fill={entry.color} />
                      </svg>
                      <span
                        style={{ marginLeft: "5px" }}
                        className="flex flex-col md:flex-row md:gap-3 items-start"
                      >
                        <span>{entry.value}</span>{" "}
                        <span className="font-bold ">{LegendValue[index]}</span>
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            );
          }}
        />

        <Bar dataKey="Employer" stackId="a" fill="#0800A3" barSize={15} />
        <Bar dataKey="Employee" stackId="a" fill="#4935FF" barSize={15} />
        <Bar dataKey="TotalInterest" stackId="a" fill="#85AFFF" barSize={15} />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default MixBarChart;