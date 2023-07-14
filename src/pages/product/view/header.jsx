import React from "react";
import { Link } from "react-router-dom";
import Breadcrump from "~/components/breadcrump";
import { useSelector } from "react-redux";

export default function Header() {
  const { data } = useSelector((state) => state.product);

  return (
    <div className="flex items-start max-sm:gap-5 max-xl:gap-2 w-full justify-between max-sm:flex-col">
      <Breadcrump
        lastPath={
          data?.name ?? "Intelligent Finite Elements in Structural mechanics"
        }
      />
      <Link to="/product/edit">
        <button className="bg-[#272E71] px-[8px]  min-w-[45px] h-[30px] font-normal text-[#fff] rounded-md">
          Edit
        </button>
      </Link>
    </div>
  );
}
