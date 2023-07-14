import React, { useEffect } from "react";
import Header from "./header";
import Offer from "./offer";
import Video from "./video";
import OfferDetail from "./offerDetail";
import useSWR from "swr";
import { fetcher } from "~/utils/fetch";
import { PRODUCT_ID } from "~/constants/product";
import { useDispatch } from "react-redux";
import { setData } from "~/stores/reducers/product";
import { Loading } from "~/components";

export default function ProductView() {
  const { data, error, isLoading } = useSWR(`product/${PRODUCT_ID}/`, fetcher, {
    shouldRetryOnError: false,
    revalidateOnFocus: false,
  });

  const dispatch = useDispatch();

  useEffect(() => {
    if (isLoading || typeof data === "undefined" || error) return;
    dispatch(setData(data));
  }, [isLoading, data, error]);

  if (isLoading) return <Loading />;


  return (
    <div>
      <Header />
      <Offer />
      <Video />
      <OfferDetail />
    </div>
  );
}
