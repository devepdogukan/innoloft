import React from "react";
import { Link } from "react-router-dom";
import ChevronRight from "~/icons/ChevronRight";
import Home from "~/icons/Home";

export default function Breadcrump({ lastPath }) {
  return (
    <div className="flex items-center overflow-hidden">
      <Link to="/" className="mr-2.5">
        <Home />
      </Link>
      <ChevronRight />
      <p className="ml-[5px] font-normal text-gray-500 mr-2.5">Offers</p>
      <ChevronRight />
      <p className="ml-[5px] text-gray-500 font-semibold text-ellipsis overflow-hidden line-clamp-1">
        {lastPath}
      </p>
    </div>
  );
}
