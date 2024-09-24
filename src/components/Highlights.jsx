import React from "react";

const Highlights = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 ml-4 md:ml-5 lg:ml-8">
      <div className="bg-orange-200 text-black flex w-[90%] rounded-2xl items-center justify-center gap-3 mt-2 ">
        <span className="bg-orange-400 rounded-full w-10 text-center text-xl p-2 m-4 lg:-ml-[20%]">
          1.
        </span>
        <h2 className="text-xl ">Signature Dishes with Quick Service</h2>
      </div>

      <div className="bg-orange-200 text-black flex w-[90%] rounded-2xl items-center justify-center gap-3 mt-2">
        <span className="bg-orange-400 rounded-full w-10 text-center text-xl p-2 m-4 -ml-[2%] lg:-ml-[35%]">
          2.
        </span>
        <h2 className="text-xl ">Affordable Meal Combos</h2>
      </div>

      <div className="bg-orange-200 text-black flex w-[90%] rounded-2xl items-center justify-center gap-3 mt-2">
        <span className="bg-orange-400 rounded-full w-10 text-center text-xl p-2 m-4 ml-4 lg:-ml-[29%]">
          3.
        </span>
        <h2 className="text-xl ">Convenience and Accessibility</h2>
      </div>
    </div>
  );
};

export default Highlights;
