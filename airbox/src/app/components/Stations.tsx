import React from 'react';

const Stations = () => {
  return (
    <div className="relative bg-primary text-white pb-12">
      {/* SVG Shape Divider */}
      <div className="custom-shape-divider-top-1739883404">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
    </svg>
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 text-center relative pt-10 md:pt-20">
        <h2 className="text-2xl md:text-5xl font-bold uppercase">
          Quick and Easy Signup for AirBox API
        </h2>
        <p className="w-full uppercase font-normal mt-4 text-sm md:text-lg text-center mx-auto">
          Airbox API provides seamless integration of real-time environmental data, including humidity, air quality, and temperature measurements from its network of monitoring stations. Effortlessly incorporate this data into your projects for accurate insights, historical trends, and real-time updates.
        </p>

        {/* Get Started Button */}
        <div className="mt-6">
          <button className="cursor-pointer bg-error text-white px-6 py-3 rounded-full text-xl font-semibold transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-[#07CA89] box-shadow">
            Get Started →
          </button>
        </div>

        {/* Running Stations Box */}
        <div className="relative mt-8 bg-gray-900 w-full p-4 rounded-lg inline-flex items-center gap-4 px-3 box-shadow md:px-6">
          <div className="absolute inset-0 flex items-center justify-center h-full w-full bg-[radial-gradient(#ccc9cf_1px,transparent_1px)] [background-size:20px_20px] opacity-50 z-0"></div>
          <div className="flex items-center justify-between w-full">
            <span className="text-sm md:text-xl font-semibold uppercase">
              Current Running Stations: 3
            </span>
            <span className="w-4 h-4 md:w-7 md:h-7 bg-[#07CA89] rounded-full animate-pulse"></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stations;
