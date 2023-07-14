import React from "react";
import Logo from "~/icons/Logo";
import Search from "~/icons/Search";
import Navigation from "./navigation";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="container max-w-full bg-[#272E71] h-[55px] flex items-center">
      <div className="min-w-[280px] mr-[30px]">
        <Link to="/">
          <Logo />
        </Link>
      </div>
      <div className="w-full xl:flex max-xl:hidden items-center justify-between">
        <div className="bg-[#FFFFFF] w-[500px] pl-[9px] pr-[14px] flex h-[27px] items-center rounded-[4px] justify-between">
          <input
            className="h-full w-full pr-2 text-gray-700 placeholder-gray-700 w-400 text-xs"
            placeholder="Enter interests, keyword, company name, etc."
          />
          <Search />
        </div>
        <Navigation />
      </div>
    </div>
  );
}
