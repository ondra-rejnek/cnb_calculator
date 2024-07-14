import { expect, test } from "vitest";
import { calculateAmountInCurrency } from "./calculateAmountInCurrency";
import { ExchangeRate } from "../types/exchangeRate";

const strongCurrency: ExchangeRate = {
  amount: "1",
  country: "Strong",
  currency: "STR",
  rate: "10",
};

const weakCurrency: ExchangeRate = {
  amount: "100",
  country: "Weak",
  currency: "WAK",
  rate: "20",
};

const zeroRateCurrency: ExchangeRate = {
  amount: "50",
  country: "Zero Rate",
  currency: "ZRO",
  rate: "0",
};

const decimalRateCurrency: ExchangeRate = {
  amount: "1",
  country: "Decimal Rate",
  currency: "DEC",
  rate: "0.25",
};

const invalidData: ExchangeRate = {
  amount: "what",
  country: "the",
  currency: "hell",
  rate: "what",
};

test("strong currency", () => {
  expect(calculateAmountInCurrency(1, strongCurrency)).toBe("0.100");
});

test("weak currency", () => {
  expect(calculateAmountInCurrency(100, weakCurrency)).toBe("500.000");
});

test("convert large amount with strong currency", () => {
  expect(calculateAmountInCurrency(1000, strongCurrency)).toBe("100.000");
});

test("convert large amount with weak currency", () => {
  expect(calculateAmountInCurrency(5000, weakCurrency)).toBe("25000.000");
});

test("convert amount with decimal rate", () => {
  expect(calculateAmountInCurrency(10, decimalRateCurrency)).toBe("40.000");
});

test("convert amount with zero rate", () => {
  expect(() => calculateAmountInCurrency(50, zeroRateCurrency)).toThrow();
});

test("invalid currency data", () => {
  expect(() => calculateAmountInCurrency(50, invalidData)).toThrow();
});
