import React from "react";
import { Link } from "react-router-dom";

export default function Header() {

  return (
    <div className="flex items-start max-sm:gap-5 max-xl:gap-2 w-full justify-between max-sm:flex-col">
      <p className="text-gray-700 font-semibold text-base">Offer Title</p>
      <Link to="/product">
        <button className="bg-[#272E71] px-[8px]  min-w-[45px] h-[30px] font-normal text-[#fff] rounded-md">
          View Offer
        </button>
      </Link>
    </div>
  );
}
