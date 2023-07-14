import React from "react";
import Header from "./Header";
import Menu from "./menu";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <Header />
      <div className="container max-w-full w-full mt-[22px] flex items-start pb-5">
        <Menu />
        <div className="w-auto flex-auto">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
