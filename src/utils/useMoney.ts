export const formatToCurrency = (amount: number): string => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USA",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(amount);
};
