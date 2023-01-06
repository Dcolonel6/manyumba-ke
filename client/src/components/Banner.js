import React from "react";

import BannerImage from "../assets/img/house-banner.png";

import Search from "../components/Search";

const Banner = () => {
  return (
    <section className="h-full max-h-[750px] mb-2 xl:mb-24">
      <div className="flex flex-col lg:flex-row">
        <div
          className="lg: ml-8 xl:ml-[135px] flex flex-col items-center lg:items-start text-center lg:text-left justify-center
        flex-1 px-4 lg:px-0"
        >
          <h1 className="text-4xl lg:text-[58px] font-semibold leading-none mb-6">
            <span className="text-violet-700">Rent </span>Your Dream House With
            Us.
          </h1>
          <p className="max-w-[480px] mb-8">
            Powerful, self-serve product and growth analytics to help you
            convert, engage and retain more.
          </p>
        </div>
        {/* image */}
        <div className="hidden flex-1 lg:flex justify-end items-end">
          <img className="rounded-br-[90px]" src={BannerImage} alt="" />
        </div>
      </div>
      <Search />
    </section>
  );
};

export default Banner;
