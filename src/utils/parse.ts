/**
 * @param date - The date to format.
 * @returns A string representing the date in 'YYYY-MM-DDTHH:mm:ss' format.
 */
export function parseDate(date: Date): string {
  return date.toISOString().slice(0, 19) + "UTC";
}

/**
 * @param _url - The base URL to which query parameters will be appended.
 * @param queryParams - An object representing the query parameters to include in the URL.
 * @returns The full URL with query parameters.
 */
export const parseUrl = (
  endpoint: string,
  baseUrl: string,
  queryParams: Record<string, any>
) => {
  const url = new URL(endpoint, baseUrl);
  for (const [key, value] of Object.entries(queryParams)) {
    url.searchParams.append(key, value);
  }
  return url.toString();
};
