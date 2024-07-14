import { ExchangeRate } from "../types/exchangeRate";

export const calculateAmountInCurrency = (
  amount: number,
  exchangeRate: ExchangeRate
): string => {
  const calculationResult =
    amount * (parseInt(exchangeRate.amount) / parseFloat(exchangeRate.rate));
  return calculationResult.toFixed(3);
};
