/**
 * @param date - The date to format.
 * @returns A string representing the date in 'YYYY-MM-DDTHH:mm:ss' format.
 */
export function parseDate(date: Date): string {
  return date.toISOString().slice(0, 19);
}
