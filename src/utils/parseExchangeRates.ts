import { ExchangeRates } from "../types/exchangeRate";

export const parseExchangeRatesData = (input: string): ExchangeRates => {
  const lines = input.split("\n").slice(2);
  const result: ExchangeRates = {};
  for (const line of lines) {
    const [country, currency, amount, code, rate] = line.split("|");
    if (code && rate && country && currency && amount) {
      result[code.trim()] = {
        country: country.trim(),
        currency: currency.trim(),
        amount: amount.trim(),
        rate: rate.trim(),
      };
    }
  }
  return result;
};
