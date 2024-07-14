export interface ExchangeRate {
  country: string;
  currency: string;
  amount: string;
  rate: string;
}

export type ExchangeRates = Record<string, ExchangeRate>;
