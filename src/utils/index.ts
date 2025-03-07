export const formatDate = (timestamp: number | string) => {
  const date = new Date(Number(timestamp));

  const options: Intl.DateTimeFormatOptions = {
    day: "2-digit",
    month: "short",
    year: "numeric",
  };

  return new Intl.DateTimeFormat("en-GB", options).format(date);
};
