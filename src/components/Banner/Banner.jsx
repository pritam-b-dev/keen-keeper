import React from "react";

const Banner = () => {
  return (
    <div className="container mx-auto flex justify-center items-center flex-col space-y-4">
      <h2>Friends to keep close in your life</h2>
      <p>
        Your personal shelf of meaningful connections. Browse, tend, and nurture
        the relationships that matter most.
      </p>

      <button className="bg-[#244D3F] font-semibold text-white p-2 rounded-lg">
        + Add Friend
      </button>
      <div className="grid lg:grid-cols-4 gap-4 mt-5 mb-10">
        <div className="flex flex-col shadow-md justify-center items-center p-6">
          <h1>10</h1>
          <p>Totak friend</p>
        </div>
        <div className="flex flex-col shadow-md justify-center items-center p-6">
          <h1>3</h1>
          <p>On Track</p>
        </div>
        <div className="flex flex-col shadow-md justify-center items-center p-6">
          <h1>6</h1>
          <p>Need Attention</p>
        </div>
        <div className="flex flex-col shadow-md justify-center items-center p-6">
          <h1>12</h1>
          <p>Interactions this Month</p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
