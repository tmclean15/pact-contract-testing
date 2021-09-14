import axios, { AxiosRequestConfig } from "axios";
import { Data } from "@pact-contract-testing/shared-types";
import { ApiServiceParams } from "./api-service-params";

export function getData({ baseURL }: ApiServiceParams): Promise<Data[]> {
  const config: AxiosRequestConfig = {
    baseURL,
    method: "GET",
    responseType: "json",
    url: "/data",
  };

  return axios.request(config).then((res) => res.data);
}
