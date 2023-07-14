import React, { useEffect, useState } from "react";
import { Chip } from "~/components";
import Clock from "~/icons/Clock";
import Investor from "~/icons/Investor";
import Strategy from "~/icons/Strategy";
import Wheel from "~/icons/Wheel";
import { useSelector } from "react-redux";
import AsyncSelect from "react-select/async";
import { ProductService } from "~/services";

export default function OfferDetail() {
  const { data } = useSelector((state) => state.product);
  const trl = data?.trl;
  const [value, setValue] = useState();

  useEffect(() => {
    setValue({
      value: trl?.id?.toString(),
      label: trl?.name,
    });
  }, [trl?.id]);

  const promiseOptions = async () => {
    const { data } = await ProductService.trl();
    return Array.isArray(data)
      ? data.map((el) => ({ value: el.id, label: el.name }))
      : [];
  };

  const onChange = (option) => setValue(option);

  return (
    <div className="mt-5 bg-[#fff] w-full  xl:p-5 max-xl:p-2.5 rounded-md border-gray-200 border ">
      <p className="mb-5 text-gray-700 font-semibold text-base">
        Offer details
      </p>
      <div className="mt-5 grid  md:grid-cols-[1fr_1fr] gap-x-10 gap-y-5">
        <div className="flex items-start">
          <Wheel />
          <div className="ml-1.5 ">
            <p className="font-normal text-base text-gray-500">Technology</p>
            <div className="flex flex-wrap gap-[5px] mt-2.5">
              {Array.isArray(data?.categories) &&
                data?.categories.map((category, i) => (
                  <Chip key={i}>{category.name}</Chip>
                ))}
            </div>
          </div>
        </div>
        <div className="flex items-start">
          <Strategy />
          <div className="ml-1.5 ">
            <p className="font-normal text-base text-gray-500">
              Business Model
            </p>
            <div className="flex flex-wrap gap-[5px] mt-2.5">
              {Array.isArray(data?.businessModels) &&
                data?.businessModels.map((businessModel, i) => (
                  <Chip key={i}>{businessModel.name}</Chip>
                ))}
            </div>
          </div>
        </div>
        <div className="flex items-start">
          <Clock />
          <div className="ml-1.5 w-full">
            <p className="font-normal text-base text-gray-500">TRL</p>
            <div className="mt-2.5 w-full">
              <AsyncSelect
                cacheOptions
                menuPlacement="top"
                name="colors"
                defaultOptions
                value={value}
                onChange={onChange}
                loadOptions={promiseOptions}
              />
            </div>
          </div>
        </div>

        <div className="flex items-start">
          <Investor />
          <div className="ml-1.5 ">
            <p className="font-normal text-base text-gray-500">Costs</p>
            <div className="flex flex-wrap gap-[5px] mt-2.5">
              <Chip>{data?.investmentEffort}</Chip>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
