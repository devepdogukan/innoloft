import instance from "~/request";

export const fetcher = (...args) => instance(...args).then(res => res.data)

