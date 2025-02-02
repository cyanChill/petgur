const DateStringOptions = {
  year: "numeric",
  month: "long",
  day: "numeric",
  hour: "2-digit",
  minute: "2-digit",
} as const;

export function formatDate(date: string) {
  const dateObj = new Date(date);
  return dateObj.toLocaleString(undefined, DateStringOptions);
}
