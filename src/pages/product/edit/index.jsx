import React, { useEffect } from "react";
import Header from "./header";
import Offer from "./offer";
import { fetcher } from "~/utils/fetch";
import { PRODUCT_ID } from "~/constants/product";
import { useDispatch } from "react-redux";
import { setData } from "~/stores/reducers/product";
import useSWR from "swr";
import { Loading } from "~/components";
import Video from "./video";
import OfferDetail from "./offerDetail";

export default function ProductEditView() {
  const { data, error, isLoading } = useSWR(`product/${PRODUCT_ID}/`, fetcher, {
    shouldRetryOnError: false,
    revalidateOnFocus: false,
  });

  const dispatch = useDispatch();

  useEffect(() => {
    if (isLoading || typeof data === "undefined") return;
    dispatch(setData(data));
  }, [isLoading, data]);

  if (isLoading || !data) return <Loading />;

  
  return (
    <div>
      <Header />
      <Offer />
      <Video />
      <OfferDetail />
    </div>
  );
}
