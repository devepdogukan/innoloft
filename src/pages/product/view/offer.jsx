import React from "react";
import { useSelector } from "react-redux";
import { compose, withProps } from "recompose";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
} from "react-google-maps";

const Map = compose(
  withProps({
    googleMapURL: `https://maps.googleapis.com/maps/api/js?key=${
      import.meta.env.VITE_MAP_API_KEY
    }&v=3.exp&libraries=geometry,drawing,places`,
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `200px` }} />,
    mapElement: <div style={{ height: `100%` }} />,
  }),
  withScriptjs,
  withGoogleMap
)(({ company }) => (
  <GoogleMap
    defaultZoom={8}
    defaultCenter={{
      lat: +company?.address?.latitude ?? 40.193298,
      lng: +company?.address?.longitude ?? 29.074202,
    }}
  >
    <Marker
      position={{
        lat: +company?.address?.latitude,
        lng: +company?.address?.longitude,
      }}
    />
  </GoogleMap>
));

import Location from "~/icons/Location";
import Patent from "~/icons/Patent";

export default function Offer() {
  const { data } = useSelector((state) => state.product);
  const company = data?.company;
  const user = data?.user;


  return (
    <div className="w-full bg-[#fff] grid xl:grid-cols-[0.95fr_0.5fr] mt-[20px] rounded-md border-gray-200 border overflow-hidden">
      <div className="relative">
        <img src={data?.picture} className="w-full h-[300px]" />
        <div className="xl:p-5 max-xl:p-2.5">
          <p className="text-gray-700 font-semibold text-base mb-2.5">
            {data?.name}
          </p>
          <p
            className="text-gray-500 font-normal text-sm"
            dangerouslySetInnerHTML={{ __html: data?.description }}
          ></p>
        </div>
        <div className="absolute bg-[#FFF] top-0 left-0 h-10 flex items-center rounded-ee-md overflow-hidden">
          <div className="w-10  flex items-center h-full justify-center bg-[#272E71] rounded-ee-md">
            <Patent />
          </div>
          <div className="bg-[#FFF] h-full flex place-items-center px-2.5 ">
            <p className="text-gray-700  font-semibold text-base">Patent</p>
          </div>
        </div>
      </div>
      <div className="border-l border-gray-200 xl:p-5 max-xl:p-2.5">
        <p className="text-gray-700 font-semibold text-base mb-5">Offered By</p>
        <img src={company?.logo} className="w-[200px] h-[36px] mb-2.5" />

        <div className="flex items-center gap-[10px]">
          <img
            src={user?.profilePicture}
            className="rounded-full w-[60px] h-[60px]"
          />
          <div className="flex flex-col justify-center">
            <p className="text-gray-700 font-semibold text-sm mb-[5px]">
              {`${user?.firstName} ${user?.lastName}`}
            </p>
            <p className="text-gray-700 font-normal text-sm">{company?.name}</p>
          </div>
        </div>

        <div className="mt-5 py-2.5 flex gap-[5px]">
          <div className="min-w-[16px] h-4">
            <Location />
          </div>
          <div>
            <p className="text-gray-500 text-sm font-normal">
              {company?.address?.street} {company?.address?.house}
            </p>
            <p className="text-gray-500 text-sm font-normal">
              {company?.address?.zipCode} {company?.address?.city?.name},
              {company?.address?.country?.name}
            </p>
          </div>
        </div>
        <div className="h-[200px]">
          <Map key="map" company={company} />
        </div>
      </div>
    </div>
  );
}
