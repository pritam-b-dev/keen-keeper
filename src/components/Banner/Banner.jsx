import React from "react";

const Banner = () => {
  return (
    <div className="container mx-auto flex justify-center items-center flex-col space-y-4">
      <h2 className="font-bold text-5xl p-2">
        Friends to keep close in your life
      </h2>
      <p className="text-gray-500 p-2">
        Your personal shelf of meaningful connections. Browse, tend, and nurture
        the relationships that matter most.
      </p>

      <button className="bg-[#244D3F] font-semibold text-white p-2 rounded-lg">
        + Add Friend
      </button>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mt-5 mb-10">
        <div className="flex flex-col shadow-md justify-center items-center p-6 gap-2 bg-white">
          <h1 className="font-semibold text-4xl text-[#244D3F]">10</h1>
          <p className="text-gray-400">Totak friend</p>
        </div>
        <div className="flex flex-col shadow-md justify-center items-center p-6 gap-2 bg-white">
          <h1 className="font-semibold text-4xl text-[#244D3F]">3</h1>
          <p className="text-gray-400">On Track</p>
        </div>
        <div className="flex flex-col shadow-md justify-center items-center p-6 gap-2 bg-white">
          <h1 className="font-semibold text-4xl text-[#244D3F]">6</h1>
          <p className="text-gray-400">Need Attention</p>
        </div>
        <div className="flex flex-col shadow-md justify-center items-center p-6 gap-2 bg-white">
          <h1 className="font-semibold text-4xl text-[#244D3F]">12</h1>
          <p className="text-gray-400">Interactions this Month</p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
