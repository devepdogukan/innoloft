import React from "react";
import AccordionDown from "~/icons/AccordionDown";
import Bell from "~/icons/Bell";
import Message from "~/icons/Message";
import user from "~/assets/user.png";

export default function Navigation() {
  return (
    <div className="flex items-center gap-[20px] ">
      <a href="#">
        <Message />
      </a>
      <div className="flex items-center gap-[9px]">
        <p className="text-base	text-[#FFFFFF]">EN</p>
        <AccordionDown />
      </div>
      <a href="#">
        <Bell />
      </a>
      <div className="flex items-center gap-[9px]">
        <img src={user} className="w-[25px] h-[25px] rounded-full" />
        <AccordionDown />
      </div>
    </div>
  );
}
