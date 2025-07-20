import axios from "axios";
import axiosRetry from "axios-retry";

import { parseUrl } from "./parse";

// axiosRetry(axios, { retries: 3 });

export const makeGetRequest = async (
  endpoint: string,
  baseUrl: string,
  queryParams: Record<string, any>,
  headers: Record<string, string> = {}
) => {
  try {
    console.log(
      "Making GET request to:",
      parseUrl(endpoint, baseUrl, queryParams)
    );
    const __url = parseUrl(endpoint, baseUrl, queryParams);
    const _axios = axios.get(__url, { headers });
    return _axios;
  } catch (error) {
    console.error("Error fetching data:", error);
    return Promise.reject(error);
  }
};
