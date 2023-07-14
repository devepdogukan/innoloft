import React from "react";
import { useSelector } from "react-redux";

export default function Video() {
  const { data } = useSelector((state) => state.product);

  return (
    <div className="mt-5 bg-[#fff] w-full p-5  rounded-md border-gray-200 border overflow-hidden">
      <p className="mb-5 text-gray-700 font-semibold text-base">Video</p>

      <div className="w-full h-[400px] flex items-center justify-center">
        <div className="max-w-[715px] w-full">
          <div
            className="relative overflow-hidden"
            style={{ paddingTop: "56.25%" }}
          >
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              src={data?.video?.replace("watch?v=", "embed/")}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title="Embedded youtube"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
