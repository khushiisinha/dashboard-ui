import React, { useState } from "react";
import Navbar from "./Navbar";
import FirstPage from "./FirstPage";
import SecondPage from "./SecondPage";
import ThirdPage from "./ThirdPage";

function Dashboard() {
  const [open, setOpen] = useState(false);

  return (
    <div className="md:flex md:flex-row flex-col h-screen gap-3">
      {/* navbar */}
      <Navbar />

      {/* 1st page */}
      <div className="h-screen md:min-h-screen md:basis-1/5">
        <FirstPage />
      </div>

      {/* 2nd page */}
      <div
        className={`relative h-screen md:min-h-screen md:basis-3/5 ${
          open ? "hidden" : "block"
        } md:block`}
      >
        <SecondPage open={open} setOpen={setOpen} />
      </div>

      {/* 3rd page */}
      <div
        className={`h-screen md:min-h-screen md:basis-1/5 ${
          open ? "block" : "hidden"
        } md:block absolute top-0 bottom-0 left-0 right-0 bg-background-grey md:bg-none md:static z-30 md:z-0`}
      >
        <ThirdPage open={open} setOpen={setOpen} />
      </div>
    </div>
  );
}

export default Dashboard;
