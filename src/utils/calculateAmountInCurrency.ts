import { ExchangeRate } from "../types/exchangeRate";

export const calculateAmountInCurrency = (
  amount: number,
  exchangeRate: ExchangeRate
): string => {
  const rateAsFloat = parseFloat(exchangeRate.rate);
  if (rateAsFloat === 0) {
    throw new Error("Cannot calculate with 0 rate");
  }
  const calculationResult =
    amount * (parseInt(exchangeRate.amount) / rateAsFloat);

  if (isNaN(calculationResult)) {
    throw new Error("Invalid input data");
  }
  return calculationResult.toFixed(3);
};
