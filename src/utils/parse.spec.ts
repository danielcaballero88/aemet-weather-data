import { parseDate, parseUrl } from "./parse";

describe("parseDate", () => {
  it("should format date to 'YYYY-MM-DDTHH:mm:ss'", () => {
    const date = new Date("2023-10-01T12:34:56Z");
    // const formattedDate = date.toISOString().slice(0, 19);
    const formattedDate = parseDate(date);
    expect(formattedDate).toBe("2023-10-01T12:34:56UTC");
  });

  it("should handle dates with milliseconds", () => {
    const date = new Date("2023-10-01T12:34:56.789Z");
    const formattedDate = parseDate(date);
    expect(formattedDate).toBe("2023-10-01T12:34:56UTC");
  });

  it("should handle dates without time zone", () => {
    const date = new Date("2023-10-01T10:34:56+02:00");
    const formattedDate = parseDate(date);
    expect(formattedDate).toBe("2023-10-01T08:34:56UTC");
  });
});

describe("parseUrl", () => {
  it("should append query parameters to the URL", () => {
    const baseUrl = "https://example.com";
    const endpoint = "/api/endpoint";
    const queryParams = { key1: "value1", key2: "value2" };
    const fullUrl = parseUrl(endpoint, baseUrl, queryParams);
    expect(fullUrl).toBe(
      "https://example.com/api/endpoint?key1=value1&key2=value2"
    );
  });

  it("should handle empty query parameters", () => {
    const baseUrl = "https://example.com";
    const endpoint = "/api/endpoint";
    const queryParams: Record<string, any> = {};
    const fullUrl = parseUrl(endpoint, baseUrl, queryParams);
    expect(fullUrl).toBe("https://example.com/api/endpoint");
  });

  it("should handle special characters in query parameters", () => {
    const baseUrl = "https://example.com";
    const endpoint = "/api/endpoint";
    const queryParams = { key: "value with spaces and & special chars" };
    const fullUrl = parseUrl(endpoint, baseUrl, queryParams);
    expect(fullUrl).toBe(
      "https://example.com/api/endpoint?key=value+with+spaces+and+%26+special+chars"
    );
  });

  it("should handle empty endpoint", () => {
    const baseUrl = "https://example.com";
    const endpoint = "";
    const queryParams = { key: "value" };
    const fullUrl = parseUrl(endpoint, baseUrl, queryParams);
    expect(fullUrl).toBe("https://example.com/?key=value");
  });
});
