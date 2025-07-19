import { parseDate } from "./parse";

describe("parseDate", () => {
  it("should format date to 'YYYY-MM-DDTHH:mm:ss'", () => {
    const date = new Date("2023-10-01T12:34:56Z");
    // const formattedDate = date.toISOString().slice(0, 19);
    const formattedDate = parseDate(date);
    expect(formattedDate).toBe("2023-10-01T12:34:56");
  });

  it("should handle dates with milliseconds", () => {
    const date = new Date("2023-10-01T12:34:56.789Z");
    const formattedDate = parseDate(date);
    expect(formattedDate).toBe("2023-10-01T12:34:56");
  });

  it("should handle dates without time zone", () => {
    const date = new Date("2023-10-01T10:34:56+02:00");
    const formattedDate = parseDate(date);
    expect(formattedDate).toBe("2023-10-01T08:34:56");
  });
});
