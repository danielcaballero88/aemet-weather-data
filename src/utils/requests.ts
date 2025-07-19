import axios from "axios";
import axiosRetry from "axios-retry";

axiosRetry(axios, { retries: 3 });

const parseUrl = (_url: string, queryParams: Record<string, any>) => {
  const url = new URL(_url);
  for (const [key, value] of Object.entries(queryParams)) {
    url.searchParams.append(key, value);
  }
  return url.toString();
};

const makeGetRequest = async (
  url: string,
  queryParams: Record<string, any>
) => {
  try {
    return await axios.get(parseUrl(url, queryParams).toString());
  } catch (error) {
    console.error("Error fetching data:", error);
    return Promise.reject(error);
  }
};

module.exports = {
  makeGetRequest,
};
