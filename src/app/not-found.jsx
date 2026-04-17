import Link from "next/link";
import React from "react";

const NotFoundPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-white py-20">
      <div className="flex flex-col items-center">
        <div className="text-indigo-500 font-bold text-9xl">404</div>

        <div className="font-bold text-3xl xl:text-7xl lg:text-6xl md:text-5xl mt-10 text-gray-800">
          Nothing Founds!
        </div>

        <div className="text-gray-400 font-medium text-sm md:text-xl lg:text-2xl mt-4">
          Sorry! The page you Looking for Does not Exsist!
        </div>

        <Link
          href={"/"}
          className="mt-8 px-6 py-3 rounded-md bg-indigo-600 text-white font-semibold hover:bg-indigo-700 transition-all duration-300 shadow-lg hover:shadow-indigo-200"
        >
          Back To Home page
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
