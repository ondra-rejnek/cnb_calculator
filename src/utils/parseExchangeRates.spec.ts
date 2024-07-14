import { describe, expect, test } from "vitest";
import { ExchangeRates } from "../types/exchangeRate";
import { parseExchangeRatesData } from "./parseExchangeRates";

describe("parseExchangeRatesData", () => {
  const exampleInput = `12 Jul 2024 #134
Country|Currency|Amount|Code|Rate
Australia|dollar|1|AUD|15.763
Brazil|real|1|BRL|4.291
Bulgaria|lev|1|BGN|12.956
Canada|dollar|1|CAD|17.082`;

  test("parse valid exchange rates data", () => {
    const expectedOutput: ExchangeRates = {
      AUD: {
        country: "Australia",
        currency: "dollar",
        amount: "1",
        rate: "15.763",
      },
      BRL: { country: "Brazil", currency: "real", amount: "1", rate: "4.291" },
      BGN: {
        country: "Bulgaria",
        currency: "lev",
        amount: "1",
        rate: "12.956",
      },
      CAD: {
        country: "Canada",
        currency: "dollar",
        amount: "1",
        rate: "17.082",
      },
    };

    const result = parseExchangeRatesData(exampleInput);
    expect(result).toEqual(expectedOutput);
  });

  test("handle missing fields in input data", () => {
    const input = `12 Jul 2024 #134
Country|Currency|Amount|Code|Rate
Australia|dollar|1|AUD|15.763
Invalid|line|missing|fields`;

    const expectedOutput: ExchangeRates = {
      AUD: {
        country: "Australia",
        currency: "dollar",
        amount: "1",
        rate: "15.763",
      },
    };

    const result = parseExchangeRatesData(input);
    expect(result).toEqual(expectedOutput);
  });

  test("handle empty input", () => {
    const input = `12 Jul 2024 #134
Country|Currency|Amount|Code|Rate`;

    const expectedOutput: ExchangeRates = {};

    const result = parseExchangeRatesData(input);
    expect(result).toEqual(expectedOutput);
  });

  test("handle extra whitespace", () => {
    const input = `12 Jul 2024 #134
Country|Currency|Amount|Code|Rate
  Australia  |  dollar  |  1  |  AUD  |  15.763  `;

    const expectedOutput: ExchangeRates = {
      AUD: {
        country: "Australia",
        currency: "dollar",
        amount: "1",
        rate: "15.763",
      },
    };

    const result = parseExchangeRatesData(input);
    expect(result).toEqual(expectedOutput);
  });
});
