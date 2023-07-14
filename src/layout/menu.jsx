import React from "react";
import user from "~/assets/user.png";
import AccordionDown from "~/icons/AccordionDown";
import Home from "~/icons/Home";
import Members from "~/icons/Members";
import Organization from "~/icons/Organization";

const items = [
  {
    icon: Home,
    title: "Home",
  },
  {
    icon: Members,
    title: "Members",
  },
  {
    icon: Organization,
    title: "Organizations",
    hasMore: true,
  },
];

export default function Menu() {
  return (
    <div className="min-w-[280px] mr-[30px] xl:block max-xl:hidden">
      <div className="flex items-center gap-[15px]">
        <img src={user} className="rounded-full w-[70px] h-[70px]" />
        <div className="py-[13.5px]">
          <p className="text-gray-700 font-semibold text-lg">Sven Pietsch</p>
          <p className="text-gray-700 font-normal text-sm">Innoloft GmbH</p>
        </div>
      </div>
      <div className="flex mt-2.5 gap-2.5 flex-col">
        {items.map((item, i) => (
          <a
            key={i}
            href="#"
            className="flex p-[10px] items-center gap-[13px] hover:bg-gray-200 rounded-md"
          >
            <item.icon />
            <p className="text-base font-normal text-gray-700">{item.title}</p>
            {item.hasMore && (
              <div className="ml-auto text-gray-700">
                <AccordionDown fill="#374151" />
              </div>
            )}
          </a>
        ))}
      </div>
    </div>
  );
}
