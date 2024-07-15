import { describe, expect, test } from "vitest";
import { fireEvent, render, waitFor } from "@testing-library/react";
import ExchangeForm from "./ExchangeForm";
import { ExchangeRates } from "../../types/exchangeRate";

const MOCK_RATES: ExchangeRates = {
  AUD: {
    amount: "1",
    country: "Australia",
    currency: "dollar",
    rate: "15.763",
  },
  USD: {
    amount: "1",
    country: "USA",
    currency: "dollar",
    rate: "23.267",
  },
};

describe("ExchangeForm", () => {
  const { getByTestId } = render(<ExchangeForm exchangeRates={MOCK_RATES} />);
  const amountField = getByTestId("amountCzk");
  const convertBtn = getByTestId("convertBtn");
  const selectField = getByTestId("code");

  test("result is displayed after clicking convert btn", async () => {
    fireEvent.change(amountField, { target: { value: "20" } });
    fireEvent.change(selectField, {
      target: { value: "USD" },
    });
    fireEvent.click(convertBtn);

    await waitFor(() => {
      const result = getByTestId("resultDisplay");
      expect(result).toBeDefined();
    });
  });

  test("converts amount correctly for AUD", async () => {
    fireEvent.change(amountField, { target: { value: "1" } });
    fireEvent.change(selectField, {
      target: { value: "AUD" },
    });
    fireEvent.click(convertBtn);
    await waitFor(() => {
      const result = getByTestId("resultDisplay");
      expect(result.textContent).toBe("0.063 AUD");
    });
  });

  test("handles invalid amount input", async () => {
    fireEvent.change(amountField, { target: { value: "-1" } });
    fireEvent.change(selectField, {
      target: { value: "AUD" },
    });
    fireEvent.click(convertBtn);
    expect(() => getByTestId("resultDisplay")).toThrow();
  });
});
